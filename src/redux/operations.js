import { createAsyncThunk } from "@reduxjs/toolkit";
import contactsService from "./service/contactsService";

export const fetchContact = createAsyncThunk(
  "contacts/fetchContacts",
  async () => {
    return await contactsService.get();
  }
);

export const addContacts = createAsyncThunk(
  "contacts/addContacts",
  async (initialPost) => {
    return await contactsService.create(initialPost);
  }
);

export const deleteContacts = createAsyncThunk(
  "contacts/deleteContacts",
  async (initialPost) => {
    return await contactsService.remove(initialPost);
  }
);
