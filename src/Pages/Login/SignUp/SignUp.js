import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthProvider } from '../../../context/AuthContext';

const SignUp = () => {
    const { createUser, updateUserProfile } = useContext(AuthProvider)
    const [loginErr, setLoginErr] = useState('');
    const navegate = useNavigate();
    const location = useLocation();
    const from = location?.state?.form?.pathname || '/'

    const { register, handleSubmit, formState: { errors } } = useForm()
    const onSubmit = data => {
        setLoginErr('')
        console.log(data.email)
        const update = {
            displayName: data.name
        }
        createUser(data.email, data.pass)
            .then(result => {
                const user = result.user;
                console.log(user);
                toast("success")
                updateUserProfile(update)
                .then(() =>{})
                .catch(err => setLoginErr(err.code))
                navegate(from, { replace: true })
            })
            .catch(err => setLoginErr(err.code.slice(5,)))
    }
    return (
        <div className="min-h-screen flex items-center justify-center">
            <div className="">

                <div className="card flex-shrink-0 w-full max-w-lg shadow-xl bg-base-100">
                    <h6 className='text-lg text-center my-5'>Sign Up</h6>
                    <div className="card-body ">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input {...register("name", { required: "Please enter your name" })} type="text" className="input  input-bordered " />
                                {errors.name && <span className='text-red-500'>{errors.name.message}</span>}
                            </div>
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
                            </div>
                            <div className="form-control mt-6">
                                <button type='submit' className="btn btn-accent">SignUp</button>
                            </div>
                        </form>
                        <div className='px-14'>
                            <p><small>You have an account?<Link to='/login' className='text-secondary'> Please login</Link></small></p>
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

export default SignUp;