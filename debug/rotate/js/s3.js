var layer = L.tileLayer('https://api.mapbox.com/styles/v1/livenlulu/ciu0azvas00322in5xzze3u48/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoibGl2ZW5sdWx1IiwiYSI6ImNpZ3h0ZzltbzB1cTQ0cG0zamthcno1dmwifQ.vZrmbXCCq15ZVuF6g6vhkA',{
    attribution: ''
});

var map = L.map('map', {
  scrollWheelZoom: false,
  attributionControl: false,
  rotate: true,
  animate: true, 
  duration: 2
  }).setView([40.805177,-73.954929], 17);
  map.addLayer(layer);
  map.setBearing(331);

var bizmarker = {
  radius: 8,
  fillColor: "#bbb",
  color: "#000",
  weight: 1,
  opacity: 1,
  fillOpacity: 0.8

};

var parking = L.icon({
  iconUrl: 'img/p.png',
  iconSize: [21,21],
  iconAnchor: [15,5]
});

var atrain = L.icon({
  iconUrl: 'img/a.png',
  iconSize: [16,16],
  iconAnchor: [15,5]
});

var ctrain = L.icon({
  iconUrl: 'img/c.png',
  iconSize: [16,16],
  iconAnchor: [15,5]
});

var btrain = L.icon({
  iconUrl: 'img/b.png',
  iconSize: [16,16],
  iconAnchor: [15,5]
});

var dtrain = L.icon({
  iconUrl: 'img/d.png',
  iconSize: [16,16],
  iconAnchor: [15,5]
});

var pa = [
  {
    name: "122nd St Parking",
    coord: [40.808421,-73.952140]
  },
  {
    name: "121st St Parking",
    coord: [40.807999,-73.953170]
  },
  {
    name: "118th E St Parking",
    coord: [40.805400,-73.953942]
  },
  {
    name: "118th W St Parking",
    coord: [40.806026,-73.955433]
  },
  {
    name: "115th St Parking",
    coord: [40.804077,-73.956206]
  },
]


var at = [
  {
    name: "125th Street A Train",
    coord: [40.810851,-73.952783]
  },
]

var bt = [
  {
    name: "125th Street B Train",
    coord: [40.810754,-73.952558]
  },
  {
    name: "116th Street B Train",
    coord: [40.804469,-73.955409]
  },
  {
    name: "110th Street B Train",
    coord: [40.800639,-73.958207]
  },
]

var ct = [
  {
    name: "125th Street C Train",
    coord: [40.810799,-73.952671]
  },
  {
    name: "116th Street C Train",
    coord: [40.804424,-73.955297]
  },
  {
    name: "110th Street C Train",
    coord: [40.800603,-73.958097]
  },
]

var dt = [
  {
    name: "125th Street D Train",
    coord: [40.810705,-73.952440]
  },
]

var geojson;


function rotate(ev) {
    if (ev.buttons === 0) return;
      var angle = ev.target.valueAsNumber;
      map.setBearing(angle);
    }

function getColor(d) {
    return d > 8  ? '#000' : //9 vacant
           d > 7  ? '#884EA0' : //8 community facility
           d > 6  ? '#74A974' : //7 parks
           d > 5  ? '#884EA0' : //6 residential
           d > 4  ? '#3288bd' : //5 beauty & health
           d > 3  ? '#66c2a5' : //4 retail
           d > 2  ? '#f4d03f' : //3 services
           d > 1  ? '#f0ad4e' : //2 other food
           d > 0  ? '#c9302c' : //1 restaurants
                     '#FFEDA0';
  }

function style(feature) {
    return {
        fillColor: getColor(feature.properties.valu),
        weight: 1,
        opacity: .9,
        color: 'white',
        dashArray: '',
        fillOpacity: 0.8
    };
  }

function mouseoverFunction(e) {
  // this.bindPopup('hi').openPopup();
  // }
  var layer = e.target;

    layer.setStyle({
        weight: 3,
        opacity: 1,
        color: 'white',
        dashArray: '',
        fillOpacity: 1
    });


  // var pop = feature.properties.Organization;
  // layer.openPopup();

  // var pop = feature.properties.Organization
  // e.bindPopup(pop);

    if (!L.Browser.ie && !L.Browser.opera) {
        layer.bringToFront();
    }
}


  //  $('#infoWindow').html(layer.feature.properties.Organization + '<br>' + '<h4>' + layer.feature.properties.Category + '</h4>');
  // }

