import React, { useState, useEffect } from 'react';

const Detail = ({ setShow, idPokemon }) => {
  const [moves, setMoves] = useState([]);

  const top10Moves = () => {
    const movesList = idPokemon.moves.map(move => move.move.name).slice(0, 10);
    setMoves(movesList);
  }

  useEffect(() => {
    top10Moves();
  }, [idPokemon]);

  const detailContainer =`fixed mx-auto sm:w-3/4 md:w-2/4 inset-x-0 top-40 z-50  w-full p-4 overflow-x-hidden overflow-y-auto  h-modal md:h-full`;
  const containerBorder =`border border-orange-500 rounded-lg shadow dark:bg-orange-700 dark:border-orange-500`;
  const detailButton =`font-bold text-white bg-transparent hover:bg-orange-200 hover:text-gray-900 rounded-lg text-sm p-1.5
   ml-auto inline-flex items-center dark:hover:bg-orange-600 dark:hover:text-white`
  const headerModal =`flex items-start justify-between p-4 border-b rounded-t dark:ring-orange-500`

  return (
    <div className={detailContainer}>
        <div className={containerBorder}>
          <div className={headerModal}>
            <h1 className='text-white font-bold'>{idPokemon.name.toUpperCase()}</h1>
            <button className={detailButton}
             onClick={() => setShow(false)}>
              X
            </button>
          </div>
          <div className='flex items-center justify-center'>
            <img src={idPokemon.sprites.front_default} />
            <img src={idPokemon.sprites.back_default} />
          </div>
          <div className='flex items-center justify-between  text-white'>
            <div className='flex flex-col px-4 py-3'>
              <li>
                <span>Types :
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
  )
}

export default Detail