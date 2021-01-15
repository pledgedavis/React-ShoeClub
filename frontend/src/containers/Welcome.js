import React from "react";
import WelcomeAbout from "../components/WelcomeAbout";
import WelcomeHeader from "../components/WelcomeHeader";

export default function Welcome() {
  return (
    <div>
      <WelcomeHeader />

      <WelcomeAbout />
    </div>
  );
}
