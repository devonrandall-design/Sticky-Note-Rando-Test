import React from 'react'

export default function SideHeader( props ) {

  return ( <div className="sideheader">
    <button onClick={props.AddNote} className="note-button">+</button>
    <button onClick={() => props.newColor('#6E4555')} className="brown"></button>
    </div> 
  )
}