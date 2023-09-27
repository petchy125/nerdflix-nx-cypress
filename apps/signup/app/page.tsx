import Hero from '@nerdflix-nx-cypress/shared/components/hero';
import SignUpForm from '@nerdflix-nx-cypress/shared/components/signup-form';
import { Metadata } from 'next';
import HomeBg from '@nerdflix-nx-cypress/shared/assets/resources/home-bg.jpg';

export const metadata: Metadata = {
  title: 'Nerdflix | Sign Up',
  description: 'Create an account to access thousands of series and movies',
};

export default function Page() {
  return (
    <div>
      <Hero className="h-[116vh]" type="static" src={HomeBg}>
        <SignUpForm />
      </Hero>
    </div>
  );
}
