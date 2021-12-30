function display(selected) {
    if (selected == 'firstbox') {
      texttoshow = `<h1>中學數學HKDSE課程</h1>
      (常規課程 每堂1小時15分鐘)<br>
      <ul>
      <li>依照學校進度量身安排，兼備概念和操練，為同學拔尖補底</li>
      <li>非死記硬背。以興趣為始，以學識為旨，為初中同學建立對數學科的興趣和信心，進而在考試考取好成績</li>
      <li>獨特技巧解釋複雜概念，為高中同學逐步拆解重點課題</li>
      <li>導師曾教授數屆DSE文憑試班，100%同學達3級或以上成績，多名同學考獲星級成績</li>
      </ul>`;
    }
    else if (selected == 'secondbox') {
      texttoshow = `<h1>中學英文HKDSE課程</h1>
      (常規課程 每堂1小時15分鐘)<br>
      <ul>
      <li>涵蓋「讀寫聽說」四個範疇，幫助同學打好文法基礎。實用獨家詳盡的筆記、練習、模擬試題、詞匯表等等，讓初中學生循序漸進地提昇英文水平，儘早為公開試作準備。</li>
      <li>高中DSE 英文課程分為基礎班和進階班，讓同學根據自己程度學習。教導同學如何掌握題目重點和答題技巧，以提升答題能力。按照同學的評估表現，分析個別同學的常犯錯誤，有目標地對症下藥</li>
      <li>詳細改文服務，幫同學改善文筆，提供實用建議</li>
      </ul>`;
    }
    else if (selected == 'thirdbox') {
      texttoshow = `<h1>小學數學呈分試課程</h1>
      (常規課程 每堂1小時15分鐘)<br>
      <ul>
      <li>由淺入深為同學講解升中重點課題，以呈分試為教學方向，與同學操練每課呈分試重點題目，入讀心宜band1中學。</li>
      <li>完美銜接升中進度</li>
      </ul>`;
    }
    document.getElementById("thetext").innerHTML = texttoshow;
  }
  
  
  var header = document.getElementById("testbtn");
  var btns = header.getElementsByClassName("btn1");
  for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function () {
      var current = document.getElementsByClassName("active");
      if (current.length > 0) {
        current[0].className = current[0].className.replace(" active", "");
      }
      this.className += " active";
    });
  }