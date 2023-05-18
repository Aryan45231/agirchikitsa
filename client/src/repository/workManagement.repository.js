import { AppUrl } from "../res/appUrl";
import { ApiService } from "../data/network/apiService";
export class WorkManagementRepository {
  constructor() {
    this.appUrl = new AppUrl();
    this.apiService = new ApiService();
  }

  async getWorkerList() {
    const url = `${this.appUrl.workerListEndPoint}?workProfile=worker&fetchAll=0`;
    try {
      return this.apiService.getGetApiResponse(url);
    } catch (error) {
      throw error;
    }
  }

  async assignTask(payload) {
    try {
      return this.apiService.getPostApiResponse(
        this.appUrl.assignedTaskEndPoint,
        payload
      );
    } catch (error) {
      throw error;
    }
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

  async markWorkAsEngage(id) {
    const url = `${this.appUrl.workerListEndPoint}/${id}`;
    try {
      return this.apiService.getPatchApiResponse(url,{})
    } catch (error) {
      throw error;
    }
  }
  async approveTask(id,payload) {
    const url = `${this.appUrl.taskHistoryEndPoint}/${id}`;
    try {
      return this.apiService.getPostApiResponse(url,payload);
    } catch (error) {
      throw error;
    }
  }
  async fetchCheckList(duration) {
    const url = `${this.appUrl.checklistEndPoint}?maintenanceDuration=${duration}`;
    try {
      return this.apiService.getGetApiResponse(url);
    } catch (error) {
      throw error;
    }
  }

}
