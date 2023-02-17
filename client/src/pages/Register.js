import React from 'react'
import { useState, useEffect } from 'react'
import { Logo, FormRow, Alert } from '../components'
import Wrapper from '../assets/wrappers/RegisterPage'

const initialstate = {
    name: '',
    email: '',
    password: '',
    isMember: true,
    showAlert: false,
}


const Register = () => {
    const [values, setValues] = useState(initialstate)
    // gloabal state and useNavigate 

    const handleChange = (e) => {
        console.log(e.target)
    }

    const onSubmit = (e) => {
        e.preventDefault()
        console.log(e.target)
    }

    return (
        <Wrapper className='full-page'>
            <form className='form' onSubmit={onSubmit}>

                <Logo />
                <h3> Login </h3>
                {values.showAlert && <Alert />}
                {/* name input */}
                <FormRow
                    type='text'
                    name="name"
                    value={values.name}
                    handleChange={handleChange}
                />
                {/* email input */}
                <FormRow
                    type='email'
                    name="email"
                    value={values.email}
                    handleChange={handleChange}
                />

                {/* password input */}
                <FormRow
                    type='password'
                    name="password"
                    value={values.password}
                    handleChange={handleChange}
                />

                {/*<div className="form-row">
                    <label htmlFor="name" className="form-label"> Name </label>

                    <input type="text" value={values.name} name="name" onChange={handleChange} className='form-input'></input>
                    </div>
                    */}

                <button type='submit' className='btn btn-block'> Submit </button>

            </form>
        </Wrapper>
    )
}

export default Register
