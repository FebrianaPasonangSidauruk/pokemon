import React,{useState, useEffect} from 'react'

const Detail = ({setShow, idPokemon}) => {
  const [ability, setAbility] = useState([]);
  const [moves, setMoves] = useState([]);
  var pokemon = ([]);
  // console.log(idPokemon);
  
  // const [dataPoke, setDataPoke]=useState([]);

  
  const cek =()=>{
    // console.log(idPokemon);
    pokemon = idPokemon.abilities.map((item)=> item.ability.name);
    setAbility(pokemon);
    console.log(pokemon)

    const movesList = idPokemon.moves.map(move=>move.move.name).slice(0, 10);
    setMoves(movesList);
  }

  console.log(moves);
  console.log(ability);

  useEffect(()=>{
    cek();
}, [idPokemon]);
  // setDataPoke(idPokemon)
  return (
    <div className='w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-blue-800 dark:border-blue-700'>
      <button className='bg-red-800' onClick={()=>setShow(false)}>X</button>
      {/* <h1>{idPokemon.name}</h1> */}
      {/* for (let index = 0; index = pokemon.length; index++) {
        const element = array[index];
        
      } */}
      <div className=''>
        <li>
        <span>
          Types:
          {
            idPokemon.types.map((item)=>(
              <span>{item.type.name}</span>
            )).reduce((prev, curr) => (prev ? [' ', prev, ', ', curr] : curr), null)}
        </span>
        </li>
        <li><span>Weight: {idPokemon.weight} Hectograms</span></li>
        <li><span>Height: {idPokemon.height} Decimetres</span></li>
        <li>
        <span>Abilities :  
      {ability.map((item)=>(
       <span>{item}</span>
      )).reduce((prev, curr) => (prev ? [' ', prev, ', ', curr] : curr), null)}
      </span> </li>
      <li>
        <span>10 Moves :  
      {moves.map((item)=>(
       <span>{item}</span>
      )).reduce((prev, curr) => (prev ? [' ', prev, ', ', curr] : curr), null)}
      </span> </li>
      <li>
        Stats:
        {
          idPokemon.stats.map((item)=>(
            <p>{item.stat.name} : {item.base_stat}</p>
          ))
        }
      </li>
      </div>
      {/* {pokemon.forEach(element=>{
        console.log(element)
      })} */}
      {/* {cek} */}
      {/* {
        idPokemon.abilities.map((item)=>(
          <p>{item.ability.name}</p>
        ))
      } */}

      {/* {
        pokemon.map(item=>
          <>
          console.log('ffa');
          <p>{item}</p>
          </>
        )
      } */}


      {/* {
        ability.map
      } */}
      </div>
  )
}

export default Detail