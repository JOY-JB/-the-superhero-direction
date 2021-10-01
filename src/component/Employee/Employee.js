import React from 'react';
import "./Employee.css"

const Employee = (props) => {
    const { FullName, jobTitleName, img, nationality, phoneNumber, salary } = props.employee;
    console.log(props.employee);
    return (
        <div>
            <div className="col">
                <div className="card h-100 rounded-3">
                    <img src={img} className="card-img-top employee-img rounded-circle mx-auto p-2" />
                    <div className="card-body">
                        <h4 className="card-title">{FullName}</h4>
                        <p className="card-text">job Title :  {jobTitleName}</p>
                        <p className="card-text">Nationality :  {nationality}</p>
                        <p className="card-text">Phone : {phoneNumber}</p>
                        <p className="card-text"> Salary : {salary}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Employee;