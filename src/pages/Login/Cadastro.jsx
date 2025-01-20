import 'react';
import { IoIosMail, IoMdKey, IoMdPerson } from "react-icons/io";

function Cadastro() {
  return (
    <div className="bg-gray-100 flex justify-center items-center h-screen">
        <div className="flex items-center justify-center w-full lg:w-1/2 h-screen">
            <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
                <h1 className="text-3xl font-bold mb-6 text-center">Cadastro</h1>
                <form action="#" method="POST">
                    <div className="mb-4">
                        <div className="flex items-center mb-2">
                            <IoMdPerson className="mr-2 text-gray-700" />
                            <label htmlFor="name" className="block text-gray-700 font-bold">Nome</label>
                        </div>
                        <input type="text" id="name" name="name" className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500" autoComplete="off" />
                    </div>
                    <div className="mb-4">
                        <div className="flex items-center mb-2">
                            <IoIosMail className="mr-2 text-gray-700" />
                            <label htmlFor="email" className="block text-gray-700 font-bold">Email</label>
                        </div>
                        <input type="email" id="email" name="email" className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500" autoComplete="off" />
                    </div>
                    <div className="mb-4">
                        <div className="flex items-center mb-2">
                            <IoMdKey className="mr-2 text-gray-700" />
                            <label htmlFor="password" className="block text-gray-700 font-bold">Senha</label>
                        </div>
                        <input type="password" id="password" name="password" className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500" autoComplete="off" />
                    </div>
                    <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-md py-2 px-4 w-full">Cadastrar</button>
                </form>
                <div className="mt-6 text-center">
                    <a href="/login" className="text-blue-500 hover:underline">Voltar para Login</a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Cadastro;