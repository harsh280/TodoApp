import './App.css';
import React from 'react';
import Header from './components/header';
import Input from './components/input';
import Todos from './components/todos';

function App() {
  return (
    <div>
      <Header />
      <Input />
      <Todos />
    </div>
  );
}

export default App;
