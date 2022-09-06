import React, {useState} from "react";
import "./style.css";
import SideHeader from './sideheader.js'
import NoteSection from './notesection.js'
import Note from './note.js'

export default function App() {

  const [notes, newNotes] = useState([])
  
  function createNote() {
    const randoNumber = Math.random() * 20000
    return <Note key={randoNumber} />
  }

  function AddNote() {

    newNotes([...notes, createNote()])

  }

  return (
    <div className="main">
    <SideHeader AddNote={AddNote} />
    <NoteSection content={notes} />

    </div>
  );
}
