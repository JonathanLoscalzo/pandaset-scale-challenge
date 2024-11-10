import { Point as PointType } from '../types';
import { Points as PointsDrei } from '@react-three/drei';
import { generateColor } from '../utils';
import { useMemo } from 'react';

export function Points(props: { points: PointType[] }) {
  // Due to performances issues related to the resizing of a buffered array,
  // we limit the number of points to render to be equals between re-renderings
  const MAX_POINTS = 1000000;
  const { positions, colors } = useMemo(() => {
    const points = props.points.slice(0, MAX_POINTS);

    const positions = new Float32Array(points.length * 3);
    const colors = new Float32Array(points.length * 3);

    points.forEach(([x, y, z], i) => {
      positions.set([x, y, z], i * 3);
      const color = generateColor(z);
      colors.set([color.r, color.g, color.b], i * 3);
    });

    return { positions, colors };
  }, [props.points]);

  return (
    <>
      <PointsDrei colors={colors} positions={positions} sizes={new Float32Array(MAX_POINTS * 3)}>
        <pointsMaterial transparent vertexColors size={0.1} />
      </PointsDrei>
    </>
  );
}
