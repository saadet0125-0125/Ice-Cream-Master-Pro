"use client";

import { useState } from "react";

export default function RecipePage() {

  const [ingredients,setIngredients] = useState([
    {name:"Süt",kg:1100},
    {name:"Şeker",kg:260},
    {name:"Yağsız Süt Tozu",kg:112.5},
    {name:"Glikoz",kg:100}
  ]);

  const [name,setName]=useState("");
  const [kg,setKg]=useState("");

  function addIngredient(){

    if(name && kg){

      setIngredients([
        ...ingredients,
        {
          name:name,
          kg:Number(kg)
        }
      ]);

      setName("");
      setKg("");

    }

  }

  const totalKg = ingredients.reduce(
    (toplam,item)=>toplam+item.kg,0
  );


return (

<main style={{padding:30,fontFamily:"Arial"}}>

<h1>🍦 Ice Cream Master Pro</h1>

<h2>🧪 Reçete Oluşturucu</h2>

<hr/>

<input
placeholder="Hammadde adı"
value={name}
onChange={(e)=>setName(e.target.value)}
/>


<input
placeholder="kg"
value={kg}
onChange={(e)=>setKg(e.target.value)}
/>


<button onClick={addIngredient}>
+ Ekle
</button>


<h3>Reçete İçeriği</h3>


<table border={1} cellPadding={10}>

<thead>
<tr>
<th>Hammadde</th>
<th>Kg</th>
</tr>
</thead>


<tbody>

{
ingredients.map((item,index)=>(

<tr key={index}>
<td>{item.name}</td>
<td>{item.kg}</td>
</tr>

))
}

</tbody>

</table>


<h3>
Toplam Karışım: {totalKg} kg
</h3>


</main>

)

}
