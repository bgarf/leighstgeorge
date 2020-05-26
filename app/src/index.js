import React from 'react';
import ReactDOM from 'react-dom';

import TimetableColum from './components/timetableColumn.js'
import './css/index.css';
import style from './css/app.css';


const testColumn = [
    {name: style.title, content: '19:45 to 21:15'},
    {name: "bookingSlot", content: ''},
    {name: "bookingSlot", content: ''},
    {name: "bookingSlot", content: ''},
    {name: "bookingSlot", content: ''},
    {name: "bookingSlot", content: ''},
    {name: "bookingSlot", content: ''}
]
class App extends React.Component {
    render() {
        return(
            <div>
            <p id={style.day}>Monday 25th May</p>
            <div id={style.timetableContainer}>
                <div className={style.column}>
                    <p className={style.title}>Tables</p>
                    <p className={style.rowTitle}>Training Room Table 1</p>
                    <p className={style.rowTitle}>Training Room Table 2</p>
                    <p className={style.rowTitle}>Training Room Table 3</p>
                    <p className={style.rowTitle}>Training Room Table 4</p>
                    <p className={style.rowTitle}>Dragon Match Room</p>
                    <p className={style.rowTitle}>George Match Room</p>
                </div>
                <div className={style.column}>
                    <p className={style.title}>12:00 to 13:30</p>
                    <div className="bookingSlot"></div>
                    <div className="bookingSlot"></div>
                    <div className="bookingSlot"></div>
                    <div className="bookingSlot"></div>
                    <div className="bookingSlot"></div>
                    <div className="bookingSlot"></div>
                </div>
                <div className={style.column}>
                    <p className={style.title}>13:45 to 15:15</p>
                    <div className="bookingSlot"></div>
                    <div className="bookingSlot"></div>
                    <div className="bookingSlot"></div>
                    <div className="bookingSlot"></div>
                    <div className="bookingSlot"></div>
                    <div className="bookingSlot"></div>
                </div>
                <div className={style.column}>
                    <p className={style.title}>15:30 to 17:00</p>
                    <div className="bookingSlot"></div>
                    <div className="bookingSlot"></div>
                    <div className="bookingSlot"></div>
                    <div className="bookingSlot"></div>
                    <div className="bookingSlot"></div>
                    <div className="bookingSlot"></div>
                </div>
                <div className={style.column}>
                    <p className={style.title}>18:00 to 19:30</p>
                    <div className="bookingSlot"></div>
                    <div className="bookingSlot"></div>
                    <div className="bookingSlot"></div>
                    <div className="bookingSlot"></div>
                    <div className="bookingSlot"></div>
                    <div className="bookingSlot"></div>
                </div>
                <TimetableColum rows={testColumn}/>
            </div>
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'))