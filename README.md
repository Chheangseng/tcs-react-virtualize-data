# tcs-react-virtualize-data

## Overview
`useVirtualizeData` is a custom React hook that efficiently paginates large datasets by managing virtualized data rendering. It allows you to control how many pages are stored and displayed at a time.

## Installation

To use this hook in your project, install it via npm:

```sh
npm install your-package-name
```

or via yarn:

```sh
yarn add your-package-name
```

## Usage

### Importing the Hook

```tsx
import useVirtualizeData from 'your-package-name';
```

### Example Usage

```tsx
import React, { useState } from 'react';
import useVirtualizeData from 'your-package-name';

const MyComponent = () => {
  const [movies, setMovies] = useState<MovieInterface[]>([/* your data here */]);
  
  const { data, goNext, goBack } = useVirtualizeData({
    data: movies,
    storeAmountOfPages: 2, // Number of pages to keep in memory
    itemsPerPage: 30, // Number of items per page
  });

  return (
    <div>
      <button onClick={goBack}>Previous</button>
      <button onClick={goNext}>Next</button>
      <ul>
        {data.map((item, index) => (
          <li key={index}>{JSON.stringify(item)}</li>
        ))}
      </ul>
    </div>
  );
};

export default MyComponent;
```

## API

### Parameters
| Parameter         | Type      | Default | Description |
|------------------|----------|---------|-------------|
| `data`          | `T[]`    | `[]`    | The dataset to paginate |
| `itemsPerPage`  | `number` | `30`    | Number of items per page |
| `storeAmountOfPages` | `number` | `2` | Number of pages to store in memory |

### Returned Values
| Value          | Type          | Description |
|---------------|--------------|-------------|
| `data`       | `T[]`        | The paginated subset of the dataset |
| `goNext`     | `() => void` | Function to load the next page |
| `goBack`     | `() => void` | Function to load the previous page |

## Notes
- The hook maintains `storeAmountOfPages` in memory, allowing smooth transitions between pages.
- `goNext` and `goBack` handle pagination but won't go beyond the dataset limits.




