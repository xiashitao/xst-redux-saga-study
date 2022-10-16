import React from "react";
import { connect } from "react-redux";

class Counter extends React.Component {
  state = {
    name: "admin",
    password: "admin",
  };
  nameChange = (e) => this.setState({ name: e.target.value });
  // 3. 密码输入更新state中密码
  passwordChange = (e) => this.setState({ password: e.target.value });
  // 4. 登出
  loginOut = () => this.props.dispatch({ type: "loginOut" });
  // 5. 登录
  login = () =>
    this.props.dispatch({
      type: "login",
      account: {
        name: this.state.name,
        password: this.state.password,
      },
    });
  add = () => this.props.dispatch({ type: "increment_saga" });
  asyncAdd = () => this.props.dispatch({ type: "incrementAsync_saga" });
  render() {
    return (
      <div>
        <div>
          用户名：
          <input onChange={this.nameChange} value={this.state.name} />
        </div>
        <div>
          用户名：
          <input
            onChange={this.passwordChange}
            value={this.state.password}
            type="password"
          />
        </div>
        <button onClick={this.login}>登录</button>
        <button onClick={this.loginOut} disabled={!this.props.loginInfo.success}>登出</button>
        {this.props.loginInfo.success ? (
          <div>{this.props.loginInfo.name} 用户登录成功</div>
        ) : null}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({ loginInfo: state.loginInfo });
export default connect(mapStateToProps, null)(Counter);
