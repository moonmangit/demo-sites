export const useMyDemo2NavStore = defineStore("demo2Nav", () => {
  const active = ref(false);

  function open() {
    active.value = true;
    document.body.style.overflow = "hidden";
  }
  function close() {
    active.value = false;
    document.body.style.overflow = "auto";
  }

  return {
    active,
    open,
    close,
  };
});
