import type { NextPage } from 'next';
import { GetStaticProps } from "next";
import { getSortedPostsData } from '../lib/posts';
import Layout from '../components/layout';
import Profile from '../components/profile/profile';
import LatestPosts from '../components/posts/latestPosts';

export const getStaticProps: GetStaticProps = async () => {
    const allPostsData = getSortedPostsData()
    return {
        props: {
            allPostsData
        }
    }
}

const Home: NextPage = ({allPostsData}: any) => {
  return (
      <Layout>
        <Profile />
        <div className='my-20'>
          <h1 className='text-3xl font-sans font-bold pb-2'>About Me</h1>
          <p className='font-serif text-lg'>
              Currently, I&apos;m focused on <span className='text-blueAccent dark:text-darkAccent'> web development</span> 
              , <span className='text-blueAccent dark:text-darkAccent'>machine learning</span> and topics related to 
              <span className='text-blueAccent dark:text-darkAccent'> Linux</span>.
              In my free time I enjoy playing badminton, reading, playing video games and learning 
              about new topics within the field of computer science.
          </p>
        </div>
        <LatestPosts allPostsData={allPostsData}/>
      </Layout>
  )
}

export default Home