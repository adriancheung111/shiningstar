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

function display(selected) {
  if (selected == 'math1') {
    texttoshow = `<h1>中學數學HKDSE課程</h1>
      (常規課程 每堂1小時15分鐘)<br><br>
      <ul>
      <li>依照學校進度量身安排，兼備概念和操練，為同學拔尖補底</li>
      <li>非死記硬背。以興趣為始，以學識為旨，為初中同學建立對數學科的興趣和信心，進而在考試考取好成績</li>
      <li>獨特技巧解釋複雜概念，為高中同學逐步拆解重點課題</li>
      <li>導師曾教授數屆DSE文憑試班，100%同學達3級或以上成績，多名同學考獲星級成績</li>
      </ul>
      <hr>
      <b>費用:<br>
      中一至中三 $800/4堂<br>
      中四至中六 $850/4堂</b>`;
  }
  else if (selected == 'math2') {
    texttoshow = `<h1>小學數學呈分試課程</h1>
      (常規課程 每堂1小時15分鐘)<br><br>
      <ul>
      <li>由淺入深為同學講解升中重點課題，以呈分試為教學方向，與同學操練每課呈分試重點題目，入讀心宜band1中學。</li>
      <li>完美銜接升中進度。</li>
      </ul>
      <hr>
      <b>費用:<br>
      小一至小三 $700/4堂<br>
      小四至小六 $750/4堂</b>`;
  }
  else if (selected == 'english1') {
    texttoshow = `<h1>中學英文HKDSE課程</h1>
      (常規課程 每堂1小時15分鐘)<br><br>
      <ul>
      <li>涵蓋「讀寫聽說」四個範疇，幫助同學打好文法基礎。實用獨家詳盡的筆記、練習、模擬試題、詞匯表等等，讓初中學生循序漸進地提昇英文水平，儘早為公開試作準備。</li>
      <li>高中DSE 英文課程分為基礎班和進階班，讓同學根據自己程度學習。教導同學如何掌握題目重點和答題技巧，以提升答題能力。按照同學的評估表現，分析個別同學的常犯錯誤，有目標地對症下藥。</li>
      <li>詳細改文服務，幫同學改善文筆，提供實用建議。</li>
      </ul>
      <hr>
      <b>費用:<br>
      中一至中三 $800/4堂<br>
      中四至中六 $950/4堂</b>`;
  }
  else if (selected == 'english2') {
    texttoshow = `<h1>小學英文呈分試課程</h1>
      (常規課程 每堂1小時15分鐘)<br><br>
      <ul>
      <li>獨家詳盡筆記、練習、詞匯表。</li>
      <li>高中DSE 根據小學的教學大綱而設計，與學校進度相輔相成。老師會講解題目，教授常用生字，並糾正同學的讀音。另外，每個月的最後一課都有溫習單元，幫助同學溫故知新。</li>
      </ul>
      <hr>
      <b>費用:<br>
      小四至小六 $750/4堂</b>`;
  }
  else if (selected == 'other1') {
    texttoshow = `<h1>升中3+1面試特訓班</h1>
      (精華短期課程 每堂1小時15分鐘)<br><br>
      <ul>
      <li>課程内容：教導學生如何用中文和英文進行面試，内容包括自我介紹、朗讀、問答和小組討論。</li>
      <li>‧課堂編排：導師會安排模擬面試，讓同學及早適應面試流程。</li>
      </ul>
      <hr>
      <b>費用:<br>
      $900 (3堂+1堂模擬面試)</b>`;
  }
  document.getElementById("thetext").innerHTML = texttoshow;
}