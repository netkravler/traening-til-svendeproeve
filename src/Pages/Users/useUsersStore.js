import create from "zustand";
import { persist } from "zustand/middleware";

export const useUsersStore = create(
  persist(
    (set, get) => ({
      users: [],
      
      setUsers: (users) => set(() => ({ users: [...users] })),
      getUser: (slug) => {
        const result = get().users.find((user) => user.slug === slug);
        return result;
      },
    }),
    { name: "users", getStorage: () => localStorage }
  )
);
