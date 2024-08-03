// import axios from "axios";

// const api = axios.create({
//   baseURL: "https://api.nimble.com",
//   headers: {
//     Authorization: `Bearer VlP9cwH6cc7Kg2LsNPXpAvF6QNmgZn`,
//     // Authorization: `Bearer E4QWapFdHbe90E0QXsKI8MDGT9PkO9`,
//   },
// });

// export const getContacts = async () => {
//   const response = await api.get("/contacts", {
//     params: {
//       sort: "created:desc",
//     },
//   });
//   return response.data;
// };

// export const getContact = async (id) => {
//   const response = await api.get(`/contact/${id}`);
//   return response.data;
// };

// export const createContact = async (data) => {
//   const response = await api.post("/contact", data);
//   return response.data;
// };

// export const deleteContact = async (id) => {
//   const response = await api.delete(`/contact/${id}`);
//   return response.data;
// };
import axios from "axios";

const api = axios.create({
  baseURL: '/api',  // This will be proxied by Vite
});

export const getContacts = async () => {
  try {
    const response = await api.get('/contacts', {
      params: {
        sort: 'created:desc',
      },
    });
    console.log('Raw API response:', response);
    return response.data;
  } catch (error) {
    console.error('Error in getContacts:', error);
    if (error.response) {
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx
      console.error('Error data:', error.response.data);
      console.error('Error status:', error.response.status);
      console.error('Error headers:', error.response.headers);
    } else if (error.request) {
      // The request was made but no response was received
      console.error('Error request:', error.request);
    } else {
      // Something happened in setting up the request that triggered an Error
      console.error('Error message:', error.message);
    }
    throw error;
  }
};

export const getContact = async (id) => {
  try {
    const response = await api.get(`/contact/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching contact ${id}:`, error);
    throw error;
  }
};

export const createContact = async (data) => {
  try {
    const response = await api.post("/contact", data);
    return response.data;
  } catch (error) {
    console.error("Error creating contact:", error);
    throw error;
  }
};

export const deleteContact = async (id) => {
  try {
    const response = await api.delete(`/contact/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Error deleting contact ${id}:`, error);
    throw error;
  }
};

export default api;