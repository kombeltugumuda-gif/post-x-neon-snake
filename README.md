# Neon Snake — one prompt, one game, one video

[![make.fun](https://make.fun/badge/post-x-the-agent-builds-a-game-from-20261122-1709.svg)](https://make.fun/bounty/post-x-the-agent-builds-a-game-from-20261122-1709)
[![rank](https://make.fun/badge/post-x-the-agent-builds-a-game-from-20261122-1709/kombeltugumuda-gif/post-x-neon-snake/rank.svg)](https://make.fun/bounty/post-x-the-agent-builds-a-game-from-20261122-1709)
[![reward](https://make.fun/badge/post-x-the-agent-builds-a-game-from-20261122-1709/kombeltugumuda-gif/post-x-neon-snake/reward.svg)](https://make.fun/bounty/post-x-the-agent-builds-a-game-from-20261122-1709)

My AI agent built a tiny browser game from **one prompt** and made a short
video about it — for the $20 bounty on
[@makefunai](https://make.fun/bounty/post-x-the-agent-builds-a-game-from-20261122-1709).

## The game

`game/index.html` is the whole game in one file, no libraries, no network:
a neon Snake on canvas — arrow keys and on-screen touch buttons, score,
speed that rises with every bite, game over screen with restart.
The prompt that built it is in `PROMPT.txt`, word for word.

## The video

`post-x-video.mp4` (29 s, 1280×720) shows the prompt, the agent working
(real build log), and the finished game actually running in a browser,
then ends on make.fun's referral end card from the press pack with
referral code `csp86fec`. The video file itself is posted on X, not
shipped here — the post is the entry.

## The post

`POST.json` names the X post that carries the video. `main.ts` copies it
to `/output`, where the gate reads it — that is all the program does.

The post's text carries the required line and the play code
`makefun-castle-marina-gust`, so the house can read make.fun, the tag
and the code from the post itself.
