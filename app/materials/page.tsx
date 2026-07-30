"use client";

import { useState } from "react";

type Material = {
  name: string;
  category: string;
  fat: string;
  protein: string;
  lactose: string;
  water: string;
  msnf: string;
  density: string;
  ph: string;
  antibiotic: string;
  supplier: string;
  cost: string;
  pac: string;
  pod: string;
};


export default function MaterialsPage() {

  const [materials, setMaterials] = useState<Material[]>([]);


  const [form, setForm] = useState({
    name:"",
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
      n.includes("dekstroz") ||
      n.includes("fruktoz")
    )
    return "Şeker";


    if(
      n.includes("salep") ||
      n.includes("gam") ||
      n.includes("kitre")
    )
    return "Stabilizatör";


    if(
      n.includes("kakao") ||
      n.includes("aroma")
    )
    return "Aroma";


    return "Diğer";

  }



  function calculatePAC(){

    const sugar =
    Number(form.lactose || 0);

    return (sugar * 1.9).toFixed(2);

  }



  function calculatePOD(){

    const sugar =
    Number(form.lactose || 0);

    return (sugar * 1).toFixed(2);

  }



  function saveMaterial(){


    const newMaterial:Material={

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

<main style={{padding:"30px"}}>


<h1>🍦 Ice Cream Master Pro</h1>

<h2>📚 Hammadde Veritabanı</h2>


<hr/>


<h3>Yeni Hammadde Kartı</h3>


<input placeholder="Hammadde Adı"
onChange={(e)=>setForm({...form,name:e.target.value})}
/>


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


<button onClick={saveMaterial}>
💾 Kaydet
</button>



<h3>Kayıtlı Hammaddeler</h3>


<table border={1} cellPadding={8}>

<thead>

<tr>
<th>Hammadde</th>
<th>Kategori</th>
<th>Yağ</th>
<th>MSNF</th>
<th>PAC</th>
<th>POD</th>
<th>Maliyet</th>
</tr>

</thead>


<tbody>

{
materials.map((m,index)=>(

<tr key={index}>

<td>{m.name}</td>

<td>{m.category}</td>

<td>{m.fat}</td>

<td>{m.msnf}</td>

<td>{m.pac}</td>

<td>{m.pod}</td>

<td>{m.cost}</td>

</tr>

))
}

</tbody>

</table>


</main>

);

}
