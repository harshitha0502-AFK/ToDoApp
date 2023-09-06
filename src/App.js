
import React from 'react';
import TodoList from './TodoList';
import { BrowserRouter,Routes,Route } from 'react-router-dom';

function App() {
  return (
 
  <div className="App">
      <BrowserRouter basename='/to-do-app'>
                   <Routes>
                      <Route exact path='/' index element={ <TodoList/>}/>
                   </Routes>
    </BrowserRouter>
  </div>


  );
}

export default App;
