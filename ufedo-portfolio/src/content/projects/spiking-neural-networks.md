---
title: "Small experiments with spiking neural networks"
summary: "Early computational experiments with neuron models, Poisson spike trains and spike-timing-dependent plasticity, exploring a different way to think about low-power intelligence."
category: "Computational experiments"
period: "Exploratory study"
role: "Independent learner"
status: "Early exploration"
featured: false
order: 4
cover: "/images/neuromorphic-illustration.svg"
tags:
  - Brian2
  - Spiking neural networks
  - LIF neurons
  - STDP
---

## Why spikes are interesting

Most of the machine-learning systems I encountered first represented information through numerical activations. Spiking neural networks offer another perspective: information is represented through events in time. That makes timing, sparsity and the dynamics of individual neurons central to the model.

I began exploring this area through small Brian2 experiments, starting with Poisson spike trains and leaky integrate-and-fire (LIF) neurons before looking at spike-timing-dependent plasticity (STDP).

## Learning by making the model visible

The early experiments focus on understanding what the equations mean in practice. How does an input spike train affect membrane potential? What changes when the firing threshold or time constant is adjusted? How does the relative timing of pre- and post-synaptic spikes influence a simple learning rule?

Plotting the model's activity has been particularly useful. It makes the relationship between parameters and behaviour easier to inspect than reading equations in isolation.

## Where I want to take it

This is an exploratory learning thread rather than a finished research result. I am interested in how event-driven computation relates to efficient hardware, including the broader questions around neuromorphic architectures and specialised circuits. The next step is to build more disciplined experiments and compare behaviours under clearly stated assumptions.
