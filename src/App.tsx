import React, { useState } from "react";
import FileUploader from "./components/FileUploader";
import ModelSelector from "./components/ModelSelector";
import Visualizer from "./components/Visualizer";
import { Dataset } from "./types";

// The main App component
const App: React.FC = () => {
  const [dataset, setDataset] = useState<Dataset | null>(null);
  const [predictions, setPredictions] = useState<number[] | null>(null);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">ML Visualizer</h1>
      
      <div className="grid gap-6">
        <FileUploader onDatasetLoad={setDataset} />
        
        {dataset && (
          <ModelSelector 
            dataset={dataset} 
            onPredictionsGenerated={setPredictions}
          />
        )}
        
        {dataset && predictions && (
          <Visualizer 
            dataset={dataset}
            predictions={predictions}
          />
        )}
      </div>
    </div>
  );
};

export default App;
