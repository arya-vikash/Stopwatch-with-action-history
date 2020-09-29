import React from 'react';
import {Fade,Stagger} from 'react-animation-components';


//DisplayHistory function renders history with staggered animation applied saperately 
function DisplayHistory(props){
    var action=props.hist.split('-');
    if(props.stat){
        return(
            <div className="historyText">
               
                <Stagger in>
                    {action=action.map((line)=>{
                    return(
                        <Fade in><h5>{line}</h5></Fade>
                            
                    );
                })}
                </Stagger>
            </div>
        );
    }
    else{
        return('');
    }

    

}
export default DisplayHistory;