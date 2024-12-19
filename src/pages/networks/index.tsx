import { FormEvent, useState, useEffect } from 'react';

import { db } from "../../services/firebaseconnection";
import { setDoc, doc, getDoc } from 'firebase/firestore';

import { Header } from '../../components/Header';
import { Input } from '../../components/Input';

export function Networks() {

    const [facebook, setFacebook] = useState("");
    const [instagram, setInstagram] = useState("");
    const [linkedin, setLinkedin] = useState("");

    useEffect(() => {
        function loadLinks() {
            const docRef = doc(db, 'social', 'link');
            getDoc(docRef)
            .then((snapshot) => {
                if (snapshot.data() !== undefined) {
                    setFacebook(snapshot.data()?.facebook);
                    setInstagram(snapshot.data()?.instagram);
                    setLinkedin(snapshot.data()?.linkedin);
                }
            })
            .catch((error) => {
                console.log("Aconteceu um erro! Veja:" + error);
            })
        }

        loadLinks()
    }, [])

    function handleUrlRegister(e: FormEvent) {
        e.preventDefault();

        setDoc(doc(db, 'social', 'link'), {
            facebook: facebook,
            instagram: instagram,
            linkedin: linkedin
        })
        .then(() => {
            console.log(facebook, instagram, linkedin)
        })
        .catch((error) => {
            console.log("Aconteceu um erro! Veja:" + error);
        })
    }

    return (
        <div className="flex items-center flex-col min-h-screen pb-7 px-2">
            <Header />

            <h1 className="text-white text-2xl font-medium mt-8 mb-4">Minhas redes sociais</h1>

            <form className="flex flex-col max-w-xl w-full" onSubmit={handleUrlRegister}>

                <label htmlFor="url-facebook" className="text-white font-medium my-2">Link do facebook</label>
                <Input id="url-facebook" type="url" placeholder="Digite a url do facebook" value={facebook} onChange={(e) => setFacebook(e.target.value)} />

                <label htmlFor="url-instagram" className="text-white font-medium my-2">Link do instagram</label>
                <Input id="url-instagram" type="url" placeholder="Digite a url do instagram" value={instagram} onChange={(e) => setInstagram(e.target.value)} />

                <label htmlFor="url-linkedin" className="text-white font-medium my-2">Link do linkedin</label>
                <Input id="url-linkedin" type="url" placeholder="Digite a url do linkedin" value={linkedin} onChange={(e) => setLinkedin(e.target.value)} />

                <button className="text-white bg-blue-600 h-9 rounded-md flex items-center justify-center mb-7 font-medium hover:bg-blue-500 transition-all">Salvar links</button>

            </form>
        </div>
    )
}