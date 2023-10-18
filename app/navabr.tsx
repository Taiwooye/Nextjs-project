import React from 'react'
import Link from 'next/link';

function navabr() {
  
  return (
    <div className="navbar bg-base-100 h-26">
    <div className="flex-1">
      <a className="btn btn-ghost normal-case text-2xl"><Link href="/home">Shop4me</Link></a>
    </div>
    <div className="flex-none">
      <ul className="menu menu-horizontal px-9 text-xl">

        <li><Link href="/home">Sign-In</Link></li>
        <li><Link href="/login">Products</Link></li>    
        <li><Link href="/quote_author">Quotes</Link></li>    
      </ul>
    </div>
  </div>
  )
}

export default navabr
