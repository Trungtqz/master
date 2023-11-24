// bai1
let total = 0;
let n;

for (n = 1; total <= 10000; n++) {
    total += n;
}

console.log("Số nguyên dương nhỏ nhất sao cho tổng vượt quá 10000 là:", n - 1);

// bai2
function tinhTong(x, n) {
    let tong = 0;
    for (let i = 1; i <= n; i++) {
        tong += Math.pow(x, i);
    }
    return tong;
}

let x = parseFloat(prompt("Nhập giá trị x:"));
let n1 = parseInt(prompt("Nhập giá trị n:"));

if (isNaN(x) || isNaN(n1) || n1 < 0) {
    console.log("Vui lòng nhập số hợp lệ.");
} else {
    let ketQua = tinhTong(x, n1);
    console.log(`Tổng s(${n1}) = ${ketQua}`);
}

// bài3
function tinhGiaiThua(n) {
    if (n === 0 || n === 1) {
        return 1;
    } else {
        return n * tinhGiaiThua(n - 1);
    }
}

let n2 = prompt("Nhập vào giá trị n2:");

n2 = parseInt(n2);

if (Number.isInteger(n2) && n2 >= 0) {
    const giaiThua = tinhGiaiThua(n2);
    console.log("Giai thừa của " + n2 + " là: " + giaiThua);
} else {
    console.log("Vui lòng nhập một số nguyên không âm.");
}

// bai4
document.getElementById('divBtn').addEventListener('click', function() {
    for (let i = 1; i <= 10; i++) {
        let div = document.createElement('div');
        div.classList.add('box');

        if (i % 2 === 0) {
            div.classList.add('red');
        } else {
            div.classList.add('skyblue');
        }

        document.body.appendChild(div);
    }
});

// bai5
document.getElementById('Button').addEventListener('click', function() {
    const inputNumber = document.getElementById('inputNumber').value;

    if (inputNumber !== "") {
      const primes = findPrimes(inputNumber);
      alert("Các số nguyên tố từ 1 đến " + inputNumber + " là: " + primes.join(", "));
    } else {
      alert("Vui lòng nhập một số.");
    }
  });

  // Hàm kiểm tra số nguyên tố
  function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
        return false;
      }
    }
    return true;
  }

  // Hàm tìm các số nguyên tố từ 1 đến n
  function findPrimes(n) {
    const primes = [];
    for (let i = 2; i <= n; i++) {
      if (isPrime(i)) {
        primes.push(i);
      }
    }
    return primes;
  }
