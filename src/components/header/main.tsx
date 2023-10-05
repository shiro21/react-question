import styles from "../../style/main.module.css";
import Explorer from "../../style/icon/explorer.svg";
import { cs } from "../../services/frontend";

import ChevronDown from "../../style/icon/down.svg";
import ChevronUp from "../../style/icon/up.svg";
import { useState } from "react";

interface FrontEndProps {
    id: number,
    title: string,
    arr: string,
    isOpen: boolean
}

const MainPage = () => {

    const [one, setOne] = useState<FrontEndProps[]>(cs);

    const one1 = (item: FrontEndProps) => {
        setOne(s => 
            s.map(content =>
                content.id === item.id ? { ...content, isOpen: !content.isOpen } : content
            )
        )
    }

    return (
        <div className={styles.main_wrap}>
            
            <h1>프론트엔드 ( Front-End )</h1>


            <section>
                <h2><img src={Explorer} /> CS</h2>

                <ul>
                    {
                        one.length > 0 && one.map((item, index) => (
                            <li key={index} onClick={() => one1(item)}>
                                <div className={styles.contents}>
                                    {
                                        item.isOpen ? <img src={ChevronUp} /> : <img src={ChevronDown} />
                                    }
                                    {item.title}
                                </div>
                                {
                                    item.isOpen && <div className={styles.one___} dangerouslySetInnerHTML={{__html: item.arr}} />
                                }
                                
                            </li>
                        ))
                    }
                </ul>
            </section>
        </div>
    );
}

export default MainPage;