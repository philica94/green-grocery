import { createSelector, createSlice } from '@reduxjs/toolkit';

const initialCartState = {
  items: [],
};

export const cartSlice = createSlice({
  name: 'updatingCart',
  initialState: initialCartState,
  reducers: {
    increaseCartItemAmount(state, action) {
      cartSlice.caseReducers.setItemQuantity(state, { payload: { item: action.payload, changeAmount: 1 } });
    },
    reduceCartItemAmount(state, action) {
      cartSlice.caseReducers.setItemQuantity(state, { payload: { item: action.payload, changeAmount: -1 } });
    },
    removeCartItem(state, action) {
      cartSlice.caseReducers.setItemQuantity(state, { payload: { item: action.payload, amount: 0 } });
    },
    setItemQuantity(state, action) {
      const {
        payload: { changeAmount, amount, item },
      } = action;

      const existingItemCartIndex = state.items.findIndex(({ id }) => item.id === id);
      const oldAmount = state.items[existingItemCartIndex]?.amount ?? 0;
      const newAmount = amount ?? oldAmount + changeAmount;

      if (newAmount === 0) {
        existingItemCartIndex !== -1 && state.items.splice(existingItemCartIndex, 1);
      } else if (!state.items[existingItemCartIndex]) {
        state.items.push({ ...item, amount: newAmount });
      } else {
        state.items[existingItemCartIndex].amount = newAmount;
      }
    },
  },
});

export const selectTotalCartItemsAmount = createSelector(
  (state) => state.cart.items,
  (items) => items.reduce((sum, { amount }) => sum + amount, 0)
);

// export const selectTotalCartItemsAmount = (passedStore) =>
//   passedStore.cart.items.reduce((sum, { amount }) => sum + amount, 0);

export const selectTotalCartItemsPrice = createSelector(
  (state) => state.cart.items,
  (items) => items.reduce((sum, { price, amount }) => sum + amount * price, 0)
);

export const cartActions = cartSlice.actions;
