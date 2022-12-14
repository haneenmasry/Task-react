import React from 'react';import './App.css';
import 'antd/dist/reset.css';
import { Login,Signin,Home } from './components';
import {  Tabs } from 'antd';

 function App() {
  return (
    <div className='App-header'>
    <Tabs>
    <Tabs.TabPane tab='Home' key='tab1'><Home /></Tabs.TabPane>
    <Tabs.TabPane tab='Log In' key='tab2'><Login /></Tabs.TabPane>
    <Tabs.TabPane tab='Signin' key='tab3'><Signin/></Tabs.TabPane>
  </Tabs>
</div>
  
  
  );
}

export default App;

