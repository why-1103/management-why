import React, { Component } from 'react';
import { Layout } from 'antd';

import About from './About';
import Home from './Home';
import Header1 from './Header';
import SideNav from './SideNav';
import Blank from './Blank';
import Message from './Message';
import News from './News';
import Sum from '../Sum';
import Parent from '../Live/Parent';
import SideMenu from './SideMenu';

import GitHubUserSearch from '../GitHubUserSearch';
import './style.css';

const { Header, Content, Footer, Sider } = Layout;
export default class BasicLayout extends Component {
  state = {
    routesData: [
      {
        path: '/home',
        title: 'Home',
        component: Home,
        // routes: [
        //   { path: 'message/:id', title: 'Message', component: <Message /> },
        //   { path: 'news', title: 'News', component: <News /> },
        // ],
      },
      { path: '/about', title: 'About', component: About },
      {
        path: '/searchuser',
        title: '搜索',
        index: false,
        component: GitHubUserSearch,
      },

      {
        path: '/sum',
        title: '求和',
        index: false,
        component: Sum,
      },
      {
        path: '/live',
        title: '生命周期',
        index: false,
        component: Parent,
      },
    ],
  };
  render() {
    const { routesData } = this.state;
    return (
      <Layout>
        <Sider
          breakpoint="lg"
          collapsedWidth="0"
          onBreakpoint={(broken) => {
            console.log(broken);
          }}
          onCollapse={(collapsed, type) => {
            console.log(collapsed, type);
          }}
        >
          <div className="logo" />
          <SideMenu routesData={routesData} />
          {/* <SideNav routesData={routesData} /> */}
        </Sider>
        <Layout>
          <Header
            className="site-layout-sub-header-background"
            style={{ padding: 0 }}
          />
          <Content style={{ margin: '24px 16px 0' }}>
            <div
              className="site-layout-background"
              style={{ padding: 24, minHeight: 360 }}
            >
              <Blank routesData={routesData} homeElement={<Home />} />
            </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>
            Ant Design ©2018 Created by Ant UED
          </Footer>
        </Layout>
      </Layout>
    );
  }
}
