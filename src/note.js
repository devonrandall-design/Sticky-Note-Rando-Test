import React, {useState} from 'react'

export default function Note(props) {









  return (<div style={ {backgroundColor: props.noteColor} }   onClick={() => props.selectingNotes}  className={`note ${props.isNoteSelected === true ? 'selected' : ''}`} >
  <textarea className="text"></textarea></div>)
}