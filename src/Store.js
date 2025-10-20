import { create } from "zustand";

const useStore = create((set) => ({
  masterpieces: [],
  testimonials: [],
  setMasterpieces: (masterpieces) => set((state) => ({ masterpieces })),
  setTestimonials: (testimonials) => set((state) => ({ testimonials })),
}));

export default useStore;
