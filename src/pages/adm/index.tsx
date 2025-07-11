import { Header } from "../../components/header/header"
import { Input } from "../../components/input"
import { useEffect, useState, type FormEvent } from "react"
import { FiTrash } from "react-icons/fi"
import { db } from "../../services/firebaseconction"
import { addDoc, collection, onSnapshot, query, orderBy, doc, deleteDoc } from "firebase/firestore"


interface LinkProps{
    id: string,
    name: string,
    url: string,
    bg: string,
    color: string
}

export function Adm(){
    const [nameInput, setNameInput] = useState('')
    const [urlInput, setUrlInput] = useState('')
    const[textColorInput, setTextColorInput] = useState('#ffffff')
    const[backgroundColorInput, setBackgroundColorInput] = useState('#101010')

    const [links, setLinks] = useState<LinkProps[]>([])

    useEffect(()=>{
        const linksRef = collection(db, 'links')
        const queryRef = query(linksRef, orderBy('created', 'asc'))

        const unsub = onSnapshot(queryRef, (snapshot)=>{
            let lista = [] as LinkProps[]

            snapshot.forEach((doc)=>{
                lista.push({
                    id:doc.id,
                    name: doc.data().name,
                    url: doc.data().url,
                    bg: doc.data().bg,
                    color: doc.data().color
                })
            })

            setLinks(lista)
        })
        return()=>{
            unsub()
        }
    },[])

    async function handleRegister(e:FormEvent) {    
        e.preventDefault()

        if(nameInput===''||urlInput===''){
            alert('put info')
            return
        }

        await addDoc(collection(db, 'links'),{
            name: nameInput,
            url: urlInput,
            bg: backgroundColorInput,
            color: textColorInput,
            created: new Date()
        })
        .then(()=>{
            setNameInput('')
            setUrlInput('')
            console.log('cadastrado')
        })
        .catch((error) =>{
        console.log('error '+ error)
    })
    }

    async function handleDeleteLink(id: string){
        const docRef = doc(db, 'links', id)
        await deleteDoc(docRef)
    }


    return(
        <div className="flex items-center flex-col min-h-screen pb-7 px-2">
            <Header/>

            <form className="flex flex-col mt-8 mb-3 max-w-xl"
            onSubmit={handleRegister}>
                <label className="text-white font-medium mt-2 mb-2">
                    Link name                    
                </label>
                <Input placeholder="enter the link name"
                value={nameInput}
                onChange={(e)=>setNameInput(e.target.value)}/>

                <label className="text-white font-medium mt-2 mb-2">
                    URL link                   
                </label>
                <Input type="url"
                placeholder="enter the URL"
                value={urlInput}
                onChange={(e)=>setUrlInput(e.target.value)}/>

                <section className="flex my-4 gap-5">
                    <div className="flex gap-2">
                        <label className="text-white font-medium mt-2 mb-2">
                            link color
                        </label>
                        <input type="color"
                        value={textColorInput}
                        onChange={(e)=>setTextColorInput(e.target.value)} />

                        <label className="text-white font-medium mt-2 mb-2">
                            link background color
                        </label>
                        <input type="color"
                        value={backgroundColorInput}
                        onChange={(e)=>setBackgroundColorInput(e.target.value)} />
                    </div>
                </section>

                {nameInput !== '' && (
                    <div className="flex items-center justify-start flex-col mb7 p-1 border-e-gray-400 border rouded-md">
                        <label className="text-white font-medium mt-2 mb-2">
                            take a look
                        </label>
                        <article className="w-11/12 max-w-lg flex flex-col items-center justify-between bg-zinc-900 rounded px-1 py-3"
                        style={{marginBottom: 8, marginTop: 8, backgroundColor: backgroundColorInput}}>
                            <p className="font-medium" style={{color: textColorInput}}>{nameInput}</p>
                        </article>
                    </div>
                )}

                <button type="submit" className="mb-7 bg-blue-500 h-9 rounded-md text-white font-medium gap-4 flex justify-center items-center cursor-pointer">
                    register</button>
            </form>

            <h2 className="font-bold text-white mb-4 text-2xl">
                My links</h2>

                {links.map((link)=>(
            <article
            key={link.id} 
            className="flex items-center justify-between w-11/12 max-w-xl rounded py-3 px-2 mb-2 select-none"
            style={{backgroundColor: link.bg, color: link.color}}>
                <p>{link.name}</p>
                <div>
                    <button className="cursor-pointer border border-dashed p-1 rounded"
                    onClick={()=>handleDeleteLink(link.id)}>
                        <FiTrash size={20 } color="#FFF"/>
                    </button>
                </div>
            </article>
            ))}
        </div>
    )
}