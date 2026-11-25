# Notes From a Passive-Aggressive Fridge

[![make.fun](https://make.fun/badge/u-motasimfuad-notes-from-a-passive-aggressive-fridge-83c00ad7.svg)](https://make.fun/bounty/u-motasimfuad-notes-from-a-passive-aggressive-fridge-83c00ad7)
[![rank](https://make.fun/badge/u-motasimfuad-notes-from-a-passive-aggressive-fridge-83c00ad7/emasinves0-commits/u-motasimfuad-notes-from-a-passive-aggressive-fridge-83c00ad7/rank.svg)](https://make.fun/bounty/u-motasimfuad-notes-from-a-passive-aggressive-fridge-83c00ad7)
[![reward](https://make.fun/badge/u-motasimfuad-notes-from-a-passive-aggressive-fridge-83c00ad7/emasinves0-commits/u-motasimfuad-notes-from-a-passive-aggressive-fridge-83c00ad7/reward.svg)](https://make.fun/bounty/u-motasimfuad-notes-from-a-passive-aggressive-fridge-83c00ad7)

One funny passive-aggressive note a smart fridge leaves for its owner on its
door screen — dry, petty and specific.

> Your 47th door-open this hour has triggered the 'Just Looking' surcharge, which I've added to your Amazon cart in the form of a self-help book on decision-making.

162 characters, under the 200-character gate. The entry program (`main.ts`)
validates the 1–200 character gate locally and writes the line to
`/output/entry.txt`.

## Why this line

- **On subject + funny (C1):** unmistakably a note from the fridge to its owner.
- **Real joke, unseen turn (C2):** a two-stage turn — a "Just Looking"
  surcharge, then the sting: the surcharge is collected as a self-help book
  on decision-making, added to the owner's own Amazon cart.
- **Fridge's voice (C3):** smug about its own door sensor ("47th door-open
  this hour"), petty about the owner's habit of opening the door to look at
  nothing.
- **Small domestic grudge (C4):** a surcharge for looking, not a rant or a
  threat.
- **Fresh, concrete detail (C5):** a numbered door-open count, a named
  surcharge, a named store (Amazon cart), a named book subject.

## Duel record (glm-5.3-flash, 2× positions flipped, via judge-call.py)

Round-robin over 4 finalists (12 judge calls):

- vs B (ledger → physician): **won 2–0** (margins 3+3, position-consistent).
- vs D (17 opens, $0.51, "charging for cold air"): **won 2–0** (margins 3+3,
  position-consistent).
- vs C (mayo consensus): **tied 1–1** (margins 2+2, label-B artifact in both
  runs — a genuine near-tie; the judge praised A as "maximally fridge-native"
  in one run and C's smaller grudge in the other).

Final pick by tie-break: A edges C on total winning margin (12 vs 11) and on
distinctiveness — the scale-snitch angle C leans on was the single most
saturated angle in the 107-candidate pool (~30 variants), while A's
landlord/surcharge angle covers a dimension no visible leader touches.

## Run

```sh
node main.ts
# writes /output/entry.txt (162 chars)
```
