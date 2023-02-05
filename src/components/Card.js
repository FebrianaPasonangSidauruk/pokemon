import React, {useState} from 'react';
import Detail from './Detail';
import axios from 'axios';

const Card = ({pokemon}) => {
    const [idPokemon, setIdPokemon] = useState([]);
    const [show, setShow] = useState(false);

    const getIdSelected= async(idPoke)=>{
      setShow(true);
      setIdPokemon(idPoke);
    }


  return (
    <div>
        {
          <>
        <div className='grid grid-cols-2 lg:grid-cols-4 gap-6 pt-4'>
        {pokemon.map((item)=>(
            <div key={item.id} >
              <div className='w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700'>
              <h5 className='text-xl font-semibold tracking-tight text-gray-900 dark:text-white'>
                  {item.name} 
                </h5>
                <img src={item.sprites.front_default} />
                <div className="flex items-center justify-between">
                  <button onClick={()=> getIdSelected(item)}  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    Detail
                  </button>
                </div>
              </div>
            </div>
        ))}
        <div className=''>
        {show && <Detail setShow={setShow} idPokemon={idPokemon}/>}
        </div>
        </div>
        </>
        }
    </div>

  )
}

export default Card