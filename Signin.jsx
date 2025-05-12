import React from 'react'
import { useForm } from 'react-hook-form';
import { ToastContainer, toast } from 'react-toastify';


const Signin = (props) => {
  const { toggler, setToggler, user, setUser } = props;

  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    setUser([...user, { name: data.email.split('@')[0], email: data.email }]);
    reset(); // clear form
    console.log(data);

    const userExists = user.some(u => u.email === data.email);

    if (userExists) {
      toast.error("User already exists!");
    } else {
      setUser([...user, { name: data.name, email: data.email }]);
      toast.success("Signin successful!");
      reset();
    }
  
    
  };

  
    
    
  return (
    <div>
        <form action="" onSubmit={handleSubmit(onSubmit)}  className="w-full max-w-sm md:max-w-md lg:max-w-lg bg-[#efe9eb] border-2 border-black flex flex-col items-center overflow-y-auto p-4 rounded-xl shadow-lg max-h-[90vh]"
        >
        <h1 className='text-3xl pt-3.5 pl-2 m-4' >Login </h1>
       
        <input class='username' type="text" placeholder='johndoe@example.com' {...register("email")} required/><br />
        <input type="password" name="" id="" class='username'  placeholder='*********' {...register("password")} required />
        <button className='mt-20 border-2 pl-10 pr-10 pt-1 pb-1 rounded-4xl bg-blue-600 text-white'>Signin</button>
     
        <button
          type="button"
          className='text-blue-600 underline mt-9'
          onClick={() => setToggler(false)}
        >
          Create an Account?
        </button>
       
      </form>
    </div>
  )
}

export default Signin