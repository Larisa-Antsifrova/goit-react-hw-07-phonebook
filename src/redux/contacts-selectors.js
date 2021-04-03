const getFilterValue = state => state.contacts.filter;
const getItemsValue = state => state.contacts.items;
const getLoading = state => state.contacts.loading;

const getFilteredItems = state => {
  const filter = getFilterValue(state);
  const items = getItemsValue(state);

  return items.filter(
    ({ name, number }) =>
      name.toLowerCase().includes(filter.toLocaleLowerCase()) ||
      number.includes(filter),
  );
};

export { getFilterValue, getItemsValue, getLoading, getFilteredItems };
