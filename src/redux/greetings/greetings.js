import axios from 'axios';

const GET_GREETINGS_REQUEST = 'GET_GREETINGS_REQUEST';
const GET_GREETINGS_SUCCESS = 'GET_GREETINGS_SUCCESS';
// const API_URL = 'https://acnhapi.com/v1a/art/';

const initialState = {
  greetings: [],
};

export const getGreetings = () => {
 return dispatch => {
   dispatch({ type: GET_GREETINGS_REQUEST });
   return fetch(`http://localhost:3001/v1/greetings.json`)
   .then(response => response.json())
   .then(json => dispatch(getGreetingsSuccess(json)))
   .catch(error => console.log(error));
 };
};

export function getGreetingsSuccess(json){
  return {
    type: GET_GREETINGS_SUCCESS,
    json
  };
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_GREETINGS_SUCCESS':
    const greets = [];
    action.json.greetings.forEach(element => {
      greets.push(element.greeting)
    });
      return { greetings: greets };
  }
  return state;
}

export default reducer;
