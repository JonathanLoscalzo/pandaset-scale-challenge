/* eslint-disable @typescript-eslint/no-explicit-any */
import { Cuboid, Frame, Point } from './types';

export const transformToCuboid = (json: any): Cuboid => ({
  uuid: json['uuid'],
  label: json['label'],
  yaw: json['yaw'],
  stationary: json['stationary'],
  camera_used: json['camera_used'],
  // TODO: check if this is correct
  position: {
    x: json['position.y'],
    y: json['position.z'],
    z: json['position.x']
  },
  dimensions: {
    x: json['dimensions.y'],
    y: json['dimensions.z'],
    z: json['dimensions.x']
  },
  cuboids: {
    sibling_id: json['cuboids.sibling_id'],
    sensor_id: json['cuboids.sensor_id']
  }
});

const transformToPoint = (json: any): Point => [json[1], json[2], json[0]];

export const transformToFrame = (json: any): Frame => ({
  frame_id: json['frame_id'],
  points: json['points'].map(transformToPoint),
  cuboids: json['cuboids'].map(transformToCuboid)
});
