import checkPropTypes from 'check-prop-types';
import { applyMiddleware, createStore } from 'redux';
import { middlewares } from '../src/store';
import RootReducer from '../src/reducers';

export const findByTestAttr = (component, attr) => {
  const wrapper = component.find(`[data-test='${attr}']`);
  return wrapper;
};

export const checkProps = (component, expectedProps) => {
  const propsErr = checkPropTypes(
    // eslint-disable-next-line react/forbid-foreign-prop-types
    component.propTypes,
    expectedProps,
    'props',
    component.name,
  );
  return propsErr;
};

export const testStore = (initialState) => {
  const createStoreWithMiddlewares = applyMiddleware(...middlewares)(
    createStore,
  );
  return createStoreWithMiddlewares(RootReducer, initialState);
};
