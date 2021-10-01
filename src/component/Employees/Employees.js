import React, { useEffect, useState } from 'react';
import Employee from '../Employee/Employee';
import Selection from '../Selection/Selection';
import "./Employees.css"

const Employees = () => {

    const [employees, setEmployees] = useState([]);

    useEffect(() => {
        fetch("./employee-data.JSON")
            .then(res => res.json())
            .then(data => setEmployees(data));
    }, [])

    return (
        <div className="my-container">
            <div className="row row-cols-1 row-cols-md-3 g-4 p-5">
                {
                    employees.map(employee => <Employee key={employee.userId} employee={employee}></Employee>)

                }
            </div>
            <Selection></Selection>
        </div>
    );
};

export default Employees;