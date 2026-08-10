# Revenue Systems OS — Usage Guide

## Guided weekly flow

For each week, use the same local-first flow: **Import Week → Set Active → Start/Continue → Learn → enter My Work → Save → attach evidence → Mark Step Complete → Review → Complete**.

Imported source text is read-only. Revenue Systems OS uses its headings and section names to surface relevant instructions in the Consulting, Communication, Review, and Decision Journal areas; learner responses remain separate in browser-local runtime data.

Complete learning steps to move a week to **REVIEW**. Record approval in the Review Workspace to make the runtime status **COMPLETE**. Navigation and saving alone do not change progress.

## Start the app

Install dependencies with `pnpm install`, then run `pnpm dev` from the project folder. Open the local URL displayed by Next.js.

## Import a week

Open the selected week’s Consulting, Communication, or Review Workspace and use **Import Week** in the Source material card. Choose a `.md`, `.txt`, or `.json` file up to 2 MB, preview its source text, then continue working in the separate **My work** area. Replacing existing source material requires confirmation and does not remove learner work.

## Set the active week

Use **Set active week** in a weekly workspace. The selection is saved locally and is intended to guide Dashboard work actions.

## Enter and save work

Use **My work** in the relevant workspace, then select **Save work**. The status indicates whether changes are saved locally or still unsaved.

## Add evidence references

Use **Evidence references** to add a title, type, URL or local path, and optional note. References can be removed with confirmation. No files are uploaded and no external service is contacted.

## Workspace flow

- Consulting Workspace: client, problem, process, design, implementation, deliverables, and portfolio context.
- Communication Workspace: communication planning and working references.
- Review Workspace: submission, critique, learner response, revision, re-review, and approval records. AI Architecture Review remains a local status stage only.
- Portfolio: remains the source of truth for final portfolio artifacts and evidence.

## Local data and backup

v1.7 stores learner runtime data in the browser’s local storage under `revenue-systems-os.runtime.v1`. It persists across app restarts in the same browser profile. To back up before clearing browser data, use the browser’s site-data export/developer tools or copy the local-storage value. A database-backed persistence layer remains a future improvement; no runtime data is committed to Git.
