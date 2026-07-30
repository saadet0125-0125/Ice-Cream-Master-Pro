
"use client";

import { useState } from "react";

export default function MaterialsPage() {

  const [materials, setMaterials] = useState<any[]>([]);

  const [form, setForm] = useState({
    name: "",
    fat: "",
    protein: "",
    lactose: "",
    water: "",
    msnf: "",
    density: "",
    ph: "",
    antibiotic: "",
    supplier: "",
    cost: ""
  });


  function getCategory(name:string){

    const n = name.toLowerCase();

    if(
      n.includes("süt") ||
      n.includes("krema") ||
      n.includes("tozu")
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
      n.includes("kitre") ||
      n.includes("stabil")
    )
      return "Stabilizatör";


    if(
      n.includes("kakao") ||
      n.includes("aroma")
    )
      return "Aroma";


    return "Diğer";

  }


  // Geçici PAC hesap altyapısı
  function calculatePAC(){

    const sugar = Number(form.lactose || 0);

    return (sugar * 1.9).toFixed(2);

  }


  // Geçici POD hesap altyapısı
  function calculatePOD(){

    const sugar = Number(form.lactose || 0);

    return (sugar * 1).toFixed(2);

  }



  function saveMaterial(){

    const newMaterial = {

      ...form,

      category:getCategory(form.name),

      pac:calculatePAC(),

      pod:calculatePOD()

    };


    setMaterials([
      ...materials,
      newMaterial
    ]);


    setForm({
      name:"",
      fat:"",
      protein:"",
      lactose:"",
      water:"",
      msnf:"",
      density:"",
      ph:"",
      antibiotic:"",
      supplier:"",
      cost:""
    });

  }



return (

<main style={{padding:"30px",fontFamily:"Arial"}}>


<h1>🍦 Ice Cream Master Pro</h1>

<h2>📚 Hammadde Veritabanı</h2>

<hr/>


<input placeholder="Hammadde Adı"
value={form.name}
onChange={(e)=>setForm({...form,name:e.target.value})}
/>


<input placeholder="Yağ %"
value={form.fat}
onChange={(e)=>setForm({...form,fat:e.target.value})}
/>


<input placeholder="Protein %"
value={form.protein}
onChange={(e)=>setForm({...form,protein:e.target.value})}
/>


<input placeholder="Laktoz %"
value={form.lactose}
onChange={(e)=>setForm({...form,lactose:e.target.value})}
/>


<input placeholder="Su %"
value={form.water}
onChange={(e)=>setForm({...form,water:e.target.value})}
/>


<input placeholder="MSNF %"
value={form.msnf}
onChange={(e)=>setForm({...form,msnf:e.target.value})}
/>


<input placeholder="Density"
value={form.density}
onChange={(e)=>setForm({...form,density:e.target.value})}
/>


<input placeholder="pH"
value={form.ph}
onChange={(e)=>setForm({...form,ph:e.target.value})}
/>


<input placeholder="Antibiyotik Durumu"
value={form.antibiotic}
onChange={(e)=>setForm({...form,antibiotic:e.target.value})}
/>


<input placeholder="Tedarikçi"
value={form.supplier}
onChange={(e)=>setForm({...form,supplier:e.target.value})}
/>


<input placeholder="Maliyet TL/kg"
value={form.cost}
onChange={(e)=>setForm({...form,cost:e.target.value})}
/>


<br/><br/>


<button onClick={saveMaterial}>
+ Hammadde Kaydet
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
