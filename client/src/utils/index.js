export class Utils {
  getFormattedDate(createdAt) {
    const date = new Date(createdAt);
    const options = { day: "2-digit", month: "2-digit", year: "2-digit" };
    return date.toLocaleDateString("en-GB", options);
  }
}
