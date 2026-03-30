import { create } from "zustand";
import { persist } from "zustand/middleware";

const zustand = create(
  persist(
    (set) => ({
      user: null,
      doctor: null,
      userid: null,

      setid: (userId) => set({ userid: userId }),
      setUser: (userData) => set({ user: userData }),
      setDoctor: (doctorData) => set({ doctor: doctorData }),
    }),
    {
      name: "user-store",
    },
  ),
);
export default zustand;
