import React from 'react'

const Header = () => {
  return (
    <header className='sticky top-0 px-20 w-full h-20 flex flex-row items-center justify-between border-b-2 bg-white'>
        <div className='flex flex-row justify-start items-center h-full gap-4 w-24'>
            <img src="/icons/bars.svg" alt="bars" className='w-6 h-6' />
            <h2 className='text-2xl font-bold'>Mail</h2>
        </div>
        <div className='px-10 flex flex-row justify-between items-center h-fit'>
            <input type="text" placeholder="search for mails" className='border p-2' />
            <button className='border p-2'>🔍</button>
        </div>
    </header>
  )
}

export default Header