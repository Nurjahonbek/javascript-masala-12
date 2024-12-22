// 1) Funksiya yozing, u berilgan sonni faktorialini hisoblaydi. Agar funksiyaga musbat son emas (masalan, manfiy son yoki satr) uzatilsa, throw yordamida xato tashlash kerak. Xato xabarida quyidagi mazmun bo‘lishi kerak:

// function faktor(n){
//     if(n < 0){
//         throw new Error("Faktorialni hisoblash uchun musbat son kerak!")
//     }
//     return n ? n * faktor(n -1) : 1
// }
// try {
//     console.log('javob', faktor(7));
    
// } catch (error) {
//     console.log('xatolik' , error.message);
    
// }

// 1)Funksiya yozing, massivdagi barcha juft sonlarni topib, ularning yig‘indisini qaytaruvchi.

// function yegindi(n){
//     let sum = 0;
//     for(let son of n){
//         if(son % 2 == 0){
//             sum += son 
//         }
//     }
//     return sum;
// }
// console.log(yegindi([1,2,3,4,5,6,7,8,10]));

// 2)Funksiya yozing, massivdan faqat toq sonlarni olib tashlaydigan va yangi massiv qaytaradigan.

// function massiv(n){
//     return n.filter(value => value % 2 == 0)
// }
// console.log(massiv([1,23,4,5,67,88,65]));

// 3)Funksiya yozing, massiv ichida nechta unikal element borligini aniqlaydigan.

// function unikal(n){
//     let unical = []
//     for(let x of n){
//         if(!unical.includes(x)){
//             unical.push(x)
//         }
//     }
//     return  unical,length;
// }
// console.log(unikal([1,2,3,4,5,6,7,8,9]));

// 4)Funksiya yozing, massivdagi eng katta va eng kichik sonlar o‘rtasidagi farqni topadigan.

    // function farq(n){
    //     let max = Math.max(...n)
    //     let min = Math.min(...n)
    //     return max - min
    // }
    // console.log(farq([1,23,45,65,34]));

// 5)Funksiya yozing, massivning barcha elementlarini o‘zgartirmasdan teskari tartibda qaytaradigan

// function reverce(n){
//     return [...n].reverse()
// }
// console.log(reverce([1,2,3,5,6]));

// 6)Funksiya yozing, massivdan berilgan qiymatning nechta marta uchrashganini topadigan.

// function element(massiv, son){
//     return massiv.filter(x => x ==son).length
// }
// console.log(element([1,2,3,4,5,2,3],3));

// 7)Funksiya yozing, massivdagi barcha satr elementlarini uzunligi bo‘yicha o‘sish tartibida tartiblash uchun.

// function massiv(n){
//     return n.slice().sort((a, b) => a.length - b.length)
// }
// console.log(['olma', 'anor', 'nok', 'behi']);

// 9)Funksiya yozing, massiv ichidan faqat musbat sonlarni yig‘ib yangi massiv yaratadigan

// function massiv(n){
//     return n.filter(x => x > 0)
// }
// console.log(massiv([1,-2,3,4,-5,6,-7]));

// 10)Funksiya yozing, massiv ichidagi sonlarning o‘rtacha qiymatini hisoblab beradigan.

// function massiv(n){
//     let sum = n.reduce((a, b) => a + b , 0)
//     return sum / n.length
// }
// console.log(massiv([1,2,34,5,6,7,9]));

// 11)Funksiya yozing, massiv ichidagi barcha elementlarni ikki marta takrorlab qaytaradigan.

// function massiv(n){
//     return n.concat(n)
// }
// console.log(massiv([1,2,3,4,5]));

// 12)Funksiya yozing, massiv ichidagi satr elementlarning birinchi harfini katta harfga aylantiradigan.

// function massiv(n){
//     return n.map(str =>
//         str.charAt(0).toUpperCase() + str.slice(1)
//     )
// }
// console.log(massiv(['salom', 'hello']));

// 14)Funksiya yozing, massivdan eng uzun va eng qisqa satrlarni topib, yangi massiv qaytaradigan.

// function massiv(n){
//     let max = n.reduce((a, b) => a.length >= b.length ? a : b)
//     let min = n.reduce((a, b) => a.length <= b.length ? a : b)
//     return [max, min]
// }
// console.log(massiv(['olma', 'apelsin','gilos']));

