import React from 'react';
import Note from '../note/note';
import './notecontainer.css'
export default function notecontainer(props) {
  
  const reverseArry=(arr)=>{
    const array=[];
    for(let i=arr.length-1;i>=0;--i){
      array.push(arr[i])
    }
    return array;
  };
  const notes=reverseArry(props.notes);
  return (
    <div className='note-container'>
    <h2>Notes</h2>
    <div className='note-container-notes custom-scroll'>
    {
     notes?.length>0 ? (notes.map((item)=><Note 
      key={item.id}
      note={item}
      deleteNote={props.deleteNote}
      updateText={props.updateText}
      />)):(
        <h1>No Notes Present! Plese add notes</h1>
      )
    }
    </div>
    </div>
  )
}
