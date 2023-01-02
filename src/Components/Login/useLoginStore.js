import create from "zustand";
import { persist } from "zustand/middleware";
import useFlashMessageStore from "../FlashMessages/useFlashMessageStore";


export const useLoginStore = create(
  persist(
    (set) => ({
      loggedIn: false,
      userName: "",
      access_token: "",
      userInfo: "",
      setLoggedIn: (loggedIn, userInfo, userName, token) =>
        set((state) => {
          useFlashMessageStore.getState().setFlashMessage("Du er logged in");
          return { ...state, loggedIn, userInfo, userName, token };
        }),
      setLogOut: () =>
        set(() => {
          useFlashMessageStore.getState().setFlashMessage("du er logged ud");
          return { loggedIn: false, userInfo: "", userName: "", token: "" };
        }),
    }),
    { name: "token", getStorage: () => localStorage }
  )
);
