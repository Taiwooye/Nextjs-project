import React from 'react'
import Link from 'next/link';

function navabr() {
  
  return (
    <div className="navbar bg-base-100">
    <div className="flex-1">
      <a className="btn btn-ghost normal-case text-xl">Shop4me</a>
    </div>
    <div className="flex-none">
      <ul className="menu menu-horizontal px-9">

        <li><Link href="/home">Products</Link></li>
        <li><Link href="/login">Sign-In</Link></li>
        {/* <li><Link href="/signout">Sign-Out</Link></li>
        */}
     
      </ul>
    </div>
  </div>
  )
}

export default navabr
