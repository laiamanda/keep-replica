import React, { useState } from "react";

function CreateArea(props) {
  const [note, setNote] = useState({
    title: "",
    content: ""
  });

  function handleChange(event) {
    const { name, value } = event.target; //Get the name and value from event

    setNote((preValue) => {
      return { ...preValue, [name]: value }; //Get all of the previous and current notes
    });
  }

  function submitNote(event) {
    props.onAdd(note);
    event.preventDefault(); //Doesn't allow restart
    setNote({ title: "", content: "" }); //Creates an empty note
  }

  return (
    <div>
      <form>
        <input
          name="title"
          onChange={handleChange}
          value={note.title}
          placeholder="Title"
        />
        <textarea
          name="content"
          onChange={handleChange}
          value={note.content}
          placeholder="Take a note..."
          rows="3"
        />
        <button onClick={submitNote}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
