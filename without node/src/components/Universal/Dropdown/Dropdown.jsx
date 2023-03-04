import React,{useState} from 'react'
import {Link} from 'react-router-dom';
import './Dropdown.css'
import {createPortal} from 'react-dom';
import {Subjects} from '../Data/data.js';
function Dropdown() {
    const [listCount,setListCount]=useState(Subjects.length);
    const [horDrop,setHorDrop]=useState(Array(Subjects.length).fill(false))
    const [index,setIndex]=useState(0);


    const inlineStyles={
        height:`${40*listCount}px`,
        maxHeight:`${40*10}`,
    }
    const inlineTopicStyles={
        position:"fixed",
        top:`${40*(index+1)+32}px`

    }

   const reset=Array(Subjects.length).fill(false)
  const handleEnter=(index)=>{
      setIndex(index)
      setHorDrop(reset)
      setHorDrop(prev=>(
       [...prev,prev[index]=true] 
      ))
  }

   

  return createPortal(
    <div className="dropdown" style={inlineStyles}>
        <ul className="subjects">
            {Subjects.map((subject,index)=>(
                <li className="subject" key={index} onMouseOver={()=>handleEnter(index)}>
                    <span>{subject.Subject}</span>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                    </svg>

                    <ul className="sub-topics" style={inlineTopicStyles}>
                        {horDrop[index] && subject.Topics.map((topic,index)=>(
                            <li className="topics" key={index}>
                                <Link to='/' className="topic">{topic}</Link>
                            </li>
                        ))}
                    </ul>
              </li>
            ))}
        </ul>

        </div>,
    document.getElementById("portal")
  )
}

export default Dropdown