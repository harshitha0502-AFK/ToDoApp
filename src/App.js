
import React from 'react';
import TodoList from './TodoList';
import { BrowserRouter,Routes,Route } from 'react-router-dom';

function App() {
  return (
 
  <div>
      <BrowserRouter basename='/to-do-app'>
                   <Routes>
                      <Route exact path='/' index element={ <TodoList/>}/>
                   </Routes>
    </BrowserRouter>
  </div>


  );
}

export default App;
