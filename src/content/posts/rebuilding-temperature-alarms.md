---
title: Rebuilding Temperature Alarms
date: 2026-10-24
summary: Taking over a temperature monitor for a school district's network closets.
---

Temperature Alarms watches the closets where a school district keeps its network gear. A small board with a sensor sits in each closet and reports the temperature and humidity every 30 seconds, and the dashboard shows which closets need attention.

It wasn't mine to start with. Joshua Wise wrote [the first version](https://github.com/Joshua-Wise/enmo) in PHP in 2018, and I took it over in late 2025.

## What I changed

I moved it from PHP to React and TypeScript, and the dashboard went live: readings show up the moment they arrive, with no reload. It tracks humidity now too, so it can warn about mold risk as well as heat.

The closet in the worst shape is always at the top. The server keeps a log of every incident from start to finish, and it can email the techs when something goes wrong. Everyone signs in, either as an admin who can change things or a viewer who can only look.

## The live updates

The old dashboard's live updates were unreliable, and switching to WebSockets was one idea for fixing them. The actual cause was that the backend ran as two processes, and a reading that arrived at one never reached browsers connected to the other. Running it as one process fixed it. The boards still send each reading as a plain HTTP request, and browsers get updates over Server-Sent Events.

## The boards

The boards can now update their firmware over the air, so a fix doesn't mean reflashing every board by hand. They also send their readings over HTTPS and check the server's certificate, which takes some care on a chip with about 40 KB of RAM.

There's a demo mode that runs the whole thing with made-up closets if you want to see it without any hardware. The [source is on GitHub](https://github.com/HamzaQaz/Temperature-Alarms-React).
