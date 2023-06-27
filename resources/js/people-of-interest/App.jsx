import { useEffect, useState } from "react";
import { People } from "./components/People/People";
import { Missions } from "./components/Missions/Missions";

export function App () {
    const [content, setContent] = useState('');

    useEffect(() => {
        setContent(window.location.pathname);
    }, [])

    const returnComponent = () => {
        if (content.includes('people-of-interest')) {
            return <People />;
        }
        else if (content.includes('missions')) {
            return <Missions />;
        }
        else {
            return '';
        }
    }

    return (
        <>
            {returnComponent()}
        </>
    )
}