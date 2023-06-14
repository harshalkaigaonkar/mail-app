import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom';

const sidebar = [
    {
        "icon": "/icons/inbox-outline.svg",
        "icon_active": "/icons/inbox-solid.svg",
        "type": "Inbox",
    },
    {
        "icon": "/icons/all-outline.svg",
        "icon_active": "/icons/all-solid.svg",
        "type": "All",
    },
    {
        "icon": "/icons/draft-outline.svg",
        "icon_active": "/icons/draft-solid.svg",
        "type": "Draft"
    },
    {
        "icon": "/icons/spam-outline.svg",
        "icon_active": "/icons/spam-solid.svg",
        "type": "Spam"
    },
    {
        "icon": "/icons/trash-outline.svg",
        "icon_active": "/icons/trash-solid.svg",
        "type": "Trash"
    }
];

const Sidebar = () => {
    const navigate = useNavigate();
    const {pathname} = useLocation();

    const onClickHandler = (e) => {
        const title = e.target.textContent;
        if(title === "All")
            navigate("/")
        navigate(`/mails/${title.toLowerCase()}`)
    }
  return (
    <div className='py-4 sticky top-20 left-0 list-none h-[90vh] flex flex-col justify-start gap-2 border-r w-2/12'>
        {sidebar.map((item, index) => (
            <li key={index} id={item.type}  className={`${(item.type === "All" && pathname === "/") || item.type.toLowerCase() === pathname.split("/")[2] ? "bg-black/10 ": ""}
            w-[80%] p-1 flex gap-4 items-center justify-center pr-2 w-[80%] rounded-r-md cursor-pointer transition duration-75 hover:bg-black/5`} onClick={onClickHandler}>
                <img src={(item.type === "All" && pathname === "/") || item.type.toLowerCase() === pathname.split("/")[2] ? `${item.icon_active}`: `${item.icon}`} alt={`${item.type}`} className="w-[20px] h-[20px]" /> 
                <p className='font-semibold w-12'>{item.type}</p>
            </li>
        ))}
    </div>
  )
}

export default Sidebar