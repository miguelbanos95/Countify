
import { Box, Cylinder } from '@react-three/drei';
import * as THREE from 'three';



const Beer = () => {

    return (
        <mesh >
            <Box args={[0.3, 0.3, 2]} position={[1, 0, -0.15]}>
                <meshStandardMaterial attach="material" color="green" />
            </Box>
            <Cylinder args={[0.9, 1.3, 5, 12]} position={[1, 1, 1]}>
                <meshStandardMaterial attach="material" opacity={0.9} color="red" />
            </Cylinder>
            <Cylinder args={[1, 1.4, 5.1, 12.1]} position={[1, 1, 1]}>
                <meshStandardMaterial attach="material" opacity={0.2} color="yellow" />
            </Cylinder>
            <Box args={[0.3, 2, 0.3]} position={[1, 1, -1]}>
                <meshStandardMaterial attach="material" color="green" />
            </Box>
            <Box args={[0.3, 0.3, 2]} position={[1, 2, -0.15]}>
                <meshStandardMaterial attach="material" color="green" />
            </Box>
        </mesh>
    );
}

export default Beer

