import React, {useState} from 'react'
import woman from '../../assets/woman.jpg'
import photo from '../../assets/Keenan.jpg'
import ScoreCard from '../../components/ScoreCard/ScoreCard'
import PeopleCard from '../../components/PeopleCard/PeopleCard'
import EmailCard from '../../components/EmailCard/EmailCard';
import GradesTable from '../../components/GradesTable/GradesTable';
import Recommendations from '../../components/Recommendations/Recommendations';

export default function PersonalInfo() {

        const [openTab, setOpenTab] = useState(1);
        return (
            <>
                <div className="flex flex-wrap">
                    <div className="w-full">
                        <ul
                            className="flex mb-0 list-none flex-wrap pt-3 pb-4 flex-row"
                            role="tablist"
                        >
                            <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
                                <a
                                    className={
                                        "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                                        (openTab === 1
                                            ? "text-white bg-red-600"
                                            : "text-black bg-white")
                                    }
                                    onClick={e => {
                                        e.preventDefault();
                                        setOpenTab(1);
                                    }}
                                    data-toggle="tab"
                                    href="#link1"
                                    role="tablist"
                                >
                                    ME
                                </a>
                            </li>
                            <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
                                <a
                                    className={
                                        "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                                        (openTab === 2
                                            ? "text-white bg-red-600"
                                            : "text-black bg-white")
                                    }
                                    onClick={e => {
                                        e.preventDefault();
                                        setOpenTab(2);
                                    }}
                                    data-toggle="tab"
                                    href="#link1"
                                    role="tablist"
                                >
                                    Personal Information
                                </a>
                            </li>
                            <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
                                <a
                                    className={
                                        "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                                        (openTab === 3
                                            ? "text-white bg-red-600"
                                            : "text-black bg-white")
                                    }
                                    onClick={e => {
                                        e.preventDefault();
                                        setOpenTab(3);
                                    }}
                                    data-toggle="tab"
                                    href="#link2"
                                    role="tablist"
                                >
                                    Curriculum
                                </a>
                            </li>
                           
                        </ul>
                        <div className="flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
                            <div className="px-4 py-5 flex-auto">
                                <div className="tab-space">
                                    <div className={openTab === 1 ? "block" : "hidden"} id="link1">
                                       
                                         <div className="grid grid-cols-1 lg:grid-cols-6 gap-4">
      <div className='col-span-2'>
          <PeopleCard
            photo={photo} 
            name='Keenan Lane' 
            role='Student' 
            phrase='Unexpressed emotions will never die. They are buried alive and will come forth later in uglier ways.' 
            course=' High School'
            year='2020'
            social={false}
            
          />
          <EmailCard className='mt-3' />
        </div>
      <div id='div' className='col-span-4'>
          <ScoreCard score={87} popular={15} classes={8451} />
          <GradesTable />
           
        </div>
        <Recommendations/>
    </div> 
                                    </div>
                                    <div className={openTab === 2 ? "block" : "hidden"} id="link2">
                                        <h2 className='font-extrabold leading-tight text-2xl mt-0 mb-2'>Personal Information</h2>
                                        <div className="flex flex-wrap">
                                            <div className="flex-col ml-2">
                                                <img className='w-full lg:w-52 rounded-md' src={woman} alt="woman photo" />
                                                <button className='text-xs mt-1 w-full lg:w-52 font-bold uppercase px-5 py-3 shadow-lg rounded leading-normal bg-red-600 text-white'>Change photo</button>
                                            </div>
                                            <div className="ml-7 md:mt-8">
                                                <h3 className='font-semibold leading-tight text-xl mb-2'>Personal Details</h3>
                                                <div className="mt-1">
                                                    <p className='font-semibold text-slate-500 leading-tight text-md'>Name</p>
                                                    <p className='font-normal -mt-0 mb-2 leading-tight text-lg'>Emilly Heloise Valentina Castro</p>
                                                    <div className="flex gap-5 mt-1">

                                                        <div className="">
                                                            <p className='font-semibold text-slate-500 leading-tight text-md'>RG</p>
                                                            <p className='font-normal -mt-0 mb-2 leading-tight text-lg'>41.009.362-2</p>
                                                        </div>
                                                        <div className="">
                                                            <p className='font-semibold text-slate-500 leading-tight text-md'>CPF</p>
                                                            <p className='font-normal -mt-0 mb-2 leading-tight text-lg'>090.622.638-44</p>
                                                        </div>
                                                    </div>
                                                    <div className="flex gap-5 mt-1">
                                                        <div className="">
                                                            <p className='font-semibold text-slate-500 leading-tight text-md'>RM</p>
                                                            <p className='font-normal -mt-0 mb-2 leading-tight text-lg'>99999</p>
                                                        </div>
                                                        <div className="">
                                                            <p className='font-semibold text-slate-500 leading-tight text-md'>RD SED</p>
                                                            <p className='font-normal -mt-0 mb-2 leading-tight text-lg'>999999999-9/SP</p>
                                                        </div>
                                                    </div>
                                                    <div className="mt-1">
                                                        <p className='font-semibold text-slate-500 leading-tight text-md'>Course</p>
                                                        <p className='font-normal -mt-0 mb-2 leading-tight text-lg'>High School</p>
                                                    </div>
                                                    <div className="flex gap-5 mt-1">
                                                        <div className="">
                                                            <p className='font-semibold text-slate-500 leading-tight text-md'>Module</p>
                                                            <p className='font-normal -mt-0 mb-2 leading-tight text-lg'>3º</p>
                                                        </div>
                                                        <div className="">
                                                            <p className='font-semibold text-slate-500 leading-tight text-md'>Class name</p>
                                                            <p className='font-normal -mt-0 mb-2 leading-tight text-lg'>A</p>
                                                        </div>
                                                        <div className="">
                                                            <p className='font-semibold text-slate-500 leading-tight text-md'>Group</p>
                                                            <p className='font-normal -mt-0 mb-2 leading-tight text-lg'>B</p>
                                                        </div>
                                                    </div>

                                                </div>
                                                

                                                
                                            </div>
                                            <div className="ml-7 md:mt-8">
                                                <h3 className='font-semibold leading-tight text-xl mb-2'>Contact Details</h3>
                                                <p className='font-semibold text-slate-500 leading-tight text-md'>Email</p>
                                                <p className='font-normal -mt-1 leading-tight text-lg '>paulo.souza192@etec.sp.gov.br</p>
                                                <div className="flex gap-5 mt-1">
                                                    <div className="">
                                                        <p className='font-semibold text-slate-500 leading-tight text-md'>Telephone number</p>
                                                        <p className='font-normal -mt-0 mb-2 leading-tight text-lg'>(11) 3905-0027</p>
                                                    </div>
                                                    <div className="">
                                                        <p className='font-semibold text-slate-500 leading-tight text-md'>Phone number</p>
                                                        <p className='font-normal -mt-0 mb-2 leading-tight text-lg'>(11) 99703-0611</p>
                                                    </div>
                                                </div>

                                                
                                                <h3 className='font-semibold leading-tight text-xl mt-5 mb-2'>Address Details</h3>
                                                <p className='font-semibold text-slate-500 leading-tight text-md'>Address</p>
                                                <p className='font-normal -mt-0 mb-2 leading-tight text-lg'>Rua Alfredo da Silva Azevedo</p>
                                                <div className="flex gap-5 mt-1">
                                                    <div className="">
                                                        <p className='font-semibold text-slate-500 leading-tight text-md'>CEP</p>
                                                        <p className='font-normal -mt-0 mb-2 leading-tight text-lg'>08685-070</p>
                                                    </div>
                                                    <div className="">
                                                        <p className='font-semibold text-slate-500 leading-tight text-md'>Number</p>
                                                        <p className='font-normal -mt-0 mb-2 leading-tight text-lg'>160</p>
                                                    </div>
                                                    <div className="">
                                                        <p className='font-semibold text-slate-500 leading-tight text-md'>Address add-on</p>
                                                        <p className='font-normal -mt-0 mb-2 leading-tight text-lg'>Apt 198</p>
                                                    </div>
                                                </div>
                                                <div className="flex gap-5 mt-1 mb-5">
                                                    <div className="">
                                                        <p className='font-semibold text-slate-500 leading-tight text-md'>State</p>
                                                        <p className='font-normal -mt-0 mb-2 leading-tight text-lg'>SP</p>
                                                    </div>
                                                    <div className="">
                                                        <p className='font-extralight leading-tight text-sm'>City</p>
                                                        <p className='font-medium -mt-1 leading-tight text-lg '>Suzano</p>
                                                    </div>
                                                    <div className="">
                                                        <p className='font-semibold text-slate-500 leading-tight text-md'>District</p>
                                                        <p className='font-normal -mt-0 mb-2 leading-tight text-lg'>Vila Maluf</p>
                                                    </div>
                                                </div>
                                                
                                            </div>
                                        </div>
                                        
                                    </div>
                                    <div className={openTab === 3 ? "block" : "hidden"} id="link3">
                                        <p>
                                            Completely synergize resource taxing relationships via
                                            premier niche markets. Professionally cultivate one-to-one
                                            customer service with robust ideas.
                                            <br />
                                            <br />
                                            Dynamically innovate resource-leveling customer service for
                                            state of the art customer service.
                                        </p>
                                    </div>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    };



