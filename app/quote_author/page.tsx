'use client'
import React, { useState, useEffect } from "react";
import Image from 'next/image';
import { WhatsappShareButton, WhatsappIcon} from 'next-share'
import { LinkedinShareButton, LinkedinIcon} from 'next-share'
import Quotes from '../quotes_list.json'
import Link from "next/link";

interface quoteType{
  author:string,
  quote:string,
  category:string
}
function quoteAuthor() {

  const [data, setData] = useState<quoteType[]>([]);

  useEffect(() => {
 
     let uniqeAuthor:string[] = [];
     let authorQuotes:quoteType[] = [];

     Quotes.map((item) =>{

        if(uniqeAuthor.indexOf(item.author) == -1){
            uniqeAuthor.push(item.author);
            authorQuotes.push(item);
        }  

     });

    setData(authorQuotes);

  }, []);


  return (
<main className="bg-gray-300 flex justify-center">

<div className="text-sm breadcrumbs">
  <ul>
  <li>Home</li>
    <li><a href="/quote_author">Authors</a></li>
  </ul>
</div>
<div className="card w-96 bg-base-100 shadow-xl image-full">
  <figure><img src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">Shoes!</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>

{/* <div className="
    sm:grid-cols-2
    sm:gap-x-5
    sm:gap-y-5
    md:grid-cols-2
    lg:grid-cols-3
    my-8
    grid gap-x-4 gap-y-4">
      {data.map((item:quoteType) => (
          <div className="card w-96 bg-secondary text-primary-content border-none">
          <div className="card-body">
            <h2 className="card-title">{item.author}</h2>
            <p>{item.quote}</p>
            <div className="card-actions justify-end">
            
                <Link href={"/quote/"+item.author}>
                <button className="btn btn-primary">

                More Quote
                </button>
                </Link>
                
               
            </div>
          </div>
        </div>

      ))}
</div> */}


</main>
)
}

export default quoteAuthor
