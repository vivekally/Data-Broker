# Competitive Intelligence Brief: Evaratus & Petrarch

## TL;DR
- Neither target is in your AI-memory / second-brain / "company brain" / digital-twin space. Both are AI TRAINING-DATA suppliers to frontier AI labs (the "picks and shovels" layer beneath model training). If your build decision treated them as GBrain competitors, that premise is wrong. [V]
- How they make money (Q1): both gate all pricing behind "contact us." Evaratus runs an enterprise/partnership contract-and-services motion (RL environments, evals, curated enterprise/consumer data); Petrarch is a founder-led data broker earning a resale spread plus prep/legal-clearance fees on industrial datasets. No public prices for either. [V on motion; U on numbers]
- Who buys and how (Q2): the buyer is a frontier lab's data/post-training budget owner (top-down enterprise sale for Evaratus; founder-led deal-by-deal for Petrarch). Petrarch may be pivoting its buyer to PE/finance (unconfirmed). Neither has third-party-verified revenue; Evaratus's headline traction is entirely self-reported. [I/U]

## DISAMBIGUATION (resolved, with flags)
- **Evaratus** (evaratus.com) self-states "Scaler AI Labs is now Evaratus AI." Confirmed independently via job postings (jobs.ashbyhq.com/evaratus) and the Indian corporate registry: SCALER AI LABS PRIVATE LIMITED, CIN U62090KA2026PTC214409, incorporated Jan 19 2026, directors Rishabh Parag Shah and Abhimanyu Saxena. [V] Do not confuse with "Scale AI" (Alexandr Wang) or "Scalers AI" (Austin). [V]
- **Petrarch** (petrarch.co) and the YC profile (ycombinator.com/companies/petrarch, Summer 2026 batch) are the same company. [V] **Name collisions exist and are flagged:** (1) the 14th-century poet; (2) "Petrarch Capital Analytics Corporation," a management-consulting/boutique-investment firm on Crunchbase — a DIFFERENT entity. [V] The target matching petrarch.co and the YC profile is the AI training-data startup founded in 2026 by Ian Lee, Samuel Hahn, and Sudhish Swain. All Petrarch findings below refer only to that company.
- Separately: Ian Lee's LinkedIn feed surfaces an "AI Passport / personal context" project called **Egoist Machines** — that is a DIFFERENT company (founders Dr David Khachaturov and Erin McGurk), not Petrarch. Do not conflate. [V]

---

# PART 1 — PER COMPANY

## COMPANY A: EVARATUS (formerly Scaler AI Labs)

- One-line positioning (quoted): "Real work, made trainable." and "Frontier models still fail at real work. Evaratus fixes it - proprietary enterprise and consumer data, 1000+ RL gyms and a 10M+ expert network that ship only proven model uplift." [V, evaratus.com, 2026]
- Tagline: "The Apparatus for Progress"; mission "Free humans from mundane work." [V, evaratus.com, 2026]

### Problem and ICP
- Sells to: frontier AI labs. A job posting states it "partners with frontier AI labs on training environments, human data, and model evaluations." [V, BeBee "Head of Finance - Evaratus," ~Aug 2026]
- References "250+ enterprises as exclusive partners" as data-supply sources (not necessarily paying buyers). [V, evaratus.com]
- Buyer size: frontier labs (large, well-capitalized). [I: entire pitch aims at labs doing post-training]
- Origin: spun out of Indian edtech Scaler (founders Abhimanyu Saxena / Anshuman Singh); operations HQ Bengaluru. [V, Tracxn registry; BeBee]

### MONETIZATION (Q1)
a. **Verified pricing:** None public. The only CTA is a "Schedule a call" contact form (name, business email, company, job title) routing to hello@scalerailabs.com. [V, evaratus.com] Model, tiers, minimums, free tier: [U].
b. **Motion:** Enterprise / sales-assisted / partnership-based. Signals: sales-gate only; labs and enterprises framed as "exclusive partners"; a first "Head of Finance" role owning "project and client-level profitability analysis that drives pricing and staffing decisions." [V, evaratus.com; BeBee ~Aug 2026] This is a services/contract motion, not self-serve.
c. **Unit of value charged:** [U]. Category norm (not confirmed for Evaratus): per-RL-environment / per-task / per-project contracts. Per Epoch AI (Jan 12 2026, with Chris Barber), "Contract sizes are often six to seven figures per quarter," and one founder said contracts are "seven figures per quarter or more"; exclusivity commands multiples. For scale context, Epoch notes environment spend remains a fraction of compute — "OpenAI's R&D compute spend in 2026 is projected to be around $19 billion, roughly double the 2025 figure." Whether Evaratus prices this way is [U].
d. **Revenue hypothesis [I]:** Evaratus most likely earns project/contract revenue from frontier labs for RL environments, evals, and curated enterprise/consumer data, billed per engagement with exclusivity premiums — reasoning from its "$30M+ of work delivered every month" framing plus category contract norms. Single source that would confirm/kill it: a priced SOW, signed lab contract, or investor/financial disclosure; none is public. [U on actual mechanism]
e. **Adjacent/non-obvious revenue:** [U]. Possible expert-network staffing/services given the "10M+ experts" claim, but unconfirmed.

