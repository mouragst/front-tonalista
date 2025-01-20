import React, { useState } from 'react';
import Sidebar from '../../components/Sidebar/Sidebar';
import { PieChart, Pie, Cell, Tooltip, Legend, Text } from 'recharts';
import { LuCalendarCheck2, LuCalendarX2 } from "react-icons/lu";
import { MdOutlineEmojiPeople } from "react-icons/md";

function Eventos() {
    const [currentPage, setCurrentPage] = useState(1);
    const eventsPerPage = 4;

    const eventData = [
        {
            name: 'Festa de Casamento',
            date: '2023-10-15',
            daysLeft: 5,
            totalGuests: 100,
            confirmed: 60,
            notGoing: 20,
            noResponse: 20
        },
        {
            name: 'Festa Fantasia',
            date: '2023-10-20',
            daysLeft: 10,
            totalGuests: 150,
            confirmed: 80,
            notGoing: 30,
            noResponse: 40
        },
        {
            name: 'Festa de Aniversário',
            date: '2023-10-25',
            daysLeft: 15,
            totalGuests: 100,
            confirmed: 40,
            notGoing: 60,
            noResponse: 30
        },
        {
            name: 'Festa de Formatura',
            date: '2023-10-30',
            daysLeft: 20,
            totalGuests: 250,
            confirmed: 50,
            notGoing: 40,
            noResponse: 70
        },
        
        // Adicione mais eventos aqui
    ];

    const totalPages = Math.ceil(eventData.length / eventsPerPage);
    const indexOfLastEvent = currentPage * eventsPerPage;
    const indexOfFirstEvent = indexOfLastEvent - eventsPerPage;
    const currentEvents = eventData.slice(indexOfFirstEvent, indexOfLastEvent);

    const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index, value }) => {
        const RADIAN = Math.PI / 180;
        const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
        const x = cx + radius * Math.cos(-midAngle * RADIAN);
        const y = cy + radius * Math.sin(-midAngle * RADIAN);

        return (
            <Text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
                {value}
            </Text>
        );
    };

    const handleNextPage = () => {
        setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
    };

    const handlePrevPage = () => {
        setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
    };

    const handlePageClick = (page) => {
        setCurrentPage(page);
    };

    const renderPagination = () => {
        const pages = [];
        for (let i = 1; i <= totalPages; i++) {
            pages.push(
                <button
                    key={i}
                    className={`px-4 py-2 rounded ${currentPage === i ? 'bg-blue-500 text-white' : 'bg-gray-300 text-black'}`}
                    onClick={() => handlePageClick(i)}
                >
                    {i}
                </button>
            );
        }

        return (
            <div className="flex justify-center mt-4 space-x-2">
                <button
                    className="bg-gray-300 text-black px-4 py-2 rounded"
                    onClick={handlePrevPage}
                    disabled={currentPage === 1}
                >
                    &lt;
                </button>
                {pages.slice(0, 3)}
                {totalPages > 3 && (
                    <>
                        <span className="px-4 py-2">...</span>
                        <button
                            className={`px-4 py-2 rounded ${currentPage === totalPages ? 'bg-blue-500 text-white' : 'bg-gray-300 text-black'}`}
                            onClick={() => handlePageClick(totalPages)}
                        >
                            {totalPages}
                        </button>
                    </>
                )}
                <button
                    className="bg-gray-300 text-black px-4 py-2 rounded"
                    onClick={handleNextPage}
                    disabled={currentPage === totalPages}
                >
                    &gt;
                </button>
            </div>
        );
    };

    return (
        <Sidebar>
            <div className="flex-grow p-4 text-black">
                <h1 className="text-2xl font-bold mb-4">Eventos</h1>
                <hr className="mb-4" />
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-xl font-semibold">Meus eventos</h2>
                </div>
                <button className="bg-blue-500 text-white px-4 py-2 rounded mb-4">Criar Evento</button>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    {currentEvents.map((event, index) => {
                        const pieData = [
                            { name: 'Confirmados', value: event.confirmed, color: '#36A2EB' },
                            { name: 'Não irão', value: event.notGoing, color: '#FF6384' },
                            { name: 'Não responderam', value: event.noResponse, color: '#FFCE56' }
                        ];

                        return (
                            <div key={index} className="bg-white shadow-md rounded-lg p-4 h-full min-h-[600px] flex flex-col justify-between">
                                <div>
                                    <p className="text-xl font-semibold mb-2">{event.name}</p>
                                    <div>
                                        <LuCalendarCheck2 className="inline-block mr-2" />
                                        <span>{event.date}</span>
                                    </div>
                                    <div className="flex items-center space-x-2 mt-2">
                                        <LuCalendarX2 className="inline-block" />
                                        <span className="">Encerra em {event.daysLeft} dias</span>
                                    </div>
                                    <div className="flex items-center space-x-2 mt-4">
                                        <MdOutlineEmojiPeople className="inline-block" />
                                        <span className="">Total de convidados: {event.totalGuests}</span>
                                    </div>
                                </div>
                                <div className="mb-4 flex justify-center">
                                    <PieChart width={300} height={300}>
                                        <Pie
                                            data={pieData}
                                            dataKey="value"
                                            nameKey="name"
                                            fill="#8884d8"
                                            label={renderCustomizedLabel}
                                            labelLine={false}
                                        >
                                            {pieData.map((entry, index) => (
                                                <Cell key={`cell-${index}`} fill={entry.color} />
                                            ))}
                                        </Pie>
                                        <Tooltip />
                                        <Legend />
                                    </PieChart>
                                </div>
                                <div className="flex flex-col space-y-2 mt-auto">
                                    <button className="bg-blue-400 text-white px-4 py-2 rounded">Ver evento</button>
                                    <button className="bg-green-400 text-white px-4 py-2 rounded">Convidados</button>
                                    <button className="bg-yellow-400 text-white px-4 py-2 rounded">Copiar link</button>
                                    <button className="bg-purple-400 text-white px-4 py-2 rounded">Lista de convidados</button>
                                </div>
                            </div>
                        );
                    })}
                </div>
                {renderPagination()}
            </div>
        </Sidebar>
    );
}

export default Eventos;