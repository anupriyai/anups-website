declare module "three/examples/jsm/loaders/SVGLoader.js" {
  import { Loader } from "three";

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

    // Optional parse method (some versions expose it)
    static createShapes(path: any): any[];
  }
}
