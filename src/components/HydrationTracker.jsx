import { useState } from "react";

function HydrationTracker(){

const goal = 2500;

const [water,setWater] = useState(0);

let remaining = goal - water;

return(

<div className="card">

<h2>Hydration Tracker</h2>

<input
type="number"
placeholder="Water in ml"
onChange={(e)=>setWater(e.target.value)}
/>

<p>Remaining Goal: {remaining} ml</p>

</div>

)

}

export default HydrationTracker;