import axios from "axios";

import * as SecureStore from "expo-secure-store";

export async function login(url, user) {
  await axios
    .post(url, user, {
      headers: {
        "Content-Type": "application/json;charset=UTF-8",
      },
    })
    .then(
      async (res) =>
        await SecureStore.setItemAsync("token", res.data.user.token)
    )
    .catch((err) => console.error(err));
}
