import {useState} from 'react';

export default function ReportForm() {

    const [ notes, setNotes] = useState("");

    const handleChange= (event) => {
        setNotes(event.target.value);
    }

    // const handleSubmit = (event) => {
    //     alert("Form Submitted");
    //     event.preventdefault();
    // }

    const handleClick = (event => {
        alert("Form Submitted");
        event.preventdefault();
    })
    
    return (
        <div>
            <form>
            {/* <form onSubmit={handleSubmit}> */}
                <label>Add your report here: <input type="textarea"
                value={notes}
                onChange={handleChange} />
                </label>
                <button type="submit" onClick={handleClick} >Submit</button>
                {/* <input type="submit" /> */}
            </form>

            <p>Preview: {notes}</p>
        </div>

    );
};