### Traction claims — ALL SELF-REPORTED, NOT INDEPENDENTLY VERIFIED
- "$30M+ Of work delivered every month — As of August 2026" [V that claimed on-site; U on truth — no third-party corroboration found in an exhaustive search]
- "4 / 5 Top frontier labs work with us" [V claimed; U on truth]. The only independent human signal — a founding engineer's personal site — says they partner with "3 / 3+ global AI research labs," which undercuts "4 of top 5." [V, itssurya.com, 2026]
- "250+ Enterprises as exclusive partners"; "10M+ experts"; "1000+ RL gyms"; "350+ sector leaders"; "25+ countries, 100+ usecases" [V claimed; U on truth — zero third-party verification]

### BUYER PERSONA (Q2)
a. **End user:** a frontier-lab research/post-training engineer or research lead who consumes RL environments, evals, and data to improve a model. [I from product description; not stated]
b. **Economic buyer:** lab leadership controlling a data/post-training or "environments" budget (a head of data/research, or GTM/procurement at a lab). [I; not named] Independent context: labs run centralized environment budgets — The Information (Sept 2025), via Epoch AI, reported "Anthropic had discussed spending over $1 billion on RL environments over the following year." [V]
c. **Approvers/blockers:** security/compliance — Evaratus advertises "SOC 2 compliant," "PII/BII scrubbed," "GDPR compliant" — plus legal on data provenance/exclusivity. [V, evaratus.com]
d. **Entry point:** top-down enterprise/partnership sale via direct outreach ("schedule a call"). [I from signup flow]
e. **Trigger event:** a lab needs domain-specific post-training data / RL environments to fix model failures on "real work" and wants an exclusive supplier. [I from positioning]
f. **Evidence tag:** persona INFERRED from site + job postings + category reports, not stated by the company. [I]

### Product
- Core capability: four "pillars" — proprietary enterprise data, consumer data, RL gyms (computer-use/tool-use environments), and a claimed 10M+ expert network — feeding an "applied research loop" (failure analysis, task design, verification, reward modeling) that ships changes "only after proven uplift" on held-out tasks. [V, evaratus.com]
- Delivery form: data-and-environments delivered to labs as a service (not an app or public API). [V/I]
- Day-one user action: [U] — no self-serve product; engagement begins with a sales call.
- Research areas: Coding; Verifiable Job Domains; Life Sciences & Healthcare; World Models & Physical AI. [V, evaratus.com]

### Named use cases
- RL gyms simulating apps/workflows: Team Chat, Image Editor, Cloud Storage, CAD, Contract Management, Task Management, Sales CRM, IT Ticketing, Support Desk, EHR, multi-app finance/product-design jobs. [V, evaratus.com]
- Consumer-data use cases: health tracking, travel planning, tax filing, finance management, fitness, parenting, across 25+ countries. [V, evaratus.com]
- SWE-Bench and Terminal-Bench eval tasks; single/multi-agent RL environments for computer-use agents. [V, itssurya.com founding-engineer site, 2026]

### Wedge and moat
- Claimed moat: "Foundational Pillars that are hard to copy" — largest proprietary enterprise/consumer data repository + 1000+ RL gyms + 10M+ expert network + a proven-uplift research loop. [V claimed, evaratus.com]
- Evidence support: WEAK/UNVERIFIED. Scale claims have no third-party confirmation; the "proven uplift" loop is plausible and matches the category's evals-as-moat direction but is not externally audited. [I]

