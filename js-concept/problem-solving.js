// 1. তোমাকে যদি বলি একটা স্ট্রিং টাইপের ভেরিয়েবল লিখো। একটা বুলিয়ান টাইপের ভেরিয়েবল লিখো বা একটা নাম্বার টাইপের ভেরিয়েবল লিখো। সেটা কি তুমি লিখতে পারবে? যদি পারো তাহলে ভিজুয়াল ষ্টুডিও কোড খুলে লিখে ফেলো। 
// var str = "Hello";
// var isStr = true;
// var number = 5;

// ২. তুমি কি জানো কখন let দিয়ে ভেরিয়েবল লিখতে হয়ে আর কখন const দিয়ে ভেরিয়েবল লিখতে হয়। যদি লিখতে পারো তাহলে লিখে ফেলো। এবং যেই যেটা দিয়ে ভেরিয়েবল লিখলে আবার সেটা চেইঞ্জ করা যায়। তাহলে যেটা দিয়ে ভেরিয়েবল ডিক্লেয়ার করলে চেইঞ্জ করা যায়। সেটার মান চেইঞ্জ করে নাও । অর্থাৎ জাস্ট দুইটা ভেরিয়েবল ডিক্লেয়ার করবে let এবং const দিয়ে। তারপর যেকোন একটার ভ্যালু চেইঞ্জ করবে। এই let এবং const মাথা গরম করে দিলে টেনশন নিয়ে না। সামনের মাইলস্টোন এর পরের মাইলস্টোন এ এইটা নিয়ে আরো ডিসকাস করা হবে। 
 
// let str = "Hello";
// str = "Hello Mr.";
// console.log(str);
// const greatIngs = "Hello";
// We can't declare const const more than one when it is variable

// ৩. দুইটা ভেরিয়েবল এর মধ্যে যোগ, বিয়োগ, গুণ, ভাগ কিভাবে করতে হয় সেটা কি জানো। অর্থাৎ তুমি কি +, -, *, /, %এইগুলার ব্যবহার জানো। তাহলে নাম্বার টাইপের দুইটা ভেরিয়েবল লিখো তারপর তাদের যোগ করে সেটার মান আরেকটা ভেরিয়েবল এ রাখো। একইভাবে ওই দুইটা ভেরিয়েবল এর মধ্যে বিয়োগ, গুন, ভাগ এবং ভাগশেষ বের করো। 

// var num1 = 5;
// var num2 = 6;
// var totalSum = num1 + num2;
// var totalMinus = num1 - num2;
// var totalMaltiply = num1 * num2;
// var totalDivided = num1 / num2;
// var totalRemainder = num1 % num2;
// console.log(totalSum);
// console.log(totalMinus);
// console.log(totalMaltiply);
// console.log(totalDivided);
// console.log(totalRemainder);

// ৪. তুমি কি দুইটা ভেরিয়েবল এরমধ্যে তুলনা করতে পারো। কম্পারিজন করতে পারো। যে দুইটা ভেরিয়েবল এর মধ্যে প্রথমটা সেকেন্ডটা এর চাইতে ছোট, বড়, অসমান, সমান , ছোট বা সমান, বড় বা সমান। এইগুলা চেক করতে পারো। অর্থাৎ <, >, ==, !=, <=, >= চিহ্নগুলা ব্যবহার করতে পারো। তাহলে দুইটা সংখ্যা টাইপের ভেরিয়েবল ডিক্লেয়ার করে তাদেরকে এই ছয়ভাবে তুলনা করে কোড লিখে ফেলো।

// var num1 = 3;
// var num2 = 3;
// var num3 = 4;
// var num4 = "3";
// var str1 = "Hi I'm string one";
// var str2 = "Hi I'm string two";
// var strtem = "Hi I'm string one";

// if (num1 === num2) {
//     console.log("They are equal and type is same as well");
// }
// if (num1 == num4) {
//     console.log("They are equal But type isn't same");
// }
// if (num1 <= num2) {
//     console.log("num1 is equel to num2 | num1 is great than num2");
// }
// if (num1 <= num3) {
//     console.log("num1 is equel to num3 | num1 is less than num3");
// }
// if (num1 != num3) {
//     console.log("num1 is not equal to num3");
// }

