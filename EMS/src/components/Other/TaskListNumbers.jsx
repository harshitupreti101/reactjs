import React from 'react'

const TaskListNumbers = (props) => {
  return (
    <div className='flex mt-10 screen justify-between gap-5'>
        <div className='rounded-xl px-9 py-6 w-[45%] bg-red-400'>
            <h1 className='text-3xl font-semibold'>{props.data.taskCounts.failed}</h1>
            <h3 className='text-xl font-medium'>New Task</h3>
        </div>
        <div className='rounded-xl px-9 py-6 w-[45%] bg-blue-400'>
            <h1 className='text-3xl font-semibold'>{props.data.taskCounts.newTask}</h1>
            <h3 className='text-xl font-medium'>New Task</h3>
        </div>
        <div className='rounded-xl px-9 py-6 w-[45%] bg-yellow-400'>
            <h1 className='text-3xl font-semibold'>{props.data.taskCounts.active}</h1>
            <h3 className='text-xl font-medium'>New Task</h3>
        </div>
        <div className='rounded-xl px-9 py-6 w-[45%] bg-green-400'>
            <h1 className='text-3xl font-semibold'>{props.data.taskCounts.completed}</h1>
            <h3 className='text-xl font-medium'>New Task</h3>
        </div>
    </div>
  )
}

export default TaskListNumbers