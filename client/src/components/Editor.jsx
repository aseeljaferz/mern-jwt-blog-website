import React from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const modules = {
  toolbar: [
    [{ header: [1, 2, false] }],
    ["bold", "italic", "underline", "strike", "blockquote"],
    [{ list: "ordered" }, { list: "bullet" }],
    ["link", "color", "image"],
    [{ "code-block": true }],
    ["clean"],
  ],
};

const Editor = ({ value, onChange }) => {
  return (
    <ReactQuill
      style={{backgroundColor:'white'}}
      value={value}
      theme={"snow"}
      onChange={onChange}
      modules={modules}
    />
  );
};

export default Editor;