// ৫. তোমার যদি দুইটা শর্ত পূরণ করতে বলে। এবং দুইটা শর্তের মধ্যে দুইটাই পূরণ করতে হবে। তাহলে তুমি কি সেটা চেক করতে পারবে? একইভাবে যদি বলে তুমি দুইটা শর্তের যেকোন একটা পূরণ করতে পারবে। অর্থাৎ তুমি && এবং || এর ব্যবহার করতে পারো কিনা। যদি পারো তাহলে নিজে নিজে এই রকমের কোড লিখে ফেলো। 

// var num1 = 3;
// var num2 = 3;
// var num3 = 4;
// var num4 = "3";
// var str1 = "Hi I'm string one";
// var str2 = "Hi I'm string two";
// var strtem = "Hi I'm string one";

// if (num1 >= num2 && num1 == num4){
//     console.log("All the parameters are true")
// }
// if (num1 >= num2 | num1 === num4){
//     console.log("Any of the parameters are true")
// }
// ৬. তুমি কি একটা শর্ত পালন করলে একটা কিছু করবে। শর্ত পূরণ না করলে অন্য কিছু একটা করবে এমন কোড লিখতে পারবে। অর্থাৎ তুমি কি if-else এর কোড লিখতে পারবে। পারলে একটা কোড লিখে ফেলো 

// var num1 = 3;
// var num2 = 3;
// if(num1 === num2) {
//     console.log("They are equal and types are same as well");
// } else {
//     console.log("they are not equal or the types are not same");
// }
// ৭. তোমাকে যদি বলে একটা while লুপ দিয়ে ৭ থেকে ১৯ পর্যন্ত যতগুলা বিজোড় সংখ্যা আছে সেগুলা দেখাতে। তুমি কি সেটা দেখাতে পারবে? পারলে সেই কোড লিখে ফেলো। 
// let i = 9;
//  while(i<=19){
//     const index = i; 
//     const odd = index - 2;
//     console.log("This is index: ", index, "this is odd: ", odd);
//     i++
//  }



// ৮. তোমাকে যদি বলা হয় তুমি একটা array ডিক্লেয়ার করবে। এবং সেটার মধ্যে কয়টা উপাদান আছে সেটা বের করবে হবে। সেই array এর এর মধ্যে চতুর্থ পজিশন এর উপাদান চেইঞ্জ করতে হবে। array এর মধ্যে দুইটা উপাদান যোগ করতে হবে। এবং একটা উপাদান কে বের করে দিতে হবে। তুমি কি সেটা করতে পারবে। 

// var arr = [5, 6, 7, 8, 10, 12];
// console.log(arr);

// length
// const length = arr.length;
// console.log(length);

// array sum
// var sum = arr[2] + arr[3];
// console.log(sum);

// console.log(arr);

// array pop
// arr.pop();
// console.log(arr)



// ৯. তুমি কি একটা ফর লুপ দিয়ে কোন একটা array এর সবগুলা উপাদানকে দেখাতে পারবে। সেটা রেগুলার for লুপ হোক বা for of হোক। হলে সেই স্টাইলে একটা কোড লিখে ফেলো। 




// ১০. তোমাকে যদি বলা হয়। একটা array এর মধ্যে ৮০ এর চাইতে বড় সংখ্যা থাকলে সেগুলাকে console log করে দেখাতে সেটা কি তুমি পারবে? তাহলে তুমি সেই কোড করে ফেলো 



// ১১. তিনটা সংখ্যার গুনফল বের করে ফাইনাল রেজাল্ট আউটপুট হিসেবে রিটার্ন করতে হবে। তুমি কি সেই কোড লিখতে পারবে। যদি পারো তাহলে সেই কোড লিখে ফেলো। 
// function multiplyFanc(a, b, c) {
//     let multiply = a * b* c;
//     return multiply;
// }
// const fun = multiplyFanc(2,2,2);
// console.log(fun);
// ১২. একটা অবজেক্ট ডিক্লেয়ার করবে। সেটাতে তিনটা প্রপার্টি থাকবে। এবং কোন একটা প্রোপার্টি এর মান চেইঞ্জ করবা। 
const obs = {
    name: "ims",
    age: 24,
    village: "Madaripu"
}
obs.age = 26;
console.log(obs)