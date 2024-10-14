
export default function Card ({data }){
    return(
        <div className="max-w-screen border-2 border-purple-300 flex justify-center items-center p-3 m-3">
            <h1>{data.title}</h1>
        </div>
        
    );
}