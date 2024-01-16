'use client';
import { useState } from 'react';
import Card from '@/app/components/ui/Card';
import Input from '@/app/components/ui/Input';

const Dashboard: React.FC = () => {
  const [input, setInput] = useState<string>('');

  const matches = [
    {
      id: 1,
      name: 'John Doe',
      avatar:
        'https://cdn.discordapp.com/avatars/297864485996068864/86eff9813511d8173f0f0ff9d16ac340.png',
    },
    {
      id: 2,
      name: 'John Doe',
      avatar:
        'https://cdn.discordapp.com/avatars/297864485996068864/86eff9813511d8173f0f0ff9d16ac340.png',
    },
    {
      id: 3,
      name: 'John Doe',
      avatar:
        'https://cdn.discordapp.com/avatars/297864485996068864/86eff9813511d8173f0f0ff9d16ac340.png',
    },
    {
      id: 4,
      name: 'John Doe',
      avatar:
        'https://cdn.discordapp.com/avatars/297864485996068864/86eff9813511d8173f0f0ff9d16ac340.png',
    },
  ]

  return (
    <>
      <div className='grid gap-2 p-2'>
        <Card
          type='code'
          title='Bug in crud database'
          desc='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
          matches={matches}
        />
      </div>
    </>
  );
};

export default Dashboard;
