"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = useVirtualizeData;
const react_1 = require("react");
function useVirtualizeData({ data = [], storeAmountOfPages = 2, itemsPerPage = 30, }) {
    const [viewPages, setViewPages] = (0, react_1.useState)(() => {
        return Array.from({
            length: storeAmountOfPages,
        }).map((_value, index) => index + 1);
    });
    const totalPages = (0, react_1.useMemo)(() => {
        return Math.ceil(data.length / itemsPerPage);
    }, [data]);
    const paginatedData = (0, react_1.useMemo)(() => {
        let result = [];
        for (const page of viewPages) {
            const startIndex = (page - 1) * itemsPerPage;
            result = result.concat(data.slice(startIndex, startIndex + itemsPerPage));
        }
        return result;
    }, [data, viewPages, itemsPerPage]);
    const canGoNext = viewPages[viewPages.length - 1] < totalPages;
    const canGoBack = viewPages[0] > 1;
    function goNext() {
        if (!canGoNext)
            return;
        setViewPages(prevState => prevState.map(value => value + 1));
    }
    function goBack() {
        if (!canGoBack)
            return;
        setViewPages(prevState => prevState.map(value => value - 1));
    }
    return { data: paginatedData, goNext, goBack };
}
