import React, { useState } from "react";
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import Zoom from '@mui/material/Zoom';
function CreateArea(props) {

  const [note, setNote] = useState({
    title: "",
    content: ""
  });
  const [condition, setCondition] = useState(false);

  function handleChange(event) {
    const { name, value } = event.target;

    setNote(prevNote => {
      return {
        ...prevNote,
        [name]: value
      };
    });
  }

  function submitNote(event) {
    props.onAdd(note);
    setNote({
      title: "",
      content: ""
    });
    event.preventDefault();
  }

  function expand() {
    setCondition(true);
  }
  return (
    <Zoom in={true}>
      <div>
        <form className="create-note">
          {condition && <input
            name="title"
            onChange={handleChange}
            value={note.title}
            placeholder="Title"
          />}

          <textarea
            name="content"
            onChange={handleChange}
            value={note.content}
            placeholder="Take a note..."
            rows={condition ?"3":"1"}
            onClick={expand}
          />
          <Fab onClick={submitNote}><AddIcon /></Fab>
        </form>
      </div>
    </Zoom>
  );
}

export default CreateArea;
