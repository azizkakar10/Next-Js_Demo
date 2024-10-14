import QuoteCard from "@/components/QuoteCard";
import Link from "next/link";

export const metadata ={
    title : "Quotes"
}

// export const revalidate = 10 // revalidate(refresh random data) at every 10 Seconds

export default async function Quotes (){
      let quotes = await fetch("https://dummyjson.com/quotes")
    //   let quotes = await fetch("https://dummyjson.com/quotes/random",
    //   {cache : "no-cache"}) 

    if(!quotes.ok){
        throw new Error ("API Not Working")
    }


      quotes = await quotes.json();
      console.log("quotes" , quotes);                   
    return(
        <div>
        <h1 className="text-center text-3xl text-bold mt-10">Quotes</h1>
        {
            quotes.quotes.map((data) => (
                <Link key={data.id} href={`/quotes/${data.id}`}>
                <QuoteCard  author={data.author} quote={data.quote}/>
                </Link>
                ))
        }

         
          {/* <h1 className="text-center text-3xl text-bold mt-10">Quotes</h1>
        {
                <QuoteCard  author={quotes.author} quote={quotes.quote}/>
                
        } */}

        </div>
    )
}