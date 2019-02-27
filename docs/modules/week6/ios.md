# Working with iOS

## Updating OSX

For best results when developing with iOS you should always have your OSX updated to the latest version and then update XCode as well. In our case, this means updating OSX to Mojave (version 10.14) through the App Store.

## Installing and Updating XCode

Always make sure that you have downloaded and installed the latest version of XCode. Apple is notorious for silently failing to let things run if you don't have the latest version. We currently want version 10.1.

There will also be command line build tools that we want to install and NPM modules `ios-sim` and `ios-deploy` that we will want installed. See below for details on these.

## XCode Simulators and API versions

In Android Studio we update the API versions for working with Android. To download new API versions for iOS devices, we use XCode.

- Open XCode and click on the `code` menu.
- Select `preferences`
- Go to the `Components` tab to see everything that is available and already downloaded.

## Adding iOS API versions

Having the latest updates for XCode will give you the latest batch of API versions.

## Apple Developer Accounts

You should have received an invitation to join our Apple Developer Account. Please use your ALGONQUINLIVE email address to login. That means you will need to create an Apple ID with your @algonquinlive.com email. This account will be connected with our College Apple Developer Account and will not cost you anything.

When you want to have your own Account and actually push things to the App Store then you will want to buy your own Apple Developer Account (\$99 per year). You will want to use your own Apple ID and your own email address for that.

An invitation has been sent to everyone to join the Algonquin College (Media & Design) Apple Developer account as members. You will need to accept this invitation and become a registered Apple Developer before you can test any iOS apps that you build.

## Certificates

