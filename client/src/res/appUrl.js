export class AppUrl {
  constructor() {
    this.baseUrl = !true
      ? "https://job-check-list-backedn.vercel.app/api/v1"
      : "http://localhost:1010/api/v1";
    this.authEndPoint = `${this.baseUrl}/auth`;
    this.addWorkerEndPoint = `${this.baseUrl}/auth/signup`;
    this.workerListEndPoint = `${this.baseUrl}/users`;
    this.assignedTaskEndPoint = `${this.baseUrl}/assignedtasks`;
    this.taskHistoryEndPoint = `${this.baseUrl}/tasks/history`;
    this.checklistEndPoint = `${this.baseUrl}/checklist`;
  }
}
