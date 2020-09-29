import React from 'react';
import {FadeTransform } from 'react-animation-components';



function DisplayTimer(props){
  return(
    <div className="timerclock">
      <div>
      <FadeTransform in
                transformProps={{
                    exitTransform: 'scale(0.3) translateY(-50%)'
                }}
            >
                <span>{(props.time.h>10)?props.time.h:"0"+props.time.h}</span>&nbsp;:&nbsp;
                <span>{(props.time.m>10)?props.time.m:"0"+props.time.m}</span>&nbsp;:&nbsp;
                <span>{(props.time.s>10)?props.time.s:"0"+props.time.s}</span>&nbsp;:&nbsp;
                <span>{(props.time.ms>10)?props.time.ms:"0"+props.time.ms}</span>&nbsp;
            </FadeTransform>
        
      </div>
      <div>
        <FadeTransform in
                  transformProps={{
                      exitTransform: 'scale(0.3) translateY(-50%)'
                  }}>
                    <button className="timer-btn " onClick={props.start}>Start</button>
          <button className="timer-btn" onClick={props.stop}>Stop</button>
          <button className="timer-btn" onClick={props.reset}>Reset</button>
        </FadeTransform>
        
      </div>
  
      <div>
        {(props.stat===true)?<button type="button" className="history-btn" onClick={props.histStat} >Close History</button>:""}

        {(props.stat===false)?<button type="button" className="history-btn" onClick={props.histStat} >View History</button>:""}
      </div>
    </div>
  );
}

export default DisplayTimer;