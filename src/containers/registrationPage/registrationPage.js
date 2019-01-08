import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./registrationPage.css";
import NameForm from "../../components/nickName/nickNameForm";
import ModalWindowRegistration from "../../components/modalWindow/modalWindowRegistration";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as actions from "./../../redux/actions";

class Registration extends Component {
  componentDidMount = () => {
    this.props.actions.setUsers();
  };

  render() {
    return (
      <div className="registrationPageWrapper">
        <div className="registrationContentWrapper">
          <NameForm
            setUserName={this.props.actions.setUserName}
            numberOfUsers={
              this.props.listOfAllUsers ? this.props.listOfAllUsers.length : 0
            }
          />
          <Link to="/battle">
            <button className="lincButton">PLAY</button>
          </Link>
          <ModalWindowRegistration listOfAllUsers={this.props.listOfAllUsers} />
          <Link to="/">
            <button className="lincButton">Back</button>
          </Link>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    user: state.userInfo.userName,
    listOfAllUsers: state.listOfAllUsers
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Registration);
