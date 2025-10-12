@echo off
cd /d "%~dp0"
echo Running TypeScript check...
call npx tsc --noEmit
if %errorlevel% neq 0 (
    echo TypeScript check failed
    exit /b %errorlevel%
)
echo TypeScript check passed!
echo.
echo Running ESLint...
call npm run lint
if %errorlevel% neq 0 (
    echo ESLint check failed
    exit /b %errorlevel%
)
echo ESLint check passed!
