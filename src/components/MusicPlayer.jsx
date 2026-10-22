import { useEffect, useMemo, useRef, useState } from 'react';

let youtubeApiPromise;

function loadYouTubeApi() {
  if (window.YT?.Player) return Promise.resolve(window.YT);
  if (youtubeApiPromise) return youtubeApiPromise;

  youtubeApiPromise = new Promise((resolve) => {
    const previousReadyHandler = window.onYouTubeIframeAPIReady;

    window.onYouTubeIframeAPIReady = () => {
      previousReadyHandler?.();
      resolve(window.YT);
    };

    if (!document.querySelector('script[data-youtube-player-api]')) {
      const script = document.createElement('script');
      script.src = 'https://www.youtube.com/iframe_api';
      script.async = true;
      script.dataset.youtubePlayerApi = 'true';
      document.head.appendChild(script);
    }
  });

  return youtubeApiPromise;
}

function formatTime(seconds) {
  if (!Number.isFinite(seconds) || seconds < 0) return '0:00';
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = Math.floor(seconds % 60).toString().padStart(2, '0');
  return `${minutes}:${remainingSeconds}`;
}

function PreviousIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24">
      <path d="M6 5V19M19 6L9 12L19 18V6Z" />
    </svg>
  );
}

function NextIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24">
      <path d="M18 5V19M5 6L15 12L5 18V6Z" />
    </svg>
  );
}

function PlayIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24">
      <path d="M8 5L19 12L8 19V5Z" />
    </svg>
  );
}

function PauseIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24">
      <path d="M7 5H10V19H7V5ZM14 5H17V19H14V5Z" />
    </svg>
  );
}

