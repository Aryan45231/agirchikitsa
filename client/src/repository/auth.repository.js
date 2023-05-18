import { AppUrl } from "../res/appUrl";
import { ApiService } from "../data/network/apiService";
export class AuthRepository {
  constructor() {
    this.appUrl = new AppUrl();
    this.apiService = new ApiService();
  }
  async verifyEmployeeId(employeeId, roles) {
    const url = `${this.appUrl.authEndPoint}/me/${employeeId}/roles/${roles}`;
    try {
      return this.apiService.getGetApiResponse(url);
    } catch (error) {
      throw error;
    }
  }
  async updateProfile(id, paylod) {
    const url = `${this.appUrl.authEndPoint}/update/${id}`;
    try {
      return this.apiService.getPatchApiResponse(url, paylod);
    } catch (error) {
      throw error;
    }
  }
  async login(paylod) {
    const url = `${this.appUrl.authEndPoint}/login`;
    try {
      return this.apiService.getPostApiResponse(url, paylod);
    } catch (error) {
      throw error;
    }
  }
}