function resetHighlight(e) {
    geojson.resetStyle(e.target);
    // this.closePopup();
}

//RESTAURANTS POPUP
function onEachFeature(feature, layer) {
    var popup = "<h5 id ='ona'>" + feature.properties.Organization + "</h5>" + "<h6 id='ona'>" + feature.properties.Category + '</h6>' + "<a href='http://" + feature.properties.Web + "' target='_blank'>" + "<center><img class='imggg' style='padding-left:15px; padding-right:15px;' onerror='this.parentNode.removeChild(this)' src='img2/" + feature.properties.OBJECTID + ".jpg ' width='180px'>" + "</a></center>" + "<h4><span id='inf1' class='glyphicon glyphicon-map-marker' aria-hidden='true'></span>&nbsp;" + feature.properties.Address  + "<br><span id='inf2' class='glyphicon glyphicon-earphone' aria-hidden='true'></span>&nbsp;" + feature.properties.Phone + "<br><span id='inf3' class='glyphicon glyphicon-globe' aria-hidden='true'></span>&nbsp;" + "<a href='http://" + feature.properties.Web + "' target='_blank'>Website</a></h4>";
      
    layer.bindPopup(popup);


//   $('.imggg').error(function() {
//     $(this).hide();
  
// });
// layer.bindLabel(feature.properties.Organization, {noHide:true});

    layer.on({
        mouseover: mouseoverFunction,
        mouseout: resetHighlight
    });
}

// OTHER FOOD POPUP
function onEachFeatureb(feature, layer) {
    var popup = "<h5 id ='onb'>" + feature.properties.Organization + "</h5>" + "<h6 id='onb'>" + feature.properties.Category + '</h6>' + "<a href='http://" + feature.properties.Web + "' target='_blank'>" + "<center><img class='imggg' style='padding-left:15px; padding-right:15px;' onerror='this.parentNode.removeChild(this)' src='img2/" + feature.properties.OBJECTID + ".jpg ' width='180px'>" + "</a></center>" + "<h4><span id='inf1' class='glyphicon glyphicon-map-marker' aria-hidden='true'></span>&nbsp;" + feature.properties.Address  + "<br><span id='inf2' class='glyphicon glyphicon-earphone' aria-hidden='true'></span>&nbsp;" + feature.properties.Phone + "<br><span id='inf3' class='glyphicon glyphicon-globe' aria-hidden='true'></span>&nbsp;" + "<a href='http://" + feature.properties.Web + "' target='_blank'>Website</a></h4>";
      
    layer.bindPopup(popup);
    layer.on({
        mouseover: mouseoverFunction,
        mouseout: resetHighlight
    });
}

//SERVICES POPUP
function onEachFeaturec(feature, layer) {
    var popup = "<h5 id ='onc'>" + feature.properties.Organization + "</h5>" + "<h6 id='onc'>" + feature.properties.Category + '</h6>' + "<a href='http://" + feature.properties.Web + "' target='_blank'>" + "<center><img class='imggg' style='padding-left:15px; padding-right:15px;' onerror='this.parentNode.removeChild(this)' src='img2/" + feature.properties.OBJECTID + ".jpg ' width='180px'>" + "</a></center>" + "<h4><span id='inf1' class='glyphicon glyphicon-map-marker' aria-hidden='true'></span>&nbsp;" + feature.properties.Address  + "<br><span id='inf2' class='glyphicon glyphicon-earphone' aria-hidden='true'></span>&nbsp;" + feature.properties.Phone + "<br><span id='inf3' class='glyphicon glyphicon-globe' aria-hidden='true'></span>&nbsp;" + "<a href='http://" + feature.properties.Web + "' target='_blank'>Website</a></h4>";
      
    layer.bindPopup(popup);
    layer.on({
        mouseover: mouseoverFunction,
        mouseout: resetHighlight
    });
}

