import { api } from "./api";

export const authService = {
  async register(payload) {
    const { data } = await api.post("/auth/register/", payload);
    return data;
  },
  async login(payload) {
    const { data } = await api.post("/auth/login/", payload);
    return data;
  },
  async me() {
    const { data } = await api.get("/auth/me/");
    return data;
  },
  async forgotPassword(payload) {
    const { data } = await api.post("/auth/forgot-password/", payload);
    return data;
  },
  async resetPassword(payload) {
    const { data } = await api.post("/auth/reset-password/", payload);
    return data;
  },
  async adminUsers() {
    const { data } = await api.get("/admin/users/");
    return data;
  },
};
