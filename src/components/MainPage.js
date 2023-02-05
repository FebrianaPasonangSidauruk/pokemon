import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Card from './Card';

const MainPage = () => {
    const [url, setUrl] = useState("https://pokeapi.co/api/v2/pokemon/");
    const [datas, setDatas] = useState([]);
    const [next, setNext] = useState();
    const [previous, setPrevious] = useState();

    const getApi = async ()=>{
        const response = await axios.get(url);
        setNext(response.data.next);
        setPrevious(response.data.previous);
        // getPokemon(response.data.results);
        const getPokemon = response.data.results.map(async(item) => {
            const res = await axios.get(item.url)
            setDatas(list=>{
                list=[...list,res.data]
                return list;
            })
        }
        )
        // console.log(datas);
    }

    // const getPokemon = async (items)=>{
    //     items.map(async(item)=>{
    //     const res = await axios.get(item.url)

    //     setDatas(list=>{
    //         list=[...list,res.data]
    //         return list;
    //     })
    //     })
    // }

    useEffect(()=>{
        getApi();
    }, [url]);

    // console.log(datas);

  return (
    <div>
        {/* {datas.map((data) =>{
            <p key={data.id}>
               <li> {data.name}</li>
            </p>
        })} */}
        <Card pokemon={datas}/>
        <div>
            { previous && <button onClick={()=>{
                setDatas([])
                setUrl(previous)
            }}>
              Previous  
            </button>}

            { next && <button onClick={()=>{
                setDatas([])
                setUrl(next)
            }}>next</button>

            }
        </div>
    </div>
  )
}

export default MainPage