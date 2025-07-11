import React from 'react'

const AcceptTask = () => {
  return (
    <div className="flex-shrink-0 w-[300px] h-full bg-gray-800 rounded-xl p-5 text-white">
          <div className='flex justify-between items-center'>
              <h3 className='bg-red-700/50 text-sm px-3 py-1 rounded'>High</h3>
              <h2 className='text-sm'>8-7-2024</h2>
          </div>
          <h2 className='mt-6 text-2xl font-bold'>Make a react Project</h2>
          <p className='text-sm mt-3 text-gray-400'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod dolore provident sit doloremque laboriosam!</p>
          <div className='flex justify-between mt-4'>
            <button className='bg-green-500 py-1 px-2 text-sm'>Mark as completed</button>
            <button className='bg-red-500 py-1 px-2 text-sm'>Mark as Failed</button>
          </div>
      </div>
  )
}

export default AcceptTask