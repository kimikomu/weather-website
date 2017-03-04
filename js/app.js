
  
 //"http://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?";


 $('form').submit(function (evt) {
    var $submitButton = $('#submit');
    var $searchField = $('#search');
    evt.preventDefault();
    

    $searchField.prop("disabled",true);
    $submitButton.attr("disabled", true).val("searching....");
    
    var q = $searchField.val();
    // $('#photos').html('');
    var weatherAPI = "88886500d288c47406d0a48aa4c1740a";


    var weatherLink = "http://api.openweathermap.org/data/2.5/weather?q=" + q + "&APPID=" + weatherAPI + "&units=imperial"; 

    

    $.getJSON(weatherLink, 
      function(data) {
        console.log(data);
        var icon = data.weather["0"].icon;
        var weather = data.weather["0"].description;
        var currentTemp = data.main.temp;
        var highTemp = data.main.temp_max;
        var lowTemp = data.main.temp_min;
        var HTML = '<li>'; 
        if(q.toUpperCase() != data.name.toUpperCase()) {

            HTML += 'City is not in database.</li>';
            $('#photos').html(HTML);    
        } else {       
            HTML += weather;
            HTML += '</li>'
            HTML += '<li> Current Temperature: ' + currentTemp;
            HTML += ' &#176;F </li>';
            HTML += '</li>';
            HTML += '<li> High Today: ' + highTemp;
            HTML += ' &#176;F </li>';
            HTML += '</li>';
            HTML += '<li> Low Today: ' + lowTemp;
            HTML += ' &#176;F </li>';

            $('#photos').html(HTML);
        }

      

    // function(data){
    //   var photoHTML = '';
    //   if (data.items.length > 0) {
    //     $.each(data.items,function(i,photo) {
    //       photoHTML += '<li class="grid-25 tablet-grid-50">';
    //       photoHTML += '<a href="' + photo.link + '" class="image">';
    //       photoHTML += '<img src="' + photo.media.m + '"></a></li>';
    //     }); // end each
    //   } else {
    //     photoHTML = "<p>No photos found that match: " + animal + ".</p>"
    //   }
      



      // $('#photos').html(photoHTML);
      $searchField.prop("disabled", false);
      $submitButton.attr("disabled", false).val("Search");
    }); // end getJSON

  }); // end click

