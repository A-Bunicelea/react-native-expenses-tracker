import axios from "axios";

const BACKEND_URL =
  "https://react-native-expenses-tr-4ee33-default-rtdb.firebaseio.com";

export async function storeExpense(expenseData) {
  try {
    const response = await axios.post(
      `${BACKEND_URL}/expenses.json`,
      expenseData
    );
    const id = response.data.name;
    return id;
  } catch (error) {
    throw new Error(error);
  }
}

export async function getExpenses() {
  try {
    const response = await axios.get(`${BACKEND_URL}/expenses.json`);

    const expenses = [];
    console.log(response.data);
    for (const key in response.data) {
      const expenseObj = {
        id: key,
        amount: response.data[key].amount,
        date: new Date(response.data[key].date),
        description: response.data[key].description,
      };

      expenses.push(expenseObj);
    }

    return expenses;
  } catch (error) {
    throw new Error(error);
  }
}

export function updateExpense(id, expenseData) {
  try {
    return axios.put(`${BACKEND_URL}/expenses/${id}.json`, expenseData);
  } catch (error) {
    throw new Error(error);
  }
}

export function deleteExpense(id) {
  try {
    return axios.delete(`${BACKEND_URL}/expenses/${id}.json`);
  } catch (error) {
    throw new Error(error);
  }
}
