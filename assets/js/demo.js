(function() {
  $(document).ready(function() {
    $(".color-settings-body-color > a").hover(function() {
      return $("#color-settings-body-color").attr("href", $(this).data("change-to"));
    });
    return $(".color-settings-contrast-color > a").hover(function() {
      $('body')[0].className = $('body')[0].className.replace(/(^|\s)contrast.*?(\s|$)/g, ' ').replace(/\s\s+/g, ' ').replace(/(^\s|\s$)/g, '');
      return $('body').addClass($(this).data("change-to"));
    });
  });

var jqxhr = $.getJSON( "http://api.indeed.com/ads/apisearch?publisher=5506945110621672&q=java&l=austin%2C+tx&sort=&radius=&st=&jt=&start=&limit=&fromage=&filter=&latlong=1&co=us&format=json&v=2", function() {
  console.log( "success" );
})
  .done(function() {
    console.log( "success" );
  })
 
// Set another completion function for the request above
jqxhr.complete(function() {
  console.log(jqxhr);
});

}).call(this);
