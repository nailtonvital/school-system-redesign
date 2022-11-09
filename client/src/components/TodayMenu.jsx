import React from 'react'

export default function TodayMenu() {
  return (
    <div className="p-5 w-12/12 h-fit card">
      <h3 className="font-bold flex justify-between items-center leading-tight text-xl mt-2 mb-2">
        <span>Today's Menu</span>
        <a className="font-normal text-xs text-slate-400 hover:text-slate-500 cursor-pointer">
          View all
        </a>
      </h3>
      <h4 className="font-normal text-grey-300 leading-tight text-base mt-0">
        Snack:
      </h4>
      <p className="font-medium">cookie and milk</p>
      <h4 className="font-normal text-grey-300 leading-tight text-base mt-2">
        Lunch:
      </h4>
      <p className="font-medium">paulo.souza192@etec.sp.gov.br</p>
    </div>
  );
}
