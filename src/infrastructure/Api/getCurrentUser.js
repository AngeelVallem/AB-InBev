import axios from "axios";
import * as SecureStore from "expo-secure-store";

export default async function getCurrentUser() {
  try {
      const {data} = await axios({
      method: "GET",
      url: "https://conduit.productionready.io/api/user",
      headers: {
        'Authorization': `Token ${await SecureStore.getItemAsync("token")}`,
      },
    });

    return data.user
  } catch (err) {
    console.error(err);
  }
}
