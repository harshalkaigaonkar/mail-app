import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom'
import { fetchMails, selectLoading, selectMails } from '../redux/slices/mailSlice';

const Mail = () => {
  const navigate = useNavigate();
  const {mailId} = useParams();
  const dispatch  = useDispatch();
  const mails = useSelector(selectMails);
  const loading = useSelector(selectLoading);

  const [mail, setMail] = useState();

  // eslint-disable-next-line react-hooks/exhaustive-deps
  async function fetchCurrentMail() {
    document.title = `Mail App | Mail`;
    if(!mails)
      await dispatch(fetchMails()).then(
        ({payload: mails}) => {
          setMail(mails.find((item) => item.id.toString() === mailId));
        }
      ).catch(() => {
        navigate("/")
      });
    else
      setMail(mails.find((item) => item.id.toString() === mailId));
  }

  useEffect(() => {
    fetchCurrentMail();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [mailId]);

  const onBackHandler = () => {
    navigate(-1);
  }

  if(loading && !mail)
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
      <div className='p-4 flex flex-row justify-start items-start gap-3'>
      <button className='mt-1 p-2 rounded-full transition duration-300 hover:-translate-x-2 hover:bg-black/10' onClick={onBackHandler}>
        <img src={"/icons/left-arrow.svg"} alt="back" className='w-8 h-8' />
      </button>
      <div className='px-4 flex flex-col justify-start'>
        <h2 className='max-w-[1000px] font-bold text-2xl capitalize whitespace-pre overflow-hidden truncate'>{mail?.subject}</h2>
        <p className='font-light text-sm'>from user-{mail?.userId}</p>
      </div>
      <div className='bg-black/10 px-5 py-2 rounded-full'>
        <p className='capitalize'>{mail?.tag}</p>
      </div>
      </div>
      <div className='mt-5 ml-[5.5rem] w-inherit flex flex-col gap-5'>
        <p>{mail?.body}</p>
      </div>
    </div>
  )
}

export default Mail