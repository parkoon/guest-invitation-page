import { useCallback, useState } from "react";

export default function useCopyToClipboard(): [
  string,
  (value: string) => void
] {
  const [state, setState] = useState("");

  const copyToClipboard = useCallback((value: string) => {
    const handleCopy = async () => {
      try {
        if (navigator?.clipboard?.writeText) {
          await navigator.clipboard.writeText(value);
          setState(value);
        } else {
          throw new Error("writeText not supported");
        }
      } catch (e) {
        setState(value);
      }
    };

    handleCopy();
  }, []);

  return [state, copyToClipboard];
}
