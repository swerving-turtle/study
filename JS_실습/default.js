//document.write("Hello!");
//document.write("<h1>Welcome to JS Program</h1>");
//document.write("<h2>Welcome to JS Program</h2");

//console.log("Welcome JS Program");
//console.info("Welcome JS Program");
//console.warn("Welcome JS Program");
//console.error("Welcome JS Program");

//alert("Welcome JS Program");
//var a = prompt("Welcome JS Program");
//console.log(a);

//console.log(typeof 123);
//console.log(typeof 123.5);
//console.log(typeof "123");
//console.log(typeof true);
//console.log(typeof false);

//var car;
//console.log(car);
//var car = "";
//console.log(typeof car)
//
//var person = {firstName: "John", lastName: "Doe", age: 50, eyeColor: "blue"};
//console.log(person);
//person = null;
//console.log(typeof person);

//var name = "이승훈";
//var age = 29;
//var cgpa = 3.92;
//var lineBreak = "<br/>";
//
//document.write("이름: " + name + lineBreak);
//document.write("나이: " + age + lineBreak);
//document.write("lineBreak: " + cgpa + lineBreak);

//var lastName = "홍";
//var firstName = "길동";
//var fullName = lastName + firstName;
//
//console.log(fullName);
//console.log("Today is" + "a" + "beautiful day");
//console.log("My name is " + fullName);
//
//var num1 = 20;
//var num2 = 30;
//var sum = num1 + num2;
//console.log(num1 + ' + ' + num2 + " = " + sum);

//var text = prompt("Enter your name: ")
//document.write("Your name: " + text + "<br/>");
//
//var len = text.length;
//document.write("Number of characters: " + len + "<br/>");
//
//document.write(text.charAt(2) + "<br/>");
//
//document.write(text.toUpperCase() + "<br/>");
//document.write(text.toLowerCase() + "<br/>");
//
//var text1 = "hi ";
//var text2 = "bye";
//var text3 = text1.concat(text2);
//document.write(text3 + "<br/>");
//document.write(text4 + "<br/>");
//
//var text4 = "hello";
//var result = text4.slice(0,2);
//document.write(result + "<br/>");

//var num = "20";
//num = num.toString();
//console.log(typeof num);
//
//var number = 20;
//console.log(typeof number);
//
//number = number.toString();
//console.log(number, typeof number);
//
//var x = 2.56789;
//console.log(x.toFixed(1), typeof x.toFixed(1));
//console.log(x.toFixed(2));
//
//console.log(x.toPrecision(1), typeof x.toPrecision(1));
//console.log(x.toPrecision(2));
//
//console.log(Number(true));
//console.log(Number(false));
//console.log(Number(" 10"));
//console.log(Number(" 10 "));
//console.log(Number("10.25"));
//
//var num1 = parseInt(prompt("Enter first number: "));
//var num2 = parseInt(prompt("Enter second number: "));
//var lineBreak = "<br/>";
//var result = num1 + num2;
//document.write("the sum is : " + result + lineBreak);
//
//result = num1 - num2;
//document.write("the sub is : " + result + lineBreak);
//
//result = num1 * num2;
//document.write("the multiplication is : " + result + lineBreak);
//
//result = num1 / num2;
//document.write("the division is : " + result + lineBreak);
//
//result = num1 % num2;
//document.write("the remainder is : " + result + lineBreak);

//var base = parseFloat(prompt("밑변 : "));
//var height = parseFloat(prompt("높이 : "));
//result = base * height * 0.5;
//document.write("삼각형의 넓이: " + result + "<br/>");

//var cels = parseFloat(prompt("섭씨 입력: "));
//var farn = cels * (9 / 5) + 32;
//document.write("화씨: " + farn);

//var num1 = 20;
//var num2 = 10;
//var num3 = "10";
//var num4 = 20;
//var num5 = 15;
//
//console.log('일반 크기비교')
//console.log(num1 > num2, num1, '>', num2);
//console.log(num1 >= num2, num1, '>=', num2);
//console.log(num1 < num2, num1, '<', num2);
//console.log(num1 <= num2, num1, '<=', num2);
//console.log('같은지 여부')
//console.log(num1 == num4, num1, '==', num4);
//console.log(num1 != num4, num1, '!=', num4);
//console.log('===')
//console.log(num1 === num3, num1, '===', num3);
//console.log(num2 === num3, num2, '===', num3);
//console.log(num2 == num3, num2, '==', num3);
//
//console.log('num1 > num2 && num1 > num5: ', num1 > num2 && num1 < num5);
//console.log('num1 > num2 || num1 > num5: ', num1 > num2 || num1 > num5);

//var num1 = parseInt(prompt('첫번째 숫자 입력 : '));
//var num2 = parseInt(prompt('두번째 숫자 입력 : '));
//
//if(num1 > num2) {
//    console.log("큰 수는 num1 : " + num1);
//}
//
//if(num1 < num2) {
//    console.log('큰 수는 num2 : ' + num2);
//}
//
//if(num1 == num2) {
//    console.log("같은 수");
//}
//
//if(num1 > num2) {
//    console.log("큰 수 num1:" + num1);
//} else if (num1 < num2) {
//    console.log("큰 수 num2:" + num2);
//} else if (num1 == num2) {
//    console.log("같은 수");
//}
//
//if(num1 > num2) {
//    console.log("큰 수 num1:" + num1);
//} else if (num1 < num2) {
//    console.log("큰 수 num2:" + num2);
//} else  {
//    console.log("같은 수");
//}

//var letter = prompt("Enter a letter : ");
//
//letter = letter.toLowerCase();
//
//if(letter == 'a' || letter == 'e' || letter == 'i' || letter == 'o' || letter == 'u') {
//    console.log('Vowel');
//} else {
//    console.log('Consonant');
//}

//const digit = parseInt(prompt("숫자 입력: "));
//switch (digit){
//    case 0:
//        document.write('Zero');
//        break;
//    case 1:
//        document.write('One');
//        break;
//    case 2:
//        document.write('Two');
//        break;
//    case 3:
//        document.write('Three');
//        break;
//    case 4:
//        document.write('Four');
//        break;
//    case 5:
//        document.write('Five');
//        break;
//    case 6:
//        document.write('Six');
//        break;
//    case 7:
//        document.write('Seven');
//        break;
//    case 8:
//        document.write('Eight');
//        break;
//    case 9:
//        document.write('Nine');
//        break;
//    default:
//        document.write("Not a digit");
//}

var date = new Date();
console.log(date);

var year = date.getFullYear();
console.log(year);

var month = date.getMonth();
console.log(month)

var currentDate = date.getDate();
console.log(currentDate);

var currentDay = date.getDay();
console.log(currentDay);

var currentHour = date.getHours();
console.log(currentHour);

var currentMinutes = date.getMinutes();
console.log(currentMinutes);