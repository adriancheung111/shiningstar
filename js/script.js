$(function () {
    $("#footer").load("footer.html");
});

// $("#test").click(function () {
//     $("#submitbtn").removeClass("disabled");
// });

$('.dropdown-item').on('click', function () {
    $('.navbar-collapse').collapse('hide');
});


// change lang
var dictionary = {
    'index': {
        'en': 'Home',
        'zh': '首頁',
    },
    'course': {
        'en': 'Course List',
        'zh': '中小學課程',
    },
    'free': {
        'en': 'Free Course',
        'zh': '免費試堂/報名',
    },
    'math': {
        'en': 'Maths Course',
        'zh': '數學課程介紹',
    },
    'eng': {
        'en': 'English Course',
        'zh': '英文課程介紹',
    },
    'teacher': {
        'en': 'Our Tutor',
        'zh': '導師簡介',
    },
    'contact': {
        'en': 'Contact Us',
        'zh': '聯絡我們',
    },
};
var langs = ['zh', 'en'];
var current_lang_index = 0;
var current_lang = langs[current_lang_index];

window.change_lang = function () {
    current_lang_index = ++current_lang_index % 2;
    current_lang = langs[current_lang_index];
    translate();
}

function translate() {
    $("[data-translate]").each(function () {
        var key = $(this).data('translate');
        $(this).html(dictionary[key][current_lang]);
    });
}

translate();



