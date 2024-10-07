import { useState } from "react";

export function Language(props){

    const [show,setShow] = useState(false)

    function showHide(){
        if(show === false){
            setShow(true)
        }else{
            setShow(false)
        }
    }
    
    return(
        <div className="content">
            {props.lang}
            {!show &&(<div className="langName">
                 <br />
                <img src={props.image} alt="Language Logo" width={'100px'} onClick={()=>showHide()} />
            </div>)}
            
            {show &&  (<ul>
                {props.about.map((item)=><li onClick={()=>showHide()}>{item}</li>)}
                </ul>)}
        </div>
        
    );
}