import React from 'react';

function Card(props){
    function classes(){
      const bg  = props.bgcolor ? ' bg-' + props.bgcolor : ' ';
      const txt = props.txtcolor ? ' text-' + props.txtcolor: ' text-white';
      return 'card mb-3 mt-4' + bg + txt;
    }
  
    return (
      <div className={classes()} style={{maxWidth: "100%"}}>
        <div className="card-header"><h2><strong>{props.header}</strong></h2></div>
        <div className="card-body">
          {props.title && (<h3 className="card-title"><strong>{props.title}</strong></h3>)}
          {props.text && (<p className="card-text">{props.text}</p>)}
          {props.body}
          {props.status && (<div id='createStatus'>{props.status}</div>)}
        </div>
      </div>      
    );    
  }

  export default Card;