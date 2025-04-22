import type { FAQ } from '@senkou/types/faq';
// import { ChevronDown } from 'lucide-react';

export default function FAQ({
  // index,
  active = false,
  // onClick,
  icon: Icon,
  question,
  answer,
}: FAQ &
  Readonly<{
    index: string | number;
    active: boolean;
    onClick?: () => void;
  }>) {
  return (
    <div className="flex items-start gap-4 mb-6">
      <div className="p-3 text-orange-600 bg-orange-100 rounded-lg">
        {Icon && <Icon />}
      </div>
      <div>
        <h3
          className={`flex-1 font-bold ${active ? 'text-orange-500' : 'text-gray-800'}`}
        >
          {question}
        </h3>
        <p className="mt-2 text-gray-600">{answer}</p>
      </div>
    </div>
  );
}
