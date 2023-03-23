import React, { useState } from "react";
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';
import Zoom from '@mui/material/Zoom';

function CreateArea(props) {

       const[isExpanded, setExpanded] = useState(false);
        const [note, setNote] = useState({

            title: "",
            content: ""
        });


        

        function submitNote(event){

              props.onAdd(note);
              setNote({
                title: "",
                content: ""
              })
          event.preventDefault();
        }

        function expand(){
          setExpanded(true);
        }

        function handleChange(event){
             const {name, value}=event.target;

             setNote(prevNote => {
                 
                   return{
                    ...prevNote,
                    [name]: value
                   }  ;
                   
             });

        }

  return (
    <div>
      <form className="create-note">
         {isExpanded &&  <input className="inputBack" autoFocus onChange={handleChange} name="title"
         value={note.title} 
         placeholder="Title" />
        }
        <textarea className="inputBack" onClick={expand} onChange={handleChange} name="content"
        value={note.content} 
        placeholder="Take a note..." rows={isExpanded? 3 : 1} />
        <Zoom in ={isExpanded}>
        <Fab onClick={submitNote}>
          <AddIcon />
          </Fab>
          </Zoom>
        
      </form>
    </div>
  );
}

export default CreateArea;
