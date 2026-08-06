/**
 * Placeholder platform data. Curriculum imports should replace this module's
 * contents (or its future repository implementation), never UI components.
 */
export const curriculum = [
  { phase: "Foundation", weeks: [{ number: 1, title: "The Revenue Operating Model" }, { number: 2, title: "Revenue Process Mapping" }] },
  { phase: "Systems Practice", weeks: [{ number: 3, title: "CRM Architecture" }, { number: 4, title: "GTM Systems Design" }] },
];

export const weekSections = ["Overview", "Consulting Brief", "Business Context", "Systems Thinking", "Technical Implementation", "Practical Application", "Deliverables", "Portfolio Artifact", "Decision Journal", "Mentor Notes"];

export const engagements = [
  { client: "Northstar Analytics", industry: "B2B SaaS", status: "In progress", artifacts: 3, reflection: "Mapping the handoff between demand generation and sales." },
  { client: "Morrow & Co.", industry: "Professional Services", status: "Complete", artifacts: 5, reflection: "A practical exercise in pipeline governance and reporting clarity." },
  { client: "Aperture Works", industry: "Technology", status: "Planned", artifacts: 0, reflection: "Engagement scope to be defined." },
];

export const journalEntries = [
  { week: "Week 2", date: "This week", title: "Thinking in handoffs", text: "Noticed that process problems are usually ownership problems before they are tooling problems." },
  { week: "Week 1", date: "Last week", title: "Defining the system boundary", text: "Practised separating a business outcome from the systems that enable it." },
  { week: "Orientation", date: "Earlier", title: "Starting point", text: "Established a baseline for the type of operator I want to become." },
];

export const skills = [
  { name: "Revenue Operations", value: 42 }, { name: "CRM Architecture", value: 28 }, { name: "Marketing Operations", value: 35 }, { name: "GTM Engineering", value: 20 },
];