//RETAIL POPUP
function onEachFeatured(feature, layer) {
    var popup = "<h5 id ='ond'>" + feature.properties.Organization + "</h5>" + "<h6 id='ond'>" + feature.properties.Category + '</h6>' + "<a href='http://" + feature.properties.Web + "' target='_blank'>" + "<center><img class='imggg' style='padding-left:15px; padding-right:15px;' onerror='this.parentNode.removeChild(this)' src='img2/" + feature.properties.OBJECTID + ".jpg ' width='180px'>" + "</a></center>" + "<h4><span id='inf1' class='glyphicon glyphicon-map-marker' aria-hidden='true'></span>&nbsp;" + feature.properties.Address  + "<br><span id='inf2' class='glyphicon glyphicon-earphone' aria-hidden='true'></span>&nbsp;" + feature.properties.Phone + "<br><span id='inf3' class='glyphicon glyphicon-globe' aria-hidden='true'></span>&nbsp;" + "<a href='http://" + feature.properties.Web + "' target='_blank'>Website</a></h4>";
      
    layer.bindPopup(popup);
    layer.on({
        mouseover: mouseoverFunction,
        mouseout: resetHighlight
    });
}

//BEAU POPUP
function onEachFeaturee(feature, layer) {
    var popup = "<h5 id ='one'>" + feature.properties.Organization + "</h5>" + "<h6 id='one'>" + feature.properties.Category + '</h6>' + "<a href='http://" + feature.properties.Web + "' target='_blank'>" + "<center><img class='imggg' style='padding-left:15px; padding-right:15px;' onerror='this.parentNode.removeChild(this)' src='img2/" + feature.properties.OBJECTID + ".jpg ' width='180px'>" + "</a></center>" + "<h4><span id='inf1' class='glyphicon glyphicon-map-marker' aria-hidden='true'></span>&nbsp;" + feature.properties.Address  + "<br><span id='inf2' class='glyphicon glyphicon-earphone' aria-hidden='true'></span>&nbsp;" + feature.properties.Phone + "<br><span id='inf3' class='glyphicon glyphicon-globe' aria-hidden='true'></span>&nbsp;" + "<a href='http://" + feature.properties.Web + "' target='_blank'>Website</a></h4>";
      
    layer.bindPopup(popup);
    layer.on({
        mouseover: mouseoverFunction,
        mouseout: resetHighlight
    });
}

//AMENITIES POPUP
function onEachFeature2(feature, layer) {
    var popup = "<div id='popm'>" + feature.properties.Organization + "</div>";
    layer.bindPopup(popup);
    layer.on({
        mouseover: mouseoverFunction,
        mouseout: resetHighlight
    });
}

  // $.getJSON('data/biz.geojson', function(Biz) {

    geojson1 = L.geoJSON(resta, {
      style: style,
      onEachFeature: onEachFeature,
      pointTolayer: function (feature, latlng) {
        return L.circleMarker(latlng, bizmarker);
      }
    }).addTo(map);

 
     geojson2 = L.geoJSON(otherf, {
      style: style,
      onEachFeature: onEachFeatureb,
      pointTolayer: function (feature, latlng) {
        return L.circleMarker(latlng, bizmarker);
      }
    }).addTo(map);

      geojson3 = L.geoJSON(services, {
      style: style,
      onEachFeature: onEachFeaturec,
      pointTolayer: function (feature, latlng) {
        return L.circleMarker(latlng, bizmarker);
      }
    }).addTo(map);
 
     geojson4 = L.geoJSON(retail, {
      style: style,
      onEachFeature: onEachFeatured,
      pointTolayer: function (feature, latlng) {
        return L.circleMarker(latlng, bizmarker);
      }
    }).addTo(map);

     geojson5 = L.geoJSON(beauhea, {
      style: style,
      onEachFeature: onEachFeaturee,
      pointTolayer: function (feature, latlng) {
        return L.circleMarker(latlng, bizmarker);
      }
    }).addTo(map);


      geojson = L.geoJSON(others2, {
      style: style,
      onEachFeature: onEachFeature2,
      pointTolayer: function (feature, latlng) {
      return L.circleMarker(latlng, bizmarker);
      }
    }).addTo(map);


