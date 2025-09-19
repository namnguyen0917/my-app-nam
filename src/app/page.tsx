'use client';

import { useTranslateStore } from '@/store/useTranslateStore';

export default function Home() {
  
  const { t , setLocale} = useTranslateStore();
  console.log('this here');
  
  return <>
            {t('products.title')} <br/>
          <button onClick={() => setLocale('en')}> lag EN</button>  <br/>
          <button onClick={() => setLocale('nl')}> lag N</button>  
        </>;
}
