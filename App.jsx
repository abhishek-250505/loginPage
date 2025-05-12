import React, { useState } from 'react';
import Signin from './component/Signin';
import Signup from './component/Signup';
import User from './component/User';
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  const [toggler, setToggler] = useState(true);
  const [user, setUser] = useState([]);

    // Handle user deletion
    const handleDelete = (index) => {
      const updatedUsers = user.filter((_, i) => i !== index);
      setUser(updatedUsers);
    };
  const sampleUser =[
   { name: 'John doe ' , email: 'johndoe@example.com'},
   { name: 'John doe ' , email: 'johndoe@example.com'} 
  ];
  





  return (
    <div className='min-h-screen w-full bg-[#ace0f9] flex flex-col md:flex-row items-center justify-center gap-8 p-4 overflow-auto'>

      {toggler ? (
        <Signin toggler={toggler} setToggler={setToggler} user={user} setUser={setUser} />
      ) : (
        <Signup toggler={toggler} setToggler={setToggler} user={user} setUser={setUser}  />

      )}  
      <User userDetails ={user} handleDelete={handleDelete}/>
      <ToastContainer />
    </div>
  );
};

export default App;
