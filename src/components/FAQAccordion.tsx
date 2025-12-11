'use client'

import { useState } from 'react'

interface FAQItem {
  question: string
  answer: string
}

interface FAQAccordionProps {
  faqs: FAQItem[]
}

export default function FAQAccordion({ faqs }: FAQAccordionProps) {
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  return (
    <div className="space-y-4">
      {faqs.map((faq, index) => (
        <div key={index} className="border border-gray-200 rounded-lg overflow-hidden">
          <button
            onClick={() => setOpenFaq(openFaq === index ? null : index)}
            className="w-full flex items-center justify-between p-6 bg-white hover:bg-gray-50 transition-colors text-left"
          >
            <span className="font-bold text-gray-900 pr-4">{faq.question}</span>
            <svg
              className={`w-6 h-6 text-accent-500 transform transition-transform flex-shrink-0 ${
                openFaq === index ? 'rotate-180' : ''
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          {openFaq === index && (
            <div className="px-6 pb-6 bg-gray-50">
              <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  )
}
