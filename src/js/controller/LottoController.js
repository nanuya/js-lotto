import { CLASS } from '../const/className.js';
import { buy } from '../service/lotto.js';
import LottoHeader from '../views/lotto/LottoDetailHeader.js';
import LottoList from '../views/lotto/LottoDetailList.js';
import MoneyForm from '../views/lotto/MoneyForm.js';
import { $Curry } from '../dom/index.js';
import Controller from './Controller.js';

class LottoController extends Controller {
  static moneyForm;
  static lottoHeader;
  static lottoList;
  constructor(...props) {
    super(...props);
  }

  initializeComponents($app) {
    const $ = $Curry($app);

    LottoController.moneyForm = MoneyForm($(CLASS.MONEY_FORM))
      .init()
      .on('@buy', this.buy.bind(this));

    LottoController.lottoHeader = LottoHeader($(CLASS.LOTTO_HEADER))
      .init()
      .on('@toggle-numbers', this.toggleNumbers.bind(this));

    LottoController.lottoList = LottoList($(CLASS.LOTTO_LIST)).init();
  }

  initializeState() {
    this.store.subscribe('lotto', LottoController.lottoHeader);
    this.store.subscribe('lotto', LottoController.lottoList);
  }

  buy({ detail }) {
    this.store.state.lotto = buy(detail, this.store.state.lotto);
  }

  toggleNumbers({ detail }) {
    LottoController.lottoList.toggleStyle(detail);
  }
}

export default (...props) => new LottoController(...props);
