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
      <div className="p-3 bg-orange-100 text-orange-600 rounded-lg">
        {Icon && <Icon />}
      </div>
      <div>
        <h3
          className={`flex-1 font-bold ${active ? 'text-orange-500' : 'text-gray-800'}`}
        >
          {question}
        </h3>
        <p className="text-gray-600 mt-2">{answer}</p>
      </div>
    </div>
    // <div
    //   key={index}
    //   className={`mb-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-orange-100 border-l-4 border-l-orange-400`}
    // >
    //   <button
    //     className="w-full text-left p-6 flex justify-between items-center focus:outline-none group"
    //     onClick={typeof onClick === 'function' ? onClick : undefined}
    //   >
    //     <h3
    //       className={`font-semibold text-xl ${active ? 'text-orange-500' : 'text-gray-800'} group-hover:text-orange-500 transition-colors duration-300`}
    //     >
    //       {question}
    //     </h3>
    //     <span
    //       className={`${active ? 'bg-orange-500 text-white' : 'bg-orange-100 text-orange-500'} p-2 rounded-full flex-shrink-0 ml-4 transition-all duration-300 transform ${active ? 'rotate-180' : 'rotate-0'}`}
    //     >
    //       <ChevronDown className="w-5 h-5" />
    //     </span>
    //   </button>

    //   <div
    //     className={`overflow-hidden transition-all duration-500 ease-in-out ${active ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
    //   >
    //     <div className="p-6 pt-2 text-gray-600 border-t border-orange-100 bg-gradient-to-br from-white to-orange-50">
    //       <p className="leading-relaxed">{answer}</p>

    //       {/* Helpful indicator */}
    //       <div className="mt-4 flex items-center justify-end">
    //         <p className="text-sm text-gray-500 mr-2">
    //           Apakah jawaban ini membantu?
    //         </p>
    //         <div className="flex space-x-2">
    //           <button className="p-1 rounded-full hover:bg-gray-100 transition-colors duration-200">
    //             <svg
    //               className="w-5 h-5 text-gray-400 hover:text-green-500"
    //               fill="none"
    //               stroke="currentColor"
    //               viewBox="0 0 24 24"
    //             >
    //               <path
    //                 strokeLinecap="round"
    //                 strokeLinejoin="round"
    //                 strokeWidth="2"
    //                 d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905v.714L7.5 9.5 4 6.5v10a2 2 0 002 2h3"
    //               />
    //             </svg>
    //           </button>
    //           <button className="p-1 rounded-full hover:bg-gray-100 transition-colors duration-200">
    //             <svg
    //               className="w-5 h-5 text-gray-400 hover:text-red-500"
    //               fill="none"
    //               stroke="currentColor"
    //               viewBox="0 0 24 24"
    //             >
    //               <path
    //                 strokeLinecap="round"
    //                 strokeLinejoin="round"
    //                 strokeWidth="2"
    //                 d="M10 14H5.236a2 2 0 01-1.789-2.894l3.5-7A2 2 0 018.736 3h4.018a2 2 0 01.485.06l3.76.94m-7 10v5a2 2 0 002 2h.095c.5 0 .905-.405.905-.905V15.5L15 12l3.5 3.5v-10a2 2 0 00-2-2h-3"
    //               />
    //             </svg>
    //           </button>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
}
