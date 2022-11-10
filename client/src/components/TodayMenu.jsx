import React from 'react'

export default function TodayMenu() {
  return (
    <div className="p-5 w-12/12 h-fit card">
      <h3 className="font-bold flex justify-between items-center leading-tight text-xl mt-2 mb-2">
        <span>Cardápio de Hoje</span>
        <a className="font-normal text-xs text-slate-400 hover:text-slate-500 cursor-pointer">
          Ver Tudo
        </a>
      </h3>
      <h4 className="font-semibold text-grey-300 leading-tight text-base mt-0">
        Lanche:
      </h4>
      <p className="font-normal">Bolacha com leite</p>
      <h4 className="font-semibold text-grey-300 leading-tight text-base mt-2">
        Almoço:
      </h4>
      <p className="font-normal">Strogonoff de Frango com Caviar</p>
    </div>
  );
}
