const initialState = {
  userName: "unknown user",
  userDamaged: 0,
  userHeal: 0,
  attackPower: 100,
  id: null
};

export default function userInfo(state = initialState, action) {
  const { userDamaged, userHeal, attackPower } = state;
  switch (action.type) {
    case "SET_USER_NAME":
      return {
        ...state,
        userName: action.payload.userName,
        id: action.payload.id
      };
    case "SET_USER_HEALTH":
      return { ...state, userDamaged: userDamaged + attackPower };
    case "SET_USER_HEALTH_HEAL":
      return {
        ...state,
        userDamaged:
          userDamaged >= 0 && userDamaged <= attackPower
            ? 0
            : userDamaged - attackPower,
        userHeal: userHeal + attackPower
      };
    case "INCREASE_USER_DAMAGED":
      return { ...state, attackPower: attackPower + 50 };
    default:
      return state;
  }
}
