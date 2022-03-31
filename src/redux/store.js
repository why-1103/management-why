/**
 * store.js文件用于提供一个store对象，整个应用只有一个store对象
 */

// 引入createStore，用于专门创建redux中最为核心的store对象
import { createStore, applyMiddleware } from 'redux';
// 引入为sum组件服务的reducer
import reducer from './sum_reducer';
// 引入redux-thunk用与支持异步action
import thunk from 'redux-thunk';

export default createStore(reducer, applyMiddleware(thunk));
