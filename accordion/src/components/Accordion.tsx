import React from 'react';
import {Faq} from "../typing/faq.ts";
import AccordionItem from "./AccordionItem.tsx";

const Accordion: React.FC<{
    data:Faq[]
}> = ({data}) => {
    return (
        <div className={'accordion'}>
            {data.map((el, index)=> <AccordionItem num={index+1} title={el.title} text={el.text} key={index}/>)}
        </div>
    );
};

export default Accordion;