You will need to create a signed certificate that will create a connection between your Apple Developer account, our College account, and your MacBook Pro with your copy of XCode. You can follow the instructions on the [developer.apple.com](https://developer.apple.com/) website for creating the certificate signing request `CSR` on your computer. This `CSR` will be uploaded to the website and then you will be given a certificate to download and install in `Keychain Access`.

To compile and install an iOS app you will need to do the following things:

1. Register as an Apple Developer here [https://developer.apple.com/account/](https://developer.apple.com/account/)
2. Go to the page for `Certificates` and create a `Developer certificate`. This will require you using the `Keychain Assistant` program on your Macbook Pro. Instructions are on the page that you visit to create the certificate. You will be uploading a `CSR (certificate signing request)` that you generate. Watch the video below for more details on this.
3. Download and install the Certificate that you made. XCode will need this certificate.
4. Download and install a provisioning certificate. The Provisioning certificate is something that combines a list of approved users and a list of approved devices for a developer account. This certificate is used to allow the building and installing of apps on devices.

<YouTube
    title="iOS Development Certificates"
    url="https://www.youtube.com/embed/1ocAaWzhK9k"
/>

Every time a new developer certificate is created or a device is added to our Apple account then an account administrator (Steve) has to create a new updated provisioning certificate.

## Provisioning Profiles

Once you have created and uploaded your certificate then Steve will have to create a mobile provisioning profile file. This is a file that stores a list of approved certificates and approved devices that you can use to test your apps.

New provisioning profiles get created from time to time, as new devices are added, new certificates are created, or people or devices are removed from the account. You can always download and run a new provisioning profile at any time. Just grab the latest one that has `MAD&D` in the name.

## Adding your own iOS Devices

If you want, we can add your own iOS devices to our account as an approved device too.

You will need to plugin your device to your MacBook, on the OSX side. Then open iTunes and select the device from the available items. You may be asked to backup or update your device. It is up to you whether you do that.

You should see information about the device being displayed that will include a SERIAL number. If you CLICK on the serial number it will change the display to reveal other bits of information about the device. What we need is the UUID. Copy and Paste this number into an email for Steve - griffis@algonquincollege.com .

In your email include the type of device that it is. Eg: iPhone 8 plus.

You will be notified when a new provision profile that includes this device has been created.

## Set up XCode for Cordova

We will also want to add the proper tools for XCode to integrate Cordova with XCode. Once XCode is installed you need to run this command:

```
xcode-select --install
```

## Set up for iOS Deployment from Cordova

NPM has a tool for deploying to an iOS device from the command line. This will let us launch our apps from the command line into the iOS device. From the terminal run this command:

```
npm install -g ios-deploy --unsafe-perm=true --allow-root
```

You may also need to find where ios-deploy has been installed on your system and give full write access to that folder.

Then you will be able to do this:

```
cordova run ios
```

On the command line and launch into the connected iOS device.

THERE MAY BE ISSUES with installing this that will require you to use "sudo".

```
sudo npm install -g ios-deploy --unsafe-perm=true --allow-root
```

If there are still permission issues then reference this link to see the extra options to use when running the sudo npm install command - [NPM reference for ios-deploy](https://www.npmjs.com/package/ios-deploy).

Opening a Cordova app in XCode will be the easiest way to test your app in the Simulator. XCode has a run button and a drop down list. You can select which version of the Simulator that you want to use and click the run button to launch the app on the Simulator.

## Debugging with Safari

In the same way that Chrome has the remote devices tool that lets us look at our Cordova apps and the console in the browser, Safari will let us look at the Cordova apps and console for apps running on iOS devices or the Simulator.

With Safari open, click on the Develop menu and look for the name of your Macbook Pro in the menu. Selecting your MBP you will see a sub-menu that shows any running Simulators or connected devices for you to monitor.

<YouTube
    title="Mobile Web and Hybrid App Testing with Safari and iOS Devices"
    url="https://www.youtube.com/embed/DJnwb4Qeq1M"
/>

## iOS Simulator Notes

If you want to know which iOS Simulators are available on your Macbook then run this command in the Terminal.

```
ios-sim showdevicetypes
```

This will output a list of the available devices. Then you can choose a name from the list like `iPhone-X, 12.0`. Next you can launch the simulator with the following command.

```
ios-sim start --devicetypeid "iPhone-X, 12.0"
```

This will launch whatever simulator you specify for the `--devicetypeid` parameter.

## Note About XCode 10

In the newer versions of XCode there is a problem with the build process if you run it from the command line. It will work fine from XCode. If you find the `.xcodeproject` file in your `platforms/ios` folder and double click it, then it will open your Cordova project in XCode. From there you can build and run your app.

Remember though, that you have to rebuild the project in the terminal to copy the latest files from the `www` folder into your iOS project.

To build your project fully and launch it from the command line we need to add another flag to the command.

```
cordova emulate ios --target="iPhone-8, 12.0" --buildFlag="-UseModernBuildSystem=0"
```

When we run the `emulate` command we should specific which Simulator we want to use to test our app. This is accomplished with the `--target` flag. You can change the target to any of the available devices from the `ios-sim showdevicetypes` command above.

Next we need to add the `--buildFlag` flag. This will work around the XCode 10 problem. We are telling the XCode build engine to avoid the problems caused for Cordova in the new build process.

## Installation Problems with ios-sim and ios-deploy

If you run into problems with installing ios-sim or ios-deploy there are a few things you can try.

1. Make sure that you have the latest version of OSX installed (Mojave 10.14)
2. Make sure that you have the latest version of XCode installed 10.1.
3. When installing `ios-sim` or `ios-deploy` you may need to use `sudo`.
4. Sometimes `ios-sim` or `ios-deploy` will be pointing to the wrong location of the Xcode build tools. If you see an error that talks about `simctl` or version 8.x of XCode then try the following. Run

```
xcode-select -s /Applications/Xcode.app/Contents/Developer
```

This will point to the latest version of Xcode for the build tools.

6. You can try running `xcode-select --install` again to update the build tools too.
7. Open XCode. Go to the `Preferences` menu and select the `Locations` tab. Make sure that Xcode 10.1 is selected in the drop down list.
8. Test by trying to launch the iOS Simulator from the command line using the `ios-sim` command, as explained above.
9. Next try creating a Cordova project, adding the ios platform, and run the `cordova build ios` command with the `--buildFlag` as detailed above.
10. Finally, try to `cordova emulate ios` with the `target` and the `buildFlag` as detailed above.
11. If this still fails you might need to use [homebrew]() to install ios-deploy.
12. If you get an error about `~/.config/configstore/` needing permissions then navigate to the `~/.config/` folder in the Terminal. Run the command `ls -la` to see the permissions and owner of the folders. There should be a folder that is owned by your user account. For example, on my MBP the owner of the folder is `steve`. We want to make sure that your user account is the owner of the `configstore` folder. We will use the `chown` command to fix this.

```
chown -R [your username here] configstore
```

Put your own username in the command without the square brackets.
