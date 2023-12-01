import Head from 'next/head';
import styles from '@/styles/index.module.css';
import Navbar from '@/components/Navbar';
import type { InferGetServerSidePropsType, GetServerSideProps } from 'next';


interface BlogItems{
  title: string;
  content: string;
}

export const getServerSideProps: GetServerSideProps<{data: BlogItems[]}> = (async () => {
  const res = await fetch('http://localhost:3000/api/list');
  const data: BlogItems[] = await res.json();
  return { props: { data } }});

export default function Home( {data} : InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <>
      <Head>
        <title>blog-home</title>
        <meta name="description" content="next.js blog test" />
      </Head>
      <header className={styles.layoutHeader}>
          <Navbar/>
      </header>
      <main className={styles.layoutMain}>
        { data && data.map((val, idx)=>{
          return(
            <div key={idx} className={styles.itemsBox}>
              <h3>제목: {val.title}</h3>
              <p>내용: {val.content}</p>
            </div>
          );
        })}
      </main>
    </>
  )
}
