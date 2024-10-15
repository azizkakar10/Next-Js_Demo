import Card from "@/components/Card";
import Link from "next/link";

export const metadata = {
  title : "Blogs"
}


export default async function Blogs () {
  let blogs =  await fetch ('https://dummyjson.com/posts')
    blogs = await blogs.json();
    console.log("blogs=>", blogs);
    return(
      <div>
      <h1 className="text-center text-3xl text-bold mt-10">Blogs</h1>
       {
            blogs.posts.map((data) => (
                <Link key={data.id} href={`/blogs/${data.id}`}>
                <Card  data={data} />
                </Link>
                ))
        }
       </div>
    );
};

