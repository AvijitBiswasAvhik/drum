import { useState, useRef, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import styled from "styled-components";
import "bootstrap/dist/css/bootstrap.min.css";
import { Howl } from "howler";

function App() {
  let [button, setButton] = useState({
    power: false,
    bank: false,
    volume: 30,
  });
  const soundRef = useRef(null);
  function power(e) {
    e.stopPropagation();
    setButton({ ...button, power: !button.power });
  }
  function bank(e) {
    e.stopPropagation();
    setButton({ ...button, bank: !button.bank });
  }

  function volume(e) {
    e.stopPropagation();
    setButton({ ...button, volume: e.target.value });
    console.log(e.target.value);
  }
  let src =
    "https://pagalfree.com/musics/128-Bheed%20Mein%20Tanhaee%20Mein%20-%20Tumsa%20Nahin%20Dekha%20A%20Love%20Story%20128%20Kbps.mp3";
  useEffect(() => {
    soundRef.current = new Howl({
      src: [
        "https://pagalfree.com/musics/128-Bheed%20Mein%20Tanhaee%20Mein%20-%20Tumsa%20Nahin%20Dekha%20A%20Love%20Story%20128%20Kbps.mp3",
      ],
      html5: true,
    });
    console.log(soundRef.current);
    return () => {
      soundRef.current.unload();
    };
  }, [src]);
  const play = (e) => {
    e.stopPropagation();
    if (soundRef.current) {
      soundRef.current.play();
      soundRef.current.volume(button.volume);
    }
  };
  return (
    <div className="App d-flex align-items-center justify-content-center">
      <div className="drumBox">
        <div className="row p-3">
          <div className="pad-bank col-6 p-0">
            <div onClick={(e)=>play(e)} className="drum-pad" id="Heater-1">
              Q
            </div>
            <div className="drum-pad" id="Heater-2">
              W
            </div>
            <div className="drum-pad" id="Heater-3">
              E
            </div>
            <div className="drum-pad" id="Heater-4">
              A
            </div>
            <div className="drum-pad" id="Heater-5">
              S
            </div>
            <div className="drum-pad" id="Heater-6">
              D
            </div>
            <div className="drum-pad" id="Heater-7">
              Z
            </div>
            <div className="drum-pad" id="Heater-8">
              X
            </div>
            <div className="drum-pad" id="Heater-9">
              C
            </div>
          </div>
          <div className="col-6 show-box">
            <div className="button-container">
              <p>POWER</p>
              <div className="button">
                <div
                  style={{ right: button.power && "3px" }}
                  onClick={(e) => power(e)}
                  className="mini-button"
                ></div>
              </div>
            </div>
            <div className="show-action d-flex align-items-center justify-content-center fw-bolder">
              Volume: {button.volume}
            </div>
            <input
            value={button.volume}
              onChange={(e) => volume(e)}
              type="range"
              className="volume"
            />
            <div className="button-container">
              <p>BANK</p>
              <div className="button">
                <div
                  style={{ right: button.bank && "3px" }}
                  className="mini-button"
                  onClick={(e) => bank(e)}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
