# tcs-react-virtualize-data

**tcs-react-virtualize-data** is a React library for efficiently rendering large datasets by virtualizing and loading data piece by piece. It ensures optimal performance by rendering only the visible data and dynamically loading more when function are called.

---

## 📌 Features

- ⚡ **Efficient Virtualization** – Renders only visible data to improve performance.
- 📊 **Handles Large Datasets** – Load data dynamically as users scroll.
- 🔄 **Optimized Rendering** – Reduces DOM updates for a smoother experience.
- 🛠 **Easy Integration** – Simple setup with React.

---

## 📦 Installation

Install the package via npm or yarn:

```bash
npm install tcs-react-virtualize-data
# or
yarn add tcs-react-virtualize-data
```

---
## 🚀 Usage

Import and use the hook in your React project:

```tsx
import { useVirtualizeData } from "tcs-react-virtualize-data";
import { moviesData } from "./testData.tsx";
import { Waypoint } from "react-waypoint";
import YourItem from "./MovieItem.tsx";

export default function MyComponent() {
    // Using useVirtualizeData to handle virtualized pagination
    const {
        data: items,  // The currently visible items based on pagination
        goNext,       // Function to load the next page of data
        goBack,       // Function to load the previous page of data
    } = useVirtualizeData({
        data: moviesData,      // Large dataset to be virtualized
        itemsPerPage: 30,      // Number of items per page (Optional, defaults to 30)
        storeAmountOfPages: 2, // How many pages to keep in memory (Optional, defaults to 2)
    });

    return (
        <div>
            {/* Rendering virtualized items */}
            {items.map((value, index, array) => (
                <ItemWithReactWayPoint
                    key={value.id}
                    item={value}
                    onScrollButton={goNext}   // Triggered when scrolling down
                    onScrollTop={goBack}      // Triggered when scrolling up
                    haveWayPoint={index === 0 || index === array.length - 1}
                    // Add Waypoint to first & last items
                />
            ))}
        </div>
    );
}

/**
 * Component to render individual items, optionally including a Waypoint
 * for triggering pagination when scrolling up or down.
 */
function ItemWithReactWayPoint({
                                   haveWayPoint,  // Boolean to determine if Waypoint should be added
                                   onScrollTop,   // Function to call when scrolling upwards
                                   onScrollButton, // Function to call when scrolling downwards
                                   item,          // The individual data item to render
                               }: {
    haveWayPoint: boolean;
    onScrollTop?: () => void;
    onScrollButton?: () => void;
    item: any;
}) {
    if (haveWayPoint) {
        return (
            <Waypoint
                onEnter={(args) => {
                    // Load the next set of data when reaching the bottom
                    if (args.previousPosition === "below" && onScrollButton) {
                        onScrollButton();
                    }
                    // Load previous data when reaching the top
                    if (args.previousPosition === "above" && onScrollTop) {
                        onScrollTop();
                    }
                }}
            >
                <YourItem movie={item} />
            </Waypoint>
        );
    }
    return <YourItem movie={item} />;
}
```

## ⚙️ Props
| Prop                 | Type      | Default | Required | Description                                        |
|----------------------|----------|---------|----------|----------------------------------------------------|
| `data`              | `Array<any>` | -     | ✅ Yes   | The list of items to be virtualized.              |
| `itemsPerPage`      | `number`  | `30`    | ❌ No    | Number of items to display per page.              |
| `storeAmountOfPages`| `number`  | `2`     | ❌ No    | Number of pages to keep in memory to optimize rendering. |

## ✨ Why Use `tcs-react-virtualize-data`?
- 🏎 **Boosts Performance**: Reduces DOM nodes for large lists.
- 🔄 **Dynamic Loading**: Supports paginated & lazy loading.
- ⚙️ **Customizable**: Easily adapt to different UI needs.

## 📜 License
MIT License © [Taing chheangseng](https://github.com/Chheangseng)

---

🚀 **Contributions & Issues**  
Have a suggestion or found a bug? Feel free to [open an issue](https://github.com/Chheangseng/tcs-react-virtualize-data/issues) or contribute!
```

### 🔥 **What's Improved?**
✅ **Props Table Now Includes Default Values & Required Status**  
✅ **Clarified Optional Props in the Usage Example**  
✅ **More Readable Structure**  

Let me know if you need further tweaks! 🚀