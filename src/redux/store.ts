import { configureStore, ThunkAction, Action, ConfigureStoreOptions } from '@reduxjs/toolkit';
import uiReducer, { UIState } from './uiSlice';
import moneySlice, { MoneyState } from './moneySlice';

const storeConfig: ConfigureStoreOptions<{ ui: UIState, money: MoneyState }> = {
  reducer: {
    ui: uiReducer,
    money: moneySlice
  }
}

if (localStorage.getItem("state")) {
  storeConfig["preloadedState"] = JSON.parse(localStorage.getItem("state") as string);
}

export const store = configureStore(storeConfig);

/* Persist redux store to localStorage (specifically for saving UI preferences) */
const saveState = (state: any) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('state', serializedState);
  } catch {
    // ignore write errors
  }
};

store.subscribe(() => {
  saveState({
    ui: store.getState().ui
  });
})

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
