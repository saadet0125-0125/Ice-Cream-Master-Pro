"use client";

import { useState } from "react";

export default function RecipePage() {

  const [recipeName, setRecipeName] = useState("");
  const [amount, setAmount] = useState("");

  const [ingredients, setIngredients] = useState([
    {
      name: "Süt",
      kg: 1100,
    },
    {
      name: "Şeker",
      kg: 260,
    },
    {
      name: "Yağsız Süt Tozu",
      kg: 112.5,
    },
    {
      name: "Glikoz",
      kg: 100,
    },
  ]);

  return (
    <main style={{padding:30,fontFamily:"Arial"}}>

      <h1>🧪 Reçete Oluşturucu</h1>
      <h2>Ice Cream Master Pro</h2>

      <hr />

      <label>Reçete Adı</label>
      <br />

      <input
        placeholder="Örnek: Sade Dondurma"
        value={recipeName}
        onChange={(e)=>setRecipeName(e.target.value)}
      />

      <br /><br />

      <label>Üretim Miktarı (kg)</label>
      <br />

      <input
        placeholder="Örnek: 1500 kg"
        value={amount}
        onChange={(e)=>setAmount(e.target.value)}
      />

      <br /><br />

      <h3>🥛 İçerikler</h3>

      <table border={1} cellPadding={10}>

        <thead>
          <tr>
            <th>Hammadde</th>
            <th>Miktar (kg)</th>
          </tr>
        </thead>

        <tbody>

        {ingredients.map((item,index)=>(

          <tr key={index}>
            <td>{item.name}</td>
            <td>{item.kg}</td>
          </tr>

        ))}

        </tbody>

      </table>


      <br />

      <h3>📊 Analiz</h3>

      <p>Toplam Yağ: Hesaplanacak</p>
      <p>MSNF: Hesaplanacak</p>
      <p>PAC: Hesaplanacak</p>
      <p>POD: Hesaplanacak</p>

    </main>
  );
}
