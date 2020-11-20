import React, { useState, useEffect } from "react";
import { CSSTransition } from "react-transition-group";
import logo from "../../images/logo_home.png";
import "./menu.css";

export default function Menu() {
    const [isNavVisible, setNavVisibility] = useState(false);
    const [isSmallScreen, setIsSmallScreen] = useState(false);

    useEffect(() => {
        const mediaQuery = window.matchMedia("(max-width: 1000px)");
        mediaQuery.addListener(handleMediaQueryChange);
        handleMediaQueryChange(mediaQuery);

        return () => {
            mediaQuery.removeListener(handleMediaQueryChange);
        };
    }, []);

    const handleMediaQueryChange = mediaQuery => {
        if (mediaQuery.matches) {
            setIsSmallScreen(true);
        } else {
            setIsSmallScreen(false);
        }
    };

    const toggleNav = () => {
        setNavVisibility(!isNavVisible);
    };

    return (
        <div className="div-header">
            <header className="header">
                <CSSTransition
                    in={!isSmallScreen || isNavVisible}
                    timeout={350}
                    classNames="navanimation"
                    unmountOnExit
                >
                    <nav className="nav">
                        <a href="#firstPage">Home</a>
                        <a href="#secondPage">Trabalhos</a>
                        <img src={logo} className="logo" alt="logo" />
                        <a href="#thirdPage">Artista</a>
                        <a href="#fourthPage">Orçamento</a>
                    </nav>
                </CSSTransition>
                <button onClick={toggleNav} className="burger">
                    <span className="hamburguer"></span>
                </button>
            </header>
        </div>
    );
}