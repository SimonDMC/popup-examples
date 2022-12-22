const popup = new Popup({
    id: "color-info",
    title: "Color Guesser",
    content: `
        You are presented with a color.
        Estimate the hex code of the color.
        Six characters, ranging from 00-FF for 3 channels.
        Values are in {a-http://example.com}[Base-16].
        big-margin§{bold}[#{red}[E4]{green}[F2]{blue}[DB]]
        big-margin§{black bold}[#000000] is black.                {white bold shadow}[#FFFFFF] is white.
        big-margin§Good luck.`,
    titleColor: "rgb(92, 0, 95)",
    titleMargin: "0",
    backgroundColor: "#ffebfe",
});
