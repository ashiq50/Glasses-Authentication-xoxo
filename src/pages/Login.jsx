
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import SocialLogin from "./SocialLogin";
import UseAuth from "../hooks/UseAuth";


const Login = () => {
  const {signInUser} = UseAuth();
  // navigate
  const navigate = useNavigate()
  const location = useLocation()
  const form = location?.state || '/'
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()
  const onSubmit = (data) => {
    const {email, password} = data;
    signInUser(email, password)

    
    .then(result =>{
      if(result.user){
          navigate(form)
      }
  })
  }


    return (
        <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form onSubmit={handleSubmit(onSubmit)} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="email" className="input input-bordered" 
          {...register("email", { required: true })}
          />
          {errors.email && <span className="text-red-500">This field is required</span>}
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" placeholder="password" className="input input-bordered" 
          {...register("password", { required: true })}
          />
          {errors.password && <span className="text-red-500">This field is required</span>}
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
        <p>New to here?Please <Link to="/register" className="text-blue-700">Register</Link></p>
      </form>
      <SocialLogin></SocialLogin>
    </div>
  </div>
</div>
    );
};

export default Login;