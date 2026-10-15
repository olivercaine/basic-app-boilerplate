# Huddle AI 

## Context

I need to run a presentation to the company on what I have been doing this week with AI.

What I've been doing is reading about running LLMs on my local machines.

I've also built my own specialised PC running linux to experiment with models and AI tools

## Contents

1. Why
   1. Experiment with AI tools
   2. Privacy
   3. Cost
2. Requirements
   1. VRAM - enough to load the whole model onto disk
   2. RAM - memory bandwith -  tokens per second
   3. Fast hard drive - for loading the models
3. Demo
   1. Show LmStudio
      1. Download LM Studio - windows, mac, linux
      2. LM Studio UI. Pick your...
         1. Model: GGUF vs MLX
         2. Capabilities: 
            1. Tool use: search the web, run code, read a file, call an API, use MCP servers
            2. Reasoning: complex problem-solving, math, multi-step tasks
         3. Quantization <resolution screenshot>
         4. Size (Weights) in GB ≈ Parameters (in billions) × bytes_per_weight
            1. FP16 = 2 bytes per weight
            2. 4 bit = 0.5 bytes per weight
      3. Load the model
         1. Show chat demo
   2. Claude
      1. Config - local override
4. Alternative options
   1. Mac Studio <photo>
   2. Mac Studio clustered <photo>
   3. NVIDIA DGX Spark
5. Token speeds compared
   1. <chart>
6. Things I'm going to be trying next
   1. n8n - full workflows
   2. LiteLLM - offloading to remote AI
7. One final thing...
   1. 24 hours in a day
   2. We can 





