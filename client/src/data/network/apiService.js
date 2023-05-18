import { AppExcaptions } from "../appExcaptions";
export class ApiService {
  async getGetApiResponse(url) {
    const requestBody = this.createRequestBody("GET", {});
    try {
      const response = await fetch(url,requestBody);
      this.jsonResponse = this.returnResponse(response);
    } catch (error) {
      throw error;
    }
    return this.jsonResponse;
  }
  async getPostApiResponse(url, body) {
    const requestBody = this.createRequestBody("POST", body);
    try {
      const response = await fetch(url, requestBody);
      this.jsonResponse = this.returnResponse(response);
    } catch (error) {
      throw error;
    }
    return this.jsonResponse;
  }
  async getPutApiResponse(url, body) {
    const requestBody = this.createRequestBody("PUT", body);
    try {
      const response = await fetch(url, requestBody);
      this.jsonResponse = this.returnResponse(response);
    } catch (error) {
      throw error;
    }
    return this.jsonResponse;
  }
  async getPatchApiResponse(url, body) {
    const requestBody = this.createRequestBody("PATCH", body);
    try {
      const response = await fetch(url, requestBody);
      this.jsonResponse = this.returnResponse(response);
    } catch (error) {
      throw error;
    }
    return this.jsonResponse;
  }
  async getDeleteApiResponse(url, body) {
    const requestBody = this.createRequestBody("DELETE", body);
    try {
      const response = await fetch(url, requestBody);
      this.jsonResponse = this.returnResponse(response);
    } catch (error) {
      throw error;
    }
    return this.jsonResponse;
  }
  createRequestBody(method, body) {
    if (method === "GET") {
      return {
        method: method,
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("userToken")}`,
        }
      }
    }
    return {
      method: method,
      body: JSON.stringify(body),
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("userToken")}`,
      }
    };
  }
  async returnResponse(response) {
    const body = await response.json();
    switch (response.status) {
      case 200:
        return body;
      case 201:
        return body;
      case 400:
        throw new AppExcaptions(
          body.message,
          "UnAuthorised"
        );
      case 404:
        throw new AppExcaptions(body.message, "Bad Request");
      default:
        throw new AppExcaptions(body.message, "Server Error");
    }
  }
}
