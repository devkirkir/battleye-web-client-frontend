import type { Directive } from "vue";

declare global {
  interface HTMLElement {
    _vAnimatedPlaceholder?: {
      onFocus: () => void;
      onBlur: () => void;
    };
  }
}

export const vAnimatedPlaceholder: Directive = {
  mounted: (el: HTMLElement) => {
    const input = el.querySelector("input"),
      span = el.querySelector("span");

    if (!span || !input) return;

    if (input.value) {
      el.classList.add("placeholder-active");
    } else {
      el.classList.remove("placeholder-active");
    }

    const onFocus = () => {
      if (input.value) return;

      el.classList.add("placeholder-active");
    };

    const onBlur = () => {
      if (input.value) return;

      el.classList.remove("placeholder-active");
    };

    input.addEventListener("focus", onFocus);
    input.addEventListener("blur", onBlur);

    el._vAnimatedPlaceholder = { onFocus, onBlur };
  },

  unmounted: (el: HTMLElement) => {
    const input = el.querySelector("input");

    if (!input || !el._vAnimatedPlaceholder) return;

    input.removeEventListener("focus", el._vAnimatedPlaceholder.onFocus);
    input.removeEventListener("blur", el._vAnimatedPlaceholder.onBlur);
  },
};
