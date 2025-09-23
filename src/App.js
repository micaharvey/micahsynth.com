import React from "react";
import "./App.css";
import MacOSX from "./packages/MicahSynth0.8.0.pkg.zip";
import Win64 from "./packages/Micah Synth 0.8.1 Setup.exe.zip";
import { Card, Icon, Image, Header, Divider } from "semantic-ui-react";

function App() {
  return (
    <body style={{ textAlign: "center" }}>
      <div
        style={{
          position: "relative",
          width: "100%", // fill container width
          paddingTop: "25%", // aspect ratio = height ÷ width (25% = 4:1)
          backgroundImage: `url(${process.env.PUBLIC_URL +
            "/TabbyTwitchBanner.jpg"})`,
          backgroundSize: "cover", // scale image to cover
          backgroundPosition: "center", // center the image
          backgroundRepeat: "no-repeat",
        }}
      >
        {/*  overlay text */}
        <h2
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            color: "white",
            textShadow: `
                          0 0 10px rgba(0,0,0,1),
                          0 0 20px rgba(0,0,0,0.9),
                          0 0 40px rgba(0,0,0,0.8),
                          0 0 80px rgba(0,0,0,0.7)
                        `,
            margin: 0,
          }}
        >
          Micah Synth - Enjoy on iOS for Free Today!
        </h2>
      </div>

      {/* Rainbow backdrop with centered app icon */}
      <div
        style={{
          display: "grid",
          placeItems: "center",
          padding: "16px 0",
          marginBottom: "-10%",
        }}
      >
        <div
          style={{
            position: "relative",
            width: "min(90vw, 520px)", // cap the width so it doesn’t fill the page
            margin: "0 auto",
          }}
        >
          {/* Backdrop image: scales naturally, no cropping */}
          <img
            src={process.env.PUBLIC_URL + "/RainbowSplatterMicahSynth.png"}
            alt=""
            style={{ width: "100%", height: "auto", display: "block" }}
          />

          {/* Clickable app logo centered on top */}
          <a
            href="https://apps.apple.com/us/app/micah-synth/id1579750842"
            style={{
              position: "absolute",
              inset: 0,
              display: "grid",
              placeItems: "center",
              textDecoration: "none",
            }}
          >
            <img
              src={process.env.PUBLIC_URL + "/MicahSynthIconIOS360.png"}
              alt="Get Micah Synth on iOS"
              style={{
                width: "160px",
                height: "160px",
                filter: "drop-shadow(0 8px 24px rgba(0,0,0,0.35))",
              }}
            />
          </a>
        </div>
      </div>

      <h3 style={{ color: "white" }}> ^ Click Icon to open iOS App Store ^ </h3>
      <Divider style={{ color: "white", margin: "32px" }} />
      <h4 style={{ color: "white" }}>
        Desktop Versions (Beta - requires Run as Admin on Windows/ Open a Mac
        app from an unknown developer on Mac)
      </h4>
      {/* <img
        src={process.env.PUBLIC_URL + "/RainbowSplatterMicahSynth.png"}
        alt="Rainbow"
        style={{ marginBottom: "-770px" }}
      /> */}
      {/*<div style={{ "background-image": "url('TabbyTwitchBanner.jpg')" }} />*/}
      <Card.Group style={{ justifyContent: "center" }}>
        <Card>
          <Image
            src={process.env.PUBLIC_URL + "/MicahSynthApple.png"}
            wrapped
            ui={false}
          />
          <Card.Content>
            <Card.Header>Micah Synth (Mac)</Card.Header>
          </Card.Content>
          <Card.Content extra>
            <a href={MacOSX} download>
              <Icon name="download" />
              Mac OSX Download
            </a>
          </Card.Content>
        </Card>
        <Card>
          <Image
            src={process.env.PUBLIC_URL + "/MicahSynthWindows.png"}
            wrapped
            ui={false}
          />
          <Card.Content>
            <Card.Header>Micah Synth (Windows)</Card.Header>
          </Card.Content>
          <Card.Content extra>
            <a href={Win64} download>
              <Icon name="download" />
              Windows Download
            </a>
          </Card.Content>
        </Card>
      </Card.Group>
    </body>
  );
}

export default App;
