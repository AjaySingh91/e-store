import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useEffect,useState } from 'react';
function Search() {
    const [searchTearm, setSearchTearm] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        const delay = setTimeout(() => {
            if (searchTearm) {
        navigate('/search?s=' + searchTearm);   
            }
        }, 500);
        return () => clearTimeout(delay);
    },[searchTearm, navigate])
    

    const handleChange = ev => {
        setSearchTearm(ev.target.value);
    }
  return (
    <div>
        <div className=' md:-ml-96 -ml-32 '>
        <label className='text-xl md:m-2 m-3 md:text-2xl'> Search</label>
        <input className=' text-black text-xl md:w-60  h-12 p-2 w-44 rounded-lg' type="text" name='Search' placeholder='Enter text' onChange={handleChange}/>
    </div>
    </div>
  )
}

export default Search