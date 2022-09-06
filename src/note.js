import React, {useState} from 'react'

export default function Note(props) {

const [selected, select] = useState(false)





  return (<div select={selected} onClick={() => select(true)}  className={`note ${selected === true ? 'selected' : ''}`} >
  <textarea className="text"></textarea></div>)
}