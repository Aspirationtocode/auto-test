import { Store } from 'react-chrome-redux';

const store = new Store({ portName: 'AUTO_TEST_ENGINE' });

store.ready().then(() => {
  const state = store.getState()
  const {siteList, started} = state;
  const divs = countLinks()
  if (siteList.length && started) {
    store.dispatch({type: 'PUSH_RESULT', payload: divs})
  }
});

store.subscribe(() => {
  const state = store.getState();
})

const countLinks = () => {
  return document.querySelectorAll('a').length;
}







