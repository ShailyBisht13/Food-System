import { useState } from "react";

function DietMode(){

const [mode,setMode] = useState("");
const [diet,setDiet] = useState("");

function suggest(){

if(mode==="malnutrition"){

setDiet("Milk, Eggs, Sattu, Peanuts, Chickpeas");

}
else{

setDiet("Salad, Fruits, Oats, Ragi, Vegetables");

}

}

return(

<div className="card">

<h2>Nutrition Mode</h2>

<select onChange={(e)=>setMode(e.target.value)}>

<option value="">Select Mode</option>

<option value="malnutrition">
Malnutrition Support
</option>

<option value="obesity">
Obesity Control
</option>

</select>

<button onClick={suggest}>
Get Diet
</button>

<p>{diet}</p>

</div>

)

}

export default DietMode;