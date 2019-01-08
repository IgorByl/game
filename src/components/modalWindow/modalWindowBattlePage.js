import React, { Component, Fragment } from "react";
import RenderEscapeMenu from "./escapeMenu";
import "./modalWindowBattlePage.css";
import Fireball from "./../../components/AttackKind/Fireball";
import Sword from "./../../components/AttackKind/Sword";
import Heal from "./../../components/AttackKind/Heal";
import TaskList from "../tasks/tasksList";

export default class ModalWindowBattlePage extends Component {
  constructor(props) {
    super(props);
    this.attackKind = null;
    this.state = {
      isVisibleSpellsList: false,
      isVisibleEscapeMenu: false,
      isAttack: false,
      isVisibleTask: false,
      attackSide: null
    };
  }

  componentDidMount() {
    window.addEventListener("keydown", this.handleMyEvent);
  }

  componentWillUnmount() {
    window.removeEventListener("keydown", this.handleMyEvent);
  }

  updateAttackSide = value => {
    this.setState({ attackSide: value });
  };

  toggleTask = e => {
    const { isVisibleTask } = this.state;
    this.setState({
      isVisibleTask: !isVisibleTask
    });
  };

  toggleModalSpells = () => {
    const { isVisibleSpellsList } = this.state;
    this.setState({
      isVisibleSpellsList: !isVisibleSpellsList
    });
  };

  toggleModalMenu = () => {
    const { isVisibleEscapeMenu } = this.state;
    this.setState({
      isVisibleEscapeMenu: !isVisibleEscapeMenu
    });
  };

  handleMyEvent = e => {
    const { isVisibleSpellsList, isVisibleEscapeMenu } = this.state;
    if (e.code === "Space") {
      this.setState({
        isVisibleSpellsList: !isVisibleSpellsList,
        isAttack: false
      });
    }
    if (e.key === "Escape") {
      this.setState({
        isVisibleEscapeMenu: !isVisibleEscapeMenu,
        isAttack: false
      });
    }
  };

  attack = value => {
    this.props.actions.setPlayingStatus(true);
    this.toggleModalSpells();
    const { isAttack } = this.state;
    this.setState({
      isAttack: !isAttack
    });
    this.decreaseEnemyHealth(value).then(() => {
      this.toggleTask();
      this.props.actions.updateUser(this.updateUser());
    });
  };

  decreaseEnemyHealth = value =>
    new Promise(res => {
      switch (this.attackKind) {
        case "heal":
          if (value === "enemy") {
            this.props.actions.setUserHealthHeal();
          }
          if (value === "user") {
            this.props.actions.setEnemyHealthHeal();
          }
          break;
        default:
          if (value === "enemy") {
            this.props.actions.setEnemyHealth();
          }
          if (value === "user") {
            this.props.actions.setUserHealth();
          }
          break;
      }
      res();
    });

  updateUser = () => {
    const { userInfo, enemyInfo } = this.props;
    return {
      id: userInfo.id,
      userName: userInfo.userName,
      score:
        enemyInfo.enemyTotalDamaged -
        userInfo.userDamaged +
        userInfo.userHeal -
        enemyInfo.enemyHeal
    };
  };

  switchTheAttack = () => {
    switch (this.attackKind) {
      case "fireball":
        return (
          <Fireball
            setPlayingStatus={this.props.actions.setPlayingStatus}
            attackSide={this.state.attackSide}
          />
        );
      case "sword":
        return (
          <Sword
            setPlayingStatus={this.props.actions.setPlayingStatus}
            attackSide={this.state.attackSide}
          />
        );
      case "heal":
        return (
          <Heal
            setPlayingStatus={this.props.actions.setPlayingStatus}
            attackSide={this.state.attackSide}
          />
        );
      default:
        break;
    }
  };

  render = () => {
    const {
      isVisibleSpellsList,
      isVisibleEscapeMenu,
      isVisibleTask
    } = this.state;
    return (
      <Fragment>
        {isVisibleSpellsList && (
          <div className="modalBattle">
            <div
              className="spellChooseDiv fireball"
              onClick={e => {
                this.toggleTask();
                this.attackKind = e.target.textContent;
              }}
            >
              fireball
            </div>
            <div
              className="spellChooseDiv sword"
              onClick={e => {
                this.toggleTask();
                this.attackKind = e.target.textContent;
              }}
            >
              sword
            </div>
            <div
              className="spellChooseDiv heal"
              onClick={e => {
                this.toggleTask();
                this.attackKind = e.target.textContent;
              }}
            >
              heal
            </div>
            <button className="chooseButton" onClick={this.toggleModalSpells}>
              Back
            </button>
          </div>
        )}
        {isVisibleEscapeMenu && (
          <div className="modalBattle">
            <RenderEscapeMenu />
            <button className="chooseButton" onClick={this.toggleModalMenu}>
              Back
            </button>
          </div>
        )}
        {this.props.isAudioPlaying && this.switchTheAttack()}
        {isVisibleTask && (
          <div className="modalTask">
            <h2 className="headline">Select task</h2>
            <TaskList
              attack={this.attack}
              updateAttackSide={this.updateAttackSide}
            />
            <button className="buttonSelectTask" onClick={this.toggleTask}>
              Back
            </button>
          </div>
        )}
      </Fragment>
    );
  };
}
