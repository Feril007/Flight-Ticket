import React from "react";
import '../Css/oneway.css';
import axios from "axios";



function Oneway() {

    const baseURL = 'http://localhost:8000/get_detailed_itinerary';


    const [selectedFrom, setSelectedFrom] = React.useState();
    const [selectedTo, setSelectedTo] = React.useState();
    const [selectedDate, setSelectedDate] = React.useState();
    const [selectedClass, setSelectedClass] = React.useState();



    const textchange = (e) => {
        if (e.target.name === 'from') {
            setSelectedFrom(e.target.value);

        }
        if (e.target.name === 'to') {
            setSelectedTo(e.target.value);

        }

        if (e.target.name === 'date') {
            setSelectedDate(e.target.value);
        }
        if (e.target.name === 'class') {
            setSelectedClass(e.target.value);
        }
    }



    const submit = async(e) => {
        e.preventDefault();
          try {
            const response = await axios.post("http://localhost:8000/recommend_flights", {
                "airport_from": "trv",
    
                "airport_to": "dxb",
        
                "flight_class": "e",
        
                "flight_date": "2023-09-04"
            });
            
            console.log(response.data);
          } catch (error) {
            console.error('Error:', error);
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
                    id="datePicker"
                    name="date"
                    onChange={textchange} />

            </div>

            <div className='classe'>Select Class:
                <select name="class"
                    onChange={textchange}>
                    <option value="Economy class">Economy class</option>
                    <option value="Business class">Business class</option>
                    <option value="First class">First class</option>
                </select>
            </div>
            <div>
                <button onClick={submit} >Search</button>

            </div>
        </div>

    );
}
export default Oneway;