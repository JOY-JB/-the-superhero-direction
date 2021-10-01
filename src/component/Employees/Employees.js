import React, { useEffect, useState } from 'react';
import Employee from '../Employee/Employee';
import Selection from '../Selection/Selection';
import "./Employees.css"

const Employees = () => {

    // useState for Employee 
    const [employees, setEmployees] = useState([]);
    // useState for Selection
    const [select, setSelect] = useState([]);

    // use effect for load Employe data
    useEffect(() => {
        fetch("./employee-data.JSON")
            .then(res => res.json())
            .then(data => setEmployees(data));
    }, [])

    // click handler function to get exact employee details
    const handleToSelect = (employee) => {
        const totalSelected = [...select, employee];
        setSelect(totalSelected);
    }


    return (
        <div className="my-container">
            {/* All Employee data */}
            <div className="row row-cols-1 row-cols-md-3 g-4 p-5">
                {
                    employees.map(employee =>
                        <Employee
                            key={employee.userId}
                            employee={employee}
                            handleToSelect={handleToSelect}
                        ></Employee>)

                }
            </div>
            {/* Selection panel */}
            <Selection select={select}></Selection>
        </div>
    );
};

export default Employees;