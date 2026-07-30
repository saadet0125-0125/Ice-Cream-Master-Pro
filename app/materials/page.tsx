"use client";

import { useState } from "react";

type Material = {
  name:string;
  category:string;
  type:string;
  batchTracking:string;
  analysisRequired:string;
  fat:string;
  protein:string;
  lactose:string;
  water:string;
  msnf:string;
  density:string;
  ph:string;
  antibiotic:string;
  supplier:string;
  cost:string;
  pac:string;
  pod:string;
};


export default function MaterialsPage(){

const [materials,setMaterials]=useState<Material[]>([]);


const [form,setForm]=useState({

name:"",
type:"Değişken",
batchTracking:"Evet",
analysisRequired:"Evet",

fat:"",
protein:"",
lactose:"",
water:"",
msnf:"",
density:"",
ph:"",
antibiotic:"Yok",

supplier:"",
cost:""

});



function categoryFinder(name:string){

const n=name.toLowerCase();


if(
n.includes("süt") ||
n.includes("krema") ||
n.includes("toz")
)
return "Süt Ürünleri";


if(
n.includes("şeker") ||
n.includes("glikoz") ||
n.includes("dekstroz")
)
return "Şeker";


if(
n.includes("salep") ||
n.includes("gam") ||
n.includes("kitre")
)
return "Stabilizatör";


return "Diğer";

}



function calculatePAC(){

return (Number(form.lactose || 0)*1.9).toFixed(2);

}


function calculatePOD(){

return (Number(form.lactose || 0)*1).toFixed(2);

}



function save(){


const newMaterial={

...form,

category:
categoryFinder(form.name),

pac:
calculatePAC(),

pod:
calculatePOD()

};


setMaterials([
...materials,
newMaterial
]);


}



return (

<main style={{padding:30}}>

<h1>🍦 Ice Cream Master Pro</h1>

<h2>📚 Hammadde Veritabanı</h2>


<hr/>


<h3>Yeni Hammadde Kartı</h3>


<input placeholder="Hammadde adı"
onChange={(e)=>setForm({...form,name:e.target.value})}
/>


<br/>


<label>Hammadde Tipi</label>

<select
onChange={(e)=>setForm({...form,type:e.target.value})}
>

<option>Değişken</option>
<option>Sabit</option>

</select>



<br/>


<label>Parti Takibi</label>

<select
onChange={(e)=>setForm({...form,batchTracking:e.target.value})}
>

<option>Evet</option>
<option>Hayır</option>

</select>



<br/>


<label>Analiz Zorunluluğu</label>

<select
onChange={(e)=>setForm({...form,analysisRequired:e.target.value})}
>

<option>Evet</option>
<option>Hayır</option>

</select>


<br/><br/>


<input placeholder="Yağ %"
onChange={(e)=>setForm({...form,fat:e.target.value})}
/>


<input placeholder="Protein %"
onChange={(e)=>setForm({...form,protein:e.target.value})}
/>


<input placeholder="Laktoz %"
onChange={(e)=>setForm({...form,lactose:e.target.value})}
/>


<input placeholder="Su %"
onChange={(e)=>setForm({...form,water:e.target.value})}
/>


<input placeholder="MSNF %"
onChange={(e)=>setForm({...form,msnf:e.target.value})}
/>


<input placeholder="Density"
onChange={(e)=>setForm({...form,density:e.target.value})}
/>


<input placeholder="pH"
onChange={(e)=>setForm({...form,ph:e.target.value})}
/>


<input placeholder="Tedarikçi"
onChange={(e)=>setForm({...form,supplier:e.target.value})}
/>


<input placeholder="TL/kg"
onChange={(e)=>setForm({...form,cost:e.target.value})}
/>


<br/><br/>


<button onClick={save}>
💾 Hammadde Kaydet
</button>



<h3>Kayıtlı Hammaddeler</h3>


<table border={1} cellPadding={8}>

<thead>

<tr>

<th>Ad</th>
<th>Kategori</th>
<th>Tip</th>
<th>Parti</th>
<th>Analiz</th>
<th>PAC</th>
<th>POD</th>

</tr>

</thead>


<tbody>

{
materials.map((m,i)=>(

<tr key={i}>

<td>{m.name}</td>

<td>{m.category}</td>

<td>{m.type}</td>

<td>{m.batchTracking}</td>

<td>{m.analysisRequired}</td>

<td>{m.pac}</td>

<td>{m.pod}</td>


</tr>

))
}

</tbody>

</table>


</main>

)

}
