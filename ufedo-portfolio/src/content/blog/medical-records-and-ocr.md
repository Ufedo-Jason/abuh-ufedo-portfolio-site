---
title: "Turning a handwritten page into useful information is harder than it looks"
description: "Notes from building an OCR-based document workflow: why image capture, text recognition, data quality and human review all matter."
pubDate: 2026-11-11
category: "AI & systems"
tags: [OCR, Healthcare technology, Raspberry Pi, AI]
draft: true
readTime: "5 min read"
cover: "/images/Medvii.jpg"
featured: false
---

Optical character recognition is easy to describe: give a computer an image containing text and ask it to return the words. In practice, the gap between that description and a reliable workflow is wide.

I encountered that gap while developing Medvi, a final-year project that explored digitising handwritten medical documents. The idea was to combine a compact scanning device with an OCR pipeline so that information on paper could become easier to search and work with.

## The image is already part of the problem

Before a recognition model sees a word, the system has to capture it. A page may be tilted, unevenly lit, folded, faint or crowded with handwritten marks. The quality of the image can determine how much useful information survives into the next stage.

That means document digitisation is not simply a model-selection exercise. It involves camera or scanner placement, lighting, image preprocessing, segmentation and decisions about how to handle uncertain text.

## Recognition is not the same as understanding

A recognition system can return plausible-looking text while still making important mistakes. Handwriting varies between people. Some characters are ambiguous. A digit may resemble a letter, a short mark may be missed, and a word that is clear to a person may be difficult for a model to distinguish from another word.

In a healthcare workflow, these errors matter. A digitised record should not silently turn uncertainty into certainty. Human review, confidence indicators and a clear correction process are important parts of responsible system design.

## Evaluate the complete workflow

A model benchmark is useful, but the user experiences the entire process: capture, preprocessing, recognition, review, storage and retrieval. If the camera produces poor images, a strong model may not rescue the output. If the interface makes corrections difficult, a technically impressive model may still be frustrating to use.

The project taught me to ask what a performance figure actually measures. Was it character-level accuracy, word-level accuracy, document-level transcription quality or a broader end-to-end result? What kinds of handwriting were included? How were errors counted? Those details are necessary before a number can support a meaningful claim.

My main takeaway is that useful AI systems are engineered around the workflow, not just the model. The model matters, but so do the data, interfaces, failure modes and people who have to trust the output.
