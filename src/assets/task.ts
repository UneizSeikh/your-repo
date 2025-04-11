
// Reset/Clear localStorage Manually
// You can clear all persisted Redux state with a simple function:

// 👉 Option 1: Programmatic reset (inside a button or useEffect)


// import { persistor } from './redux/store';

// const clearLocalStorage = () => {
//   persistor.purge(); // clears the persisted state
// };

// <button onClick={clearLocalStorage}>Clear Redux Storage</button>


// 🔥 Bonus: If you also want to clear localStorage directly:


// localStorage.clear(); // but this clears everything!