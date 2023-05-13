$(function () {
    var $regform= $("#myform");
    $.validator.addMethod("nospace",function(value,element){
 return value==""|| value.trim().length!=0
    },"spaces are not allowed");
    if($regform.length){
     $regform.validate({
         rules:{
            FirstName:{
                 required:true,
                 nospace:true
             },
             LastName:{
                required:true,
                nospace:true
                
            },
            email:{
                required:true,
                email:true
                
            },
            
             
           
         },
         messages:{
            FirstName:{
                 required:"First name is manitory"
             },
             LastName:{
                required:"Last name is manitory"
            },
            email:{
                required:"please enter email",
                email:"please enter valid email"
            },
           
         },
         
         
     })
    }
    
 });