export default function MusicPlayer({ tracks }) {
  const playerHostRef = useRef(null);
  const playerRef = useRef(null);
  const trackIndexRef = useRef(0);
  const [trackIndex, setTrackIndex] = useState(0);
  const [isReady, setIsReady] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [hasPlaybackError, setHasPlaybackError] = useState(false);

  const activeTrack = tracks[trackIndex];
  const previousTrack = tracks[(trackIndex - 1 + tracks.length) % tracks.length];
  const nextTrack = tracks[(trackIndex + 1) % tracks.length];
  const progress = useMemo(
    () => (duration ? Math.min((currentTime / duration) * 100, 100) : 0),
    [currentTime, duration],
  );
  const progressPoint = useMemo(() => {
    const t = progress / 100;
    return {
      x: 20 + (860 * t),
      y: 20 + (230 * t * (1 - t)),
    };
  }, [progress]);

  useEffect(() => {
    let cancelled = false;

    loadYouTubeApi().then((YT) => {
      if (cancelled || !playerHostRef.current) return;

      playerRef.current = new YT.Player(playerHostRef.current, {
        width: '1',
        height: '1',
        videoId: tracks[0].videoId,
        playerVars: {
          autoplay: 0,
          controls: 0,
          disablekb: 1,
          fs: 0,
          playsinline: 1,
          rel: 0,
        },
        events: {
          onReady: (event) => {
            if (cancelled) return;
            setIsReady(true);
            setDuration(event.target.getDuration() || 0);
          },
          onStateChange: (event) => {
            if (cancelled) return;
            const state = event.data;
            setIsPlaying(state === YT.PlayerState.PLAYING);
            setDuration(event.target.getDuration() || 0);

            const finishedVideoId = event.target.getVideoData?.().video_id;
            const activeVideoId = tracks[trackIndexRef.current].videoId;

            if (state === YT.PlayerState.ENDED && finishedVideoId === activeVideoId) {
              const nextIndex = (trackIndexRef.current + 1) % tracks.length;
              trackIndexRef.current = nextIndex;
              setTrackIndex(nextIndex);
              setCurrentTime(0);
              event.target.loadVideoById(tracks[nextIndex].videoId);
            }
          },
          onError: () => {
            if (!cancelled) setHasPlaybackError(true);
          },
        },
      });
    });

    return () => {
      cancelled = true;
      playerRef.current?.destroy?.();
      playerRef.current = null;
    };
  }, [tracks]);

  useEffect(() => {
    if (!isReady) return undefined;

    const syncTimeline = () => {
      const player = playerRef.current;
      if (!player?.getCurrentTime) return;
      setCurrentTime(player.getCurrentTime() || 0);
      setDuration(player.getDuration() || 0);
    };

    syncTimeline();
    const timer = window.setInterval(syncTimeline, isPlaying ? 250 : 1000);
    return () => window.clearInterval(timer);
  }, [isPlaying, isReady]);

  const selectTrack = (nextIndex, forcePlay = isPlaying) => {
    const player = playerRef.current;
    const normalizedIndex = (nextIndex + tracks.length) % tracks.length;

    trackIndexRef.current = normalizedIndex;
    setTrackIndex(normalizedIndex);
    setCurrentTime(0);
    setDuration(0);
    setHasPlaybackError(false);

    if (!player || !isReady) return;
    if (forcePlay) player.loadVideoById(tracks[normalizedIndex].videoId);
    else player.cueVideoById(tracks[normalizedIndex].videoId);
  };

  const togglePlayback = () => {
    if (!isReady || !playerRef.current) return;
    setHasPlaybackError(false);
    if (isPlaying) playerRef.current.pauseVideo();
    else playerRef.current.playVideo();
  };

  const handlePrevious = () => {
    if (currentTime > 3 && playerRef.current) {
      playerRef.current.seekTo(0, true);
      setCurrentTime(0);
      return;
    }
    selectTrack(trackIndex - 1);
  };

  const handleSeek = (event) => {
    const nextTime = Number(event.target.value);
    playerRef.current?.seekTo?.(nextTime, true);
    setCurrentTime(nextTime);
  };

  const seekFromArcPointer = (event) => {
    if (!duration) return;
    const bounds = event.currentTarget.getBoundingClientRect();
    const pointerX = ((event.clientX - bounds.left) / bounds.width) * 900;
    const nextProgress = Math.min(Math.max((pointerX - 20) / 860, 0), 1);
    const nextTime = nextProgress * duration;
    playerRef.current?.seekTo?.(nextTime, true);
    setCurrentTime(nextTime);
  };

  const handleArcPointerDown = (event) => {
    event.currentTarget.setPointerCapture(event.pointerId);
    seekFromArcPointer(event);
  };

  const handleArcPointerMove = (event) => {
    if (event.buttons === 1) seekFromArcPointer(event);
  };

  return (
    <div className="about-music-player">
      <div className="about-music-youtube-host" ref={playerHostRef} aria-hidden="true" />

      <div className="about-music-art-stage" aria-live="polite">
        <button
          className="about-music-side-art about-music-side-art--previous"
          type="button"
          onClick={() => selectTrack(trackIndex - 1)}
          aria-label={`Play previous song, ${previousTrack.title}`}
        >
          <img src={previousTrack.artwork} alt="" />
        </button>

        <button
          className="about-music-active-art"
          type="button"
          onClick={togglePlayback}
          aria-label={isPlaying ? `Pause ${activeTrack.title}` : `Play ${activeTrack.title}`}
        >
          <img src={activeTrack.artwork} alt={`${activeTrack.title} cover artwork`} />
          <span className="about-music-cover-control" aria-hidden="true">
            {isPlaying ? <PauseIcon /> : <PlayIcon />}
          </span>
        </button>

        <button
          className="about-music-side-art about-music-side-art--next"
          type="button"
          onClick={() => selectTrack(trackIndex + 1)}
          aria-label={`Play next song, ${nextTrack.title}`}
        >
          <img src={nextTrack.artwork} alt="" />
        </button>
      </div>

      <div className="about-music-timeline">
        <span>{formatTime(currentTime)}</span>
        <div className="about-music-arc-scrubber">
          <svg
            viewBox="0 0 900 112"
            role="presentation"
            onPointerDown={handleArcPointerDown}
            onPointerMove={handleArcPointerMove}
          >
            <path className="about-music-arc-track" d="M20 20 Q450 135 880 20" />
            <path
              className="about-music-arc-progress"
              d="M20 20 Q450 135 880 20"
              pathLength="100"
              strokeDasharray={`${progress} 100`}
            />
            <circle
              className="about-music-arc-thumb"
              cx={progressPoint.x}
              cy={progressPoint.y}
              r="7"
            />
          </svg>
          <input
            className="about-music-native-slider"
            type="range"
            min="0"
            max={duration || 0}
            step="0.1"
            value={Math.min(currentTime, duration || 0)}
            onChange={handleSeek}
            disabled={!isReady}
            aria-label={`Seek through ${activeTrack.title}`}
          />
        </div>
        <span>{formatTime(duration)}</span>
      </div>

      <div className="about-music-metadata">
        <p className="about-music-title">{activeTrack.title}</p>
        <p className="about-music-artist">{activeTrack.artist}</p>
      </div>

      <div className="about-music-buttons">
        <button type="button" onClick={handlePrevious} aria-label="Previous song">
          <PreviousIcon />
        </button>
        <button
          className="about-music-play"
          type="button"
          onClick={togglePlayback}
          disabled={!isReady}
          aria-label={isPlaying ? 'Pause song' : 'Play song'}
        >
          {isPlaying ? <PauseIcon /> : <PlayIcon />}
        </button>
        <button type="button" onClick={() => selectTrack(trackIndex + 1)} aria-label="Next song">
          <NextIcon />
        </button>
      </div>

      {hasPlaybackError && (
        <a
          className="about-music-error"
          href={activeTrack.url}
          target="_blank"
          rel="noreferrer"
        >
          Play on YouTube
        </a>
      )}
    </div>
  );
}
