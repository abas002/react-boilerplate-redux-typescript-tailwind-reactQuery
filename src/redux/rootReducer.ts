import { combineReducers } from 'redux'
import { all } from 'redux-saga/effects'


export const rootReducer = combineReducers({
//   auth: auth.reducer,// here must include all reducers
})

export type RootState = ReturnType<typeof rootReducer>

export function* rootSaga() {
//   yield all([auth.saga()]) // here must include all sagas
}
