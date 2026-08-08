# Changelog

All notable completed changes to Revenue Systems OS are documented here. Planned work belongs in [ROADMAP.md](ROADMAP.md) and is not listed as completed.

## v1.4 — Consulting Workspace

- Extended the local curriculum model with a content-ready consulting engagement structure for every week.
- Added workspace sections for client context, consulting brief, business problem, business process, system design, technical implementation, practical application, decision journal, deliverables, portfolio connection, consulting review, and engagement status.
- Added content-ready systems-thinking, quality-review, and future SQL/CRM/diagram/presentation evidence fields.
- Added the local, status-only Consulting Review Workflow: Implementation, Self Review, AI Architecture Review, Business Review, Revision, Documentation Audit, Portfolio Approval, and Production Ready.
- Extended deliverables with description, due state, output, evidence, and reviewer status fields.
- Kept Portfolio Entry data as the portfolio source of truth for its associated weekly workspace.
- Added model-driven dashboard consulting context and model-driven engagement and review progress metrics.
- Kept Week 2–30 consulting data empty and import-ready; no client scenarios, learning content, integrations, backend, or AI calls were added.

## v1.3 — Portfolio OS

- Replaced the initial engagement-card portfolio view with a phase-and-week evidence hierarchy.
- Added an import-ready portfolio entry for every curriculum week.
- Added placeholder structures for deliverable artifacts, evidence, reflection, business impact, communication, and mentor review.
- Added artifact statuses: Not Started, Draft, Complete, and Approved.
- Added model-driven portfolio completion, approved-artifact count, and completed-week metrics.
- Added model-driven dashboard signals for latest portfolio artifact, portfolio completion, and next artifact to build.

## v1.2 — Learning Workspace

- Added dedicated route-addressable learning workspaces for curriculum weeks.
- Added model-backed placeholder sections for client engagement, business context, learning objectives, consulting deliverables, portfolio references, decision journals, mentor review, revenue impact, and completion.
- Added model-backed week states: Locked, Unlocked, Completed, and Approved.
- Linked curriculum and dashboard flows to the applicable weekly workspace.

## v1.1 — Curriculum Engine

- Added a typed local curriculum model with exactly 30 weeks across five phases.
- Added import-ready fields for week details, delivery, mentoring, locking, and completion state.
- Updated Curriculum to show Phase → Weeks → Week Details → Completion State.
- Updated Dashboard and Progress to derive current phase, current week, client, deliverable, milestone, and completion information from the curriculum model.

## v1.0 — Application Shell

- Created the local Next.js, TypeScript, Tailwind, shadcn-compatible UI, and Lucide icon application foundation.
- Added the responsive application shell and sidebar navigation.
- Added the initial Dashboard, Curriculum, Portfolio, Decision Journal, Progress, Career, Settings, and Admin interfaces.
- Kept the application local-first, with no authentication, backend, APIs, database, or API-key requirement.
