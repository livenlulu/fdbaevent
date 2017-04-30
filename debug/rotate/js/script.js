var listIt = "";
var markerMap = {};
var layer = L.tileLayer('https://api.mapbox.com/styles/v1/livenlulu/ciu0azvas00322in5xzze3u48/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoibGl2ZW5sdWx1IiwiYSI6ImNpZ3h0ZzltbzB1cTQ0cG0zamthcno1dmwifQ.vZrmbXCCq15ZVuF6g6vhkA',{
    attribution: ''
});

var map = L.map('map', {
  scrollWheelZoom: false,
  attributionControl: false,
  rotate: true,
  animate: true, 
  duration: 2
  }).setView([40.804224,-73.955551], 17);
  map.addLayer(layer);
  map.setBearing(331);

  map.options.maxZoom = 18;
  map.options.minZoom = 16;

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
  iconSize: [16,16],
  iconAnchor: [0,5]
});

var atrain = L.icon({
  iconUrl: 'img/a.png',
  iconSize: [18,18],
  iconAnchor: [15,5]
});

var ctrain = L.icon({
  iconUrl: 'img/c.png',
  iconSize: [18,18],
  iconAnchor: [15,5]
});

var btrain = L.icon({
  iconUrl: 'img/b.png',
  iconSize: [18,18],
  iconAnchor: [15,5]
});

