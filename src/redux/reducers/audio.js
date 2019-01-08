const initialState = {
  isAudioPlaying: null
};

export default function audioStatus(state = initialState, action) {
  switch (action.type) {
    case "SET_AUDIO_STATUS":
      return { ...state, isAudioPlaying: action.payload };
    default:
      return state;
  }
}
