import { useEffect, useState } from "react";
import { People } from "./components/People/People";

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
            return <div>Missions will be here</div>;
        }
        else {
            return '';
        }
    }

    return (
        <>
            <h1>People of Interest Database</h1>
            {returnComponent()}
        </>
    )
}