//popupopen center
map.on('popupopen', function(e) {
    var px = map.project(e.popup._latlng); // find the pixel location on the map where the popup anchor is
    px.y -= e.popup._container.clientHeight/2 // find the height of the popup container, divide by 2, subtract from the Y axis of marker location
    px.x += e.popup._container.clientWidth/2000
    map.panTo(map.unproject(px),{animate: true, duration: .9}); // pan to new center
});
  


pa.forEach(function(p) {
  var mar = L.marker(p.coord, {icon: parking}).addTo(map);
  mar.bindPopup("<div id='popm'>" + p.name + "</div>")
});

at.forEach(function(a) {
  var mar2 = L.marker(a.coord, {icon: atrain}).addTo(map);
  mar2.bindPopup("<div id='popm'>" + a.name + "</div>")
});

bt.forEach(function(b) {
  var mar3 = L.marker(b.coord, {icon: btrain}).addTo(map);
  mar3.bindPopup("<div id='popm'>" + b.name + "</div>")
});

ct.forEach(function(c) {
  var mar4 = L.marker(c.coord, {icon: ctrain}).addTo(map);
  mar4.bindPopup("<div id='popm'>" + c.name + "</div>")
});

dt.forEach(function(d) {
  var mar5 = L.marker(d.coord, {icon: dtrain}).addTo(map);
  mar5.bindPopup("<div id='popm'>" + d.name + "</div>")
});

$("#info").click(function() {
$("#aboutModal").modal("show");
$(".navbar-collapse.in").collapse("hide");
  return false;
    });

// <img id='im2' height='80px' class'img-responsive' onerror='this.parentNode.removeChild(this)' src='img2/" + resta.features[i].properties.OBJECTID+".jpg' />

$(document).ready(function () {
  var listIt = "";
    for (var i = 0; i < resta.features.length; i++){
      listIt += "<li><a id='" + resta.features[i].properties.OBJECTID+ "'><h5>" +  resta.features[i].properties.Organization + "&nbsp;" + "</h5><p>" + resta.features[i].properties.Address + "&nbsp;</p>" + "</a></li>" + "<center><li role=" + "separator" + " class=" + "divider" +"></li></center>";
      
      resta.features.sort(function (a, b) {
      var aa = a.properties.Organization;
      var ba = b.properties.Organization;

      if(aa < ba) {
        return -1;
      }
      if (aa > ba) {
        return 1;
      }
      return 0;

    });

    }
    $("#resta").html(listIt);

    $("#resta").click(function(e){
      $('#results').css('z-index', 100);
      $('.dropdown-menu').css('z-index', 600);
    });

    $("#resta li a").click(function(e){
      e.stopPropagation();
      
      var id = $(this)[0].id;
      geojson1.eachLayer(function(feature){

        if(feature.feature.properties.OBJECTID==id) {
        feature.openPopup();
      }
      $(".dropdown").click(function(e){
        $('#results').css('z-index', 100);
        $('.dropdown-menu').css('z-index', 600);
      });
  });
});
});

  // var selText = $(this).text();
  // $(this).parents('.dropdown').find('.dropdown-toggle').html(selText+' <span class="caret"></span>');
// });

$(document).ready(function () {
  var listIt = "";
    for (var i = 0; i < otherf.features.length; i++){
         listIt += "<li><a id='" + otherf.features[i].properties.OBJECTID+ "'><h5>" +  otherf.features[i].properties.Organization + "&nbsp;" + "</h5><p>" + otherf.features[i].properties.Address + "&nbsp;</p>" + "</a></li>" + "<center><li role=" + "separator" + " class=" + "divider" +"></li></center>";
      
      otherf.features.sort(function (a, b) {
      var aa = a.properties.Organization;
      var ba = b.properties.Organization;

      if(aa < ba) {
        return -1;
      }
      if (aa > ba) {
        return 1;
      }
      return 0;

    });

    }
    $("#otherf").html(listIt);

    $("#otherf").click(function(e){
      $('#results').css('z-index', 100);
      $('.dropdown-menu').css('z-index', 600);
    });

    $("#otherf li a").click(function(e){
      e.stopPropagation();
      
      var id = $(this)[0].id;
      geojson2.eachLayer(function(feature){

        if(feature.feature.properties.OBJECTID==id) {
        feature.openPopup();
      }
      $(".dropdown").click(function(e){
        $('#results').css('z-index', 100);
        $('.dropdown-menu').css('z-index', 600);
      });
  });
});
});



