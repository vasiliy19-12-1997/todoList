import { strict } from "assert";
import { useState } from "react";

export const useFetching = (callback: () => void) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState("");
  const fetching = async (...args: string[]) => {
    try {
      setIsLoading(true);
      await callback();
    } catch (error: any) {
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  };
  return [fetching, isLoading, error];
};
