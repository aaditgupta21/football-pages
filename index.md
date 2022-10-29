---
layout: home
search_exclude: false
---

<body>

<div class="container">
    <video autoplay loop id="background" class="videoPlayer">
        <source src="https://drive.google.com/uc?export=view&id=1NAyWoJIA8d3SunU8iH2m_9tz2qsHNL3Y" type="video/mp4">
    </video>
</div>

<table style="width:17%; margin-top: 5%; margin-left: 65%;">
    <tr>
        <th><h4 style="text-align: center">News</h4></th>
    </tr>
</table>
<table style="width:17%; margin-left: 65%;">
    <thead>
      <tr>
        <th>Article</th>
        <th>Author</th>
        <th>url</th>
      </tr>
    </thead>
    <tbody id="data">

    </tbody>
  </table>
  


<script>
var url = 'https://newsapi.org/v2/top-headlines?' +
    'country=us&' +
    'category=sports&' +
    'apiKey=b9ae2634c2e44c1f9f5cad8ae50dcd0d';

var req = new Request(url);

fetch(req)
        .then(function(response) {
            response.json().then((data) => {
              console.log(data);
              if (data.length > 0) {
                var temp = "";
                data.forEach((itemData) => {
                    temp += "<tr>";
                    temp += "<td>" + itemData.name + "</td>";
                    temp += "<td>" + itemData.author + "</td>";
                    temp += "<td>" + itemData.url + "</td></tr>";
                });
                document.getElementById('data').innerHTML = temp;
                }
            });
          })

</script>
</body>
