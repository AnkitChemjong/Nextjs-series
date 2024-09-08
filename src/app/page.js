import {currentUser} from '@clerk/nextjs/server'
 async function Home() {
  const user=await currentUser();
  console.log(user);
  return (
    <section className="mx-auto p-6 max-w-7xl lg:px-8">
    </section>
  );
}

export default Home;