import 'react';
import { Link } from 'react-router-dom';
import { IoIosMail } from 'react-icons/io';

function EsqueceuSenha() {
  return (
    <div className="bg-gray-100 flex justify-center items-center h-screen">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h1 className="text-3xl font-bold mb-6 text-center">Esqueceu a Senha</h1>
        <form action="#" method="POST">
          <div className="flex items-center mb-2">
              <IoIosMail className="mr-2 text-gray-700" />
              <label htmlFor="username" className="block text-gray-700 font-bold">Email</label>
          </div>
          <input type="text" id="username" name="username" className="w-full mb-6 border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500" autoComplete="off" />
          <div className="mb-4">
            <button type="submit" className="w-full bg-blue-500 text-white font-bold py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600">Enviar</button>
          </div>
        </form>
        <div className="text-center">
          <Link to="/login" className="text-blue-500 hover:underline">Voltar para a página de login</Link>
        </div>
      </div>
    </div>
  );
}

export default EsqueceuSenha;