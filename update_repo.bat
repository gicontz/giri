@echo off
set /p msg=Commit Message:
git status
git reset
git add *
git commit -m %msg%
git push origin thesis-2017
