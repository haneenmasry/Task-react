import React from 'react';
import { Button, Form, Input } from 'antd';


function Login() {
  return (
    <div className="App">
        <header className='App-header'>
            <h3>Log In</h3>
            <Form>
                <Form.Item label='UserName' name='username'>
                    <Input placeholder='Username' required></Input>
                </Form.Item>
                <Form.Item label='Password' name='password'>
                    <Input.Password placeholder='Password' required></Input.Password>
                </Form.Item>
                <Form.Item>
                <Button type='primary' href='#' htmlType='submit' block>Log In</Button>
                </Form.Item>

            </Form>
        </header>

    </div>
  );
}

export default Login;