import React, { ChangeEvent, useEffect, useState } from 'react';
import ModeToggle from '../../item/ModeToggle';
import { useTheme } from '../../ThemeProvider';
import styles from "../../style/main.module.css";

interface HeaderProps {
    parentFunc: (str: string) => void;
}

const Header: React.FC<HeaderProps> = ({ parentFunc }) => {
    
    const { toggleTheme } = useTheme();

    const [search, setSearch] = useState("");
    useEffect(() => {
        parentFunc(search);
    }, [search])
    
    return (
        <header>
            <div className={styles.header_grid}>
                <div className={styles.grid_item}>
                    <span>면접관련</span>
                </div>

                <div className={styles.grid_item}>
                    <input value={search} onChange={(e: ChangeEvent<HTMLInputElement>) => setSearch(e.target.value)} type="text" />
                </div>

                <div className={`${styles.grid_item} ${styles.grid_last}`}>
                    <ModeToggle toggleTheme={toggleTheme} />
                </div>
            </div>
        </header>
    );
}

export default Header;