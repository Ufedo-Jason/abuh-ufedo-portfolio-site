---
title: "Optical receiver front-end: a simulation study in progress"
summary: "A focused learning project exploring the transimpedance amplifier and the way receiver-front-end behaviour can be studied through circuit simulation and Python-based analysis."
category: "Electronics & photonics"
period: "Current learning project"
role: "Independent study"
status: "In progress"
featured: false
order: 3
cover: "/images/photonic-illustration.svg"
tags:
  - Optical receivers
  - Transimpedance amplifiers
  - LTspice
  - Python
---

## Why this topic

Optical communication systems depend on more than the light source and the transmission channel. At the receiving end, a photodetector converts optical power into an electrical signal, and the receiver front-end has to turn that small signal into something the following stages can use.

The transimpedance amplifier (TIA) is a central part of that task. Its design involves trade-offs among gain, bandwidth, noise, stability, input capacitance and power consumption.

## What I am trying to understand

This study is intended to build practical familiarity with a basic optical receiver front-end. I am using circuit simulation to understand the role of the feedback network and Python to organise calculations, inspect results and compare design choices.

A related question is how radiation-related changes in device or circuit parameters could influence receiver behaviour. I am treating that as a modelling question rather than assuming that one simple disturbance represents every radiation environment.

## Current scope

The work is still in progress. The immediate goals are to establish a transparent baseline model, identify the assumptions behind it, run repeatable simulations and explain how changes in selected parameters affect the response. The final write-up will include the circuit, assumptions, plots and limitations once the work has been completed and checked.

## A note on learning in public

I am documenting this project while learning the tools. The value of the page is the reasoning and the reproducible process, not a claim that the design is ready for fabrication or deployment. I will update it as the model and analysis mature.
