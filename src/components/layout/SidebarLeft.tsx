// 
// Sidbar Left
// 

const navigationItems = [
  { id: 1, name: 'Title', state: 'completed' },
  { id: 2, name: 'Preface', state: 'completed' },
  { id: 3, name: 'Introduction', state: 'completed' },
  { id: 4, name: 'Ch 1: Life Lately', state: 'active' },
  { id: 5, name: 'Ch 1: Life Lately', state: 'pending' },
  { id: 6, name: 'Ch 1: Life Lately', state: 'pending' },
  { id: 7, name: 'Ch 1: Life Lately', state: 'pending' },
  { id: 8, name: 'Ch 1: Life Lately', state: 'pending' },
  { id: 9, name: 'Ch 1: Life Lately', state: 'pending' },
  { id: 10, name: 'Ch 1: Life Lately', state: 'pending' },
  { id: 11, name: 'Ch 1: Life Lately', state: 'pending' },
];

export default function SidebarLeft() {
  return (
    <aside className="w-full bg-white rounded-lg shadow-sm flex flex-col h-full overflow-hidden">
      <div className="p-5 pb-2 text-[14px] font-roboto font-normal text-gray-400 shrink-0">
        Sections
      </div>

      <nav className="flex-1 overflow-y-auto py-2 min-h-[200px]">
        <ul className="space-y-1">
          {navigationItems.map((item) => (
            <li key={item.id}>
              <button
                className={`w-full flex items-center gap-3 px-5 py-2.5 text-left transition-colors font-roboto font-normal text-[16px] leading-none
                  ${item.state === 'active' 
                    ? 'bg-[#F0F7FF] text-[#0074D3] border-l-[3px] font-medium border-[#0074D3] pl-[17px]' 
                    : 'text-[#030229] hover:bg-gray-50 border-l-[3px] border-transparent pl-[17px]'}
                `}
              >
                {item.state === 'completed' && (
                  <svg width="18" height="18" viewBox="0 0 15 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5.225 11.0229L0 5.79792L1.30625 4.49167L5.225 8.41042L13.6354 0L14.9417 1.30625L5.225 11.0229Z" fill="#0060AA"/>
                  </svg>
                )}
                {(item.state === 'active' || item.state === 'pending') && (
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    className={`w-[18px] h-[18px] shrink-0 ${
                      item.state === 'active' ? 'text-[#0060AA]' : 'text-[#B2B2B2]'
                    }`}
                  >
                    <path d="M1.83333 18.3333C1.32917 18.3333 0.897569 18.1538 0.538542 17.7948C0.179514 17.4358 0 17.0042 0 16.5V1.83333C0 1.32917 0.179514 0.897569 0.538542 0.538542C0.897569 0.179514 1.32917 0 1.83333 0H9.16667L14.6667 5.5V16.5C14.6667 17.0042 14.4872 17.4358 14.1281 17.7948C13.7691 18.1538 13.3375 18.3333 12.8333 18.3333H1.83333ZM8.25 6.41667V1.83333H1.83333V16.5H12.8333V6.41667H8.25Z" />
                  </svg>

                )}
                
                <span className={`truncate flex-1 ${item.state === 'active' ? 'opacity-100 font-medium' : 'opacity-50 ms-[8px]'}`}>{item.name}</span>
                
                {item.state === 'active' && (
                   <svg className="w-5 h-5 text-gray-400 shrink-0" fill="currentColor" viewBox="0 0 24 24">
                     <path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" />
                   </svg>
                )}
              </button>
            </li>
          ))}
        </ul>
      </nav>

      <div className="p-4 bg-[#F8F8F8] border-t mt-auto shrink-0">
        <button className="w-full flex items-center justify-center gap-2 py-2 font-roboto font-medium text-[14px] text-[#0074D3] leading-none hover:bg-gray-50 rounded transition-colors">
          Add File
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
          </svg>
        </button>
      </div>
    </aside>
  );
}