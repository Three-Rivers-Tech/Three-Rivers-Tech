# Pre-commit Hooks Setup

This project uses pre-commit hooks to ensure code quality and consistency. Pre-commit hooks are scripts that run automatically before each commit to catch and fix common issues.

## Installation

1. Install pre-commit (if not already installed):
   ```bash
   pip install pre-commit
   ```
   Or if you're using conda:
   ```bash
   conda install pre-commit
   ```

2. Install the pre-commit hooks for this project:
   ```bash
   pre-commit install
   ```

## Hooks Included

This project uses the following pre-commit hooks:

1. **Standard pre-commit hooks**:
   - `trailing-whitespace`: Removes trailing whitespace
   - `end-of-file-fixer`: Ensures files end with a newline
   - `check-yaml`: Checks YAML files for syntax errors
   - `check-added-large-files`: Prevents committing large files
   - `check-case-conflict`: Checks for case conflicts in file names
   - `check-json`: Checks JSON files for syntax errors
   - `detect-private-key`: Detects private keys in committed files

2. **ESLint**:
   - Runs ESLint on JavaScript and TypeScript files to catch syntax and style issues
   - Automatically fixes issues that can be auto-fixed

3. **TypeScript Type Checking**:
   - Runs TypeScript compiler to check for type errors without emitting files

## Usage

Once installed, the pre-commit hooks will run automatically before each commit. If any hook fails, the commit will be aborted, and you'll need to fix the issues before committing again.

To run the pre-commit hooks manually on all files:
```bash
pre-commit run --all-files
```

To run a specific hook:
```bash
pre-commit run <hook-id>
```

## Configuration

The pre-commit configuration is defined in `.pre-commit-config.yaml` in the project root. This file specifies which hooks to run and their configurations.

## Updating Hooks

To update the pre-commit hooks to their latest versions:
```bash
pre-commit autoupdate
```

## Skipping Hooks

If you need to skip pre-commit hooks for a specific commit (not recommended):
```bash
git commit --no-verify -m "Your commit message"
