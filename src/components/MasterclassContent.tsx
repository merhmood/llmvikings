'use client';

import React, { useEffect, useState } from 'react';
import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';

import masterclassImageNonAF from '@/assets/masterclass-nonaf.jpg';
import masterclassImageAF from '@/assets/masterclass-af.jpg';
import creditImage from '@/assets/credit.png';
import taughtImage from '@/assets/taught.png';
import certificateImage from '@/assets/certificate.png';
import Footer from '@/components/Footer';
import Navigation from '@/components/Navigation';
import axios from 'axios';

// hero
const heroNonAF = {
  image: masterclassImageNonAF,
  title: 'Boost Your Income and Productivity with AI in 2025',
  description:
    ' Discover the power of AI with our masterclass—learn prompt crafting, enhance results, and build creative solution seamlessly.',
  duration: '3 days',
  starts: '27th of December 2024',
  time: 'N/A',
  location: 'Google Meet or Zoom',
};
const heroAF = {
  image: masterclassImageAF,
  title: 'Boost Your Income and Productivity with AI in 2025',
  description: 'Empowering Nigerians to innovate',
  duration: '7 days',
  starts: '12th of February 2025',
  time: '8:15 pm - 9:00 pm (WAT)',
  location: 'Zoom',
};

// What you'll learn
const WYLNonAF = [
  'Craft clear, concise, and effective prompts tailored to different AI tasks.',
  'Techniques to refine prompts for accurate, relevant, and high-quality responses.',
  'Learn multi-step, conditional, and dynamic prompt designs for solving complex problems.',
  'Use prompts for storytelling, content creation, brainstorming, and more.',
  'Explore practical applications across industries such as marketing, customer service, education, and development.',
  'Create ethical and inclusive prompts to minimize biases in AI-generated outputs.',
  'Solve real-world challenges and gain actionable insights with guided exercises.',
];

const WYLAF = [
  '10X Your Productivity—Effortlessly: Discover how ChatGPT can help you work smarter, not harder, by automating tasks, brainstorming ideas, and streamlining your workflows.',
  'Unleash ChatGPT in Every Aspect of Your Life: Discover how to integrate ChatGPT into daily tasks like managing finances, improving family relationships, boosting productivity, choosing stylish outfits, unlocking new income streams etc.',
  'Master ChatGPT from Your Mobile Phone: Become a pro at using ChatGPT on your mobile device, enabling you to stay productive, creative, and informed wherever you go.', 
  'Become an Expert in Any Field—in Minutes: Learn how to ask the right questions and systematically extract valuable insights and knowledge from ChatGPT to gain mastery in any subject or industry—whether it’s becoming a marketing guru, acing job interviews with domain-specific knowledge, mastering crypto trading strategies, or even creating professional-level business plans effortlessly.',
  'Draft Like a Pro with ChatGPT: Transform your communication with ChatGPT by crafting flawless emails, proposals, reports, and presentations that leave a lasting impression.',
  'Enhance Your Texting and Communication Skills: Level up your messaging game using Meta AI tools on WhatsApp to improve clarity, persuasion, and engagement in your conversations.',
  'Create AI-Powered Content That Sells: Learn to generate compelling blog posts, social media captions, ad copy, and more with ChatGPT, boosting your online presence and income potential.',
  'AI in Customer Engagement and Support: Discover how to use AI tools like ChatGPT to enhance customer interactions, handle inquiries, and build stronger relationships in your business.',
  'AI-Driven Personal Growth: Use ChatGPT for goal setting, time management, and self-improvement, helping you stay organized and achieve your dreams faster.',
  'AI for Entrepreneurs and Business Owners: Explore how ChatGPT can optimize operations, generate creative ideas, and automate marketing for startups and established businesses alike.',
  'AI-Enhanced Learning and Studying: Find out how to use ChatGPT as a study assistant for mastering complex concepts, writing essays, and preparing for exams.',
  'Ethical and Responsible Use of AI: Understand how to use AI tools responsibly while minimizing biases, fostering inclusivity, and building trust in your work.',
];

