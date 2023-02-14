import Image from 'next/image';
import * as React from 'react';

import ArrowLink from '@/components/links/ArrowLink';
import ButtonLink from '@/components/links/ButtonLink';
import UnderlineLink from '@/components/links/UnderlineLink';
import Seo from '@/components/Seo';

import heroPicture from '../../public/images/Zip-it.jpg';

/**
 * SVGR Support
 * Caveat: No React Props Type.
 *
 * You can override the next-env if the type is important to you
 * @see https://stackoverflow.com/questions/68103844/how-to-override-next-js-svg-module-declaration
 */
import Vercel from '~/svg/Vercel.svg';

// !STARTERCONF -> Select !STARTERCONF and CMD + SHIFT + F
// Before you begin editing, follow all comments with `STARTERCONF`,
// to customize the default configuration.

export default function HomePage() {
  return (
    <>
      {/* <Seo templateTitle='Home' /> */}
      <Seo />

      <main>
        <section className='bg-white'>
          <Image
            className='container m-0 object-center p-5'
            src={heroPicture}
            width={740}
            height={360}
            alt='zipIt business card hero'
          />
          <div className='layout relative flex flex-col items-center justify-center py-12 text-center'>
            <Vercel className='text-5xl' />
            <h1 className='mt-2'>
              Zip <span className='text-slate-600'>IT</span>
            </h1>
            <p className='mt-2 text-sm text-gray-800'>
              Welcome to{' '}
              <strong>
                Zip <span className='text-slate-600'>IT</span>
              </strong>
              , a leading provider of high-converting leads for businesses
              across multiple industries. Our proprietary data collection
              methods allow us to deliver the most accurate and up-to-date
              leads, ensuring that you receive the best possible results from
              your lead generation efforts.
            </p>
            <p className='mt-2 text-sm text-gray-700'>
              <ArrowLink href='/contact'>See More</ArrowLink>
            </p>

            <ButtonLink className='mt-6' href='/components' variant='light'>
              See all components
            </ButtonLink>

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
