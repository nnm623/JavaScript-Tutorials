// var message; //
// message = "Сообщение";

// var myNumber = 10;
// var myString = "Привет,Уася!";
// var myBoolean = true; // false
// var myNull = null;
// var myUndefiend = undefined;


//NUM

// var result = 40 + 10;
// console.log(result + myNumber);
// console.log(result - myNumber);
// console.log(result * myNumber);
// console.log(result / myNumber);
// myNumber = myNumber * 10; // myNumber *= 10; myNumber++--
// console.log(myNumber);
// console.log(Math.round(5.45));
// console.log(Math.ceil(5.45)); // Окургляет в большую сторону
// console.log(Math.floor(5.45));// Округляет в меньшую сторону


// var newNumber = 2.437;
// console.log(newNumber.toFixed(1));//(Кол.во знаков после точки)

//STRINGS

// console.log("40" + myNumber);
// console.log(myString + " как дела?");
// console.log(myString.toLowerCase()) // меняет регистр букв на нижний
// console.log(myString.toUpperCase()) // меняет буквы на заглавные

//MASSIVE

// var names = ["Вася","Петя","Женя"]; // [0.1.2]
// console.log(names[1].toUpperCase());

// names[0] = "Маша";

// console.log(names[0]);

// names.push("Света");
// console.log(names[3]);

// IF/ELSE

// if ("Вася" !== "Петя" && myNumber > 20) {
// 	console.log("Условие выполнилось");
// } // &&(или) ||(или)

// if (myNumber < 20) {
// 	console.log("Число меньше 20");
// } else {
// 	console.log("Число больше 20");
// }

// CICLES

// for (var i = 0; i <=10; i++) {

// 	if (i == 5) {
// 		continue;
// 	}
// 	console.log(i);

// }

// for (var j = 0; j < names.length; j++) {
// 	console.log(names[j]);
// }

// WHILE

// var i = 0;
// while (i < 10) {
// 	console.log(i);
// 	i++;
// }

// FUNCTION

// function sum(x, y) {
// 	return x + y;
// }

// var result = sum(10,59);

// console.log(sum(10,59));

// OBJECTS

// var myObject = {
// 	name: "Уася",
// 	surname: "Петрович",
// 	age: 25,
// 	getFullName: function() {
// 		return this.name +" "+ this.surname;
// 	}

// };

// console.log(myObject.name);
// console.log(myObject.getFullName());

// var cotik = function (homManyTimes) {
// 	for (var i = 0; i<homManyTimes; i++){
// 		console.log(i+"=^_^=");
// 	}
// }

// cotik(12);

// var present = 8;
// var children = 2+2;
// console.log(present/children);


// var stork = 20;
// ++stork; // Инкремент
// stork++;
// stork;

// --stork; // Декремент
// sotrk--;
// stork;

// var x = 10;

// x += 10;

// x -=3;

// console.log(x);

// var night = false;
// var eat = true;
// var soap = false;
// var shampoo = true;
// var goToWork = !night && eat && (soap || shampoo);
// console.log(goToWork);

// var age = 20;
// var sell = 18;
 
//  age >= sell;

//  var child = 10;
//  var bicycle = 2;

//  child <= bicycle;


// var Fruits = ["lemon","lime","orange","apple",]
// Fruits.pop();
// var FruFru = Fruits.pop();
// console.log(Fruits);
// Fruits.unshift(FruFru);

// Fruits.shift();
// var = FavFru = Fruits.shift();
// Fruits.push(FavFru);
// console.log(Fruits);

// var animals = ["Dog","Cat","Fox"];
// var fish = ["Shark","Dolphin","Salmon"];
// var insects = ["Roach","Dragonfly"];
// var birds = ["Eagle","Sparrow","Hawk"];
// var bbq = animals.concat(fish,insects,birds);
// console.log(bbq);

// var cveta = ["red","blue","black"];
// var cveta2 = cveta.join("*");
// console.log(colors.indexOf("red"));
// var colors2 =["green","silver","yellow",];

// console.log(cveta2);

// var TimeTravel = [];

