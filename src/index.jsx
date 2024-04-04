// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import { BrowserRouter as Router } from 'react-router-dom';
// import { Provider } from 'react-redux';

// import './index.css';
// import App from './App';
// import { store } from './redux/store';

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <Provider store={store}>
//       <Router>
//         <App />
//       </Router>
//     </Provider>
//   </React.StrictMode>,
// );

// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import { Provider } from 'react-redux';

// import './index.css';
// import App from './App';
// import Signup from './pages/Signup'; // Import the SignupPage component
// import { store } from './redux/store';

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <Provider store={store}>
//       <Router>
//         <Routes>
//           <Route exact path="/" component={Signup} /> {/* Render SignupPage as the default homepage */}
//           <Route path="/app" component={App} /> {/* Render App component for other routes */}
//         </Routes>
//       </Router>
//     </Provider>
//   </React.StrictMode>,
// );

// // index.jsx

// import React from 'react';
// import ReactDOM from 'react-dom';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Login from './components/Login'; // Import the Login component
// import App from './App';


// ReactDOM.render(
//   <Router>
//     <Routes>
//       <Route path="/login" element={<Login />} /> {/* Route for the login page */}
//       <Route path="/" element={<App />} /> {/* Route for the main app */}
//     </Routes>
//   </Router>,
//   document.getElementById('root')
// );

// index.jsx

// import React from 'react';
// import ReactDOM from 'react-dom';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import { Provider } from 'react-redux'; // Import Provider from react-redux
// import { store } from './redux/store'; // Import your Redux store
// import Signup from './pages/Signup'; // Import the Login component
// import App from './App';
// import  Login  from './pages/Login';
// import Discover  from './pages/Discover';



// ReactDOM.render(
//   <Provider store={store}> {/* Wrap your App and Login components with Provider and pass the Redux store */}
//     <Router>
//       <Routes>
//         <Route path="/" element={<Signup />} /> Route for the Signup page
//         <Route path="/login" element={<Login />} /> Route for the Signup page
//         <Route path="/discover" element={<Discover />} /> Route for the Signup page
//         <Route path="/signup" element={<Signup />} /> Route for the Signup page
//         <Route path="/home" element={<Discover/>} /> Route for the Signup page
//         <Route path="/app/*" element={<App/>} /> Route for the Signup page
//         {/* <Route path="/" element={<App />} /> Route for the main app */}
//       </Routes>
//     </Router>
//   </Provider>,
//   document.getElementById('root')
// );

// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import { Provider } from 'react-redux';

// import './index.css';
// import App from './App';
// import { store } from './redux/store';
// import  Signup  from './pages/Signup';

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <Provider store={store}>
//       <Router>
//         <Routes>
//         <Route path="/" element={<Signup />} /> 
        
//         </Routes>
        
//         </Router>
        
      
//     </Provider>
//   </React.StrictMode>,
// );

// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom'; // Import Navigate
// import { Provider } from 'react-redux';

// import './index.css';
// import App from './App';
// import { store } from './redux/store';
// import Signup from './pages/Signup';
// import Login from './pages/Login';

// const Root = () => (
//   <React.StrictMode>
//     <Provider store={store}>
//       <Router>
//         <Routes>
//           <Route path="/" element={<Signup />} />
//           <Route path="/login" element={<Login />} />
//           <Route path="/app" element={<App />} />
//           {/* Redirect to the app if someone tries to access any other route */}
//           <Route path="*" element={<Navigate to="/app" />} />
//         </Routes>
//       </Router>
//     </Provider>
//   </React.StrictMode>
// );

// ReactDOM.createRoot(document.getElementById('root')).render(<Root />);

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom'; // Import Navigate
import { Provider } from 'react-redux';

import './index.css';
import App from './App';
import { store } from './redux/store';
import Signup from './pages/Signup';
import Login from './pages/Login';
import  TopArtists  from './pages/TopArtists';

const Root = () => (
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/app/*" element={<App />} />
          
          {/* Redirect to the app if someone tries to access any other route */}
          <Route path="*" element={<Navigate to="/app/*" />} />
        </Routes>
      </Router>
    </Provider>
  </React.StrictMode>
);

ReactDOM.createRoot(document.getElementById('root')).render(<Root />);
