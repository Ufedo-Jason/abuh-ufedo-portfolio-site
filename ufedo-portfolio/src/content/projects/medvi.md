---
title: "Medvi: making handwritten medical records easier to work with"
summary: "A final-year engineering project exploring how a low-cost scanning device and optical character recognition could help convert handwritten medical documents into searchable digital information."
category: "AI & healthcare systems"
period: "Final-year project"
role: "Project developer"
status: "Academic prototype"
featured: true
order: 2
cover: "/images/Medvii.jpg"
tags:
  - Optical character recognition
  - Raspberry Pi
  - Document digitisation
  - Human-centred design
---

## A workflow problem, not just a recognition problem

Handwritten medical records can contain important information, but paper-based workflows make that information difficult to search, retrieve and reuse. The challenge is not simply to recognise characters. It is to create a workflow that captures a document, processes it, and presents the result in a way that is useful to the people who need it.

Medvi was my final-year project response to that challenge. It explored a compact scanning device and an OCR-based pipeline for turning handwritten documents into digital text.

## Building the workflow

The prototype combined a Raspberry Pi-based device, a touchscreen interface and a document-capture workflow. On the software side, I explored image-processing and OCR approaches, compared recognition outputs and connected the captured information to a database-backed workflow.

The project required me to think about the entire path from image capture to text output. Lighting, document position, handwriting variation, image quality and recognition choice could all influence the final result. Improving one stage did not automatically improve the whole system.

## What I learned from evaluation

The project reinforced the difference between a model's impressive demonstration and a system's performance in an actual workflow. A useful evaluation needs to explain what was tested, what the metric measures, how the test samples were selected and where errors occurred.

The end-to-end prototype produced a reported handwriting-conversion result of 93.4% during project evaluation. Before presenting this figure as a general accuracy claim, the evaluation method and test conditions should be documented alongside it. That distinction matters, especially in a healthcare context where recognised text must not be treated as a substitute for professional verification.

## What I would improve

With more time, I would expand the evaluation set, categorise recognition errors, test more varied handwriting and document conditions, and pay closer attention to the human review process. I would also explore how confidence indicators and correction interfaces could make the system safer and more useful.

The most valuable outcome was not just a working prototype. It was a better appreciation of how hardware, software, data quality and user needs have to meet in the same design.
