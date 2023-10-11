import React from 'react'

function navabr() {
  return (
    <div className="navbar bg-base-100">
    <div className="flex-1">
      <a className="btn btn-ghost normal-case text-xl">Shop4me</a>
    </div>
    <div className="flex-none">
      <ul className="menu menu-horizontal px-9">
        <li><a>home</a></li>
        <li><a>about</a></li>
        <li><a>contact</a></li>
     
      </ul>
    </div>
  </div>
  )
}

export default navabr
