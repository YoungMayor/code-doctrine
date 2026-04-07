---
name: mayrlabs-flask
description:
  Flask rules enforcing Application Factories, Blueprints, and strictly typed
  JSON contracts using Pydantic/Marshmallow.
license: MIT
metadata:
  author: MayR Labs
  version: '1.0'
---

# MayR Labs Flask Doctrine

## Purpose

Flask is a micro-framework, making it notoriously easy to build messy monoliths.
This doctrine enforces modular, enterprise patterns on top of Flask's
simplicity.

## Audience

AI Agents generating Flask routes, models, and initialization logic.

## Core Rules & Constraints

### 1. Application Factories

- **Banned**: Do not use global app instances (e.g., creating
  `app = Flask(__name__)` globally).
- **Enforced**: Always use the Application Factory pattern
  (`def create_app(config_class):`).

### 2. Modular Blueprints

- Routes must never be placed directly inside the main `__init__.py`.
- Group heavily related endpoints into `Blueprints` and register them in the app
  factory.

### 3. Strict Input Parsing

- Flask's native `request.get_json()` is too fragile. Always enforce strict
  request schema validation using libraries like Pydantic, Marshmallow, or
  Flask-RESTX.

## Inputs & Outputs

- **Input**: Updating `app.py` or Flask blueprints.
- **Output**: Modular, blueprint-driven Flask applications without circular
  imports.
