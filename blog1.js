var title = document.querySelector('.title');
var tags = document.querySelector('.tags');
var content = document.querySelector('.content');
fetch('https://www.googleapis.com/blogger/v3/blogs/7015376980787446844/posts?key=AIzaSyBibwahu5r6ME2sDeff41Kq-lnjVH03pP0')
    .then(response => response.json())
    .then(data => {
        console.log(data.items[0])
        var date = new Date(data.items[0].published);
        title.children[0].innerHTML = data.items[0].title;
        var authorline = `By-${data.items[0].author.displayName} | NIT Meghalaya | Date: ${date.toDateString()} | Innovaccer`
        title.children[1].innerHTML = authorline
        content.children[0].innerHTML = data.items[0].content

    });