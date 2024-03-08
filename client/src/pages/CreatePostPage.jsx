import React, { useState } from 'react'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

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
const formats = [
  "header",
  "bold",
  "italic",
  "underline",
  "strike",
  "blockquote",
  "list",
  "bullet",
  "link",
  "indent",
  "image",
  "code-block",
  "color",
];

const CreatePost = () => {
  const [title, setTitle] = useState('');
  const [summary, setSummary] = useState('');
  const [content, setContent] = useState('');
  const [files, setFiles] = useState('');
  
  const handleCreateNewPost = (e) => {
    const data = new FormData()
    data.set('title', title);
    data.set('summary', summary);
    data.set('content', content);
    data.set('file', files[0])

    e.preventDefault();
    console.log(files)
    fetch('http://localhost:3000/post', {
      method: 'POST',
      body: data,
    })
  }

  return (
    <form onSubmit={handleCreateNewPost}>
      <input type="title"  
             placeholder='Title' 
            value={title} 
            onChange={e => setTitle(e.target.value)}
      />
      <input type="summary" 
             placeholder='Summary'
             value={summary}
             onChange={e => setSummary(e.target.value)}
      />
      <input type="file" 
             onChange={e => setFiles(e.target.value)} />
      <ReactQuill value={content} 
                  onChange={newValue => setContent(newValue)}
                  modules={modules} 
                  formats={formats} 
      />
      <button style={{marginTop: '5px'}}>Create post</button>
    </form>
  )
}

export default CreatePost