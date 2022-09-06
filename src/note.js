import React, {useState} from 'react'

export default function Note(props) {

const [selected, select] = useState(false)





  return (<div style={ {backgroundColor: props.noteColor} }  select={selected} onClick={() => select(true)}  className={`note ${selected === true ? 'selected' : ''}`} >
  <textarea className="text"></textarea></div>)
}