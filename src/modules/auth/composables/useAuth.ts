import { type Ref, ref } from "vue";
import checkAuthService from "../services/checkAuth";

interface UseAuth {
  authData: Ref<AuthData>;
  setAuth: (userId: string) => void;
  checkAuth: () => void;
}

interface AuthData {
  isAuth: boolean;
}

function useAuth(): UseAuth {
  const authData = ref<AuthData>({ isAuth: false });

  const setAuth = (userId: string) => {
    authData.value = { isAuth: true };

    window.localStorage.setItem("userId", userId);
  };

  const checkAuth = async () => {
    const userId = window.localStorage.getItem("userId");

    if (!userId) {
      authData.value = { isAuth: false };

      return;
    }

    console.log(userId);

    await checkAuthService({ userId });
  };

  return { authData, setAuth, checkAuth };
}

export default useAuth;
