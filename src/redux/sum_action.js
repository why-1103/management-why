/**
 * 专门为sum组件生成action对象
 */

// 同步action就是指action的值为对象
import { INCREMENT, DECREMENT } from './constant';

export const createIncrementAction = (data) => ({ type: INCREMENT, data });

export const createDecrementAction = (data) => ({ type: DECREMENT, data });

// 异步action就是指action的值为函数，异步action中一般都会调用同步action
export const createIncrementAsyncAction = (data, time) => {
  return (dispatch) => {
    setTimeout(() => {
      dispatch(createIncrementAction(data));
    }, time);
  };
};
