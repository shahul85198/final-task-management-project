
import React, { createRef } from 'react'
import { doLogin } from '../../store/user/actions';
import { connect } from 'react-redux';

 class Login extends React.Component {
    constructor(props) {
        super(props);
        this.formRef = createRef() //const formRef = useRef()
    }

    handlesubmit = (e) => {
        e.preventDefault();
        const username = this.formRef.current.querySelector("#username").value;
        const password = this.formRef.current.querySelector("#password").value;
        this.props.login({username, password})
    }

  render() {
    console.log(":: LOGIN :: PROPS ::", this.props)
    return (
      <div>
        <div>
            <div>
                <h2>
                    Sign in to your account
                </h2>
            </div>
            <form ref={this.formRef}>
                <div>
                    <div>
                        <label htmlFor='username' onSubmit={this.handlesubmit}>
                            username
                        </label>
                        <input 
                           id='username'
                           name='username'
                           type='text'
                           required
                           placeholder='username'
                        />
                    </div>
                    <div>
                        <label htmlFor='password'>
                            Password
                        </label>
                        <input
                            id='password'
                            name='password'
                            required
                            placeholder='Password'
                        />
                    </div>
                </div>

                <div>
                    <button type='submit'>
                        sign In
                    </button>
                </div>
            </form>
        </div>
      </div>
    )
  }
}


const mapStateToProps = (storeState) => {
    return {
        storeState,
        err: storeState.error
    }
}

const mapDispatchActionsToProps = (dispatch) => {
    return {
        dispatch,
        login: doLogin(dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchActionsToProps)(Login)
// <Login {...prevProps} storeState={{}} error={storeState.error} />