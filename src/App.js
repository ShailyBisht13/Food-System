import FoodAnalyzer from "./components/FoodAnalyzer";
import CalorieBurn from "./components/CalorieBurn";
import HydrationTracker from "./components/HydrationTracker";
import DietMode from "./components/DietMode";
import "./App.css";

function App() {
  return (
    <div className="container">
      <h1>AI Smart Nutrition Assistant</h1>

      <FoodAnalyzer />
      <CalorieBurn />
      <HydrationTracker />
      <DietMode />
    </div>
  );
}

export default App;