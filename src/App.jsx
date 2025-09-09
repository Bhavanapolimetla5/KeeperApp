import React,{useState} from "react";
import Header from "./Header";
import Footer from "./Footer";
import CreateNotes from "./CreateNotes";
import './App.css'
const App = () => {
  const[notes,setNotes]= useState([]);
  
  function addNote(newNote){
    setNotes((prevNotes)=>{
      return [...prevNotes,newNote];
    });
    console.log(newNote);
  }
   function deleteNote(id) {
    setNotes((prevNotes) => {
      return prevNotes.filter((note, index) => index !== id);
    });
  }
  return (
    <div>
      <Header />
      <CreateNotes onAdd={addNote} />
       <div className="notes-container">
        {notes.map((note, index) => (
          <div key={index} className="note">
            <h3>{note.title}</h3>
            <p>{note.content}</p>
            <button onClick={() => deleteNote(index)}>Delete</button>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default App;
