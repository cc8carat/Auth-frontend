import { useForm } from 'react-hook-form';
import { useAuth } from '../context/AuthContext';
import { Navigate, Link, useLocation } from 'react-router-dom';

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { isAuthenticated, signin, loading } = useAuth();
  const location = useLocation();
  const from = location.state?.from?.pathname || '/myspace';
  const onSubmit = (formData) => signin(formData);
  if (loading) return 'Loading...';
  if (isAuthenticated) return <Navigate to={from} replace />;
  return (
    <div className='row justify-content-center'>
      <div className='col-md-4'>
        <form onSubmit={handleSubmit(onSubmit)} autoComplete='off'>
          <div>
            <label htmlFor='email' className='form-lable'>
              Email:
            </label>
            <input className={errors.email ? 'form-control is-invalid' : 'form-control'} type='email' {...register('email', { required: true })} />
            {errors.email && <div className='invalid-feedback'>Email is required.</div>}
          </div>
          <div>
            <label htmlFor='password' className='form-lable'>
              Password:
            </label>
            <input className={errors.password ? 'form-control is-invalid' : 'form-control'} type='password' {...register('password', { required: true })} />
            {errors.password && <div className='invalid-feedback'>Password is required.</div>}
          </div>
          <div>
            <small>
              Don't have an account?
              <Link to='/register' state={{ from }}>
                Register
              </Link>
              instead
            </small>
          </div>
          <button type='submit' className='btn btn-success mt-3'>
            Log in
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
