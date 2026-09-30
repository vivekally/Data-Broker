# Data Broker

Two research briefs on the AI training-data market: the layer that supplies
frontier labs with the data, environments and evaluations they train on.

**Live site:** https://vivekally.github.io/Data-Broker/

| Brief | Question it answers | As of |
|---|---|---|
| [Evaratus & Petrarch](https://vivekally.github.io/Data-Broker/) | How do two specific training-data suppliers make money, and who buys from them? | 2026-09-08 |
| [Canadian AI data broker landscape](https://vivekally.github.io/Data-Broker/canada.html) | Is there a Canadian market in this category at all, who is in it, and how do labs buy? | 2026-09-30 |

Both carry the same evidence-tag discipline described below.

---

# Brief 1: Evaratus & Petrarch

A packaged research brief on two AI training-data suppliers to frontier labs,
**Evaratus** (formerly Scaler AI Labs) and **Petrarch** (YC S26), covering how
each makes money, who buys, how they compare, and the surrounding competitive
landscape.

## Contents

| Page | Covers |
|---|---|
| [Overview](https://vivekally.github.io/Data-Broker/) | TL;DR, name disambiguation, evidence-tag legend, self-check, caveats |
| [Evaratus](https://vivekally.github.io/Data-Broker/evaratus.html) | Part 1, Company A — monetization, buyer persona, product, traction claims, wedge and moat, stage signals, gaps |
| [Petrarch](https://vivekally.github.io/Data-Broker/petrarch.html) | Part 1, Company B — monetization, PE/finance pivot signal, buyer persona, product, wedge and moat, stage signals, gaps |
| [Comparison](https://vivekally.github.io/Data-Broker/comparison.html) | Part 2 — ten-dimension comparison table, buyer overlap, which is further along on evidence, implications |
| [Landscape](https://vivekally.github.io/Data-Broker/landscape.html) | Part 3 — market context, the big four, environment-native and domain-specialised players, long tail |

The complete unsplit source document is at
[`research/research-brief.md`](research/research-brief.md).

---

## Headline finding

Neither company is in the AI-memory / second-brain / "company brain" /
digital-twin space. Both are AI **training-data** suppliers to frontier AI labs —
the picks-and-shovels layer beneath model training. Any build decision that
treated them as competitors in the memory layer rests on a wrong premise.

Both gate all pricing behind "contact us." Neither has third-party-verified
revenue.

---

## Methodology note

This is an analysis of **public sources only** — company websites, YC profiles
and launch posts, job postings, the Indian corporate registry, founder social
posts, private-market databases, and published market maps and trackers. No
interviews were conducted, no non-public material was used, and no company was
contacted.

Every claim carries an evidence tag. Where a claim is verified, the source is
named inline inside the tag itself, for example
`[V, evaratus.com, 2026]` or `[V, Pavlov's List Sept 5 2026]`.

Two consequences worth stating plainly:

- **A high count of `[U]` is the correct result here, not a defect.** Both
  targets are early with thin public footprints. 30 of the 129 tags are `[U]`.
- **Self-reported metrics are labelled as such and are not treated as fact.**
  Evaratus's headline numbers ($30M/month of work delivered, 4 of the top 5
  frontier labs, 250+ enterprises, 10M+ experts, 1000+ RL gyms) have zero
  third-party corroboration, and one employee source points to a materially
  lower lab count.

## Evidence tag legend

| Tag | Meaning |
|---|---|
| `[V]` | **Verified.** Directly attested by a named source, cited inline alongside the tag. |
| `[I]` | **Inferred.** Reasoned from the evidence, not stated by the source. Analysis, not fact. |
| `[U]` | **Unverified.** Not established by any source found. |

Compound tags are used where a claim splits across categories, and are
reproduced as written — for example `[V on motion; U on numbers]`, meaning the
sales motion is verified but the numbers behind it are not.

### Diagrams

The site carries nine hand-drawn figures: the positioning reframe and evidence
distribution on the overview, the applied research loop and deal path for
Evaratus, the brokerage pipeline and pivot signal for Petrarch, the value-chain
comparison, and the market concentration and spend-scale charts on the
landscape page.

They are **visualizations of the brief, not additions to it.** Each one encodes
only mechanisms the source already states, and each figcaption names what it is
drawn from and how well evidenced it is. They are inline SVG with no library,
no runtime and no external images, and they follow the page's light and dark
themes.

One convention matters for auditing: evidence tags copied verbatim from the
source are marked `class="tag"`, while evidence markers that are editorial
furniture — the page header, the legend, labels inside diagrams — are marked
`class="ref"`. Counting `class="tag tag-V|I|U"` across the published pages
therefore returns exactly the source's tag count, with no inflation from
chrome.

Tag distribution across the brief:

| | `[V]` | `[I]` | `[U]` | Total |
|---|---|---|---|---|
| Tag groups | 67 | 32 | 30 | 129 |

---

## Repository layout

```
README.md                    this file
research/research-brief.md   Brief 1 source document, unmodified
research/canada-landscape.md Brief 2 source document, unmodified
docs/                        the published site
  index.html                 overview, legend, self-check, caveats
  evaratus.html              Part 1, Company A
  petrarch.html              Part 1, Company B
  comparison.html            Part 2, cross-company
  landscape.html             Part 3, competitors
  canada.html                Brief 2 overview
  canada-categories.html     Brief 2, the taxonomy
  canada-players.html        Brief 2, players and demand
  canada-buying.html         Brief 2, how labs buy
  canada-regulation.html     Brief 2, the regulatory layer
  canada-market.html         Brief 2, market and implications
  assets/style.css           the site's only stylesheet, including the diagrams
  .nojekyll                  serve files as-is, no Jekyll processing
LICENSE                      CC BY 4.0
.github/workflows/pages.yml  build and deploy to GitHub Pages
```

The site is hand-written static HTML with a single stylesheet. No framework, no
build step, no CDN, no webfonts, no analytics, no trackers. It renders offline
from a local clone by opening `docs/index.html`.

`research/research-brief.md` is a byte-for-byte copy of the source document
(SHA-256 `b0b07d68…21c89c8`). The HTML pages split it along its existing section
boundaries; no text was added, summarized, reworded, or removed, and every
evidence tag and inline citation is preserved verbatim.

---

# Brief 2: Canadian AI data broker landscape

**As of:** 2026-09-30

Deep research on the data broker competitor landscape in Canada for AI and
physical AI: the categories, the players, who they sell to, and how labs
actually buy. Scoped to the full Canadian ecosystem, covering industrial and
natural resources, robotics and autonomous vehicles, and healthcare and life
sciences.

## Headline finding

**There is almost no Canadian AI training-data broker market to compete in.**
Across mining, oil and gas, forestry, agriculture, rail, ports, robotics,
autonomous vehicles and healthcare, not one Canadian operator was found
licensing proprietary operational data to an AI developer as training data. A
sweep of roughly forty RL-environment vendors returned zero Canadian
headquarters. No Canadian pure-play data-supply company was found to have
raised a venture round.

What Canada has is a resource position rather than an intermediary position: a
deep bench of first-party sector data holders, one globally significant
labelling operator, a credible privacy and de-identification layer, and a
federal programme building the country's one deliberately AI-ready industrial
corpus. The gap between what Canada owns and what Canada sells is the whole
report.

## Pages

| Page | Covers |
|---|---|
| [Overview](https://vivekally.github.io/Data-Broker/canada.html) | The finding, the Scale AI name collision, what could not be established |
| [Categories](https://vivekally.github.io/Data-Broker/canada-categories.html) | Eleven supply categories, the unit of value each charges, Canadian presence per category |
| [Players](https://vivekally.github.io/Data-Broker/canada-players.html) | The roster in three ownership buckets, plus the demand side |
| [How labs buy](https://vivekally.github.io/Data-Broker/canada-buying.html) | Intake paths by lab, who owns the budget, contract shapes, the four gates that kill deals |
| [Regulation](https://vivekally.github.io/Data-Broker/canada-regulation.html) | PIPEDA, AIDA's death, Quebec Law 25, residency, copyright, Indigenous data sovereignty |
| [Market](https://vivekally.github.io/Data-Broker/canada-market.html) | Sizing, the oligopoly, where capital is going, the gaps, and the steelman against |

Full unsplit source: [`research/canada-landscape.md`](research/canada-landscape.md).

## Two warnings carried from the research

**"Scale AI" means two unrelated companies.** Scale AI (Canada) is the
Montréal-based federal Global Innovation Cluster at `scaleai.ca`, a grant-maker.
Scale AI, Inc. is the San Francisco data-labelling company at `scale.com`. They
have no relationship. Search results and database listings conflate them
routinely.

**One widely repeated claim is false.** EXL did not acquire Sama in August 2026.
The target was iMerit.

## Tag distribution

| | `[V]` | `[I]` | `[U]` | Total |
|---|---|---|---|---|
| Tag groups | 233 | 124 | 59 | 416 |

The inference share is higher than in Brief 1, which is expected: establishing
that a market does not exist produces more reasoning-from-absence than
verification. The report is explicit that "no Canadian operator was found
licensing data" is absence of evidence, not verified absence.

## Highest-value open questions

Two unpublished documents could change the answer, and both are flagged in the
report:

- The **Canadian Digital Core Library**'s licensing terms. A $40M federal
  programme digitising drill core into an AI-ready national database, with ten
  provinces and territories signed on. Licensing terms are not published.
- **VITAL**'s industry-access terms. $210M+ in funding, 160+ hospitals, 20M+
  Canadians. Access model for industry was not established.

---

## License

Text and analysis: [CC BY 4.0](LICENSE). Reuse with attribution.

Company names, product names, and quoted material belong to their respective
owners and are reproduced here for identification and commentary.
