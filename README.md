# `use-virtualize-data`

A custom React hook for virtualizing and paginating large datasets efficiently. This hook allows you to manage and display large datasets in chunks (pages) without loading the entire dataset into memory at once.

## Installation

You can install the package via npm:

```bash
npm install use-virtualize-data
```

## Usage

### Importing the Hook

```javascript
import useVirtualizeData from 'use-virtualize-data';
```

### Basic Example

```javascript
import React from 'react';
import useVirtualizeData from 'use-virtualize-data';

const MyComponent = () => {
  const largeDataSet = Array.from({ length: 1000 }, (_, index) => `Item ${index + 1}`);

  const { data, goNext, goBack } = useVirtualizeData({
    data: largeDataSet,
    itemsPerPage: 30,
    storeAmountOfPages: 2,
  });

  return (
    <div>
      <ul>
        {data.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <button onClick={goBack} disabled={!canGoBack}>
        Previous
      </button>
      <button onClick={goNext} disabled={!canGoNext}>
        Next
      </button>
    </div>
  );
};

export default MyComponent;
```

### Parameters

- `data` (required): The array of data you want to virtualize.
- `itemsPerPage` (optional, default: `30`): The number of items to display per page.
- `storeAmountOfPages` (optional, default: `2`): The number of pages to keep in memory at once.

### Return Values

- `data`: The paginated subset of the original data that should be displayed.
- `goNext`: A function to navigate to the next set of pages.
- `goBack`: A function to navigate to the previous set of pages.

### Example with Custom Items Per Page

```javascript
const { data, goNext, goBack } = useVirtualizeData({
  data: largeDataSet,
  itemsPerPage: 50,
  storeAmountOfPages: 3,
});
```

### Example with Dynamic Data

```javascript
const dynamicDataSet = fetchDataFromAPI(); // Assume this fetches data from an API

const { data, goNext, goBack } = useVirtualizeData({
  data: dynamicDataSet,
  itemsPerPage: 20,
  storeAmountOfPages: 2,
});
```


## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## Support

If you encounter any issues or have questions, please open an issue on the [GitHub repository](https://github.com/your-repo/use-virtualize-data).

---

This README provides a basic overview of how to use the `use-virtualize-data` hook. You can customize it further based on your specific needs and additional features you might want to highlight.