import React,{useContext, useState,useEffect} from 'react'
import Login from './components/Auth/Login.jsx'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard.jsx'
import TaskList from './components/TaskList/TaskList.jsx'
import AdminDashboard from './components/Dashboard/AdminDashboard.jsx'
import { AuthContext } from './components/Auth/AuthProvider.jsx'

const App = () => {

  const [user,setUser] = useState(null);
  const [loggedInUserData, setLoggedInUserData] = useState(localStorage.getItem("loggedInUser")? JSON.parse(localStorage.getItem("loggedInUser")) : null);

  const authData = useContext(AuthContext);

  useEffect(() => {

       if (loggedInUserData != null) {localStorage.setItem("loggedInUser",JSON.stringify(loggedInUserData));
        // console.log(loggedInUserData);
          if (loggedInUserData.id != 101)  {
            setUser("user");
          }
          else {
            setUser("admin");
          }
      }

  }, [loggedInUserData]);

 

 
  
  
  const loginHandler = (email,password) => {
    if(authData && authData.employees) {
      if (authData.employees.find((e)=>e.email === email && e.password === password)) {
         setLoggedInUserData(authData.employees.find((e)=>e.email === email && e.password === password));
      }
      setUser("user");
    }
    else if(authData && authData.admin) {
          if (authData.admin.find((e)=>e.email === email && e.password === password)) {
            setLoggedInUserData(authData.admin.find((e)=>e.email === email && e.password === password));   
          }
          setUser("admin");
    }
    else alert ('Invalid Login Credentials');
  } 
  if (!authData)  {
    return <div>loading</div>
  }


  // const logoutHandler = () => {
  //   setUser(null);
  //   localStorage.removeItem("loggedInUser");
  // }
  return (
      <>
          {!user && <Login loginHandler={loginHandler}/>}
          {user === "user" ? <EmployeeDashboard data={loggedInUserData}/> : ""}
          {/* {user === "admin" ? <AdminDashboard data={loggedInUserData}/> : ""} */}
      </>
  )
}
export default App
