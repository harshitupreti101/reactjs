import React,{useState,useRef, useEffect} from 'react'
import todo_icon from '../assets/todo_icon.png'
import ToDoItems from './ToDoItems'


function Todo() {  
    
    const [toDoList,setToDoList] = useState(localStorage.getItem("todo") 
    ? JSON.parse(localStorage.getItem("todo")) : []);
    const inputRef = useRef();

    function add (){
        const inputText = inputRef.current.value.trim();

        if (inputText == "") return;

        const newToDo = {
            id:Date.now(),
            text:inputText,
            isComplete:false,
        }
        setToDoList((prev) => [...prev,newToDo]);
        inputRef.current.value = "";
    }

    const deleteToDo = (id) => {
        setToDoList ((prevToDo) => prevToDo.filter((todo) => todo.id !== id));
    }

    const toggle = (id)=> {
        setToDoList ((prevToDo) => prevToDo.map((e) => {
            if (e.id === id) {
                return {...e,isComplete: !e.isComplete}
            }
            return e
    }))
        // console.log(toDoList);
    }

    useEffect (() => {
        localStorage.setItem("todo",JSON.stringify(toDoList))
    },[toDoList])

  return (
    <div className="bg-white  flex flex-col p-7 min-h-[500px] rounded-xl w-11/12 max-w-md">
        
        {/* ------------------{heading} ------------------*/}
        <div className='flex item-center mt-8'>
            <img src={todo_icon} alt="" className='w-8'/>
            <h1 className='font-semibold text-3xl'>To-Do List</h1>
        </div>
        
        {/*---------------- {input box} ------------------*/}
        <div className='flex item-  center my-7 bg-gray-200 rounded-full justify-between'>
            <input ref={inputRef} type="text" placeholder='Add your task' className="outline-none border-0 placeholder:text-slate-600 rounded-full pl-8 p-3 bg-transparent"/>
            <button onClick={add} className='bg-orange-500 rounded-full p-3 text-white px-8 text-lg outline-none'>Add +</button>
        </div>

        {/* ----------------{todo-list} ------------------*/}
        <div>
            {toDoList.map((e,index)=> <ToDoItems key={index} text={e.text} 
            isComplete={e.isComplete} id={e.id} deleteToDo={deleteToDo} toggle={toggle}/>
            )} 
        </div>
    </div>
  )
}

export default Todo