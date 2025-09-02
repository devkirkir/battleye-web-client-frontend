import type { Ref } from "vue";
import { ref } from "vue";

interface UseUser {
  setUserData: (data: UserData) => void;
  userData: Ref<UserData>;
}

interface UserData {
  isAuth: boolean;
  userId: string | null;
}

function useUser(): UseUser {
  const userData = ref<UserData>({
    isAuth: false,
    userId: null,
  });

  const setUserData = (data: UserData) => {
    userData.value = data;
  };

  return { userData, setUserData };
}

export default useUser;
