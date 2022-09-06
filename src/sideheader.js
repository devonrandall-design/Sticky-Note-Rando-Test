import React from 'react'

export default function SideHeader( { AddNote }) {

  return ( <div className="sideheader">
    <button onClick={AddNote} className="note-button">+</button>
    </div>
  )
}