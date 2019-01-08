const url = "https://5c3114afd18a50001463d3d3.mockapi.io/api/v1/users/";

const postUsers = user =>
  fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      id: user.id,
      userName: user.userName,
      score: user.score
    })
  });

const putUsers = user =>
  fetch(`${url}${user.id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      id: user.id,
      userName: user.userName,
      score: user.score
    })
  });

const getUsers = () => fetch(url);

export function setEnemyHealth() {
  return {
    type: "SET_ENERMY_HEALTH"
  };
}

export function reNewEnemy() {
  return {
    type: "RENEW_ENERMY"
  };
}

export function increaseEnemyAttack() {
  return {
    type: "INCREASE_USER_DAMAGED"
  };
}

export function setEnemyHealthHeal() {
  return {
    type: "SET_ENERMY_HEALTH_HEAL"
  };
}

export function setEnemyName(name) {
  return {
    type: "SET_ENEMY_NAME",
    payload: name
  };
}

export function changeEnemyName() {
  return {
    type: "CHANGE_ENEMY_NAME"
  };
}

export function setUserName(user) {
  return {
    type: "SET_USER_NAME",
    payload: user
  };
}

export function setUserHealth() {
  return {
    type: "SET_USER_HEALTH"
  };
}

export function setUserHealthHeal() {
  return {
    type: "SET_USER_HEALTH_HEAL"
  };
}

export function setPlayingStatus(status) {
  return {
    type: "SET_AUDIO_STATUS",
    payload: status
  };
}

export function setUsers() {
  return function thunk(dispatch) {
    return getUsers()
      .then(res => res.json())
      .then(data => dispatch(setUsersSuccess(data)))
      .catch(err => console.warn(err));
  };
}

export function setUsersSuccess(payload) {
  return {
    type: "SET_USERS",
    payload
  };
}

export function updateUser(user) {
  return function thunk(dispatch) {
    getUsers()
      .then(res => res.json())
      .then(data => {
        const remoteUser = data.find(remUser => remUser.id === String(user.id));
        if (remoteUser) {
          return putUsers(user)
            .then(res => dispatch(setUsers()))
            .catch(err => console.warn(err));
        } else {
          return postUsers(user)
            .then(res => dispatch(setUsers()))
            .catch(err => console.warn(err));
        }
      });
  };
}

export function updateUserSuccess(user) {
  return {
    type: "UPDATE_USER",
    payload: user
  };
}
