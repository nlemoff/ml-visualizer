export interface Dataset {
  features: number[][];
  labels: number[];
  featureNames: string[];
  labelName: string;
}

export type ModelType = 'linear-regression' | 'decision-tree' | 'random-forest'; 