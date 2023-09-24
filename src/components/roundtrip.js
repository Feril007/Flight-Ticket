import React from "react";
import '../Css/oneway.css';



function RoundTrip() {


    const textchange = (e) => {
        if (e.target.name === 'to') {
            console.log(e.target.value)
        }
    }
    return (
        <div>
            <div className="box">
                <form>
                    <div>
                    <label className="from">
                        Departure From:
                        <input type="text" name="from"
                            onChange={textchange}
                        />
                    </label></div>
                    <div>
                    <label className="from">
                        Arrival To:
                        <input type="text" name="to"
                            onChange={textchange}
                        />
                    </label></div>
                </form>
            </div>
            <div>
                <label htmlFor="datePicker">Departure Date:</label>
                <input
                    type="date"
                    id="datePicker" />

            </div>
            <div>
                <label htmlFor="datePicker">Return Date:</label>
                <input
                    type="date"
                    id="datePicker" />

            </div>

            <div className='classe'>Select Class:
                <select>
                    <option value="fruit">Economy class</option>
                    <option value="vegetable">Business class</option>
                    <option value="meat">First class</option>
                </select>

            </div>
        </div>

    );
}
export default RoundTrip;