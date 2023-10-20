import { useState } from "react";
import Header from "../components/header/header";
import MainPage from "../components/header/main";


const Main = () => {

    const [headerSearch, setHeaderSearch] = useState("");
    const parentFunc = (str: string) => {
        setHeaderSearch(str);
    }

    return (
        <>
            <Header parentFunc={parentFunc} />
            
            <MainPage headerSearch={headerSearch} />
        </>
    );
}

export default Main;