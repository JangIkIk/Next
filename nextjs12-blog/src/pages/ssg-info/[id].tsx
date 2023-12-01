import { getAllPostIds, getPostData, MarkdownDataType } from '../../../public/lib/posts';
import type {
    InferGetStaticPropsType,
    GetStaticProps,
    GetStaticPaths,
  } from 'next';
import Link from "next/link";
import {ParsedUrlQuery} from "querystring"
// URL 쿼리 문자열을 파싱한 결과를 나타냄 ?id=1 처럼

/*
    페이지에 동적경로가 있을때 정적으로 생성될 경로 목록을 정의한다.

    [사전렌더링]: 동적페이지에서 사용이 가능하다 pages/list/[id].tsx
    paths: pre-rendering 할 경로를 결정한다.
    fallback:{
        false:  빌드시점에 생성된 페이지만을 취급하며 이외요청은 404페이지로 
        true:  빌드시점에 에 생성된 페이지 이외의 요청이 들어오면 요청된 경로에 대한 페이지를 생성&캐시한다
        blocking: true와 비슷하게 빌드시점 이외의 경로를 처리하지만 페이지를 생성하는 동안 기다려야함
        }
*/
export const getStaticPaths: GetStaticPaths= (() => {
    const paths = getAllPostIds();
    return {
      paths,
      fallback: false,
    };
  })


export const getStaticProps: GetStaticProps = ( async ( {params}: ParsedUrlQuery | any ) => {

        const markdownData = await getPostData(params.id);
        return { props: { markdownData } }
   

}); 


export default function Read({markdownData} : InferGetStaticPropsType<typeof getStaticProps>){
    return(
        <div>
            {markdownData.title}
        <br />
            {markdownData.id}
        <br />
            {markdownData.date}
        <br />
            <div dangerouslySetInnerHTML={{ __html: markdownData.contentHtml }} />
            <Link href={"/"}>홈으로 가기</Link>
        </div>
    );
}