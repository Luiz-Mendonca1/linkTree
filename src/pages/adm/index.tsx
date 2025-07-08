import { Header } from "../../components/header/header"
import { Input } from "../../components/input"
import { useState } from "react"

export function Adm(){
    const [nameInput, setNameInput] = useState('')
    const [urlInput, setUrlInput] = useState('')
    const[textColorInput, setTextColorInput] = useState('#ffffff')
    const[backgroundColorInput, setBackgroundColorInput] = useState('#101010')


    return(
        <div className="flex items-center flex-col min-h-screen pb-7 px-2">
            <Header/>

            <form className="flex flex-col mt-8 mb-3 max-w-xl">
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

                <div className="flex items-center justify-start flex-col mb7 p-1 border-e-gray-400 border rouded-md">
                    <label className="text-white font-medium mt-2 mb-2">
                        take a look
                    </label>
                    <article className="w-11/12 max-w-lg flex flex-col items-center justify-between bg-zinc-900 rounded px-1 py-3"
                    style={{marginBottom: 8, marginTop: 9, backgroundColor: backgroundColorInput}}>
                        <p className="font-medium" style={{color: textColorInput}}>YouTube chanel</p>
                    </article>
                </div>

            </form>
        </div>
    )
}