// Skills you'll gain
const SYGNonAF = [
  'Foundations of Prompt Engineering',
  'Advanced Prompt Structuring',
  'Optimization Techniques',
  'Use Case Specialization',
  'Iterative Prompt Testing',
];

const SYGAF = [
  'Boost Productivity with AI',
  'Business Process Automation',
  'Monetizing AI Skills',
  'Personalized Learning and Skill Acquisition',
  'Creative Content Generation',
  'AI-Enhanced Communication',
  'AI for Personal Growth and Self-Management',
  'Foundations of Prompt Engineering',
  'Advanced Prompt Structuring',
  'Ethical and Responsible AI Use',
];

// Details to know
const DTKNonAF = [
  { image: certificateImage, text: 'Certificate of attendance' },
  { image: taughtImage, text: 'Taught in english' },
  { image: creditImage, text: 'Upto 150k free AI credits' },
];

const DTKAF = [
  { image: taughtImage, text: 'Taught in english' },
  { image: certificateImage, text: 'Certificate of attendance' },
];

function MasterclassContent() {
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
    <Content hero={heroNonAF} SYG={SYGNonAF} WYL={WYLNonAF} DTK={DTKNonAF} /> // For Non Africans
  ) : location && location === 'AF' ? (
    <Content hero={heroAF} SYG={SYGAF} WYL={WYLAF} DTK={DTKAF} /> // For Africans
  ) : (
    <div className='h-screen grid place-items-center'>
      <div className='w-10 h-10 lg:w-20 lg:h-20 bg-black rounded-lg loading'></div>
    </div>
  );
}

