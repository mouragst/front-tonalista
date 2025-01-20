import 'react';
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
                                    <input type="file" className="block w-full text-sm text-gray-500" />
                                    <p className="text-xs text-gray-500">JPG, JPEG, PNG. Máximo de 1MB</p>
                                </div>
                            </div>
                            <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="mt-4">
                                    <p>Primeiro nome</p>
                                    <input type="text" placeholder="Primeiro Nome" className="mt-1 block w-full border border-gray-400 rounded-md shadow-sm p-1" />
                                </div>
                                <div className="mt-4">
                                    <p>Sobrenome</p>
                                    <input type="text" placeholder="Sobrenome" className="mt-1 block w-full border border-gray-400 rounded-md shadow-sm p-1" />
                                </div>
                            </div>
                            <div className="mt-4">
                                <p>Email</p>
                                <input type="email" placeholder="Email" className="mt-1 block w-full border border-gray-400 rounded-md shadow-sm p-1" />
                            </div>
                            <div className="mt-4">
                                <p>Username</p>
                                <input type="text" placeholder="Username" className="mt-1 block w-full border border-gray-400 rounded-md shadow-sm p-1" />
                            </div>
                            <div className="mt-4">
                                <p>Timezone</p>
                                <input type="text" placeholder="Timezone" className="mt-1 block w-full border border-gray-400 rounded-md shadow-sm p-1" />
                            </div>
                            <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded-md">Salvar</button>
                        </div>
                    </div>
                    <hr className="my-12 border border-gray-300" />
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="md:col-span-1">
                            <h2 className="text-lg font-medium">Mudar senha</h2>
                            <p className='text-gray-500 text-sm'>Alterar a senha atual vinculada a esta conta</p>
                        </div>
                        <div className="md:col-span-2">
                            <input type="password" placeholder="Senha Atual" className="mt-1 block w-full border border-gray-400 rounded-md shadow-sm p-1" />
                            <input type="password" placeholder="Nova Senha" className="mt-4 block w-full border border-gray-400 rounded-md shadow-sm p-1" />
                            <input type="password" placeholder="Confirmar Nova Senha" className="mt-4 block border w-full border-gray-400 rounded-md shadow-sm p-1" />
                            <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded-md">Salvar</button>
                        </div>
                    </div>
                    <hr className="my-12 border border-gray-300" />
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="md:col-span-1">
                            <h2 className="text-lg font-medium">Deletar Conta</h2>
                            <p className='text-gray-500 text-sm'>Não quer mais utilizar nossos serviços? Você pode deletar sua conta. Essa 
                            ação é irreversível e todos os seus dados serão perdidos permanentemente.
                            </p>
                        </div>
                        <div className="md:col-span-2">
                            <button className="mt-4 bg-red-500 text-white py-2 px-4 rounded-md">Sim, eu quero deletar a minha conta!</button>
                        </div>
                    </div>
                </div>
            </div>
        </Sidebar>
    );
}

export default Perfil;