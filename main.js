 require.config({
            paths : {
                "jquery" : ["http://libs.baidu.com/jquery/2.0.3/jquery","jquery/jquery-1.7.1.min.js"],
                "carousel":"carousel" 
            },
            shim:{
                  "carousel":["jquery"]
            }
        });

    require(["jquery","carousel"],function($){

      $(function(){ 
              
              $('.vanclFocus').carousel({li_width:1200, li_height:535 , visible_width:1200,visible_heigh:535,speed:3000 });





   

    });

   });   

