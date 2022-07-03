import React from 'react';
import ReactDOM from 'react-dom/client';

import Wheather from './Wheather';
// import Server from './Server';
// import Ui from './Ui';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
       <Wheather />
       {/* <Ui /> */}
       {/* <Server /> */}
    </React.StrictMode>
);





// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
