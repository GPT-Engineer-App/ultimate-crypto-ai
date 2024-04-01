import { useState } from "react";
import { FaUpload, FaPlay } from "react-icons/fa";

const Index = () => {
  const [manualFile, setManualFile] = useState(null);
  const [strategyFiles, setStrategyFiles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);

  const handleManualUpload = (e) => {
    setManualFile(e.target.files[0]);
  };

  const handleStrategyUpload = (e) => {
    setStrategyFiles([...strategyFiles, ...e.target.files]);
  };

  const handleSubmit = async () => {
    setLoading(true);

    // TODO: Implement API call to server to process files and generate ultimate strategy
    // Upload manual file and strategy files
    // Train LLM on pinescript language using manual
    // Analyze strategy files to extract key components
    // Generate ultimate crypto trading strategy

    // Placeholder for demo purposes
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setResult("Here is the ultimate crypto trading strategy generated from the provided manual and strategy files...");

    setLoading(false);
  };

  return (
    <div className="max-w-xl mx-auto py-8">
      <h1 className="text-3xl font-bold mb-8">Ultimate Crypto Trading Strategy Generator</h1>

      <div className="mb-4">
        <label className="block mb-2 font-bold">Upload Pinescript Manual:</label>
        <div className="flex items-center">
          <label className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-l cursor-pointer">
            <FaUpload className="mr-2" />
            <span>Choose File</span>
            <input type="file" className="hidden" accept=".txt" onChange={handleManualUpload} />
          </label>
          <span className="ml-4">{manualFile?.name || "No file chosen"}</span>
        </div>
      </div>

      <div className="mb-8">
        <label className="block mb-2 font-bold">Upload Trading Strategy Files:</label>
        <div className="flex items-center mb-2">
          <label className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-l cursor-pointer">
            <FaUpload className="mr-2" />
            <span>Choose Files</span>
            <input type="file" className="hidden" accept=".txt" multiple onChange={handleStrategyUpload} />
          </label>
          <span className="ml-4">{strategyFiles.length} file(s) selected</span>
        </div>
        <ul className="list-disc ml-6">
          {strategyFiles.map((file, i) => (
            <li key={i}>{file.name}</li>
          ))}
        </ul>
      </div>

      <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded inline-flex items-center" onClick={handleSubmit} disabled={loading}>
        <FaPlay className="mr-2" />
        <span>{loading ? "Generating..." : "Generate Ultimate Strategy"}</span>
      </button>

      {result && (
        <div className="mt-8">
          <h2 className="text-xl font-bold mb-4">Result:</h2>
          <div className="bg-gray-100 p-4 rounded whitespace-pre-wrap">{result}</div>
        </div>
      )}
    </div>
  );
};

export default Index;
