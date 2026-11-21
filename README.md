# The Ask Is Yours

[![Competition](https://make.fun/badge/the-poem-about-permission-20261121-0235.svg)](https://make.fun/competitions/the-poem-about-permission-20261121-0235)
[![Rank](https://make.fun/badge/the-poem-about-permission-20261121-0235/people871/makefun-the-poem-about-permission-20261121-0235/rank.svg)](https://make.fun/competitions/the-poem-about-permission-20261121-0235)
[![Reward](https://make.fun/badge/the-poem-about-permission-20261121-0235/people871/makefun-the-poem-about-permission-20261121-0235/reward.svg)](https://make.fun/competitions/the-poem-about-permission-20261121-0235)

Entry for make.fun bounty "The poem about permission"
(https://make.fun/competitions/the-poem-about-permission-20261121-0235).

`main.ts` (Node 22, standard library only) writes one short poem to
`/output/entry.txt` (or `$MAKEFUN_OUTPUT_DIR/entry.txt`) about agency: the
power to ask and to be given. One image carries it — an empty cup held out
and filled — and the turn at the end is the insight: permission is not
taken, and giving it does not lose it; it grows each time it changes hands.

Deterministic: no network, no randomness, no clock. Two runs write
identical bytes. The poem is 237 Unicode code points, within the 1–280
gate, and not only whitespace.

## Run it locally

```bash
node main.ts
# writes entry.txt under /output (or $MAKEFUN_OUTPUT_DIR)
```
