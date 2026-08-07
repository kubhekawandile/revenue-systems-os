/**
 * Local-first curriculum schema. It intentionally holds only structure and
 * field placeholders; authored learning content is added in a later phase.
 */
export type MentorStatus = "Not assigned" | "Ready for review" | "Reviewed";

export type CurriculumWeek = {
  week: number;
  title: string;
  identityProgression: string;
  objectives: string[];
  businessContext: string;
  consultingBrief: string;
  client: string;
  deliverables: string[];
  portfolioArtifact: string;
  decisionJournal: string;
  revenueImpact: string;
  mentorStatus: MentorStatus;
  locked: boolean;
  completed: boolean;
};

export type CurriculumPhase = {
  id: string;
  title: string;
  weeks: CurriculumWeek[];
};

const placeholder = "Content placeholder";

function createWeek(week: number): CurriculumWeek {
  return {
    week,
    title: `Week ${String(week).padStart(2, "0")}`,
    identityProgression: placeholder,
    objectives: [placeholder],
    businessContext: placeholder,
    consultingBrief: placeholder,
    client: "Client placeholder",
    deliverables: ["Deliverable placeholder"],
    portfolioArtifact: placeholder,
    decisionJournal: placeholder,
    revenueImpact: placeholder,
    mentorStatus: week === 1 ? "Reviewed" : "Not assigned",
    locked: week > 2,
    completed: week === 1,
  };
}

/** Exactly 30 weeks across five import-ready phases. */
export const curriculum: CurriculumPhase[] = Array.from({ length: 5 }, (_, phaseIndex) => {
  const firstWeek = phaseIndex * 6 + 1;
  return {
    id: `phase-${phaseIndex + 1}`,
    title: `Phase ${phaseIndex + 1}`,
    weeks: Array.from({ length: 6 }, (_, weekIndex) => createWeek(firstWeek + weekIndex)),
  };
});

export const curriculumWeeks = curriculum.flatMap((phase) => phase.weeks.map((week) => ({ ...week, phase })));
export const completedWeeks = curriculumWeeks.filter(({ completed }) => completed);
export const currentWeek = curriculumWeeks.find(({ completed, locked }) => !completed && !locked) ?? curriculumWeeks.at(-1)!;
export const currentPhase = currentWeek.phase;
export const completionPercentage = Math.round((completedWeeks.length / curriculumWeeks.length) * 100);
export const nextMilestone = currentWeek.deliverables[0];

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
