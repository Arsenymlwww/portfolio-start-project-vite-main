import './App.css'
import Particle from './components/particle/Particle';
import { Footer } from './layout/footer/Footer';
// import styled from "styled-components";
import { Header } from './layout/header/Header';
import { Experience } from './layout/sections/experience/Experience';
import { Hero } from './layout/sections/Hero/Hero';
import { Projects } from './layout/sections/Porjects/Projects';
import { Technologies } from './layout/sections/technologies/Technologies';


function App() {
    return (
        <div className="App">
            <Particle/>
            
            <Header/>
            <Hero/>
            <Projects/>
            <Technologies/>
            <Experience/>
            <Footer/>
        </div>
    )
}

export default App

