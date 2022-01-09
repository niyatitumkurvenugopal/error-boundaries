import logo from './logo.svg';
import './App.css';
import Person from './components/Person.js';
import ErrorBoundary from './ErrorBoundary/ErrorBoundary.js';

function App() {
  return (
    <div className="App">
    <ErrorBoundary>

     <Person/>
      </ErrorBoundary>
    </div>
  );
}

export default App;


// error boundaries don't catch error for:

// event handler
// async componentDidCatch
// server side rendering
// error thrown in the error boundary