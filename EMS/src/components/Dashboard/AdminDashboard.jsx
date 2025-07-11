import React from 'react'
import Header from '../Other/Header'
import CreateTask from '../Other/CreateTask'
import AllTask from '../Other/AllTask'

const AdminDashboard = (props) => {
    return (
        <div className='p-10 h-screen flex flex-col bg-[#1C1C1C]'>
            <Header data={props.data}/>
            <CreateTask data={props.data}/>
            <AllTask data={props.data}/>
        </div>
    )
}

export default AdminDashboard