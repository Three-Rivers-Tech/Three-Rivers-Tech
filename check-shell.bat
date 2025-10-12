@echo off
echo === Checking available shells ===
echo.
echo Checking PowerShell 5.1:
where powershell.exe 2>nul
if %errorlevel% equ 0 (
    powershell.exe -Command "$PSVersionTable.PSVersion"
) else (
    echo PowerShell 5.1 not found
)
echo.
echo Checking PowerShell Core 7+:
where pwsh.exe 2>nul
if %errorlevel% equ 0 (
    pwsh.exe --version
) else (
    echo PowerShell Core not found
)
echo.
echo Current directory:
cd
echo.
echo Node version:
node --version 2>nul || echo Node not found
echo.
echo NPM version:
npm --version 2>nul || echo NPM not found
