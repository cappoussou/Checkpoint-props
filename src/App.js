import './App.css';
import Profile from './profile/Profile';
import ala from './ala.jpg'

function App() {
  const handleName =(name)=> {alert(`Hi i´m ${name}`)}
  return (
  
    <div>
        <Profile
         fullName="Ala" 
         bio="This is my bio"
         profession="Student"
         handleName={handleName}
        >
          <center>
        <img style={{width: 200, height: 200, borderRadius: 200/ 4 }}  src={ala} alt="image" ></img>
        </center>
        </Profile>
    </div>
    
  );
}

export default App;
