'use client'
import React from 'react'
// import Frame from '../../public/images/Frame.jpg'
import Frame from '../public/images/Frame.jpg'
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
      router.push("/home", {scroll: false})
    } else {
    
      alert("can't log-in")
    }

  };

 return(
<div className="form-control grid gap-2 place-content-center h-65 w-88">
  <div className=' bg-blue p-5 w-58'>
  <div className="h-auto max-w-full">
  <Image src={Frame}
   alt='na image' 
    className='object-cotain'/>
  
  </div>
  <label className="input-group mb-4">
        
          <input
            type="text"
            value={username}
            placeholder='username'
            onChange={(e) => setUsername(e.target.value)}
            className="input input-bordered bg-white w-full mt-5"
          />
            </label>


  <label className="input-group mb-4">
          <input
          placeholder='password'
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
     className="input input-bordered bg-white w-full" />
  </label>
  
  <button
   type="button" onClick={handleLogin}
   className="btn btn-xs sm:btn-sm 
  md:btn-md
   lg:btn-l w-34 h-48 
    bg-white"
  >submit</button>
 
  </div>
</div>
 )
}

export default page