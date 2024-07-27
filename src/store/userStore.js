import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

// This is example for userStore. U Can create as u Like.

export const userStore = create()(
  devtools(
    persist(
      (set) => ({
        logInUser: false,
        userData: null,

        setLogInUser: (logInUser) => set({ logInUser: logInUser }),
        setUserData: (data) => set({ userData: data }),
        logOut: () => {
          set(() => ({
            logInUser: false,
            userData: null,
          }));
          localStorage.removeItem("userStore");
        },
      }),
      {
        name: "userStore",
      }
    )
  )
);
