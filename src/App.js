import React, { useEffect, useState } from 'react';
import './App.css';
import Notecontainer from './components/notecointainer/notecontainer';
import Sidebar from './components/sidebar/sidebar';

function App() {
  // Retrieve data from localStorage and parse it
  const storedNotes = JSON.parse(localStorage.getItem("MY-PLAN")) || [];
  const [notes, setNotes] = useState(storedNotes);

  const addnote = (color) => {
    const tempNotes = [...notes];

    tempNotes.push({
      id: Date.now() + Math.floor(Math.random() * 3),
      text: "",
      time: Date.now(),
      color,
    });

    setNotes(tempNotes);
  };

  const deleteNote = (id) => {
    const tempNotes = [...notes];
    const index = tempNotes.findIndex((item) => item.id === id);

    if (index < 0) return;

    tempNotes.splice(index, 1);
    setNotes(tempNotes);
  };

  useEffect(() => {
    // Convert notes to a JSON string and save it in localStorage
    localStorage.setItem('MY-PLAN', JSON.stringify(notes));
  }, [notes]);

  const updateText=(text,id)=>{
    const tempNotes = [...notes];
    const index = tempNotes.findIndex((item) => item.id === id);
    if (index < 0) return;
      tempNotes[index].text=text;
      setNotes(tempNotes);
  }

  return (
    <div className="App">
      <Sidebar addNote={addnote} />
      <Notecontainer notes={notes} deleteNote={deleteNote}
      updateText={updateText}
       />
    </div>
  );
}

export default App;
