import {useCallback, useMemo, useState} from 'react';

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
    }, [data, itemsPerPage]);

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

    const goNext = useCallback(() => {
        if (!canGoNext) return;
        setViewPages(prevState => prevState.map(value => value + 1));
    }, [canGoNext, setViewPages]);

    const goBack = useCallback(() => {
        if (!canGoBack) return;
        setViewPages(prevState => prevState.map(value => value - 1));
    }, [canGoBack, setViewPages]);

    const reset = useCallback(() => {
        setViewPages(
            Array.from({length: storeAmountOfPages}, (_, index) => index + 1),
        );
    }, [storeAmountOfPages]);

    return {data: paginatedData, goNext, goBack, reset};
}