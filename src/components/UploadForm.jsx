import React, { useState } from "react";
import { ProgressBar } from "./ProgressBar";

export const UploadForm = () => {
  const [file, setFile] = useState(null);
  const [err, setErr] = useState(null);

  const types = ["image/png", "image/jpeg"];
  const onChange = (e) => {
    let selected = e.target.files[0];
    if (selected && types.includes(selected.type)) {
      setFile(selected);
    } else {
      setFile(null);
      setErr("Please select an image file (png or jpeg");
    }
  };

  return (
    <>
      <form encType="multipart/form-data">
        <label style={{ cursor: "pointer" }}>
          <input type="file" onChange={onChange} />
          <span>+</span>
        </label>
        <div className="output">
          {err && <div>{err}</div>}
          {file && <div>{file.name}</div>}
          {file && <ProgressBar file={file} setFile={setFile} />}
        </div>
      </form>
    </>
  );
};
