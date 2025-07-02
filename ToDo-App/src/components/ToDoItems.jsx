import React from 'react'
import tick from '../assets/tick.png'
import not_tick from '../assets/not_tick.png'
import delete_icon from '../assets/delete_icon.png'

const ToDoItems = (props) => {
  return (
    <div className='flex justify-between items-center my-8'>

        <div className='flex flex-1 items-center' onClick={()=> {props.toggle(props.id)}}>
            <img src={props.isComplete ? tick : not_tick} alt="" className='w-7 cursor-pointer'/>
            <p className={`text-slate-800 pl-5 text-[18px] cursor-pointer decoration-slate-500 ${props.isComplete ? "line-through" : ""}`}>{props.text}</p>
        </div>

        <div>
            <img onClick={()=> {props.deleteToDo(props.id)}} src={delete_icon} alt="" className='w-4 cursor-pointer pt-1'/>
        </div>
    </div>
  )
}

export default ToDoItems