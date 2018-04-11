export function testMiddleware(store) {
  return next => action => {
    const {type} = action;
    const state = store.getState();
    if (type === 'PUSH_RESULT') {
      const {siteList} = state;
      const url = siteList[1]
      if (url) {
        chrome.tabs.create({url})
      }
      
    }

    return next(action)
  }
}