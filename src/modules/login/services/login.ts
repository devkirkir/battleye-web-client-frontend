import api from "@core/services";

interface Body {
  username: string;
  password: string;
}

export default (body: Body) => {
  return api({
    url: "/auth/login",
    method: "post",
    data: body,
    withCredentials: true,
    headers: {
      "Content-Type": "application/json",
    },
  });
};
