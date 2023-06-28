import { People } from "./components/People/People";
import { Missions } from "./components/Missions/Missions";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navigation from "./components/Navigation";

export function App () {
    // const [content, setContent] = useState('');

    // useEffect(() => {
    //     setContent(window.location.pathname);
    // }, [])

    // const returnComponent = () => {
    //     if (content.includes('people-of-interest')) {
    //         return <People />;
    //     }
    //     else if (content.includes('missions')) {
    //         return <Missions />;
    //     }
    //     else if (content.includes('whatever')) {
    //         return 'WHATEVER';
    //     }
    //     else {
    //         return '';
    //     }
    // }

    return (
        <BrowserRouter>

            <Navigation />

            <Routes>
                <Route path="people-of-interest" element={ <People /> } />
                <Route path="missions" element={ <Missions /> } />
            </Routes>
        </BrowserRouter>
    )
}