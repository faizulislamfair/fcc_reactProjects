import React from 'react'
import M from 'materialize-css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style.css';


const Length = ({title, changeTime, type, time, formatTime}) => {
    return(
    <div>
        <h3>{title}</h3>
        <div className="time-sets">
            <button className="btn-small deep-purple lighten-2"
              onClick={() => changeTime(-60, type)}
            >
            <i className="material-icons">↓</i>
            </button>
            <h3>{formatTime(time)}</h3>
            <button className="btn-small deep-purple lighten-2"
              onClick={() => changeTime(60, type)}
            >
            <i className="material-icons">↑</i>
            </button>
        </div>
    </div>
    )
}

export default Length