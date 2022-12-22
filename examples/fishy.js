const popup = new Popup({
    id: "fishy",
    title: "Something is fishy...",
    backgroundColor: "#FF0000",
    titleColor: "#FFF",
    textColor: "#FFF",
    closeColor: "#FFF",
    linkColor: "#FFF",
    underlineLinks: "true",
    fontSizeMultiplier: 1.2,
    titleMargin: "2em",
    content: `
    This link seems very dangerous.
    Are you sure you want to continue?
    big-margin§If you know what you're doing, 
    {a-http://example.com}[click here to proceed].`,
    borderWidth: ".2em",
    borderColor: "#FFF",
});
