/**
 * 1.用于创建一个为sum组件服务的reducer,reducer本质是一个函数
 * 2.函数接收两个参数：之前的状态，动作对象
 */
const initState = 0;
export default function sumReducer(preState = initState, action) {
  const { type, data } = action;

  switch (type) {
    case 'increment':
      return preState + data;
    case 'decrement':
      return preState - data;
    default:
      return preState;
  }
}
