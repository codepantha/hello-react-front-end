const GET_ALL_GREETINGS_REQUEST = 'GET_ALL_GREETINGS_REQUEST';
const GET_ALL_GREETINGS_SUCCESS = 'GET_ALL_GREETINGS_SUCCESS';
const GET_ALL_GREETINGS_FAILED = 'GET_ALL_GREETINGS_FAILED';
const GET_RANDOM_GREETING = 'GET_RANDOM_GREETING';
const GET_RANDOM_GREETING_SUCCESS = 'GET_RANDOM_GREETING_SUCCESS';

export const getAllGreetings = () => (dispatch) => {
  dispatch({ type: GET_ALL_GREETINGS_REQUEST });
  fetch('http://localhost:8000/v1/greetings/')
    .then((res) => res.json())
    .then((data) => {
      dispatch({ type: GET_ALL_GREETINGS_SUCCESS, payload: data });
    })
    .catch((err) => dispatch({ type: GET_ALL_GREETINGS_FAILED, payload: err }));
};

export const getRandomGreeting = () => (dispatch) => {
  dispatch({ type: GET_RANDOM_GREETING });
  fetch('http://localhost:8000/v1/greetings/random')
    .then((res) => res.json())
    .then((data) => dispatch({ type: GET_RANDOM_GREETING_SUCCESS, payload: data }))
    .catch((err) => dispatch({ type: GET_ALL_GREETINGS_FAILED, payload: err }));
};

const initialState = {
  loading: false,
  greetings: [],
  error: null,
};
const greetingsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_GREETINGS_REQUEST:
      return { ...state, loading: true };
    case GET_ALL_GREETINGS_SUCCESS:
      return { ...state, loading: false, greetings: action.payload };
    case GET_RANDOM_GREETING_SUCCESS:
      return { ...state, loading: false, greetings: [action.payload] };
    case GET_ALL_GREETINGS_FAILED:
      return { ...state, error: action.payload };
    default:
      return state;
  }
};

export default greetingsReducer;
