/* eslint-disable @typescript-eslint/no-explicit-any */
import * as THREE from 'three';
import { Cuboid, Frame, Point } from './types';

export const transformToCuboid = (json: any): Cuboid => ({
  uuid: json['uuid'],
  label: json['label'],
  yaw: json['yaw'],
  stationary: json['stationary'],
  camera_used: json['camera_used'],
  position: {
    x: json['position.x'],
    y: json['position.y'],
    z: json['position.z']
  },
  dimensions: {
    x: json['dimensions.x'],
    y: json['dimensions.y'],
    z: json['dimensions.z']
  },
  cuboids: {
    sibling_id: json['cuboids.sibling_id'],
    sensor_id: json['cuboids.sensor_id']
  }
});

const transformToPoint = (json: any): Point => json;

export const transformToFrame = (json: any): Frame => ({
  frame_id: json['frame_id'],
  points: json['points'].map(transformToPoint),
  cuboids: json['cuboids'].map(transformToCuboid)
});

export const generateColor = (z: number, zMin = -5, zMax = 5) => {
  // TODO: review this function, the colors are not looking good
  const t = (z - zMin) / (zMax - zMin);

  // Definir los colores en RGB
  const colorStart = new THREE.Color(0xffff00); // Amarillo
  const colorEnd = new THREE.Color(0xff0000); // Rojo

  // Interpolación entre amarillo y rojo a lo largo de la gama de Z
  const color = colorStart.clone().lerp(colorEnd, t);

  return color;
};
