import React from "react";
import '../App.css';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getGreetings } from '../redux/greetings/greetings'
// import { getArts } from '../redux/art/art';

const Greeting = () => {
  let greetList = [];
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getGreetings());
  }, []);

  const greetingsList = useSelector((state) => state.greetingsReducer);
  greetList = greetingsList;
  console.log('greetingList', greetingsList);
  const lista = greetList.greetings;
  console.log('Lista', lista);
  let randomGreet = lista[Math.floor(Math.random()*lista.length)];
  console.log('random', randomGreet);
  if (lista[0] === undefined){
      return (
      <div className="container p-4">
        <div className="row">
          <div className="col-sm-4" />
          <div className="col-sm-8">
            <h1 className="text-white">
              Loading
            </h1>
          </div>
        </div>
      </div>
    );
  }

    return (
    <div className="card pt-5 mt-5">
      <div className="card-body text-center">
        <h1>
          Welcome.
        </h1>
        <h1 className="text-white">
          {randomGreet}
        </h1>
        <button type="button" className="btn btn-primary" onClick={() => dispatch(getGreetings())}> Click me to say Hi! </button>
      </div>
    </div>
    );
};

export default Greeting;
