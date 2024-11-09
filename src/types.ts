export type Frame = {
  frame_id: number;
  points: Point[];
  cuboids: Cuboid[];
};

export type Cuboid = {
  uuid: string;
  label: string;
  yaw: number;
  stationary: boolean;
  camera_used: number;
  position: { x: number; y: number; z: number };
  dimensions: { x: number; y: number; z: number };
  cuboids: { sibling_id: string; sensor_id: number };
};

export type Point = [number, number, number];
