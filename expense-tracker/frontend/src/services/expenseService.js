import { api } from "./api";

export const expenseService = {
  async list(params = {}) {
    const { data } = await api.get("/expenses/", { params });
    return data;
  },
  async create(payload) {
    const { data } = await api.post("/expenses/", payload);
    return data;
  },
  async update(id, payload) {
    const { data } = await api.put(`/expenses/${id}/`, payload);
    return data;
  },
  async remove(id) {
    await api.delete(`/expenses/${id}/`);
  },
  async stats(params = {}) {
    const { data } = await api.get("/expenses/stats/", { params });
    return data;
  },
  async meta() {
    const { data } = await api.get("/expenses/meta/");
    return data;
  },
};
