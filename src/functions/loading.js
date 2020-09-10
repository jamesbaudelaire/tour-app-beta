import React, { useRef, useEffect } from "react";

export const useLoading = () => {
  const el = useRef();
  useEffect(() => {
    if (el.current) {
      let { current } = el;
      current.classList.add("loaded");
    }
  });
  return { ref: el };
};
