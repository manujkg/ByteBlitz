import axios from "axios";

const API_URL = "http://localhost:8000/api/v1/user";

// Signup API
export const signup = async (userData) => {
  const response = await axios.post(`${API_URL}/signup`, userData);
  return response.data;
};

// Login API
export const login = async (userData) => {
  console.log(userData);
  const response = await axios.post(`${API_URL}/login`, userData);
  console.log(response.data);
  return response.data;
};
