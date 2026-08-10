/**
 * Local-first curriculum schema. It intentionally holds only structure and
 * field placeholders; authored learning content is added in a later phase.
 */
export type MentorStatus = "Not assigned" | "Ready for review" | "Reviewed";
export type DeliverableStatus = "Not Started" | "In Progress" | "Submitted" | "Approved";
export type WeekStatus = "Locked" | "Unlocked" | "Completed" | "Approved";
export type PortfolioArtifactStatus = "Not Started" | "Draft" | "Complete" | "Approved";
export type EngagementStatus = "Not Started" | "Discovery" | "Analysis" | "Design" | "Implementation" | "Review" | "Revision" | "Approved" | "Production Ready";
export type CommunicationStatus = "Not Started" | "In Progress" | "Ready for Review" | "Approved";
export type CommunicationEvidenceStatus = "Not Started" | "Captured" | "Reviewed" | "Approved";
export type ReviewStatus = "Not Started" | "Ready for Review" | "In Review" | "Revision Required" | "Revised" | "Approved" | "Complete";
export type ReviewStageName = "Implementation" | "Self Review" | "AI Architecture Review" | "Business Review" | "Revision" | "Documentation Audit" | "Portfolio Approval" | "Production Ready";
export type ConsultingStage = "Business Problem" | "Business Process" | "System Design" | "Data Architecture" | "Automation" | "AI Augmentation" | "Measurement" | "Communication" | "Continuous Improvement" | "Production-Ready Delivery" | "Continuous Quality Assurance" | "Business & Commercial Validation";

export type ChecklistItem = { label: string; completed: boolean };
export type Deliverable = { title: string; description: string; status: DeliverableStatus; dueState: string; output: string; evidence: string; reviewerStatus: MentorStatus };
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
  evidence: { githubRepository: string; loomWalkthrough: string; miroBoard: string; screenshots: string; supportingFiles: string; sqlWork: string; crmWork: string; diagrams: string; presentations: string };
  reflection: { whatILearned: string; problemsEncountered: string; decisionsMade: string; lessonsLearned: string; improvementsForNextTime: string };
  businessImpact: { businessProblem: string; solution: string; expectedOutcome: string; revenueImpact: string };
  communication: { executiveSummary: string; stakeholderNotes: string; presentationNotes: string };
  mentorReview: { feedback: string; revisionRequired: string; approved: string; finalScore: string };
};

export type ConsultingEngagement = {
  status: EngagementStatus;
  currentObjective: string;
  clientContext: { clientName: string; clientType: string; industry: string; businessModel: string; companySize: string; businessContext: string; stakeholders: string; constraints: string };
  consultingBrief: { title: string; clientProblem: string; businessObjective: string; assignment: string; expectedOutcome: string; constraints: string; availableEvidence: string; successCriteria: string };
  businessProblem: { problemStatement: string; symptoms: string; rootCause: string; businessImpact: string; assumptions: string; unknowns: string };
  businessProcess: { currentProcess: string; processSteps: string; stakeholders: string; handoffs: string; bottlenecks: string; failurePoints: string; desiredProcess: string; whiteboardArtifact: string };
  systemsThinking: { systemBoundary: string; feedbackLoops: string; crossFunctionalImpact: string };
  systemDesign: { systemOverview: string; architectureNotes: string; components: string; dependencies: string; tradeoffs: string; designDecisions: string; architectureArtifact: string };
  technicalImplementation: { implementationObjective: string; tasks: ChecklistItem[]; status: DeliverableStatus; tools: string; configuration: string; implementationNotes: string; technicalEvidence: string };
  practicalApplication: { exercise: string; instructions: string; output: string; judgmentExercise: string; revenueImpact: string; reflection: string };
  communication: {
    status: CommunicationStatus;
    objective: { objective: string; purpose: string; desiredOutcome: string };
    audience: { audience: string; stakeholder: string; stakeholderRole: string; communicationLevel: string; decisionMaker: string };
    context: { situation: string; context: string; businessRelevance: string; informationRequired: string; decisionOrActionRequired: string };
    writtenCommunication: { consultingUpdate: string; executiveSummary: string; recommendation: string; stakeholderMessage: string; meetingFollowUp: string; writtenExplanation: string };
    presentation: { presentation: string; demo: string; walkthrough: string; loomWalkthrough: string; miroWalkthrough: string; verbalExplanation: string };
    evidence: CommunicationEvidence[];
    reflection: { communicatedWell: string; unclear: string; audienceResponse: string; improvements: string; nextTime: string; keyLesson: string };
    review: { clarity: string; structure: string; businessRelevance: string; audienceAwareness: string; technicalExplanation: string; recommendationQuality: string; confidence: string; mentorFeedback: string; reviewStatus: CommunicationStatus };
  };
  decisionJournal: { decision: string; context: string; optionsConsidered: string; chosenOption: string; reasoning: string; tradeoffs: string; expectedImpact: string; actualImpact: string; lessonLearned: string };
  qualityReview: { criteria: string; findings: string; remediation: string };
  review: MentorReviewRecord;
  reviewWorkflow: { stage: ReviewStageName; completed: boolean }[];
  applicableStages: Partial<Record<ConsultingStage, string>>;
};

