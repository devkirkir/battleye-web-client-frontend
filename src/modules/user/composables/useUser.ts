import type { Ref } from "vue";
import { ref } from "vue";

interface UseUser {
  user: Ref<User>;
  setUser: (data: User) => void;
}

interface User {
  userId: string | null;
}

function useUser(): UseUser {
  const user = ref<User>({
    userId: null,
  });

  const setUser = (data: User) => {
    user.value = data;
  };

  return { user, setUser };
}

export default useUser;
