import { Link } from "react-router"

export function Login(){
    return(
    <div className="flex w-full h-screen items-center justify-center flex-col">
        <Link to='/'>
         <h1 className="mt-11 mb-7 font-bold text-5xl bg-gradient-to-t from-blue-800 to-blue-100 bg-clip-text text-transparent">Link
            <span className="text-white">Maker</span>
         </h1>

        </Link>
        
    </div>
    )
}