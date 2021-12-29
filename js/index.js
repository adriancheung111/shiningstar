$(document).ready(function () {
  $('.slicklist').slick({
    dots: true,
    arrows: true,
    autoplay: false,
    adaptiveHeight: true,
    autoplaySpeed: 5000,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          slidesToShow: 1,

        }
      },
    ]
  });
});

function display(selected) {
  if (selected == 'firstbox') {
    texttoshow = `升中3+1面試特訓班 (精華短期課程 每堂1小時15分鐘)
    <li>涵蓋面試中英文自我介紹、文章朗讀、小組討論和英文對答訓練</li>
    <li>一堂模擬面試，因應同學情況提供進一步度身訂造支援</li>`;
  }
  else if (selected == 'secondbox') {
    texttoshow = "Text related to 2nd box.";
  }
  else if (selected == 'thirdbox') {
    texttoshow = "Text related to 3nd box.";
  }
  document.getElementById("thetext").innerHTML = texttoshow;
}


var header = document.getElementById("testbtn");
var btns = header.getElementsByClassName("btn1");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
  var current = document.getElementsByClassName("active");
  if (current.length > 0) { 
    current[0].className = current[0].className.replace(" active", "");
  }
  this.className += " active";
  });
}