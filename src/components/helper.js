const SERVER_URL = process.env.SERVER_URL || "http://localhost:8080/api";

export async function callApi(url, method = "GET", body) {
  try {
    const headers = {
      "Content-Type": "application/json",
    };
    const options = {
      method,
      headers,
      body: body ? JSON.stringify(body) : undefined,
    };
    const response = await fetch(`${SERVER_URL}/${url}`, options);
    if (!response.ok) {
      throw new Error(
        `Could not fetch data from ${url}, status: ${response.status}`
      );
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    return error;
  }
}
