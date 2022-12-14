import React from 'react';
import { Button, Form, Input } from 'antd';

function Signin() {
  return (
    <div className="App">
        <header className='App-header'>
        <h3>Sign In</h3>
            <Form>
                <Form.Item label='UserName' name='username'>
                    <Input placeholder='Username' required></Input>
                </Form.Item>
                <Form.Item label='Password' name='password'>
                    <Input.Password placeholder='Password' required></Input.Password>
                </Form.Item>
                <Form.Item label='ConfirmPassword' name='confirmpassword'>
                    <Input.Password placeholder='ConfirmPassword' required></Input.Password>
                </Form.Item>
                <Form.Item>
                <Button type='primary' href='#' htmlType='submit' block>Sign In</Button>
                </Form.Item>

            </Form>
            </header>
    </div>
  );
}

export default Signin;