$(document).ready(function () {
     $('select.dep_addbaggage').each(function(){
          let $this = $(this);
          let numberOfOptions = $(this).children('option').length; //7
          // console.log(numberOfOptions);

          //gán value option 0 cho select-styled
          let $styledSelect = $this.next('div.select-styled');
          $styledSelect.text($this.children('option').eq(0).text());

          // tạo danh sách ul li <=> select và option phía sau thẻ div.select-styled
          let $list = $('<ul />', {
               'class': 'seclect__luggage--options'
           }).insertAfter($styledSelect);

           for (let i = 0; i < numberOfOptions; i++) {
               $('<li />', {
                   text: $this.children('option').eq(i).text(),
                   rel: $this.children('option').eq(i).val()
               }).appendTo($list);
           }

           let $listItems = $list.children('li'); //element li
  
           $styledSelect.click(function(e) {
               e.stopPropagation();
               $('div.select-styled.active').not(this).each(function(){
                   $(this).removeClass('active').next('ul.seclect__luggage--options').hide();
               });
               $(this).toggleClass('active').next('ul.seclect__luggage--options').toggle();
           });

           $listItems.click(function(e) {
               e.stopPropagation();
               $styledSelect.text($(this).text()).removeClass('active');
               $this.val($(this).attr('rel'));
               $list.hide();

               // Get price when click item
               let price_luggage = $(this).attr('rel');

           });

           $(document).click(function() {
               $styledSelect.removeClass('active');
               $list.hide();
           });
     })
});

