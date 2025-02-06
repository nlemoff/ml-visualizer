# ML Visualizer

A React-based web application for visualizing machine learning model predictions. Upload your dataset, select a model, and see the predictions visualized in real-time.

## Features

- 📊 Interactive data visualization using Chart.js
- 📁 JSON dataset upload with validation
- 🤖 Multiple ML model options (Linear Regression, Decision Tree, Random Forest)
- 🎨 Modern UI with Tailwind CSS
- 📱 Responsive design
- 🔒 Type-safe with TypeScript

## Tech Stack

- React 19
- TypeScript
- Chart.js & react-chartjs-2
- Tailwind CSS
- Webpack 5

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher)

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/ml-visualizer.git
cd ml-visualizer
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Usage

### Dataset Format

Upload a JSON file with the following structure:
```json
{
  "features": number[][],     // 2D array of numerical features
  "labels": number[],         // Array of target values
  "featureNames": string[],   // Array of feature names
  "labelName": string        // Name of the target variable
}
```

### Sample Data

A sample dataset (`sample_data.json`) is provided for testing. It contains house price prediction data with the following features:
- Square footage
- Number of bedrooms
- Number of bathrooms
- Distance to city center
- Year built

### Steps to Use

1. Upload your dataset using the file uploader
2. Select a machine learning model from the dropdown
3. Click "Train Model" to generate predictions
4. View the visualization comparing actual vs predicted values

## Project Structure

```
ml-visualizer/
├── src/
│   ├── components/
│   │   ├── FileUploader.tsx   # Dataset upload component
│   │   ├── ModelSelector.tsx  # Model selection and training
│   │   └── Visualizer.tsx     # Results visualization
│   ├── types.ts               # TypeScript interfaces
│   ├── App.tsx               # Main application component
│   └── index.tsx             # Application entry point
├── public/
│   └── index.html            # HTML template
└── sample_data.json          # Sample dataset for testing
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details 