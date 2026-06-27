// 
// Editor Toolbar
// 

export default function EditorToolbar() {
  return (
    <div className="bg-white p-4 flex items-center shrink-0 gap-6 flex-wrap justify-center">
      <div className="flex gap-4 text-gray-400 shrink-0">
        <button className="hover:text-gray-700">
          <svg className="w-[18px] h-[18px]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6" />
          </svg>
        </button>
        <button className="hover:text-gray-700">
          <svg className="w-[18px] h-[18px]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 10h-10a8 8 0 00-8 8v2M21 10l-6 6m6-6l-6-6" />
          </svg>
        </button>
      </div>
      
      <div className="flex flex-1 justify-center gap-6 text-[#363F4A] font-roboto font-bold text-[16px]">
        <button className="hover:bg-gray-100 rounded px-1">B</button>
        <button className="hover:bg-gray-100 rounded italic font-serif px-1">i</button>
        <button className="hover:bg-gray-100 rounded underline px-1">U</button>
        <button className="hover:bg-gray-100 rounded font-normal px-1">x₂</button>
        <button className="hover:bg-gray-100 rounded font-normal px-1">x²</button>
      </div>
      
      <button className="px-5 py-2 text-[14px] bg-[#0074D3] text-white rounded-md hover:bg-blue-700 font-roboto font-medium leading-none whitespace-nowrap">
        Save & Continue
      </button>
    </div>
  );
}