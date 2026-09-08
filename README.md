# Competitive Intelligence Brief: Evaratus & Petrarch

A packaged research brief on two AI training-data suppliers to frontier labs —
**Evaratus** (formerly Scaler AI Labs) and **Petrarch** (YC S26) — covering how
each makes money, who buys, how they compare, and the surrounding competitive
landscape.

**Live site:** https://vivekally.github.io/Data-Broker/

**As of:** 2026-09-08

---

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

Tag distribution across the brief:

| | `[V]` | `[I]` | `[U]` | Total |
|---|---|---|---|---|
| Tag groups | 67 | 32 | 30 | 129 |

---

## Repository layout

```
README.md                    this file
research/research-brief.md   verbatim source document, unmodified
docs/                        the published site
  index.html                 overview, legend, self-check, caveats
  evaratus.html              Part 1, Company A
  petrarch.html              Part 1, Company B
  comparison.html            Part 2, cross-company
  landscape.html             Part 3, competitors
  assets/style.css           the site's only stylesheet
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

## License

Text and analysis: [CC BY 4.0](LICENSE). Reuse with attribution.

Company names, product names, and quoted material belong to their respective
owners and are reproduced here for identification and commentary.
