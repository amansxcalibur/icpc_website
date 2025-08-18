'use client';

import React, { useState } from 'react'

const Faq = () => {
  const [openItems, setOpenItems] = useState({});

  const toggleItem = (index) => {
    setOpenItems(prev => {
      // If the clicked item is already open, close it
      if (prev[index]) {
        return {};
      }
      // Otherwise, close all items and open only the clicked one
      return { [index]: true };
    });
  };

  const faqData = [
    {
      question: "When is the team accepted in the ICPC portal?",
      answer: "On the same day of payment received it will be accepted in the ICPC Registration portal."
    },
    {
      question: "How can we know whether our payment is received?",
      answer: "You will receive an email intimation from our end and also, your team will be accepted in the ICPC Registration portal."
    },
    {
      question: "Last date for payment?",
      answer: "October 8, 2025."
    },
    {
      question: "How to cancel a team in ICPC Registration Site?",
      answer: "Coach has to login with the credentials and \"CANCEL\""
    },
    {
      question: "Last date of cancellation?",
      answer: "Teams interested in participating in the contest hosted by other sites in India shall cancel their team registration in the ICPC Registration portal on or before October 8, 2025."
    },
    {
      question: "Should they register again for regional as they only registered for online?",
      answer: "Selected teams are promoted from Preliminary round to Regional Round. There is NO need to register the team again for the Regional Round."
    },
    {
      question: "Guidelines for Registration to Online Contest",
      answer: [
        "Teams shall first register in Baylor Site.",
        "Each team shall have a coach.",
        "Coach is the faculty member from the same college as that of the team.",
        "Coach creates a team in the Baylor Site under \"Asia Amritapuri First Round Online Programming Contest\" Online contest.",
        "Coach is expected to create a team with their email id.",
        "While creating teams, the coach shall invite the contestants and reserve.",
        "There should be three members in a team, apart from a reserve person.",
        "It is not mandatory to keep a reserve person.",
        "Team members (contestants) shall complete their profile in Baylor Site.",
        "It is mandatory that all the details as required in the Baylor system shall be completed before the last date."
      ]
    },
    {
      question: "Do all team members need to pay the registration fee individually, or should it be paid only once per team?",
      answer: [
        "The registration fee is ₹1100 per team (not per individual).",
        "It needs to be paid only once per team, regardless of the number of team members.",
        "If multiple members from the same team have mistakenly paid the fee, they may contact the organizers with the payment details.",
        "The extra amount will be verified, and if eligible, the excess payment can be refunded as per the refund policy."
      ]
    }
  ];

  return (
    <div id="faq" className="w-full px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto py-6 sm:py-8 lg:py-12">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-6 sm:mb-8 lg:mb-12 text-foreground">
          Frequently Asked Questions
        </h1>
        
        {/* FAQ Section - shadcn style */}
        <div className="space-y-0 border rounded-md">
          {faqData.map((item, index) => (
            <div key={index} className="border-b last:border-b-0">
              <button
                className="flex w-full items-center justify-between py-4 px-6 text-left font-medium transition-all hover:bg-muted/50"
                onClick={() => toggleItem(index)}
                data-state={openItems[index] ? "open" : "closed"}
              >
                <span className="text-sm sm:text-base font-medium leading-relaxed">
                  {item.question}
                </span>
                <svg
                  className={`h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200 ${
                    openItems[index] ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              
              <div 
                className={`overflow-hidden transition-all duration-300 ease-out ${
                  openItems[index] 
                    ? 'max-h-[1000px] opacity-100' 
                    : 'max-h-0 opacity-0'
                }`}
              >
                <div className="px-6 pb-4 pt-0">
                  {Array.isArray(item.answer) ? (
                    <ol className="list-decimal list-inside space-y-2 text-sm sm:text-base text-muted-foreground leading-relaxed">
                      {item.answer.map((point, pointIndex) => (
                        <li key={pointIndex}>
                          {point}
                        </li>
                      ))}
                    </ol>
                  ) : (
                    <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                      {item.answer}
                    </p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Faq