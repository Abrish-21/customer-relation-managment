import { useReducedMotion } from "framer-motion";

export function useReducedMotionSafe() {
  try {
    return useReducedMotion();
  } catch {
    return false;
  }
}
