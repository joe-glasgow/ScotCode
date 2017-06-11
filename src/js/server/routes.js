module.exports = (app) => {
    // Prevents error: TODO: get favicon
    const favicon = new Buffer('AAABAAEAEBAQAAAAAAAoAQAAFgAAACgAAAAQAAAAIAAAAAEABAAAAAAAgAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAA/4QAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEREQAAAAAAEAAAEAAAAAEAAAABAAAAEAAAAAAQAAAQAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAEAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD//wAA//8AAP//AAD8HwAA++8AAPf3AADv+wAA7/sAAP//AAD//wAA+98AAP//AAD//wAA//8AAP//AAD//wAA', 'base64');
    app.get("/favicon.ico", function(req, res) {
        res.statusCode = 200;
        res.setHeader('Content-Length', favicon.toString().length.toString());
        res.setHeader('Content-Type', 'image/x-icon');
        res.setHeader("Cache-Control", "public, max-age=2592000");                // expiers after a month
        res.setHeader("Expires", new Date(Date.now() + 2592000000).toUTCString());
        res.end(favicon);
    });
};