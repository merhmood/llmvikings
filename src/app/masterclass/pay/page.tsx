'use client';

import React, { useEffect, useState } from 'react';
import Image from '../../../../node_modules/next/image';
import { useFlutterwave, closePaymentModal } from 'flutterwave-react-v3';

import masterclassImage from '@/assets/masterclass.jpg';

export default function Page() {
  const [data, setData] = useState({ name: '', email: '' });
  const [submit, setSubmit] = useState(false);
  const [payment, setPayment] = useState<'success' | 'fail' | null>(null);

  const config = {
    public_key: 'FLWPUBK_TEST-8241b1f0a94381166d5989dc887ddb6f-X',
    tx_ref: new Date().getTime().toLocaleString(),
    amount: 100,
    currency: 'USD',
    payment_options: 'card,google,apple',
    customer: {
      email: data.email,
      name: data.name,
    },
    customizations: {
      title: 'LLM Vikings Masterclass Payment',
    },
  };

  const handleFlutterPayment = useFlutterwave(config);

  useEffect(() => {
    (async () => {
      try {
        if (submit) {
          handleFlutterPayment({
            callback: (response) => {
              console.log(response);
              closePaymentModal(); // this will close the modal programmatically
            },
            onClose: () => {
              setSubmit(false);
            },
          });
        }
      } catch (e) {
        if (e) {
          setPayment('fail');
        }
      }
    })();
  }, [submit, data, payment, handleFlutterPayment]);

  return submit ? (
    <div className='h-screen grid place-items-center'>
      <div className='w-10 h-10 lg:w-20 lg:h-20 bg-black rounded-lg loading'></div>
    </div>
  ) : (
    <div className='grid place-items-center h-screen'>
      <section className='lg:flex lg:flex-row-reverse h-fit justify-center w-5/6 max-w-7xl'>
        <div className='lg:mt-10 xl:mt-20'>
          <div className='lg:flex lg:items-center gap-2'>
            <div className='relative h-32 w-40 shrink-0'>
              <Image
                src={masterclassImage}
                alt='masterclass'
                fill
                objectFit='cover'
                className='rounded-3xl'
              />
            </div>
            <h2 className='font-bold text-lg lg:text-2xl mt-3 lg:mt-0 lg:ml-4'>
              Master the Art of Prompt Engineering: Unlock AI’s Full Potential
            </h2>
          </div>
          <div className='lg:w-96 mt-2 lg:mt-5 mx-auto lg:mx-0 text-sm lg:text-base'>
            <p>
              Discover the power of AI with our masterclass—learn prompt
              crafting, enhance results, and build creative solutions
              seamlessly.
            </p>
          </div>
        </div>
        <div className='w-full mt-5 lg:mt-10'>
          <form className='w-full' onSubmit={(e) => e.preventDefault()}>
            <label
              className='block lg:w-3/5 xl:w-2/4 mx-auto pl-1 mt-6'
              htmlFor='email'
            >
              Full Name
            </label>
            <input
              type='text'
              placeholder='John Doe'
              value={data.name}
              onChange={(e) =>
                setData((prevState) => ({ ...prevState, name: e.target.value }))
              }
              required
              className='block border-2 w-full lg:w-3/5 xl:w-2/4 mx-auto h-10 rounded-xl box-border px-5 py-5 mt-1'
            />
            <label
              className='block lg:w-3/5 xl:w-2/4 mx-auto pl-1 mt-4'
              htmlFor='email'
            >
              Email
            </label>
            <input
              id='email'
              type='email'
              placeholder='johndoe@email.com'
              value={data.email}
              onChange={(e) =>
                setData((prevState) => ({
                  ...prevState,
                  email: e.target.value,
                }))
              }
              required
              className='block border-2 w-full lg:w-3/5 xl:w-2/4 mx-auto h-10 rounded-xl box-border px-5 py-5 mt-1'
            />
            <h2 className='w-full lg:w-3/5 xl:w-2/4 text-right mx-auto mt-4 font-bold'>
              <span className='text-2xl text-black/75'>Amount:</span>
              <span className='text-3xl ml-3'>$100</span>
            </h2>
            <div className='w-full lg:w-3/5 xl:w-2/4 mt-5 lg:mt-10 mx-auto'>
              <button
                onClick={() => setSubmit(true)}
                className='block bg-black text-white lg:text-xl rounded-full py-1.5 px-4 lg:py-2 lg:px-6 w-full'
              >
                Pay
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}
