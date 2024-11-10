import './style.css';
import { Frame } from './types';
import { transformToFrame } from './utils';
import ComboBox from './components/ComboBox';
import { useState } from 'react';
import { Scene } from './components/Scene';

export function App() {
  const [frame, setFrame] = useState<Frame>();

  return (
    <>
      <ComboBox
        handleFrameChange={(data) => {
          setFrame(transformToFrame(data));
        }}
      />
      {frame && <Scene frame={frame} />}
    </>
  );
}
