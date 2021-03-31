import { useSelector } from 'react-redux';
import './App.css';
import BlogPage from './Components/BlogPage';
import HomePage from './Components/Homepage';
import './Components/Homepage/style.css'
import Navbar from './Components/Navbar';
import { selectSignedIn } from './features/userSlice';
const App=()=> {
  const isSignedIn = useSelector(selectSignedIn)
  return (
    <div className="App">
      <Navbar />
      <HomePage />
      {isSignedIn ? <BlogPage/>:""}
    </div>
  );
}

export default App;
