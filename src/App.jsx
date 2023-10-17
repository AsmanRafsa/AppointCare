import Router from "./components/Router";
import StateProvider from "./context/state";
function App() {
  return (
    <StateProvider>
      <Router />
    </StateProvider>
  );
}

export default App;
