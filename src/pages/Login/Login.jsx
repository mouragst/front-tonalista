import 'react';
import { IoIosMail, IoMdKey } from "react-icons/io";

function Login() {
  return (
    <div className="bg-gray-100 flex justify-center items-center h-screen">
        {/* <div className="hidden lg:block w-1/2 h-screen">
            <img src="https://placehold.co/800x/667fff/ffffff.png?text=Your+Image&font=Montserrat" alt="Placeholder Image" className="object-cover w-full h-full" />
        </div> */}
        <div className="flex items-center justify-center w-full lg:w-1/2 h-screen">
            <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
                <h1 className="text-3xl font-bold mb-6 text-center">Entrar</h1>
                <form action="#" method="POST">
                <div className="mb-4">
                        <div className="flex items-center mb-2">
                            <IoIosMail className="mr-2 text-gray-700" />
                            <label htmlFor="username" className="block text-gray-700 font-bold">Email</label>
                        </div>
                        <input type="text" id="username" name="username" className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500" autoComplete="off" />
                    </div>
                    <div className="mb-4">
                        <div className="flex items-center mb-2">
                            <IoMdKey className="mr-2 text-gray-700" />
                            <label htmlFor="password" className="block text-gray-700 font-bold">Senha</label>
                        </div>
                        <input type="password" id="password" name="password" className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500" autoComplete="off" />
                    </div>
                    <div className="mb-4 flex items-center justify-between mt-6 mb-6">
                        <div className="flex items-center">
                            <input type="checkbox" id="remember" name="remember" className="text-blue-500" />
                            <label htmlFor="remember" className="text-gray-700 ml-2">Lembrar de mim</label>
                        </div>
                        <a href="/esqueceu-senha" className="text-blue-500 hover:underline">Esqueceu a senha?</a>
                    </div>
                    <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-md py-2 px-4 w-full">Login</button>
                </form>
                <div className="mt-6 text-center">
                    <a href="/cadastro" className="text-blue-500 hover:underline">Se cadastre aqui!</a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Login;