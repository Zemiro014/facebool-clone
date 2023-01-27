import Head from 'next/head'
import { Inter } from '@next/font/google'
import Header from '@/components/header/Header'
import Login from '@/components/Login';
import { getSession } from 'next-auth/react';
import Sidebar from '@/components/sidebar/Sidebar';
import Feed from '@/components/feed/Feed';
import Posts from '@/components/posts/Posts';

const inter = Inter({ subsets: ['latin'] })

export default function Home({ session }) {
  if(!session) return <Login />;

  return (
    <div>
      <Head>
        <title>Facebook clone</title>
      </Head>
      <Header />
      <main className='flex bg-gray-100'>
        {/* Sidebar */}
        <Sidebar />
        {/* Feed */}
        <Feed />
        {/* Widgets */}        
      </main>
    </div>
  )
}

export async function getServerSideProps(context) {
  // Get the user
  const session = await getSession(context);

  return {
    props: {
      session
    }
  }
}