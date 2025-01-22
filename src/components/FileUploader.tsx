import React from "react";

const FileUploader: React.FC = () => {
  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        const data = reader.result;
        console.log("Uploaded Data:", data);
      };
      reader.readAsText(file);
    }
  };

  return (
    <div>
      <label htmlFor="file-upload">Upload Dataset:</label>
      <input id="file-upload" type="file" accept=".json" onChange={handleFileUpload} />
    </div>
  );
};

export default FileUploader;
