import 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

function ExplicativoLanding() {
    return (
        <div className="bg-slate-500 text-slate-200" style={{ marginTop: '80px', padding: '60px', height: '50vh' }}>
            <Carousel showThumbs={false} infiniteLoop useKeyboardArrows autoPlay showStatus={false}>
                <div>
                    <h1 className="text-center text-4xl font-bold mb-10">A KeepFone é um plano de proteção e <br />assistência técnica para celulares. <br />Fácil, acessível e sem enrolação!</h1>
                </div>
                <div>
                    <h2 className='text-center text-2xl font-bold mb-4'>SEM BUROCRACIA:</h2>
                    <p className='text-center'>Aqui não temos pegadinhas e nem contratos longos. Nossa meta é facilitar a sua vida!</p>
                </div>
                <div>
                    <h2 className='text-center text-2xl font-bold mb-4 mt-8'>EQUIPE ESPECIALIZADA</h2>
                    <p className='text-center'>Com um time fera e experiente, nós garantimos um serviço de qualidade e todo o cuidado necessário <br /> com o seu smartphone.</p>
                </div>
                <div>
                    <h2 className='text-center text-2xl font-bold mb-4 mt-8'>ATENDIMENTO DIFERENCIADO</h2>
                    <p className='text-center'>Temos diversas lojas parceiras que são pontos de coleta e uma central de assistência técnica <br /> preparada para garantir um atendimento humano, eficaz e transparente!</p>
                </div>
            </Carousel>
        </div>
    );
}

export default ExplicativoLanding;