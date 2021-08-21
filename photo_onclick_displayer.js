function enlargePhoto(imagePath) {
    //Create a new image object using the same source as the image that was clicked
    let image = new Image();
    image.src = imagePath;
    let imageObject = document.body.appendChild(image);

    //Fix image so it doesn't move when scrolling
    imageObject.setAttribute("position", "fixed")
    imageObject.style.position = "fixed";

    //Set background to be semitransparent
    imageObject.style.backgroundColor = "hsla(0, 0%, 9%, .75)";
    //Make sure there is no margin - image + border should take up entire screen
    imageObject.style.margin = "0 auto";

    //Based on width/height of image and window, fit image to maximize size while still being fully in view
    //Yes, some code is the very similar. Yes, it could probably be improved. But this is good enough.
    if(window.innerWidth / window.innerHeight < imageObject.naturalWidth / imageObject.naturalHeight)
    {

        imageObject.style.width = (window.innerWidth * 0.9).toString() + "px";
        imageObject.style.height = "auto";
        imageObject.style.paddingLeft = "5%";
        imageObject.style.paddingRight = "5%";

        let vertPaddingSize = (window.innerHeight - imageObject.height) / 2;
        imageObject.style.paddingTop = (vertPaddingSize).toString() + "px";
        imageObject.style.paddingBottom = (vertPaddingSize).toString() + "px";

    }
    else
    {

        imageObject.style.height = (window.innerHeight * .9).toString() + "px";
        imageObject.style.width = "auto";
        imageObject.style.paddingTop = "2.5%";
        imageObject.style.paddingBottom = "20%";

        let horizPaddingSize = (window.innerWidth - imageObject.width) / 2;
        imageObject.style.paddingLeft = (horizPaddingSize).toString() + "px";
        imageObject.style.paddingRight = (horizPaddingSize).toString() + "px";

    }

    //Position element in top left corner - it should fill screen
    imageObject.style.top = "0%";
    imageObject.style.left = "0%";

    //Delete the image when the user clicks it a second time (taking them back to default photo gallery)
    imageObject.onclick = function () {document.body.removeChild(imageObject);}

}
