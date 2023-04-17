import { Box, Cylinder, GizmoHelper, GizmoViewport } from '@react-three/drei';
import * as THREE from 'three';


export function Beer3D () {

    return (
        <>
            <mesh >
            //parte de arriba
                {/* <Cylinder args={[1.3, 0.9, 5, 32]} position={[1, 1.3, 1]}>
                <meshStandardMaterial attach="material" transparent opacity={0.2} color="yellow" />
            </Cylinder> */}

                {/* <Cylinder args={[1.3, 0.9, 2, 32]} position={[1.1, 3, 1.1]}>
                <meshStandardMaterial attach="material" transparent opacity={0.2} color="white" />
            </Cylinder> */}
                <Cylinder args={[1.11, 1.41, 5, 32, 5]} position={[0, 0, 0]}>
                    <meshStandardMaterial attach="material" transparent opacity={0.8} color="black" />
                </Cylinder>
                {/* <Cylinder args={[1.1, 1.4, 5.01, 32]} position={[1, 1, 1]}>
                <meshStandardMaterial attach="material" color="yellow" />
            </Cylinder> */}
                <Cylinder args={[0.3, 0.3, 4, 12]} position={[0, 5, 0]} setRotationFromAxisAngle={50}>
                    <meshStandardMaterial attach="material" color="blue" />
                </Cylinder>
                {/* <Box args={[0.3, 2, 0.3]} position={[1, 1.4, -1]}>
                <meshStandardMaterial attach="material" color="green" />
            </Box>
            <Box args={[0.3, 0.3, 2]} position={[1, 0.4, -0.15]}>
                <meshStandardMaterial attach="material" color="green" />
            </Box>
            <Box args={[0.3, 0.3, 2]} position={[1, 2.4, -0.15]}>
                <meshStandardMaterial attach="material" color="green" />
            </Box> */}
            </mesh>
            <GizmoHelper
                alignment='bottom-right'
                margin={[50, 50]}>
                <GizmoViewport axisColors={['red', 'green', 'blue']}></GizmoViewport>
            </GizmoHelper>
        </>
    );
}
