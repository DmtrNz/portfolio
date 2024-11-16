import './App.css';
import React from 'react';
import { Header } from './layoat/header/Header';
import { Main } from "./layoat/sections/main/Main";
import { Skills } from './layoat/sections/skills/Skills';
import { Works } from './layoat/sections/works/Works';
import { Testimony } from './layoat/sections/testimony/Testimony';
import { Contact } from './layoat/sections/contact/Contact';
import { Footer } from './layoat/footer/Footer';


function App() {
    return (
        <div>
            <Header/>
            <Main/>
            <Skills/>
            <Works/>
            <Testimony/>
            <Contact/>
            <Footer/>
        </div>
    );
}

export default App;

