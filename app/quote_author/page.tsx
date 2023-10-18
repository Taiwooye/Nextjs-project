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

<div className="text-sm breadcrumbs py-5">
  <ul className="text-xl text-neutral-900">
  <li className="text-xl text-neutral-900">Home</li>
    <li><a href="/quote_author" className="text-xl text-neutral-900">Authors</a></li>
  </ul>
</div>

 <div className="
    sm:grid-cols-2
    sm:gap-x-5
    sm:gap-y-5
    md:grid-cols-2
    lg:grid-cols-3
    my-8
    shadow-xl
    image-full
    grid gap-x-4 gap-y-4">
      {data.map((item:quoteType) => (
          <div className="card w-96 bg-neutral text-primary-content border-none">
            <figure><img src={"/images/"+img_single[item.author].images} alt="Shoes" /></figure>
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
</div> 


</main>
)
}

export default quoteAuthor
