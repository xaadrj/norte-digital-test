import React, { useState } from 'react';
import Input from '../input'

/** Data */
import { latinAmericanCountries, customerData, productData } from '@/app/dashboard/data';

export default function index() {
  const [sections, setSections] = useState([1, 2]);
  const [currency, setCurrency] = useState(null);
  const [price, setPrice] = useState(null);

  const addSection = () => {
    setSections([...sections, sections.length + 1]);
  };

  const removeSection = (index) => {
    const updatedSections = [...sections];
    updatedSections.splice(index, 1);
    setSections(updatedSections);

  };

  const handleCountriesData = (data) => {
    const currentCurrency = latinAmericanCountries.filter((item) => item.name === data);
    setCurrency(currentCurrency[0].currency)
  };

  const handleProductData = (data) => {
    const currentProduct = productData.filter((item) => item.name === data);
    setPrice(currentProduct[0].price)
  }



  return (
    <div className=' flex justify-center flex-col items-start mx-auto h-full py-12 px-4 sm:px-6 md:px-12 2xl:px-32 xl:container'>
      <div className='flex gap-6 justify-start items-center w-full'>
        <div>
          <img className='w-14' src="/svg/dashboard.svg" alt="" />
        </div>
        <span className='border-b-4 w-full'>
          <h1 className='text-4xl pb-3'>New Sale</h1>
        </span>
      </div>
      <form className='w-full mt-10'>
        <div className='w-full'>
          <div className='border-b-2 w-full'>
            <h2 className='text-2xl pb-1'>Document</h2>
          </div>
          <div className='flex mt-3 justify-start items-start xl:gap-8 xl:gap-4 gap-2'>
            <div className='flex w-[50rem] justify-start items-start flex-col'>
              <label>Client</label>
              <div className='flex w-full justify-center items-stretch xl:gap-4 gap-2'>
                <Input Data={customerData} />
                <button type="button" className='h-9 m-0 bg-[#279AFF] px-3 flex hover:bg-[#147CC9] justify-center items-center'>
                  <img className="w-4" src="/svg/plus.svg" alt="" />
                </button>
              </div>
            </div>

            <div className='flex w-full justify-start items-start flex-col'>
              <label>Branch Office</label>
              <div className='flex w-full justify-center items-stretch xl:gap-4 gap-2'>
                <Input Data={latinAmericanCountries} valueHandler={handleCountriesData} />
              </div>
            </div>

            <div className='flex w-72 justify-start items-start flex-col'>
              <label>Currency</label>
              <div className='flex w-full justify-center items-stretch xl:gap-4 gap-2'>
                <div className='h-9 w-full'>
                  <input readOnly value={currency} className='px-4 h-full w-full' type="text" />
                </div>
              </div>
            </div>


          </div>

          <div className='border-b-2 mt-10 w-full'>
            <h2 className='text-2xl pb-1'>Details</h2>
          </div>
          <div className=' max-h-36 h-36'>
            {sections.map((value, index) => (
              <div key={index} className='flex mt-3 justify-start items-end xl:gap-8 gap-4'>
                <div className='flex w-[30rem] justify-start items-start flex-col'>
                  <label>Name</label>
                  <div className='flex w-full justify-center items-stretch xl:gap-4 gap-2'>
                    <Input Data={productData} valueHandler={handleProductData} />
                  </div>
                </div>

                <div className='flex justify-start items-start flex-col'>
                  <label>Quantity</label>
                  <div className='flex w-full justify-center items-stretch xl:gap-4 gap-2'>
                    <div className='h-9 w-full'>
                      <input className='px-4 h-full w-full' type="text" />
                    </div>
                  </div>
                </div>
                <div className='flex  justify-start items-start flex-col'>
                  <label>Price</label>
                  <div className='flex w-full justify-center items-stretch xl:gap-4 gap-2'>
                    <div className='h-9 w-full'>
                      <input readOnly value={price} className='px-4 h-full w-full' type="text" />
                    </div>
                  </div>
                </div>
                <div className='flex justify-start items-start flex-col'>
                  <label>Subtotal</label>
                  <div className='flex w-full justify-center items-stretch xl:gap-4 gap-2'>
                    <div className='h-9 w-full'>
                      <input className='px-4 h-full w-full' type="text" />
                    </div>
                  </div>
                </div>
                <button onClick={() => removeSection(index)} type="button" className='h-9 m-0 bg-[#279AFF] px-5 flex hover:bg-[#147CC9] justify-center items-center'>
                  <img className="w-3" src="/svg/cross.svg" alt="" />
                </button>
              </div>
            ))}
          </div>
          <button onClick={addSection} type="button" className='mt-5 py-2 text-white text-center bg-[#279AFF] px-7 flex hover:bg-[#147CC9]'>Add</button>

          <div className='w-full mt-5 flex gap-3 pr-20 justify-end items-center'>
            <label>Total</label>
            <div className='flex  justify-center items-stretch xl:gap-4 gap-2'>
              <div className='h-9 w-full'>
                <input className='px-4 h-full w-52' type="text" />
              </div>
            </div>
          </div>
          <div className='mt-4 flex justify-end items-center w-full border-t'>
            <button type="button" className='mt-5 py-2 text-white text-center bg-[#279AFF] px-9 flex hover:bg-[#147CC9]'>Save</button>
          </div>

        </div>
      </form>
    </div>
  )
}
