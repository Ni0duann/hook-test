import React from 'react';
import ReactDOM from 'react-dom';

export function message(msg, onclick) {
  // 创建容器
  const div = document.createElement('div');
  document.body.appendChild(div);
  
  // 定义移除方法
  const destroy = () => {
    const unmountResult = ReactDOM.unmountComponentAtNode(div);
    if (unmountResult && div.parentNode) {
      div.parentNode.removeChild(div);
    }
  };

  // 渲染消息组件
  ReactDOM.render(
    <div className="message" onClick={() => {
      onclick?.(() => destroy());
      destroy();
    }}>
      {msg}
    </div>,
    div
  );

  // 3秒后自动移除
  setTimeout(destroy, 3000);
}
const style = document.createElement('style');
style.innerHTML = `
  .message {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    padding: 10px 20px;
    background: rgba(0, 0, 0, 0.7);
    color: white;
    border-radius: 4px;
    font-size: 14px;
    cursor: pointer;
    z-index: 9999;
  }
`;
document.head.appendChild(style);
