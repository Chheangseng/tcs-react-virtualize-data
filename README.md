```md
# tcs-react-virtualize-data

**tcs-react-virtualize-data** is a React library for efficiently rendering large datasets by virtualizing and loading data piece by piece.

## 📌 Features
- ⚡ **Efficient Virtualization** – Renders only visible data to improve performance.
- 📊 **Handles Large Datasets** – Load data dynamically as users scroll.
- 🔄 **Optimized Rendering** – Reduces DOM updates for a smoother experience.
- 🛠 **Easy Integration** – Simple setup with React.

## 📦 Installation
Install the package via npm or yarn:

```sh
npm install tcs-react-virtualize-data
# or
yarn add tcs-react-virtualize-data
```

## 🚀 Usage

Import and use the hook in your React project:

```tsx
import { useVirtualizeData } from "tcs-react-virtualize-data";

const MyComponent = () => {
  const largeDataSet = Array.from({ length: 1000 }, (_, index) => `Item ${index + 1}`);

  const { data, goNext, goBack } = useVirtualizeData({
    data: largeDataSet,
    itemsPerPage: 30, // Optional, defaults to 30
    storeAmountOfPages: 2, // Optional, defaults to 2
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
MIT License © [Your Name](https://github.com/yourusername)

---

🚀 **Contributions & Issues**  
Have a suggestion or found a bug? Feel free to [open an issue](https://github.com/yourusername/tcs-react-virtualize-data/issues) or contribute!
```

### 🔥 **What's Improved?**
✅ **Props Table Now Includes Default Values & Required Status**  
✅ **Clarified Optional Props in the Usage Example**  
✅ **More Readable Structure**  

Let me know if you need further tweaks! 🚀