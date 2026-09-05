# Website Sales Engine — latest zero-run audit

Run timestamp: 2026-09-05 05:59 Asia/Hebron

Outcome: 0 valid delivered NEW initial outreach; no genuine active sales conversation found in the checked recent Gmail window.

Candidates / source families inspected in order:
1. ECIA steel-fabrication/general-contractor member directory (UK) — Site Fab Limited exposed site_fab@aol.co.uk and no website field, but the bounded run did not establish a second current business-identity source for the exact free-mail address, so EMAIL QUALITY B was not established.
2. Construction Industry Center member directory (Rapid City, South Dakota) — Stanley J. Johnsen Concrete Contractor, Inc. exposed rogerjohnsen@stanleyjohnsenconcrete.com, phone (605) 381-5551 and explicitly 'no website on file'. Exact-email Leads dedup returned no match and Gmail exact-recipient dedup returned no prior outreach. Qualification then failed: current independent evidence shows its Rapid City contractor license AEC1197 expired 2018 / inactive, and another current source identifies Complete Concrete, Inc. as formerly Stanley Johnsen Concrete Contractor, Inc.; other current directories also point to stanleyjohnsenconcrete.com. This does not meet the current-activity + no-functioning-official-site gate.
3. Rail Forum / ECIA member results — Mayflower Engineering, Rayden Engineering, Washington Metalworks and multiple ECIA fabrication members exposed current emails but also functioning listed websites, so rejected at no-site gate.

Dedup: Stanley J. Johnsen Concrete reached dedup and PASSED exact-email checks (no Leads row for rogerjohnsen@stanleyjohnsenconcrete.com; no Gmail to that recipient), but failed subsequent current activity/no-site qualification. No existing lead was rebuilt or resent.

Source families attempted: current trade-association/member directories (ECIA, Rail Forum); contractor/member registry (Construction Industry Center); independent municipal contractor-license data and current contractor/business directories for corroboration.

Last executable stage reached: independent current identity/activity + no-site corroboration after dedup for Stanley J. Johnsen Concrete.

Build state: no site files created; no prospect build commit; no Pages workflow; no Gmail draft/send; no Leads row.

Observed blocker: directory-first sourcing produced exact public business emails, but the strongest no-site candidate failed current-activity/no-site corroboration because its contractor license is inactive/expired and current evidence links the former operation to another company and/or a website domain.

Fallback attempted: moved from ECIA no-website/free-mail candidate to Construction Industry Center contractor directory, then corroborated with Rapid City municipal licensing and independent business/project sources rather than weakening A/B criteria.

Next-run behavior change: prioritize current 2025/2026 chamber/vendor/member directories whose entries have an explicit last-updated/current membership signal and no website field; verify activity before exact-email dedup so inactive legacy contractors are rejected faster, while retaining dedup before any build/commit.
