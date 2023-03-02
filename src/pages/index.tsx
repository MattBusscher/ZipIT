import Image from 'next/image';
import * as React from 'react';

import ArrowLink from '@/components/links/ArrowLink';
import ButtonLink from '@/components/links/ButtonLink';
import UnderlineLink from '@/components/links/UnderlineLink';
import Seo from '@/components/Seo';

import logoPicture from '../../public/images/ZipItlogoBlack.gif';

/**
 * SVGR Support
 * Caveat: No React Props Type.
 *
 * You can override the next-env if the type is important to you
 * @see https://stackoverflow.com/questions/68103844/how-to-override-next-js-svg-module-declaration
 */

// !STARTERCONF -> Select !STARTERCONF and CMD + SHIFT + F
// Before you begin editing, follow all comments with `STARTERCONF`,
// to customize the default configuration.

export default function HomePage() {
  return (
    <>
      {/* <Seo templateTitle='Home' /> */}
      <Seo />

      <main>
        <section className=''>
          <div className='layout relative flex flex-col items-center justify-center py-12 text-center'>
            <div className='flex w-full items-center justify-center bg-black'>
              <Image src={logoPicture} alt='Zip it logo' />
            </div>
            <h1 className='mt-2 hover:scale-110 hover:underline'>
              Zip <span className='text-slate-400'>IT</span>
            </h1>
            <p className='mt-2 text-sm text-gray-700'>
              Welcome to{' '}
              <strong>
                Zip <span className='text-slate-400'>IT</span>
              </strong>
              , a leading provider of high-converting leads for businesses
              across multiple industries. Our proprietary data collection
              methods allow us to deliver the most accurate and up-to-date
              leads, ensuring that you receive the best possible results from
              your lead generation efforts.
            </p>
            <p className='mt-2 text-sm text-gray-500'>
              <ArrowLink href='/contact'>See More</ArrowLink>
            </p>

            <ButtonLink className='mt-6' href='/components' variant='light'>
              See all components
            </ButtonLink>
            <h1 className='p-4 uppercase text-slate-400 hover:scale-110 hover:underline'>
              Services
            </h1>
            <div className='grid gap-4 py-2 sm:grid-cols-1 lg:grid-cols-3'>
              <div className='rounded-md border-2 border-sky-800 p-4 text-slate-50'>
                <h3 className='hover:underline'>B2C Leads:</h3> We offer leads
                for businesses looking to reach consumers, including information
                about individuals and their purchasing habits, interests, and
                demographics.
              </div>
              <div className='rounded-md border-2 border-sky-800 p-4 text-slate-50'>
                <h3 className='hover:underline'>B2B Leads:</h3> We also provide
                leads for businesses seeking to reach other businesses,
                including information about companies and their employees,
                business type, and purchasing power.
              </div>
              <div className='rounded-md border-2 border-sky-800 p-4 text-slate-50'>
                <h3 className='hover:underline'>
                  Industries we specialize in:
                </h3>
                <ul>
                  <li className='hover:underline'>Healthcare</li>
                  <li className='hover:underline'>Finance</li>
                  <li className='hover:underline'>Technology</li>
                  <li className='hover:underline'>Retail</li>
                  <li className='hover:underline'>Manufacturing</li>
                  <li className='hover:underline'>And more!</li>
                </ul>
              </div>
            </div>

            <footer className='absolute bottom-2 text-gray-700'>
              © {new Date().getFullYear()} By{' '}
              <UnderlineLink href='/'>
                Zip <span className='text-slate-600'>IT</span>
              </UnderlineLink>
            </footer>
          </div>
        </section>
      </main>
    </>
  );
}
