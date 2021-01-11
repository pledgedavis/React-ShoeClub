import React from 'react'
import WelcomeProducts from "../components/WelcomeProducts";
import WelcomeAbout from "../components/WelcomeAbout";
import WelcomeHeader from "../components/WelcomeHeader";





export default function Welcome() {
    return (
        <div>
            <WelcomeHeader/>
            <WelcomeAbout/>
            <WelcomeProducts/>
        </div>
    )
}
