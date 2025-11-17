"use client";
import { CategoryItemType } from "@/mocks/GameMaster"; 
import GemIcon from "@/features/shared/components/page/GemIcon";
import { getConfigImage } from "@/libs/utils"; 

interface Props {
  data?: CategoryItemType[];
  title?: string;
  coppyId?: number;
  type: string;
  handleCopy: (code: string, id: number) => Promise<void>;
}

export default function ListItem({ data, title, handleCopy, coppyId, type }:Props) {

  if (!data) return null;
  
  const formatCode = (id:number) => (`!!createitem = ` + id + ` = 2 = 1`);

  return (
    <div className="p-4 text-gray-100 text-sm leading-relaxed space-y-3 bg-gray-900/30">
        {data.map((item:CategoryItemType) => {

            const image = getConfigImage(type ,item.level);
            const label =  item?.label ? item.label : (title + ` (Cấp ${item.level})`);
            
            return(
                <span key={item.id} className="flex gap-8 items-center hover:bg-slate-950/20" >
                    <GemIcon nameImages={image.nameImg} index={item.startIndex} />
                    <b className="min-w-[230px]"> { label } </b>
                    <b> {item.id} </b>
                    <b onClick={() => ((coppyId === item.id) ? {} : handleCopy(formatCode(item.id), item.id))} className="cursor-pointer"> {formatCode(item.id)} </b>
                    <i className="fa-solid fa-copy cursor-pointer" onClick={() => ((coppyId === item.id) ? {} : handleCopy(formatCode(item.id), item.id))}></i>
                    <i className={(coppyId === item.id) ? "text-green-300" : ""}>
                      {(coppyId === item.id) ? "Copied !!!" : "Coppy"} 
                    </i>
                </span>
            )
        })}
    </div>
  );
}