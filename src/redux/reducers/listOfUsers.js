const initialState = [];

export default function listOfAllUsers(state = initialState, action) {
  switch (action.type) {
    case "SET_USERS":
      if (!action.payload) return state;
      return action.payload;
    case "UPDATE_USER":
      return [...state, action.payload];
    default:
      return state;
  }
}
