import React from "react";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";

const Signup = (props) => {
  const { toggler, setToggler, user, setUser } = props;

  const { register, handleSubmit, reset, required } = useForm();

  //  ON SUBMIT, ADD DATA TO user STATE
  const onSubmit = (data) => {
    setUser([...user, { name: data.name, email: data.email }]);
    reset(); // clear form

   

   

    const exists = user.some((u) => u.email === data.email);
    if (exists) {
      toast.error("User already exists!");
    } else {
      setUser([...user, { name: data.name, email: data.email }]);
      toast.success("Signup successful!");
      reset();
    }
  };

  return (
    <div>
      <form
        action=""
        onSubmit={handleSubmit(onSubmit)}
        className="w-full max-w-sm md:max-w-md lg:max-w-lg bg-[#efe9eb] border-2 border-black flex flex-col items-center overflow-y-auto p-4 rounded-xl shadow-lg max-h-[90vh]"
      >
        <h1 className="text-3xl pt-3.5 pl-2 m-4">Create Account</h1>
        <input
          class="username"
          type="text"
          placeholder="john doe"
          {...register("name")}
          required
          autoFocus
        />
        <br />
        <input
          class="username"
          type="text"
          placeholder="johndoe@example.com"
          {...register("email")}
          required
        />
        <br />
        <input
          type="password"
          name=""
          id=""
          class="username"
          placeholder="*********"
          {...register("password")}
          required
        />
        <button className="mt-5 border-2 pl-10 pr-10 pt-1 pb-1 rounded-4xl bg-blue-600 text-white">
          SignUp
        </button>
        <a className="text-blue-900 mt-5 cursor-pointer">
          {" "}
          Already have an Account ?
        </a>
        <button
          onClick={() => {
            setToggler(true);
          }}
          className="text-blue-600"
        >
          SignIn
        </button>
      </form>
    </div>
  );
};

export default Signup;
