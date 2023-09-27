import Hero from '@nerdflix-nx-cypress/shared/components/hero';
import SignInForm from '@nerdflix-nx-cypress/shared/components/sigin-form';
import { Metadata } from 'next';
import HomeBg from '@nerdflix-nx-cypress/shared/assets/resources/home-bg.jpg';

export const metadata: Metadata = {
  title: 'Nerdflix | Sign In',
  description: 'Sign in to see thousands of series and movies',
};

export default function Page() {
  return (
    <div>
      <Hero type="static" src={HomeBg} className="h-[116vh]">
        <SignInForm />
      </Hero>
    </div>
  );
}
