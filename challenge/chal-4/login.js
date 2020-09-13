import React from "react";

class Login extends React.Component {
  state = {
    email: "", 
    password: "",
    loginError: false,
  };

  fillEmail = (event) => {
    this.setState({
      email: event.target.value,
    });
  };

  fillPassword = (event) => {
    this.setState({
      password: event.target.value,
    });
  };

  submit = () => {
    console.log('hello there')
  }

  render() {
    return (
      <div>
          <form onSubmit={this.submit}>
            <input
                type="text"
                value={this.state.email}
                onChange={this.fillEmail}
            />
            <input
                type="password"
                value={this.state.password}
                onChange={this.fillPassword}
            />
            <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default Login;