// 15)Funksiya yozing, massivdagi barcha elementlarni stringga aylantiruvchi (raqamlar uchun)

// function massiv(n){
//     return n.map(x => String(x))
// }
// console.log(massiv([1,2,3,4,5]));

// 16)Funksiya yozing, satr ichida nechta unli harf borligini qaytaradigan.

// function massiv(str){
//     let unli = ['aioueAIOUE']
//     return str.split('').filter(value => unli.includes(value)).length
// }
// console.log(massiv('hello'));

// 17)Funksiya yozing, berilgan satrdan barcha probellarni olib tashlaydigan va yangi satr qaytaradigan.

// function massiv(n){
//     return n.replace(/\s+/g, '')
// }
// console.log(massiv('Salom Ismingiz Nima'));

// 18)Funksiya yozing, satr ichidagi barcha so‘zlarni o‘zaro joyini almashtiradigan.

// function massiv(n){
//     return n.split('').reverse().join(' ')
// }
// console.log(massiv('Salom nima gap'));

// 19)Funksiya yozing, satr ichidagi so‘zlarni uzunligi bo‘yicha tartiblaydigan.

// function massiv(n){
//     return n.split('').sort((a, b) => a.length - b.length).join(' ')
// }
// console.log(massiv('Salom nima gap'));

// 21)Funksiya yozing, satr ichidagi barcha kichik harflarni katta harfga aylantiradigan va aksincha.

// function massiv(n){
//     return n.split('').map(value => value == value.toUpperCase() ? value.toLowerCase() : value.toUpperCase()).join(' ')
// }
// console.log(massiv('Nima Gap'));

// 22)Funksiya yozing, satrdagi barcha raqamlarni yig‘indisini hisoblaydigan.

// function massiv(n){
//     return n.split('').filter(value => !isNaN(value) && value != '').reduce((a, b) => a + Number(b), 0 )
// }
// console.log(massiv('nima gap 123 bolalar4'));

// 24)Funksiya yozing, satrdan barcha belgilarni o‘z o‘rniga teskari tartibda chiqaradigan.

// function massiv(n){
//     return n.split('').reverse().join('')
// }
// console.log(massiv('salom'));

// 25)Funksiya yozing, satr ichidagi barcha so‘zlarning birinchi harfini katta harfga o‘zgartiradigan.

// function massiv(n){
//     return n.split(' ').map(value => value.charAt(0).toUpperCase() + value.slice(1))
// }
// console.log(massiv('salom bollar yaxsimisizlar'));

// 26)Funksiya yozing, satrdan barcha so‘zlarni massivga ajratadigan va so‘zlarni alfavit tartibida qaytaradigan.

// function massiv(n){
//     return n.split(' ').filter(value => value).sort()
// }
// console.log(massiv('bollar nima gap'));

// 27)Funksiya yozing, massiv ichidagi barcha so‘zlarni birlashtirib, yagona satr yaratadigan.

// function massiv(n){
//     return n.join(' ')
// }
// console.log(massiv(['salom', 'yaxshi', 'kun']));

// 28)Funksiya yozing, massiv ichidagi satrlardan uzunligi bo‘yicha eng katta bo‘lganini qaytaradigan.

// function massiv(n){
//     return n.reduce((a, b) => a.length < b.lengh ? a : b , '')
// }
// console.log(massiv(['bollar', 'vazifa', 'bajardilarmi']));

// 29)Funksiya yozing, massiv ichidagi har bir elementni teskari qilib, yangi massiv qaytaradigan.

// function massiv(n){
//     return n.map(value => value.split('').reverse().join(''))
// }
// console.log(massiv(['Apple', 'Samsung', 'Huawei']));

// 30)Funksiya yozing, satr ichidagi barcha takrorlanmagan so‘zlarni ajratib, massivga joylashtiradigan.

// function massiv(n){
//     let soz = n.split(' ')
//     let res = []
//     for(let x of soz){
//         if(!res.includes(x)){
//             res.push(x)
//         }
//     }
//     return res;
// }
// console.log(massiv('kimda bor kimda yoq '));
