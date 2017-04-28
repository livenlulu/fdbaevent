

$(document).ready(function () {
  var listIt = "";
    for (var i = 0; i < resta.features.length; i++){

      
      listIt += "<li>";
      listIt += "<a id='" + resta.features[i].properties.OBJECTID+ "'><div id='middd' style='height:150px;>'><div id='m2' class='col-md-4'><img class='img-responsive' onerror='this.parentNode.removeChild(this)' src='img2/"+resta.features[i].properties.OBJECTID+".jpg'></div>";
      listIt += "<div class='col-md-8'>";
      listIt += "<h5>" +  resta.features[i].properties.Organization + "&nbsp; </h5>";
      listIt += "<p><span class='glyphicon glyphicon-map-marker' aria-hidden='true'></span>&nbsp;" + resta.features[i].properties.Address;
      listIt += "<br><span class='glyphicon glyphicon-earphone' aria-hidden='true'></span>&nbsp;" + resta.features[i].properties.Phone;
      listIt += "<br><span class='glyphicon glyphicon-globe' aria-hidden='true'></span>&nbsp;" + "<a href='http://" + resta.features[i].properties.Web + "' target='_blank'>Website</a>&nbsp;</p></a>";
  
    // MODAL
      listIt += "<button type='button' id='modalbut' class='btn btn-primary btn-sm' data-toggle='modal' data-target='#myModal'>";
      listIt += "launch";
      listIt += "</button>";
      listIt += "<div class='modal fade' id='myModal' tabindex='-1' role='dialog' aria-labelledby='myModalLabel'>";
      listIt += "<div class='modal-dialog' role='document'>";
      listIt += "<div class='modal-content'>";
      listIt += "<div class='modal-header'>";
      listIt += "<button type='button' class='close' data-dismiss='modal' aria-label='Close'><span aria-hidden='true'>&times;</span></button>";
      listIt += "<h4 class='modal-title' id='myModalLabel'>Modal title</h4>"
      listIt += "</div>";
      listIt += "<div class='modal-body'>";       
      listIt += "...";
      listIt += "</div>";
      listIt += "<div class='modal-footer'>";
      listIt += "<button type='button' class='btn btn-default' data-dismiss='modal'>Close</button>";
      listIt += "</div>";
      listIt += "</div>";
      listIt += "</div>";
      listIt += "</div>";
  // END MODAL

      listIt += "</div></div></li>";
        

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