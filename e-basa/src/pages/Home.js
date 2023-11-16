import React from 'react';

export default function Home() {
  return (
    <>
    
      <br />
      <br />
      <br />
      <br />

      <div className="section" data-aos="fade-up">
        <div className="box1" data-aos="zoom-in" data-aos-delay="100">
          <img
            src="/assets/imgs/letralogo.png"
            alt="letter-logo"
            style={{ height: '300px', width: '250px' }}
          />
          <a href="#letra" className="button letra-button">
            Mga Letra
          </a>
        </div>

        <div className="box1" data-aos="zoom-in" data-aos-delay="100">
          <img src="/assets/imgs/numerologo.png" alt='numlogo' style={{ height: '300px', width: '250px' }} />
          <a href="#numero" className="button numero-button">
            Mga Numero
          </a>
        </div>

        <div className="box1" data-aos="zoom-in" data-aos-delay="100">
          <img src="/assets/imgs/hayoplogo.png" alt='hayoplogo' style={{ height: '300px', width: '250px' }} />
          <a href="#hayop" className="button hayop-button">
            Mga Hayop
          </a>
        </div>
      </div>

      <div className="section">
        <a className="active" href="#kwento">
          <img src="/assets/imgs/kwento.png" alt="kwento" id="kwento-image" />
        </a>
      </div>

      <br />
      <br />

      <div className="container-palaka">
        <div className="palaka">
          <img src="/assets/imgs/palaka.png" alt="palaka" />
        </div>
        <div className="text-palaka">
          <p>
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
            nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum."
          </p>
          <a href="#palaka" className="button palaka-button">
            Pakingan
          </a>
        </div>
      </div>

      <br />
      <br />

      <div className="container-langgam">
        <div className="text-langgam">
          <p>
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
            nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum."
          </p>
          <a href="#langgam" className="button langgam-button">
            Pakingan
          </a>
        </div>
        <div className="langgam">
          <img src="/assets/imgs/langgam.png" alt="langgam" />
        </div>
      </div>

      <br />
      <br />

      <div className="container-daga">
        <div className="daga">
          <img src="/assets/imgs/daga.png" alt="daga" />
        </div>
        <div className="text-daga">
          <p>
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
            nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum."
          </p>
          <a href="#daga" className="button daga-button">
            Pakingan
          </a>
        </div>
      </div>
    </>
  );
}

