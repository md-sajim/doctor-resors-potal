import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useForm } from "react-hook-form";
import { AuthProvider } from '../../context/AuthContext';
import useToken from '../../hokes/useToken';

const Login = () => {
    const { login } = useContext(AuthProvider)
    const [loginErr, setLoginErr] = useState('')
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const [loginEmail, setLoginEmail] = useState('');
    const [token] = useToken(loginEmail)
    const navigat = useNavigate();
    const location = useLocation();
    const from = location?.state?.form?.pathname || "/"
    if (token) {
        navigat(from, { replace: true })
    }
    const onSubmit = data => {
        login(data.email, data.pass)
            .then(result => {
                const user = result.user;
                console.log(user);
                setLoginEmail(data.email)

            })
            .catch(err => {
                setLoginErr(err.code.slice(5,))
            })
    };
    // console.log(watch("email")); 

    return (
        <div className="min-h-screen flex items-center justify-center">
            <div className="">

                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <h6 className='text-lg text-center my-5'>Login</h6>
                    <div className="card-body">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input {...register("email", { required: "Please enter your email" })} type="text" className="input  input-bordered " />
                                {errors.email && <span className='text-red-500'>{errors.email.message}</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input {...register("pass", {
                                    required: "Please enter your password...",
                                    minLength: {
                                        value: 8,
                                        message: "password menimum 8 digits"
                                    }
                                })} type="text" className="input  input-bordered" />
                                {errors.pass && <span className='text-red-500'>{errors.pass.message}</span>}
                                {loginErr && <span className='text-red-500'>{loginErr}</span>}
                                <label className="label">
                                    <a href="#0" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button type='submit' className="btn btn-accent">Login</button>
                            </div>
                        </form>
                        <div className='px-7'>
                            <p><small>New to Doctors Portal?<Link to='/signup' className='text-secondary'> Create new account</Link></small></p>
                        </div>
                        <div className="divider">OR</div>
                        <div className="form-control mt-6">
                            <button style={{ outline: "1px solid gray" }} className="btn bg-white outline-none border-0 text-accent hover:text-white">CONTINUE WITH GOOGLE</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;