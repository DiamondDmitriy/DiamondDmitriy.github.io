
var editor;
var outCode;   


// $(function() {
//     });


editor = ace.edit("code");                      // создаем редактор из элемента с id="code"
editor.setTheme("ace/theme/monokai");          // выбираем тему оформления для подсветки синтаксиса
editor.getSession().setMode("ace/mode/python");  // говорим что код надо подсвечивать как python код
editor.setShowPrintMargin(false);               // опционально: убираем вертикальную границу в 80 сиволов
editor.setOptions({
    maxLines: Infinity,                       // опционально: масштабировать редактор вертикально по размеру кода
    fontSize: "12pt",                         // опционально: размер шрифта ставим побольше
    autoScrollEditorIntoView: true,
    copyWithEmptySelection: true,
});
code.$blockScrolling = Infinity;              // отключаем устаревшие, не поддерживаемые фишки редактора



outCode = ace.edit("outCode");
outCode.setTheme("ace/theme/monokai");
outCode.setShowPrintMargin(false); 
outCode.setOptions({
    maxLines: Infinity,                       // опционально: масштабировать редактор вертикально по размеру кода
    fontSize: "12pt",                         // опционально: размер шрифта ставим побольше
    autoScrollEditorIntoView: true,
    copyWithEmptySelection: true,
});
outCode.$blockScrolling = Infinity;
outCode.setReadOnly(true);  // false to make it editable




//run_btn



var EditSession = require("ace/edit_session").EditSession;
var js = new EditSession("some js code n/ sds");
var css = new EditSession(["some", "css", "code here"]);

// and then to load document into editor, just call


function run() {
    // Команда для компиляции на удаленном сервере
    var cmd = "g++ -Wall main.cpp -o main_prog && echo 'Compilation: SUCCESS."
        + " Program output is:\n' && ./main_prog && echo \"\nExit code: $?\"";

    var output = $("#output");
    output.text('');
    var to_compile = {
        "clientId": "e01aeeb1a9d270e6dcf349696fd43939",
        "clientSecret":"6d9df1ca13521bb84f933e407e41d1a9b749219b8543599701048d40195da494",
        "script":editor.getValue(),
        //"stdin": cmd,
        "language":"python3",
        "versionIndex":2,
    };

    output.text("Executing... Please wait.");

    $.ajax({
        url: "https://api.jdoodle.com/v1/execute",
        type: "POST",
        data: JSON.stringify(to_compile),
        contentType:"text/plain; charset=utf-8",
        dataType: "text"
    }).done(function(data) {
        output.text(data);
        //outCode.setSession(data);
    }).fail(function(data) {
        output.text("Server error: " + data);
        //outCode.setSession("Server error: " + data);

    });
};

