import { useState } from "react";

function FoodAnalyzer() {

const [result,setResult] = useState("");

function analyzeFood(){
setResult("Estimated Calories: 450 kcal (AI demo)");
}

return(

<div className="card">

<h2>Food Photo Analyzer</h2>

<input type="file" />

<button onClick={analyzeFood}>
Analyze Food
</button>

<p>{result}</p>

</div>

)

}

export default FoodAnalyzer;