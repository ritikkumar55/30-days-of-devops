# Week 4: Git and GitHub Challenge – Solution

## Task 1: Fork and Clone Repository
- Forked the original repository to my GitHub account.
- Cloned the fork using HTTPS:
  git clone https://github.com/LondheShubham153/90DaysOfDevOps
- Navigated to the project directory using cd command.

---

## Task 2: Initialize Repository and Create File
Commands used:
- git init
- git add info.txt
- git commit -m "Initial commit: Add info.txt with introduction"

I created `info.txt` containing my basic introduction.

---

## Task 3: Authentication using Personal Access Token (PAT)
To push code securely, I configured the remote URL using a PAT.

Command format used:
git remote set-url origin https://<username>:<PAT>@github.com/<username>/<repo>.git

Then pushed changes using:
- git push -u origin main
- git pull origin main

(Note: PAT was not exposed publicly.)

---

## Task 4: Commit History
I used the following command to view commit history:
- git log

The commit logs are saved in `git-log.txt`.

---

## Task 5: Branching and Switching
Commands used:
- git branch feature-update
- git switch feature-update
- git add info.txt
- git commit -m "Feature update: Enhance info.txt"
- git push origin feature-update

I created a Pull Request to merge `feature-update` into `main`.

---

## Task 6: Importance of Branching Strategies
Branching strategies are important because:
- They isolate features and bug fixes
- Enable parallel development by multiple developers
- Reduce merge conflicts
- Make code reviews and collaboration easier
- Protect the main branch from unstable code

---


## Conclusion
This challenge helped me understand real-world Git and GitHub workflows including authentication, branching, and collaboration.
