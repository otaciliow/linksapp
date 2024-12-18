import { FormEvent, useState } from 'react';
import { FiTrash } from 'react-icons/fi'

import { Header } from '../../components/Header';
import { Input } from '../../components/Input';

export function Admin() {

    const [nameInput, setNameInput] = useState("");
    const [urlInput, setUrlInput] = useState("");
    const [bgColorInput, setBgColorInput] = useState("#121212");
    const [textColorInput, setTextColorInput] = useState("#f1f1f1");

    return (
        <div className="flex items-center flex-col min-h-screen pb-7 px-2">
            <Header/>

            <form className="flex flex-col mt-8 mb-3 w-full max-w-xl">
                
                <label className="text-white font-medium my-2" htmlFor="name-link">Nome do Link</label>
                <Input id="name-link" placeholder="Digite um nome para o link" value={nameInput} onChange={(e) => setNameInput(e.target.value)} />

                <label className="text-white font-medium my-2" htmlFor="url-link">Nome do Link</label>
                <Input id="url-link" placeholder="Digite um nome para o link" value={urlInput} onChange={(e) => setUrlInput(e.target.value)} />

                <section className="flex justify-around my-4">
                    <div className="flex gap-3">
                        <label className="text-white font-medium my-2" htmlFor="bg-link">Cor do fundo do link</label>
                        <Input 
                            id="bg-link" 
                            type="color" 
                            placeholder="Digite um nome para o link" 
                            value={bgColorInput} 
                            onChange={(e) => setBgColorInput(e.target.value)} 
                            className=""
                        />
                    </div>

                    <div className="flex gap-3">
                        <label className="text-white font-medium my-2" htmlFor="color-link">Cor do texto do link</label>
                        <Input id="color-link" type="color" placeholder="Digite um nome para o link" value={textColorInput} onChange={(e) => setTextColorInput(e.target.value)} />
                    </div>

                </section>


                {nameInput !== '' && (
                    <section className="flex items-center justify-center flex-col mb-7 p-1 border-gray-100/25 border rounded-md">
                        <label htmlFor="" className="text-white font-medium mt-2 mb-3">Veja como está ficando:</label>
                        <article className="w-11/12 max-w-lg flex flex-col items-center justify-between rounded px-1 py-3" style={{ backgroundColor: bgColorInput} }>
                            <p style={{color: textColorInput}}>{nameInput}</p>
                        </article>
                    </section>
                    )
                }
                
                <button className="bg-purple-600 h-9 rounded-md text-white font-medium gap-4 flex justify-center items-center mb-7 hover:bg-purple-500 transition-all">
                    Cadastrar
                </button>

            </form>

            <h2 className="font-bold text-white mb-4 text-2xl">Meus Links</h2>

            <article className="flex items-center justify-between max-w-xl w-11/12 rounded py-3 px-2 mb-2 select-none" style={{backgroundColor: "rgba(21,44,213)", color: "#121212"}}>
                <p className="font-medium">Link do LinkedIn</p>
                <div>
                    <button className="cursor-pointer border border-white rounded border-dashed p-1 hover:bg-neutral-900 transition-all">
                        <FiTrash size={18} color="#fff" />
                    </button>
                </div>
            </article>
        </div>
    )
}