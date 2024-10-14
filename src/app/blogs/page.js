import Card from "@/components/Card";
import Link from "next/link";


export default async function Blogs () {
  let blogs =  await fetch ('https://jsonplaceholder.typicode.com/posts')
    blogs = await blogs.json();
    // console.log("blogs=>", blogs);
    return(
      
      blogs.map((data) =>
      <Link key={data.id} href={`/blogs/${data.id}`}><Card  data={data}/></Link>
      
      )
    );
};

