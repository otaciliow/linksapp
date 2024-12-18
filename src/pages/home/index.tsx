import { Social } from '../../components/social';
import { FaFacebook, FaLinkedin, FaInstagram } from 'react-icons/fa'

export function Home() {
    return (
        <main className="flex flex-col w-full py-4 items-center justify-center">
            <h1 className="text-white text-3xl md:text-4xl font-bold mt-20">LinksApp</h1>
            <span className="text-gray-50 mb-5 mt-3">Veja meus links 👇🏼</span>

            <section className="flex flex-col w-11/12 max-w-xl text-center">
                <div className="bg-white mb-4 w-full py-2 rounded-lg select-none transition-transform hover:scale-105 cursor-pointer">
                    <a>
                        <p className="text-base md:text-lg">LinkedIn</p>
                    </a>
                </div>
            </section>

            <footer className="flex flex-row justify-center gap-3 my-4">
                <Social url="#">
                    <FaFacebook size={35} color="#fff" />
                </Social>
                
                <Social url="#">
                    <FaLinkedin size={35} color="#fff" />
                </Social>
                
                <Social url="#">
                    <FaInstagram size={35} color="#fff" />
                </Social>
            </footer>
        </main>
    )
}