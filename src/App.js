import React, {useState} from "react";
import "./style.css";
import SideHeader from './sideheader.js'
import NoteSection from './notesection.js'
import Note from './note.js'

export default function App() {

  const [notes, newNotes] = useState([])
  
  const [color, newColor] = useState("#D282A6")

  const [selected, select] = useState(false)

  function selectANote() {
select(true)
console.log(selected)
  }

  function changeColor(entercolor) {
    newColor(entercolor)
  }




  
  
  function createNote() {
    const randoNumber = Math.random() * 20000
    console.log(color)
    return <Note isNoteSelected={selected} selectingNotes={selectANote} noteColor={color}   key={randoNumber} />
  }

  function AddNote() {

    newNotes([...notes, createNote()])

  }

  return (
    <div className="main">
    <SideHeader newColor={changeColor} noteColor={color} AddNote={AddNote} />
    <NoteSection  noteColor={color} content={notes} />

    </div>
  );
}
