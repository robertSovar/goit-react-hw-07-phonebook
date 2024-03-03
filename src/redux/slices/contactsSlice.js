import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import contactsService from "../service/contactsService";

const initialState = {
  items: [],
  isLoading: false,
  error: null,
};

export const fetchContact = createAsyncThunk(
  "contacts/fetchContacts",
  async () => {
    return contactsService.get();
  }
);

export const addContacts = createAsyncThunk(
  "contacts/addContacts",
  async (initialPost) => {
    return contactsService.create(initialPost);
  }
);

export const deleteContacts = createAsyncThunk(
  "contacts/deleteContacts",
  async (initialPost) => {
    return contactsService.remove(initialPost);
  }
);

const contactsSlice = createSlice({
  name: "contacts",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      // GET
      .addCase(fetchContact.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(fetchContact.fulfilled, (state, action) => {
        state.isLoading = false;
        state.items = action.payload;
        state.error = null;
      })
      .addCase(fetchContact.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      })

      // Create
      .addCase(addContacts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.items.push(action.payload);
        state.error = null;
      })
      .addCase(addContacts.rejected, (state, action) => {
        state.error = action.error.message;
        state.isLoading = false;
      })

      // Delete
      .addCase(deleteContacts.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deleteContacts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.items = state.items.filter(
          (item) => item.id !== action.payload.id
        );
      })
      .addCase(deleteContacts.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      });
  },
});

export const contactsReducer = contactsSlice.reducer;
export const selectContacts = (state) => state.contacts.items;
