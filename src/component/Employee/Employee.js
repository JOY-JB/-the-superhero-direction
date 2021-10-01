import React from 'react';
import "./Employee.css"

// single Employee data show in card
const Employee = (props) => {
    // get data from JSON file
    const { FullName, jobTitleName, img, nationality, phoneNumber, salary } = props.employee;
    return (
        <div>
            <div className="col">
                <div className="card h-100" style={{ borderRadius: "15px" }}>
                    <img src={img} className="card-img-top employee-img rounded-circle mx-auto p-2" />
                    <div className="card-body">
                        <h4 className="card-title">{FullName}</h4>
                        <p className="card-text">job Title :  {jobTitleName}</p>
                        <p className="card-text">Nationality :  {nationality}</p>
                        <p className="card-text">Phone : {phoneNumber}</p>
                        <p className="card-text"> Salary : ${salary}</p>
                        <button onClick={() => props.handleToSelect(props.employee)} className="btn select-btn px-4"><i className="far fa-check-square"></i>   Select</button>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Employee;