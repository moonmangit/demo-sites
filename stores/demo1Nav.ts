export const useDemo1Nav = defineStore("demo1Nav", () => {
  const active = ref(false);

  function open() {
    active.value = true;
    document.body.style.overflow = "hidden";
  }
  function close() {
    active.value = false;
    document.body.style.overflow = "";
  }

  function $reset() {
    active.value = false;
  }

  return {
    active,
    open,
    close,
    $reset,
  };
});