var dtrain = L.icon({
  iconUrl: 'img/d.png',
  iconSize: [18,18],
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
    coord: [40.804471,-73.955380]
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
    coord: [40.804400,-73.955207]
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
           d > 1  ? '#ec971f' : //2 other food
           d > 0  ? '#C95260' : //1 restaurants
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

// this.openPopup();
// }

  // var layer = e.target;

    geojson1.setStyle({
        weight: 3,
        opacity: 1,
        color: 'white',
        dashArray: '',
        fillOpacity: 1
    });
    if (!L.Browser.ie && !L.Browser.opera) {
        geojson1.bringToFront();
    }
}


function resetHighlight(e) {
    geojson1.resetStyle(e.target);
    // this.closePopup();
}

//RESTAURANTS POPUP
function onEachFeature(feature, layer) {
    var popup = "<h5 id ='ona'>" + feature.properties.Organization + "</h5>" + "<h6 id='ona'>" + feature.properties.Category + '</h6>' + "<a href='http://" + feature.properties.Web + "' target='_blank'>" + "<center><img class='imggg' style='padding-left:15px; padding-right:15px;' onerror='this.parentNode.removeChild(this)' src='img2/" + feature.properties.OBJECTID + ".jpg ' width='180px'>" + "</a></center>" + "<h4><span id='inf1' class='glyphicon glyphicon-map-marker' aria-hidden='true'></span>&nbsp;" + feature.properties.Address  + "<br><span id='inf2' class='glyphicon glyphicon-earphone' aria-hidden='true'></span>&nbsp;" + feature.properties.Phone + "<br><span id='inf3' class='glyphicon glyphicon-globe' aria-hidden='true'></span>&nbsp;" + "<a href='http://" + feature.properties.Web + "' target='_blank'>Website</a></h4>";
      
    layer.bindPopup(popup);
    layer.on({
        mouseover: mouseoverFunction,
        mouseout: resetHighlight,
        // click: onMarClick
    });
}


    // $("#resta li a").mouseover(function(e){
    //   e.stopPropagation();
      
    //   var id = $(this)[0].id;
    //   geojson1.eachLayer(function(feature){


    //     if(feature.feature.properties.OBJECTID==id) {
    //      feature.openPopup();






// function onMarClick(e) {

//     $(".middd").toggleClass("rhover");

//   }

  

  
 // },
 // function(e) {
 //  e.stopPropagation();
 //  $(this).removeClass("rhover");
 // });


//      $('div').removeClass('active');
//     $('#resta li' + e.target._leaflet_id).addClass('active');
//     map.panTo(e.target.getLatLng());
// }





    geojson1 = L.geoJSON(resta, {
      style: style,
      onEachFeature: onEachFeature,
      pointTolayer: function (feature, latlng) {
     

       return marker = L.marker(latlng, bizmarker);
        // markerMap[feature.feature.properties.OBJECTID] = marker;
    
        
      }
    }).addTo(map);


 

//popupopen center
map.on('popupopen', function(e) {
    var px = map.project(e.popup._latlng); // find the pixel location on the map where the popup anchor is
    px.y -= e.popup._container.clientHeight/2 // find the height of the popup container, divide by 2, subtract from the Y axis of marker location
    px.x += e.popup._container.clientWidth/2000 + 65
    map.panTo(map.unproject(px),{animate: true, duration: .8}); // pan to new center
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


var photob = L.icon({
  iconUrl: 'img/photo.png',
  shadowUrl: 'img/marker-shadow.png',
  iconSize: [25,38],
  iconAnchor: [-5,37],
  shadowAnchor: [-5, 38],
  popupAnchor:  [10, -30]
});

var photobooth = [
  {
    name: "Photobooth @ Row House",
    coord: [40.803568,-73.955765]
  },
  {
    name: "Photobooth @ Angel of Harlem",
    coord: [40.808037,-73.952420]
  }
]

photobooth.forEach(function(d) {
  var pb = L.marker(d.coord, {icon: photob}).addTo(map);
  pb.bindPopup("<div id='popm'>" + d.name + "</div>")
});



$("#info").click(function() {
$("#aboutModal").modal("show");
$(".navbar-collapse.in").collapse("hide");
  return false;
    });




$(document).ready(function () {

  
    for (var i = 0; i < resta.features.length; i++){

      listIt += "<li>";
      listIt += "<a id='" + resta.features[i].properties.OBJECTID+ "'><div class='middd' id='"+resta.features[i].properties.OBJECTID+"'><div id='m2' class='col-md-4'><img class='img-responsive' onerror='this.parentNode.removeChild(this)' src='img2/"+resta.features[i].properties.OBJECTID+".jpg'></div>";
      listIt += "<div class='col-md-1'></div><div class='col-md-7'>";
      listIt += "<h5>" +  resta.features[i].properties.Organization + "&nbsp; </h5>";
      listIt += "<p><span class='glyphicon glyphicon-map-marker' aria-hidden='true'></span>&nbsp;" + resta.features[i].properties.Address;
      listIt += "<br><span class='glyphicon glyphicon-earphone' aria-hidden='true'></span>&nbsp;" + resta.features[i].properties.Phone;
      listIt += "<br><span class='glyphicon glyphicon-globe' aria-hidden='true'></span>&nbsp;" + "<a href='http://" + resta.features[i].properties.Web + "' target='_blank'>Website</a>&nbsp;</p>";
  
    // MODAL
      listIt += "<button type='button' class='btn btn-primary btn-sm modalbut' data-toggle='modal' data-target='#myModal"+i+"'>";
      listIt += "Menu";
      listIt += "</button>";
      listIt += "<div class='modal fade' id='myModal"+i+"' tabindex='-1' role='dialog' aria-labelledby='myModalLabel'>";
      listIt += "<div class='modal-dialog' role='document'>";
      listIt += "<div class='modal-content'>";
      listIt += "<div class='modal-header'>";
      listIt += "<button type='button' class='close' data-dismiss='modal' aria-label='Close'><span aria-hidden='true'>&times;</span></button>";
      listIt += "<h4 class='modal-title' id='myModalLabel'>" + resta.features[i].properties.Organization + " - Menu</h4>"
      listIt += "</div>";
      listIt += "<div class='modal-body'>" + resta.features[i].properties.html + "</div>";       
 
      listIt += "<div class='modal-footer'>";
      listIt += "<button type='button' id='closeb' class='btn btn-default' data-dismiss='modal'>Close</button>";
      listIt += "</div>";
      listIt += "</div>";
      listIt += "</div>";
      listIt += "</div>";
  // END MODAL

      listIt += "</a></div></div></li>";
        

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
    

    $(".middd").hover(function(e) {
 //      var aId = $(this).id('aId');


     
 //      var marker = markerMap[aId];
 // //       e.stopPropagation();

 //  marker.openPopup(marker.getLatLng());
 //  e.preventDefault()
   $(this).addClass("rhover");
 },
 function(e) {
  e.stopPropagation();
  $(this).removeClass("rhover");
 });


    $("#resta li a").mouseover(function(e){
      e.stopPropagation();
      
      var id = $(this)[0].id;
      geojson1.eachLayer(function(feature){


        if(feature.feature.properties.OBJECTID==id) {
         feature.openPopup();
      }
  });
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
              for (var a = 0; a < resta.features.length; a++){
                
                if ((resta.features[a].properties.Organization.search(regex) != -1) || (resta.features[a].properties.Address.search(regex) != -1)) {
                  output += '<div class="dropdown" id="seapop">';
                  output += '<ul id="' + resta.features[a].properties.OBJECTID +'">';
                  output += '<div id="m2" class="col-md-4"><img class="img-responsive" onerror="this.parentNode.removeChild(this)" src="img2/'+resta.features[a].properties.OBJECTID+'.jpg" alt="'+ resta.features[a].properties.Organization +'" /></div>';
                  output += "<div class='col-md-1'></div><div class='col-md-7'>";
                  output += '<h5>' + resta.features[a].properties.Organization + '</h5>';
                  output += "<p><span class='glyphicon glyphicon-map-marker' aria-hidden='true'></span>&nbsp;" + resta.features[a].properties.Address;
                  output += "<br><span class='glyphicon glyphicon-earphone' aria-hidden='true'></span>&nbsp;" + resta.features[a].properties.Phone;
                  output += "<br><span class='glyphicon glyphicon-globe' aria-hidden='true'></span>&nbsp;" + "<a href='http://" + resta.features[a].properties.Web + "' target='_blank'>Website</a>&nbsp;</p>";
                  
                  output += "<button type='button' class='btn btn-primary btn-sm modalbut2' data-toggle='modal' data-target='#myModal"+a+"'>";
                  output += "Menu";
                  output += "</button>";

                  output += "<div class='modal fade' id='myModal"+a+"' tabindex='-1' role='dialog' aria-labelledby='myModalLabel'>";
                  output += "<div class='modal-dialog' role='document' id='mod2'>";
                  output += "<div class='modal-content'>";
                  output += "<div class='modal-header'>";
                  output += "<button type='button' class='close' data-dismiss='modal' aria-label='Close'><span aria-hidden='true'>&times;</span></button>";
                  output += "<h4 class='modal-title' id='myModalLabel'>" + resta.features[a].properties.Organization + " - Menu</h4>"
                  output += "</div>";
                  output += "<div class='modal-body' style='background-color:#fff;'>" + resta.features[a].properties.html + "</div>";       
             
                  output += "<div class='modal-footer'>";
                  output += "<button type='button' id='closeb' class='btn btn-default' data-dismiss='modal'>Close</button>";
                  output += "</div>";
                  output += "</div>";
                  output += "</div>";
                  output += "</div>";


                  output += '</div><hr style="border-top: 1px solid #ddd; margin-bottom: 0px; margin-top:10px; padding-top:0px; width:100%;">';
                  output += '</ul></div></div>';
                 
                  if(count%2 == 0){
                    output += '</div><div class="row">'
                  }
                  count++;
                }
                //  if ((count-1) == 0) {
                
                //   $('#results').css('z-index', 100);
                //   $('.dropdown-menu').css('z-index', 600);
                // }


              };


              output += '</div>';



              $('#results').html(output);
              // console.log(count)

              if ($('#results').css('display') == 'none')  {
                    $('#results').css('z-index', 400);
                    $('#results').css('position', 'absolute');
                    $('#resta').css('z-index', 600);
                }

                if ($('#results').css('display') == 'block') 
                {
           
                  $('#results').css('z-index', 400);
                  $('#resta').css('z-index', 200)
                                        .css('position', 'relative');
                 
                }

                if ((count-1) == 0) {
                  $('#results').hide();
                  $('#results').css('z-index', 100);
                  $('#results').css('position', 'absolute');
                  $('#resta').css('z-index', 600);
                }


          $("#results #seapop ul").mouseover(function(e){
                      e.stopPropagation();

                        var id3 = $(this)[0].id;
                        geojson1.eachLayer(function(feature){
                          if(feature.feature.properties.OBJECTID==id3) {
                          feature.openPopup();
                          }
                       }); 

//       $(".dropdown").on('click touchend', function() {
//     $('.dropdown-menu').toggleClass("open");
    
// }); 


// $('#myModal').appendTo("body").modal('show');


$(".modalbut2").click(function(e){
                      
$("#myModal").modal("show");
$('#myModal').modal({backdrop: 'static', keyboard: false})  

$('#map').css('z-index', 100);
$('#results').css('z-index', 1090);
$('#results').css('position', 'static');
$('#resta').css('display', 'none');
    
$('#mod2').css('z-index', 8000);
// $('#mod2').css('opacity', 1);



});

});
});
});
                     


 $("#se1").click(function(e) {
 e.stopPropagation();
 $("#results").css('display', 'none');

 $("#resta").show()
     $('#results').css('z-index', 100);
     $('#resta').css('z-index', 600);

$('#myModal').css('z-index', 3000);
$('#myModal').css('position', 'absolute');
$('#myModal').modal({backdrop: 'static', keyboard: false})  


$('#search').focus(
    function(){
        $(this).val('');
    });


});





$(".modalbut2").click(function(event) {





$("#map").on('click', function(f) {
  f.stopPropagation();
});




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

 $(".dropdown-menu").click(function(e) {
 e.stopPropagation();
});

 $("#topp").click(function(e) {
 e.stopPropagation();
});

 $("#search").click(function(e) {
 e.stopPropagation();
});

 $("#results").click(function(e) {
 e.stopPropagation();
});

  $("#resta").click(function(e) {
 e.stopPropagation();
});

    $("#otherf").click(function(e) {
 e.stopPropagation();
});

      $("#services").click(function(e) {
 e.stopPropagation();
});

        $("#retail").click(function(e) {
 e.stopPropagation();
});

          $("#beauhea").click(function(e) {
 e.stopPropagation();
});





  $("#innn").click(function(e) {
 e.stopPropagation();
});




});

