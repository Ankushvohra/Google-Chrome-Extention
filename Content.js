const generateHTML = (pageName) =>{
    return `
    <div id = "container">
        <div class = "container x1"></div>
        <div class = "container x1_5"></div>
        <div class = "container x2"></div>
        <div class = "container x3"></div>
        <div class = "container x4"></div>
        <div class = "container x5"></div>
    </div>
    <div class= 'middle'>
        <div class = '_404'>404</div>
        <hr/>
        <div class = '_1'>Get Back</div>
        <div class = '_2'>Be Motivated And Study >Dont Open ${pageName} Again</div>
    </div>
    `;
};
const generateSTYLING = () =>{
    return `
    <style>
._404{
    margin-top: 100px;
    margin-left: auto;
    margin-right: auto;
    padding: auto;
    text-align: center;
    font-size: 200px;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
}
hr{
    border-top: 1px dashed #8c8b8d;
    border-radius: 40px;
    margin-left: 400px;
    width: 500px;
}
._1{
    margin: auto;
    padding: auto;
    font-size: 30px;
    text-align: center;
    font-family:system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}
._2{
    margin: auto;
    margin-right: auto;
    padding: auto;
    font-size: 30px;
    text-align: center;
    font-family:system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}
</style>
    `;
};
switch (window.location.hostname){
    case "www.youtube.com":
        document.head.innerHTML = generateSTYLING();
        document.body.innerHTML = generateHTML("Youtube");
        break;
    case "www.facebook.com":
        document.head.innerHTML = generateSTYLING();
        document.body.innerHTML = generateHTML("facebook");
        break;
    case "www.instagram.com":
        document.head.innerHTML = generateSTYLING();
        document.body.innerHTML = generateHTML("instagram");
        break;
    case "www.jiocinema.com":
        document.head.innerHTML = generateSTYLING();
        document.body.innerHTML = generateHTML("jiocinema");
        break;
    case "www.hotstar.com":
        document.head.innerHTML = generateSTYLING();
        document.body.innerHTML = generateHTML("hotstar");
        break;   
    case "www.netflix.com":
        document.head.innerHTML = generateSTYLING();
        document.body.innerHTML = generateHTML("netflix");
        break;   
}

