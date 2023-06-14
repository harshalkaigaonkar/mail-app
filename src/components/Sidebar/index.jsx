import React from 'react'

const sidebar = [
    {
        "icon": "/icons/all-outline.svg",
        "icon_active": "/icons/all-outline.svg",
        "type": "All",
    },
    {
        "icon": "/icons/inbox-outline.svg",
        "icon_active": "/icons/inbox-outline.svg",
        "type": "Inbox",
    },
    {
        "icon": "/icons/draft-outline.svg",
        "icon_active": "/icons/draft-outline.svg",
        "type": "Draft"
    },
    {
        "icon": "/icons/spam-outline.svg",
        "icon_active": "/icons/spam-outline.svg",
        "type": "Spam"
    },
    {
        "icon": "/icons/trash-outline.svg",
        "icon_active": "/icons/trash-outline.svg",
        "type": "Trash"
    }
];

const Sidebar = () => {
  return (
    <div className='py-4 sticky top-20 left-0 list-none h-[90vh] flex flex-col justify-start gap-2 border-r w-2/12'>
        {sidebar.map((item, index) => (
            <li key={index} className="w-full flex gap-4 items-center justify-center">
                <img src={`${item.icon}`} alt={`${item.type}`} className="w-[20px] h-[20px]" /> 
                <p className='font-semibold w-12'>{item.type}</p>
            </li>
        ))}
    </div>
  )
}

export default Sidebar