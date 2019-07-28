function reloadImage() {
    if (document.images) {
        var now = new Date();
        document.images.randimg.src = “/randimg?” + now.getTime();
        setTimeout(“reloadImage()”, 5000);
    }
}
setTimeout(“reloadImage()”, 5000);