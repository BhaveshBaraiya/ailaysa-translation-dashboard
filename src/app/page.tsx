// 
// Home Page
// 

import EditorToolbar from '../components/editor/EditorToolbar';
import TranslationTable from '../components/editor/TranslationTable';
import AppLayout from '../components/layout/AppLayout';

export default function Home() {
  return (
    <AppLayout>
      <div className="flex flex-col bg-white rounded-lg shadow-sm overflow-hidden lg:h-full h-auto">
        <EditorToolbar />
        <TranslationTable />
      </div>
    </AppLayout>
  );
}