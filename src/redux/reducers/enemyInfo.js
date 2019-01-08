import getMonsterName from "./../../constants/enemyName/index";

const initialState = {
  enemyName: getMonsterName(),
  enemyDamaged: 0,
  enemyHeal: 0,
  enemyTotalDamaged: 0,
  attackPower: 50
};

export default function enemyInfo(state = initialState, action) {
  const { enemyDamaged, enemyHeal, enemyTotalDamaged, attackPower } = state;
  switch (action.type) {
    case "SET_ENEMY_NAME":
      return { ...state, enemyName: action.payload };
    case "SET_ENERMY_HEALTH":
      return {
        ...state,
        enemyDamaged: enemyDamaged + attackPower,
        enemyTotalDamaged: enemyTotalDamaged + attackPower
      };
    case "SET_ENERMY_HEALTH_HEAL":
      return {
        ...state,
        enemyDamaged:
          enemyDamaged >= 0 && enemyDamaged <= attackPower
            ? 0
            : enemyDamaged - attackPower,
        enemyHeal: enemyHeal + attackPower
      };
    case "RENEW_ENERMY":
      return { ...state, enemyDamaged: 0 };
    case "CHANGE_ENEMY_NAME":
      return { ...state, enemyName: getMonsterName() };
    default:
      return state;
  }
}
