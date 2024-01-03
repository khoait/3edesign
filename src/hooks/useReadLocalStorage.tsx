import { useCallback, useEffect, useState } from "react";
import { useEventListener } from "usehooks-ts";

export function useReadLocalStorage(key: string): string | null {
  const readValue = useCallback((): string | null => {
    if (typeof window === "undefined") {
      return null;
    }

    try {
      const item = window.localStorage.getItem(key);
      return item ? item : null;
    } catch (error) {
      console.warn(`Error reading localStorage key “${key}”:`, error);
      return null;
    }
  }, [key]);

  const [storedValue, setStoredValue] = useState<string | null>(readValue);

  useEffect(() => {
    setStoredValue(readValue());
  }, []);

  const handleStorageChange = useCallback(
    (event: StorageEvent | CustomEvent) => {
      if ((event as StorageEvent)?.key && (event as StorageEvent).key !== key) {
        return;
      }
      setStoredValue(readValue());
    },
    [key, readValue],
  );

  // this only works for other documents, not the current one
  useEventListener("storage", handleStorageChange);

  // this is a custom event, triggered in writeValueToLocalStorage
  // See: useLocalStorage()
  useEventListener("local-storage", handleStorageChange);

  return storedValue;
}