export type CommunicationEvidence = { type: string; title: string; description: string; reference: string; notes: string; date: string; status: CommunicationEvidenceStatus };
export type MentorReviewRecord = {
  reviewObjective: string;
  artifactUnderReview: string;
  currentStage: ReviewStageName;
  reviewerType: string;
  reviewStatus: ReviewStatus;
  reviewDate: string;
  critique: { strengths: string; issuesRisks: string; questionsChallenges: string };
  learnerDefense: { response: string; reasoning: string; tradeoffs: string };
  revision: { requiredRevisions: string; revisionNotes: string; revisionStatus: ReviewStatus };
  reReview: { status: ReviewStatus; remainingConcerns: string; outcome: string };
  approval: { decision: string; notes: string; productionReadyStatus: ReviewStatus };
  evidence: { type: string; title: string; description: string; reference: string; notes: string; date: string; status: ReviewStatus }[];
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
  decisionJournal: ConsultingEngagement["decisionJournal"];
  revenueImpact: string;
  engagement: ConsultingEngagement;
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
const empty = "";
const reviewStages: ReviewStageName[] = ["Implementation", "Self Review", "AI Architecture Review", "Business Review", "Revision", "Documentation Audit", "Portfolio Approval", "Production Ready"];

function createWeek(week: number): CurriculumWeek {
  const locked = week > 2;
  const completed = week === 1;
  const mentorStatus: MentorStatus = completed ? "Reviewed" : "Not assigned";
  const decisionJournal: ConsultingEngagement["decisionJournal"] = { decision: empty, context: empty, optionsConsidered: empty, chosenOption: empty, reasoning: empty, tradeoffs: empty, expectedImpact: empty, actualImpact: empty, lessonLearned: empty };
  return {
    week,
    title: `Week ${String(week).padStart(2, "0")}`,
    identityProgression: placeholder,
    objectives: [{ label: "Objective placeholder", completed: false }],
    businessContext: placeholder,
    consultingBrief: placeholder,
    client: "Client placeholder",
    clientEngagement: { client: "Client placeholder", industry: "Industry placeholder", companySize: "Company size placeholder", engagementType: "Engagement type placeholder", yourRole: "Role placeholder" },
    deliverables: [{ title: "Deliverable placeholder", description: empty, status: "Not Started", dueState: empty, output: empty, evidence: empty, reviewerStatus: "Not assigned" }],
    portfolioArtifact: placeholder,
    portfolio: { uploadedArtifacts: "Artifact placeholder", githubRepository: "Repository placeholder", loomWalkthrough: "Walkthrough placeholder", miroBoard: "Board placeholder", executivePresentation: "Presentation placeholder" },
    portfolioEntry: {
      completionDate: "Completion date placeholder",
      artifacts: ["Business Analysis", "CRM Design", "Process Diagram", "Automation Design", "SQL Work", "Documentation"].map((name) => ({ name, status: "Not Started" })),
      evidence: { githubRepository: "Repository placeholder", loomWalkthrough: "Walkthrough placeholder", miroBoard: "Board placeholder", screenshots: "Screenshot placeholder", supportingFiles: "Supporting file placeholder", sqlWork: empty, crmWork: empty, diagrams: empty, presentations: empty },
      reflection: { whatILearned: placeholder, problemsEncountered: placeholder, decisionsMade: placeholder, lessonsLearned: placeholder, improvementsForNextTime: placeholder },
      businessImpact: { businessProblem: placeholder, solution: placeholder, expectedOutcome: placeholder, revenueImpact: placeholder },
      communication: { executiveSummary: placeholder, stakeholderNotes: placeholder, presentationNotes: placeholder },
      mentorReview: { feedback: placeholder, revisionRequired: placeholder, approved: placeholder, finalScore: placeholder },
    },
    decisionJournal,
    revenueImpact: placeholder,
    engagement: {
      status: "Not Started",
      currentObjective: empty,
      clientContext: { clientName: empty, clientType: empty, industry: empty, businessModel: empty, companySize: empty, businessContext: empty, stakeholders: empty, constraints: empty },
      consultingBrief: { title: empty, clientProblem: empty, businessObjective: empty, assignment: empty, expectedOutcome: empty, constraints: empty, availableEvidence: empty, successCriteria: empty },
      businessProblem: { problemStatement: empty, symptoms: empty, rootCause: empty, businessImpact: empty, assumptions: empty, unknowns: empty },
      businessProcess: { currentProcess: empty, processSteps: empty, stakeholders: empty, handoffs: empty, bottlenecks: empty, failurePoints: empty, desiredProcess: empty, whiteboardArtifact: empty },
      systemsThinking: { systemBoundary: empty, feedbackLoops: empty, crossFunctionalImpact: empty },
      systemDesign: { systemOverview: empty, architectureNotes: empty, components: empty, dependencies: empty, tradeoffs: empty, designDecisions: empty, architectureArtifact: empty },
      technicalImplementation: { implementationObjective: empty, tasks: [{ label: "Implementation task placeholder", completed: false }], status: "Not Started", tools: empty, configuration: empty, implementationNotes: empty, technicalEvidence: empty },
      practicalApplication: { exercise: empty, instructions: empty, output: empty, judgmentExercise: empty, revenueImpact: empty, reflection: empty },
      communication: {
        status: "Not Started",
        objective: { objective: empty, purpose: empty, desiredOutcome: empty },
        audience: { audience: empty, stakeholder: empty, stakeholderRole: empty, communicationLevel: empty, decisionMaker: empty },
        context: { situation: empty, context: empty, businessRelevance: empty, informationRequired: empty, decisionOrActionRequired: empty },
        writtenCommunication: { consultingUpdate: empty, executiveSummary: empty, recommendation: empty, stakeholderMessage: empty, meetingFollowUp: empty, writtenExplanation: empty },
        presentation: { presentation: empty, demo: empty, walkthrough: empty, loomWalkthrough: empty, miroWalkthrough: empty, verbalExplanation: empty },
        evidence: ["Screenshot", "Document", "Presentation", "Miro board", "Loom walkthrough", "Diagram", "Recording", "Other evidence"].map((type) => ({ type, title: empty, description: empty, reference: empty, notes: empty, date: empty, status: "Not Started" })),
        reflection: { communicatedWell: empty, unclear: empty, audienceResponse: empty, improvements: empty, nextTime: empty, keyLesson: empty },
        review: { clarity: empty, structure: empty, businessRelevance: empty, audienceAwareness: empty, technicalExplanation: empty, recommendationQuality: empty, confidence: empty, mentorFeedback: empty, reviewStatus: "Not Started" },
      },
      decisionJournal,
      qualityReview: { criteria: empty, findings: empty, remediation: empty },
      review: {
        reviewObjective: empty, artifactUnderReview: empty, currentStage: "Implementation", reviewerType: empty, reviewStatus: "Not Started", reviewDate: empty,
        critique: { strengths: empty, issuesRisks: empty, questionsChallenges: empty },
        learnerDefense: { response: empty, reasoning: empty, tradeoffs: empty },
        revision: { requiredRevisions: empty, revisionNotes: empty, revisionStatus: "Not Started" },
        reReview: { status: "Not Started", remainingConcerns: empty, outcome: empty },
        approval: { decision: empty, notes: empty, productionReadyStatus: "Not Started" },
        evidence: ["Miro", "Loom", "GitHub", "HubSpot / CRM screenshot", "SQL / database work", "Dashboard", "Document", "Presentation", "Communication artifact"].map((type) => ({ type, title: empty, description: empty, reference: empty, notes: empty, date: empty, status: "Not Started" })),
      },
      reviewWorkflow: reviewStages.map((stage) => ({ stage, completed: false })),
      applicableStages: {},
    },
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

export const currentEngagement = currentWeek.engagement;
export const nextReviewStage = currentEngagement.reviewWorkflow.find(({ completed }) => !completed)?.stage ?? "No review stage available";
export const currentReview = currentEngagement.review;
export const nextReviewAction = currentReview.reviewStatus === "Revision Required" ? "Address required revisions" : currentReview.reviewStatus === "Approved" ? "Complete production-ready review" : "Prepare submission for review";
export const outstandingRevisions = curriculumWeeks.filter(({ engagement }) => engagement.review.revision.revisionStatus === "Revision Required");
export const reviewsCompleted = curriculumWeeks.filter(({ engagement }) => engagement.review.reviewStatus === "Complete");
export const revisionsCompleted = curriculumWeeks.filter(({ engagement }) => engagement.review.revision.revisionStatus === "Revised" || engagement.review.revision.revisionStatus === "Complete");
export const approvalsCompleted = curriculumWeeks.filter(({ engagement }) => engagement.review.approval.productionReadyStatus === "Approved" || engagement.review.approval.productionReadyStatus === "Complete");
export const productionReadyWeeks = curriculumWeeks.filter(({ engagement }) => engagement.review.approval.productionReadyStatus === "Complete");
export const engagementWeeks = curriculumWeeks.filter(({ engagement }) => engagement.status !== "Not Started");
export const completedEngagements = curriculumWeeks.filter(({ engagement }) => engagement.status === "Production Ready");
export const approvedEngagements = curriculumWeeks.filter(({ engagement }) => engagement.status === "Approved" || engagement.status === "Production Ready");
export const completedReviewStages = curriculumWeeks.flatMap(({ engagement }) => engagement.reviewWorkflow).filter(({ completed }) => completed);
export const communicationWorkCompleted = curriculumWeeks.filter(({ engagement }) => engagement.communication.status === "Approved");
export const communicationEvidenceCaptured = curriculumWeeks.flatMap(({ engagement }) => engagement.communication.evidence).filter(({ reference }) => reference.trim().length > 0);
export const communicationReviewsCompleted = curriculumWeeks.filter(({ engagement }) => engagement.communication.review.reviewStatus === "Approved");
export const currentCommunication = currentEngagement.communication;
export const nextCommunicationArtifact = currentCommunication.evidence.find(({ status }) => status !== "Approved") ?? currentCommunication.evidence.at(-1)!;

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

export const journalEntries = curriculumWeeks.map(({ week, title, engagement }) => ({ week: `Week ${week}`, title, ...engagement.decisionJournal }));

export const skills = [
  { name: "Revenue Operations", value: 42 }, { name: "CRM Architecture", value: 28 }, { name: "Marketing Operations", value: 35 }, { name: "GTM Engineering", value: 20 },
];
