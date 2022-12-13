## JavaScript

```js
new Popup({
    id: "board",
    titleColor: "#FFFFFF",
    textColor: "#FFFFFF",
    closeColor: "#FFFFFF",
    title: "Uh Oh!",
    backgroundColor: "#8A2BE2",
    fontSizeMultiplier: 1.3,
    content: `
        This board name is already taken!
        Try picking a different one.
        {btn-ok}[Okay]`,
    dynamicHeight: true,
    borderWidth: ".15em",
    borderColor: "#FFFFFF",
});
```

## CSS

```css
.popup.board {
    text-shadow: 0 0 0.3em #000000bb;
}

.popup.board button {
    border: 2px solid white;
    background-color: transparent;
    color: white;
    filter: drop-shadow(0 0 0.2em #000000bb);
    margin-top: 1em;
}
```

## Button Functionality

```js
document.getElementById(".popup.board button").onclick = () => {
    popup.hide();
};
```
