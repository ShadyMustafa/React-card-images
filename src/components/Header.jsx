import { useState } from "react"
import { current } from "../data/data"
export function Header(){

    const [show,setShow] = useState(false)

    function showHide(){
        if(show === false){
            setShow(true)
        }else{
            setShow(false)
        }
    }

    return(
        <div className="headerWrapper">
            {show && (
            <div className="Header">
                <img src={current.img} alt="React" onClick={()=>showHide()}/>
            </div>
            )}
            {!show && (
                <ul id="react">
                    {current.about.map((info)=><li onClick={()=>showHide()}>{info}</li>)}
                </ul>
            )}
        </div>
    )
}