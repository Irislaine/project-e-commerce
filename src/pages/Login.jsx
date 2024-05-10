import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import useAuth from '../hooks/useAuth';
import './styles/login.css';

const Login = () => {

  const [hasToken, setHasToken] = useState();
  const loginUser = useAuth();
  const navigate = useNavigate();


  useEffect(() => {
    setHasToken(localStorage.getItem('token'));
  }, []);


  const { handleSubmit, register, reset } = useForm()

  const submit = async (data) => {
    const url = 'https://e-commerce-api-v2.academlo.tech/api/v1/users/login';
    await loginUser(url, data);
    reset({
      email: '',
      password: '',
    });

    setTimeout(() => {
      setHasToken(localStorage.getItem('token'));
      navigate('/cart');
    }, 2000);
  }

  const handleLogout = () => {
    localStorage.removeItem('token');
    setHasToken();
  }

  return (
    <>
      {
        hasToken ?
          <button onClick={handleLogout}>Logout</button>
          :
          <div>
            <form onSubmit={handleSubmit(submit)}>
              <div className="auth">
                <div className="auth__content">
                  <div className="auth__header">
                    <h1 className="auth__title">Welcome!</h1>
                    <p className="auth__description">Enter your email and password to continue</p>
                    <div />
                  </div>
                </div>
                <div className='auth__data'>
                  <label htmlFor="email">Email </label>
                  <input {...register('email')} id='email' type="email" />
                  <label htmlFor="password">Password </label>
                  <input {...register('password')} id='password' type="password" />
                  <p> If you are not registered yet <Link to='/register'>Register Here</Link></p>
                  <button className='auth__btn'>Login</button>
                </div>
              </div>
            </form>
          </div>
      }
    </>
  )
}


export default Login;