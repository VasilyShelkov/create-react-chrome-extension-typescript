const saveState = (state: any) => {
  chrome.storage.local.set({ state: JSON.stringify(state) });
};

export default function () {
  return (next: any) => (reducer: any, initialState: any) => {
    const store = next(reducer, initialState);
    store.subscribe(() => {
      const state = store.getState();
      saveState(state);
    });
    return store;
  };
}
