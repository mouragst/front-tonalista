import { useState } from 'react';
import { FaTimes } from 'react-icons/fa';
import { MdOutlineEmojiEvents, MdOutlineHourglassDisabled  } from "react-icons/md";
import { LuCalendarCheck2, LuCalendar, LuHourglass  } from "react-icons/lu";
import { GrLocation, GrMapLocation, GrImage } from "react-icons/gr";
import { FaCalendarAlt } from 'react-icons/fa';
import { apiUrl } from '../../config';
import axios from 'axios';

const ModalEvento = ({ isModalOpen, onClose }) => {
    const [activeTab, setActiveTab] = useState(1);
    const [eventDate, setEventDate] = useState('');
    const [confirmDate, setConfirmDate] = useState('');
    const [error, setError] = useState('');
    const [errorDate, setErrorDate] = useState('');
    const [name, setName] = useState('');
    const [startTime, setStartTime] = useState('');
    const [endTime, setEndTime] = useState('');
    const [location, setLocation] = useState('');
    const [address, setAddress] = useState('');
    const [description, setDescription] = useState('');

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
    
        if (selectedDateObj > eventDateObj) {
            setError('A data de confirmação do evento não pode ser maior que a data do evento');
        } else {
            setError('');
        }
    };

    const handleSubmit = async () => {
        const eventData = {
            name,
            description,
            date: eventDate,
            startTime,
            endTime,
            confirmTillDate: confirmDate,
            location,
            address,
            status: 'active',
            company: { id: 1 }
        };

        try {
            const response = await axios.post(`${apiUrl}/api/event`, eventData);
            console.log('Evento criado com sucesso:', response.data);
            onClose();
        } catch (error) {
            console.error('Erro ao criar evento:', error);
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
        </div>
        <div className="p-4 min-h-[77vh]">
          {activeTab === 1 && (
            <div>
            <div className="mb-4">
              <label className="block text-gray-700 flex items-center">
                <MdOutlineEmojiEvents className="mr-2 text-gray-700" />
                Nome do Evento
              </label>
              <input
                type="text"
                className="w-full px-3 py-2 border rounded border-gray-300"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 flex items-center">
                <MdOutlineEmojiEvents className="mr-2 text-gray-700" />
                Descrição do Evento
              </label>
              <textarea
                className="w-full px-3 py-2 border rounded border-gray-300"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>
            <div className="mb-4 grid grid-cols-4 gap-4">
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
                  Hora de Início
                </label>
                <input
                  type="time"
                  className="w-full px-3 py-2 border rounded border-gray-300"
                  value={startTime}
                  onChange={(e) => setStartTime(e.target.value)}
                />
              </div>
              <div>
                <label className="block text-gray-700 flex items-center">
                  <MdOutlineHourglassDisabled className="mr-2 text-gray-700" />
                  Hora de Término
                </label>
                <input
                  type="time"
                  className="w-full px-3 py-2 border rounded border-gray-300"
                  value={endTime}
                  onChange={(e) => setEndTime(e.target.value)}
                />
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
              <input
                type="text"
                className="w-full px-3 py-2 border rounded border-gray-300"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 flex items-center">
                <GrMapLocation className="mr-2 text-gray-700" />
                Endereço
              </label>
              <input
                type="text"
                className="w-full px-3 py-2 border rounded border-gray-300"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 flex items-center">
                <GrImage className="mr-2 text-gray-700" />
                Imagem (opcional)
              </label>
              <div className="flex items-center justify-center w-full">
                <label htmlFor="dropzone-file" className="flex flex-col items-center justify-center w-full h-60 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-100 hover:bg-gray-200 ">
                  <div className="flex flex-col items-center justify-center pt-5 pb-6">
                    <FaCalendarAlt className="w-8 h-8 mb-4 text-gray-700 dark:text-gray-700" />
                    <p className="mb-2 text-sm text-gray-500 dark:text-gray-700"><span className="font-semibold">Clique para adicionar</span> ou arraste e solte</p>
                    <p className="text-xs text-gray-500 dark:text-gray-700">SVG, PNG, JPG or GIF (MAX. 800x500px)</p>
                  </div>
                  <input id="dropzone-file" type="file" className="hidden" />
                </label>
              </div>
            </div>
            <div className="flex justify-end">
              <button
                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                onClick={handleSubmit}
              >
                Salvar Evento
              </button>
            </div>
          </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ModalEvento;