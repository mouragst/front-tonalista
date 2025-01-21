import 'react';
import { FaSave } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import Sidebar from '../../components/Sidebar/Sidebar';

function Perfil() {
    return (
        <Sidebar>
            <div className="flex-grow p-6 text-gray-900 flex justify-center bg-gray-200">
                <div className="w-full max-w-4xl">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="md:col-span-1">
                            <h2 className="text-lg font-medium">Informações Pessoais</h2>
                            <p className='text-gray-500 text-sm'>Mantenha suas informações pessoais atualizadas para não perder nenhuma novidade</p>
                        </div>
                        <div className="md:col-span-2">
                            <div className="flex items-center">
                                <img className="h-16 w-16 rounded-full" src="/assets/user.png" alt="Avatar" />
                                <div className="ml-4">
                                    <input 
                                        type="file" 
                                        className="block w-full text-sm text-gray-500 file:py-1.5 file:px-3 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-gray-50 file:text-blue-900 hover:file:bg-gray-300 mb-3" 
                                    />
                                    <p className="text-xs text-gray-500">JPG, JPEG, PNG. Máximo de 1MB</p>
                                </div>
                            </div>
                            <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="mt-4">
                                    <p>Primeiro nome</p>
                                    <input type="text" placeholder="Primeiro Nome" className="mt-1 block w-full border border-gray-400 rounded-md shadow-sm p-1.5" />
                                </div>
                                <div className="mt-4">
                                    <p>Sobrenome</p>
                                    <input type="text" placeholder="Sobrenome" className="mt-1 block w-full border border-gray-400 rounded-md shadow-sm p-1.5" />
                                </div>
                            </div>
                            <div className="mt-4">
                                <p>Telefone</p>
                                <input type="text" placeholder="Telefone" className="mt-1 block w-full border border-gray-400 rounded-md shadow-sm p-1.5" />
                            </div>
                            <div className="mt-4">
                                <p>Email</p>
                                <input type="email" disabled placeholder="Email" className="mt-1 block w-full border border-gray-400 rounded-md shadow-sm p-1.5" />
                            </div>
                            <div className="mt-4">
                                <p>CPF</p>
                                <input type="text" disabled placeholder="CPF" className="mt-1 block w-full border border-gray-400 rounded-md shadow-sm p-1.5" />
                            </div>
                            <button className="mt-6 bg-blue-500 text-white py-1.5 px-3 rounded-md">
                                <FaSave className="inline mr-2 mb-1 text-xl" />
                                Salvar
                            </button>
                        </div>
                    </div>
                    <hr className="my-8 border border-gray-300" />
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="md:col-span-1">
                            <h2 className="text-lg font-medium">Mudar senha</h2>
                            <p className='text-gray-500 text-sm'>Alterar a senha atual vinculada a essa conta</p>
                        </div>
                        <div className="md:col-span-2">
                            <div className="mt-4">
                                <p>Senha Atual</p>
                                <input type="password" placeholder="Senha Atual" className="mt-1 block w-full border border-gray-400 rounded-md shadow-sm p-1.5" />
                            </div>
                            <div className="mt-4">
                                <p>Nova senha</p>
                                <input type="password" placeholder="Nova Senha" className="mt-4 block w-full border border-gray-400 rounded-md shadow-sm p-1.5" />
                            </div>
                            <div className="mt-4">
                                <p>Confirmar nova senha</p>
                                <input type="password" placeholder="Confirmar Nova Senha" className="mt-4 block border w-full border-gray-400 rounded-md shadow-sm p-1.5" />
                            </div>
                            <button className="mt-6 bg-blue-500 text-white py-1.5 px-3 rounded-md">
                                <FaSave className="inline mr-2 mb-1 text-xl" />
                                Salvar
                            </button>
                        </div>
                    </div>
                    <hr className="my-8 border border-gray-300" />
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="md:col-span-1">
                            <h2 className="text-lg font-medium">Deletar Conta</h2>
                            <p className='text-gray-500 text-sm'>Não quer mais utilizar nossos serviços? Você pode deletar sua conta. Essa 
                            ação é irreversível e todos os seus dados serão perdidos permanentemente.
                            </p>
                        </div>
                        <div className="md:col-span-2">
                            <button className="mt-4 bg-red-500 text-white py-2 px-3 rounded-md">
                                <MdDelete className="inline mr-2 mb-1 text-xl" />
                                Sim, eu quero deletar a minha conta!
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </Sidebar>
    );
}

export default Perfil;