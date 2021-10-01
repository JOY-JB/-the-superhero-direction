import React from 'react';
import "./Selection.css"

// Selection Option
const Selection = (props) => {

    let total = 0;
    for (const details of props.select) {
        total = total + parseInt(details.salary);

    }
    return (
        <div className="select-section">
            <div className="section py-5">
                <h3 className="text-color">Total Selected : {props.select.length}</h3>
                <h3 className="text-color">Total Salary : ${total} </h3>
            </div>
        </div>
    );
};

export default Selection;