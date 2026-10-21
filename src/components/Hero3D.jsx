import { Suspense, useLayoutEffect, useMemo, useRef } from 'react';
import { Canvas, useThree } from '@react-three/fiber';
import { Environment, Lightformer, useGLTF } from '@react-three/drei';
import { ACESFilmicToneMapping, PCFShadowMap, SRGBColorSpace } from 'three';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const MODEL_PATH = '/models/ux.glb';
const CAMERA_POSITION = [-3.6695, 3.5433, 6.9168];
const CAMERA_TARGET = [0.8657, 2.0398, -0.7461];
const degreesToRadians = (degrees) => degrees * (Math.PI / 180);

const MATERIAL_SETTINGS = {
  main: {
    color: '#d7d7dc',
    metalness: 0,
    roughness: 0.48,
    envMapIntensity: 0.7,
  },
  blue: { metalness: 0.02, roughness: 0.28, envMapIntensity: 1.15 },
  peach: { metalness: 0.01, roughness: 0.34, envMapIntensity: 1.05 },
  purple: { metalness: 0.02, roughness: 0.3, envMapIntensity: 1.1 },
};

gsap.registerPlugin(ScrollTrigger);

function StaticCamera() {
  const { camera, invalidate } = useThree();

  useLayoutEffect(() => {
    camera.position.set(...CAMERA_POSITION);
    camera.lookAt(...CAMERA_TARGET);
    camera.updateProjectionMatrix();
    camera.updateMatrixWorld();
    invalidate();
  }, [camera, invalidate]);

  return null;
}

function cloneForHero(source, settings) {
  const object = source.clone();
  object.material = source.material.clone();
  object.material.name = `${source.material.name}-hero`;
  object.material.metalness = settings.metalness;
  object.material.roughness = settings.roughness;
  object.material.envMapIntensity = settings.envMapIntensity;
  if (settings.color) object.material.color.set(settings.color);
  object.material.needsUpdate = true;
  object.castShadow = true;
  object.receiveShadow = true;

  return {
    object,
    original: {
      position: source.position.clone(),
      rotation: source.rotation.clone(),
      scale: source.scale.clone(),
    },
  };
}

function setQuadraticPosition(position, start, control, progress) {
  const remaining = 1 - progress;
  const startWeight = remaining * remaining;
  const controlWeight = 2 * remaining * progress;

  position.set(
    (startWeight * start.x) + (controlWeight * control.x),
    (startWeight * start.y) + (controlWeight * control.y),
    (startWeight * start.z) + (controlWeight * control.z),
  );
}

