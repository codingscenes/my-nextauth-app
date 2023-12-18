'use client';

import { Popover, PopoverContent, PopoverTrigger, Avatar, Button, } from '@nextui-org/react';

import { useSession } from 'next-auth/react';
import { signIn } from '@/actions/sign-in';
import { signOut } from '@/actions/sign-out';

export default function Profile() {

  // does not access cookies direclty
  // istead it connect backend
  const session = useSession();
  const sessionData = session.data;

  let content;

  if (session?.status === '"loading"') {
    content = null;
  } else if (sessionData?.user) {
    content = (<Popover placement='left'>
      <PopoverTrigger>
        <div className='flex justify-center items-center'>
          <Avatar src={sessionData?.user?.image || ''}
            alt={'Profile Avatar'}
            className='me-2'
          />
          {sessionData?.user?.name}
        </div>
      </PopoverTrigger>
      <PopoverContent>
        <div className='p-4'>
          <form action={signOut}>
            <Button type='submit' color='danger' variant='bordered'> SignOut </Button>
          </form>
        </div>
      </PopoverContent>
    </Popover>)
  } else {
    content = (<form action={signIn}>
      <Button type='submit'> Login </Button>
    </form>)
  }


  return content;

}