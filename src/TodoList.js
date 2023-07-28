import React, { useState } from 'react';
import { Button, FormLabel } from 'react-bootstrap';
import { Form,Card } from 'react-bootstrap';
import "./TodoList.css";

function TodoList() {
  
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');
  const [showText, setShowText] = useState(true);


  const handleAddTodo = () => {
    if (newTodo.trim() !== '') {
      setTodos([...todos, newTodo]);
      setNewTodo('');
    }
  };
 
  const handleRemoveTodo = (index) => {
    const updatedTodos = todos.filter((todo, i) => i !== index);
    setTodos(updatedTodos);
  };

  const handleMouseOver = () => {
    setShowText(false);
  };

  const handleMouseOut = () => {
    setShowText(true);
  };

 
  return (
    <div className='box' >
      <div>
      <FormLabel>TO-DO LIST</FormLabel>
      </div>
    
  <Card style={{color:'black',backgroundColor:'white',
   height : 50,width : 420, borderRadius : 15, boxShadow: '0 10px 4px rgba(0, 0, 0, 0.1)',
   fontSize : 20, padding : 2,alignItems:'center',marginTop:15,marginBottom:15}}>   
    <>
      <Form.Control 
            style={{height : 40,
              width : 290,
              fontSize : 15,
              padding : 1,
              borderRadius:10,
              gap : 15
            }}
            size="lg"   
            type="text"
            value={newTodo}
            onChange={(e) => setNewTodo(e.target.value)} 
            placeholder="What do you want to do?" />
    </>
    
    <Button style={{ height : 30,width : 100,fontSize : 15,
     color: 'white',backgroundColor : 'black',borderRadius : 10,
     padding : 5,marginLeft:20,marginBottom: 10}} 
    onClick={handleAddTodo}>ADD</Button>

    </Card>

      <Card style={{color:'black',backgroundColor:'white',boxShadow: '0 10px 4px rgba(0, 0, 0, 0.1)',
       height : 500,width : 450, borderRadius : 15, fontSize : 20,
        padding : 2,marginBottom: 15,marginTop:25,alignItems:'center'}}>
   
        {showText && <text className='text' style={{fontSize:50,fontStyle:'bold'}}  onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut} >No items added !</text>}
        
        {todos.map((todo, index) => (
          
          <Card style={{color:'black',backgroundColor:'white', boxShadow: '0 20px 4px rgba(0, 0, 0, 0.1)',
          height : 50,width : 430, borderRadius : 15, fontSize : 20, 
          padding : 2,marginTop:2,marginBottom:15,alignItems:'center'}}
           key={index}>
            {todo}

          <Button style={{ height : 30,width : 100,fontSize : 15, color: 'white',backgroundColor : 'black',display:'flex',
          borderRadius : 10,padding : 5,marginLeft: 'auto',marginTop:'auto'}}
            onClick={() => handleRemoveTodo(index)}>DELETE</Button>
          
           

          </Card>
        ))}

         
      </Card>
    
    </div>
  );
};


export default  TodoList;





  