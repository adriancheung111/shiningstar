// $(document).ready(function() {
//  // executes when HTML-Document is loaded and DOM is ready

// // breakpoint and up  
// $(window).resize(function(){
// 	if ($(window).width() >= 980){	

//       // when you hover a toggle show its dropdown menu
//       $(".navbar .dropdown-toggle").hover(function () {
//          $(this).parent().toggleClass("show");
//          $(this).parent().find(".dropdown-menu").toggleClass("show"); 
//        });

//         // hide the menu when the mouse leaves the dropdown
//       $( ".navbar .dropdown-menu" ).mouseleave(function() {
//         $(this).removeClass("show");  
//       });

// 		// do something here
// 	}	
// });  



// // document ready  
// });





// verify
let canvas = document.getElementById('canvas')//畫布物件

let show_num = []//裝驗證碼的陣列
//產生隨機顏色
function randomColor() {
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    return "rgb(" + r + "," + g + "," + b + ") "
}
//畫布
function draw(show_num) {
    let canvas_clientWidth = document.getElementById('canvas').clientWidth//畫布長度
    let canvas_clientHeight = document.getElementById('canvas').clientHeight//畫布高度
    let context = canvas.getContext("2d")//畫布環境 建立 context 物件：
    canvas.width = canvas_clientWidth
    canvas.height = canvas_clientHeight
    let str = "1,2,3,4,5,6,7,8,9,0";
    let astr = str.split(',');//分割字串形成陣列
    let sLength = astr.length;//陣列長度
    for (let i = 0; i <= 3; i++) {
        let j = Math.floor(Math.random() * sLength);//隨機索引
        let deg = Math.random() * 30 * Math.PI / 180;//0-30隨機弧度
        let text = astr[j];//隨機字元
        show_num[i] = text//驗證碼字元陣列
        let x = 10 + i * 20//x座標
        let y = 20 + Math.random() * 8//y座標
        //位移 旋轉角度 顏色 文字 樣式開始位置
        context.font = 'bold 23px 微軟雅黑'
        context.translate(x, y);
        context.rotate(deg);
        context.fillStyle = randomColor();
        context.fillText(text, 0, 0)
        context.rotate(-deg)
        context.translate(-x, -y)
    }
    //驗證碼顯示小點
    for (let i = 0; i <= 30; i++) {
        context.strokeStyle = randomColor()//設定隨機色用小點的顏色
        context.beginPath();//開始一條路徑
        let m = Math.random() * canvas_clientWidth;
        let n = Math.random() * canvas_clientHeight;
        context.moveTo(m, n)//移動
        context.lineTo(m + 1, n + 1);//新增一個新點，然後在畫布中建立從該點到最後指定點的線條
        context.stroke();//畫上面定義好的路徑
    }
    //驗證碼顯示線條
    for (let i = 0; i < 8; i++) {
        context.strokeStyle = randomColor()
        context.beginPath()
        context.moveTo(Math.random() * canvas_clientWidth, Math.random() * canvas_clientHeight);
        context.lineTo(Math.random() * canvas_clientWidth, Math.random() * canvas_clientHeight)
        context.stroke()

    }

}
draw(show_num)
console.log(show_num);

canvas.onclick = () => {
    draw(show_num)
    console.log(show_num);
}

function myFunction() {
    // Get the value of the input field with id="numb"
    let x = document.getElementById("login_code").value;
    // If x is Not a Number or less than one or greater than 10
    let text;
    var digitStr = show_num.join('');
    if (x != digitStr) {
        text = "Input not valid";
    } else {
        text = "Input OK";
    }
    document.getElementById("demo").innerHTML = text;
}