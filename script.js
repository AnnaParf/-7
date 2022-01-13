let img1 = new Image();
img1.src = "1.jpg";

let img2 = new Image();
img2.src = "2.jpg";

let img3 = new Image();
img3.src = "3.jpg";

let img4 = new Image();
img4.src = "4.jpg";

let quest = [img1, img2, img3, img4];
let right_answer = [v, v, b, g]

let num_img = 0;
let num_ans = 0;
let sum = 0;

document.body.appendChild(quest[num_img]);
btn.addEventListener("click", check);

function check() {
    document.body.removeChild(quest[num_img]);
    num_img++;
    document.body.appendChild(quest[num_img]);
}

btn.addEventListener("click", img);

function img() {
    console.log(a.checked);
    console.log(b.checked);
    console.log(v.checked);
    console.log(g.checked);
    if (right_answer[num_ans].checked) {
        alert("Правильно");
        sum++;
    } else {
        alert("Неправильно");
    }
    num_ans++;
    if (num_ans == right_answer.length) {
        document.body.remove(table);
        alert("Всего правильных:" + sum);
    }
}