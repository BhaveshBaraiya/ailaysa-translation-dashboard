// 
// Sidbar Right 
// 

const memories = [
  'Translation example',
  'Glossary',
  'Reference translations',
  'Style Guide'
];

const actions = [
  { name: 'Rewrite', icon: 'M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15' },
  { name: 'Shorten', icon: 'M14 5l7 7m0 0l-7 7m7-7H3' },
  { name: 'Simplify', icon: 'M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z' }
];

export default function SidebarRight() {
  return (
    <aside className="w-full bg-white rounded-lg shadow-sm flex flex-col h-full overflow-hidden">
      <div className="flex-1 overflow-y-auto">
        <div className="p-6">
          <h3 className="font-roboto font-medium text-[14px] text-[#3F4245] leading-none mb-8">Memories</h3>
          <ul className="space-y-[30px]">
            {memories.map((item, index) => (
              <li key={index} className="flex items-center justify-between cursor-pointer group">
                <span className="font-roboto font-normal text-[14px] text-[#666D74] leading-none group-hover:text-gray-900">
                  {item}
                </span>
                <svg className="w-[18px] h-[18px] text-[#666D74] group-hover:text-gray-600 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                </svg>
              </li>
            ))}
          </ul>
        </div>

        <div className="p-6">
          <h3 className="font-roboto font-medium text-[14px] text-[#3F4245] leading-none mb-8">Actions</h3>
          <ul className="space-y-[30px]">
            {actions.map((action, index) => (
              <li key={index} className="flex items-center gap-3 cursor-pointer group">
                <svg className="w-[18px] h-[18px] text-gray-400 group-hover:text-gray-600 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={action.icon} />
                </svg>
                <span className="font-roboto font-normal text-[14px] text-[#666D74] leading-none group-hover:text-gray-900">
                  {action.name}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </aside>
  );
}