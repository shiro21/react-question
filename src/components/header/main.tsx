import styles from "../../style/main.module.css";
import { ReactComponent as ExplorerSVG } from "../../style/icon/explorer.svg";
import { ReactComponent as JavascriptSVG } from "../../style/icon/javascript.svg";
import { ReactComponent as VscodeSVG } from "../../style/icon/vscode.svg";
import { ReactComponent as ReactSVG } from "../../style/icon/react.svg";
import { cs, frontend, javascript, react } from "../../services/frontend";

import { ReactComponent as ChevronDown } from "../../style/icon/down.svg";
import { ReactComponent as ChevronUp } from "../../style/icon/up.svg";
import { useEffect, useState } from "react";

interface FrontEndProps {
    id: number,
    title: string,
    arr: string,
    isOpen: boolean,
    link: string,
    link2: string
}

interface MainProps {
    headerSearch: string
}

const MainPage: React.FC<MainProps> = ({ headerSearch }) => {

    const [one, setOne] = useState<FrontEndProps[]>(cs);
    const [two, setTwo] = useState<FrontEndProps[]>(javascript);
    const [three, setThree] = useState<FrontEndProps[]>(frontend);
    const [four, setFour] = useState<FrontEndProps[]>(react);

    useEffect(() => {
        const oneFilter = cs.filter(item => {
            return item.title.toUpperCase().includes(headerSearch.toUpperCase());
        })
        const twoFilter = javascript.filter(item => {
            return item.title.toUpperCase().includes(headerSearch.toUpperCase());
        })
        const threeFilter = frontend.filter(item => {
            return item.title.toUpperCase().includes(headerSearch.toUpperCase());
        })
        const fourFilter = react.filter(item => {
            return item.title.toUpperCase().includes(headerSearch.toUpperCase());
        })
        setOne(oneFilter);
        setTwo(twoFilter);
        setThree(threeFilter);
        setFour(fourFilter);

    }, [headerSearch])

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

    const one4 = (item: FrontEndProps) => {
        setFour(s => 
            s.map(content =>
                content.id === item.id ? { ...content, isOpen: !content.isOpen } : content
            )
        )
    }

    return (
        <div className={styles.main_wrap}>
            
            <h1>프론트엔드 ( Front-End )</h1>


            <section>
                <h2><ExplorerSVG /> CS</h2>

                <ul>
                    {
                        one.length > 0 && one.map((item, index) => (
                            <li key={index}>
                                <div className={styles.contents} onClick={() => one1(item)}>
                                    {
                                        item.isOpen ? <ChevronUp /> : <ChevronDown />
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
                <h2><JavascriptSVG /> Javascript</h2>

                <ul>
                    {
                        two.length > 0 && two.map((item, index) => (
                            <li key={index}>
                                <div className={styles.contents} onClick={() => one2(item)}>
                                    {
                                        item.isOpen ? <ChevronUp /> : <ChevronDown />
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
                <h2><VscodeSVG /> FrontEnd</h2>

                <ul>
                    {
                        three.length > 0 && three.map((item, index) => (
                            <li key={index}>
                                <div className={styles.contents} onClick={() => one3(item)}>
                                    {
                                        item.isOpen ? <ChevronUp /> : <ChevronDown />
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
                <h2><ReactSVG /> React</h2>

                <ul>
                    {
                        four.length > 0 && four.map((item, index) => (
                            <li key={index}>
                                <div className={styles.contents} onClick={() => one4(item)}>
                                    {
                                        item.isOpen ? <ChevronUp /> : <ChevronDown />
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