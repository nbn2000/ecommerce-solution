"use client";
import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Text, Box, Line } from "@react-three/drei";
import { Group } from "three";

const Icon = ({
  position,
  color,
  text,
}: {
  position: any;
  color: any;
  text: any;
}) => {
  const ref = useRef<Group>(null);

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.2;
    }
  });

  return (
    <group ref={ref} position={position}>
      <Box args={[0.8, 0.8, 0.8]}>
        <meshStandardMaterial color={color} opacity={0.7} transparent />
      </Box>
      <Text
        position={[0, 1.2, 0]}
        fontSize={0.4}
        color="white"
        anchorX="center"
        anchorY="middle"
      >
        {text}
      </Text>
    </group>
  );
};

const Connection = ({ start, end }: { start: any; end: any }) => {
  return (
    <Line
      points={[start, end]}
      color="white"
      lineWidth={1}
      opacity={0.5}
      transparent
    />
  );
};

export default function BackendScene() {
  const groupRef = useRef<Group>(null);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.05;
    }
  });

  return (
    <group ref={groupRef}>
      <Icon position={[-3, 0, 0]} color="#ff6b6b" text="Product" />
      <Icon position={[3, 0, 0]} color="#4ecdc4" text="Shipping" />
      <Icon position={[0, 3, 0]} color="#45b7d1" text="Payment" />
      <Connection start={[-3, 0, 0]} end={[3, 0, 0]} />
      <Connection start={[-3, 0, 0]} end={[0, 3, 0]} />
      <Connection start={[3, 0, 0]} end={[0, 3, 0]} />
      <mesh>
        <sphereGeometry args={[8, 32, 32]} />
        <meshBasicMaterial
          color="#ffffff"
          wireframe
          opacity={0.1}
          transparent
        />
      </mesh>
    </group>
  );
}
