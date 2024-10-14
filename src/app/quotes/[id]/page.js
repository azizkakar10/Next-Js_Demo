import { notFound } from "next/navigation"

export async function generateMetadata({ params}, parent) {
    // read route params
    const id = params.id
    // fetch data
    const product = await fetch(`https://dummyjson.com/quotes/${id}`).then((res) => res.json())
    // optionally access and extend (rather than replace) parent metadata
    const previousImages = (await parent).openGraph?.images || []
    return {
      title: product.author,
    }
  }


export default async function SingleQuote ({params}) {
    let singleQuote = await fetch (`https://dummyjson.com/quotes/${params.id}`)
    singleQuote = await singleQuote.json()
    console.log("params=>" , params);
    if (singleQuote.message) notFound();
    return(
        <div className="p-10">
            <h1 className="text-center text-5xl font-mono my-3">{singleQuote.quote}</h1>
            <h1 className="font-normal text-2xl text-center">Quotes by <span className="underline font-bold">{singleQuote.author}</span></h1>
        </div>
    )
}