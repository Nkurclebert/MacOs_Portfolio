import { locations } from "#constants";
import { create } from "zustand";

import { immer } from "zustand/middleware/immer";

const DEFAULT_LOCATION = locations.work;

// Immer middleware for immutable state updates
const useLocationStore = create(
  immer((set) => ({
    activeLocation: DEFAULT_LOCATION,

    setActiveLocation: (location = null) =>
      // If location is null, set to default location
      set((state) => {
        state.activeLocation = location;
      }),

    // Reset to default location
    resetActiveLocation: () =>
      set((state) => {
        state.activeLocation = DEFAULT_LOCATION;
      }),
  }))
);

export default useLocationStore;