### Stage signals
- Team size: "200-plus person team," HQ Bengaluru, in-office. [V, BeBee, ~Aug 2026]
- Origin/timeline: founding team started inside Scaler Oct 2025; workspace spun out ~Apr 2026; India entity incorporated Jan 19 2026; rebranded Scaler AI Labs → Evaratus in 2026. [V, itssurya.com; Tracxn]
- Funding: NO external round found in any database. PitchBook shows only "$17.5K" (nominal); the India entity's paid-up capital is ₹10K (~$120). The $86M/$76.5M figures belong to the edtech Scaler, not Evaratus. Appears internally funded off the Scaler parent / revenue. [V, PitchBook, Tracxn]
- Leadership: not publicly named beyond registry directors Rishabh Parag Shah and Abhimanyu Saxena. Rishabh Shah's LinkedIn references "CEO, Online Business at Scaler" (the edtech) — suggestive but NOT a confirmed "CEO of Evaratus" title. [V registry; leadership title U]
- Hiring focus: G&A build-out (first Head of Finance, Head of People & Talent, Payroll) plus engineering/research (RL environments, evals, data pipelines). Careers on Ashby. [V]

### Gaps ([U] + closing source)
- Pricing model/tiers/deal sizes [U] → priced SOW, lab contract, or procurement leak.
- Actual revenue (the "$30M/month" claim) [U] → audited financials or investor disclosure.
- External funding/valuation [U] → Crunchbase/PitchBook round entry or press.
- Named CEO/CTO/head of research [U] → evaratus.com/about.html (could not fetch) or LinkedIn.
- Which specific labs [U] → lab case study or press.

---

## COMPANY B: PETRARCH (YC S26)

- One-line positioning (quoted): "Petrarch helps economically vital businesses prepare their proprietary operational records, cleared and anonymized on premise, so the AI systems building for the physical world can learn from real work." [V, petrarch.co, 2026]
- YC one-liner (quoted): "Internal industrial company data for frontier labs." [V, YC profile, 2026]

### Problem and ICP
- Two-sided broker/marketplace. SUPPLY side: "companies with valuable operational data they haven't monetized, from legacy businesses and startups to companies undergoing bankruptcy and pivots," starting in manufacturing, construction, industrial, logistics. [V, YC launch post] Example: "a mid-sized design-build firm sitting on 20 years of annotated floor plans, RFIs, and site footage." [V, YC/LinkedIn]
- DEMAND side (buyers): "applied AI startups and labs" — "both physical AI companies and labs." [V, YC launch post]
- Founders: Ian Lee (CEO), Samuel Hahn (COO), Sudhish Swain (CTO) — all ex-Harvard, with Scale AI / Meridian AI backgrounds. [V, YC profile]

### MONETIZATION (Q1)
a. **Verified pricing:** None public. petrarch.co is a one-page site; entry is via founders@petrarch.co and a "Constellation" fellows application (constellation.petrarch.co). [V] Prices/tiers/minimums: [U].
b. **Motion:** Founder-led, deal-by-deal brokerage/marketplace. It "sources suppliers, cleans and restructures the datasets, certifies legal clearance, and resells to applied AI startups and labs." [V, YC launch post] The "Constellation" fellows are paid "through flexible, deal driven work" — a distributed sourcing/scout model. [V, petrarch.co/LinkedIn]
c. **Unit of value charged:** [I] a margin/markup on each dataset transaction (spread between what it pays suppliers and what labs pay), plus preparation/clearance service value. [I from "sources… cleans… resells"] Exact rate: [U].
d. **Revenue hypothesis [I]:** Petrarch earns a transaction spread (buy-low from distressed/legacy data owners, sell-higher to labs) plus data-preparation/legal-clearance fees per brokered dataset — reasoning from the verbatim "sources / cleans / certifies legal clearance / resells" description plus "already transacted construction plans, autonomous driving recordings, and codebases." Single source that would confirm/kill it: a priced data-licensing agreement or customer contract; none public. [U on rate]
e. **Adjacent/non-obvious revenue:** on-premise data-clearance/anonymization as a service ("cleared and anonymized on premise"); possible ongoing licensing rev-share with data owners. [I; U on specifics]

### PIVOT SIGNAL (build-decision relevant)
- Founder Samuel Hahn's LinkedIn (Korean-language third-party summary) indicates Petrarch started as a broad training-data marketplace, hit friction ("too many buyer types"; labs said they would source data themselves), and pivoted toward selling data to private equity / financial institutions via an encrypted-data model. [I — single third-party-summarized source, not a first-party statement; treat as unconfirmed] If true, this shifts the ICP from "frontier labs" to "PE/finance," changing who they compete with. Confirming source needed: a direct founder statement or updated site copy. [U]

