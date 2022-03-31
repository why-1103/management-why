import React, { Component } from 'react';

export default class MsgDetail extends Component {
  state = {
    messageArr: [
      {
        id: '1',
        title: '消息1',
        msg: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. ',
      },
      {
        id: '2',
        title: '消息2',
        msg: 'Autem modi dicta vitae doloremque? Repudiandae earum, repellendus veniam aliquid ipsa distinctio, et laborum, consequuntur corrupti nesciunt reprehenderit accusantium aliquam rerum atque.',
      },
      {
        id: '3',
        title: '消息3',
        msg: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, eum. Illum deleniti facilis quasi aut laudantium, atque distinctio temporibus magnam consectetur beatae eveniet sunt quia aliquam omnis cupiditate eos aspernatur?',
      },
    ],
  };
  render() {
    const { messageArr } = this.state;
    const {
      match: {
        params: { id },
      },
    } = this.props;
    const obj = messageArr?.find((i) => i.id === id.toString());
    return (
      <div>
        标题:{obj.title}
        <br />
        内容:{obj.msg}
      </div>
    );
  }
}
