
import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Text, Cloud, OrbitControls } from '@react-three/drei';
import { Group } from 'three';

const skills = [
  'Python', 'TensorFlow', 'PyTorch', 'Scikit-learn', 
  'NLP', 'Computer Vision', 'Deep Learning', 'React', 
  'Node.js', 'MongoDB', 'GraphQL', 'TypeScript',
  'Express', 'Docker', 'AWS', 'REST API', 
  'Machine Learning', 'Data Analysis', 'MLOps', 'React Native'
];

const SkillText = ({ skill, position, color }) => {
  const textRef = useRef<Group>(null);
  
  useFrame(({ clock }) => {
    if (textRef.current) {
      textRef.current.lookAt(0, 0, 0);
    }
  });
  
  return (
    <group position={position} ref={textRef}>
      <Text
        color={color}
        fontSize={0.5}
        maxWidth={200}
        lineHeight={1}
        letterSpacing={0.02}
        textAlign="center"
        font="https://fonts.gstatic.com/s/raleway/v14/1Ptrg8zYS_SKggPNwK4vaqI.woff"
        anchorX="center"
        anchorY="middle"
      >
        {skill}
      </Text>
    </group>
  );
};

const SkillSphere = () => {
  return (
    <div className="w-full h-[400px]">
      <Canvas camera={{ position: [0, 0, 15], fov: 75 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <Cloud
          opacity={0.5}
          speed={0.4}
          segments={20}
        />
        <group>
          {skills.map((skill, i) => {
            const phi = Math.acos(-1 + (2 * i) / skills.length);
            const theta = Math.sqrt(skills.length * Math.PI) * phi;
            const radius = 7;
            
            const position = [
              radius * Math.cos(theta) * Math.sin(phi),
              radius * Math.sin(theta) * Math.sin(phi),
              radius * Math.cos(phi)
            ];
            
            const color = i % 2 === 0 ? '#9d4edd' : '#ffffff';
            
            return <SkillText key={skill} skill={skill} position={position} color={color} />;
          })}
        </group>
        <OrbitControls autoRotate autoRotateSpeed={0.5} enableZoom={false} />
      </Canvas>
    </div>
  );
};

export default SkillSphere;
