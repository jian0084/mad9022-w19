# Content-Security-Policy Meta Tag

[CSP Reference](https://content-security-policy.com/)

This website describes all the details of the new `<meta>` tag that appears in all Cordova Apps.

If you look inside the `<head>` of your `index.html` file, from your Cordova www folder then you will see this:

```html
<meta http-equiv="Content-Security-Policy" content="default-src 'self' data: gap: https://ssl.gstatic.com 'unsafe-eval'; style-src 'self' 'unsafe-inline'; media-src *">
```

This meta tag defines what type of content can be loaded from which sources.

Inside the content attribute is a list of possible types of things to load and the sources from which they are allowed to be loaded.

`default-src` is the default policy for loading content such as JavaScript, Images, CSS, Font's, AJAX requests, Frames, HTML5 Media. In the example above, `self`, `data:`, and `gap:` are used as the defaults. That means when there is no specific value given for one of those things then it must be loaded from inside the `www` folder, or begin with a `data:` or `gap:` URL.

`style-src` is the policy for loading CSS files. In the example above 'self' is being used. So CSS must be inside the www folder (or from the same domain for web apps)

`media-src` is the policy for loading audio and video.

`font-src` gets used to load fonts.

`img-src` gets used to load images.

`connect-src` gets used to make AJAX calls with XMLHttpRequest or fetch.

There are others as well that you can find on the CSP website, but these are the most common. The values that you can enter for each of [these policies can be found here](https://content-security-policy.com/#source_list).

`self` was already mentioned. This will allow anything from the local device or same domain.

`*` allows anything except for data: or other blob or filesystem formats.

`data:` allows anything being loaded as a data-uri (base-64 encoded).

`gap:` refers to internal phonegap references. It is always a good idea to keep this in the default-src policy to prevent permission errors that are hard to debug.

`'none'` will prevent anything of that type from being loaded

`*.example.com` would allow any subdomain from example.com to be used.

`https:` would allow anything being loaded over https.