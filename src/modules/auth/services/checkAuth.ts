import api from "@/core/services";

export default (body: { userId: string }) => {
  return api("/auth/check", {
    method: "post",
    data: body,
  });
};
