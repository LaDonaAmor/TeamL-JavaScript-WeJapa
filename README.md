# TeamL-JavaScript-WeJapa

Project One 
Build an exchange rate calculator 
(Users should be able to select any currency and the rates should be live)

# API USED
https://www.exchangerate-api.com/docs/
Base currencies are EUR and USD because we are not on paid accounct.


# Developers guide.

The proper file structure has been created

Please before you push your codes to the repository make sure you pull from the repository, 
so the changes that have been made can be reflected on your local machine, for us to avoid merge conflicts use the git command line

      git pull origin develop

This process here should be able to guide you on how to contribute effectively to this project, follow the steps below. 
You should not be new to the git workflow process however if you still are, the guide should still be able to help you through the process.
Develop is the default branch.

  Fork the repository to generate a copy of your own.

  Clone the repository.

     git clone (the repository link)

  Make your forked repo the remote upstream (at origin)

    git remote add origin (the repository link)

   Create a branch FROM develop, ALWAYS CREATE YOUR BRANCH FROM DEVELOP, the branch name should at least be meaningful, 
   i.e name the branch based on what you are working on make sure you have one story per branch (one(1) story === one(1) branch)

    git checkout -b (name-of-branch)

After changes have been made do:

    git pull origin develop

Consistently pull from the develop branch to avoid not getting your pull request merged and to avoid conflicts. 
This way you can resolve conflicts from your local computer even before pushing always check what branch you are on when making changes

  Make your changes, add them and make your commits

    git commit -m "your message"

Write good commit messages, this is very important, so people reviewing can know what your fix, feature e.t.c. is doing

   Push your codes to the new branch on your forked remote upstream repository

    git push origin (name-of-branch)

Make your Pull request from that branch of your repo to the develop branch of this (the HNG) repo and wait for it to be merged.

Write good commit messages, this is very important, so people reviewing can know what your fix, feature e.t.c. 
is doing Your PR should carry the story / task URL (instruction from above). if you are going to make changes to an existing code, 
state why you are doing so in the commit messages

it is not just about the code, user workflow matters too!!
