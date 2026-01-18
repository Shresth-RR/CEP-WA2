# CEP-WA2
CEP WA2
🌌 Solar System Simulation – “Field Trip” CEP WA2 Documentation
📘 What’s in This Document

Science Lens & Concept

Design Documentation

Implementation Overview

User Controls

Extensions & Creative Features

Screenshots and Demo

Reflections

Source Code & Setup

Acknowledgments

🔬 Science Lens & Concept
What real-world scientific phenomenon does this model?

This simulation models a Newtonian gravitational system:

Planets orbit a sun based on inverse-square gravitational forces.

A special black hole event represents gravitational collapse.

The orbiting speed is based on the planet’s distance from the sun.

🧠 Design Documentation
Planning Process

Started by sketching out how a planet should orbit a sun using velocity and distance.

Wanted interaction: clicking to spawn, black hole event, year counter.

Black hole idea came later as a creative extension, tied to a cosmic event.

Class Structure

Sun – The fixed center of gravity.

Planet – Moves based on gravitational pull, velocity changes with distance.

Star – Background visuals; 2 stars glow/animate and later combine.

BlackHole – Formed when ‘C’ is pressed; absorbs 5 planets and vanishes.

💡 The class system follows clean OOP principles, and each object handles its own drawing and behavior.

💻 Implementation Overview
How It Works

Planets orbit the sun using a simplified gravitational force.

Clicking adds a planet at mouse position with initial velocity.

Two random stars in the background glow and pulse.

Pressing ‘C’ fuses them into a black hole.

The black hole swallows 5 planets, then vanishes.

Remaining planets resume orbit from their last position.

A year counter increases every second.

✅ Features Checklist

✅ 2+ object classes (Planet, Star, Sun, BlackHole)

✅ Inverse-square attraction to gravity sources

✅ User-spawned particles

✅ Cleanup mechanic (swallowed planets)

✅ Environment effect (black hole's field)

✅ Mode switch (‘C’ key for black hole)

✅ Seeded randomness (randomSeed() for stars)

✅ Visual/data overlays (year counter, instructions)

🕹️ User Controls
Input	Action
Mouse Click	Add a new planet at that location
C key	Combine 2 glowing stars into a black hole
Auto Timer	Year counter starts at 2025 and increases every sec
