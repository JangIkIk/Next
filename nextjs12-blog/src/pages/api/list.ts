
import type { NextApiRequest, NextApiResponse } from 'next';
import fs from "fs";
import path from "path";
const dataFilePath = path.resolve(process.cwd(), 'src/pages/api/db.json');

interface BlogItems{
  title: string;
  content: string;
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<BlogItems | string>
) {

  if(req.method === "GET"){
    const data = fs.readFileSync(dataFilePath, 'utf-8');
    const jsonData: BlogItems = JSON.parse(data);
    res.status(200).json( jsonData )
  } else if(req.method === "POST"){
    const newData = req.body;
    const currentData = JSON.parse(fs.readFileSync(dataFilePath, 'utf-8'));
    const updateData = [...currentData, newData];
    fs.writeFileSync(dataFilePath, JSON.stringify(updateData));
    res.status(200).json("성공");
  }
}




