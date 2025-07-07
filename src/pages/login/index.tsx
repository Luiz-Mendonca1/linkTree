import { Link } from "react-router"
import { Input } from "../../components/input"
import { useState, type FormEvent } from "react"


export function Login(){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

function handleSubmit(e: FormEvent){
    e.preventDefault()

    console.log({
        email: email,
        password: password
    })
}

    return(
    <div className="flex w-full h-screen items-center justify-center flex-col">
        <Link to='/'>
         <h1 className="mt-11 mb-7 font-bold text-5xl bg-gradient-to-t from-blue-800 to-blue-100 bg-clip-text text-transparent">Link
            <span className="text-white">Maker</span>
         </h1>
        </Link>
        
        
        <form onSubmit={handleSubmit} className="w-full max-w-xl flex flex-col px-2">
            <Input placeholder="Digite seu email..."
            type="email"
            value={email}
            onChange={(e)=>{setEmail(e.target.value)}}></Input>
            <Input placeholder="Digite password..."
            type="password"
            value={password}
            onChange={(e)=>{setPassword(e.target.value)}}></Input>
            
            <button className="h9 bg-blue-400 rounded border-0 text-lg font-medium">Acess</button>
        </form>
    </div>
    )
}