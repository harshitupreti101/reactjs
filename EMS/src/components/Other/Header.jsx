import React,{useContext} from 'react'
import { AuthContext } from '../Auth/AuthProvider'
const Header = (props) => {
  const {logoutHandler} = useContext(AuthContext);
  return (
    <div className='text-white flex items-center justify-between '>
        <h1 className='text-2xl font-medium'>Hello <br/><span className='text-3xl font-semibold'>{props.data.firstName}👋</span> </h1>
        <button onClick={logoutHandler} className='bg-red-600 text-white px-5 py-2 rounded-sm text-xl  outline-none cursor-pointer'>Log Out</button>
    </div>
  )
}

export default Header