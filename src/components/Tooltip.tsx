import { Html } from '@react-three/drei';

export function Tooltip(props: {
  position: [number, number, number];
  text: string;
  hidden: boolean;
}) {
  return props.hidden ? (
    <></>
  ) : (
    <Html position={props.position}>
      <div
        style={{
          background: 'white',
          padding: '5px',
          borderRadius: '4px',
          boxShadow: '0 0 5px rgba(0,0,0,0.3)'
        }}
      >
        <strong>{props.text}</strong>
      </div>
    </Html>
  );
}
