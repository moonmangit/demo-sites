export const useApplyAnimation = (
  target: MaybeRef<HTMLElement | null>,
  options?: {
    clearAnimationAfterMs?: number;
    threshold?: number;
  }
) => {
  const applyAnimation = ref(false);

  useIntersectionObserver(
    target,
    ([entry], observer) => {
      if (entry.isIntersecting) {
        applyAnimation.value = true;
        observer.unobserve(entry.target);

        if (options?.clearAnimationAfterMs) {
          setTimeout(() => {
            const children = entry.target.querySelectorAll("*");
            for (let i = 0; i < children.length; i++) {
              const child = children[i];
              child.className = child.className
                .split(" ")
                .filter((c) => !c.startsWith("animate__") && c !== "opacity-0")
                .join(" ");
            }
          }, options.clearAnimationAfterMs);
        }
      }
    },
    {
      threshold: options?.threshold || 0.2,
    }
  );

  return {
    applyAnimation: computed(() => applyAnimation.value),
  };
};
