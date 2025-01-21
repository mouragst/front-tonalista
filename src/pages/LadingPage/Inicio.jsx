import { useState, useEffect } from 'react';
import BannerButton from '../../components/LandingPage/BannerButton';
import HeaderLanding from '../../components/LandingPage/HeaderLanding';
import Footer from '../../components/LandingPage/Footer';
import ExplicativoLanding from '../../components/LandingPage/ExplicativoLanding';
import './Inicio.css';

const texts = [
    'o seu casamento!',
    'a sua formatura!',
    'a sua festa!',
    'o seu evento!'
];

function Inicio() {
    const [displayedText, setDisplayedText] = useState("");
    const [isDeleting, setIsDeleting] = useState(false);
    const [index, setIndex] = useState(0);
    const [textIndex, setTextIndex] = useState(0);

    useEffect(() => {
        const handleTyping = () => {
            const currentText = texts[textIndex];
            if (!isDeleting && index < currentText.length) {
                setDisplayedText(currentText.substring(0, index + 1));
                setIndex(index + 1);
            } else if (isDeleting && index > 0) {
                setDisplayedText(currentText.substring(0, index - 1));
                setIndex(index - 1);
            } else if (index === currentText.length && textIndex < texts.length - 1) {
                setIsDeleting(true);
            } else if (index === 0 && textIndex < texts.length - 1) {
                setIsDeleting(false);
                setTextIndex((textIndex + 1) % texts.length);
            }
        };

        const typingSpeed = isDeleting ? 50 : 100;
        const timer = setTimeout(handleTyping, typingSpeed);

        return () => clearTimeout(timer);
    }, [displayedText, isDeleting, index, textIndex]);


    return (
        <div className="bg-sky-50">
            <BannerButton />
            <HeaderLanding />
            <div className="relative overflow-hidden bg-sky-50 mt-8">
            <div className="pb-80 pt-16 sm:pb-40 sm:pt-24 lg:pb-48 lg:pt-40">
            <div className="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
                <div className="sm:max-w-lg">
                <div className="" style={{width: '120%'}}>
                    <h1 className="text-4xl font-bold tracking-tight text-slate-700 sm:text-4xl">
                        ToNaLista!, o gerenciador de convites para {displayedText}
                        <span className="blinking-cursor text-slate-700">|</span>
                    </h1>
                </div>
                <p className="mt-4 text-1xl text-slate-900 bg-sky-100 p-2 border rounded border-sky-200">
                Sistema desenvolvido especialmente para você que deseja organizar e gerenciar a lista de convidados para o seu evento de 
                forma prática e eficiente.
                </p>
                </div>
                <div>
                <div className="mt-10">
                    <div
                    aria-hidden="true"
                    className="pointer-events-none lg:absolute lg:inset-y-0 lg:mx-auto lg:w-full lg:max-w-7xl"
                    >
                    <div className="absolute transform sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8">
                        <div className="flex items-center space-x-6 lg:space-x-8">
                        <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                            <div className="h-64 w-44 overflow-hidden rounded-lg sm:opacity-0 lg:opacity-100">
                            <img
                                alt=""
                                src="/assets/evento.jpg"
                                className="h-full w-full object-cover object-center"
                            />
                            </div>
                            <div className="h-64 w-44 overflow-hidden rounded-lg">
                            <img
                                alt=""
                                src="/assets/evento1.webp"
                                className="h-full w-full object-cover object-center"
                            />
                            </div>
                        </div>
                        <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                            <div className="h-64 w-44 overflow-hidden rounded-lg">
                            <img
                                alt=""
                                src="/assets/evento2.webp"
                                className="h-full w-full object-cover object-center"
                            />
                            </div>
                            <div className="h-64 w-44 overflow-hidden rounded-lg">
                            <img
                                alt=""
                                src="/assets/evento3.jpeg"
                                className="h-full w-full object-cover object-center"
                            />
                            </div>
                            <div className="h-64 w-44 overflow-hidden rounded-lg">
                            <img
                                alt=""
                                src="/assets/evento4.jpg"
                                className="h-full w-full object-cover object-center"
                            />
                            </div>
                        </div>
                        <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                            <div className="h-64 w-44 overflow-hidden rounded-lg">
                            <img
                                alt=""
                                src="/assets/evento5.jpg"
                                className="h-full w-full object-cover object-center"
                            />
                            </div>
                            <div className="h-64 w-44 overflow-hidden rounded-lg">
                            <img
                                alt=""
                                src="/assets/evento6.jpg"
                                className="h-full w-full object-cover object-center"
                            />
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
    
                    <a
                    href="#"
                    className="inline-block rounded-lg border border-transparent bg-sky-500 px-8 py-3 text-center font-medium text-white hover:bg-sky-700"
                    >
                    Como funciona?
                    </a>
                    <a
                    href="#"
                    className="ml-3 inline-block rounded-lg border border-sky-700 bg-transparent px-8 py-3 text-center font-medium text-gray-slate-500 hover:bg-sky-300 hover:text-white hover:border-sky-400"
                    >
                    Demonstração
                    </a>
                </div>
                </div>
            </div>
            </div>
        </div>
        <ExplicativoLanding />
        <Footer />

    </div>
    )
}

export default Inicio;