$(document).ready(function () {

  var listIt = "";
    for (var i = 0; i < services.features.length; i++){
      listIt += "<li><a id='" + services.features[i].properties.OBJECTID+ "'><h5>" +  services.features[i].properties.Organization + "&nbsp;" + "</h5><p>" + services.features[i].properties.Address + "&nbsp;</p>" + "</a></li>" + "<center><li role=" + "separator" + " class=" + "divider" +"></li></center>";
      
      services.features.sort(function (a, b) {
      var aa = a.properties.Organization;
      var ba = b.properties.Organization;

      if(aa < ba) {
        return -1;
      }
      if (aa > ba) {
        return 1;
      }
      return 0;

    });
    }

    $("#services").html(listIt);
    $("#services").click(function(e){
      $('#results').css('z-index', 100);
      $('.dropdown-menu').css('z-index', 600);
    });

    $("#services li a").click(function(e){
      e.stopPropagation();
      
      var id = $(this)[0].id;
      geojson3.eachLayer(function(feature){

        if(feature.feature.properties.OBJECTID==id) {
        feature.openPopup();
      }
      $(".dropdown").click(function(e){
        $('#results').css('z-index', 100);
        $('.dropdown-menu').css('z-index', 600);
      });
});
});
});

$(document).ready(function () {

  var listIt = "";
    for (var i = 0; i < retail.features.length; i++){
       listIt += "<li><a id='" + retail.features[i].properties.OBJECTID+ "'><h5>" +  retail.features[i].properties.Organization + "&nbsp;" + "</h5><p>" + retail.features[i].properties.Address + "&nbsp;</p>" + "</a></li>" + "<center><li role=" + "separator" + " class=" + "divider" +"></li></center>";
      
      retail.features.sort(function (a, b) {
      var aa = a.properties.Organization;
      var ba = b.properties.Organization;

      if(aa < ba) {
        return -1;
      }
      if (aa > ba) {
        return 1;
      }
      return 0;

    });
    
    }
    $("#retail").html(listIt);
    $("#retail").click(function(e){
      $('#results').css('z-index', 100);
      $('.dropdown-menu').css('z-index', 600);
    });
    $("#retail li a").click(function(e){
     e.stopPropagation();
      
      var id = $(this)[0].id;
      geojson4.eachLayer(function(feature){

        if(feature.feature.properties.OBJECTID==id) {
        feature.openPopup();
      }

      $(".dropdown").click(function(e){
        $('#results').css('z-index', 100);
        $('.dropdown-menu').css('z-index', 600);
      });
});
});
});

$(document).ready(function () {

  var listIt = "";
    for (var i = 0; i < beauhea.features.length; i++){
       listIt += "<li><a id='" + beauhea.features[i].properties.OBJECTID+ "'><h5>" +  beauhea.features[i].properties.Organization + "&nbsp;" + "</h5><p>" + beauhea.features[i].properties.Address + "&nbsp;</p>" + "</a></li>" + "<center><li role=" + "separator" + " class=" + "divider" +"></li></center>";

      beauhea.features.sort(function (a, b) {
      var aa = a.properties.Organization;
      var ba = b.properties.Organization;

      if(aa < ba) {
        return -1;
      }
      if (aa > ba) {
        return 1;
      }
      return 0;

    });
    }

    $("#beauhea").html(listIt);
    $("#beauhea").click(function(e){
      $('#results').css('z-index', 100);
      $('.dropdown-menu').css('z-index', 600);
    });
    $("#beauhea li a").click(function(e){
     e.stopPropagation();
      var id = $(this)[0].id;
      geojson5.eachLayer(function(feature){

        if(feature.feature.properties.OBJECTID==id) {
        feature.openPopup();
      }

      $(".dropdown .open").click(function(e){
        $('#results').css('z-index', 100);
        $('.dropdown-menu').css('z-index', 600);
      });
    });
  });
});


  $("#imga li img").click(function(e){ 
    e.stopPropagation();
      
      var id = $(this)[0].id;
     
        geojson1.eachLayer(function(feature){
          if(feature.feature.properties.OBJECTID==id) {
          feature.openPopup();
        }

        });
        
        geojson2.eachLayer(function(feature){
          if(feature.feature.properties.OBJECTID==id) {
          feature.openPopup();
        }
        });
     
        geojson3.eachLayer(function(feature){
          if(feature.feature.properties.OBJECTID==id) {
          feature.openPopup();
        }
        });
      
        geojson4.eachLayer(function(feature){
          if(feature.feature.properties.OBJECTID==id) {
          feature.openPopup();
        }
        });
      
      geojson5.eachLayer(function(feature){
          if(feature.feature.properties.OBJECTID==id) {
          feature.openPopup();
        }
        });

    });




