import React,{useState} from 'react';
import AccordionUI from "../components/AccordionUI";

function Accordion(){

    //Defining the selected index
    const [Index,setIndex] = useState(false);
    
    //Defining the state of the box
    const [open,setOpen] = useState(false);

    //An array containing the data related to a question
    const data = [

        {
            id: 1,
            q: "Team Name",
            a: ":)",
        },

        {
            id: 2,
            q: "Team Logo",
            a: <img height="100" width="100" src="/smile-icon.PNG"></img>
        },

        {
            id: 3,
            q: "Team Members",
            a: <p>Leena Faizan<br></br>
                   Aisha Abdul Quadir<br></br>
                   Hanan Bawazir<br></br>
                   Mariam Bawazir</p>,
        },

    ];

    return (
        
        //Defining the main container of the Accordion Component
        <div className="flex flex-col justify-center items-center md:mt-32 md:mx-60 p-10 rounded-x1 h-auto py-20 bg-gray-50">
            
            {/**Mapping the data of the array along with other required info and sending it to AccordionUI*/}
            {
                data.map((data) =>{
                    return(
                        <AccordionUI 
                            title={data.q} 
                            id={data.id} 
                            children={data.a}
                            open = {open}
                            setOpen = {setOpen} 
                            Index={Index} 
                            setIndex={setIndex}
                        >
                        </AccordionUI>
                    );
                }
                )
            }
        </div>
    );
}

export default Accordion