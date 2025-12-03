import React from "react";
import "./App.css";
import MacOSX from "./packages/MicahSynth0.8.0.pkg.zip";
import Win64 from "./packages/Micah Synth 0.8.1 Setup.exe.zip";
import RCMac from "./packages/MicahSynth-1.2.0.dmg";
import { Card, Icon, Image, Divider } from "semantic-ui-react";
import TabbyParallaxHeader from "./TabbyParallaxHeader";

function App() {
  return (
    <body style={{ textAlign: "center" }}>
      <TabbyParallaxHeader />

      <h3 style={{ color: "white" }}>
        {" "}
        🎶 📱 🎶 Micah Synth on iOS App Store 🎶 📱 🎶
      </h3>
      <p style={{ color: "white", marginTop: 4 }}>
        Tap the icon to open Micah Synth in the iOS App Store.
      </p>
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

      {/* --------------------------------------------------- */}
      <Divider style={{ color: "white", margin: "32px" }} />

      <h3 style={{ color: "white" }}>
        🎉 New: Micah Synth for Android 🎶 🤖 🎶 🎉
      </h3>
      <a
        href="https://play.google.com/store/apps/details?id=com.woodcraftsounds.micahsynth"
        style={{
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
      <h3 style={{ color: "white" }}>
        🎉 New: Micah Synth for Android 🎶 🤖 🎶 🎉
      </h3>
      {/* --------------------------------------------------- */}
      <Divider style={{ color: "white", margin: "32px" }} />
      <h3 style={{ color: "white" }}>
        Micah Synth for MacOS 🎶 💻 🎶 🧑🏼‍💻 🎶
      </h3>
      <h4 style={{ color: "white" }}>
        Release Candidate for MacOS (Universal App)
      </h4>
      <Card.Group style={{ justifyContent: "center" }}>
        <Card>
          <Image
            src={process.env.PUBLIC_URL + "/MicahSynthApple.png"}
            wrapped
            ui={false}
          />
          <Card.Content>
            <Card.Header>Micah Synth (RC 1.2.0)</Card.Header>
          </Card.Content>
          <Card.Content extra>
            <a href={RCMac} download>
              <Icon name="download" />
              Mac (Universal App) Download
            </a>
          </Card.Content>
        </Card>
      </Card.Group>

      {/* --------------------------------------------------- */}
      <Divider style={{ color: "white", margin: "32px" }} />
      <h3 style={{ color: "white" }}>
        Beta Version Micah Synth for your Computer
      </h3>
      <h4 style={{ color: "white", maxWidth: "420px", justifySelf: "center" }}>
        !Beta Versions! Use New RC build for Mac - this is still the only way
        for Windows... for now... Requires "Run as Admin" on Windows / "Open a
        Mac app from an unknown developer" on Mac. Comes with VST (audio plugin)
        version!
      </h4>
      <Card.Group style={{ justifyContent: "center" }}>
        <Card>
          <Image
            src={process.env.PUBLIC_URL + "/MicahSynthApple.png"}
            wrapped
            ui={false}
          />
          <Card.Content>
            <Card.Header>(Old) Micah Synth (Beta)</Card.Header>
          </Card.Content>
          <Card.Content extra>
            <a href={MacOSX} download>
              <Icon name="download" />
              Mac Beta Download
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
            <Card.Header>Micah Synth (Beta)</Card.Header>
          </Card.Content>
          <Card.Content extra>
            <a href={Win64} download>
              <Icon name="download" />
              Windows Beta Download
            </a>
          </Card.Content>
        </Card>
      </Card.Group>

      {/* --------------------------------------------------- */}
      <Divider style={{ color: "white", margin: "32px" }} />

      <h4>Links / Legal</h4>
      <a href="/privacy.html">Privacy Policy</a>
      <div></div>
      <a href="/terms.html">Terms</a>
      <div style={{ height: "64px" }}></div>
    </body>
  );
}

export default App;
