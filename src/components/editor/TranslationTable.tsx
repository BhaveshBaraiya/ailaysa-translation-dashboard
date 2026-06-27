// 
// Translation Table
// 

"use client";

import { useState, useEffect } from 'react';

interface TranslationRow {
  id: number;
  source: string;
  target: string;
  isActive: boolean;
}

export default function TranslationTable() {
  const [data, setData] = useState<TranslationRow[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchTranslations = async () => {
      try {
        const response = await fetch('/api/translations');
        if (!response.ok) throw new Error('Failed to fetch translations');
        const result = await response.json();
        setData(result);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred');
      } finally {
        setIsLoading(false);
      }
    };

    fetchTranslations();
  }, []);

  return (
    <div className="p-0 md:p-6 w-full h-full flex flex-col min-h-0">
      <div className="flex flex-col w-full flex-1 min-h-0 bg-white border border-[#EAEFF4] md:rounded-lg shadow-sm overflow-hidden">      
        <div className="grid grid-cols-2 border-b border-[#EAEFF4] bg-white text-center shrink-0 w-full">
          <div className="py-4 font-inter font-medium text-[13px] text-[#363F4A] leading-none">Source style</div>
          <div className="py-4 font-inter font-medium text-[13px] text-[#363F4A] leading-none">Target style</div>
        </div>        
        <div className="flex-1 min-h-0 overflow-y-auto relative">
          {isLoading ? (
            <div className="absolute inset-0 flex items-center justify-center bg-white z-20">
              <div className="w-8 h-8 border-4 border-[#0074D3] border-t-transparent rounded-full animate-spin"></div>
            </div>
              ) : error ? (
              <div className="flex h-full items-center justify-center">
                <div className="text-center">
                  <p className="text-[16px] font-medium text-[#363F4A]">
                    Failed to load translations
                  </p>
                  <p className="mt-2 text-[14px] text-[#5F6A76]">
                    {error}
                  </p>
                  <button onClick={() => window.location.reload()} className="mt-6 rounded-md bg-[#0074D3] px-5 py-2 font-inter text-[14px] font-medium text-white transition-colors hover:bg-[#0063B5]">
                      Reset
                    </button>
                </div>
            </div>
          ) : (
            data.map((row) => (
              <div key={row.id} className="grid grid-cols-2 border-b border-[#EAEFF4] last:border-b-0 w-full">
                <div className={`p-5 border-r border-[#EAEFF4] font-roboto font-normal text-[14px] leading-[19px] tracking-[1px] text-[#363F4A] whitespace-pre-wrap ${row.isActive ? 'bg-[#F4F9FF]' : ''}`}>
                  {row.source}
                </div>
                <div className={`p-5 relative border-[#EAEFF4] font-roboto font-normal text-[14px] leading-[19px] tracking-[1px] text-[#363F4A] whitespace-pre-wrap ${row.isActive ? 'border-[1.5px] border-[#0074D3] shadow-sm' : ''}`}>
                  {row.target}
                  {row.isActive && (
                    <div className="absolute bottom-3 right-3 flex items-center gap-2">
                      <svg className="w-4 h-4 text-[#008A5E]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                  )}
                </div>
              </div>
            ))
          )}
        </div>        
        <div className="py-[14px] flex justify-center items-center gap-[18px] bg-white border-t border-[#EAEFF4] shrink-0 w-full">
          <button className="text-[#363F4A] hover:text-black">
            <svg width="10" height="15" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M6.5 11L1.5 6L6.5 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          <div className="flex items-center gap-3">
            <div className="w-[32px] h-[32px] border border-[#E4E4E4] rounded flex items-center justify-center font-roboto font-normal text-[14px] text-[#363F4A]">1</div>
            <span className="font-roboto font-normal text-[14px] text-[#5F6A76] leading-none">of 42 pages</span>
          </div>
          <button className="text-[#363F4A] hover:text-black">
            <svg width="10" height="15" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1.5 11L6.5 6L1.5 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}