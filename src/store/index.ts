import { createStore, compose, applyMiddleware } from 'redux';
import reducers from '../reducers';
import sagas from '../sagas';
import middlewares from '../middlewares';
import sagaMiddleware from '../middlewares/saga';

const composeEnhancers = (window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ as typeof compose) || compose;
 
export default function configureStore() {
  const enhancer = composeEnhancers(applyMiddleware(...middlewares));
  const createStoreWithMiddleware = enhancer(createStore);
  const storeWithMiddleware = createStoreWithMiddleware(reducers);

  sagaMiddleware.run(sagas);

  return storeWithMiddleware;
}
