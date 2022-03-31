import React, { Component } from 'react';
// import axios from 'axios';
import PubSub from 'pubsub-js';

export default class Search extends Component {
  state = {
    searchText: '',
  };

  getData = async (searchText) => {
    // 请求地址: https://api.github.com/search/users?q=xxxxxx
    const keyword = searchText?.trim();

    if (keyword?.length <= 0) {
      alert('请输入搜索关键字');
    }
    const url = `https://api.github.com/search/users?q=${searchText.trim()}`;
    // // 1.使用axios发送请求
    // axios.get(url).then(
    //   (response) => {
    //     const {
    //       data: { items },
    //     } = response;
    //     // 发布消息
    //     PubSub.publish('userData', items);
    //   },
    //   (error) => {
    //     console.log(error);
    //   },
    // );

    // 2.使用Fetch发送请求
    // 未优化写法
    // fetch(url)
    //   .then(
    //     (response) => {
    //       return response.json();
    //     },
    //     (error) => {
    //       console.log(error);
    //       // 返回初始化状态的promise
    //       return new Promise(() => {});
    //     },
    //   )
    //   .then(
    //     (response) => {
    //       const { items } = response;
    //       // 发布消息
    //       PubSub.publish('userData', items);
    //     },
    //     (error) => {
    //       console.log(error);
    //     },
    //   );
    // 优化
    try {
      const response = await fetch(url);
      const data = await response.json();
      const { items } = data;
      PubSub.publish('userData', items);
    } catch (error) {
      console.log('请求出错', error);
      PubSub.publish('userData', []);
    }
    // fetch(url)
    //   .then((response) => {
    //     return response.json();
    //   })
    //   .then((response) => {
    //     const { items } = response;
    //     PubSub.publish('userData', items);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });
  };

  render() {
    const { searchText } = this.state;
    return (
      <section className="jumbotron">
        <h3 className="jumbotron-heading">Search Github Users</h3>
        <div>
          <input
            type="text"
            placeholder="enter the name you search"
            value={searchText}
            onChange={(e) => this.setState({ searchText: e.target.value })}
          />
          &nbsp;<button onClick={() => this.getData(searchText)}>Search</button>
        </div>
      </section>
    );
  }
}
