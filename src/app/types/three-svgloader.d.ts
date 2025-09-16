declare module "three/examples/jsm/loaders/SVGLoader.js" {
  import { Loader, Shape } from "three";

  export interface SVGPathDataPoint { x: number; y: number }
  export interface SVGPath {
    getPoints(segments?: number): SVGPathDataPoint[];
  }
  export interface SVGResult {
    paths: SVGPath[];
  }

  export class SVGLoader extends Loader {
    load(
      url: string,
      onLoad: (data: SVGResult) => void,
      onProgress?: (event: ProgressEvent<EventTarget>) => void,
      onError?: (event: unknown) => void
    ): void;

    static createShapes(path: SVGPath): Shape[];
  }
}