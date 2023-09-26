import Hero from '@nerdflix-nx-cypress/shared/components/hero';
import SignInForm from '@nerdflix-nx-cypress/shared/components/sigin-form';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Nerdflix | Sign In',
  description: 'Sign in to see thousands of series and movies',
};

export default function Page() {
  return (
    <div>
      <Hero type="static" src="/home-bg.jpg" className="h-[116vh]">
        <SignInForm />
      </Hero>
    </div>
  );
}
