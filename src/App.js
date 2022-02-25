import "./App.css";
import React, {useState} from 'react';
import axios from 'axios';

function App() {
  const [dog, setDog] = useState('');

  const getDog = () => {
    axios.get('https://dog.ceo/api/breeds/image/random').then(
      (response) => {
        setDog(response.data);
        console.log(response.data.message);
        console.log('Window Location', response.data.message);
      }
      );
  };
  console.log(dog);

  
  return (

    <div className="App">
      <div className="container" >

        
        {dog ? dog.message : null}
        {dog ? <img className="image" src={dog.message} alt="dog" /> : null}

        {/* <form  action=""> */}
          <button type="submit" className="dogButton" onClick={getDog}>
            <img className="plus" src="https://cdn0.iconfinder.com/data/icons/very-basic-2-android-l-lollipop-icon-pack/24/plus-512.png" alt="" />
            <p>ADD DOG</p>
          </button>
        {/* </form> */}
        

      </div>
    </div>
  );
}

export default App
