import React, { useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'

function Register() {

        const storeState = useSelector(state => state);
        const error = useSelector((state) => state.error);
        const token = useSelector((state) => state.token);
        const formRef = useRef();
        const dispatch = useDispatch();

        const handlesubmit = (e) => {
            e.preventDefault();
            const username = formRef.current.querySelector("#username").value;
            const password = formRef.current.querySelector("#password").value;
            doRegister(dispatch)({username, password})
        }

  return (
    <div>
        <div>
            <div>
                <h2>
                    Register
                </h2>
                <pre>{JSON.stringify({storeState, error, token}, null, 1)}</pre>
            </div>
            <form ref={formRef} onSubmit={handlesubmit}>
                <div>
                    <div>
                        <label>
                            Username
                        </label>
                        <input
                          id='username'
                          name='username'
                          type='text'
                          required
                          placeholder='Username'
                          />
                    </div>
                    <div>
                        <label htmlFor='password'>
                            Password
                        </label>
                        <input 
                          id='password'
                          name='password'
                          type='password'
                          required
                          placeholder='Password'
                        />
                    </div>
                </div>

                <div>
                    <button type='submit'>
                        Rgister
                    </button>
                </div>
            </form>
        </div>
    </div>
  )
}

export default Register