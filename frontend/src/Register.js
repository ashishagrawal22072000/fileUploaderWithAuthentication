import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.css';
export default function Register() {
    const [signup, setSignup] = useState({
        email : "",
        password : "",
    })
  return (
   <>
   <div className="container p-5">
    <div className="container p-5">
        <form className="container p-5">
            <h1 className="text-center">Registration Form</h1>
            <div className="container mt-5 w-50">
                <label for="email" className="mt-2">Email</label>
                <input className="form-control" type="text" placeHolder="Enter your email address..." name="email" value={signup.email} required  />
            </div>
            <div className="container mt-5 w-50">
                <label for="password" className="mt-2">Password</label>
                <input className="form-control" type="text" placeHolder="Enter your email address..." name="password" value={signup.password} required />
            </div>
            <div className="container mt-5 w-50">
            <button type="submit" className="btn btn-dark mt-4">Submit</button>

                </div>
        </form>
    </div>
   </div>
   </>
  )
}
