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


  return (
<main className="bg-gray-300 flex justify-center">

<div className="text-sm breadcrumbs">
  <ul>
    <li><a href="/quote_author">Authors</a></li> 
    <li><a>{decodeParam}</a></li> 
  </ul>
</div>

<div className="
    sm:grid-cols-2
    sm:gap-x-5
    sm:gap-y-5
    md:grid-cols-2
    lg:grid-cols-3
    my-8
    grid gap-x-4 gap-y-4">
      {data != undefined && data.map((item:quoteType) => (
          <div className="card w-96 bg-blue-800 text-primary-content border-none">
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


</main>
)
}

export default quote
