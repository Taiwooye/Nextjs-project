'use client'
import React from 'react'
import Image from 'next/image'
import { useState } from 'react';
import { useRouter } from 'next/navigation';

function page() {

  const [username, setUsername] = useState('brickeardn');
  const [password, setPassword] = useState('bMQnPttV');

  const router = useRouter();

  const handleLogin = async (e:any) => {
    e.preventDefault();

    alert('Login Clicked');

    const response = await fetch('https://dummyjson.com/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        username,
        password,
      }),
    });

    if (response.ok) {
      const data = await response.json();
      console.log(data);
      router.push("/login", {scroll: false})
    } else {
    
      alert("can't log-in")
    }

  };

 return(
  <div className="hero min-h-screen bg-stone-600">
  <div className="hero-content flex-col lg:flex-row-reverse">

    <div className="card flex-shrink-0 max-w-sm shadow-2xl bg-base-100 w-68">
      <form className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            type="text"
            value={username}
            placeholder='username'
            onChange={(e) => setUsername(e.target.value)}
            className="input input-bordered bg-white w-full mt-5"
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input
          placeholder='password'
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
     className="input input-bordered bg-white w-full" />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
        <button
   type="button" onClick={handleLogin}
   className="btn btn-xs sm:btn-sm 
  md:btn-md lg:btn-l w-34 bg-white">submit</button>
        </div>
      </form>
    </div>
  </div>
</div>


 )
}

export default page