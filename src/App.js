import logo from './logo.svg';
import './App.css';
import CardContainer from './Components/CardContainer';
import Navbar from './Components/Navbar';

function App() {
  return (
    <>
      <Navbar />
      <div className="container mt-5">
        <h2 style={{ textAlign: "center", color: "#001d74" }}>Team Members</h2>
        <CardContainer team="team" />
        <h2 style={{ textAlign: "center", color: "#001d74" }}>Advisors</h2>
        <CardContainer team="advisors" />
      </div>
    </>
  );
}

export default App;
