# Huddle AI 

## Context

I need to run a presentation to the company on what I have been doing this week with AI.

What I've been doing is reading about running LLMs on my local machines.

I've also built my own specialised PC running linux to experiment with models and AI tools

## Contents

1. Why
   1. Privacy
   2. Cost
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
         3. Tool use: search the web, run code, read a file, call an API, use MCP servers
         4. Reasoning: complex problem-solving, math, multi-step tasks
         5. Quantization (resolution screenshot)
         6. Size (Weights) in GB ≈ Parameters (in billions) × bytes_per_weight
            1. FP16 = 2 bytes per weight
            2. 4 bit = 0.5 bytes per weight
      3. Load the model
         1. Show chat demo
   2. Claude
   3. 