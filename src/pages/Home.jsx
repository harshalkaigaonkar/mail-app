import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom'
import { fetchMails, selectLoading, selectMails } from '../redux/slices/mailSlice';

const Home = () => {
  const navigate = useNavigate();
  const dispatch  = useDispatch();
  const mails = useSelector(selectMails);
  const loading = useSelector(selectLoading);

  useEffect(() => {
    if(!mails)
      dispatch(fetchMails());
  }, [dispatch, mails]);

  const onClickMail = (e) => {
    const id = e.target.id;
    if(id) {
      navigate(`/mail/${id}`);
    }
  }

  if(loading)
    return (
      <>
        <div className='h-[90vh] w-10/12 flex justify-center items-center'>
          <div className='animate-spin'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="black" class="w-6 h-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
            </svg>
          </div>
        </div>
      </>
    )



  return (
    <div className='px-10 w-10/12'>
      <div className='bg-white flex flex-row justify-between items-center'>
      <h2 className='p-4 font-bold text-3xl capitalize'>All Mails</h2>
      <p className='text-md font-medium text-black/50'>Showing results - {mails.length} of {mails.length}</p>
      </div>
      <div className='mt-5 w-full flex flex-col gap-5' onClick={onClickMail}>
        {mails.map((item, index) => (
          <div key={index} id={item.id} className="py-2 px-4 flex flex-row items-center justify-between w-full rounded-lg border cursor-pointer transition duration-75 hover:bg-black/5">
            <div id={item.id} className='w-[20%] h-full flex justify-center items-center'>
              <p id={item.id} className='py-[2px] font-bold border h-8 w-8 rounded-full text-center'>{item.userId}</p>
            </div>
            <div id={item.id} className='px-4 min-w-[90%]'>
              <p id={item.id} className='overflow-hidden truncate font-bold text-md'>{item.subject}</p>
              <p id={item.id} className='overflow-hidden truncate text-black/40'>{item.body}</p>
            </div>
            <div id={item.id} className='px-2 w-[20%]'>
              <p id={item.id} className='px-3 py-2 border text-center rounded-full text-sm font-medium'>{item.tag}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Home