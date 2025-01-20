import { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { MdEventAvailable, MdLogout } from "react-icons/md";
import { IoClose } from "react-icons/io5";
import { FaUser, FaBars } from "react-icons/fa";
import { testOrProduction } from '../../testOrProduction';

function Sidebar({ children }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);
  const [userName, setUserName] = useState('Gustavo de Moura');
  const [userPlan, setUserPlan] = useState('Plano Gold');
  const [renewalTime, setRenewalTime] = useState('3 meses');
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef(null);

  const toggleSidebar = () => {
    setIsMobileSidebarOpen(!isMobileSidebarOpen);
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleLogout = () => {
    console.log('logout');
  }

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowDropdown(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
        document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <>
        <div className="flex h-screen bg-gray-400 text-white">
            {/* Sidebar */}
            <div className={`fixed inset-y-0 left-0 transform ${isSidebarOpen ? 'w-64' : 'w-20'} lg:w-64 transition-width duration-300 ease-in-out bg-gray-800 border-r border-gray-500 shadow flex flex-col justify-between ${isMobileSidebarOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0`}>
                <div>
                    <div className="border-b pb-6 border-gray-500 my-4 mx-auto w-11/12">
                        {isMobileSidebarOpen && (
                            <button className="lg:hidden" onClick={toggleSidebar}>
                                <IoClose className="h-6 w-6 text-white" />
                            </button>
                        )}
                        <h1 className={`text-2xl font-bold text-center ${!isSidebarOpen && 'hidden'}`}>ToNaLista!</h1>
                        {testOrProduction}
                    </div>
                    <nav className="t-2 flex-grow">
                        <ul>
                            <li>
                                <Link to="/eventos" className="flex items-center py-2 px-4 hover:bg-gray-500 rounded-lg transition-all duration-200 mx-5">
                                    <MdEventAvailable className='inline h-5 w-5 mr-2' />
                                    <span className={`${!isSidebarOpen && 'hidden'}`}>Eventos</span>
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </div>
                <div className="border-t pt-6 border-gray-500 my-4 mx-auto w-11/12">
                    <Link to="/perfil" className="flex items-center py-2 px-4 w-5/6 hover:bg-gray-500 rounded-lg transition-all duration-200 mx-2">
                        <FaUser className="inline h-5 w-5 mr-2" />
                        <span className={`${!isSidebarOpen && 'hidden'}`}>Meu perfil</span>
                    </Link>
                    <button onClick={handleLogout} className="flex items-center py-2 px-4 w-5/6 hover:bg-gray-500 rounded-lg transition-all duration-200 mx-2">
                        <MdLogout className="inline h-5 w-5 mr-2" />
                        <span className={`${!isSidebarOpen && 'hidden'}`}>Sair</span>
                    </button>
                </div>
            </div>

            {/* Main content */}
            <div className={`flex-1 flex flex-col ${isSidebarOpen ? '' : 'ml-20'} lg:ml-64 transition-all duration-300 ease-in-out bg-gray-200`}>
                {/* Top menu */}
                <div className="flex items-center justify-between p-4 bg-gray-100 border-b border-gray-300 shadow">
                    <button className="lg:hidden" onClick={toggleSidebar}>
                        <FaBars className="h-6 w-6 text-black" />
                    </button>
                    <div className="flex items-center ml-auto">
                        <div className="mr-4 text-right">
                            <p className="font-bold text-black">{userName}</p>
                            <p className="text-sm text-black">{userPlan}</p>
                            <p className="text-xs text-black">{renewalTime} até renovar</p>
                        </div>
                        <div className="relative" ref={dropdownRef}>
                            <img 
                                src="/assets/user.png" 
                                alt="User" 
                                className="rounded-full w-10 h-10 ml-2 cursor-pointer" 
                                onClick={() => setShowDropdown(!showDropdown)} 
                            />
                            <div className={`absolute right-0 mt-2 w-48 rounded-md border shadow-lg z-50 transition-all duration-300 ease-in-out transform ${showDropdown ? 'opacity-100 scale-100' : 'opacity-0 scale-95'} bg-white text-black border-gray-300`}>
                                <Link 
                                    to="/perfil" 
                                    className="block px-4 py-2 text-sm text-black bg-gray-50 hover:bg-gray-200"
                                >
                                    Configurações
                                </Link>
                                <hr className="border-gray-300"/>
                                <button 
                                    onClick={handleLogout} 
                                    className="block w-full text-left px-4 py-2 text-sm text-black bg-gray-50 hover:bg-gray-200"
                                >
                                    Sair
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                {children}
            </div>
        </div>
    </>
  )
}

export default Sidebar;