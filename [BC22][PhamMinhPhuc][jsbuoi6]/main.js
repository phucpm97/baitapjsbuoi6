// 1. Tìm số nguyên dương nhỏ nhất sao cho:
// 1 + 2 + … + n > 10000
document.getElementById("btnSomin").onclick = function() {
    var m = 0;
    var n = 0;
    do {
        //vong nhay 
        m++;
        n = m + n;

    } while (n < 10000)
    console.log(m)
    document.getElementById('KQSomin').innerHTML = ("Kết quả là:") + (m);
}

// 2. Viết chương trình nhập vào 2 số x, n tính tổng: S(n) = x + x^2
// + x^3 + … + x^n (Sử dụng vòng lặp và hàm)
document.getElementById("btnSubmit").onclick = function() {
    var Soduong = document.getElementById("txt_Soduong").value * 1;
    var Somu = document.getElementById("txt_Somu").value * 1;
    var n = 1
    var tong = 0
    var binhphuong = Math.pow(Soduong, Somu);
    do {
        //vong nhay 
        tong = tong + Math.pow(Soduong, n);
        n++;
    } while (n < (Somu + 1))

    console.log(Soduong, Somu, binhphuong, tong)
    document.getElementById('footerCard').innerHTML = ("Kết quả là:") + (tong);

};
// 3. Nhập vào n. Tính giai thừa 1*2*...n
document.getElementById("btnSubmit2").onclick = function() {
    var Soduong = document.getElementById("txt_Sogiaithua").value * 1;
    var n = 1
    var tong = 1
    do {
        //vong nhay 
        tong = tong * n;
        n++;
    } while (n < (Soduong + 1))

    console.log(n, Soduong, tong)
    document.getElementById('footerCard2').innerHTML = ("Kết quả là:") + (tong);

};
// 4. Hãy viết chương trình khi click vào button sẽ in ra 10 thẻ div.
// Nếu div nào vị trí chẵn thì background màu đỏ và lẻ thì
// background màu xanh

document.getElementById('btnSubmit3').onclick = function() {
    var userList = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];
    // var content1 = ""
    // var content2 = "";
    var content = "";

    var i = 0

    for (var i = 0; i < userList.length; i++) {
        if (i % 2 === 0) {
            //le  
            content += "<div class='div__blue'> Div " + " lẻ " + userList[i] + "</div>";



        } else {
            //chan
            content += "<div class='div__red'> Div " + " chẵn " + userList[i] + "</div>";

        }

        document.getElementById("KQso").innerHTML = content;
    }
};