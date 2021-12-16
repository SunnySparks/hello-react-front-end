import '../App.css';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// import { getArts } from '../redux/art/art';

const Greeting = () => {
  const greetList = [];
    const { greetings } = this.props;
    greetings.map((greet) => {
      greetList.push(greet.greeting);
    })
    const randomGreet = greetList[Math.floor(Math.random()*greetList.length)];
    return (
      <React.Fragment>
        Greeting: {this.props.greeting}
        <button className="getGreetingsBtn" onClick={() => this.props.getGreetings()}>Click here to greet</button>
        <br />
        <div>{ randomGreet }</div>
      </React.Fragment>
    );
};

/*
const Art = () => {
  const artsArr = [];

  const dispatch = useDispatch();

  useEffect(() => {
    if (artsArr.length === 0) {
      dispatch(getArts());
    }
  }, []);

  const artsList = useSelector((state) => state.artsReducer);
  const arts = artsList;
  if (arts[0] === undefined) {
    return (
      <div className="container p-4">
        <div className="row">
          <div className="col-sm-4" />
          <div className="col-sm-8">
            <h1>
              Loading
            </h1>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div>
      <div>
        <div>
          <div className="row">
            <div className="headbanner pt-1">
            </div>
            <div className="col p-5 firstCont bluborder leafcont" />
            <div className="col p-5 firstCont bluborder text-white">
              <h1>Art</h1>
              {artsList.length}
              Elements
            </div>
          </div>
          <div className="row">
            { arts.length !== 0
              ? arts.map((art) => (
                <ArtList
                  key={art.id}
                  name={art.name['name-USen']}
                  id={art.id}
                  image={art.image_uri}
                  buyPrice={art['buy-price']}
                  sellPrice={art['sell-price']}
                />
              ))
              : (
                <ArtList
                  key="key"
                  name="name"
                  id="id"
                  phrase="bday"
                  image="icon"
                  value="value"
                />
              )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Art;
*/

export default Greeting;
