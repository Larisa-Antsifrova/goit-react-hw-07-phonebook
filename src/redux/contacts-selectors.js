const getFilterValue = state => state.contacts.filter;

const getAllContacts = state => state.contacts.items;

const getFilteredItems = state => {
  const filter = getFilterValue(state);
  const items = getAllContacts(state);

  return items.filter(
    ({ name, number }) =>
      name.toLowerCase().includes(filter.toLocaleLowerCase()) ||
      number.includes(filter),
  );
};

const getLoading = state => state.contacts.loading;

export { getFilterValue, getAllContacts, getFilteredItems, getLoading };
