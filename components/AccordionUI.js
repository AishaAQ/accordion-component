import React from 'react';
import {HiArrowCircleDown, HiArrowCircleRight} from 'react-icons/hi';

const AccordionUI = ({title,children,open,setOpen,id,Index,setIndex}) =>  {

    //function to handle the clicking of a question
    //gets the id of the selected question and sets open to either true or false
    const handleOnClick = (id) => {
        if (Index === id && open===true){
            setOpen(false)
        }
        else {
            setOpen(true)
        }
        Index !== id && setIndex(id)
    };

    return (
       <>

        {/**Defining the main box of the question */}
        <div 
        onClick={() => handleOnClick(id)} 
        className=
        {
                    Index ===id && open === true ? (
                        "flex group w-3/4 mx-auto h-17 justify-left items-left p-4 mt-2 rounded-t-md bg-green-800"
                        ):(
                    "flex group cursor-pointer w-3/4 mx-auto h-17 justify-left items-left p-4 mt-2 rounded bg-white hover:bg-green-800 hover:shadow-lg focus:bg-green-800"
                    )
            }
        >
            {/**Defining the two parts (title and arrow icon) within the main question box */}
            
            {/**Defining the arrow icon box*/}
            <div className="flex items-center justify-center pl-2">
            
            {/**Displays the HiArrowCircleDown if a question is opened, otherwise displays HiArrowCircleRight*/}
            {
                Index !==id || open === false ? (
                    <HiArrowCircleRight className="w-6 h-6 group-hover:text-white text-green-800"/>
                    ):(
                    <HiArrowCircleDown className="w-6 h-6 text-white"/>)
            }
            </div>
                
                {/**Displays the content of the question */}
                <div 
                className=
                {
                    Index ===id && open === true ? (
                        "text-white font-semibold pl-2"
                        ):(
                        "text-green-800 font-semibold pl-2 group-hover:text-white"
                        )
                }
                >
                    {title}
                </div>
        </div>

        {/**Displays the answer box with its contents if a question is opened*/}
        {
            Index === id && open===true && <div className="bg-green-200 px-10 font-semibold text-green-800 w-3/4 h-auto rounded-b-md py-4 border-l-2 border-green-500 mb-2">{children}</div>
        }
       </> 
    );
}

export default AccordionUI