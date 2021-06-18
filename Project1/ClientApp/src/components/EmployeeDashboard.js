import React, { useEffect, useState } from 'react';

const EmployeeDashboard = () => {

    const [employeeList, setEmployeeList] = useState([]);

    useEffect(() => {
        //implement calls to backend here
        //api/Employees returns an array of json objects
        fetch('api/Employees').then(result => result.json()).then(data => console.log(data));
    }, []);

    useEffect(() => {
        //useEffect that will run each time employeeList changes
    }, [employeeList])

    return (
        <>
            {/* Implement EmployeeManagement application here */}

        </>
    )
}

export default EmployeeDashboard;