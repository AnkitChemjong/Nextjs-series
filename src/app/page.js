import {currentUser} from '@clerk/nextjs/server';
import { redirect } from 'next/navigation';
async function Home() {
  const user=await currentUser();
  const profileInfo=null;
  if(user && !profileInfo?._id) redirect('/onboard');
  return (
    <section className="mx-auto p-6 max-w-7xl lg:px-8">
    </section>
  );
}

export default Home;