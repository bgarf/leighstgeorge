import React from 'react';
import ReactDOM from 'react-dom';

import './css/index.css';
import {timetableContainer, column, title, rowTitle, day} from './css/app.css';

class App extends React.Component {
    render() {
        return(
            <div>
            <p id={day}>Monday 25th May</p>
            <div id={timetableContainer}>
                <div className={column}>
                    <p className={title}>Tables</p>
                    <p className={rowTitle}>Training Room Table 1</p>
                    <p className={rowTitle}>Training Room Table 2</p>
                    <p className={rowTitle}>Training Room Table 3</p>
                    <p className={rowTitle}>Training Room Table 4</p>
                    <p className={rowTitle}>Dragon Match Room</p>
                    <p className={rowTitle}>George Match Room</p>
                </div>
                <div className={column}>
                    <p className={title}>12:00 to 13:30</p>
                    <div className="bookingSlot"></div>
                    <div className="bookingSlot"></div>
                    <div className="bookingSlot"></div>
                    <div className="bookingSlot"></div>
                    <div className="bookingSlot"></div>
                    <div className="bookingSlot"></div>
                </div>
                <div className={column}>
                    <p className={title}>13:45 to 15:15</p>
                    <div className="bookingSlot"></div>
                    <div className="bookingSlot"></div>
                    <div className="bookingSlot"></div>
                    <div className="bookingSlot"></div>
                    <div className="bookingSlot"></div>
                    <div className="bookingSlot"></div>
                </div>
                <div className={column}>
                    <p className={title}>15:30 to 17:00</p>
                    <div className="bookingSlot"></div>
                    <div className="bookingSlot"></div>
                    <div className="bookingSlot"></div>
                    <div className="bookingSlot"></div>
                    <div className="bookingSlot"></div>
                    <div className="bookingSlot"></div>
                </div>
                <div className={column}>
                    <p className={title}>18:00 to 19:30</p>
                    <div className="bookingSlot"></div>
                    <div className="bookingSlot"></div>
                    <div className="bookingSlot"></div>
                    <div className="bookingSlot"></div>
                    <div className="bookingSlot"></div>
                    <div className="bookingSlot"></div>
                </div>
                <div className={column}>
                    <p className={title}>19:45 to 21:15</p>
                    <div className="bookingSlot"></div>
                    <div className="bookingSlot"></div>
                    <div className="bookingSlot"></div>
                    <div className="bookingSlot"></div>
                    <div className="bookingSlot"></div>
                    <div className="bookingSlot"></div>
                </div>
            </div>
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'))