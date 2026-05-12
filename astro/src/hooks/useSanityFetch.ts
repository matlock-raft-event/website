import { useEffect, useState } from "react";

import { sanityClient } from "~/lib/sanity";

type FetchState<T> = {
  data: T | null;
  loading: boolean;
  error: Error | null;
};

const useSanityFetch = <T>(query: string, params?: Record<string, unknown>): FetchState<T> => {
  const [state, setState] = useState<FetchState<T>>({
    data: null,
    loading: true,
    error: null
  });

  useEffect(() => {
    let cancelled = false;
    sanityClient
      .fetch<T>(query, params ?? {})
      .then(data => {
        if (!cancelled) setState({ data, loading: false, error: null });
      })
      .catch((error: Error) => {
        if (!cancelled) setState({ data: null, loading: false, error });
      });
    return () => {
      cancelled = true;
    };
  }, [query, JSON.stringify(params)]);

  return state;
};

export default useSanityFetch;
