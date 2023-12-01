// node --no-warnings --loader ts-node/esm --watch posts.ts

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from "url";
// 마크다운 파일의 메타데이터를 추출하는데 사용되는 라이브러리
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

export interface MarkdownDataType{
    key: string;
    title: string;
    date: string;
}

const __dirname = path.dirname(fileURLToPath(import.meta.url))

// 현재 디렉토리를 기준으로한 마크다운 파일경로
const srcPath = path.join(__dirname, "../../src/markdown");

// 마크다운파일을 불러와 key를 파일이름 으로 지정하고 메타데이터만 추출
export function getSortedPostsData(): MarkdownDataType[] {
  // 마크다운 파일을 읽어와 배열에저장
  const fileNames: string[] = fs.readdirSync(srcPath);
  
  // markdown 폴더를 순회하여 파일을 가지고 온다.
  const markdownData: MarkdownDataType[] = fileNames.map((fileName) => {

    // 확장자 .md를 삭제후 가져온다
    const key: string = fileName.replace(/\.md$/, '');
    // 각파일의 대한 경로
    const fullPath: string = path.join(srcPath, fileName);
    // 각파일의 내용을 문자열로 읽어옴
    const fileContents: string = fs.readFileSync(fullPath, 'utf8');
    // gray-matter를 이용하여 문자열로 변환한 마크다운 내용을 객체로 파싱한다.
    const matterResult: any = matter(fileContents);
    // .md확장자를 제외한 파일이름을 키로 사용하고, 객체로 변환한 마크다운 내용중 data{title,date}를 객체로 반환
    return {
      key,
      ...matterResult.data,
    };
  });

  // 오름차순으로 정렬(날짜)
  return markdownData.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
}


// -------마크다운 문법을 불러와 보여주는 동적경로 방식



// 마크다운 파일들의 이름을 id 객체로 반환
export function getAllPostIds() {
  // 현재 디렉토리를 기준으로한 마크다운 파일경로
  const fileNames = fs.readdirSync(srcPath);
  return fileNames.map((fileName) => {
    return {
      params: {
        id: fileName.replace(/\.md$/, ''),
      },
    };
  });
}



// 정적내용을 객체로 파싱하고 html로 보여주기 위함
export async function getPostData(id: string) {
  // id로 파일이름을 받아 해당파일의 경로를 만듬
  const fullPath = path.join(srcPath, `${id}.md`);

  // id.md파일을 문자열로 읽어옴
  const fileContents = fs.readFileSync(fullPath, 'utf8');

  // gray-matter를 이용하여 문자열로 변환한 마크다운 내용을 객체로 파싱한다.
  const matterResult = matter(fileContents);

  // remark: Markdown 파일의 내용을 구문분석함
  // use(html): html플러그인을 추가하여 Markdown을 HTML로 변환하도록 설정
  // process: Markdown을 파싱하고 트랜스파일하는 메서드이며 내용을 처리하고 있다.
  const processedContent = await remark().use(html).process(matterResult.content);
  
  // 파싱한 Markdown을 문자열로 변환
  const contentHtml = processedContent.toString();

  return {
    id, // 파일이름
    contentHtml, // 마크다운내용을 html변환후 문자열로
    ...matterResult.data, // 마크다운파일의 메타데이터
  };
}
