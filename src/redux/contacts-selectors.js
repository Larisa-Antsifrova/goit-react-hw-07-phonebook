const getFilterValue = state => state.contacts.filter;
const getAllContacts = state => state.contacts.items;
const getLoading = state => state.contacts.loading;

const getFilteredItems = state => {
  const filter = getFilterValue(state);
  const items = getAllContacts(state);

  return items.filter(
    ({ name, number }) =>
      name.toLowerCase().includes(filter.toLocaleLowerCase()) ||
      number.includes(filter),
  );
};

export { getFilterValue, getAllContacts, getLoading, getFilteredItems };
