import { AppUrl } from "../res/appUrl";
import { ApiService } from "../data/network/apiService";
export class DashboardRepository {
  constructor() {
    this.appUrl = new AppUrl();
    this.apiService = new ApiService();
  }

  async getAssignedTasks() {
    try {
      return this.apiService.getGetApiResponse(
        this.appUrl.assignedTaskEndPoint
      );
    } catch (error) {
      throw error;
    }
  }
}
