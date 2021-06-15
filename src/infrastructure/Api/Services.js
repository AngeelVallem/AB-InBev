import axios from "axios";

import Toast from "react-native-toast-message";
import * as SecureStore from "expo-secure-store";

export async function getData(url) {
  try {
    const res = await axios.get(url);

    return res.data;
  } catch (err) {
    Toast.show({
      type: "error",
      text1: "ERROR",
      text2: err.message,
    });
  }
}

export async function login(url, data, navigation, route) {
  try {
    const res = await axios.post(url, data, {
      headers: {
        "Content-Type": "application/json;charset=UTF-8",
      },
    });
    await SecureStore.setItemAsync("token", res.data.user.token);

    Toast.show({
      type: "success",
      text1: "Logged",
    });
    setTimeout(() => {
      navigation.push("Home");
    }, 300);
  } catch (err) {
    if (err.response.status == 422) {
      return Toast.show({
        type: "error",
        text1: "ERROR",
        text2: "Invalid data",
        position: "top",
      });
    }
    Toast.show({
      type: "error",
      text1: "ERROR",
      position: "top",
    });
  }
}
export async function register(data, navigation) {
  try {
    const res = await axios.post(
      "https://conduit.productionready.io/api/users",
      data,
      {
        headers: {
          "Content-Type": "application/json;charset=UTF-8",
        },
      }
    );
    await SecureStore.setItemAsync("token", res.data.user.token);

    Toast.show({
      type: "success",
      text1: "Registered",
    });
    setTimeout(() => {
      navigation.push("Home");
    }, 300);
  } catch (err) {
    if (err.response.status == 422) {
      return Toast.show({
        type: "error",
        text1: "ERROR",
        text2: "Inavalid data , email or usernmae are already taken",
        position: "top",
      });
    }
    Toast.show({
      type: "error",
      text1: "ERROR",
      text2: err.message,
      position: "top",
    });
  }
}

export async function getCurrentUser() {
  try {
    const { data } = await axios({
      method: "GET",
      url: "https://conduit.productionready.io/api/user",
      headers: {
        Authorization: `Token ${await SecureStore.getItemAsync("token")}`,
      },
    });

    return data.user;
  } catch (err) {
    Toast.show({
      type: "error",
      text1: "ERROR",
      text2: err.message,
    });
  }
}

export async function postMethod(url, data, navigation, route, msg) {
  try {
    await axios.post(url, data, {
      headers: {
        "Content-Type": "application/json;charset=UTF-8",
        Authorization: `Token ${await SecureStore.getItemAsync("token")}`,
      },
    });
    Toast.show({
      type: "success",
      text1: !msg ? "" : msg,
    });
    setTimeout(() => {
      navigation.navigate(route);
    }, 300);
  } catch (err) {
    Toast.show({
      type: "error",
      text1: "ERROR",
      text2: err.message,
      position: "bottom",
    });
  }
}

export async function followUser(username) {
  try {
    const res = await axios.post(
      `https://conduit.productionready.io/api/profiles/${username}/follow`,
      null,
      {
        headers: {
          Authorization: `Token ${await SecureStore.getItemAsync("token")}`,
        },
      }
    );
    return res.data;
  } catch (err) {
    Toast.show({
      type: "error",
      text1: "ERROR",
      text2: err.message,
      position: "bottom",
    });
  }
}

export async function unFollowUser(username) {
  try {
    await axios.delete(
      `https://conduit.productionready.io/api/profiles/${username}/follow`,
      {
        headers: {
          Authorization: `Token ${await SecureStore.getItemAsync("token")}`,
        },
      }
    );
  } catch (err) {
    Toast.show({
      type: "error",
      text1: "ERROR",
      text2: err.message,
      position: "bottom",
    });
  }
}

export async function favoriteArticle(id) {
  try {
    const res = await axios.post(
      `https://conduit.productionready.io/api/articles/${id}/favorite`,
      null,
      {
        headers: {
          Authorization: `Token ${await SecureStore.getItemAsync("token")}`,
        },
      }
    );
    Toast.show({
      type: "success",
      text1: "added to favorites",
    });
  } catch (err) {
    Toast.show({
      type: "error",
      text1: "ERROR",
      text2: err.message,
      position: "bottom",
    });
  }
}

export async function unFavoriteArticle(id) {
  try {
    await axios.delete(
      `https://conduit.productionready.io/api/articles/${id}/favorite`,
      {
        headers: {
          Authorization: `Token ${await SecureStore.getItemAsync("token")}`,
        },
      }
    );
    Toast.show({
      type: "success",
      text1: "Unfavorited",
    });
  } catch (err) {
    Toast.show({
      type: "error",
      text1: "ERROR",
      text2: err.message,
      position: "bottom",
    });
  }
}

export async function addComment(id, data, msg) {
  try {
    await axios.post(
      `https://conduit.productionready.io/api/articles/${id}/comments`,
      data,
      {
        headers: {
          "Content-Type": "application/json;charset=UTF-8",
          Authorization: `Token ${await SecureStore.getItemAsync("token")}`,
        },
      }
    );
    Toast.show({
      type: "success",
      text1: !msg ? "" : msg,
    });
  } catch (err) {
    Toast.show({
      type: "error",
      text1: "ERROR",
      text2: err.message,
      position: "bottom",
    });
  }
}

export async function putMethod(url, data) {
  try {
    await axios.put(url, data, {
      headers: {
        "Content-Type": "application/json;charset=UTF-8",
        Authorization: `Token ${await SecureStore.getItemAsync("token")}`,
      },
    });
    Toast.show({
      type: "success",
      text1: "Success",
    });
  } catch (err) {
    Toast.show({
      type: "error",
      text1: "ERROR",
      text2: err.message,
      position: "bottom",
    });
  }
}

export async function getById(url) {
  const res = await axios.get(url);
  return res.data;
}

export async function deleteArticle(id) {
  try {
    axios.delete(`https://conduit.productionready.io/api/articles/${id}`, {
      headers: {
        Authorization: `Token ${await SecureStore.getItemAsync("token")}`,
      },
    });
    Toast.show({
      type: "success",
      text1: "Deleted Successfully",
    });
  } catch (err) {
    Toast.show({
      type: "error",
      text1: "ERROR",
      text2: err.message,
      position: "bottom",
    });
  }
}

export async function getArticlesWithParams(params) {
  try {
    const res = await axios.get(
      `https://conduit.productionready.io/api/articles${params}`
    );

    return res.data;
  } catch (err) {
    Toast.show({
      type: "error",
      text1: "ERROR",
      text2: err.message,
    });
  }
}

export async function getByIdAuth(url) {
  const res = await axios.get(url, {
    headers: {
      Authorization: `Token ${await SecureStore.getItemAsync("token")}`,
    },
  });
  return res.data;
}