### BUYER PERSONA (Q2)
a. **End user:** a data/ML engineer or research lead at an applied-AI startup, physical-AI/robotics company, or frontier lab who ingests the licensed dataset for training. [I; not stated]
b. **Economic buyer:** at a lab/startup, the data-acquisition or research budget owner; if the PE pivot is real, an investment/deal team at a PE firm. [I; U which]
c. **Approvers/blockers:** legal (data provenance, IP, bankruptcy-estate chain of title), privacy/compliance (de-identification), and on the supply side the data owner / bankruptcy trustee. [I from "certifies legal clearance"]
d. **Entry point:** founder-led direct outreach + scout network (Constellation fellows). [V]
e. **Trigger event:** a lab/company needs domain-specific industrial/physical-world data it cannot scrape; OR a distressed/pivoted company wants to monetize a dead codebase/dataset. Founder solicitation is explicit: "Made revenue with an old codebase… Let's chat." [V, Samuel Hahn LinkedIn]
f. **Evidence tag:** [I] demand-side inferred from YC copy + founder posts; supply-side trigger is [V] from explicit founder solicitation.

### Product
- Core capability: a brokered pipeline that sources proprietary operational/industrial datasets, de-identifies and restructures them, certifies legal clearance, and resells them for model training. [V, YC launch post]
- Delivery form: prepared datasets (service + marketplace), with on-premise clearing/anonymization. [V, petrarch.co]
- Day-one user action: [U] — no self-serve product; contact founders.

### Named use cases
- "Already transacted construction plans, autonomous driving recordings, and codebases." [V, YC launch post]
- Sourcing "codebases, project files, and payments from bankruptcy courts." [V, YC profile]
- Licensing old revenue-generating codebases from founders who pivoted. [V, Samuel Hahn LinkedIn]

### Wedge and moat
- Claimed wedge: access to hard-to-reach industrial/operational data via distressed/bankruptcy channels and a scout network — data "both physical AI companies and labs want but cannot easily access." [V claimed, YC]
- Evidence support: PARTIAL. Transactions are claimed (construction plans, AV recordings, codebases) but volumes/revenue unverified. The moat is a sourcing/legal-clearance advantage, defensible only if relationships and clearance process are hard to copy — unproven at 3-person scale. [I]

### Stage signals
- Stage: YC Summer 2026 batch; founded 2026; 3 employees; San Francisco; YC primary partner Vivian Midha Shen. [V, YC profile]
- Funding: no round disclosed beyond standard YC terms; not found in databases. [U]
- Hiring: "Constellation" fellows (deal-driven, distributed sourcing) plus early technical roles. [V]
- Launch: YC launch post "Unlocking enterprise data for tomorrow's economy." [V]

### Gaps ([U] + closing source)
- Pricing / margin structure [U] → a licensing contract or founder disclosure.
- Whether the PE/finance pivot is real/current [U] → updated site copy or direct founder statement.
- Revenue/traction volume [U] → YC Demo Day metrics or press.
- Funding raised [U] → Crunchbase/YC deal terms.
- Named demand-side customers [U] → case study or press.

---

# PART 2 — CROSS-COMPANY

| Dimension | Evaratus | Petrarch |
|---|---|---|
| Category | AI training-data / RL-environments vendor to frontier labs | Industrial/operational data broker to labs & applied-AI |
| Stage | ~200+ staff, Bengaluru; spun out of Scaler edtech 2026 | 3 people, SF; YC S26 |
| Positioning (quoted) | "Real work, made trainable" | "Internal industrial company data for frontier labs" |
| Monetization model | Enterprise contracts/services (inferred); pricing [U] | Transaction spread + data-prep/clearance fees (inferred); pricing [U] |
| Price transparency | None (contact sales) | None (contact founders) |
| Motion | Top-down enterprise/partnership | Founder-led deal-by-deal + scout network |
| Value metric | [U] (likely per-environment/project) | [I] per-dataset margin |
| Primary buyer | Frontier AI labs | Labs + applied-AI/physical-AI (possibly pivoting to PE/finance) |
| Funding | No external round found; internally funded | Not disclosed (YC standard) |
| Traction evidence | Large self-claims, zero third-party proof | Specific transactions claimed, volumes unverified |

## Buyer comparison
- Overlap: both ultimately sell into the frontier-lab / applied-AI data-acquisition budget, so they can compete for the same "data/environments" spend. [I]
- Divergence: Evaratus manufactures RL environments + evals + curated data at scale (a data-foundry model); Petrarch brokers found industrial datasets (a sourcing/marketplace model). Different position in the value chain. If Petrarch's PE/finance pivot is real, buyers diverge entirely. [I]
- Implication: loosely competitive as data suppliers, but not head-to-head product rivals.

