
export default async function BlogDetail ({params}) {
  let blogs =  await fetch (`https://jsonplaceholder.typicode.com/posts/${params.blogid}`)
    blogs = await blogs.json();
    // console.log("blogs=>", blogs);
    return(
      <div className="border border-black">
        <h1 className="border border-black text-center text-5xl p-2 mt-10">Blog Detail</h1>
        <h1 className="text-center text-4xl p-2 mt-10 font-bold">{blogs.title}</h1>
        <h1 className="text-center text-3xl p-2 ">{blogs.body}</h1>
      </div>
    );
};