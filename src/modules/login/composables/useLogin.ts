import { AxiosError, type AxiosResponse } from "axios";
import { type Ref, ref } from "vue";

import login from "../services/login";

interface UseLogin {
  submit: (body: LoginBody) => Promise<{ userId: string } | undefined>;
  errors: Ref<Errors>;
}

interface Errors {
  [x: string]: string;
}

interface LoginBody {
  username: string;
  password: string;
}

function useLogin(): UseLogin {
  const errors = ref<Errors>({});

  const submit = async (body: LoginBody) => {
    errors.value = {};

    try {
      const success: AxiosResponse = await login(body);

      if (success.status === 200) {
        return {
          userId: success.data.data.userId,
        };
      }
    } catch (error) {
      if (error instanceof AxiosError && error.status === 400) {
        const data: ResponseError = error.response?.data,
          errorMessage = data.msg,
          errorsArray = data.errors;

        errors.value.form = errorMessage;

        if (errorsArray) {
          errorsArray.forEach((error) => {
            errors.value[error.property!] = error.message;
          });
        }

        return;
      }

      console.log("Iternal error");
    }
  };

  return { errors, submit };
}

export default useLogin;
