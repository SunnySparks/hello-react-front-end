import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import React, { useEffect } from 'react';
import '../App.css';
import { useDispatch, useSelector } from 'react-redux';
import { getGreetings } from '../redux/greetings/greetings';

const Greeting = () => {
  let greetList = [];
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getGreetings());
  }, []);

  const greetingsList = useSelector((state) => state.greetingsReducer);
  greetList = greetingsList;
  const lista = greetList.greetings;
  const randomGreet = lista[Math.floor(Math.random() * lista.length)];
  if (lista[0] === undefined) {
    return (
      <div className="container p-4">
        <div className="row">
          <div className="col-sm-4" />
          <div className="col-sm-8">
            <h1>
              Loading greetings...
            </h1>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-5 mt-5">
      <div className="text-center">
        <h1>
          Greetings page
        </h1>
        <h1>
          {randomGreet}
        </h1>
        <button type="button" className="btn btn-outline-danger btn-lg" onClick={() => dispatch(getGreetings())}> Click me to say Hi! </button>
      </div>
    </div>
  );
};

export default Greeting;
