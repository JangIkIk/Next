import Head from "next/head";
import Link from "next/link";
import styles from '@/styles/create.module.css';
import { useState } from "react";

export default function Create(){
    const [title, setTitle] = useState<string>("");
    const [content, setContent] = useState<string>("");

    const postData = async ()=>{

        const response = await fetch('http://localhost:3000/api/list',{
            method: "POST",
            headers:{
                "Content-Type": 'application/json',
            },
            body: JSON.stringify({title, content})
        })
        const data = await response.json();
        console.log(data);
    }

    return(
        <div className={styles.layout}>
            <Head>
                <title>글 작성하기</title>
            </Head>
            <Link href={"/"}><a>홈으로가기</a></Link>
            <div className={styles.inputLayout}>
                <input value={title} onChange={({target})=>setTitle(target.value)}></input>
                <textarea value={content} onChange={({target})=>setContent(target.value)}></textarea>
                <button onClick={postData}>전송</button>
            </div>
        </div>
    );
}