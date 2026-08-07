/**
 * Local-first curriculum schema. It intentionally holds only structure and
 * field placeholders; authored learning content is added in a later phase.
 */
export type MentorStatus = "Not assigned" | "Ready for review" | "Reviewed";
export type DeliverableStatus = "Not Started" | "In Progress" | "Submitted" | "Approved";
export type WeekStatus = "Locked" | "Unlocked" | "Completed" | "Approved";
export type PortfolioArtifactStatus = "Not Started" | "Draft" | "Complete" | "Approved";

export type ChecklistItem = { label: string; completed: boolean };
export type Deliverable = { title: string; status: DeliverableStatus };
export type ClientEngagement = {
  client: string;
  industry: string;
  companySize: string;
  engagementType: string;
  yourRole: string;
};

export type PortfolioArtifact = { name: string; status: PortfolioArtifactStatus };
export type PortfolioEntry = {
  completionDate: string;
  artifacts: PortfolioArtifact[];
  evidence: { githubRepository: string; loomWalkthrough: string; miroBoard: string; screenshots: string; supportingFiles: string };
  reflection: { whatILearned: string; problemsEncountered: string; decisionsMade: string; lessonsLearned: string; improvementsForNextTime: string };
  businessImpact: { businessProblem: string; solution: string; expectedOutcome: string; revenueImpact: string };
  communication: { executiveSummary: string; stakeholderNotes: string; presentationNotes: string };
  mentorReview: { feedback: string; revisionRequired: string; approved: string; finalScore: string };
};

export type CurriculumWeek = {
  week: number;
  title: string;
  identityProgression: string;
  objectives: ChecklistItem[];
  businessContext: string;
  consultingBrief: string;
  client: string;
  clientEngagement: ClientEngagement;
  deliverables: Deliverable[];
  portfolioArtifact: string;
  portfolio: { uploadedArtifacts: string; githubRepository: string; loomWalkthrough: string; miroBoard: string; executivePresentation: string };
  portfolioEntry: PortfolioEntry;
  decisionJournal: string;
  revenueImpact: string;
  mentorReview: { status: MentorStatus; feedback: string; approval: string; revisionRequired: string };
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
  const locked = week > 2;
  const completed = week === 1;
  const mentorStatus: MentorStatus = completed ? "Reviewed" : "Not assigned";
  return {
    week,
    title: `Week ${String(week).padStart(2, "0")}`,
    identityProgression: placeholder,
    objectives: [{ label: "Objective placeholder", completed: false }],
    businessContext: placeholder,
    consultingBrief: placeholder,
    client: "Client placeholder",
    clientEngagement: { client: "Client placeholder", industry: "Industry placeholder", companySize: "Company size placeholder", engagementType: "Engagement type placeholder", yourRole: "Role placeholder" },
    deliverables: [{ title: "Deliverable placeholder", status: "Not Started" }],
    portfolioArtifact: placeholder,
    portfolio: { uploadedArtifacts: "Artifact placeholder", githubRepository: "Repository placeholder", loomWalkthrough: "Walkthrough placeholder", miroBoard: "Board placeholder", executivePresentation: "Presentation placeholder" },
    portfolioEntry: {
      completionDate: "Completion date placeholder",
      artifacts: ["Business Analysis", "CRM Design", "Process Diagram", "Automation Design", "SQL Work", "Documentation"].map((name) => ({ name, status: "Not Started" })),
      evidence: { githubRepository: "Repository placeholder", loomWalkthrough: "Walkthrough placeholder", miroBoard: "Board placeholder", screenshots: "Screenshot placeholder", supportingFiles: "Supporting file placeholder" },
      reflection: { whatILearned: placeholder, problemsEncountered: placeholder, decisionsMade: placeholder, lessonsLearned: placeholder, improvementsForNextTime: placeholder },
      businessImpact: { businessProblem: placeholder, solution: placeholder, expectedOutcome: placeholder, revenueImpact: placeholder },
      communication: { executiveSummary: placeholder, stakeholderNotes: placeholder, presentationNotes: placeholder },
      mentorReview: { feedback: placeholder, revisionRequired: placeholder, approved: placeholder, finalScore: placeholder },
    },
    decisionJournal: placeholder,
    revenueImpact: placeholder,
    mentorReview: { status: mentorStatus, feedback: placeholder, approval: placeholder, revisionRequired: placeholder },
    mentorStatus,
    locked,
    completed,
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
export const nextMilestone = currentWeek.deliverables[0].title;

export function getWeekStatus(week: CurriculumWeek): WeekStatus {
  if (week.locked) return "Locked";
  if (week.mentorReview.approval !== placeholder) return "Approved";
  if (week.completed) return "Completed";
  return "Unlocked";
}

export function getWeekCompletion(week: CurriculumWeek) {
  const total = week.objectives.length + week.deliverables.length;
  const complete = week.objectives.filter((item) => item.completed).length + week.deliverables.filter((item) => item.status === "Approved").length;
  return total ? Math.round((complete / total) * 100) : 0;
}

export const portfolioEntries = curriculumWeeks.map(({ phase, ...week }) => ({ phase, week, entry: week.portfolioEntry }));
export const portfolioArtifacts = portfolioEntries.flatMap(({ entry, week, phase }) => entry.artifacts.map((artifact) => ({ ...artifact, week, phase })));
export const approvedPortfolioArtifacts = portfolioArtifacts.filter(({ status }) => status === "Approved");
export const portfolioCompletionPercentage = Math.round((approvedPortfolioArtifacts.length / portfolioArtifacts.length) * 100);
export const latestPortfolioArtifact = [...portfolioArtifacts].reverse().find(({ status }) => status === "Approved") ?? portfolioArtifacts[0];
export const nextPortfolioArtifact = portfolioArtifacts.find(({ status }) => status !== "Approved") ?? portfolioArtifacts.at(-1)!;

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
