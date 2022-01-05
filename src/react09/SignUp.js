import React from 'react';

class SignUp extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            name : ''
        }
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name] : event.target.value
        });
    }

    render() {
        var {name} = this.state;

        return(
            <form onSubmit = {this.handleSubmit}>
                <label>
                    name
                    <input
                        type = 'text'
                        name = {'name'}
                        value = {name}
                        onChange = {this.handleChange}>

                    </input>
                </label>
                <input type = 'submit' value = 'Submit'></input>
            </form>
        )
    }
}

export default SignUp;