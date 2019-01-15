# Working with iOS

## Installing and Updating XCode

Always make sure that you have downloaded and installed the latest version of XCode. Apple is notorious for silently failing to let things run if you don't have the latest version.


## XCode Simulators and API versions

In Android Studio we update the API versions for working with Android. To download new API versions for iOS devices, we use XCode.

- Open XCode and click on the `code` menu.
- Select `preferences`
- Go to the `Components` tab to see everything that is available and already downloaded.


## Adding iOS API versions

Having the latest updates for XCode will give you the latest batch of API versions.


## Apple Developer Accounts

You should have received an invitation to join our Apple Developer Account. Please use your ALGONQUINLIVE email address to login. That means you will need to create an Apple ID with your @algonquinlive.com email. This account will be connected with our College Apple Developer Account and will not cost you anything.

When you want to have your own Account and actually push things to the App Store then you will want to buy your own Apple Developer Account ($99 per year). You will want to use your own Apple ID and your own email address for that.

## Certificates

You will need to create a signed certificate that will create a connection between your Apple Developer account, our College account, and your MacBook Pro with your copy of XCode.

## Provisioning Profiles

Once you have created and uploaded your certificate then Steve will have to create a mobile provisioning profile file. This is a file that stores a list of approved certificates and approved devices that you can use to test your apps.

New provisioning profiles get created from time to time, as new devices are added, new certificates are created, or people or devices are removed from the account. You can always download and run a new provisioning profile at any time. Just grab the latest one that has `MAD&D` in the name.

## Adding your own iOS Devices

If you want, we can add your own iOS devices to our account as an approved device too.

You will need to plugin your device to your MacBook, on the OSX side. Then open iTunes and select the device from the available items. You may be asked to backup or update your device. It is up to you whether you do that.

You should see information about the device being displayed that will include a SERIAL number. If you CLICK on the serial number it will change the display to reveal other bits of information about the device. What we need is the UUID. Copy and Paste this number into an email for Steve - griffis@algonquincollege.com .

In your email include the type of device that it is. Eg: iPhone 8 plus.

You will be notified when a new provision profile that includes this device has been created.
