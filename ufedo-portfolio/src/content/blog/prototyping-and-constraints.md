---
title: "A prototype is a conversation with constraints"
description: "What building a healthcare-focused hardware concept has taught me about testing assumptions, balancing trade-offs and designing for real conditions."
pubDate: 2026-11-12
category: "Building & creating"
tags: [Prototyping, Hardware, AfroVax, Engineering]
draft: true
readTime: "5 min read"
cover: "/images/AfroVax cooler.jpg"
featured: false
---

It is easy to fall in love with a solution before it has met the conditions it is supposed to survive. A neat block diagram can make a system look complete. A list of components can make a design feel convincing. But a prototype has a way of asking questions that a drawing cannot.

Working on AfroVax, a portable vaccine cold-storage concept, has made that lesson especially clear. The problem sounds straightforward when reduced to a sentence: keep vaccines within the required temperature range while making the system practical to transport and use in places where power can be unreliable. The engineering is anything but straightforward.

## Every improvement has a neighbour

A change made to improve one part of a system can affect another. More insulation may help reduce heat entering the enclosure, but it can also affect internal space and the way heat is distributed. A cooling component may perform well under one condition, yet the complete system still has to manage ambient temperature, battery limits, airflow, opening events and power availability.

That is why I have come to think of prototypes as conversations with constraints. Each test reveals which assumptions were too simple. Each iteration asks whether the design still makes sense when the variables interact.

## Test the system, not just the component

Component specifications are useful, but they do not tell the whole story. A system is the combination of its parts, their interfaces and the environment around them. Testing a cooling element in isolation is not the same as understanding the temperature behaviour of a loaded enclosure through a changing day.

For a project like this, meaningful evaluation needs repeatable conditions, sensible sensor placement, clear records and honest reporting of what was measured. A result without its test conditions is difficult to interpret. A prototype that works once is not yet evidence of reliability.

## The human side of engineering

The end user is not an abstract requirement at the bottom of a specification sheet. A health worker may need to carry the device, understand its indicators, respond to an alarm and trust that it is doing what it should. Every design decision has to be considered in that context.

That perspective changes the questions. Instead of asking only whether a design can cool, I also have to ask whether it is usable, serviceable, understandable and dependable.

The project is still evolving, and there are details that should remain private while the team considers its intellectual-property position. But the broader lesson is one I expect to carry into other engineering work: the quality of a design is revealed by the constraints it can handle, not by how elegant it looks before testing.
