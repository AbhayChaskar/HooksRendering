import './App.css';
import React,{Suspense} from 'react';
import {BrowserRouter as Router,Route,Routes,Switch,Link} from 'react-router-dom';
import ErrorBoundary from './Components/Errorboundry';

const First = React.lazy(() => import('./Components/Products'));
const Second = React.lazy(() => import('./Components/Courses'));
const Third = React.lazy(() => import('./Components/Display'));

function App() {
  return (
    <>
    <ErrorBoundary>
      <Suspense fallback={<div style={{fontSize:"10mm",textAlign:"center"}}>Please wait ...</div>}>     
      <Router>
        <Routes>
          <Route path="/" element={<First/>}/>  
          <Route path="/courses" element={<Second/>}/>  
          <Route path="/courses/display" element={<Third/>}/>  
        </Routes>  
      </Router>  
      </Suspense>  
    </ErrorBoundary> 
    </>
  );
}

export default App;
