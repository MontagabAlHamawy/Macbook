import MacbookModel14 from "@/models/Macbook-14";
import MacbookModel16 from "@/models/Macbook-16";
import { useGSAP } from "@gsap/react";
import { PresentationControls } from "@react-three/drei";
import gsap from "gsap";
import { useRef } from "react";
import type * as THREE from "three";

const ANIMATION_DURATION = 1;
const OFFSET_DISTANCE = 5;

type ModelSwitcherProps = {
  scale: number;
  isMobile: boolean;
};

const fadeMeshes = (group: THREE.Group | null, opacity: number) => {
  if (!group) return;

  group.traverse((child) => {
    if (!("isMesh" in child) || !child.isMesh) return;
    const mesh = child as THREE.Mesh;

    const materials = Array.isArray(mesh.material)
      ? mesh.material
      : [mesh.material];

    materials.forEach((material) => {
      material.transparent = true;
      gsap.to(material, { opacity, duration: ANIMATION_DURATION });
    });
  });
};

const moveGroup = (group: THREE.Group | null, x: number) => {
  if (!group) return;
  gsap.to(group.position, { x, duration: ANIMATION_DURATION });
};

export default function ModelSwitcher({ scale, isMobile }: ModelSwitcherProps) {
  const smallMacbookRef = useRef<THREE.Group | null>(null);
  const largeMacbookRef = useRef<THREE.Group | null>(null);

  const showLargeMacbook = scale === 0.08 || scale === 0.05;

  useGSAP(() => {
    if (showLargeMacbook) {
      moveGroup(smallMacbookRef.current, -OFFSET_DISTANCE);
      moveGroup(largeMacbookRef.current, 0);
      fadeMeshes(smallMacbookRef.current, 0);
      fadeMeshes(largeMacbookRef.current, 1);
      return;
    }

    moveGroup(largeMacbookRef.current, OFFSET_DISTANCE);
    moveGroup(smallMacbookRef.current, 0);
    fadeMeshes(largeMacbookRef.current, 0);
    fadeMeshes(smallMacbookRef.current, 1);
  }, [scale]);

  const controlsConfig = {
    snap: true,
    speed: 1,
    zoom: 1,
    polar: [-Infinity, Infinity] as [number, number],
    config: { mass: 1, tension: 170, friction: 26 },
  };

  return (
    <>
      <PresentationControls {...controlsConfig}>
        <group ref={largeMacbookRef}>
          <MacbookModel16 scale={isMobile ? 0.05 : 0.08} />
        </group>
      </PresentationControls>
      <PresentationControls {...controlsConfig}>
        <group ref={smallMacbookRef}>
          <MacbookModel14 scale={isMobile ? 0.03 : 0.05} />
        </group>
      </PresentationControls>
    </>
  );
}
