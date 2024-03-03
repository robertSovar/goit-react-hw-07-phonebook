import axios from "axios";

axios.defaults.baseURL = "https://65df11cdff5e305f32a15df5.mockapi.io/contacts";

async function get() {
  const response = await axios.get("/contacts");
  return response.data;
}

async function create(contact) {
  const response = await axios.post("/contacts", contact);
  return response.data;
}

async function remove(contactId) {
  const response = await axios.delete(`/contacts/${contactId}`);
}

const contactsService = {
  get,
  create,
  remove,
};

export default contactsService;
