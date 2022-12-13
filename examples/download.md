## JavaScript

```js
new Popup({
    id: "download",
    title: "Download Instructions",
    content: `
        1. Download and install the {a-http://example.com}[CliCli] launcher.
        2. Navigate to the {a-http://example.com}[game page] and click 'Open CliCli Platform'.
        3. Press the 'Start Game' button to download and launch the game.
        `,
    backgroundColor: "#000",
    titleColor: "#fff",
    textColor: "#fff",
    closeColor: "#fff",
    borderWidth: ".2em",
    borderColor: "#fff",
    linkColor: "#fff",
    fontSizeMultiplier: 1.2,
    titleMargin: "4%",
    underlineLinks: true,
    dynamicHeight: true,
});
```

No custom CSS is required for this example.
