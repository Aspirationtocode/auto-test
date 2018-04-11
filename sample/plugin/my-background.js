import { createStore, applyMiddleware } from 'redux'
import {wrapStore} from 'react-chrome-redux';
import { testMiddleware } from './testMiddleware';

import {siteList} from './siteList'

const initialState = {
  siteList: siteList.slice(0, 17),
  started: false,
  result: [],
}

function reducer(state = initialState, action) {
  switch (action.type) {
    case 'PUSH_RESULT': {
      const {blob, data} = action.payload;
      return {
        ...state,
        siteList: state.siteList.slice(1),
        result: [...state.result, action.payload],
      }
    }
    case 'INIT_TEST': {
      return {
        ...state,
        started: true
      }
    }
      
    default:
      return state
  }
}

let store = createStore(reducer, applyMiddleware(testMiddleware))

store.subscribe(() => {
  const state = store.getState()
  console.log(state)
})


wrapStore(store, {portName: 'AUTO_TEST_ENGINE'});
