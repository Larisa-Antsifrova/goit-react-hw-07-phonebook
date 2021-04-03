const getFilterValue = state => state.contacts.filter;
const getItemsValue = state => state.contacts.items;
const getLoading = state => state.contacts.loading;

export { getFilterValue, getItemsValue, getLoading };
