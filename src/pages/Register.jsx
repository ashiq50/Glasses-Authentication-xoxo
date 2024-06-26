
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import UseAuth from "../hooks/UseAuth";


const Register = () => {
    const {createUser} = UseAuth();

    // navigate
    const navigate = useNavigate()
    const location = useLocation()
    const form = location?.state || '/'
    const {
      register,
      handleSubmit,
      formState: { errors }
    } = useForm();
    const onSubmit  = (data) => {
      const {email, password} = data;
      createUser(email, password)

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
            <span className="label-text">Name</span>
          </label>
          <input type="text" placeholder="Name" name="name" className="input input-bordered"
          {...register("FullName", { required: true })}
          />
          {errors.FullName && <span className="text-red-500">This field is required</span>}
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Photo</span>
          </label>
          <input type="text" placeholder="Photo" name="photo" className="input input-bordered" 
          {...register("photo")}
          />
        </div>
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
          <button className="btn btn-primary">Register</button>
        </div>
        <p>Already have an account?Please <Link to="/login" className="text-blue-700">Login</Link></p>
      </form>
    </div>
  </div>
</div>
    );
};

export default Register;