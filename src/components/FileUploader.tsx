import React from "react";
import { Dataset } from "../types";

interface FileUploaderProps {
  onDatasetLoad: (dataset: Dataset) => void;
}

const FileUploader: React.FC<FileUploaderProps> = ({ onDatasetLoad }) => {
  const validateDataset = (data: any): data is Dataset => {
    return (
      Array.isArray(data.features) &&
      Array.isArray(data.labels) &&
      Array.isArray(data.featureNames) &&
      typeof data.labelName === "string" &&
      data.features.every((f: any) => Array.isArray(f) && f.every((v: any) => typeof v === "number")) &&
      data.labels.every((l: any) => typeof l === "number") &&
      data.featureNames.every((n: any) => typeof n === "string")
    );
  };

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        try {
          const jsonData = JSON.parse(reader.result as string);
          if (validateDataset(jsonData)) {
            onDatasetLoad(jsonData);
          } else {
            alert("Invalid dataset format. Please check the JSON structure.");
          }
        } catch (error) {
          alert("Error parsing JSON file: " + (error as Error).message);
        }
      };
      reader.readAsText(file);
    }
  };

  return (
    <div className="p-4 border rounded-lg bg-white shadow-sm">
      <label 
        htmlFor="file-upload" 
        className="block text-lg font-medium mb-2"
      >
        Upload Dataset:
      </label>
      <input
        id="file-upload"
        type="file"
        accept=".json"
        onChange={handleFileUpload}
        className="block w-full text-sm text-gray-500
          file:mr-4 file:py-2 file:px-4
          file:rounded-full file:border-0
          file:text-sm file:font-semibold
          file:bg-blue-50 file:text-blue-700
          hover:file:bg-blue-100"
      />
      <p className="mt-2 text-sm text-gray-500">
        Upload a JSON file containing features, labels, and metadata
      </p>
    </div>
  );
};

export default FileUploader; 