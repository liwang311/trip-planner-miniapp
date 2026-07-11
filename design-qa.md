# Design QA

- reference: `design/selected-option-1.png`
- implementation: `design/implementation-desktop.png`
- comparison: `design/design-comparison.png`
- desktop viewport: 1440 × 1024
- mobile viewport: 390 × 844
- tested interactions: hero CTA scroll, previous/next day controls, route city switch to Qingdao Day 11
- content enhancement: the previously empty lower-left area now contains a Xiaohongshu-inspired daily note with route, play style, food, and practical tips
- food imagery: eight destination-specific diptychs; left/right crops update with the active city
- typography: navigation, timeline, note, fact, and budget copy increased for easier reading
- feature hub: eight destination cards now fill the main viewport and share the section with the selected city's daily plan
- food interaction: city buttons update the active image and food list; verified by switching from Zhuhai to Yantai
- budget: replaced two-person totals with per-person category amounts and percentage bars
- copy: removed the wedding-specific Qingdao day and replaced it with a travel-only beer museum, old-street, and night-market day
- browser console: no errors or warnings

## Visual comparison

- P0: none
- P1: none
- P2: the implementation uses a taller hero to preserve headline readability at responsive sizes; the route rail begins with Zhuhai because Chengdu is the departure point rather than a stay destination. Both differences are intentional and retain the selected concept's cinematic navy/gold hierarchy.

## Responsive review

- Header compresses correctly on mobile and keeps date/travel-party context visible.
- Hero headline, CTA, city rail, and Day 01 content remain readable at 390 px.
- The city rail intentionally scrolls horizontally to preserve all eight destinations.
- The daily note collapses from two columns to one on mobile, while keeping the practical tip visible.

final result: passed
