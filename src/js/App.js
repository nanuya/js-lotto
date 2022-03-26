import { CLASS } from './const/className.js';
import { $Curry } from './dom/index.js';

import LottoController from './controller/LottoController.js';
import createStore from './state/index.js';

const initialState = {
  lotto: {
    numbers: [],
    count: 0,
  },
};

const controllers = [LottoController];

export default () => {
  const $app = $Curry()(CLASS.APP);
  const store = createStore(initialState);

  controllers.forEach(controller => controller($app, store));
};
