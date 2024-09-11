import {currentUser} from '@clerk/nextjs/server';
import { redirect } from 'next/navigation';
import { fetchProfileAction } from '@/actions';
async function Home() {
  const user=await currentUser();
  const profileInfo=await fetchProfileAction(user?.id);
  if(user && !profileInfo?._id) redirect('/onboard');
  return (
    <section className="mx-auto p-6 max-w-7xl lg:px-8">
      Main Content
    </section>
  );
}

export default Home;