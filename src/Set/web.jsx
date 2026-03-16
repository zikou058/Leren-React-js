import { React } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

// 1. الصفحة الرئيسية (Home Page)
const Home = () => (
  <div style={{ padding: '20px', textAlign: 'center' }}>
    <h1 style={{ color: '#61dafb' }}>Marhba bik f Home Page! 🏠</h1>
    <p>Hadi hiya l-page lwla, jarrebti t-cliki l-fo9?</p>
  </div>
);

// 2. الصفحة الثانوية (About Page)
const About = () => (
  <div style={{ padding: '20px', textAlign: 'center' }}>
    <h1 style={{ color: '#4CAF50' }}>Hadi l-page About ℹ️</h1>
    <p>Chfti? l-page tbedlat bla ma it3ewwed l-loading dyal l-navigateur!</p>
  </div>
);

// 3. الـ Component الرئيسي
export default function App() {
  return (
    <Router>
      <div style={{ fontFamily: 'Arial, sans-serif' }}>
        
        {/* Navbar: hna fin kadiro l-navigation */}
        <nav style={{ 
          background: '#282c34', 
          padding: '15px', 
          display: 'flex', 
          gap: '20px',
          justifyContent: 'center'
        }}>
          {/* Link hwa sirr dyal "No Loading" */}
          <Link to="/" style={{ color: 'white', textDecoration: 'none', fontWeight: 'bold' }}>Home</Link>
          <Link to="/about" style={{ color: 'white', textDecoration: 'none', fontWeight: 'bold' }}>About</Link>
        </nav>

        {/* Routes: hna fin kankhtarou achmn Component n-affichiw */}
        <div style={{ marginTop: '20px' }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </div>

      </div>
    </Router>
  );
}