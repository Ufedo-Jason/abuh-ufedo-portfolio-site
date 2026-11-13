---
title: "Learning circuit design in public, one small model at a time"
description: "Why documenting assumptions, simulation steps and mistakes can make the process of learning electronics more rigorous."
pubDate: 2026-11-10
category: "Learning notes"
tags: [VLSI, Circuit design, Simulation, Learning]
draft: true
readTime: "4 min read"
cover: "/images/cover-notes.svg"
featured: false
---

There is a particular kind of confidence that comes from recognising a circuit in a lecture slide. You know the symbols, can follow the equations and understand what the blocks are meant to do. Then you open a simulator and discover that understanding the diagram and building a model are different skills.

I am learning to treat that gap as part of the subject rather than evidence that I should already know everything. Circuit design requires a cycle of reading, modelling, checking assumptions, running simulations and interpreting results. The simulator does not remove the need to reason. It gives that reasoning somewhere to be tested.

## Start with a question small enough to answer

When learning a new circuit, it helps to begin with a narrow question. What is the expected gain? Which node should move when an input changes? What sets the cutoff frequency? What happens if a component value doubles?

A focused question makes the model easier to inspect. It also makes it easier to notice when the result does not match the expectation.

## Write down the assumptions

A simulation is only as meaningful as the model and assumptions behind it. Device models, parasitic elements, supply conditions, initial values and idealisations can all influence the result. Keeping a record of those choices makes the work reproducible and prevents a plot from becoming an unexplained picture.

I also want to get better at distinguishing what the simulation demonstrates from what it does not. A result from an idealised model is a useful learning result, but it is not automatically a prediction of fabricated hardware.

## The value of a public notebook

Writing about the learning process forces me to explain ideas in language that another person can follow. It also creates a record I can revisit when a topic becomes more advanced. A mistake that once looked like a dead end can become a useful note about units, sign conventions, model limits or an overlooked connection.

I am using this space to keep those notes. The goal is not to present every experiment as a breakthrough. It is to build a habit of careful, visible learning: one model, one question and one better explanation at a time.
