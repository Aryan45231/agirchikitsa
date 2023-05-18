import { AppUrl } from "../res/appUrl";
import { ApiService } from "../data/network/apiService";
export class WorkerManagementRepository {
  constructor() {
    this.appUrl = new AppUrl();
    this.apiService = new ApiService();
  }

  async getWorkerList() {
    const url = `${this.appUrl.workerListEndPoint}?workProfile=worker&fetchAll=1`;
    try {
      return this.apiService.getGetApiResponse(url);
    } catch (error) {
      throw error;
    }
  }
  async AddNewWorker(payload) {
    const url = `${this.appUrl.addWorkerEndPoint}`;
    try {
      return this.apiService.getPostApiResponse(url, payload);
    } catch (error) {
      throw error;
    }
  }

}
