/* 
Controlled components are React components
 where form elements like inputs, selects, 
 and textareas are controlled by React state.

Instead of relying on the browser to manage the state of form elements,
 React maintains their state in the component's state.

Controlled components allow you to validate, manipulate, 
and respond to user input more easily.
*/

import React, {useState} from "react";

function UserForm () {
    //state variable to store form data
    const [formData, setFormData] = useState({
        name:'',
        email:'',
        password:''
    });


    const handleFormData = (e) =>{
        const {name,value} = e.target;
        setFormData({...formData,[name]:value});
    }

    const handleSubmit = (e) =>{
        e.preventDefault();
//do sth

alert(formData.name + ' ' + formData.email + ' ' + formData.password)

        setFormData({
            name:'',
            email:'',
            password:''
        });
    }


    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="name">Name</label>
                <input 
                    id="name"
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleFormData}
                />
            </div>
            <div>
                <label htmlFor="email">Email</label>
                <input 
                    id="email"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleFormData}
                />
            </div>
            <div>
                <label htmlFor="password">Password</label>
                <input 
                    id="password"
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleFormData}
                />
            </div>
            <button type="submit">Submit</button>
        </form>
    )
}


export default UserForm;

