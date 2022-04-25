// import axios from "axios";
//https://www.youtube.com/watch?v=nve1tVdc2W0      Репета с 53 минуты
import React from "react";

const Upload = () => {
  const handleChange = (e) => {
    e.preventDefault();
    const file = e.target.file.files[0];
    const formData = new FormData();
    formData.append("image", file, file.name);
  };

  // axios.post("....", formData).then(console.log).catch(console.error);

  return (
    <div style={{ marginLeft: "20px", minWidth: "max-content" }}>
      <form
        onSubmit={handleChange}
        style={{
          backgroundColor: "green",
          maxHeight: "50px",
          padding: "15px 10px",
        }}
      >
        <input id="file" type="file" name="file" style={{ display: "none" }} />
        <label
          htmlFor="file"
          style={{ padding: "20px", border: "2px dashed red" }}
        >
          Click me
        </label>
        <button type="submit">Load</button>
      </form>
    </div>
  );
};

export default Upload;
