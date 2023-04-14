import create from "zustand";
type Store = {
  count: number;
  setCount: () => void;
  ala?: string;
};
const useCountStore = create<Store>(set => ({
  count: 0,
  setCount() {
    set(state => ({ count: state.count + 1 }));
  },
}));
export default useCountStore;
