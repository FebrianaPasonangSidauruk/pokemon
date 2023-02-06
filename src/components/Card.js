import React, {useState} from 'react';
import Detail from './Detail';
import {MdCatchingPokemon} from 'react-icons/md';

const Card = ({pokemon, buttonstyling}) => {
    const [idPokemon, setIdPokemon] = useState([]);
    const [show, setShow] = useState(false);
 
    const getIdSelected= async(idPoke)=>{
      setShow(true);
      setIdPokemon(idPoke);
    }

    const card =`p-2 flex flex-col items-center justify-center w-full max-w-sm
    bg-white border border-orange-200 rounded-lg shadow bg-gradient-to-tr from-amber-800 to-orange-400`;

  return (
    <div>
        {
          <>
        <div className='grid grid-cols-2 lg:grid-cols-4 gap-6 pt-4'>
          {pokemon.length >= 1 || pokemon.length ===0? pokemon.map((item)=>(
            <div key={item.id} >
              <div className={card}>
              <h5 className='text-xl font-semibold text-white'>
                  {item.name} 
                </h5>
                <img src={item.sprites.front_default} />
                <div className="flex justify-end">
                  <button onClick={()=> getIdSelected(item)}  className={buttonstyling}>
                    <p>Detail</p>
                    <MdCatchingPokemon size='1.5rem'/>
                  </button>
                </div>
                </div>
              </div>

        )) : <div className={card}>
        <h5 className='text-xl font-semibold text-white'>
            {pokemon.name} 
          </h5>
          <img src={pokemon.sprites.front_default} />
          <div className="flex justify-end">
            <button onClick={()=> getIdSelected(pokemon)}  className={buttonstyling}>
              <p>Detail</p>
              <MdCatchingPokemon size='1.5rem'/>
            </button>
          </div>
          </div>}
        
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