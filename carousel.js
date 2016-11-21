
 (function($){

          $.fn.carousel=function(options){
             var def={
                   li_width:'0',
                   li_height:'0',
                   visible_width:'300',
                   visible_heigh:'200',
                   speed:3000,
             };
             

                                                   console.log( def.speed);

             var opt=$.extend(def,options);

             return  this.each(function(index, el) {

                       var container =$(this);
                       var prev=container.find('.prev');
                       var next=container.find('.next');

                       var ul_one=container.find("ul").eq(0);
                       var ul_two=container.find("ul").eq(1);
                       var ul_three=container.find("ul").eq(2);

                       var li_list0=ul_one.find('li');
                       var li_list1=ul_two.find('li');
                       var li_list2=ul_three.find('li');

                       var len_one=li_list0.length;
                       var len_two=li_list1.length; 
                       var len_three=li_list2.length;

                       var one_width=opt.li_width*len_one;
                       var two_width=opt.li_width*len_two;   console.log("one_width"+one_width);

                       container.css({ 'width':opt.visible_width+'px',
                                       'height':opt.visible_heigh+'px' });    console.log("container"+opt.visible_width);

                                            

                       ul_one.css('width', one_width+'px');

                       ul_two.css({
                           'width': two_width+'px',
                           'left': one_width+'px'
                       });

                        var x=0;
                        var y=one_width;
                        var i=0
                        
                                              console.log("one_width"+one_width);

                       function moveLeft(){
                              li_list2.eq(i).addClass('li_color').siblings().removeClass('li_color');

                               console.log('li_color'+ li_list2.eq(0).get(0));

                              ul_one.css('left', x+'px');
                              ul_two.css('left', y+'px');

                              if (x<=-one_width) { x=two_width};

                             if(y<=-two_width){y=one_width};
                                   console.log("move x"+x);
                                   console.log("move y"+y);

                              x=x-opt.li_width;

                              y=y-opt.li_width;

                           if (i<len_three-1) {
                                i=i+1;
                           }else{ i=0 ;  }
                             
                                   
                                 

                     

                           }



                       function moveRight(){

                              li_list2.eq(i).addClass('li_color').siblings().removeClass('li_color');

                               console.log('li_color'+ li_list2.eq(0).get(0));

                              ul_one.css('left', x+'px');
                              ul_two.css('left', y+'px');

                              if (x>=two_width) { x=-one_width};

                             if(y>=one_width){y=-two_width};
                                   console.log("move x"+x);
                                   console.log("move y"+y);

                              x=x+opt.li_width;

                              y=y+opt.li_width;

                           if (i>0) {
                                i=i-1;
                           }else{ i=len_three-1 ;  }
                             
                                   
                                 

                     

                           }

                   var task= setInterval(moveLeft,opt.speed);
              
                    container.hover(function() {
                          clearInterval(task);
                         
                    }, function() {
                        task=setInterval(moveLeft,opt.speed);
                          
                    });

                   prev.on('click',  function(event) {
                     event.preventDefault();
                      moveLeft();
                   }); 

                   next.on('click', function(event) {
                     event.preventDefault();
                       moveRight();
                   });

             
                 
             });


             
          }   

    })($);