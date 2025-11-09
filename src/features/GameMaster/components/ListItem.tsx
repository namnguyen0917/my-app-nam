"use client";
import { CategoryItemType } from "@/mocks/GameMaster"; 
import GemIcon from "@/features/shared/components/page/GemIcon"; 
import Image from 'next/image'  

interface Props {
  data?: CategoryItemType[];
  title?: string;
  coppyId?:number;
  handleCopy: (code: string, id: number) => Promise<void>;
}

export default function ListItem({ data, title, handleCopy, coppyId }:Props) {

  if (!data) return null;
  
  const formatCode = (id:number) => (`!!createitem = ` + id + ` = 2 = 1`);

  return (
    <div className="p-4 text-gray-100 text-sm leading-relaxed space-y-3 bg-gray-900/30">
        {data.map((item:CategoryItemType) => {
            const itemId = item.id;
            const code = formatCode(itemId);
            const checkCoppyId = (coppyId === itemId);
            return(
                <span key={item.id} className="flex gap-8 items-center hover:bg-slate-950/20" >
                    <Image src="/assets/pikachu.png" width={64} height={64} alt="" /> 
                     {/* <GemIcon key={item.level} index={item.level} /> */}
                    <b> {itemId} </b>
                    <b> { title + ` (Cấp ${item.level})` } </b>
                    <b onClick={() => (checkCoppyId ? {} : handleCopy(code, itemId))} className="cursor-pointer"> {code} </b>
                    <i className="fa-solid fa-copy cursor-pointer" onClick={() => (checkCoppyId ? {} : handleCopy(code, itemId))}></i>
                    <i className={checkCoppyId ? "text-green-300" : ""}>
                      {checkCoppyId ? "Copied !!!" : "Coppy"} 
                    </i>
                </span>
            )
        })}
    </div>
  );
}