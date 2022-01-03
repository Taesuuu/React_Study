import React from "react";
import Greeting from "./Greeting";

function LoginButton(props) {
  return <button onClick={props.onClick}>Login</button>;
}

function LogoutButton(props) {
  return <button onClick={props.onClick}>Logout</button>;
}

class LoginControl extends React.Component {
  constructor(props) {
    super(props);
    this.handleLoginClick = this.handleLoginClick.bind(this);
    this.handleLogoutClick = this.handleLogoutClick.bind(this);
    this.state = { isLoggedIn: false };
  }
  handleLoginClick() {
    this.setState({ isLoggedIn: true });
  }

  handleLogoutClick() {
    this.setState({ isLoggedIn: false });
  }

  render() {
    const isLoggedIn = this.state.isLoggedIn;
    let button;

    if (isLoggedIn) {
      button = <LogoutButton onClick={this.handleLogoutClick}></LogoutButton>;
    } else {
      button = <LoginButton onClick={this.handleLoginClick}></LoginButton>;
    }

    return (
      <div>
        <Greeting isLoggedIn={isLoggedIn}></Greeting>
        {button}

        {/* && 는 if문과 동일하게 사용가능하고 if else는 ? 를 통해  ? true : false  그리고 여러가지를 한번에 출력하려면 div 태그를 통해 하나의 뭉탱이로 만들어줘야 함 그리고 아무것도 출력하지 않는다면 null을 리턴해주면 댐*/}
        {isLoggedIn && <h5>{new Date().toLocaleString()}</h5>}
      </div>
    );
  }
}

export default LoginControl;
