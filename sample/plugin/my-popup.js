import {Store} from 'react-chrome-redux';

const store = new Store({
  portName: 'AUTO_TEST_ENGINE'
});

store.ready().then(() => {
  document.querySelector('.start').addEventListener('click', () => {
    const state = store.getState()
    const {siteList, result} = state;
    if (siteList.length) {
      chrome.tabs.create({url: siteList[0]})
      store.dispatch({type: 'INIT_TEST'})
    }
  })
});

store.subscribe(() => {
  const state = store.getState()
})


