import type { Dictionary } from "./ru";

export const en: Dictionary = {
  meta: {
    title: "IT Rehub - AI agents that win back lost revenue",
    description: "We diagnose your business, find where it's losing money and close the leaks with AI agents. Kazakhstan."
  },
  common: {
    whatsappMessage: "Hi! I'd like a business diagnostic from IT Rehub.",
    cta: "Message on WhatsApp",
    ctaShort: "WhatsApp",
    home: "Home",
    menu: "Menu",
    close: "Close",
    language: "Language",
    phone: "Phone",
    email: "Email"
  },
  nav: {
    product: "Product",
    process: "How we work",
    about: "About",
    faq: "FAQ"
  },
  hero: {
    eyebrow: "Business diagnostics · AI agents",
    title: "We find where your business is losing money.",
    titleAccent: "Then AI agents win it back.",
    lead: "We audit sales, support and operations, show you the leaks in numbers, and deploy AI agents that work 24/7 - no days off, no lost leads.",
    cta: "Get a diagnostic",
    ctaNote: "Message us on WhatsApp - let's talk about your case",
    secondary: "How it works"
  },
  scan: {
    title: "Diagnostic / sample",
    status: "Scanning processes",
    rows: [
      {
        label: "Leads after 7 pm",
        value: "unanswered",
        state: "leak"
      },
      {
        label: "Follow-ups",
        value: "not sent",
        state: "leak"
      },
      {
        label: "CRM data entry",
        value: "manual",
        state: "leak"
      },
      {
        label: "AI sales agent",
        value: "connected",
        state: "fixed"
      }
    ],
    found: "Leaks found: 3",
    note: "Sample report. Real data comes after the diagnostic."
  },
  strip: [
    "Diagnostics before implementation",
    "AI agents built around your process",
    "Results measured in numbers"
  ],
  leaks: {
    label: "Leaks",
    title: "Businesses rarely lose money loudly. Usually it's quiet - and daily.",
    text: "We look for places where money slips away unnoticed: in chats, spreadsheets and waiting times.",
    items: [
      {
        title: "Leads go unanswered",
        text: "A customer messaged in the evening or on a weekend - and went to whoever replied first."
      },
      {
        title: "Managers drown in routine",
        text: "They copy data, answer the same questions and have no time left to sell."
      },
      {
        title: "Customers don't come back",
        text: "No reminders, no follow-ups, no work with your customer base - money is left on the table."
      },
      {
        title: "Decisions are made blind",
        text: "Nobody sees at which stage customers drop off or what it costs."
      }
    ]
  },
  product: {
    label: "Product",
    title: "AI agents that close the leaks.",
    text: "An agent is a digital employee: it talks to customers, works with data and completes tasks by your rules."
  },
  agents: [
    {
      tag: "Sales",
      name: "Sales agent",
      text: "Replies to customers on WhatsApp, Instagram and your website in seconds, qualifies them and takes them to a booking or payment.",
      points: [
        "24/7 replies",
        "Lead qualification",
        "Booking and handoff to a manager"
      ]
    },
    {
      tag: "Support",
      name: "Support agent",
      text: "Handles common questions, shares order statuses and hands complex cases to a human.",
      points: [
        "Knowledge base",
        "Order statuses",
        "Escalation to staff"
      ]
    },
    {
      tag: "Operations",
      name: "Operations agent",
      text: "Moves data between systems, fills in your CRM and spreadsheets, prepares documents.",
      points: [
        "CRM and spreadsheets",
        "Documents",
        "Notifications"
      ]
    },
    {
      tag: "Analytics",
      name: "Analyst agent",
      text: "Collects the numbers and sends the owner a short daily summary: what works and what doesn't.",
      points: [
        "Daily reports",
        "Funnel monitoring",
        "Drop alerts"
      ]
    }
  ],
  demo: {
    label: "Before and after",
    title: "What changes with an agent.",
    before: "Before",
    after: "After",
    rows: [
      [
        "Reply in a few hours",
        "Reply in seconds"
      ],
      [
        "Leads scattered across chats",
        "Every lead in the CRM"
      ],
      [
        "Reports compiled by hand at month end",
        "Automatic daily summary"
      ],
      [
        "Customer forgotten after first contact",
        "Automatic follow-ups"
      ]
    ],
    chat: {
      label: "Sample conversation",
      agentName: "IT Rehub Agent",
      online: "online",
      messages: [
        {
          from: "client",
          text: "Hi, do you have any free slots tomorrow?",
          time: "22:47"
        },
        {
          from: "agent",
          text: "Good evening! Yes - tomorrow at 11:00 and 16:30. Which one works for you?",
          time: "22:47"
        },
        {
          from: "client",
          text: "16:30",
          time: "22:48"
        },
        {
          from: "agent",
          text: "Done - you're booked for tomorrow at 16:30. I'll send you a reminder the day before.",
          time: "22:48"
        }
      ],
      system: "Lead sent to CRM · manager notified",
      caption: "The customer wrote at 22:47. The agent replied instantly - and the lead didn't go to a competitor."
    }
  },
  channels: {
    label: "Channels",
    title: "Works where your customers are.",
    text: "We connect the agent to the channels and systems you already use.",
    items: [
      "WhatsApp",
      "Instagram",
      "Telegram",
      "Website",
      "CRM",
      "Google Sheets"
    ]
  },
  included: {
    label: "What's included",
    title: "What you get.",
    items: [
      "Diagnostic and leak estimate",
      "Agent configured to your rules",
      "Connection to your channels and systems",
      "Team training",
      "Support and improvements"
    ]
  },
  process: {
    label: "How we work",
    title: "From diagnostic to a working agent.",
    steps: [
      {
        title: "Diagnose",
        text: "We map the customer journey and internal processes to find where money and time are lost.",
        meta: "Start"
      },
      {
        title: "Estimate",
        text: "We put a price on each leak and pick where to start for the fastest impact.",
        meta: "Priorities"
      },
      {
        title: "Deploy",
        text: "We configure the AI agent for your process, connect it to your channels and train your team.",
        meta: "Pilot"
      },
      {
        title: "Measure",
        text: "We compare metrics before and after, refine the agent and scale what works.",
        meta: "Growth"
      }
    ]
  },
  about: {
    label: "About",
    title: "We bring businesses back to health.",
    lead: "IT Rehub is a team from Kazakhstan that combines business diagnostics with AI agents. We don't start with technology - we start with where your business is losing money.",
    nameTitle: "Why “Rehub”",
    nameText: "Rehub comes from “rehab” - rehabilitation. A doctor diagnoses first and treats second. So do we: we find where the business “hurts”, and only then deploy AI agents.",
    logoCaption: "Our mark - rising bars and an arrow pointing up: the path from diagnosis to growth."
  },
  mission: {
    label: "Mission",
    text: "To make AI a useful tool for ordinary businesses - clear, measurable and accessible, not a buzzword."
  },
  values: {
    label: "Values",
    title: "What we stand for.",
    items: [
      {
        title: "Diagnosis before solution",
        text: "We don't build anything until we understand the problem."
      },
      {
        title: "Honest numbers",
        text: "We measure results with metrics, not promises."
      },
      {
        title: "Humans in control",
        text: "Important decisions never go unchecked."
      },
      {
        title: "No lock-in",
        text: "We hand over access, documentation and logic - you're never tied to us."
      }
    ]
  },
  compare: {
    label: "Difference",
    title: "How we're different.",
    usualLabel: "Typical development",
    usual: "Sells hours and features. The result is your problem.",
    oursLabel: "IT Rehub",
    ours: "Sells a closed leak and a measurable result."
  },
  faq: {
    label: "FAQ",
    title: "The short version.",
    items: [
      {
        q: "What is an AI agent?",
        a: "It's AI-powered software that does an employee's tasks: replies to customers, works with data, updates your systems. Unlike a simple chatbot, an agent understands natural language and acts by your rules."
      },
      {
        q: "Will the agent replace my staff?",
        a: "No - it takes the routine off their plate, so people can focus on what needs a human: complex sales and customer relationships."
      },
      {
        q: "Do I need to change my CRM or messengers?",
        a: "No. We connect the agent to the tools you already use."
      },
      {
        q: "Is my data safe?",
        a: "The agent only gets access to the data it needs for the task. Access and rules are agreed with you in advance."
      },
      {
        q: "How much does it cost?",
        a: "It depends on the task and scale. After the diagnostic you'll get a clear proposal with the scope and price."
      },
      {
        q: "Where do we start?",
        a: "Message us on WhatsApp. We'll talk about your business and schedule a diagnostic."
      }
    ]
  },
  finalCta: {
    label: "Next step",
    title: "Find out where your business is losing money.",
    text: "Message us on WhatsApp - we'll discuss your case and schedule a diagnostic."
  },
  footer: {
    tagline: "Business diagnostics and AI agents.",
    pages: "Sections",
    contacts: "Contact",
    rights: "Kazakhstan"
  }
};
