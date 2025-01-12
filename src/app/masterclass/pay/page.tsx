'use client';

import React, { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import axios from 'axios';
import Stripe from '@/components/Stripe';

const PayStack = dynamic(() => import('@/components/Paystack'), { ssr: false });

export default function Page() {
  const [location, setLocation] = useState('AF');

  useEffect(() => {
    if (location == null) {
      (async () => {
        const response = await axios.get('https://ipapi.co/json/');
        if (response.status === 200) {
          setLocation(response.data.continent_code);
        }
      })();
    }
  });
  return location && location !== 'AF' ? (
    <Stripe /> // For Non Africans
  ) : location && location === 'AF' ? (
    <PayStack /> // For Africans
  ) : (
    <div className='h-screen grid place-items-center'>
      <div className='w-10 h-10 lg:w-20 lg:h-20 bg-black rounded-lg loading'></div>
    </div>
  );
}
