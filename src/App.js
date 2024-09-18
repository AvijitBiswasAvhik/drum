import { useState, useRef, useEffect } from "react";
import logo from "./logo.svg";
import bedard from "./bedardi.mp3";
import "./App.css";
import styled from "styled-components";
import "bootstrap/dist/css/bootstrap.min.css";
import { Howl } from "howler";
import audioFiles from "./audioFiles";

function App() {
  let [button, setButton] = useState({
    power: false,
    bank: false,
    volume: 0.05,
  });
  let [src, setSrc] = useState({ name: "", src: "", count: 1 });
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
    setSrc({ ...src, name: e.target.value * 100 });
  }
  // let src =
  //   "https://pagalfree.com/musics/128-Bheed%20Mein%20Tanhaee%20Mein%20-%20Tumsa%20Nahin%20Dekha%20A%20Love%20Story%20128%20Kbps.mp3";

  useEffect(() => {
    if (src.src !== "" && src.src != soundRef.current._src) {
      soundRef.current = new Howl({
        src: src.src,
        html5: true,
      });
      soundRef.current.volume(button.volume);
      return () => {
        soundRef.current.unload();
      };
    }
  }, [src.src]);
  const play = () => {
    if (soundRef.current) {
      //  console.log(src);
      soundRef.current.play();
    }
  };
  useEffect(() => {
    if (src.src != "") {
      play();
    }
  }, [src.count]);
  useEffect(() => {
    if (soundRef.current) {
      soundRef.current.volume(button.volume);
    }
  }, [button.volume]);

  return (
    <div className="App d-flex align-items-center justify-content-center">
      <div className="drumBox p-1 p-md-4">
        <div className="row flex-column flex-md-row align-items-center">
          <div className="col-12 col-sm-6 p-3 d-flex align-items-center justify-content-center">
            <div className="pad-bank">
              <div
                onClick={(e) => {
                  e.stopPropagation();

                  setSrc({
                    name: "Heater1",
                    src: audioFiles.Heater1,
                    count: src.count + 1,
                  });
                }}
                className="drum-pad"
                id="Heater-1"
              >
                Q
              </div>

              <div
                onClick={(e) => {
                  e.stopPropagation();
                  setSrc({
                    name: "Heater2",
                    src: audioFiles.Heater2,
                    count: src.count + 1,
                  });
                }}
                className="drum-pad"
                id="Heater-2"
              >
                W
              </div>

              <div
                onClick={(e) => {
                  e.stopPropagation();
                  setSrc({
                    name: "Heater3",
                    src: audioFiles.Heater3,
                    count: src.count + 1,
                  });
                }}
                className="drum-pad"
                id="Heater-3"
              >
                E
              </div>

              <div
                onClick={(e) => {
                  e.stopPropagation();
                  setSrc({
                    name: "Heater4",
                    src: audioFiles.Heater4,
                    count: src.count + 1,
                  });
                }}
                className="drum-pad"
                id="Heater-4"
              >
                A
              </div>

              <div
                onClick={(e) => {
                  e.stopPropagation();
                  setSrc({
                    name: "Heater6",
                    src: audioFiles.Heater6,
                    count: src.count + 1,
                  });
                }}
                className="drum-pad"
                id="Heater-5"
              >
                S
              </div>

              <div
                onClick={(e) => {
                  e.stopPropagation();
                  setSrc({
                    name: "Kick_n_Hat",
                    src: audioFiles.Kick_n_Hat,
                    count: src.count + 1,
                  });
                }}
                className="drum-pad"
                id="Heater-6"
              >
                D
              </div>

              <div
                onClick={(e) => {
                  e.stopPropagation();
                  setSrc({
                    name: "Dsc_Oh",
                    src: audioFiles.Dsc_Oh,
                    count: src.count + 1,
                  });
                }}
                className="drum-pad"
                id="Heater-7"
              >
                Z
              </div>
              <div
                onClick={(e) => {
                  e.stopPropagation();

                  setSrc({
                    name: "RP4_KICK_1",
                    src: audioFiles.RP4_KICK_1,
                    count: src.count + 1,
                  });
                }}
                className="drum-pad"
                id="Heater-8"
              >
                X
              </div>
              <div
                onClick={(e) => {
                  e.stopPropagation();

                  setSrc({
                    name: "Cev_H2",
                    src: audioFiles.Cev_H2,
                    count: src.count + 1,
                  });
                }}
                className="drum-pad"
                id="Heater-9"
              >
                C
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-6">
            <div className="controller p-3 d-flex align-items-center justify-content-center flex-column gap-3">
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
                {typeof src.name == "string"
                  ? src.name
                  : "Volume: " + Math.ceil(src.name)}
              </div>
              <input
                value={button.volume}
                onChange={(e) => volume(e)}
                type="range"
                max={1} // Keep max as 1 for the 0.0-1.0 range
                min={0}
                step={0.01} // Allows for finer control within the 0.0-1.0 range
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
    </div>
  );
}

export default App;