// Show contents for Non Africans
function Content({
  hero,
  SYG,
  WYL,
  DTK,
}: {
  hero: {
    image: StaticImageData;
    title: string;
    description: string;
    duration: string;
    starts: string;
    time: string;
    location: string;
  };
  SYG: string[];
  WYL: string[];
  DTK: { image: string | StaticImageData; text: string }[];
}) {
  const [wydHeight, setWydHeight] = useState('56');

  return (
    <div>
      <section className='max-w-6xl mx-auto pt-10'>
        <div>
          <header>
            <Navigation />
          </header>
        </div>
      </section>
      <section className='lg:mt-7'>
        <div className='bg-gray-50 py-16 lg:py-28'>
          <div className='lg:flex lg:justify-center items-center lg:w-fit lg:mx-auto'>
            <div className='relative ml-6 lg:ml-0 w-40 h-32 lg:w-60 lg:h-48'>
              <Image
                src={hero.image}
                alt='masterclass'
                fill
                objectFit='cover'
                className='rounded-3xl'
              />
            </div>
            <div className='pl-6 mt-5 lg:mt-0 w-11/12 lg:w-6/12 lg:ml-12'>
              <h2 className='text-2xl lg:text-3xl font-bold'>{hero.title}</h2>
              <p className='mt-2 lg:mt-2'>{hero.description}</p>
              <div className='font-bold my-2 lg:my-2'>
                <p>Duration: {hero.duration} </p>
                <p>Starts: {hero.starts}</p>
                <p>Time: {hero.time}</p>
                <p>Location: {hero.location}</p>
              </div>
              <div className='w-fit mt-5'>
                <Link
                  className='bg-black text-white lg:text-xl rounded-full py-1.5 px-4 lg:py-3 lg:px-6'
                  href='/masterclass/pay'
                >
                  Enroll
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='mt-14 lg:mt-16 lg:max-w-6xl mx-auto'>
        <h2 className='text-xl lg:text-3xl font-bold ml-10'>
          Skills you&apos;ll gain
        </h2>
        <div className='mt-0 lg:mt-7'>
          <ul className='list-disc flex overflow-x-scroll lg:flex-wrap lg:w-full gap-2 lg:gap-5 lg:ml-16 mobile pr-2 lg:pr-0'>
            {SYG.map((text, index) => (
              <div
                className={`basis-fit shrink-0 ${
                  index === 0 && 'ml-14 lg:ml-0'
                }`}
                key={index}
              >
                <ListItem border={true} text={text} />
              </div>
            ))}
          </ul>
        </div>
      </section>
      <section className='mt-12 lg:mt-14 w-4/5 max-w-6xl mx-auto'>
        <h2 className='text-xl lg:text-3xl font-bold'>
          What you&apos;ll learn
        </h2>
        <div className={`relative mt-2 lg:mt-3 h-${wydHeight} overflow-hidden`}>
          <ul className='lg:flex lg:flex-wrap lg:w-full ml-10'>
            {WYL.map((text, index) => (
              <div key={index} className='lg:basis-3/6 shrink-0 lg:pr-40'>
                <ListItem border={false} text={text} />
              </div>
            ))}
          </ul>
          <div>
            <div className='flex justify-end items-end mt-10'>
              <button
                className='font-medium hover:font-black text-sm lg:text-base'
                onClick={() => setWydHeight('56')}
              >
                Read less
              </button>
            </div>
            {wydHeight !== '100%' && (
              <div className='flex justify-end items-end absolute top-0 w-full h-full bg-gradient-to-b from-transparent to-white'>
                <button
                  className='font-medium hover:font-black text-sm lg:text-base'
                  onClick={() => setWydHeight('100%')}
                >
                  Read more
                </button>
              </div>
            )}
          </div>
        </div>
      </section>
      <section className='mt-12 lg:mt-14 w-4/5 max-w-6xl mx-auto'>
        <h2 className='text-xl lg:text-3xl font-bold'>Details to know</h2>
        <div className='mt-6 lg:mt-10'>
          <ul className='flex flex-wrap w-full ml-0 lg:ml-10'>
            {DTK.map((item, index) => (
              <div
                key={index}
                className='flex flex-col items-center justify-center mr-5 lg:mr-10 gap-2 mb-4 lg:mb-0'
              >
                <div className='relative w-8 h-8 lg:w-10 lg:h-10 '>
                  <Image
                    src={item.image}
                    alt={item.text}
                    fill
                    objectFit='contain'
                  />
                </div>
                <p className='w-full text-center text-xs lg:text-sm'>
                  {item.text}
                </p>
              </div>
            ))}
          </ul>
        </div>
      </section>
      <section className='mt-12 lg:mt-14 w-4/5 max-w-6xl mx-auto'>
        <h2 className='text-xl lg:text-3xl font-bold'></h2>
        <ul>
          <li>
            <img src='' alt='' />
            <h2></h2>
            <p></p>
            <div></div>
          </li>
          <li>
            <img src='' alt='' />
            <h2></h2>
            <p></p>
            <div></div>
          </li>
        </ul>
      </section>
      <div className='mt-12 lg:mt-16 w-fit mb-16 lg:mb-36 mx-auto'>
        <Link
          className='bg-black text-white lg:text-xl rounded-full py-1.5 px-4 lg:py-3 lg:px-6'
          href='/masterclass/pay'
        >
          Enroll for Masterclass
        </Link>
      </div>
      <Footer />
    </div>
  );
}

const ListItem = ({ border, text }: { border: boolean; text: string }) => {
  const listText = !border && text.split(':');
  return border ? (
    <li className='list-none px-5 py-3 text-xs w-fit lg:text-base mt-4 lg:mt-0 bg-[#f7f7f7] border border-[#b6b5b5] rounded-full'>
      {text}
    </li>
  ) : (
    <li className='list-disc mt-4 text-sm lg:text-base'>
      {
        <>
          <span className='font-bold'>{(listText as string[])[0]}</span>
          <span>:</span>
          <span>{(listText as string[])[1]}</span>
        </>
      }
    </li>
  );
};

export default MasterclassContent;
