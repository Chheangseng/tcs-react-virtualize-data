# tcs-react-virtualize-data

🚀 **Effortlessly Render Large Datasets Without Slowing Down Your UI!**

**tcs-react-virtualize-data** is a lightweight React library that **renders only visible items**, improving performance **without affecting your UI**. It works seamlessly with tables, grids, lists, and more.

---

## 🤔 Why Use `tcs-react-virtualize-data`?

- **🎨 UI-Friendly** – Works with any existing design.
- **⚡ Faster Rendering** – Minimizes DOM updates for smooth performance.
- **🚀 Virtualized Loading** – Renders only visible items for efficiency.
- **📋 Universal Support** – Compatible with lists, tables, and grids.
- **🏎 High Performance** – Optimized for large datasets.
- **⚙️ Fully Customizable** – Adapts to different UI needs.

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
        data: moviesData,      // Large dataset
        itemsPerPage: 30,      // Items per page (default: 30)
        storeAmountOfPages: 2, // Pages kept in memory (default: 2)
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
                                   haveWayPoint,  
                                   onScrollTop,  
                                   onScrollButton, 
                                   item, 
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