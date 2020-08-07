import React, { useState } from "react";
import ProgressBar from "./ProgressBar";

function UploadFile() {
  const [file, setFile] = useState(null);
  const [error, setError] = useState(null);

  const fileTypes = ["image/jpeg", "image/png"];

  const handleChange = (event) => {
    let selectedFile = event.target.files[0];
    if (selectedFile && fileTypes.includes(selectedFile.type)) {
      setFile(selectedFile);
      setError(null);
    } else {
      setFile(null);
      setError("Please select an image file( jpeg or png )");
    }
  };

  return (
    <form className="form">
        <label>
          <input type="file" onChange={handleChange} />
          <span>+</span>
        </label>
      <div className="output">
        {error && <div className="error">{error}</div>}
        {file && <div> {file.name} </div>}
        {file && <ProgressBar file={file} setFile={setFile} />}
      </div>
    </form>
  );
}

export default UploadFile;
