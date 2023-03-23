import React from "react";
import DeleteSharpIcon from '@mui/icons-material/DeleteSharp';



function Note(props) {

        function handleDelete(){
             props.onDelete(props.id);
        }
  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button onClick={handleDelete}>
      <DeleteSharpIcon />
      </button>
    </div>
  );
}

export default Note;
