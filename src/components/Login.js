import { useForm } from "react-hook-form";
import { useAuth } from "../context/AuthContext";
import { Navigate, Link } from "react-router-dom";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { isAuthenticated, signup } = useAuth();
  const onSubmit = (formData) => signup(formData);

  if (isAuthenticated) return <Navigate to='/myspace' />;
  return (
    <div className='row justify-content-center'>
      <div className='col-md-4'>
        <form onSubmit={handleSubmit(onSubmit)} autoComplete='off'>
          <label htmlFor='name' className='form-lable'>
            Name:
          </label>
          <input
            className='form-control'
            {...register("name", { required: true })}
          />
          {errors.name && <div>Name is required.</div>}
          <label htmlFor='email' className='form-lable'>
            Email:
          </label>
          <input
            className='form-control'
            {...register("email", { required: true })}
          />
          {errors.email && <div>Email is required.</div>}
          <label htmlFor='password' className='form-lable'>
            Password:
          </label>
          <input
            className='form-control'
            {...register("password", { required: true })}
          />
          {errors.password && <div>Password is required.</div>}
          <div>
            <small>
              Already have an account? <Link to='/login'>Log in</Link> instead
            </small>
          </div>

          <button type='submit' className='btn btn-success mt-3'>
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
