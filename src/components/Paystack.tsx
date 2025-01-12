import React, { useEffect, useRef, useState } from 'react';
import Image from '../../node_modules/next/image';
import { usePaystackPayment } from 'react-paystack';

import masterclassImageAF from '@/assets/masterclass-af.jpg';
import successPay from '@/assets/valid.png';
import Link from 'next/link';
import { HookConfig } from 'react-paystack/dist/types';
import axios from 'axios';

const PayStack = () => {
  const [data, setData] = useState({ name: '', email: '' });
  const [submit, setSubmit] = useState(false);
  const [agreement, setAgreement] = useState(false);
  const [payment, setPayment] = useState<'success' | 'fail' | null>(null);
  const [print, setPrint] = useState(false);
  const [coupon, setCoupon] = useState<{
    request: boolean;
    value: string;
  }>({ request: false, value: '' });
  const receiptRef = useRef<HTMLDivElement>(null);
  const date = new Date().toLocaleDateString();
  const txID = generateTransactionId();
  const amount = '9,500';
  const earlyBird = true;

  const config = {
    email: data.email,
    metadata: {
      name: data.name,
    },
    amount: `${amount.replace(',', '')}00`,
    publicKey: 'pk_live_c78bb6ba17b680d64176c8e2132a04df71284e80',
  };

  const handlePayment = usePaystackPayment(config as unknown as HookConfig);

  useEffect(() => {
    (async () => {
      try {
        if (submit) {
          handlePayment({
            onClose: () => {
              setSubmit(false);
              setAgreement(false);
            },
            onSuccess: async () => {
              try {
                const response = await axios.post(
                  '/.netlify/functions/payment',
                  {
                    ...data,
                    date,
                    tx_id: txID,
                    amount: `${amount} naria`,
                  }
                );
                if (response.status === 200) {
                  setSubmit(false);
                  setPayment('success');
                }
              } catch (error) {
                console.log(error);
              }
            },
          });
        }
      } catch (e) {
        if (e) {
          setPayment('fail');
        }
      }
    })();
  }, [submit, data, payment, handlePayment]);

  useEffect(() => {
    // Print receipt
    (() => {
      if (print && typeof window !== 'undefined') {
        window.print();
      }
    })();
    setPrint(false);
  }, [print]);

  if (payment === 'success') {
    return (
      <div className='bg-black h-screen grid place-items-center text-sm lg:text-base'>
        <div className='w-4/5 max-w-md'>
          <div className='h-fit py-6 bg-white rounded-xl' ref={receiptRef}>
            <div>
              <div className='flex flex-col items-center justify-center'>
                <div className='relative h-10 w-10'>
                  <Image
                    src={successPay}
                    alt='success pay'
                    fill
                    objectFit='contain'
                  />
                </div>
                <p className='my-1 text-[#15bc32]'>Payment Successful</p>
              </div>
              <div className='flex justify-center'>
                <header className='w-5/6 py-3 border-b border-gray-300'>
                  <h2 className='font-semibold text-center'>
                    LLM Vikings Masterclass Payment Reciept
                  </h2>
                  <p className='text-center'>
                    Boost Your Income and Productivity with AI in 2025
                  </p>
                </header>
              </div>
              <div className='flex justify-center text-xs lg:text-base'>
                <section className='w-5/6 mt-3'>
                  <div className='flex justify-between'>
                    <p>Transaction ID:</p>
                    <p>{txID}</p>
                  </div>
                  <div className='flex justify-between'>
                    <p>Name:</p>
                    <p>{data.name}</p>
                  </div>
                  <div className='flex justify-between'>
                    <p>Email:</p>
                    <p>{data.email}</p>
                  </div>
                  <div className='flex justify-between'>
                    <p>Amount:</p>
                    <p>&#8358;{amount}</p>
                  </div>
                  <div className='flex justify-between'>
                    <p>Date:</p>
                    <p>{date}</p>
                  </div>
                </section>
              </div>
            </div>
          </div>
          <div className='flex justify-between no-print'>
            <section className='text-white mt-5 flex gap-4'>
              <button onClick={() => setPrint(true)}>Print</button>
              <Link href='/' className='text-blue-700'>
                Go home
              </Link>
            </section>
          </div>
        </div>
      </div>
    );
  }

  if (submit) {
    return (
      <div className='h-screen grid place-items-center'>
        <div className='w-10 h-10 lg:w-20 lg:h-20 bg-black rounded-lg loading'></div>
      </div>
    );
  }
  return (
    <div className='grid place-items-center h-screen mt-5 lg:mb-0'>
      <section className='lg:flex lg:flex-row-reverse h-fit justify-center w-5/6 max-w-7xl'>
        <div className='lg:mt-10 xl:mt-20'>
          <div className='lg:flex lg:items-center gap-2'>
            <div className='relative h-32 w-40 shrink-0'>
              <Image
                src={masterclassImageAF}
                alt='masterclass'
                fill
                objectFit='cover'
                className='rounded-3xl'
              />
            </div>
            <h2 className='font-bold text-lg lg:text-2xl mt-3 lg:mt-0 lg:ml-4'>
              Boost Your Income and Productivity with AI in 2025
            </h2>
          </div>
          <div className='lg:w-96 mt-2 lg:mt-5 mx-auto lg:mx-0 text-sm lg:text-base'>
            <p>Empowering Nigerians to innovate</p>
            <h2 className='w-full mt-2 lg:mt-3 font-bold flex flex-wrap'>
              <span className='text-lg lg:text-2xl'>Amount:</span>
              <span className='flex'>
                {earlyBird && (
                  <span className='text-xl lg:text-3xl ml-3 line-through text-black/70 decoration-black/70'>
                    &#8358;12,500
                  </span>
                )}
                <span className='text-xl lg:text-3xl ml-3 text-black flex flex-col'>
                  <span>&#8358;{amount} </span>
                  {earlyBird && (
                    <span className='text-[10px] lg:text-xs ml-0.5 no-underline -mt-3 lg:-mt-1 font-normal'>
                      Early Bird price
                    </span>
                  )}
                </span>
              </span>
            </h2>
          </div>
          <div>
            <label htmlFor='coupon'>Coupon</label>
            <br />
            <input
              type='text'
              placeholder='Enter Code'
              id='coupon'
              value={coupon.value}
              onChange={(e) =>
                setCoupon((prevState) => ({
                  ...prevState,
                  value: e.target.value,
                }))
              }
              required
              className='border-2 h-10 rounded-xl box-border px-5 py-5 mt-1'
            />
            <br />
            <button
              onClick={() =>
                setCoupon((prevState) => ({
                  ...prevState,
                  request: true,
                }))
              }
              className='hover:font-black text-xs lg:text-base'
            >
              Apply Coupon
            </button>
          </div>
          <div className='text-sm lg:text-base text-blue-700 mt-4 font-bold underline'>
            <Link href='/masterclass'>For more details see Masterclass</Link>
          </div>
        </div>
        <div className='w-full mt-5 lg:mt-10'>
          <form className='w-full' onSubmit={(e) => e.preventDefault()}>
            <label
              className='block lg:w-3/5 xl:w-2/4 mx-auto pl-1 mt-6'
              htmlFor='name'
            >
              Full Name
            </label>
            <input
              type='text'
              placeholder='John Doe'
              autoComplete='name'
              id='name'
              value={data.name}
              onChange={(e) =>
                setData((prevState) => ({
                  ...prevState,
                  name: e.target.value,
                }))
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
              autoComplete='email'
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
            <div className='w-full lg:w-3/5 xl:w-2/4 mt-2 lg:mt-3 mx-auto'>
              <div className='flex my-3 lg:my-6'>
                <input
                  type='checkbox'
                  onChange={() => setAgreement((prevState) => !prevState)}
                />
                <p className='text-xs ml-5'>
                  I have read and agree to the{' '}
                  <Link href='/refund' className='text-blue-600'>
                    refund policy
                  </Link>
                  ,{' '}
                  <Link href='/privacy' className='text-blue-600'>
                    {' '}
                    privacy policy
                  </Link>
                  ,{' '}
                  <Link href='/terms' className='text-blue-600'>
                    terms of service
                  </Link>
                  .
                </p>
              </div>
              {data.name !== '' && data.email !== '' && agreement ? (
                <button
                  onClick={() => setSubmit(true)}
                  className='block bg-black text-white lg:text-xl rounded-full py-1.5 px-4 lg:py-2 lg:px-6 w-full'
                >
                  Pay
                </button>
              ) : (
                <button
                  disabled={true}
                  className='block bg-black/50 text-white lg:text-xl rounded-full py-1.5 px-4 lg:py-2 lg:px-6 w-full mb-5'
                >
                  Pay
                </button>
              )}
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};

function generateTransactionId() {
  const timestamp = Date.now(); // Current timestamp in milliseconds
  const randomValue = Math.floor(Math.random() * 1000000); // Random 6-digit number
  return `TXN-${timestamp}-${randomValue}`;
}

export default PayStack;