$(window).load(function(){

        $('#search').keyup(function(e){

if ($(this).val().length == 0) {
  $("#results").hide();

 }
 else
  $("#results").show();

            var searchField = $('#search').val();
            var regex = new RegExp(searchField, "i");
            var output = '<div class="row">';
            var count = 1;

            // $.getJSON('data/data.geojson', function(data) {
            //   $.each(data, function(key, val){
              geojson1.eachLayer(function(val){
                
                if ((val.feature.properties.Organization.search(regex) != -1) || (val.feature.properties.Address.search(regex) != -1)) {
                  output += '<div class="dropdown" id="seapop">';
                  output += '<ul id="' + val.feature.properties.OBJECTID +'">';
                  // output += '<div class="col-md-3"><img height="80px" class="img-responsive" onerror="this.parentNode.removeChild(this)" src="img2/'+val.feature.properties.OBJECTID+'.jpg" alt="'+ val.feature.properties.Organization +'" /></div>';
                  // output += '<div class="col-md-6">';
                  output += '<h5>' + val.feature.properties.Organization + '</h5>';
                  output += '<p>' + val.feature.properties.Address + '</p>'
                  output += '</div><hr style="border-top: 1px solid #ddd; margin-bottom: 0px; margin-top:0px; width:90%;">';
                  // output += '</div>';
                  // output += '</div>';
                  if(count%2 == 0){
                    output += '</div><div class="row">'
                  }
                  count++;
                }
                 if ((count-1) == 0) {
                
                  $('#results').css('z-index', 100);
                  $('.dropdown-menu').css('z-index', 600);
                }


              });

              geojson2.eachLayer(function(val){
                
                if ((val.feature.properties.Organization.search(regex) != -1) || (val.feature.properties.Address.search(regex) != -1)) {
                  output += '<div class="dropdown" id="seapop">';
                  output += '<ul id="' + val.feature.properties.OBJECTID + '">';
                  // output += '<div class="col-md-3"><img height="80px" class="img-responsive" onerror="this.parentNode.removeChild(this)" src="img2/'+val.feature.properties.OBJECTID+'.jpg" alt="'+ val.feature.properties.Organization +'" /></div>';
                  // output += '<div class="col-md-6">';
                  output += '<h5>' + val.feature.properties.Organization + '</h5>';
                  output += '<p>' + val.feature.properties.Address + '</p>'
                  output += '</div><hr style="border-top: 1px solid #ddd; margin-bottom: 0px; margin-top:0px; width:90%;">';
                  output += '</div>';
                  output += '</div>';
                  if(count%2 == 0){
                    output += '</div><div class="row">'
                  }
                  count++;
                }
                 if ((count-1) == 0) {
                 
                  $('#results').css('z-index', 100);
                  $('.dropdown-menu').css('z-index', 600);
                }
              });

              geojson3.eachLayer(function(val){
                
                if ((val.feature.properties.Organization.search(regex) != -1) || (val.feature.properties.Address.search(regex) != -1)) {
                  output += '<div class="dropdown" id="seapop">';
                  output += '<ul id="' + val.feature.properties.OBJECTID + '">';
                  // output += '<div class="col-md-3"><img height="80px" class="img-responsive" onerror="this.parentNode.removeChild(this)" src="img2/'+val.feature.properties.OBJECTID+'.jpg" alt="'+ val.feature.properties.Organization +'" /></div>';
                  // output += '<div class="col-md-6">';
                  output += '<h5>' + val.feature.properties.Organization + '</h5>';
                  output += '<p>' + val.feature.properties.Address + '</p>'
                  output += '</div><hr style="border-top: 1px solid #ddd; margin-bottom: 0px; margin-top:0px; width:90%;">';
                  output += '</div>';
                  output += '</div>';
                  if(count%2 == 0){
                    output += '</div><div class="row">'
                  }
                  count++;
                }

                 if ((count-1) == 0) {
         
                  $('#results').css('z-index', 100);
                  $('.dropdown-menu').css('z-index', 600);
                }
              });

              geojson4.eachLayer(function(val){
                
                if ((val.feature.properties.Organization.search(regex) != -1) || (val.feature.properties.Address.search(regex) != -1)) {
                  output += '<div class="dropdown" id="seapop">';
                  output += '<ul id="' + val.feature.properties.OBJECTID + '">';
                  // output += '<div class="col-md-3"><img height="80px" class="img-responsive" onerror="this.parentNode.removeChild(this)" src="img2/'+val.feature.properties.OBJECTID+'.jpg" alt="'+ val.feature.properties.Organization +'" /></div>';
                  // output += '<div class="col-md-6">';
                  output += '<h5>' + val.feature.properties.Organization + '</h5>';
                  output += '<p>' + val.feature.properties.Address + '</p>'
                  output += '</div><hr style="border-top: 1px solid #ddd; margin-bottom: 0px; margin-top:0px; width:90%;">';
                  output += '</div>';
                  output += '</div>';
                  if(count%2 == 0){
                    output += '</div><div class="row">'
                  }
                  count++;
                }
                // console.log(count);
                  if ((count-1) == 0) {
                 
                  $('#results').css('z-index', 100);
                  $('.dropdown-menu').css('z-index', 600);
                }
              });

              geojson5.eachLayer(function(val){
                
                if ((val.feature.properties.Organization.search(regex) != -1) || (val.feature.properties.Address.search(regex) != -1)) {
                  output += '<div class="dropdown" id="seapop">';
                  output += '<ul id="' + val.feature.properties.OBJECTID + '">';
                  // output += '<div class="col-md-3"><img height="80px" class="img-responsive" onerror="this.parentNode.removeChild(this)" src="img2/'+val.feature.properties.OBJECTID+'.jpg" alt="'+ val.feature.properties.Organization +'" /></div>';
                  // output += '<div class="col-md-6">';
                  output += '<h5>' + val.feature.properties.Organization + '</h5>';
                  output += '<p>' + val.feature.properties.Address + '</p>'
                  output += '</div><hr style="border-top: 1px solid #ddd; margin-bottom: 0px; margin-top:0px; width:90%;">';
                  output += '</div>';
                  output += '</div>';
                  if(count%2 == 0){
                    output += '</div><div class="row">'
                  }
                  count++;
                }

              });              

              output += '</div>';

              $('#results').html(output);
              // console.log(count)

              if ($('#results').css('display') == 'none')  {
                    $('#results').css('z-index', 400);
                    $('#results').css('position', 'relevant');
                    $('.dropdown-menu').css('z-index', 600);
                }

                if ($('#results').css('display') == 'block') 
                {
                  $('#results').css('z-index', 400);
                  $('.dropdown-menu').css('z-index', 200);
                 
                }

                if ((count-1) == 0) {
                  $('#results').hide();
                  $('#results').css('z-index', 100);
                  $('#results').css('position', 'absolute');
                  $('.dropdown-menu').css('z-index', 600);
                }

          $("#results #seapop ul").click(function(e){
                      e.stopPropagation();



                        var id3 = $(this)[0].id;
                        geojson1.eachLayer(function(feature){
                          if(feature.feature.properties.OBJECTID==id3) {
                          feature.openPopup();
                          }
                        });

                        geojson2.eachLayer(function(feature){
                          if(feature.feature.properties.OBJECTID==id3) {
                          feature.openPopup();
                          }
                        });
                      
                        geojson3.eachLayer(function(feature){
                          if(feature.feature.properties.OBJECTID==id3) {
                          feature.openPopup();
                          }
                        });
                        
                        geojson4.eachLayer(function(feature){
                          if(feature.feature.properties.OBJECTID==id3) {
                          feature.openPopup();
                          }
                        });

                        geojson5.eachLayer(function(feature){
                          if(feature.feature.properties.OBJECTID==id3) {
                          feature.openPopup();
                        }
                          });

$('#results').css('z-index', 100);
                      $('.dropdown-menu').css('z-index', 600);
                      $('.dropdown-menu .open').css('z-index', 600)
                                               .css('position', 'static')
                                               .css('display', 'inline-block');
                        



                  });
                });

            }); 
        

                      //  $('#results').slideToggle(function() {
                      //   $(this).animate({height:'450'}, 600);
                      
                      // });
                  // $("#results").hide();
                  // $('.dropdown .open').show();
               
  
