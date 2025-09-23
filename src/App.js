import React from "react";
import "./App.css";
import MacOSX from "./packages/MicahSynth0.8.0.pkg.zip";
import Win64 from "./packages/Micah Synth 0.8.1 Setup.exe.zip";
import { Card, Icon, Image, Header, Divider } from "semantic-ui-react";
import TabbyParallaxHeader from "./TabbyParallaxHeader";

function App() {
  return (
    <body style={{ textAlign: "center" }}>
      <TabbyParallaxHeader />

      <div style={{ display: "grid", placeItems: "center", padding: "16px 0" }}>
        <div
          style={{
            position: "relative",
            width: "min(90vw, 520px)",
            margin: "0 auto",
            aspectRatio: "3 / 2", // pick a *shorter* ratio to trim the bottom
            overflow: "hidden",
          }}
        >
          <img
            src={process.env.PUBLIC_URL + "/RainbowSplatterMicahSynth.png"}
            alt=""
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover", // fill the box
              objectPosition: "top", // keep the top, crop the bottom
              display: "block",
            }}
          />

          <a
            href="https://apps.apple.com/us/app/micah-synth/id1579750842"
            style={{
              position: "absolute",
              inset: 0,
              display: "grid",
              placeItems: "center",
            }}
          >
            <img
              src={process.env.PUBLIC_URL + "/MicahSynthIconIOS360.png"}
              alt="Get Micah Synth on iOS"
              style={{
                width: 160,
                height: 160,
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
