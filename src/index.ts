import store from './store';
import { setMeaningOfLife, lifeHasNoMeaning } from './store/meaningOfLife/actions';
import { changeCaptain, happyBirthdayCaptain } from './store/captain/actions';

(async () => {
  store.dispatch(setMeaningOfLife(51));
  await store.dispatch(lifeHasNoMeaning());
  store.dispatch(changeCaptain('tom', 23));
  store.dispatch(happyBirthdayCaptain());
})();
