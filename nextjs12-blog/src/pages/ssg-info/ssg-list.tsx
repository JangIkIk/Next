import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import { getSortedPostsData, MarkdownDataType } from '../../../public/lib/posts';
import styles from "@/styles/simple.module.css";
import type { InferGetStaticPropsType, GetStaticProps } from "next";

export const getStaticProps:GetStaticProps<{data: MarkdownDataType[]}> = ()=>{
    const data = getSortedPostsData();
    return { props: { data }};
};

export default function Simple( {data}: InferGetStaticPropsType<typeof getStaticProps>){
    const router = useRouter();
    return(
        <>
            <Head>
                <title>공지사항</title>
            </Head>
            <section className={styles.simpleLayout}>
            <h2>공지사항 리스트</h2>
            <ul>
              {data && data.map(({ key, date, title }) => (
                  <Link href={`/ssg-info/${key}`}  key={key}>
                    <li className={styles.listLayout}>
                  <a>
                  {title}
                  <br />
                  {key}
                  <br />
                  {date}
                  </a>
                    </li>
                  </Link>
              ))}
            </ul>
            <Link href={"/"}><a>홈으로 돌아가기</a></Link>
            <button onClick={()=>router.replace("/")}>테스트로 돌아가기</button>
          </section>
        </>
    );
}