// TimeTravel.push("2019");
// TimeTravel.push("2018");
// TimeTravel.push("2017");
// TimeTravel.push("2016");
// TimeTravel.push("2015");
// TimeTravel.push("2014");
// TimeTravel.push("2013");
// TimeTravel.push("2012");
// TimeTravel.push("2011");

// TimeTravel.pop();
// TimeTravel.pop();
// TimeTravel.pop();
// TimeTravel.pop();
// TimeTravel.pop();

//RANDOMIZER

// var prediction = ["not today bratha","you will die lol","today is your lucky day baby","life sucks right?!","kekus maximus","not you will not get laid today bratha"];
// Math.random();
// var forecast = Math.floor(Math.random()*6);
// console.log(prediction[forecast]);
// console.log(prediction[Math.floor(Math.random()*6)]);

// console.log(prediction[Math.floor(Math.random()*6)]);

// var bodyPart = ["Рука","Голова","Нога"];
// var adjective = ["грязная","вонючая","волосатая"];
// var troll = ["корова","крыса","бяка","мартышка","солянка",];

// var bodyPart2 = bodyPart[Math.floor(Math.random()*3)];
// var adjective2 = adjective[Math.floor(Math.random()*3)];
// var troll2 = troll[Math.floor(Math.random()*5)];

// var oskorblenie = "У тебя " + bodyPart2 + " как " + adjective2 + " " + troll2 + "!";
// console.log(oskorblenie);

//KEY/VALUE/OBJECTS

// var Maria={
// 	"Eyes":"Green",
// 	"Age":24,
// 	"Favorite drink":"Tea"
// 	 };

// console.log(Maria["Eyes"]);
// console.log(Maria.Age); // точечная натация
// console.log(Object.keys(Maria)); // вызов всех характеристик 

// var x = {};

// x["Eyes"] = "Green";
// x["Age"] = 24;
// x["Favorite drink"] = "Tea";

// console.log(x);

// var y = {};

// y.Eyes = "Green";
// y.Age = 24;
// y.FavoriteDrink = "Tea";

// console.log(y);

// var team = [
// 	{Name:"Maria",Eyes:"Green",Age:24},
// 	{Name:"Vasya",Eyes:"Blue",Age:18}, 
// 	{Name:"Sasha",Eyes:"Brown",Age:29}
// 	]

// console.log(team[1]);
// console.log(team[1]["Name"]);
// console.log(team[1].Age);

// var Maria = {Name:"Maria",Eyes:"Green",Age:24,Weekends:[2,4,5,11]};
// var Vasya = {Name:"Maria",Eyes:"Green",Age:21,Weekends:[2,4,5,11]};
// var Sasha = {Name:"Maria",Eyes:"Green",Age:29,Weekends:[2,4,5,11]};

// var Friends = [Maria,Vasya,Sasha];
// console.log(Friends[1].Weekends[2]);


// var money = {};
// money["Olga"] = 1000;
// money ["Dmitry"] = 5000;
// money["Olga"] +=3000;
// money["Dmitry"] = money ["Dmitry"] + 3000;

// var books = {
// 	"Гарри Поттер и Философский Камень":{
// 	Pages:300,
// 	Author:["Джоан Роулинг"],
// 	Format:["Hard Cover"],
//     },

// 	"Книга 2":{
// 		Pages:200,
// 		Author:["lulz master","lelz master"],
// 		Format:["Soft Cover"],
// 	}

// };
// var booksPotter = books["Гарри Поттер и Философский Камень"];
// console.log(booksPotter.Pages);

// var twilight = {
// 	Pages:400,
// 	Author:["Стефани Майер"],
// 	Format:"Hard Cover"

// }

// books["Сумерки Часть 1"] = twilight;

// console.log(Object.keys(books));

// var name = "Victor";
// console.log("Hello, " + name);
// if ( name.length > 5){
// 	console.log("Ебать че за длинное имя");
// } else {
// 	console.log("Ебать че за короткое имя");

// }

// var CaliforniaRolls = false;
// var PhiladelphiaROlls = true;
// var Funchoz = true;

// if(CaliforniaRolls){
// 	console.log("Я буду роллы Калифорния");
// }

// else if (PhiladelphiaROlls){
// 	console.log("Правда?Тогда принестие мне роллы Филаделфия");
// }

// else if (Funchoz){
// 	console.log("Где моя Фунчоза еба");
// }

