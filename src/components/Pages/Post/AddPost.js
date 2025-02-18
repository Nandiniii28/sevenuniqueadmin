import React, { useState } from "react";
import "./AddPost.css";
import { MdFormatListNumbered , MdFormatListBulleted  } from "react-icons/md";
import blog from "./blog.avif"

const AddPost = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [author, setAuthor] = useState("");
  const [category, setCategory] = useState("General");
  const [activeFormats, setActiveFormats] = useState({});

  const toggleFormat = (tag) => {
    document.execCommand(tag, false, null);
    const isActive = document.queryCommandState(tag);
    setActiveFormats((prev) => ({ ...prev, [tag]: isActive }));
  };

  const toggleHeading = () => {
    const selection = window.getSelection();
    if (selection.rangeCount > 0 && !selection.isCollapsed) {
      const currentTag = document.queryCommandValue("formatBlock");
      const newTag = currentTag === "h1" ? "p" : "h1";
      document.execCommand("formatBlock", false, newTag);
    } else {
      const newTag = activeFormats.heading ? "p" : "h1";
      document.execCommand("formatBlock", false, newTag);
      setActiveFormats((prev) => ({ ...prev, heading: newTag === "h1" }));
    }
  };

  const handleImageUpload = () => {
    const input = document.createElement("input");
    input.type = "file";
    input.accept = "image/*";
    input.onchange = (event) => {
      const file = event.target.files[0];
      if (file) {
        const imageUrl = URL.createObjectURL(file);
        const imgTag = `<img src="${imageUrl}" alt="Uploaded Image" style="max-width: 100%; height: auto;" />`;
        document.getElementById("editor").focus();
        document.execCommand("insertHTML", false, imgTag);
      }
    };
    input.click();
  };

  const handleSubmit = () => {
    const content = document.getElementById("editor").innerHTML;
    alert("Post submitted successfully!");
  };

  return (
    <div className="composer-container ">
     <div className="main_banner" style={{
        backgroundImage: `url(${blog})` 
      }}>
     <h2 className="text-center fs-1">Add Post</h2>

     </div>

      <div className="form-group pt-3">
        <label>Title:</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Enter title"
        />
      </div>

      <div className="form-group">
        <label>Description:</label>
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Enter a short description"
        />
      </div>

      <div className="form-group">
        <label>Author:</label>
        <input
          type="text"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          placeholder="Enter author name"
        />
      </div>

      <div className="form-group">
        <label>Category:</label>
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="category-select"
        >
          <option value="General">Technical</option>
          <option value="Announcements">Digital</option>
          <option value="Feedback">Product</option>
          <option value="Support">Support</option>
        </select>
      </div>


      <div className="toolbar">
        <button
          onClick={() => toggleFormat("bold")}
          className={activeFormats.bold ? "active" : ""}
          title="Bold"
        >
          B
        </button>
        <button
          onClick={() => toggleFormat("italic")}
          className={activeFormats.italic ? "active" : ""}
          title="Italic"
        >
          I
        </button>
        <button
          onClick={() => toggleFormat("underline")}
          className={activeFormats.underline ? "active" : ""}
          title="Underline"
        >
          U
        </button>
        <button
          onClick={toggleHeading}
          className={activeFormats.heading ? "active" : ""}
          title="Heading"
        >
          H
        </button>
        <button onClick={handleImageUpload} title="Add Image">
          Img
        </button>
        <button
          onClick={() => toggleFormat("insertUnorderedList")}
          title="Bullets"
        >
          <MdFormatListBulleted />
        </button>
        <button
          onClick={() => toggleFormat("insertOrderedList")}
          title="Numbered List"
        >
         <MdFormatListNumbered />
        </button>
      </div>

      <div id="editor" className="editor" contentEditable></div>

      <button className="submit-btn" onClick={handleSubmit}>
        Add Post
      </button>
    </div>
  );
};

export default AddPost;
