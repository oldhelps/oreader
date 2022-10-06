/**
*copyright by 2022 OLD HELPS
*/

 window.onload=function(){
 document.getElementById('btn').onclick=function(){
  var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = on_state_change;
        var add=document.getElementById('feed').value;
                  xhr.open("GET", add, true);
                  xhr.send(null);
      /**
       * callback func
       */
      function on_state_change() {
          if (xhr.readyState == 4) {
              if (xhr.status == 200) {
                  var xmlDoc = xhr.responseXML;
                  var rss = xmlDoc.documentElement.getElementsByTagName("rss");
                  var v = "<table border='1'class=\"table\"><tr><th>标题</th><th>地址</th><th>描述</th></tr>";
                    var ch=xmlDoc.getElementsByTagName('channel')
                    var item=xmlDoc.getElementsByTagName('item')
                  var len = item.length;
                  var xx = "";
                  for (let i = 0; i < len; i++) {
                      v += "<tr>";

                      xx =item[i].getElementsByTagName('title');
                      {
                          try {
                              v += "<td>" + xx[0].firstChild.nodeValue + "</td>";
                          } catch (ex) {
                              v += "<td> </td>";
                          }
                      };
                      xx=item[i].getElementsByTagName('link');
                      de=item[i].getElementsByTagName('description')
                      {
                          try {
                              v += "<td><a href=\">" + xx[0].firstChild.nodeValue + "\" class=\"btn btn-primary\"> "+ xx[0].firstChild.nodeValue +"</a></td>";
                          } catch (er) {
                              v += "<td> </td>";
                          }
                      }

                      {
                          try {
                              v += "<td>" + de[0].firstChild.nodeValue + "</td>";
                          } catch (er) {
                              v += "<td> </td>";
                          }
                      }
                      v += "</tr>";
                  }
                  v += "</table>";
                  document.getElementById('id-div-ajax-xml').innerHTML = v;
              } else {
                  console.log("Problem retrieving data:" + xhr.statusText);
              }
          }
      }
  }
  document.getElementById('bing').onclick=function(){
  var q=document.getElementsByClassName('serch').value+'RSS'
  window.open('https://cn.bing.com/search?q='+q)
  }
 }
