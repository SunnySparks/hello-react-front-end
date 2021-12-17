const GET_GREETINGS_REQUEST = 'GET_GREETINGS_REQUEST';
const GET_GREETINGS_SUCCESS = 'GET_GREETINGS_SUCCESS';

const initialState = {
  greetings: [],
};

export function getGreetingsSuccess(json) {
  return {
    type: GET_GREETINGS_SUCCESS,
    json,
  };
}

export const getGreetings = () => (dispatch) => {
  dispatch({ type: GET_GREETINGS_REQUEST });
  return fetch('http://localhost:3001/v1/greetings.json')
    .then((response) => response.json())
    .then((json) => dispatch(getGreetingsSuccess(json)))
    .catch((error) => console.log(error));
};

const reducer = (state = initialState, action) => {
  const greets = [];
  switch (action.type) {
    case 'GET_GREETINGS_SUCCESS':
      action.json.greetings.forEach((element) => {
        greets.push(element.greeting);
      });
      return { greetings: greets };
    default:
      return state;
  }
};

export default reducer;