function HeroSculpture() {
  const masterGroup = useRef();
  const mainScrollGroup = useRef();
  const blueScrollGroup = useRef();
  const peachScrollGroup = useRef();
  const purpleScrollGroup = useRef();
  const mainIdleGroup = useRef();
  const blueIdleGroup = useRef();
  const peachIdleGroup = useRef();
  const purpleIdleGroup = useRef();
  const mainEntranceGroup = useRef();
  const blueEntranceGroup = useRef();
  const peachEntranceGroup = useRef();
  const purpleEntranceGroup = useRef();
  const { nodes } = useGLTF(MODEL_PATH);
  const invalidate = useThree((state) => state.invalidate);

  const sculpture = useMemo(() => ({
    main: cloneForHero(nodes.Main_form, MATERIAL_SETTINGS.main),
    blue: cloneForHero(nodes.Blue_Sphere, MATERIAL_SETTINGS.blue),
    peach: cloneForHero(nodes.Peach_Sphere, MATERIAL_SETTINGS.peach),
    purple: cloneForHero(nodes.Purple_Sphere, MATERIAL_SETTINGS.purple),
  }), [nodes]);

  useLayoutEffect(() => {
    Object.values(sculpture).forEach(({ object, original }) => {
      object.position.copy(original.position);
      object.rotation.copy(original.rotation);
      object.scale.copy(original.scale);
      object.updateMatrix();
    });

    invalidate();
  }, [invalidate, sculpture]);

  useLayoutEffect(() => {
    const hero = document.querySelector('.hero');
    const entrance = {
      main: mainEntranceGroup.current,
      blue: blueEntranceGroup.current,
      peach: peachEntranceGroup.current,
      purple: purpleEntranceGroup.current,
    };
    const scroll = {
      main: mainScrollGroup.current,
      blue: blueScrollGroup.current,
      peach: peachScrollGroup.current,
      purple: purpleScrollGroup.current,
    };

    const idle = {
      main: mainIdleGroup.current,
      blue: blueIdleGroup.current,
      peach: peachIdleGroup.current,
      purple: purpleIdleGroup.current,
    };

    if (!hero || Object.values(idle).some((group) => !group)
      || Object.values(entrance).some((group) => !group)
      || Object.values(scroll).some((group) => !group)) return undefined;

    const media = gsap.matchMedia();

    media.add('(prefers-reduced-motion: no-preference)', () => {
      gsap.set(entrance.main.position, { x: -0.03, y: -0.18, z: -0.08 });
      gsap.set(entrance.main.rotation, {
        x: degreesToRadians(-5),
        y: degreesToRadians(-15),
        z: degreesToRadians(-2),
      });
      gsap.set(entrance.main.scale, { x: 0.9, y: 0.9, z: 0.9 });

      gsap.set(entrance.blue.position, { x: -0.25, y: 0.38, z: -0.28 });
      gsap.set(entrance.blue.scale, { x: 0.82, y: 0.82, z: 0.82 });
      gsap.set(entrance.peach.position, { x: 0.22, y: 0.16, z: -0.16 });
      gsap.set(entrance.peach.scale, { x: 0.8, y: 0.8, z: 0.8 });
      gsap.set(entrance.purple.position, { x: -0.9, y: 0.75, z: 0 });
      gsap.set(entrance.purple.scale, { x: 1, y: 1, z: 1 });
      invalidate();

      const blueCurve = { progress: 0 };
      const peachCurve = { progress: 0 };
      const purpleCurve = { progress: 0 };

      const entranceTimeline = gsap.timeline({
        defaults: { ease: 'power3.out' },
        onUpdate: invalidate,
        onComplete: invalidate,
      });

      entranceTimeline
        .to(entrance.main.position, { x: 0, y: 0, z: 0, duration: 1.65 }, 0)
        .to(entrance.main.rotation, { x: 0, y: 0, z: 0, duration: 1.65 }, 0)
        .to(entrance.main.scale, { x: 1, y: 1, z: 1, duration: 1.65 }, 0)
        .to(blueCurve, {
          progress: 1,
          duration: 1.22,
          ease: 'power3.out',
          onUpdate: () => setQuadraticPosition(
            entrance.blue.position,
            { x: -0.25, y: 0.38, z: -0.28 },
            { x: -0.12, y: 0.08, z: -0.16 },
            blueCurve.progress,
          ),
        }, 0)
        .to(entrance.blue.scale, { x: 1, y: 1, z: 1, duration: 1.22 }, 0)
        .to(peachCurve, {
          progress: 1,
          duration: 1.12,
          ease: 'power3.out',
          onUpdate: () => setQuadraticPosition(
            entrance.peach.position,
            { x: 0.22, y: 0.16, z: -0.16 },
            { x: 0.13, y: -0.035, z: -0.08 },
            peachCurve.progress,
          ),
        }, 0)
        .to(entrance.peach.scale, { x: 1, y: 1, z: 1, duration: 1.12 }, 0)
        .to(purpleCurve, {
          progress: 1,
          duration: 1.3,
          ease: 'power3.out',
          onUpdate: () => setQuadraticPosition(
            entrance.purple.position,
            { x: -0.9, y: 0.75, z: 0 },
            { x: -0.42, y: 0.38, z: 0 },
            purpleCurve.progress,
          ),
        }, 0);

      const scrollTimeline = gsap.timeline({
        defaults: { duration: 1, ease: 'none' },
        onUpdate: invalidate,
        scrollTrigger: {
          trigger: hero,
          start: 'top top',
          end: '+=560',
          scrub: 0.8,
          invalidateOnRefresh: true,
        },
      });

      scrollTimeline
        .to(scroll.main.rotation, {
          x: degreesToRadians(7),
          y: degreesToRadians(26),
          z: degreesToRadians(2),
        }, 0)
        .to(scroll.main.position, { x: 0.04, y: 0.1, z: 0 }, 0)
        .to(scroll.blue.position, {
          keyframes: [
            { x: -0.16, y: 0.24, z: -0.14, duration: 0.46 },
            { x: -0.36, y: 0.46, z: -0.3, duration: 0.54 },
          ],
        }, 0)
        .to(scroll.peach.position, {
          keyframes: [
            { x: -0.16, y: 0.07, z: 0, duration: 0.55 },
            { x: -0.38, y: 0.18, z: 0, duration: 0.45 },
          ],
        }, 0)
        .to(scroll.purple.position, {
          keyframes: [
            { x: 0.13, y: -0.14, z: 0.19, duration: 0.42 },
            { x: 0.32, y: -0.34, z: 0.44, duration: 0.58 },
          ],
        }, 0);

      const idleFloats = [
        gsap.to(idle.main.position, {
          y: 0.065,
          duration: 2.7,
          delay: 1.65,
          ease: 'sine.inOut',
          repeat: -1,
          yoyo: true,
          onUpdate: invalidate,
        }),
        gsap.to(idle.blue.position, {
          y: 0.11,
          duration: 1.9,
          delay: 1.72,
          ease: 'sine.inOut',
          repeat: -1,
          yoyo: true,
          onUpdate: invalidate,
        }),
        gsap.to(idle.peach.position, {
          y: 0.075,
          duration: 2.35,
          delay: 1.88,
          ease: 'sine.inOut',
          repeat: -1,
          yoyo: true,
          onUpdate: invalidate,
        }),
        gsap.to(idle.purple.position, {
          y: 0.09,
          duration: 2.15,
          delay: 1.78,
          ease: 'sine.inOut',
          repeat: -1,
          yoyo: true,
          onUpdate: invalidate,
        }),
      ];

      ScrollTrigger.refresh();

      return () => {
        entranceTimeline.kill();
        idleFloats.forEach((tween) => tween.kill());
        scrollTimeline.scrollTrigger?.kill();
        scrollTimeline.kill();
        Object.values(idle).forEach((group) => group.position.set(0, 0, 0));
        Object.values(entrance).forEach((group) => {
          group.position.set(0, 0, 0);
          group.rotation.set(0, 0, 0);
          group.scale.set(1, 1, 1);
        });
        invalidate();
      };
    });

    return () => {
      media.revert();
      invalidate();
    };
  }, [invalidate]);

  return (
    <group
      ref={masterGroup}
      name="HeroSculptureGroup"
      position={[0, 0, 0]}
      rotation={[0, 0, 0]}
      scale={1.02}
    >
      <group ref={mainScrollGroup} name="MainFormScrollLayer">
        <group ref={mainIdleGroup} name="MainFormIdleFloatLayer">
          <group ref={mainEntranceGroup} name="MainFormEntranceLayer">
            <primitive object={sculpture.main.object} />
          </group>
        </group>
      </group>
      <group ref={blueScrollGroup} name="BlueSphereScrollLayer">
        <group ref={blueIdleGroup} name="BlueSphereIdleFloatLayer">
          <group ref={blueEntranceGroup} name="BlueSphereEntranceLayer">
            <primitive object={sculpture.blue.object} />
          </group>
        </group>
      </group>
      <group ref={peachScrollGroup} name="PeachSphereScrollLayer">
        <group ref={peachIdleGroup} name="PeachSphereIdleFloatLayer">
          <group ref={peachEntranceGroup} name="PeachSphereEntranceLayer">
            <primitive object={sculpture.peach.object} />
          </group>
        </group>
      </group>
      <group ref={purpleScrollGroup} name="PurpleSphereScrollLayer">
        <group ref={purpleIdleGroup} name="PurpleSphereIdleFloatLayer">
          <group ref={purpleEntranceGroup} name="PurpleSphereEntranceLayer">
            <primitive object={sculpture.purple.object} />
          </group>
        </group>
      </group>
    </group>
  );
}

