export function Lights() {
  // TODO: review the lights
  return (
    <>
      {/* Luz ambiental suave, sin ser tan intensa */}
      <ambientLight intensity={0.2} />

      {/* Luz direccional simulando el sol desde la derecha */}
      <directionalLight
        position={[10, 10, 10]} // Lado derecho y arriba
        intensity={0.7} // Menos intensidad para no ser tan fuerte
        color={0xffcc00} // Color amarillo cálido, simulando el sol
        castShadow={true} // Para lanzar sombras
        shadow-mapSize-width={1024} // Ajustar resolución de la sombra
        shadow-mapSize-height={1024}
        shadow-camera-near={0.5} // Ajustes de la cámara de sombras
        shadow-camera-far={500}
        shadow-camera-left={-10}
        shadow-camera-right={10}
        shadow-camera-top={10}
        shadow-camera-bottom={-10}
      />

      {/* Luz puntual en el lado izquierdo */}
      <pointLight
        position={[-10, -10, -10]} // A la izquierda, para equilibrar la iluminación
        intensity={0.2} // Baja intensidad
        decay={2} // Decaimiento de la luz
      />
    </>
  );
}
