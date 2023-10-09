import styles from "../../style/main.module.css";
import Explorer from "../../style/icon/explorer.svg";
import { cs, frontend, javascript } from "../../services/frontend";

import ChevronDown from "../../style/icon/down.svg";
import ChevronUp from "../../style/icon/up.svg";
import { useState } from "react";

interface FrontEndProps {
    id: number,
    title: string,
    arr: string,
    isOpen: boolean,
    link: string,
    link2: string
}

const MainPage = () => {

    const [one, setOne] = useState<FrontEndProps[]>(cs);
    const [two, setTwo] = useState<FrontEndProps[]>(javascript);
    const [three, setThree] = useState<FrontEndProps[]>(frontend);

    const one1 = (item: FrontEndProps) => {
        setOne(s => 
            s.map(content =>
                content.id === item.id ? { ...content, isOpen: !content.isOpen } : content
            )
        )
    }

    const one2 = (item: FrontEndProps) => {
        setTwo(s => 
            s.map(content =>
                content.id === item.id ? { ...content, isOpen: !content.isOpen } : content
            )
        )
    }

    const one3 = (item: FrontEndProps) => {
        setThree(s => 
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

            <section>
                <h2><img src={Explorer} /> Javascript</h2>

                <ul>
                    {
                        two.length > 0 && two.map((item, index) => (
                            <li key={index} onClick={() => one2(item)}>
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

            <section>
                <h2><img src={Explorer} /> FrontEnd</h2>

                <ul>
                    {
                        three.length > 0 && three.map((item, index) => (
                            <li key={index} onClick={() => one3(item)}>
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