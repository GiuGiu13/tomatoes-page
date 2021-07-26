import React, { useState } from 'react';
import classes from './Newsletter.module.scss';

const Newsletter = ({contentNewsletter}) => {
    
    const [values, setValues] = useState({
        name: '',
        email: '',
    });

    const [submitted, setSubmitted] = useState(false);
    const [valid, setValid] = useState(false);

    const handleNameInputChange = (event) => {
        setValues((values) => ({
            ...values,
            name: event.target.value,
        }));
    };
    
    const handleEmailInputChange = (event) => {
        setValues((values) => ({
            ...values,
            email: event.target.value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if(values.name && values.email) {
            setValid(true);
        }
        setSubmitted(true);
    };

    return (
        <div className={`container ${classes.Newsletter}`}>
            <div className={classes.Newsletter__header}>
                <h2>{contentNewsletter.title}</h2>
                <p>{contentNewsletter.description}</p>
            </div>
            <div className={classes.Newsletter__registerFromContainer}>
            {!valid && (
            <form className={classes.Newsletter__registerForm} onSubmit={handleSubmit}>
                <div className="row">
                    <div class="col-md-6">
                    {submitted && !values.name && <p id="last-name-error" className={classes.Newsletter__errorMessage}>Please enter your name</p>}
                        <input
                            id="name"
                            className={` ${classes.Newsletter__formField}`}
                            type="text"
                            placeholder="Name"
                            name="name"
                            value={values.name}
                            onChange={handleNameInputChange}
                        />
                    </div>    

                    <div class="col-md-6">
                    {submitted && !values.email && <p id="email-error" className={classes.Newsletter__errorMessage}>Please enter your email address</p>}
                        <input
                            id="email"
                            className={`${classes.Newsletter__formField}`}
                            type="text"
                            placeholder="Email"
                            name="email"
                            value={values.email}
                            onChange={handleEmailInputChange}
                        />
                    </div>

                </div>
                <div className="row">
                    <div className="col-md-10" style={{margin:'1.5rem auto 0 auto'}}>
                        <button className={classes.Newsletter__formSubmit} type="submit">
                            Register
                        </button>
                    </div>
                </div>
      </form>
      )}
       {valid && <div class={classes.Newsletter__successMessage}><h4>Success! Thank you for registering</h4></div>}
        </div>
        </div>
    )
}

export default Newsletter
