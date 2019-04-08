// 08-g

function takeId(getEle) {
    
    let theData = document.getElementById(getEle);
    
    // let boys = theData.children;

    while (theData.children.length !== 0) {
        // console.log(theData.firstChild);
        theData.removeChild(theData.firstChild);       
    };
}
    takeId("1")

    wiki-content