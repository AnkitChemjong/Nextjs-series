import Link from 'next/link';

const NotFound = () => {
  return (
    <div>
      <h1>This page cannot be found</h1>
      <Link href={'/'}>Go to Home</Link>

    </div>
  )
}

export default NotFound
