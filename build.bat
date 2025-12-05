@echo off
title Deploy Docusaurus via SSH
echo Avvio deploy del sito Docusaurus...
powershell -Command "$env:USE_SSH='true'; npm run deploy"
pause