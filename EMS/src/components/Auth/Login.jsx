import React, { useState } from 'react'

const Login = (props) => {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const emailHandler = (e) => {
      setemail(e.target.value);
  }
  const passwordHandler = (e  ) =>{
     setpassword(e.target.value);
    
  }
  const submitHandler = (e) => {
    e.preventDefault();
    // console.log(email);
    props.loginHandler(email,password);
    // console.log(password);
    setemail("");
    setpassword("");
  } 

  return (
    <div className='flex h-screen w-screen items-center justify-center' >
        <div className='rounded-xl p-20 border-2 border-emerald-600'>
            <form className='flex flex-col items-center justify-center'>
                <input onChange={emailHandler} className='border-2 border-emerald-600 rounded-full py-3 px-5 text-xl text-white outline-none placeholder:text-gray-400' value ={email} type="email"  placeholder='Enter your email'/>
                <input onChange={passwordHandler} className='mt-5 border-2 border-emerald-600 rounded-full py-3 px-5 text-xl text-white outline-none placeholder:text-gray-400' value={password} type="password" placeholder='Enter password' />
                <button onClick={submitHandler} className='w-full mt-5 border-2 bg-emerald-600 rounded-full py-3 px-5 text-xl text-white outline-none cursor-pointer border-none' type="submit">Log in</button>
            </form>
        </div>
    </div>
  )
}

export default Login