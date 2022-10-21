import React from 'react'

export default function PresenceData() {
  return (
    <div className="grid grid-cols-6">
        <div className="flex-col col-span-2">
            <div className='card w-full p-3'>
                <h3 className='font-bold'>Presença</h3>
                <div className="my-3">
                    <div className="flex justify-between">
                        <h2 className='text-red-600 font-bold text-xl'>Bad</h2>
                        <p className='text-slate-500'>30%</p>
                    </div>
                    <div className="w-full bg-gray-200 h-1">
                        <div className="bg-red-600 h-1 w-5/12" ></div>
                    </div>
                </div>
                
                <div className="flex gap-5 mt-7">
                    <div className="flex-col ">
                        <h2 className='text-2xl -mt-2'>87</h2>
                        <h4 className='text-sm whitespace-nowrap text-red-600'>Faltas</h4>
                    </div>
                    <div className="flex-col">
                        <h2 className='text-2xl -mt-2'>200</h2>
                        <h4 className='text-sm whitespace-nowrap text-blue-600'>Faltas Permitidas</h4>
                    </div>
                    <div className="flex-col">
                        <h2 className='text-2xl -mt-2'>240</h2>
                        <h4 className='text-sm whitespace-nowrap'>Total de aulas</h4>
                    </div>
                </div>
            </div>
            <div className='card'></div>
        </div>
    </div>
  )
}
