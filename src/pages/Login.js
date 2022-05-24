// import React from "react";
// import { useSignInWithGoogle } from "react-firebase-hooks/auth";
// import auth from "../firebase.init";
// import { useForm } from "react-hook-form";

// const Login = () => {
//   const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
//   const {
//     register,
//     formState: { errors },
//     handleSubmit,
//   } = useForm();

//   if (user) {
//     console.log(user);
//   }
//   const onSubmit = data => console.log(data);
//   return (
//     <div className="flex h-screen justify-center items-center">
//       <div className="card w-96 bg-base-100 shadow-xl">
//         <div className="card-body">
//           <h2 className="text-center text-2xl font-bold">Login</h2>
//           <form onSubmit={handleSubmit(onSubmit)}>
//             <input {...register("firstName", { required: true })} />
//             {errors.firstName?.type === "required" && "First name is required"}

//             <input {...register("lastName", { required: true })} />
//             {errors.lastName && "Last name is required"}

//             <input type="submit" />
//           </form>
//           <div className="divider">OR</div>
//           <button
//             onClick={() => signInWithGoogle()}
//             className="btn btn-outline"
//           >
//             Continue with Google
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Login;
import React from 'react';

const Login = () => {
    return (
        <div>
            <h1>login</h1>
        </div>
    );
};

export default Login;