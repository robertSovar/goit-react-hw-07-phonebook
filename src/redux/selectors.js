import { createSelector } from "@reduxjs/toolkit";
import { selectContacts } from "./slices/contactsSlice";

export const selectFilter = (state) => state.filter;
export const selectFilteredContacts = createSelector(
  [selectContacts, selectFilter],

  (contacts, filter) => {
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  }
);
