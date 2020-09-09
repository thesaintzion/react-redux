import React from 'react';
// import '../todo.css';
import logo from '../../assets/img/logo.svg';


const Todo = () =>{

    return (
        <React.Fragment>
            <header className="header">
                <div className="logo-con">
                    <img src={logo} />
                </div>
            </header>
<h1> TODO APP</h1>
        </React.Fragment>
        
        
    )
};

export default Todo;