import { create } from 'zustand'
import { devtools } from 'zustand/middleware'
import { immer } from 'zustand/middleware/immer'

export const useStore = create(
  devtools(
    immer((set, get) => ({
      onHover: {},
      setOnHover: (value) => {
        set({ onHover: value })
        console.log(get().onHover);
      },
    })),
  ),
)
