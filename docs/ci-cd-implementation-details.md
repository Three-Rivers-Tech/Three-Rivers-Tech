# CI/CD Pipeline Implementation Details

## Overview
This document provides detailed implementation instructions for setting up the CI/CD pipeline for the Three Rivers Tech website. This document is intended for the developer who will implement the pipeline based on the architectural plan.

## Directory Structure to Create
```
website/
└── .github/
    └── workflows/
```

## Files to Create

### 1. GitHub Actions Workflow File
**Path:** `website/.github/workflows/deploy.yml`

**Content:**
```yaml
name: Deploy to Vercel

on:
  push:
    branches: [ main ]
  pull_request:
    branches: [ main ]

jobs:
  build-and-test:
    runs-on: ubuntu-latest

    strategy:
      matrix:
        node-version: [18.x]

    steps:
    - name: Checkout code
      uses: actions/checkout@v3

    - name: Use Node.js ${{ matrix.node-version }}
      uses: actions/setup-node@v3
      with:
        node-version: ${{ matrix.node-version }}
        cache: 'npm'
        cache-dependency-path: website/package-lock.json

    - name: Install dependencies
      run: npm ci
      working-directory: website

    - name: Run linting
      run: npm run lint
      working-directory: website

    - name: Run build
      run: npm run build
      working-directory: website

  deploy:
    needs: build-and-test
    runs-on: ubuntu-latest
    if: github.ref == 'refs/heads/main'

    steps:
    - name: Deploy to Vercel
      run: echo "Deploying to Vercel"
      # Vercel deployment will be handled by Vercel's GitHub integration
```

### 2. Vercel Configuration File
**Path:** `website/vercel.json`

**Content:**
```json
{
  "version": 2,
  "builds": [
    {
      "src": "package.json",
      "use": "@vercel/next",
      "config": {
        "includeFiles": ["next.config.ts"]
      }
    }
  ],
  "routes": [
    {
      "src": "/(.*)",
      "dest": "/"
    }
  ]
}
```

## Implementation Steps

### Step 1: Create Directory Structure
1. Navigate to the `website` directory
2. Create the following directories:
   - `.github`
   - `.github/workflows`

### Step 2: Create Workflow File
1. Create `deploy.yml` in the `.github/workflows` directory
2. Add the YAML content as specified above

### Step 3: Create Vercel Configuration
1. Create `vercel.json` in the `website` directory
2. Add the JSON content as specified above

### Step 4: Configure Vercel Deployment
1. Connect the GitHub repository to Vercel
2. Configure the project settings in Vercel:
   - Framework: Next.js
   - Root Directory: website
   - Build Command: npm run build
   - Output Directory: .next

### Step 5: Test the Pipeline
1. Make a small change to the website
2. Commit and push to the main branch
3. Verify that the GitHub Action runs successfully
4. Check that the deployment is triggered on Vercel

## Environment Variables
Currently, no environment variables are needed for the build process. If needed in the future:
1. Add them as GitHub Secrets
2. Configure them in the Vercel project settings

## Troubleshooting
1. If the build fails, check the GitHub Actions logs for error details
2. If deployment fails, check the Vercel deployment logs
3. Ensure all dependencies are correctly specified in package.json
4. Verify that the Node.js version is compatible with Next.js 15

## Future Enhancements
1. Add automated testing when test suite is implemented
2. Add performance monitoring
3. Set up staging environment deployments
4. Implement automated rollback on failed deployments
