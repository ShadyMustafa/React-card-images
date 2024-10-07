import { Language } from "./Language";
import { data } from "../data/data";
export function Card(){
    return(
        <div className="wrapper">
            <h1>Click on every photo for a quick info :)</h1>
            <div className="contentWrapper">
                {data.map((l)=>
                    <>
                    <Language lang ={l.name} image = {l.img} about = {l.about} /> 
                    </>
                   
                )}
                
            </div>
        </div>
    );
}