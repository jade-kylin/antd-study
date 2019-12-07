import React, { Component } from 'react'
import { Input, Button } from 'antd'
import 'antd/dist/antd.css'

export class AntdPages extends Component {
  constructor(props) {
    super(props)
    this.state = {
    };
  };
  render() {
    return (
      <div style={{
        width: '100%',
        height: window.innerHeight,
        background: '#001D37',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
        <div style={{
          width: '500px',
          height: '200px',
          background: '#fff',
          padding: '30px',
          borderRadius: '10px'
        }}>
          {/* Input框 */}
          <div style={{
            width: '100%',
            display: 'flex',
            justifyContent: 'space-around',
            alignItems: 'center',
          }}>
            <div style={{ width: '100px', fontSize: '15px' }}>输入框1：</div>
            <Input placeholder="Basic usage" />
          </div>
          {/* Input框 */}

          {/* Input框 */}
          <div style={{
            width: '100%',
            marginTop: '20px',
            display: 'flex',
            justifyContent: 'space-around',
            alignItems: 'center',
          }}>
            <div style={{ width: '100px', fontSize: '15px' }}>输入框2：</div>
            <Input value={'我是因value属性而生的内容'} />
          </div>
          {/* Input框 */}

          {/* Button */}
          <div style={{
            width: '100%',
            marginTop: '30px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
            <Button type="primary">按钮</Button>
          </div>
          {/* Buttom */}

        </div>
      </div>
    )
  }
}

export default AntdPages
