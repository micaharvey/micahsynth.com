import React from "react";
import "./App.css";
import MacOSX from "./packages/MicahSynth0.8.0.pkg.zip";
import Win64 from "./packages/Micah Synth 0.8.1 Setup.exe.zip";
import { Card, Icon, Image, Header } from "semantic-ui-react";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header as="h1" style={{ color: "white" }}>
          Welcome to the Micah Synth Beta!
        </Header>
        <img
          src={process.env.PUBLIC_URL + "./RainbowSplatterMicahSynth.png"}
          alt="Rainbow"
        />
        {/*<div style={{ "background-image": "url('TabbyTwitchBanner.jpg')" }} />*/}
        <Card.Group style={{ marginTop: "-770px" }}>
          <Card>
            <Image
              src={process.env.PUBLIC_URL + "./MicahSynthApple.png"}
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
              src={process.env.PUBLIC_URL + "./MicahSynthWindows.png"}
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
      </header>
    </div>
  );
}

export default App;
