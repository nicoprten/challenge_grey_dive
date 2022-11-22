import {Routes, Route} from 'react-router-dom';
import Tests from './db.json';

// COMPONENTS
import NavBar from './components/NavBar.js';
import TestContainer from './components/TestContainer.js';
import Test from './components/Test.js';

import './index.scss';

export default function App(){

    // console.log(Tests)

    return(
        <>
            <NavBar />
            <Routes>
                <Route path={'/'} element={<TestContainer tests={Tests}/>}></Route>
                <Route path={'/test/:id'} element={<Test />}></Route>
            </Routes>
        </>
    )
}