$(".dropdown").on('click touchend', function() {
    $('.dropdown-menu').toggleClass("open");
});

                      // $('.dropdown-menu').css('z-index', 600);
                      // $('.dropdown-menu .open').css('z-index', 600)
                                               // .css('position', 'static')
                                               // .css('display', 'inline-block');



//               $("#resta li a").click(function(e) {
//  e.stopPropagation();
//     var id4 = $(this)[0].id;
//     console.log(id4);
//       geojson1.eachLayer(function(feature){

//         if(feature.feature.properties.OBJECTID==id4) {
//         feature.openPopup();
//       }
// });
//       });

//     $("#otherf li a").click(function(e) {
//  e.stopPropagation();
//      var id = $(this)[0].id;
//       geojson2.eachLayer(function(feature){

//         if(feature.feature.properties.OBJECTID==id) {
//         feature.openPopup();
//       }
// });
//       });

//       $("#services li a").click(function(e) {
//  e.stopPropagation();
//      var id = $(this)[0].id;
//       geojson3.eachLayer(function(feature){

//         if(feature.feature.properties.OBJECTID==id) {
//         feature.openPopup();
//       }
// });
// });
//         $("#retail li a").click(function(e) {
//  e.stopPropagation();
//      var id = $(this)[0].id;
//       geojson4.eachLayer(function(feature){

