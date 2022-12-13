## JavaScript

```js
new Popup({
    id: "fishy",
    title: "Something is fishy...",
    backgroundColor: "#FF0000",
    titleColor: "#FFF",
    textColor: "#FFF",
    closeColor: "#FFF",
    linkColor: "#FFF",
    underlineLinks: "true",
    fontSizeMultiplier: 1.2,
    dynamicHeight: true,
    titleMargin: "2em",
    content: `
        This link seems very dangerous.
        Are you sure you want to continue?
        big-margin§If you know what you're doing, 
        {a-http://example.com}[click here to proceed].`,
    borderWidth: ".2em",
    borderColor: "#FFF",
});
```

No custom CSS is required for this example.
