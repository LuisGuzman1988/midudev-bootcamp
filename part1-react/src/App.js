import './App.css';
import Message from './message';

const App = () => {
  return (
    <div className="App">
     <Message color='red' message='Estamos trabajando' />
     <Message color='yellow' message='en un curso' />
     <Message color='green' message='de React' />
     <Descripcion />
    </div>
  );
}

const Descripcion = () => {
  return <p>Esta es la app del curso fullstack bootcamp</p>
}

export default App;
