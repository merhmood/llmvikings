'use client';

import React from 'react';
import Link from '../../node_modules/next/link';
import { usePathname } from 'next/navigation';

const Footer = () => {
  const pathName = usePathname();
  return (
    <div className='bg-gray-50 py-6'>
      <div className='flex flex-col lg:flex-row justify-between items-center w-4/5 max-w-6xl mx-auto'>
        <h2 className='text-xl lg:text-2xl font-semibold mb-3 lg:mb-0'>
          &copy; LLM Vikings {new Date().getFullYear()}
        </h2>
        <ul className='flex gap-6 lg:text-xl mb-3 lg:mb-0'>
          <li>
            <Link href='/'>Home</Link>
          </li>
          <li>
            <Link href='/masterclass'>Masterclass</Link>
          </li>
          <li>
            <Link href='/community'>Community</Link>
          </li>
          <li>
            <Link href='/about'>About</Link>
          </li>
        </ul>
        <ul className='flex gap-4 text-xs lg:text-sm text-gray-600 font-medium'>
          <li>
            <Link href='/terms'>Terms</Link>
          </li>
          {pathName === '/masterclass' && (
            <li>
              <Link href='/refund'>Refund</Link>
            </li>
          )}
          <li>
            <Link href='/privacy'>Privacy</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
