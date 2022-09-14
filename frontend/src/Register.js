import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
export default function Register() {
  return (
   <>
   <div className="container-fluid p-5">
    <div className="container">
        <form>
            <div className="container mt-5">
                <label className="form-control" for="email">Email</label>
                <input className="form-control" type="text" placeHolder="Enter your email address..." required />
            </div>
            <div className="container mt-5">
                <label className="form-control" for="password">Password</label>
                <input className="form-control" type="text" placeHolder="Enter your email address..." required />
            </div>
            <button type="submit" className="btn btn-dark">Submit</button>
        </form>
    </div>
   </div>
   </>
  )
}
