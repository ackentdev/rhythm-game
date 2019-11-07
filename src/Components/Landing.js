import React from 'react';
import warning from '../media/warning-svgrepo-com.svg';
import alien from '../media/alien-svgrepo-com.svg';
import earth from '../media/planet-earth-svgrepo-com.svg';
import astronaut from '../media/astronaut-svgrepo-com.svg';

export default function Landing(props) {
    return (
        <div className='landing'>
            <header>
          <img className='landing-img' alt='warning' src={warning}/>
          <h1>DEFEND EARTH <br></br> FROM ALIEN <br></br> INVADERS!</h1>
          <img className='landing-img' alt='alien' src={alien}/>
        </header>
        <body>
          
          <div id="speech-bubble">
            <img className='earth' alt='earth' src={earth} />
            <img className='astronaut' alt='astronaut' src={astronaut} />
            <p>
              Aliens are trying to steal our rhythm!Earth needs your help to defend her music.
              <br></br>
              <br></br>
              Activate our defense systems by matching the rhythmic patterns the alien ships are trying to steal.
              <br></br>
              <br></br>
              Help us! You’re Earth’s last hope!</p>
          </div>
        </body>
        <button onClick={() => props.changeEditStatus()}>EDIT</button>
        </div>
    )
}