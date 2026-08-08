# Changelog

All notable completed changes to Revenue Systems OS are documented here. Planned work belongs in [ROADMAP.md](ROADMAP.md) and is not listed as completed.

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
