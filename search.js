$(function(){
    $('#search').keyup(function(event){
    var query,
        _this=$(this);
        query = $(_this).val();

             t=setTimeout(function () {
        query = $(_this).val();},2000);
        if (query){
        $.get('/forum/search/', {search: query}, function(data){
         $('.dropdown-menu1').html(data);
            var cat=$('.reminder');
            console.log(cat.find(".search-items"));
            cat.find(".search-items").each(function(){
               // alert($(this).text())
                var text =$(this).text().replace(query,'<strong>'+query+'</strong>')
                $(this).html(text)

            });
            //alert(cat.children()[0].find(".search-items").text())

        });
        }
        else{
                    $.get('/forum/subscript/', function(data){
         $('.dropdown-menu1').html(data);

        });
        }

});
    $('.form-group').click(function(){

        var _this=this;
        $('.dropdown-menu1').slideDown();

    });
         $(document).click(function(e){   e = window.event||e;
            obj = e.srcElement ? e.srcElement : e.target;
            var id = obj.id;
            if(id != 'search'){ // 如果不是点击输入框
                $('.dropdown-menu1').slideUp(); // $comboContent是下拉框部分
                return;
            }
        });




});