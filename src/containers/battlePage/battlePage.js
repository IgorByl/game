import React, { Component, Fragment } from "react";
import "./battlePage.css";
import ModalWindowBattlePage from "../../components/modalWindow/modalWindowBattlePage";
import NickName from "../../components/nickName/nickName";
import HealthBar from "../../components/battleAnimation/HealthBar";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as actions from "./../../redux/actions";
import Scoreboard from "./../../components/Scoreboard";
import Winner from "./../../components/Winner/index";
import EnemyFigure from "./../../components/battleAnimation/EnemyFigure/index";
import HeroFigure from "./../../components/battleAnimation/HeroFigure/index";
import arrayOfEnemyBodys from "./../../constants/enemybodies/index";
import Sound from "react-sound";
import levelUpSound from "./../../audio/levelUp/levelUp.mp3";

class BattlePage extends Component {
  state = {
    enemyBody: arrayOfEnemyBodys.pop()
  };

  componentDidMount = () => {
    this.props.actions.setUsers();
  };

  levelChangeDelay = () => {
    this.props.actions.reNewEnemy();
    this.setState({ enemyBody: arrayOfEnemyBodys.pop() });
    this.props.actions.changeEnemyName();
  };

  showScoareboard = () => {
    const { userInfo, enemyInfo } = this.props;
    const isGameEnd =
      userInfo.userDamaged >= 300 || enemyInfo.enemyDamaged >= 300;
    let message = null;
    if (isGameEnd) {
      if (userInfo.userDamaged >= 300) {
        message = "GAME OVER";
      } else {
        message = "VICTORY";
      }
    }
    return {
      isGameEnd,
      message
    };
  };

  render() {
    const { enemyBody } = this.state;
    const battleRes = this.showScoareboard();
    const { enemyInfo } = this.props;
    return (
      <div className="battlePageWrapper">
        <EnemyFigure enemyBody={enemyBody} />
        <HeroFigure />
        <div>
          <NickName name={this.props.userInfo.userName} className="userName" />
          <HealthBar
            isAudioPlaying={this.props.isAudioPlaying}
            health={this.props.userInfo.userDamaged}
            className="user"
          />
        </div>
        <div>
          <NickName
            name={this.props.enemyInfo.enemyName}
            className="enemyName "
          />
          <HealthBar
            isAudioPlaying={this.props.isAudioPlaying}
            health={this.props.enemyInfo.enemyDamaged}
            className="enemy"
          />
        </div>
        <ModalWindowBattlePage
          actions={this.props.actions}
          isAudioPlaying={this.props.isAudioPlaying}
          userInfo={this.props.userInfo}
          enemyInfo={this.props.enemyInfo}
        />
        {enemyInfo.enemyDamaged >= 300 &&
          arrayOfEnemyBodys.length &&
          !this.props.isAudioPlaying && (
            <Sound
              url={levelUpSound}
              playStatus={Sound.status.PLAYING}
              onFinishedPlaying={this.levelChangeDelay}
            />
          )}
        {this.props.listOfAllUsers &&
          battleRes.isGameEnd &&
          !this.props.isAudioPlaying &&
          !arrayOfEnemyBodys.length && (
            <Fragment>
              <div className="scoreboard">
                <Scoreboard listOfAllUsers={this.props.listOfAllUsers} />
              </div>
              <Winner battleRes={battleRes.message} />
            </Fragment>
          )}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    userInfo: state.userInfo,
    enemyInfo: state.enemyInfo,
    isAudioPlaying: state.audioStatus.isAudioPlaying,
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
)(BattlePage);
