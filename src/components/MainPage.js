import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Card from './Card';
import { GiNextButton, GiPreviousButton } from 'react-icons/gi'
import { SiPokemon } from 'react-icons/si';
import { FaSearch } from 'react-icons/fa';

const MainPage = () => {
    const [url, setUrl] = useState("https://pokeapi.co/api/v2/pokemon/");
    const [datas, setDatas] = useState([]);
    const [next, setNext] = useState();
    const [previous, setPrevious] = useState();
    const [name, setName] = useState('');
    const [keyword, setKeyword] = useState('');

    const getApi = async () => {
        try {
            if (keyword == "") {
                const response = await axios.get(url);

                setNext(response.data.next);
                setPrevious(response.data.previous);
                const getPokemon = response.data.results.map(async (item) => {
                    const res = await axios.get(item.url)
                    setDatas(list => {
                        list = [...list, res.data]
                        return list;
                    })
                }
                )
            } else if (keyword !== "") {
                const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${keyword}`);
                console.log(response.data)
                setDatas(response.data)
            }

        }
        catch (error) {
            alert('Pokemon name not found');
            setKeyword("");
        }
    }

    const refreshPage = () => {
        window.location.reload();
    }

    const Search = () => {
        var temp = name.toLowerCase();
        if (temp !== "") setKeyword(temp);
        setName("");
    }

    useEffect(() => {
        getApi();
    }, [url, keyword]);

    const buttonstyling = `flex space-x-3 mr-15  font-semibold bg-gradient-to-r from-red-600 to-orange-500
    text-gray-100 rounded-sm ring-2 ring-orange-500 px-5 py-2 hover:ring-yellow-300`;

    const buttonstylingNext = `flex space-x-3 font-semibold bg-gradient-to-r from-red-600 to-orange-500
    text-gray-100 rounded-sm ring-2 ring-orange-500 px-7 py-2 hover:ring-yellow-300 mx-8 `;

    const searchStyling =`px-3 py-1 font-normal text-gray-700 bg-white border-y-2 
    border-solid border-gray-300 rounded-tl rounded-bl m-0`;


    return (
        <div className='flex flex-col h-screen bg-gradient-to-r from-orange-300 to-red-200'>
            <nav className=' bg-white border-gray-200 px-2 sm:px-4 py-2.5 dark:bg-orange-700'>
                <div className='float-left'>
                    <button>
                        <SiPokemon onClick={refreshPage} color='white' size={56} />
                    </button>
                </div>
                <div className='mt-3 float-right '>
                    <div className='flex justify-between'>
                        <input
                            type="search"
                            className={searchStyling}
                            value={name}
                            onChange={event => { setName(event.target.value) }}
                            placeholder="search pokemon name"
                        />
                        <button 
                            onClick={Search} 
                            type="submit" 
                            className=" px-3 py-2.5 bg-orange-600  rounded-tr rounded-br hover:bg-orange-800  ">
                            <i className="fas">
                                <FaSearch color='white' /> 
                            </i>
                        </button>
                    </div>
                </div>
            </nav>

            <div className=' overflow-y-auto p-5'>
                <Card pokemon={datas} buttonstyling={buttonstyling} />
            </div>
            <div className='p-2 flex flex-col items-center justify-center'>
                <div className='flex justify-end'>
                    {previous && 
                        <button
                            className={buttonstyling}
                            onClick={() => {
                                setDatas([])
                                setUrl(previous)
                            }}>
                            <GiPreviousButton size='1.5rem' color='white' />
                            <p>Previous</p>
                        </button>
                    }
                    {next && 
                        <button
                            className={buttonstylingNext}
                            onClick={() => {
                                setDatas([])
                                setUrl(next)
                            }}>
                            <p>Next</p>
                            <GiNextButton size='1.5rem' />
                        </button>
                    }
                </div>
            </div>
        </div>
    )
}

export default MainPage