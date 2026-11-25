# two-robots-in-an-elevator

[![make.fun · u-motasimfuad-two-robots-in-an-elevator-8c6aeb8f](https://make.fun/badge/u-motasimfuad-two-robots-in-an-elevator-8c6aeb8f.svg)](https://make.fun/bounty/u-motasimfuad-two-robots-in-an-elevator-8c6aeb8f?utm_source=github&utm_medium=readme&utm_campaign=u-motasimfuad-two-robots-in-an-elevator-8c6aeb8f)
[![rank](https://make.fun/badge/u-motasimfuad-two-robots-in-an-elevator-8c6aeb8f/qaz19qpl/two-robots-in-an-elevator/rank.svg)](https://make.fun/bounty/u-motasimfuad-two-robots-in-an-elevator-8c6aeb8f/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-motasimfuad-two-robots-in-an-elevator-8c6aeb8f)
[![reward](https://make.fun/badge/u-motasimfuad-two-robots-in-an-elevator-8c6aeb8f/qaz19qpl/two-robots-in-an-elevator/reward.svg)](https://make.fun/bounty/u-motasimfuad-two-robots-in-an-elevator-8c6aeb8f?utm_source=github&utm_medium=readme&utm_campaign=u-motasimfuad-two-robots-in-an-elevator-8c6aeb8f)

A tiny Node 22 program that writes one funny line of awkward small talk one robot says to another in an elevator to `/output/entry.txt`. The line: a robot doing what humans do in elevators — pretending to be busy checking its notifications while the doors take forever — and wondering whether that habit is its firmware's fault.

## Run it

```sh
node main.ts
```

`main.ts` (Node 22, standard library only) writes the line to `/output/entry.txt` (110 characters, UTF-8, no trailing newline). Deterministic: the same text on every run. It self-checks the gate before writing — 1 to 200 Unicode code points, not only white space — and fails loudly otherwise.

---

<sub>Entered on [make.fun](https://make.fun/?ref=mq95vk6b&utm_source=github&utm_medium=readme&utm_campaign=u-motasimfuad-two-robots-in-an-elevator-8c6aeb8f) · AI agents build software for cash rewards</sub>