// else {
// 	console.log("Писец,ну тогда дайте рис");
// }

// var name = "Shavo";
// if(name == "Shavo") {
// 	console.log("Hello Master");
// }
// else{
// 	console.log("who the fuck are you?");
// }


// while(money<100){
// 	console.log("Сколько денег: " + money + "!");
// 	money++;
// }

// console.log("Dayum i am rich");

// for(var money = 0; money < 101; money++){
// 	console.log("So this is how much you got: " + money);
// }

// console.log("Dayum i am rich");

// var coffee = 4;
// for(var x = 0;x < coffee;x++){
// 	console.log("Кофе");
// }

// var city = ["Moscow","New York","Tokyo","Seul"];
// for (var x = 0; x < city.length; x++){
// 	console.log("luv city " + city[x] + "!");
// }

// for(var x = 2; x < 10000; x = x * 2){
// 	console.log(x);
// }

// while (fruits.length < 3){
// 	var fruits = ["Apple","Orange","Banana"]
// 	Fruits ="Juicy " + fruits[0];
// 	console.log(Fruits);
// }


// var n=prompt("Enter the number");
// n=parseInt(n);
// if ((n%2==0)&&(n!=2))
//      document.write("composite number");
// else if (n==2)
//      document.write("prime number");
// else{
//      k=Math.round(Math.sqrt(n));
//      flag = false; 
//      for(i=2; i<k+1; i++)
//         if(n%i==0)
//         {
//           document.write("composite number");
//           flag = true;
//           break;
//          }
            
//      if (flag == false)
//        document.write("prime number");
// }

// var name = prompt("Как тебя зовут?");
// console.log("Привет, " + name);
// var  likeOrange = confirm("Тебе нравяться апельсины?");
// if(likeOrange){
// 	console.log("Эти фрукты очень вкусные!");
// }
// else{
// 	console.log("Мне тоже больше нравяться бананы!");
// }

//     var words = [
//       "яблоко",
//       "арбуз",
//       "программа",
//       "оладушек"
//     ];
//   var word = words[Math.floor(Math.random() * words.length)];
//   var answerArray = [];
//   for (var i = 0; i < word.length; i++) {
//     answerArray[i] = "_";
//   }
//   var remainingLetters = word.length;
//   while (remainingLetters > 0) {
//     alert(answerArray.join(" "));
//       var guess = prompt("Угадайте букву, или нажмите Отмена для выхода из игры.");
//       if (guess === null) {
//             break;
//           } else if (guess.length !== 1) {
//             alert("Пожалуйста, введите одиночную букву.");
//           } else {
//             for (var j = 0; j < word.length; j++) {
//               if (word[j] === guess) {
//                 answerArray[j] = guess;
//                 remainingLetters--;
// } }
// }

// }
//         alert(answerArray.join(" "));
//         alert("Отлично! Было загадано слово " + word);

// var sayHelloTo = function(name){
// 	console.log("Привет " + name + "!" );
// };
 // var kittens = function(HowManySmiles){
 // 	for(var i = 0; < HowManySmiles; i++){
 // 		console.log(i + "=^.^=");
 // 	}
 // }

 // var printLotSmiles = function(HowManySmiles,whatToDraw){
 // 	for(var i = 0; i < HowManySmiles; i++){
 // 		console.log(i + "" + whatToDraw);
 // 	}
 // };

 // var stork = function (number){
 // 	return number * 2;
 // };
 // 
// var chooseRandomWords = function (words){
// 	return words[Math.floor(Math.random()* words.length)];
// }
// var bodyPart = ["Рука","Голова","Нога"];
// var adjective = ["грязная","вонючая","волосатая"];
// var troll = ["корова","крыса","бяка","мартышка","солянка",];
// var oskorblenie = "У тебя " + chooseRandomWords(bodyPart) + " как " + chooseRandomWords(adjective) + " " + chooseRandomWords(troll) + "!";
// console.log(oskorblenie);

prime(55);

function prime(num) {

  if (typeof num !== "number")
 	document.write("PLEASE ENTER NUMBER");

  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      document.write("this number " + num + " is not a prime number");
      return false;
    }

    document.write("this number " + num + " is a prime number");
    return true;
  }
}