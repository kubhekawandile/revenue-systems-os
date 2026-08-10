# Revenue Systems OS — Roadmap

This roadmap separates completed product milestones from planned direction. Planned milestones are not implemented functionality.

## Completed

### v1.0 — Application Shell

Implemented the local Next.js application shell with the existing professional, documentation-first design language. This includes the responsive sidebar navigation and the initial Dashboard, Curriculum, Portfolio, Progress, Career, Settings, and Admin surfaces.

### v1.1 — Curriculum Engine

Implemented the local curriculum data model with exactly 30 weeks across five phases. Weeks contain import-ready placeholder fields for identity progression, objectives, business context, consulting brief, deliverables, portfolio artifacts, decision journals, revenue impact, mentor status, locking, and completion. Dashboard status is derived from this model.

### v1.2 — Learning Workspace

Implemented a dedicated, route-addressable consulting workspace for each curriculum week. The workspace presents structured placeholders for client engagement, business context, objectives, deliverables, portfolio references, decision journals, mentor review, revenue impact, and week completion. It uses the curriculum model and remains local-first.

### v1.3 — Portfolio OS

Implemented evidence-based portfolio entries organised as Portfolio → Phase → Week → Portfolio Entry. Each week has a placeholder portfolio entry with artifact status, evidence, reflection, business impact, communication, and mentor-review fields. Dashboard portfolio signals are derived from the curriculum portfolio data.

### v1.4 — Consulting Workspace

Transformed the weekly Learning Workspace into a structured, local consulting engagement workspace. The curriculum model now supports client context, consulting brief, business-problem diagnosis, business process, system design, technical implementation, practical application, decision records, structured deliverables, engagement status, and a local consulting-review workflow.

The workspace uses the existing Portfolio Entry as its portfolio source of truth rather than duplicating portfolio evidence. New Week 2–30 consulting fields remain empty and import-ready; no future-week learning content, client work, or review results were generated. The review workflow is a local status structure only: no AI API, automated review, backend, or integration has been implemented.

Dashboard and Progress now derive current engagement information, engagement counts, and review-stage progress from the curriculum model.

### v1.5 — Communication Workspace

Implemented a dedicated, route-addressable Communication Workspace for every weekly consulting engagement. The local engagement model now contains empty, import-ready structures for communication objectives, audience and stakeholder context, written communication, presentation and talkthrough references, communication evidence, reflection, and review.

Communication working context is connected to the consulting workspace and dashboard/progress calculations. Portfolio remains the source of truth for resulting portfolio artifacts and evidence. No communication content, stakeholder scenarios, external integrations, file uploads, automated review, or AI API was implemented.

### v1.6 — Mentor / Review OS

Implemented a dedicated, route-addressable Review Workspace for every weekly consulting engagement. The local engagement model now contains empty review context, critique, learner defense, revision, re-review, approval, and reference metadata fields, plus a status-based representation of the formal consulting review workflow.

Consulting and Communication Workspaces link to their corresponding Review Workspace. Dashboard and Progress derive review state, revision, approval, and production-ready metrics from the local model. Review stages, including AI Architecture Review, are status-only records: no AI capability, API, backend, integration, upload, or fictional feedback has been added. Portfolio remains the source of truth for final portfolio artifacts and evidence.

## Planned

### Decision Journal & Mentorship (planned)

Develop the current placeholder structures into practical decision-journal and mentor-review workflows, informed by real learner and mentor needs. No functional journaling, feedback, approval, or revision workflow is implemented today.

### v1.6 — Communication / Walkthrough Evidence (planned)

Develop the placeholders for executive communication, presentation notes, stakeholder notes, and walkthrough evidence. Any future implementation should continue to organise evidence created in specialist tools rather than attempting to replace those tools.

### Career / Employer Readiness (later, planned)

Build capabilities that help translate verified apprenticeship evidence into career narratives, job readiness, interview readiness, and employer-facing portfolio views. The current Career page is a placeholder-oriented surface, not an employer-readiness system.

### Future MVPs (planned)

Future MVPs should be selected from actual apprenticeship needs, validated workflows, and the authoritative curriculum sources. They should remain local-first where practical and must not be presented as complete until implemented and verified.

## Curriculum availability

The authoritative sources currently available are `Instructions.txt`, `Final Revenue Systems Architecture v4.2`, and the generated Week 1 learning material. Weeks 2–30 have not been generated as complete learning materials. The curriculum engine is therefore a structure for future content import, not a claim of complete instructional content.
