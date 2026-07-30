"use client";

import { useState } from "react";

export default function Home() {
  const [materials, setMaterials] = useState([
    {
      name: "Süt",
      group: "Süt Ürünleri",
      fat: "3.5",
      msnf: "8.5",
      pac: "0",
      pod: "0",
      cost: "0",
    },
    {
      name: "Sakkaroz",
      group: "Şeker",
      fat: "0",
      msnf: "0",
      pac: "100",
      pod: "100",
      cost: "0",
    },
  ]);

  const [newMaterial, setNewMaterial] = useState({
    name: "",
    group: "",
    fat: "",
    msnf: "",
    pac: "",
    pod: "",
    cost: "",
  });

  const addMaterial = () => {
    setMaterials([...materials, newMaterial]);

    setNewMaterial({
      name: "",
      group: "",
      fat: "",
      msnf: "",
      pac: "",
      pod: "",
      cost: "",
    });
  };

  return (
    <main style={{ padding: 30, fontFamily: "Arial" }}>
      <h1>🍦 Ice Cream Master Pro</h1>
      <h2>Profesyonel Dondurma Formülasyon Sistemi</h2>

      <hr />

      <h3>🥛 Hammadde Veritabanı</h3>

      <input placeholder="Hammadde adı"
        value={newMaterial.name}
        onChange={(e)=>setNewMaterial({...newMaterial,name:e.target.value})}
      />

      <input placeholder="Grup"
        value={newMaterial.group}
        onChange={(e)=>setNewMaterial({...newMaterial,group:e.target.value})}
      />

      <input placeholder="Yağ %"
        value={newMaterial.fat}
        onChange={(e)=>setNewMaterial({...newMaterial,fat:e.target.value})}
      />

      <input placeholder="MSNF %"
        value={newMaterial.msnf}
        onChange={(e)=>setNewMaterial({...newMaterial,msnf:e.target.value})}
      />

      <input placeholder="PAC"
        value={newMaterial.pac}
        onChange={(e)=>setNewMaterial({...newMaterial,pac:e.target.value})}
      />

      <input placeholder="POD"
        value={newMaterial.pod}
        onChange={(e)=>setNewMaterial({...newMaterial,pod:e.target.value})}
      />

      <input placeholder="Maliyet"
        value={newMaterial.cost}
        onChange={(e)=>setNewMaterial({...newMaterial,cost:e.target.value})}
      />

      <button onClick={addMaterial}>
        + Hammadde Ekle
      </button>

      <br /><br />

      <table border={1} cellPadding={10}>
        <thead>
          <tr>
            <th>Hammadde</th>
            <th>Grup</th>
            <th>Yağ %</th>
            <th>MSNF %</th>
            <th>PAC</th>
            <th>POD</th>
            <th>Maliyet</th>
          </tr>
        </thead>

        <tbody>
          {materials.map((item,index)=>(
            <tr key={index}>
              <td>{item.name}</td>
              <td>{item.group}</td>
              <td>{item.fat}</td>
              <td>{item.msnf}</td>
              <td>{item.pac}</td>
              <td>{item.pod}</td>
              <td>{item.cost}</td>
            </tr>
          ))}
        </tbody>
      </table>

    </main>
  );
}
