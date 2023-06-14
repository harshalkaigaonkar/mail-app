import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Header = () => {
  const navigate = useNavigate();
  const [query, setQuery] = useState("");
  const onSearchHandler = () => {
    navigate(`/search?q=${query}`)
  }
  const onChangeHandler = (e) => {
    setQuery(e.target.value);
  }
  return (
    <header className='sticky top-0 pl-20 w-full h-20 flex flex-row items-center justify-between border-b-2 bg-white'>
        <div className='flex flex-row justify-start items-center h-full gap-4 w-24'>
            {/* <img src="/icons/bars.svg" alt="bars" className='w-6 h-6' /> */}
            <h2 className='text-2xl font-bold'>Mail</h2>
        </div>
        <div className='px-10 flex flex-row justify-between items-center h-fit'>
          <form onSubmit={(e) => {
            e.preventDefault();
            onSearchHandler();
          }}>
            <input type="text" placeholder="search for mails" className='border p-2 w-60' value={query} onChange={onChangeHandler} />
            <button className='border p-2' onClick={onSearchHandler}>🔍</button>
          </form>
        </div>
    </header>
  )
}

export default Header