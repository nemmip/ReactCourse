import React, {useState} from 'react';

const AccordionItem: React.FC<{
    num: number;
    title: string;
    text: string
}> = ({num, title,text}) => {
    // STATE
    const [isOpen, setIsOpen] = useState(false)

    // HANDLERS
    const handleToggle = () => {
        setIsOpen(prevIsOpen=> !prevIsOpen)
    }
    return (
        <div className={`item ${isOpen ? 'open': ''}`} onClick={handleToggle}>
            <p className={'number'}>{num < 10 ? `0${num}` : num}</p>
            <p className={'title'}>{title}</p>
            <p className={'icon'}>{isOpen ? '-' : '+'}</p>
            {isOpen && <div className={'content-box'}>{text}</div>}
        </div>
    );
};

export default AccordionItem;