import React,{useState} from 'react'

const CreateNotes = ({onAdd}) => {
    const [note,setNote]= useState({
        title:"",
        content:""
    });
 function submitNote(e){
    e.preventDefault();
    if(note.title.trim()|| note.content.trim()){
        onAdd(note);
        setNote({
            title:"",
            content:""
        });
    }
}
  return (
    <div className='create-note'>
        <input type="text" placeholder='Title' value={note.title} onChange={(e)=>{
            setNote({
                ...note,
                title:e.target.value
            })
        }}/>
        <textarea rows="" column="" placeholder='Write a note...' value={note.content} onChange={(e)=>{
            setNote({
                ...note,
                content:e.target.value
            })
        }}></textarea>
        <button onClick={submitNote}>Add</button> 
    </div>
  )
}

export default CreateNotes
