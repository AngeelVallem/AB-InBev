import * as SecureStore from "expo-secure-store";

export default async function validateToken() {
  const token = await SecureStore.getItemAsync('token');

  if (!token) {
    return false;
  }

  return true;
}
