import React, { useState } from "react";
import Navbar from './components/Navbar'
import UploadFile from "./components/UploadFile";
import ImageGrid from "./components/ImageGrid";
import Modal from "./components/Modal";

function App() {
  const [selectedImg, setSelectedImg] = useState(null);

  return (
    <div className="App">
      <Navbar />
      <UploadFile />
      <ImageGrid setSelectedImage={setSelectedImg} />
      {selectedImg && (
        <Modal selectedImage={selectedImg} setSelectedImage={setSelectedImg} />
      )}
    </div>
  );
}

export default App;
