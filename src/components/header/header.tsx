import React, { useState } from 'react';
import ModeToggle from '../../item/ModeToggle';
import { useTheme } from '../../ThemeProvider';
import styles from "../../style/main.module.css";

const Header = () => {
    

    const { toggleTheme } = useTheme();


    return (
        <header>
            <div className={styles.header_grid}>
                <div className={styles.grid_item}>
                    <span>면접관련</span>
                </div>

                <div className={styles.grid_item}>
                    <input type="text" />
                </div>

                <div className={`${styles.grid_item} ${styles.grid_last}`}>
                    <ModeToggle toggleTheme={toggleTheme} />
                </div>
            </div>
        </header>
    );
}

export default Header;