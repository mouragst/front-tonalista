import  { useState, useEffect } from 'react';
import { FaTimes } from 'react-icons/fa';
import { MdOutlineEmojiEvents } from "react-icons/md";
import { LuCalendarCheck2, LuCalendar, LuHourglass  } from "react-icons/lu";
import { GrLocation, GrMapLocation, GrImage } from "react-icons/gr";
import { FaCalendarAlt } from 'react-icons/fa';
import { RiFileExcel2Line } from "react-icons/ri";
import { IoPersonAddOutline } from "react-icons/io5";
import { FaLink } from "react-icons/fa6";
import { GiPayMoney, GiReceiveMoney, GiTakeMyMoney } from "react-icons/gi";

const ModalEvento = ({ isModalOpen, onClose }) => {
    const [activeTab, setActiveTab] = useState(1);
    const [eventDate, setEventDate] = useState('');
    const [confirmDate, setConfirmDate] = useState('');
    const [error, setError] = useState('');
    const [errorDate, setErrorDate] = useState('');
    const [budget, setBudget] = useState(50000);
    const [spent, setSpent] = useState(10000);
    const [percentualGasto, setPercentualGasto] = useState(`${(spent / budget) * 100}`);

    const handleConfirmDateEvent = (e) => {
        const selectedDate = e.target.value;
        setEventDate(selectedDate);
        
        const [year, month, day] = selectedDate.split('-').map(Number);
        const currentDate = new Date();
        const currentYear = currentDate.getFullYear();
        const currentMonth = currentDate.getMonth() + 1;
        const currentDay = currentDate.getDate();

        if (year < currentYear || (year === currentYear && (month < currentMonth || (month === currentMonth && day < currentDay)))) {
            setErrorDate('A data do evento não pode ser menor que a data atual');
        } else {
            setErrorDate('');
        }
    };

    const handleConfirmDateChange = (e) => {
        const selectedDate = e.target.value;
        setConfirmDate(selectedDate);
    
        if (selectedDate.length < 10) {
            setError('');
            return;
        }
    
        if (!eventDate) {
            setError('Por favor, selecione a data do evento primeiro.');
            return;
        }
    
        const selectedDateObj = new Date(selectedDate);
        const eventDateObj = new Date(eventDate);
    
        if (selectedDateObj < eventDateObj) {
            setError('A data de confirmação do evento não pode ser menor que a data do evento');
        } else {
            setError('');
        }
    };

  return (
    <div className={`fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 text-black`}>
    <div className="bg-white rounded-lg shadow-lg w-2/3 relative ml-40">
        <button
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
          onClick={onClose}
        >
          <FaTimes size={25} className='mt-3 mr-3'/>
        </button>
        <div className="flex justify-start border-b p-4">
          <button
            className={`px-4 py-2 ${activeTab === 1 ? 'border-b-2 rounded-md border-blue-500 text-black bg-gray-100' : 'hover:bg-gray-100 hover:border-b-2 hover:rounded-md hover:border-blue-500 text-black'}`}
            onClick={() => setActiveTab(1)}
          >
            Dados do Evento
          </button>
          <button
            className={`px-4 py-2 ${activeTab === 2 ? 'border-b-2 rounded-md border-blue-500 text-black bg-gray-100' : 'hover:bg-gray-100 hover:border-b-2 hover:rounded-md hover:border-blue-500 text-black'}`}
            onClick={() => setActiveTab(2)}
          >
            Convidados
          </button>
          <button
            className={`px-4 py-2 ${activeTab === 3 ? 'border-b-2 rounded-md border-blue-500 text-black bg-gray-100' : 'hover:bg-gray-100 hover:border-b-2 hover:rounded-md hover:border-blue-500 text-black'}`}
            onClick={() => setActiveTab(3)}
            >
                Orçamentos
          </button>

          <button
            className={`absolute top-2 right-12 px-2 py-1 bg-green-500 hover:bg-green-700 text-slate-100 rounded m-2`}
            onClick={() => console.log(percentualGasto)}
            >
                Imprimir
          </button>
        </div>
        <div className="p-4 min-h-[77vh]">
          {activeTab === 1 && (
            <div>
            <div className="mb-4">
              <label className="block text-gray-700 flex items-center">
                <MdOutlineEmojiEvents className="mr-2 text-gray-700" />
                Nome do Evento
              </label>
              <input type="text" className="w-full px-3 py-2 border rounded border-gray-300" />
            </div>
            <div className="mb-4 grid grid-cols-3 gap-4">
              <div>
                <label className="block text-gray-700 flex items-center">
                  <LuCalendar className="mr-2 text-gray-700" />
                  Data Evento
                </label>
                <input
                  type="date"
                  className="w-full px-3 py-2 border rounded border-gray-300"
                  value={eventDate}
                  onChange={(e) => setEventDate(e.target.value)}
                  onBlur={handleConfirmDateEvent}
                />
                {errorDate && <p className="text-red-500">{errorDate}</p>}
              </div>
              <div>
                <label className="block text-gray-700 flex items-center">
                  <LuHourglass className="mr-2 text-gray-700" />
                  Hora
                </label>
                <input type="time" className="w-full px-3 py-2 border rounded border-gray-300" />
              </div>
              <div>
                <label className="block text-gray-700 flex items-center">
                  <LuCalendarCheck2 className="mr-2 text-gray-700" />
                  Confirmar Até
                </label>
                <input
                  type="date"
                  className="w-full px-3 py-2 border rounded border-gray-300"
                  value={confirmDate}
                  onChange={(e) => setConfirmDate(e.target.value)}
                  onBlur={handleConfirmDateChange}
                  disabled={!eventDate}
                />
                {error && <p className="text-red-500">{error}</p>}
              </div>
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 flex items-center">
                <GrLocation className="mr-2 text-gray-700" />
                Local do Evento
              </label>
              <input type="text" className="w-full px-3 py-2 border rounded border-gray-300" />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 flex items-center">
                <GrMapLocation className="mr-2 text-gray-700" />
                Endereço
              </label>
              <input type="text" className="w-full px-3 py-2 border rounded border-gray-300" />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 flex items-center">
                <GrImage className="mr-2 text-gray-700" />
                Imagem (opcional)
              </label>
              <div className="flex items-center justify-center w-full">
                <label htmlFor="dropzone-file" className="flex flex-col items-center justify-center w-full h-80 border-2 border-gray-50 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-gray-200 dark:bg-gray-50 hover:bg-gray-100 dark:border-gray-500 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                  <div className="flex flex-col items-center justify-center pt-5 pb-6">
                    <FaCalendarAlt className="w-8 h-8 mb-4 text-gray-700 dark:text-gray-700" />
                    <p className="mb-2 text-sm text-gray-500 dark:text-gray-700"><span className="font-semibold">Clique para adicionar</span> ou arraste e solte</p>
                    <p className="text-xs text-gray-500 dark:text-gray-700">SVG, PNG, JPG or GIF (MAX. 800x500px)</p>
                  </div>
                  <input id="dropzone-file" type="file" className="hidden" />
                </label>
              </div>
            </div>
          </div>
          )}
          {activeTab === 2 && (
            <div>
              <div className="mb-4 grid grid-cols-3 gap-4">
                <button className="px-4 py-2 bg-green-500 hover:bg-green-600 text-white rounded flex items-center justify-center">
                    <RiFileExcel2Line size={20} className="mr-2" />
                    Importar Excel
                </button>
                <button className="px-4 py-2 bg-sky-500 hover:bg-sky-600 text-white rounded flex items-center justify-center">
                    <IoPersonAddOutline  size={20} className="mr-2" />
                    Adicionar Manualmente
                </button>
                <button className="px-4 py-2 bg-amber-500 hover:bg-amber-600 text-white rounded flex items-center justify-center">
                    <FaLink  size={20} className="mr-2" />
                    Link de confirmação
                </button>
              </div>
              <table className="table-auto w-full bg-white border-collapse table-fixed">
                <thead>
                    <tr>
                    <th className="py-2 px-4 border-b border-gray-200">Nome</th>
                    <th className="py-2 px-4 border-b border-gray-200">Parentesco</th>
                    <th className="py-2 px-4 border-b border-gray-200">Email</th>
                    <th className="py-2 px-4 border-b border-gray-200">Telefone</th>
                    <th className="py-2 px-4 border-b border-gray-200">Status</th>
                    <th className="py-2 px-4 border-b border-gray-200">Ações</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <td className="py-2 px-4 border-b border-gray-200">Convidado 1</td>
                    <td className="py-2 px-4 border-b border-gray-200">Amigo</td>
                    <td className="py-2 px-4 border-b border-gray-200">email@example.com</td>
                    <td className="py-2 px-4 border-b border-gray-200">+55 19 999999999</td>
                    <td className="py-2 px-4 border-b border-gray-200">Confirmado</td>
                    <td className="py-2 px-4 border-b border-gray-200">
                        <button className="bg-blue-500 hover:bg-blue-600 text-white px-2 py-1 rounded">Editar</button>
                        <button className="bg-red-500 hover:bg-red-600 text-white px-2 py-1 rounded">Excluir</button>
                    </td>
                    </tr>
                    {/* Adicione mais linhas conforme necessário */}
                </tbody>
                </table>
            </div>
          )}
          {activeTab === 3 && (
                <>
                <div className="grid grid-cols-3 gap-4">
                <div className="bg-sky-50 border border-sky-200 p-4 rounded-lg shadow-lg">
                    <div className='flex items-center'>
                        <GiPayMoney size={25} />
                        <h3 className="text-xl font-bold ml-4">Budget</h3>
                    </div>
                    <p className="text-gray-700 text-xl">R$ 50.000,00</p>
                </div>
                <div className="bg-red-50 border border-red-200 p-4 rounded-lg shadow-lg">
                    <div className='flex items-center'>
                        <GiReceiveMoney size={25} />
                        <h3 className="text-xl font-bold ml-4">Gasto</h3>
                    </div>
                    <p className="text-gray-700 text-xl">R$ 25.000,00</p>
                </div>
                <div className="bg-green-50 border border-green-200 p-4 rounded-lg shadow-lg">
                    <div className='flex items-center'>
                        <GiTakeMyMoney size={25} />
                        <h3 className="text-xl font-bold ml-4">Disponível</h3>
                    </div>
                    <p className="text-gray-700 text-xl">R$ 25.000,00</p>
                </div>
            </div>

            <div className="mt-7">
                <div className="w-full bg-gray-200 rounded-full h-2 mb-4 relative">
                    <div className={`bg-${percentualGasto < 30 ? 'green' : percentualGasto < 60 ? 'blue' : 'red'}-500 h-2 rounded-full`} style={{ width: `${percentualGasto}%` }}></div>
                    {/* <span className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-full text-sm font-medium text-gray-700">{percentualGasto}%</span> */}
                </div>
                <button className="bg-blue-500 hover:bg-blue-700 text-slate-100 font-bold py-2 px-4 rounded">
                    Adicionar Despesa
                </button>
            </div>

            <table className="min-w-full divide-y divide-gray-200 mt-4">
                <thead className="bg-gray-50">
                    <tr>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Descrição
                        </th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Valor
                        </th>
                    </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                    <tr>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                            Vestido Noiva
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            R$ 10.000,00
                        </td>
                    </tr>
                    <tr>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                            Terno Noivo
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            R$ 5.000,00
                        </td>
                    </tr>
                    <tr>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                            Igreja
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            R$ 10.000,00
                        </td>
                    </tr>
                </tbody>
            </table>
            </>
            )}
        </div>
      </div>
    </div>
  );
};

export default ModalEvento;