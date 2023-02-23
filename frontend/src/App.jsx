import Header from './components/header/Header';
import HomePage from './pages/home/HomePage';
import Button from './components/footer-button/Button';
import './App.css';

function App() {
  return (
    <body>
      <header>
        <Header />
      </header>
      <main>
        <HomePage />
      </main>
      <footer>
        <Button />
      </footer>
    </body>
  );
}

export default App;
