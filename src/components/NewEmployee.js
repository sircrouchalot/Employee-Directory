import React from 'react';

function NewEmployee(props) {
    this.setState = {
        name: '',
        email: '',
        department: '',
        manager: ''
    };

    var { employees } = props;

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    function handleChange(e) {
        e.preventDefault();
        this.setState({
            name: e.target.name,
            email: e.target.name,
            department: e.target.name,
            manager: e.target.name
        });
    }
    function handleSubmit(e) {
        e.preventDefault();
        employees.push(this.state);
        console.log(employees);
    }

    return (
        <form style={{display: "block"}}>
            <div className="form-group">
                <label for="name">Full Name</label>
                <input name="name" type="text" className="form-control" placeholder="Enter Full Name" onChange={handleChange} />
            </div>
            <div className="form-group">
                <label for="email">Email</label>
                <input name="email" type="text" className="form-control" placeholder="Email" onChange={handleChange} />
            </div>
            <div className="form-group">
                <label for="department">Department</label>
                <input name="department" type="text" className="form-control" placeholder="Department" onChange={handleChange} />
            </div>
            <div className="form-group">
                <label for="manager">Manager</label>
                <input name="manager" type="text" className="form-control" placeholder="Manager" onChange={handleChange} />
            </div>
            <button type="submit" className="btn btn-primary" onClick={handleSubmit}>Submit</button>
        </form>
    )
}

export default NewEmployee;