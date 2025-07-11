import React from 'react'

const CreateTask = () => {
  return (
    <div>
                <form className='flex justify-between flex-wrap bg-[#272822] p-6 mt-4 rounded-sm'>
                    <div className='w-3/5'>
                        <div>
                            <h3>Task Title</h3>
                            <input className="border-2  border-gray-400 rounded-sm w-2/3 p-1 placeholder:pl-2 placeholder:text-sm" type="text" placeholder="Make a UI design" />
                        </div>
                        <div className='mt-4'> 
                            <h3>Date</h3>
                            <input className="border-2 border-gray-400 rounded-sm w-2/3 p-1 placeholder:pl-2 placeholder:text-sm" type="date" placeholder="Make a UI design" />
                        </div>
                        <div className='mt-4'>
                            <h3>Assign to</h3>
                            <input className="border-2 border-gray-400 rounded-sm w-2/3 p-1 placeholder:pl-2 placeholder:text-sm" type="text" placeholder="Make a UI design" />
                        </div>
                         <div className='mt-4'>
                            <h3>Category</h3>
                            <input className="border-2 border-gray-400 rounded-sm w-2/3 p-1 placeholder:pl-2 placeholder:text-sm" type="text" placeholder="Make a UI design" />
                        </div>
                    </div>
                    <div className='w-2/5 flex flex-col'>
                        <h3>Description</h3>
                        <textarea className="border-2 border-gray-400 w-full rounded-sm resize-none" name="" id="" cols="30" rows="8" placeholder='write description here'></textarea>
                        <button className='bg-emerald-600 w-full mt-4.5 p-3 rounded-sm'>Create Task</button>
                    </div> 
                    
                </form>
            </div>
  )
}

export default CreateTask