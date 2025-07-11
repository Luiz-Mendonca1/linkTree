import { Link } from "react-router";

export function NotFound(){
    return(
        <div className="flex w-full min-h-screen justify-center items-center flex-col text-white">
            <h1 className="font-bold text-4xl mb-4">Erro 404</h1>
            <h2 className="mb-2">sua pagina não foi encontrada</h2>
            <Link className="bg-gray-50/20 py-1 px-4 rounded-md" to='/'>Volte a Home</Link>
        </div>
)}