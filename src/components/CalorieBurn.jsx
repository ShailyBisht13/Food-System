import { useState } from "react";

function CalorieBurn(){

const [steps,setSteps] = useState(0);
const [burn,setBurn] = useState(0);

function calculate(){

let calories = steps * 0.04;

setBurn(calories.toFixed(2));

}

return(

<div className="card">

<h2>Calorie Burn Meter</h2>

<input
type="number"
placeholder="Enter steps"
onChange={(e)=>setSteps(e.target.value)}
/>

<button onClick={calculate}>
Calculate
</button>

<p>Calories Burned: {burn}</p>

</div>

)

}

export default CalorieBurn;