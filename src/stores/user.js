import { ref } from 'vue';
import { defineStore } from 'pinia';

export const useUserStore = defineStore('user', () => {
  const user = ref(null);
  const role = ref(null);

  const setUser = (_user) => {
    user.value = _user;
  };

  const setRole = (_role) => {
    role.value = _role;
  };

  const clearUser = () => {
    user.value = null;
    role.value = null;
  };

  return { user, role, setUser, setRole, clearUser };
});