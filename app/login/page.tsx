'use client'
import React, { useState, useEffect } from "react";
import Image from 'next/image';


interface product{
  id: number,
  price:number,
  thumbnail:string,
  title:string,
  description:string,
  stock:number,

}

export default function Welcome() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('https://dummyjson.com/products?limit=15') 
      .then((response) => response.json())
      .then((data) =>{
        console.log(data);
        setData(data.products);
      }

     );
  }, []);

  return (
    <main className="grid 
    bg-gray-300
    sm:grid-cols-2
    sm:gap-x-5
    sm:gap-y-5
    md:grid-cols-2
    lg:grid-cols-4
    py-8
    gap-x-4 gap-y-4
      ">
      {data.map((item:product) => (
        <div className="card w-68 bg-black
         text-white h-96 shadow-xl border-none" key={item.id}>
          <figure>
            <img src={item.thumbnail} alt="Shoes" /> 
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              {item.title}
              <div className="badge badge-secondary">NEW</div>
            </h2>
            <p>{item.description}</p>
            <div className="card-actions justify-end">
              <div className="badge badge-outline w-24 h-10 bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% "
              >stock {item.stock}</div> 
              <div className="badge badge-outline w-24 h-10 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 "
              >{`$: ${item.price}`}</div> 
            </div>
          </div>
        </div>
      ))}
    </main>
  );
}
