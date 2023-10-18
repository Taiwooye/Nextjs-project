'use client'
import React, { useState, useEffect } from "react";
import Image from 'next/image';
import { WhatsappShareButton, WhatsappIcon} from 'next-share'
import { LinkedinShareButton, LinkedinIcon} from 'next-share'
import Quotes from '../../quotes_list.json'
import { Link } from "react-router-dom";

interface quoteType{
  author:string,
  quote:string,
  category:string
}
function quote({params}: {params: {slug:string}}) {

  const decodeParam = decodeURIComponent(params.slug);

  const [data, setData] = useState<quoteType[] | undefined>([]);

  useEffect(() => {

     let filterQuote:quoteType[] = [];

   Quotes.map((item:quoteType) => {
      if(item.author == decodeParam){
        filterQuote.push(item);
        return item;
      }
     });
     setData(filterQuote);
  }, []);

  const Images =  [{
    'Muhammad Ali': {
         "images": "ali.jpg"
     },
 
     'Nelson Mandela':{
         "images": "Nelson.jpg"
     },
 
     'Lily Tomlin': {
         "images": "lily.jpg"
     },    
     'Albert Einstein':{
         "images": "Albert-Einstein.jpg"
     },
     'Albert Schweitzer':{
         "images": "Albert-Schweitzer.jpg"
     },
      }
 ]

 const img_single = Images[0];



  return (
<div className="hero min-h-screen w-full" style={{backgroundImage: `url(/images/${img_single[decodeParam].images})`}}>
  <div className="hero-overlay bg-opacity-50"></div>
  
<div className="
    sm:grid-cols-2
    sm:gap-x-5
    sm:gap-y-5
    md:grid-cols-2
    lg:grid-cols-3
    my-8
    grid gap-x-4 gap-y-4
    py-5
    "
    >
      {data != undefined && data.map((item:quoteType) => (
          <div className="card w-96  card-bordered border-slate-400 bg-neutral text-primary-content border-4 ">
          <div className="card-body">
            <h2 className="card-title">{item.author}</h2>
            <p>{item.quote}</p>
            <div className="card-actions justify-end">
            <button className="justify justify-around">
            <WhatsappShareButton
  url={'https://github.com/next-share'}
  title={item.quote}
  separator=":: "
>
  <WhatsappIcon size={32} round />
   </WhatsappShareButton>


   <LinkedinShareButton url={'https://github.com/next-share'}
  title={item.quote}>
  <LinkedinIcon size={32} round />
</LinkedinShareButton>
                  </button>
            </div>
          </div>
        </div>

      ))}
</div>


  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
   {/*    <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
      <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
      <button className="btn btn-primary">Get Started</button> */}

      
    </div>
  </div>
</div>
)
}

export default quote
