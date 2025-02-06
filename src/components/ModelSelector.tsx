import React, { useState } from 'react';
import { Dataset, ModelType } from '../types';

interface ModelSelectorProps {
  dataset: Dataset;
  onPredictionsGenerated: (predictions: number[]) => void;
}

const ModelSelector: React.FC<ModelSelectorProps> = ({
  dataset,
  onPredictionsGenerated,
}) => {
  const [selectedModel, setSelectedModel] = useState<ModelType>('linear-regression');
  const [isTraining, setIsTraining] = useState(false);

  const handleModelChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedModel(event.target.value as ModelType);
  };

  const handleTrainModel = async () => {
    setIsTraining(true);
    try {
      // Simulate model training and prediction
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Generate mock predictions for demonstration
      const mockPredictions = dataset.features.map((_, index) => {
        return dataset.labels[index] + (Math.random() - 0.5) * 0.2;
      });
      
      onPredictionsGenerated(mockPredictions);
    } catch (error) {
      alert("Error training model: " + (error as Error).message);
    } finally {
      setIsTraining(false);
    }
  };

  return (
    <div className="p-4 border rounded-lg bg-white shadow-sm">
      <h2 className="text-lg font-medium mb-4">Model Selection</h2>
      
      <div className="mb-4">
        <label htmlFor="model-select" className="block text-sm font-medium mb-2">
          Choose Model:
        </label>
        <select
          id="model-select"
          value={selectedModel}
          onChange={handleModelChange}
          className="w-full p-2 border rounded-md"
          disabled={isTraining}
        >
          <option value="linear-regression">Linear Regression</option>
          <option value="decision-tree">Decision Tree</option>
          <option value="random-forest">Random Forest</option>
        </select>
      </div>

      <button
        onClick={handleTrainModel}
        disabled={isTraining}
        className="w-full py-2 px-4 bg-blue-600 text-white rounded-md
          hover:bg-blue-700 disabled:bg-blue-300 disabled:cursor-not-allowed"
      >
        {isTraining ? "Training..." : "Train Model"}
      </button>
    </div>
  );
};

export default ModelSelector; 