import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import notes from "../notes";

import CreateArea from "./CreateArea";

function App() {

     const[notes, setnotes] = useState([]);


     function addNote(newNote){
          setnotes(prevNote => {

             return [...prevNote, newNote]
          });
     }
             function deleteNote(id){
                     setnotes((prevNote=>{
                     return prevNote.filter((noteItem, index)=>{
                           return index!==id;
                      })
                     }))
             }


                 const arr = ["q", "7"];
                 const arr2=[arr, "nithin"]

  return (
    <div>
      <Header />
      <CreateArea 
        onAdd ={addNote}
      />
       {notes.map((noteItem, index)=>{
             
             return <Note 
             key= {index}
             id = {index}
             title={noteItem.title} content={noteItem.content} 
             onDelete={deleteNote}

             />
       })}
      <Footer />
    </div>
  );
}

export default App;

