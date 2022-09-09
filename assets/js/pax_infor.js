$(document).ready(function () {
    $('select.dep_addbaggage').each(function () {
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

        $styledSelect.click(function (e) {
            e.stopPropagation();
            $('div.select-styled.active').not(this).each(function () {
                $(this).removeClass('active').next('ul.seclect__luggage--options').hide();
            });
            $(this).toggleClass('active').next('ul.seclect__luggage--options').toggle();
        });

        $listItems.click(function (e) {
            e.stopPropagation();
            $styledSelect.text($(this).text()).removeClass('active');
            $this.val($(this).attr('rel'));
            $list.hide();

            // Get price when click item
            let price_luggage = $(this).attr('rel');

        });

        $(document).click(function () {
            $styledSelect.removeClass('active');
            $list.hide();
        });
    })

    //only number
    $(document).on("input", ".only__numberic", function () {
        this.value = this.value.replace(/\D/g, '');
    });

    //  SUBMIT FORM
    // $('#frmBookingFlight').submit(function (event) {
        // let error = 0;
        // Check name passengers
        // $(".passenger_name").each(function (index) {
        //     if ($(this).val().length == '') {
        //         $(this).focus();
        //         $(this).css({ "border": "1px solid #ec2029" });
        //         $(this).attr("placeholder", "Vui lòng nhập họ tên");
        //         error++;
        //         return false;
        //     }
        //     else {
        //         $(this).css({ "border": "1px solid var(--border-color)" });
        //     }
        // });
        // if (error > 0) return false;

        // VALIDATE BIRTHDAY
        // let arr_type = $("input[name='passenger_type[]']").map(function () { return $(this).val(); }).get(); //[0, 1, 2]
        // let arr_day = $("select[name='passenger_birthday[]']").map(function () { return $(this).val(); }).get(); //[day1, day2]
        // let arr_month = $("select[name='passenger_birthmonth[]']").map(function () { return $(this).val(); }).get(); //[month1, month2]
        // let arr_year = $("select[name='passenger_birthyear[]']").map(function () { return $(this).val(); }).get(); //[year1, year2]
        // let icon = '<svg xmlns="http://www.w3.org/2000/svg" style="margin-right: 5px;" width="20" height="20" fill="#ec2029" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><circle cx="128" cy="128" r="96" fill="none" stroke="#ec2029" stroke-miterlimit="10" stroke-width="16"></circle><line x1="128" y1="80" x2="128" y2="136" fill="none" stroke="#ec2029" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></line><circle cx="128" cy="172" r="12"></circle></svg>';

        // for (let i = 0; i < arr_type.length; i++) {
        //     console.log(arr_day[i] + '/' + arr_month[i] + '/' + arr_year[i] );
        //     if (arr_type[i] != 0) {
        //         if (arr_day[i]*arr_month[i]*arr_year[i] == 0) {
        //             $('.birthday__error-' + i).html(icon + "Vui lòng nhập đầy đủ ngày sinh");
        //             $(".birthday__error-" + i).css({
        //                 "color": '#ec2029',
        //                 'margin-top': '10px',
        //                 'font-size' : '14px',
        //                 'font-weight': 'bold',
        //                  "display": "flex",
        //                  "align-items": "center"
        //             });
        //             $('.birthday__error-' + i).attr("tabindex", -1).focus();
        //             return false;
        //         }
        //         else if (!isValidDate(arr_day[i], arr_month[i], arr_year[i])) {
        //             $('.birthday__error-' + i).html(icon + "Ngày tháng năm không hợp lệ");
        //             $(".birthday__error-" + i).css({
        //                 "color": '#ec2029',
        //                 'margin-top': '10px',
        //                 'font-size' : '14px',
        //                 'font-weight': 'bold',
        //                  "display": "flex",
        //                  "align-items": "center"
        //             });
        //             $('.birthday__error-' + i).attr("tabindex", -1).focus();
        //             return false;
        //         }
        //         else {
        //             $('.birthday__error-' + i).html("");
        //         }
        //     }
        // }

        // Check infor Contact
        // let regEmail = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
        // let regEmailNew = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        // let number = /^[0-9]+$/;
        // let regexCheckPhone = /((086|096|097|098|032|033|034|035|036|037|038|039|088|091|094|083|084|085|081|082|089|090|093|070|079|077|076|078|092|056|058|099|059)+([0-9]{7})\b)/g;

        // if ($("#contact_name").val() == '') {
        //     $("#contact_name").css({ "border": "1px solid #ec2029" });
        //     $("#contact_name").focus();
        //     $("#err__contact").html(icon + 'Vui lòng nhập Họ và tên.');
        //     $("#err__contact").fadeIn();
        //     return false;
        // }


        // if ($("#contact_phone").val() == '') {
        //     $("#contact_phone").css({ "border": "1px solid #ec2029" });
        //     $("#contact_phone").focus();
        //     $("#err__contact").html(icon + 'Vui lòng nhập Số điện thoại');
        //     $("#err__contact").fadeIn();
        //     return false;
        // }
        // else {
        //     $('#err__contact').html("");
        //     $("#contact_phone").css({ "border": "1px solid var(--border-color)" });
        // }

        // if ($("#contact_phone").val().length != 10 || !$("#contact_phone").val().match(number) || !regexCheckPhone.test($("#contact_phone").val())) {
        //     $("#contact_phone").css({ "border": "1px solid #ec2029" });
        //     $("#contact_phone").focus();
        //     $("#err__contact").html(icon+'Vui lòng nhập Số điện thoại chính xác.');
        //     $("#err__contact").fadeIn();
        //     return false;
        // }
        // else {
        //     $('#err__contact').html("");
        //     $("#contact_phone").css({ "border": "1px solid var(--border-color)" });
        // }

        // if ($("#contact_email").val() == '') {
        //     return true;
        // }
        // if (regEmail.test($("#contact_email").val()) == false || regEmailNew.test($("#contact_email").val() == false)) {
        //     $("#contact_email").css({ "border": "1px solid #ec2029" });
        //     $("#contact_email").focus();
        //     $("#err__contact").html(icon+'Vui lòng nhập email chính xác.');
        //     $("#err__contact").fadeIn();
        //     return false;
        // } else{
        //     $('#err__contact').html("");
        //     $("#contact_email").css({ "border": "1px solid var(--border-color)" });
        // }


    // })
});

function isValidDate(day, month, year) {
    // Assume not leap year by default (note zero index for Jan)
    var daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    // If evenly divisible by 4 and not evenly divisible by 100,
    // or is evenly divisible by 400, then a leap year
    if ((!(year % 4) && year % 100) || !(year % 400)) {
        daysInMonth[1] = 29;
    }
    return !(/\D/.test(String(day))) && day > 0 && day <= daysInMonth[--month];
}
