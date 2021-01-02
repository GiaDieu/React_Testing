import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import RootReducer from '../src/reducers';

export const middlewares = [thunk];

const store = createStore(
  RootReducer,
  composeWithDevTools(
    applyMiddleware(...middlewares),
    // ...middlewares này có prototype là array => sẽ sử dụng đầy đủ tính năng của array. Gọn hơn rất nhiều phải không ? Với tham số ...args của display method chúng ta nhận bao nhiêu đối số cũng được, hay nói cách khác là chúng ta có thể "spread" các tham số truyền vào.
  ),
);

export default store;
