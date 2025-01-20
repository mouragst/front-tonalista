import 'react'
import BannerButton from '../../components/LandingPage/BannerButton';
import Header from '../../components/LandingPage/HeaderLanding';
import Footer from '../../components/LandingPage/Footer';
import { EnvelopeIcon } from '@heroicons/react/24/outline'
import { FaLinkedin, FaWhatsapp, FaInstagram, FaFacebook } from "react-icons/fa";

function Contato() {

    return (
        <div className='bg-sky-50'>
            <BannerButton />
            <Header />
            <div className="container mx-auto px-4 py-6 bg-sky-50">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-sky-50">
                    <div className="space-y-8 bg-sky-800 text-slate-200 border rounded-lg p-12 text-center bg-sky-50"> 
                        <h2 className="text-2xl font-bold text-center mb-8">FALE COM A GENTE:</h2>
                        <p className="flex items-center justify-center mb-4"><EnvelopeIcon className='h-6 w-6 mr-2'/> contato@tonalista.com.br</p>
                        <a href="https://api.whatsapp.com/send?phone=5516993163991" target="_blank" className="flex items-center justify-center mb-4"><FaWhatsapp className='h-6 w-6 mr-2'/>+55 19 99999-9999</a> 
                        <p className="flex items-center justify-center mb-4">Horário de Atendimento: <br /> Seg-Qui, 8h-18h <br /> Sexta, 8h-17h</p> 
                        <div className="flex space-x-6 items-center justify-center mb-18"> 
                            <a href="https://www.facebook.com/KeepFone" target="_blank"><FaFacebook size={'50px'}/></a>
                            <a href="https://www.instagram.com/keepfone_oficial" target='_blank'><FaInstagram size={'50px'}/></a>
                            <a href="https://www.linkedin.com/company/keepfone-oficial" target='_blank'><FaLinkedin size={'50px'}/></a>
                        </div>
                        <div className="flex justify-center mt-16">
                        {/* <a 
                            href="https://keepfone.gupy.io/" 
                            target="_blank"
                            className="inline-block px-6 py-2 mt-5 text-lg font-semibold text-white bg-indigo-500 rounded-md hover:bg-indigo-800"
                            
                        >
                            Trabalhe conosco!
                        </a> */}
                        </div>
                    </div>
                    <div className='bg-sky-50'>
                        <h2 className="text-2xl font-bold mb-4 text-gray-900">Envie uma mensagem e te responderemos em breve!</h2>
                        <form className="space-y-6">
                            <div className="grid grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700">Nome *</label>
                                    <input type="text" placeholder="Insira seu nome" className="input w-full border rounded-md border-gray-400 p-1" />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700">Email *</label>
                                    <input type="text" placeholder="Insira seu email" className="input w-full border rounded-md border-gray-400 p-1" />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700">Telefone *</label>
                                    <input type="text" placeholder="Insira seu telefone" className="input w-full border rounded-md border-gray-400 p-1" />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700">Cidade *</label>
                                    <input type="text" placeholder="Insira sua cidade aqui" className="input w-full border rounded-md border-gray-400 p-1" />
                                </div>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Mensagem *</label>
                                <textarea className="textarea textarea-bordered w-full border rounded-md border-gray-400 p-1" placeholder="Deixe sua mensagem" style={{ minHeight: '150px' }}></textarea>
                            </div>
                            <div>
                                <button type="submit" className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-sky-500 hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                    Enviar
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <Footer style={{ position: 'fixed', bottom: 0, width: '100%' }} />
        </div>
    )
}

export default Contato;