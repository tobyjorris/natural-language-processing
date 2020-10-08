import "babel-polyfill";
const postDataToServer = async (url = "", data = {}) => {
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  });
  try {
    return await response.json();
  } catch (e) {
    console.log("error", e);
  }
};

export { postDataToServer };
