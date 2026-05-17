import { api } from "./api";

export const reportService = {
  async summary(period) {
    const { data } = await api.get("/reports/", { params: { period } });
    return data;
  },
  async downloadPdf(period) {
    const response = await api.get("/reports/pdf/", {
      params: { period },
      responseType: "blob",
    });
    const url = window.URL.createObjectURL(new Blob([response.data]));
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", `expense-report-${period}.pdf`);
    document.body.appendChild(link);
    link.click();
    link.remove();
    window.URL.revokeObjectURL(url);
  },
};
