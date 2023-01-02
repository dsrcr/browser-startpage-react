import Box from '../Box/Box';
import Clock from '../Clock/Clock';
import Link from '../Link/Link';

import './App.css'

function App() {
    return (
        <div className="app">
            <div className="app__time">
                <Clock />
            </div>
            <div className="app__box">
                <Box>
                    <Link name='google' destination='https://google.com'/>
                </Box>
                <Box />
                <Box />
                <Box />
            </div>
        </div>
    );
}

export default App;