//         if(feature.feature.properties.OBJECTID==id) {
//         feature.openPopup();
//       }
// });
// });
//           $("#beauhea li a").click(function(e) {
//  e.stopPropagation();
//      var id = $(this)[0].id;
//       geojson5.eachLayer(function(feature){

//         if(feature.feature.properties.OBJECTID==id) {
//         feature.openPopup();
//       }
// });
// });




$("#map").on('click', function(f) {
  f.stopPropagation();
});

// $(".dropdown").on('click touchend', function() {
//     $('.dropdown-menu').toggleClass("open");
// });

// $(".dropdown-menu li a").on('click touchend', function(f) {
//   f.stopPropagation();
// });


 $("#source").click(function(e) {
 e.stopPropagation();
});

 $("#direct").on('click', function(e) {
 e.stopPropagation();
});

 $("#info").click(function(e) {
 e.stopPropagation();
});

 $("#aboutModal").click(function(e) {
 e.stopPropagation();
});

 $(".jumbotron").click(function(e) {
 e.stopPropagation();
});

 $("#caro").click(function(e) {
 e.stopPropagation();
});

 $(".divider").click(function(e) {
 e.stopPropagation();
});

 $("#topp").click(function(e) {
 e.stopPropagation();
});

 $("#search").click(function(e) {
 e.stopPropagation();
});


 $("#innn").click(function(e) {
 e.stopPropagation();
});



 $("#se1").click(function(e) {
 e.stopPropagation();
 $("#results").hide();
});
 // $(".dropdown .open").show()





// $(".dropdown .open").click(function(e){
//                                 $('#results').css('z-index', 100);
//                                 $('.dropdown-menu').css('z-index', 600);
//                                 });
 