
import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Text, Cloud } from '@react-three/drei';
import * as THREE from 'three';

// Skills data
const skills = [
  // AI/ML Skills
  { name: 'PyTorch', color: '#EE4C2C', scale: 1.2 },
  { name: 'TensorFlow', color: '#FF6F00', scale: 1.2 },
  { name: 'Scikit-learn', color: '#F89939', scale: 1.1 },
  { name: 'Python', color: '#3776AB', scale: 1.3 },
  { name: 'Computer Vision', color: '#6495ED', scale: 1 },
  { name: 'NLP', color: '#9966FF', scale: 1 },
  { name: 'Deep Learning', color: '#FF6B6B', scale: 1.2 },
  { name: 'Data Science', color: '#20B2AA', scale: 1.1 },
  
  // Full Stack Skills
  { name: 'React', color: '#61DAFB', scale: 1.2 },
  { name: 'Node.js', color: '#339933', scale: 1.1 },
  { name: 'TypeScript', color: '#3178C6', scale: 1.1 },
  { name: 'MongoDB', color: '#47A248', scale: 1 },
  { name: 'Express', color: '#000000', scale: 0.9 },
  { name: 'Next.js', color: '#FFFFFF', scale: 1 },
  { name: 'GraphQL', color: '#E10098', scale: 0.9 },
  { name: 'Docker', color: '#2496ED', scale: 0.9 },
  { name: 'AWS', color: '#FF9900', scale: 1 },
  { name: 'Git', color: '#F05032', scale: 0.9 },
  { name: 'Redux', color: '#764ABC', scale: 0.9 },
  { name: 'Tailwind CSS', color: '#38B2AC', scale: 1 },
];

const SkillCloud = () => {
  const group = useRef<THREE.Group>(null);
  
  useFrame(({ clock }) => {
    if (group.current) {
      group.current.rotation.y = clock.getElapsedTime() * 0.05;
    }
  });
  
  return (
    <group ref={group}>
      <Cloud count={20} radius={6} speed={0.4} opacity={0.1} depth={2} />
      {skills.map((skill, i) => {
        // Calculate position on sphere
        const phi = Math.acos(-1 + (2 * i) / skills.length);
        const theta = Math.sqrt(skills.length * Math.PI) * phi;
        const radius = 4;
        
        const x = radius * Math.cos(theta) * Math.sin(phi);
        const y = radius * Math.sin(theta) * Math.sin(phi);
        const z = radius * Math.cos(phi);
        
        return (
          <Text
            key={skill.name}
            position={[x, y, z]}
            color={skill.color}
            fontSize={0.4 * skill.scale}
            font="/fonts/SpaceGrotesk-Medium.woff"
            anchorX="center"
            anchorY="middle"
          >
            {skill.name}
          </Text>
        );
      })}
    </group>
  );
};

const SkillSphere = () => {
  return (
    <div className="w-full h-[500px] rounded-xl overflow-hidden">
      <Canvas camera={{ position: [0, 0, 8], fov: 60 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <SkillCloud />
      </Canvas>
    </div>
  );
};

export default SkillSphere;
