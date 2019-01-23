# Setup for Cordova Projects

You can use these same instructions for setting up for any of the Cordova project.

1. Create a **private** repo on GitHub.com using the provided name in the project description.
2. Create the Cordova project on your computer with the `cordova create` command.
3. Navigate into the Cordova project folder that you just created using `cd` in the Terminal.
4. Turn the project into a Git project folder with `git init`.
5. Add a `.gitignore` file at the root of the project and add the following lines inside the file.
```
    node_modules/
    platforms/
```
6. Add the location of your repo to the project by going to GitHub and copying the URL of the repo. Make sure that the URL ends with `.git`.
```
git remote add origin [the url you copied from GitHub]
```
7. Then we need to make sure that the two repos are in sync with the following.
```
git pull origin master
```
8. Next we want to add all our project files to the project and update GitHub.
```
git add -A
git commit -m "added base Cordova files"
git push origin master
```
9. Next we can add our platforms and plugins to the project. Customize this step based on the project you are building.
```
cordova platform add android
cordova plugin add cordova-plugin-camera
```
10. Now you are free to start working on the content in the `assets` and `www` folders. Repeat Step 8. after each change you make to the project.

