"use client";

import { VaccineProps } from '@/constants';
import Image from 'next/image';
import React from 'react'
import { Button } from '../ui/button';

const VaccineCards = ({ title, date }: VaccineProps) => {
  return (
    <>
      <div className="flex py-2 w-full">
        <div className='flex flex-row justify-between items-center w-full'>
          <div className="flex gap-4 justify-center items-center">
            <div className="flex w-10 h-10 justify-center items-center rounded-full bg-slate-100">
              <Image
                src={'/assets/syringe.svg'}
                width={25}
                height={25}
                alt='syringe'
              />
            </div>

            <div className="flex flex-col">
              <h2 className='text-base-semibold'>{title}</h2>
              <p className='text-gray-500 text-small-regular'>{date}</p>
            </div>
          </div>

          <div className="flex ml-2">
            <Button className="shadow-none border-none p-0">
              <Image
                src={'/assets/dots.svg'}
                width={20}
                height={10}
                alt="more"
              />
            </Button>
          </div>
        </div>
      </div>
    </>
  )
}

export default VaccineCards