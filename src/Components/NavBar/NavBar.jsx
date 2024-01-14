import React, { useState } from "react";
import styles from "./NavBar.module.css";
import Logo from "../../assets/Logo.png";
import Drop from "../../assets/Drop.png"
import { NavLink } from "react-router-dom";

export default function NavBar() {
    const [isDropdownOpen, setDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setDropdownOpen(!isDropdownOpen);
    };

    return (
        <div className={styles.navbar}>
            <div className={styles.refContainer}>
                <NavLink to="/home" className={styles.ref}>
                    <img className={styles.logo} src={Logo} alt="Logo" />
                </NavLink>
                {/* <div className={styles.refContainer}>
                    <a href="/alojamientos" className={styles.ref1}>Alojamientos</a>
                    <a href="/vuelos" className={styles.ref2}>Vuelos</a>
                    <a href="/paquetes" className={styles.ref3}>Paquetes</a>
                </div> */}
                <div className={styles.dropdownContainer}>
                    <img src={Drop} alt="" onClick={toggleDropdown} />
                    {isDropdownOpen && (
                        <div className={styles.dropdownContent}>
                            <a href="/alojamientos" className={styles.refm1}>Alojamientos</a>
                            <a href="/vuelos" className={styles.refm2}>Vuelos</a>
                            <a href="/paquetes" className={styles.refm3}>Paquetes</a>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

