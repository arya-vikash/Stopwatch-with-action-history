import React ,{ useState } from 'react';
import {Link } from 'react-router-dom';
import { Switch,Route,Redirect, withRouter } from 'react-router-dom';
import {Fade} from 'react-animation-components';
import DisplayTimer from './components/displaytimer';
import DisplayHistory from './components/HistoryComponent'; 
import './App.css';

//On reloading the page local state will be cleared. So it is efficient for us as we dont need to keep the data for long time
function App(){
  const[time, setTime]=useState({h:0,m:0,s:0,ms:0})
  const[inter,setInter]=useState();
  const[hist,setHist]=useState("");
  const[stat,setStat]=useState(false);

//Start will be called on clicking start button
  const start=()=>{
    setHist(hist=>hist.concat(`Action : Start , Time : ${time.h} hr . ${time.m} min . ${time.s} sec . ${time.ms} ms -`));
    run();
    setInter(setInterval(run,10));
  };
  var H=time.h, M=time.m, S=time.s, Ms=time.ms;
  //run is used to update time in our local state using setTime
  const run=()=>{
    Ms++;
    if(Ms===100){
      S++;
      Ms=0;
    }
    else if(S===60){
      M++;
      S=0;
    }
    else if(M===60){
      H++;
      M=0;
    }
    return setTime({h:H,m:M,s:S,ms:Ms});
  };
  //stop is called when stop button is clicked and it clears the set interval for calling run. so that time value stops updating
  const stop=()=>{
    setHist(hist=>hist.concat(`Action : Reset , Time : ${time.h} hr . ${time.m} min . ${time.s} sec . ${time.ms} ms -`));
    clearInterval(inter);
  };
  //reset restore the time local state value to 0:0:0:0 and also stops run from updating time value
  const reset=()=>{
    setHist(hist=>hist.concat(`Action : Reset , Time : ${time.h} hr . ${time.m} min . ${time.s} sec . ${time.ms} ms -`));
    clearInterval(inter);
    setTime({h:0,m:0,s:0,ms:0});
  };
  //here histStat is  used to update status of history if history rendered then histStat returns stat=true 
  //this helps to change view history button to close history
  const histStat=()=>{
    setStat(!stat);
  }
  
  return(
    <div className="outer">
      <Fade in><h1>Hey,there...Keep track of time.It is really important</h1></Fade>
        <div className="clockbody">
          <div className="timerbody">
            <DisplayTimer time={time} start={start} stop={stop} reset={reset} histStat={histStat} stat={stat}/>
          </div>
          <div className="historybody">
            <DisplayHistory hist={hist} stat={stat} />
          </div>
        </div>
    </div>
    
    
  );
}

export default App;
