import {useMemo, useState} from 'react';

export default function useVirtualizeData<T>({
  data = [],
  storeAmountOfPages = 2,
  itemsPerPage = 30,
}: {
  data: T[];
  itemsPerPage?: number;
  storeAmountOfPages?: number;
}) {
  const [viewPages, setViewPages] = useState(() => {
    return Array.from({
      length: storeAmountOfPages,
    }).map((_value, index) => index + 1);
  });

  const totalPages = useMemo(() => {
    return Math.ceil(data.length / itemsPerPage);
  }, [data]);

  const paginatedData = useMemo(() => {
    let result: T[] = [];
    for (const page of viewPages) {
      const startIndex = (page - 1) * itemsPerPage;
      result = result.concat(data.slice(startIndex, startIndex + itemsPerPage));
    }
    return result;
  }, [data, viewPages, itemsPerPage]);

  const canGoNext = viewPages[viewPages.length - 1] < totalPages;
  const canGoBack = viewPages[0] > 1;

  function goNext() {
    if (!canGoNext) return;
    setViewPages(prevState => prevState.map(value => value + 1));
  }

  function goBack() {
    if (!canGoBack) return;
    setViewPages(prevState => prevState.map(value => value - 1));
  }

  return {data: paginatedData, goNext, goBack};
}
