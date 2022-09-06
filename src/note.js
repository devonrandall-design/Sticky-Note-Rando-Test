import React, {useState} from 'react'

export default function Note() {

const [selected, select] = useState(false)





  return (<div onClick={() => select(true)}  className={`note ${selected === true ? 'selected' : ''}`} >
  <textarea className="text"></textarea></div>)
}