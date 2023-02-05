import React, { useState, useEffect } from 'react'

const Detail = ({ setShow, idPokemon }) => {
  const [moves, setMoves] = useState([]);

  const cek = () => {
    const movesList = idPokemon.moves.map(move => move.move.name).slice(0, 10);
    setMoves(movesList);
  }

  useEffect(() => {
    cek();
  }, [idPokemon]);

  return (
    <div className='fixed mx-auto sm:w-3/4 md:w-2/4 inset-x-0 top-40 z-50  w-full p-4 overflow-x-hidden overflow-y-auto  h-modal md:h-full'>
      <div className='relative w-full h-full max-w-2xl md:h-auto'>
    <div className=' border border-gray-200 rounded-lg shadow dark:bg-blue-800 dark:border-blue-700'>
     <div className='flex items-start justify-between p-4 border-b rounded-t dark:border-gray-600'>
     <h1>{idPokemon.name}</h1>
      <button className='text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white' onClick={() => setShow(false)}>
        X
      </button>
      </div>
      {/* <h1>{idPokemon.name}</h1> */}
      <div className='flex items-center justify-between  text-white'>
      <img src={idPokemon.sprites.front_default} />
      <div className='flex flex-col px-4'>
        <li>
          <span>Types:
            {idPokemon.types.map((item) => (
                <span>{item.type.name}</span>
              )).reduce((prev, curr) => (prev ? [' ', prev, ', ', curr] : curr), null)}
          </span>
        </li>
        <li><span>Weight: {idPokemon.weight} Hectograms</span></li>
        <li><span>Height: {idPokemon.height} Decimetres</span></li>
        <li>
          <span>Abilities :
            {idPokemon.abilities.map((item) => (
              <span>{item.ability.name}</span>
            )).reduce((prev, curr) => (prev ? [' ', prev, ', ', curr] : curr), null)}
          </span> </li>
        <li>
          <span>10 Moves :
            {moves.map((item) => (
              <span>{item}</span>
            )).reduce((prev, curr) => (prev ? [' ', prev, ', ', curr] : curr), null)}
          </span> </li>
        <li>
          Stats:
            {idPokemon.stats.map((item) => (
              <p className='ml-5'> {item.stat.name} : {item.base_stat}</p>
            ))
          }
        </li>
      </div>
      </div>
      </div>
    </div>
    </div>
  )
}

export default Detail