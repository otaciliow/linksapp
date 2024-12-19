import { useState, useEffect } from 'react';

import { Social } from '../../components/Social';
import { FaFacebook, FaLinkedin, FaInstagram } from 'react-icons/fa'

import { db } from '../../services/firebaseconnection';
import { getDoc, getDocs, collection, orderBy, query, doc } from 'firebase/firestore';

interface ILinkProps {
    id: string;
    name: string;
    url: string;
    bg: string;
    color: string;
}

interface ISocialLinksProps {
    facebook: string;
    instagram: string;
    linkedin: string;
}

export function Home() {

    const [links, setLinks] = useState<ILinkProps[]>([]);
    const [socialLinks, setSocialLinks] = useState<ISocialLinksProps>();

    useEffect( () => {
        function loadLinks() {
            const linksRef = collection(db, 'links');
            const queryRef = query(linksRef, orderBy('created', 'asc'));

            getDocs(queryRef)
            .then((snapshot) => {
                let lista = [] as ILinkProps[];

                snapshot.forEach((doc) => {
                    lista.push({
                        id: doc.id,
                        name: doc.data().name,
                        url: doc.data().url,
                        bg: doc.data().bg,
                        color: doc.data().color,
                    })
                })
                setLinks(lista);
            })
            
        }
        
        loadLinks();
    }, [])

    useEffect(() => {
        function loadSocialLinks() {
            const docRef = doc(db, 'social', 'link');

            getDoc(docRef)
            .then((snapshot) => {
                if (snapshot.data() !== undefined) {
                    setSocialLinks({
                        facebook: snapshot.data()?.facebook,
                        instagram: snapshot.data()?.instagram,
                        linkedin: snapshot.data()?.linkedin,
                    })
                }
            })
        }

        loadSocialLinks();
    }, [])

    return (
        <main className="flex flex-col w-full py-4 items-center justify-center">
            <h1 className="text-white text-3xl md:text-4xl font-bold mt-20">LinksApp</h1>
            <span className="text-gray-50 mb-5 mt-3">Veja meus links 👇🏼</span>

            {links.map((link) => (
                <section className="flex flex-col w-11/12 max-w-xl text-center" key={link.id}>
                    <div className="mb-4 w-full py-2 rounded-lg select-none transition-transform hover:scale-105 cursor-pointer" style={{background: link.bg}}>
                        <a href={link.url} rel="noopener noreferrer" target="_blank">
                            <p className="text-base md:text-lg" style={{color: link.color}}>{link.name}</p>
                        </a>
                    </div>
                </section>
            ))}

            { socialLinks && Object.keys(socialLinks).length > 0 && 
                <footer className="flex flex-row justify-center gap-3 my-4">
                    <Social url={socialLinks?.facebook}>
                        <FaFacebook size={35} color="#fff" />
                    </Social>
                    
                    <Social url={socialLinks?.linkedin}>
                        <FaLinkedin size={35} color="#fff" />
                    </Social>
                    
                    <Social url={socialLinks.instagram}>
                        <FaInstagram size={35} color="#fff" />
                    </Social>
                </footer>
            }
        </main>
    )
}