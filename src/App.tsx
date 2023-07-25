import { useEffect, useState } from 'react';
import './App.css'

function App() {

    const [advice, setAdvice] = useState(null);


    const fetchAdvice = () => {
        fetch('https://api.adviceslip.com/advice')
            .then((response) => {
                response.json()
                    .then((result) => {
                        setAdvice(result.slip.advice);
                    });
            })
            .catch((error) =>
                console.error(error))
    }

    useEffect(() => {
        fetchAdvice();
    }, [])


    return (
        <div className='app h-screen flex m-0 p-0 bg-contain bg-center bg-fixed flex justify-center items-center text-center opacity-80 '>
            <div className='bg-slate-100 w-2/5 h-2/5 flex justify-center items-center flex-col text-[0.5em] rounded-md p-2 shadow-lg shadow-black'>
                <h1 className='flex items-center'>{advice}</h1>
                <button type='button' className='flex relative justify-center items-center pointer uppercase border rounded-full border-black hover:animate-rotate ' onClick={() => fetchAdvice()}>
                    <span className='text-[5px] hover:animate-storm delay-6'>
                        Give me advice
                    </span>
                </button>
            </div>
        </div>
    );
}

export default App;