## Where they overlap / do not
- Overlap: both are "picks and shovels" for AI training; both gate pricing behind sales; both lean on proprietary/hard-to-get data as the moat; both invoke de-identification/legal clearance.
- Do not overlap: scale (200+ vs 3), geography (India vs SF), sourcing model (manufactured vs brokered), maturity.

## Which is further along on EVIDENCE (not narrative)
- Evaratus is further along on operational scale (200+ staff; real revenue implied by a Head-of-Finance hire), but its headline numbers are entirely self-reported. [I]
- Petrarch is earlier but its claims are more concrete and falsifiable (named transactions, YC-verified batch). [I]
- Net: Evaratus is bigger; Petrarch is more transparently early. Neither has third-party-verified revenue.

## 3 implications for your GBrain decision
1. **These are not your competitors — re-map them.** They are training-data suppliers to labs, not second-brain products. The transferable lesson: proprietary, permissioned personal/organizational data is a scarce asset labs and apps will pay for — but the buyers here are labs, not knowledge workers. [I]
2. **Monetization signal:** in this adjacent layer, nobody publishes pricing; everything is enterprise contract or brokerage. If GBrain's edge is organizational memory, the higher-margin path may be selling permissioned context/data access (the "AI Passport"/Egoist model) rather than competing on RL environments. [I]
3. **Moat lesson:** both bet the moat is data access + legal clearance + exclusivity, not software. For GBrain, the durable moat is likely the permissioned data graph and provenance/consent layer, not the UI. The closest genuine competitor to your space found here is Egoist Machines (below), not either target. [I]

---

# PART 3 — COMPETITORS

## Reframing
Because Evaratus and Petrarch are training-data / RL-environment companies, this competitive set is defined by what they actually do, NOT by your GBrain second-brain list. I flag at the end which of your known names sit in a different (memory/second-brain) category.

