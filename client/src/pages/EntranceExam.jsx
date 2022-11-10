import React, { useState } from "react";


export default function EntranceExam() {
    const [openTab, setOpenTab] = useState(0);
  return (
    <div>
      <h4 className="font-semibold mb-2">Material de Apoio</h4>

      <a
        className={
          "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
          (openTab === 1 ? "bg-red-600 text-white" : "text-black bg-white")
        }
        onClick={(e) => {
          e.preventDefault();
          setOpenTab(1);
        }}
        data-toggle="tab"
        href="#link1"
        role="tablist"
      >
        Enem
      </a>
      <div className={openTab === 1 ? "block px-5 py-3 " : "hidden"}>
        <ul>
          <li>Enem 1998</li>
          <li>Gabarito 1998</li>
          <li>Enem 1999</li>
          <li>Enem 2000</li>
          <li>Enem 2001</li>
          <li>Enem 2002</li>
          <li>Enem 2003</li>
          <li>Enem 2004</li>
          <li>Enem 2005</li>
          <li>Enem 2006</li>
          <li>Enem 2007</li>
          <li>Enem 2008</li>
          <li>Enem 2009</li>
          <li>Enem 2010</li>
          <li>Enem 2011</li>
        </ul>
      </div>
      <a
        className={
          "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
          (openTab === 2 ? "bg-red-600 text-white" : "text-black bg-white")
        }
        onClick={(e) => {
          e.preventDefault();
          setOpenTab(2);
        }}
        data-toggle="tab"
        href="#link1"
        role="tablist"
      >
        Unicamp
      </a>

      <div className={openTab === 2 ? "block px-5 py-3 " : "hidden"}>
        <ul>
          <li>Unicamp 1998</li>
          <li>Unicamp 1999</li>
          <li>Unicamp 2000</li>
          <li>Unicamp 2001</li>
          <li>Unicamp 2002</li>
          <li>Unicamp 2003</li>
          <li>Unicamp 2004</li>
          <li>Unicamp 2005</li>
          <li>Unicamp 2006</li>
          <li>Unicamp 2007</li>
          <li>Unicamp 2008</li>
          <li>Unicamp 2009</li>
          <li>Unicamp 2010</li>
          <li>Unicamp 2011</li>
        </ul>
      </div>
      <a
        className={
          "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
          (openTab === 3 ? "text-white bg-red-600" : "text-black bg-white")
        }
        onClick={(e) => {
          e.preventDefault();
          setOpenTab(3);
        }}
        data-toggle="tab"
        href="#link1"
        role="tablist"
      >
        ITA
      </a>

      <div className={openTab === 3 ? "block px-5 py-3 " : "hidden"}>
        <ul>
          <li>ITA 2008</li>
          <li>ITA 2009</li>
          <li>ITA 2010</li>
          <li>ITA 2011</li>
          <li>ITA 2012</li>
          <li>ITA 2013</li>
          <li>ITA 2014</li>
          <li>ITA 2015</li>
          <li>ITA 2016</li>
          <li>ITA 2017</li>
          <li>ITA 2018</li>
          <li>ITA 2019</li>
          <li>ITA 2020</li>
          <li>ITA 2021</li>
          <li>ITA 2022</li>
        </ul>
      </div>
    </div>
  );
}
