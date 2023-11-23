$(document).ready(function(){
    jQuery.validator.addMethod("alphanumeric", function(value, element) {
        return this.optional(element) || /^[\w.]+$/i.test(value)})
    $("#signupform").validate({
        rules:{
            fname:{
                required:true,
                minlength:3
            },
            sname:{
                required:true,
                minlength:3
            },
            emailaddr:{
                required:true,
                email:true
            },
            pass:{
                minlength:6,
                maxlength:16,
                required:true,
                alphanumeric:true
            },
            day:{
                required:true
            },
            month:{
                required:true
            },
            year:{
                required:true
            },
            gender:{
                required:true
            }
        },
        messages:{
            fname:{
                required:"Enter First Name",
                minlength:"Enter 3 or more characters"
            },
            sname:{
                required:"Enter Last Name",
                minlength:"Enter 3 or more characters"
            },
            emailaddr:{
                required:"Please enter a email id",
                email:"Please enter a valid email id"
            },
            pass:{
                alphanumeric:"Only include alphanumeric values"
            }
        }
    })
})