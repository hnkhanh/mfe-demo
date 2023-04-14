type Store = {
    count: number;
    setCount: () => void;
};
declare const useCountStore: import("zustand").UseBoundStore<import("zustand").StoreApi<Store>>;
export default useCountStore;