function StudioEnvironment() {
  return (
    <Environment resolution={128}>
      <Lightformer
        form="rect"
        color="#ffffff"
        intensity={1.25}
        position={[0, 5, 5]}
        scale={[5, 5, 1]}
      />
      <Lightformer
        form="rect"
        color="#dce8ff"
        intensity={0.72}
        position={[-5, 1, 1]}
        rotation={[0, Math.PI / 2, 0]}
        scale={[3, 5, 1]}
      />
      <Lightformer
        form="rect"
        color="#ffe8df"
        intensity={0.5}
        position={[3, 2, -4]}
        rotation={[0, Math.PI, 0]}
        scale={[3, 4, 1]}
      />
    </Environment>
  );
}

export default function Hero3D() {
  return (
    <div className="hero-model" aria-hidden="true">
      <div className="hero-model-stage">
        <Canvas
          camera={{ position: CAMERA_POSITION, fov: 27.9906, near: 0.1, far: 50 }}
          dpr={[1, 1.5]}
          frameloop="demand"
          gl={{ alpha: true, antialias: true, powerPreference: 'high-performance' }}
          onCreated={({ gl }) => {
            gl.outputColorSpace = SRGBColorSpace;
            gl.toneMapping = ACESFilmicToneMapping;
            gl.toneMappingExposure = 1.35;
            gl.shadowMap.type = PCFShadowMap;
          }}
          shadows
        >
          <StaticCamera />
          <ambientLight intensity={0.56} />
          <hemisphereLight args={['#ffffff', '#e6e7ed', 0.8]} />
          <directionalLight
            castShadow
            color="#fffaf6"
            position={CAMERA_POSITION}
            intensity={1.85}
            shadow-bias={-0.0005}
            shadow-mapSize={[1024, 1024]}
            shadow-radius={10}
          />
          <directionalLight color="#e4edff" position={[-4, 4, 2]} intensity={0.95} />
          <directionalLight color="#fff0e8" position={[4, 5, -4]} intensity={0.82} />
          <Suspense fallback={null}>
            <StudioEnvironment />
            <HeroSculpture />
          </Suspense>
        </Canvas>
      </div>
    </div>
  );
}

useGLTF.preload(MODEL_PATH);
