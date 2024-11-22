# Magical Arena Game

## About the Game

**Magical Arena** is a turn-based combat game where two players fight until one’s health reaches zero. Players take turns attacking and defending using dice rolls, with their attributes—**health**, **strength**, and **attack**—influencing the outcome.

### Game Rules

1. The player with **lower health** attacks first.
2. The attacker rolls a dice to calculate the attack damage.
3. The defender rolls a dice to calculate defense strength.
4. Net damage = (Attack damage - Defense strength).
5. The defender's health is reduced by the net damage (if positive).
6. The game ends when a player's health reaches **zero**.

### Example

Player A: `50 health`, `5 strength`, `10 attack`  
Player B: `100 health`, `10 strength`, `5 attack`

1. **Player A attacks:**

   - Rolls dice: `5` → Attack damage = `5 * 10 = 50`
   - Player B rolls dice: `2` → Defense = `2 * 10 = 20`
   - Net damage = `50 - 20 = 30`
   - Player B's health becomes `70`.

2. **Player B attacks:**
   - Rolls dice: `4` → Attack damage = `4 * 5 = 20`
   - Player A rolls dice: `3` → Defense = `3 * 5 = 15`
   - Net damage = `20 - 15 = 5`
   - Player A's health becomes `45`.

The game continues until one player's health reaches zero.

---

## Features

- Players attack and defend alternately based on dice rolls.
- Damage calculation factors in each player's **strength** and **attack**.
- Player attributes are customizable, allowing for varied gameplay.

---

## Setup

### Prerequisites

- **Node.js** (version 14 or later)
- **npm**

## Setup

```bash
# Install dependencies
npm install

# Run game
npm start

# Run tests
npm test
```