## Market context
- Menlo Ventures / Deedy Das market map (X thread, July 2026): ">50 cos… total ~$8.5B in rev and ~$100B in valuation, >75% of which are just 4 players: Scale, Surge, Mercor and Handshake." [V] Three of those four came from other businesses — per Pebblous (2026), "Mercor was recruiting; Handshake was a college job platform" (Handshake's recruiting operation reaches ~18M job seekers and 970 Fortune 500 companies). [V]
- RL-environment contracts commonly run six-to-seven figures per quarter, with exclusivity premiums (Epoch AI, Jan 2026). But environment spend is still a fraction of compute: Epoch notes "OpenAI's R&D compute spend in 2026 is projected to be around $19 billion, roughly double the 2025 figure," so even Anthropic's reported $1B+ environment budget (The Information, Sept 2025) is a single-digit fraction. [V]

## Big-four (>75% of category revenue) — with figures
- **Scale AI** — the incumbent (filed an S-1 in March 2026; ~$870M 2024 revenue; Meta holds ~49%). [V, Wikipedia/press]
- **Surge AI** — "~$3B in annualized revenue at a ~$25B valuation as of mid-2026"; crossed "$1.2 billion in revenue in 2024 without a dollar of venture capital." [V, Scaling the Enterprise 2026; HeroHunt Sept 2026]
- **Mercor** — "$2B+ in annualized revenue" (roughly doubled from ~$1B in four months), "in talks to raise at a $10–20B valuation," "paying over $4 million daily to 30,000 external contractors." [V, BigGo Finance / TechCrunch 2026]
- **Handshake** — pivoted from college recruiting into AI data/RL environments, leveraging its 18M-job-seeker / 970-Fortune-500 network. [V, Pebblous 2026]

## Other named competitors (data + RL environments)
- Full-service / multi-domain: Turing, Centific, Snorkel AI, Micro1, AfterQuery, Pareto. [V, Pavlov's List Sept 5 2026]
- Environment-native: **Mechanize**, **Fleet AI** (annualized revenue "surged from ~$1M at the end of last year to over $60 million," reportedly in talks for a "$50 million+ funding round at a $750 million valuation," Bain Capital Ventures as prospective lead — per Sacra/KuCoin, April 2026), **HUD**, **Plato**, **Veris AI**, **Bespoke Labs**, **Prime Intellect** (open "Hugging Face for RL environments" ecosystem, backed by Karpathy/Founders Fund/Menlo), **Deeptune** (acquired), **Sepal AI** (acquired). [V, Pavlov's List; Menlo map; TechCrunch 2025]

## Long tail / smaller / stealthier (likely NOT on your radar)
From Pavlov's List (updated Sep 5 2026) and RL List (2026):
- Industrial / physical-world / enterprise data (closest to Petrarch/Evaratus): **Ooak Data**, **Sieve** (multimodal/robotics data), **Aviro**, **Freesolo**, **Kairos**, **Metaphi**, **Akhara**, **Symbal**, **Theta**, **BenchFlow**.
- Domain-specialized: **Datacurve** (coding), **Halluminate / Aptura / Dissei / General Reasoning** (finance), **Latch / Tacit Labs / Anthromind** (science/bio), **Ulam / Hillclimb** (math), **Quesma / ARIMLABS / Incalmo** (security), **Taste Labs / Verita AI** (design), **Normal / Phinity** (hardware/chip design), **Vetto AI / Cua / Refresh / Idler / Proximal / Emulated / Chakra Labs / pre.dev** (code/computer-use), **Collinear, Parsewave, dmodel, Preference Model, ReasonCore, Vmax, EdotEnv, Good Start Labs, Andromede, Diffuse Labs, Exabite, Abundant, Huzzle Labs**.
- Direct Petrarch-style industrial/operational data brokers: Petrarch itself; **Sieve**; **Ooak Data**; and physical-AI data efforts like **Periodic Labs** (runs its own physical lab to generate RL data). [V, Pavlov's List; SemiAnalysis 2026]
- YC-batch adjacents: **Markov** (computer-use data to labs; "33k+ hours sold, 200k+ HF downloads"), **Sciloop** (expert math/physics problems for labs), **Ashr/Manifold** (post-training platform), **Litmus** (human-capability evals). **Corvera** (context layer for CPG brands via MCP) is closer to your GBrain space than either target. [V, YC directories 2026]

## Which of YOUR known names are in a DIFFERENT (memory/second-brain) category — skip for this target set
- Glean, Mem0, Letta, Almanac, Memory Store, Glen, Coconut AI, Hyper — knowledge/memory/second-brain layer. Not competitors to Evaratus/Petrarch. [I]
- Viven, Delphi, Tavus — digital-twin/persona. Different category again. [I]
- Closest NEW name to GBrain's space found incidentally: **Egoist Machines** ("AI Passport," a user-owned, permissioned personal-context layer with "Sign in with AI Passport" OAuth, private-by-default, free-for-life for individuals; YC launch). A genuine second-brain-adjacent entrant you may not be tracking. [V, ego.ist / YC launch 2026]

---

## SELF-CHECK (your process step 3)
- Every [V] maps to a cited source (company sites, YC, Indian registry, job postings, Pavlov's List, RL List, Epoch AI, Menlo/Deedy Das map, Sacra, Pebblous). PASS.
- No pricing number tagged [I]: both companies' pricing is [U]; no invented prices. Competitor revenue/valuation figures are [V] from named sources, not [I]. PASS.
- End user vs economic buyer separated in both persona sections. PASS.
- No competitor/aggregator characterization restated as neutral fact about the target: Evaratus's traction claims explicitly flagged as self-reported/unverified. PASS.
- FAILURES/UNCERTAINTIES: Evaratus's CEO/leadership title is [U], not asserted. Petrarch's PE/finance pivot rests on a single Korean-language third-party LinkedIn summary — flagged [I]/unconfirmed. evaratus.com/about.html and the live Ashby board could not be fetched.

# CAVEATS
- Both companies are very early / thin-footprint; a high [U] count is the correct result, not a defect.
- Evaratus's headline metrics ($30M/month, 4/5 top labs, 250+ enterprises, 10M+ experts, 1000+ gyms) are marketing self-claims with zero third-party verification; one employee source suggests "3 labs," undercutting "4 of 5." Do not treat these as facts in any investor or strategy doc.
- Petrarch may have pivoted away from labs toward PE/finance; unconfirmed and would materially change its competitive set.
- Neither target is in GBrain's second-brain / AI-memory category. Treat them as adjacent data suppliers to the AI stack, not rivals — and redirect competitor tracking toward the memory/context-layer names (including the newly surfaced Egoist Machines).
- Competitor revenue/valuation figures (Surge, Mercor, Fleet, etc.) move weekly in this market and are largely vendor-reported or press-reported; treat as snapshots as of mid-to-late 2026.