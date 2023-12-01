import Link from "next/link";

export default function(){
    return(
        <div>
            <Link href={"/"}><a>홈</a></Link>
            <Link href={"/create-list/create"}><a>글쓰기</a></Link>
            <Link href={"/ssg-info/ssg-list"}><a>공지사항</a></Link>  
        </div>
    );
}