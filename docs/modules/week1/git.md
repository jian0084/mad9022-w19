# Git Commands

Git is a program used for source and version control in any development project.

There are a variety of GUI tools that developers can use to manage their Git projects. However, the terminal / command line is always the most efficient.

This semester we will be doing all of our Git work from the command line, from within VS Code.

## Turning a Project folder into a Git Project

Once you have a folder for your project, whether you have added any files yet or not, you can turn it into a Git project by running the following command.

```
git init
```

This will add the .git folder and store all the project version history information and settings there.

## Connecting with a GitHub Project

If you want to keep a copy of your project on another computer (website), like GitHub or BitBucket, then you can do this from the command line too.

First you have to tell your local Git Project where the remote copy will sit. The URL of the remote copy of the project must exist for this to work. In other words, create the project on GitHub before doing this.

```
git remote add origin http://github.com/my-user-name/my-repo-name.git 
```

Sometimes you will need to change the URL of your remote project because the repo name gets changed or you entered the wrong value. We can change the remote url with this command:

```
git remote set-url https://github.com/my-user-name/my-new-repo.git
```

## Managing the Git Project

To manage your git project locally we really only need three commands

```
git status
git add -A
git commit -m "description of the changes made"
```

The status command will tell you which files have been changed, which ones have been put into the staging area, and which ones have been officially added to the project as updates to the project.

The add command will move one or all your files from changed to staged status. Think of this as a temporary state where you are making changes to files but the whole project is not ready to be tested because you are only half done all the changes you need to make. You can add an actual file name as the third part of this command or `-A` when you want to stage ALL the files that have changed.

The commit command will finalize the staged files. Think of this as the point where you have made all the changes that you want to make before giving a new version number to the project.

## Uploads and Downloads

If your project is going to exist in more than one place - like on your computer AND on Github - then you need to keep them in sync.

You should frequently download (PULL) the latest version of the project from the GitHub location. Do this every time you commit something, and BEFORE you try to upload things. It will tell you if there are any conflicts between your new code and the code on the server. That way you can decide which version of the files or lines of code that you want to keep.

```
git pull origin master

git push origin master
```

The upload (PUSH) command will take your local code and try to overwrite the version of the code on GitHub.

`origin` is just a label that we give to the remote project location. We are calling the GitHub version of the code `origin`. We could call it anything we want. This is just a convention that people follow. It's similar to using `index.html` as the default name of your home page in any folder. Nobody has to guess what the remote site will be called if we all call it `origin`.

`master` is the name of the main branch of the project. If you are the only person working on the project then it is possible for you to only use this one branch.


## Supporting Resources

### Video Tutorials

<Badge text="Git" /> 

<YouTube
  title="Learning Git Playlist"
  url="https://www.youtube.com/embed/EdEWigP6zxQ"
/>

<Badge text="GitHub" />

<YouTube
  title="Learning GitHub Playlist"
  url="https://www.youtube.com/embed/M9uTajSRytE"
/>


### Websites

- [GitHub website](https://www.github.com/) : for free repo storage
- [GitHub Education](https://education.github.com/pack) : for students to sign up and get free Private repos and other swag.
- [Git website](https://git-scm.com/) : website of the official software that runs locally and behind-the-scenes on Github.
- [Git documentation](https://git-scm.com/book/en/v2) : Free Guide to Git