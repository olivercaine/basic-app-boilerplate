---
theme: default
title: Huddle AI
info: Running models on our own machines
highlighter: shiki
colorSchema: light
transition: fade
fonts:
  sans: Outfit
  serif: Fraunces
  mono: IBM Plex Mono
aspectRatio: 16/9
canvasWidth: 980
routerMode: hash
layout: center
class: text-center
---

# Huddle AI

Running models on our own machines.

<div class="mt-10 text-sm tracking-[0.22em] uppercase opacity-60">
This week
</div>

<!--
Open with the week, not the hardware. The point of the huddle is what I have been doing with AI: reading about local models, and building a Linux PC to try them.
-->

---
layout: two-cols
---

# This week

I have been reading about running large language models on machines we control.

::right::

<div class="mt-16 flex flex-col gap-6">
  <div class="border-t border-black/15 pt-4">
    <p class="eyebrow">Reading</p>
    <p>How a model actually gets onto a machine, and what makes it fast or slow.</p>
  </div>
  <div class="border-t border-black/15 pt-4">
    <p class="eyebrow">Building</p>
    <p>A Linux PC put together for models and the tools around them.</p>
  </div>
</div>

---

# Why bother

<div class="mt-10 grid grid-cols-3 gap-6">
  <div class="card">
    <p class="eyebrow">01</p>
    <h3>Experiment</h3>
    <p>Try tools, formats, and models without waiting on a vendor roadmap.</p>
  </div>
  <div class="card">
    <p class="eyebrow">02</p>
    <h3>Privacy</h3>
    <p>The prompt, the files, and the answers can stay on hardware we own.</p>
  </div>
  <div class="card">
    <p class="eyebrow">03</p>
    <h3>Cost</h3>
    <p>A machine has a price. A hosted API keeps charging for every token.</p>
  </div>
</div>

---

# What the machine has to have

<div class="mt-8 flex flex-col gap-5">
  <div class="row">
    <p class="eyebrow w-28">VRAM</p>
    <p>Enough to hold the whole model. If the weights do not fit, it does not run.</p>
  </div>
  <div class="row">
    <p class="eyebrow w-28">RAM</p>
    <p>Memory bandwidth is what turns into tokens per second.</p>
  </div>
  <div class="row">
    <p class="eyebrow w-28">Disk</p>
    <p>A fast drive, because loading the model is its own wait.</p>
  </div>
</div>

<!--
VRAM is memory on the GPU, not the disk. The disk is the third point: getting the weights off storage and into memory.
-->

---
layout: two-cols
---

# LM Studio

One app. Windows, Mac, and Linux.

Download it, pick a model, and talk to it.

::right::

<div class="mt-14 flex flex-col gap-4">
  <div class="card">
    <p class="eyebrow">GGUF</p>
    <p>The portable format. This is the one for the Linux PC.</p>
  </div>
  <div class="card">
    <p class="eyebrow">MLX</p>
    <p>Apple's format. This is the one that suits a Mac.</p>
  </div>
</div>

---

# What you switch on

<div class="mt-10 grid grid-cols-2 gap-6">
  <div class="card">
    <p class="eyebrow">Tool use</p>
    <h3>Let it act</h3>
    <p>Search the web, run code, read a file, call an API, or use MCP servers.</p>
  </div>
  <div class="card">
    <p class="eyebrow">Reasoning</p>
    <h3>Let it think</h3>
    <p>Harder problems, maths, and work that takes more than one step.</p>
  </div>
</div>

---

# How big is the file

Weights in GB ≈ parameters, in billions × bytes per weight.

<div class="mt-8 grid grid-cols-2 gap-6">
  <div class="card">
    <p class="eyebrow">FP16</p>
    <p class="stat">2 bytes</p>
    <p>A 70 billion parameter model is about 140 GB.</p>
  </div>
  <div class="card">
    <p class="eyebrow">4-bit</p>
    <p class="stat">0.5 bytes</p>
    <p>The same model is about 35 GB. Lower resolution, much more likely to fit.</p>
  </div>
</div>

<!--
Quantization is the resolution of the weights. The formula is the one in the notes. The 70B example is just the formula applied, so the room can feel the difference.
-->

---
layout: two-cols
---

# Will it fit?

Before downloading a model, check the memory maths.

The AI Bridge does that in the open: weights, context, and what the machine keeps for itself.

::right::

<img src="./TheAiBridge.png" class="shot" alt="The AI Bridge, a calculator for whether a model fits on a Mac" />

---

# Then you load it

<div class="mt-10 grid grid-cols-2 gap-6">
  <div class="card">
    <p class="eyebrow">In LM Studio</p>
    <h3>A chat on the desk</h3>
    <p>Load the model and show a normal conversation, running locally.</p>
  </div>
  <div class="card">
    <p class="eyebrow">In Claude</p>
    <h3>A local override</h3>
    <p>Point the config at the machine in the room instead of the hosted API.</p>
  </div>
</div>

<!--
Live demo. First the LM Studio chat. Then the Claude config that overrides the remote endpoint with the local one.
-->

---

# Other ways to build it

<div class="mt-8 grid grid-cols-2 gap-6">
  <div class="card">
    <p class="eyebrow">Buy</p>
    <h3>NVIDIA DGX Spark</h3>
    <p>A small NVIDIA machine aimed at this job.</p>
  </div>
  <div class="card">
    <p class="eyebrow">Build</p>
    <h3>An AI server rack</h3>
    <p>The same idea as the desk PC, taken out of the office and into a rack.</p>
  </div>
</div>

---
layout: two-cols
---

# A stack of Mac Studios

One machine is a computer.

A stack is a bigger pool of memory, still on the desk.

::right::

<img src="./clustering.png" class="shot tall" alt="Five silver Mac Studios stacked on a desk beside a laptop" />

---
layout: two-cols
---

# Tie them together

The cables are the point.

RDMA lets one Studio read another's memory directly, instead of copying every token across a normal network.

::right::

<div class="crop-frame">
  <img src="./clustering2.png" alt="Thunderbolt cables linking the ports on a stack of Mac Studios" />
</div>

---

# Tokens per second

Same kind of comparison: how many tokens come back each second.

| Where it runs | Tokens / sec |
| --- | --- |
| Anthropic / ChatGPT | 100 |
| RTX 5090 | 50–70 |
| Top-spec Mac Studio | 40–70 |
| NVIDIA DGX Spark | 50–70 |
| Mac Studio cluster | Shared over RDMA |

<!--
These are the figures from this week's notes, for the same model and quantization. The cluster is not given a single number. The point of the cluster is RDMA, not a faster single box.
-->

---
layout: two-cols
---

# What I want to try next

<div class="mt-8 card">
  <p class="eyebrow">n8n</p>
  <h3>Whole workflows</h3>
  <p>Not one chat. A run of steps that can call the model and then do the work.</p>
</div>

::right::

<div class="mt-8">
  <p class="eyebrow">LiteLLM</p>
  <h3 class="mb-4">Send the hard calls out</h3>
  <img src="./LiteLLM.png" class="shot" alt="LiteLLM Auto Router sending a request to a simple, medium, complex, or reasoning model" />
</div>

<!--
The diagram is LiteLLM's auto router. A request comes in, a classifier picks a tier, and the answer can come from a small local model or a frontier model somewhere else.
-->

---
layout: center
class: text-center
---

# One final thing

<p class="mt-6 text-3xl">There are 24 hours in a day.</p>

<p class="mt-8 text-5xl">We can.</p>

<!--
The notes stop on "We can." Finish the sentence in the room.
-->
