// Exercise #2: Promotion Conditions

// Start coding here
let lastMonthPaidMoreThan4000 = true;
let isWeekday = true;
let hasBoughtProductFromITCategory = true ;
let hasAttendedDiscountEvent =true ;
let isPlatinum = true;

let hasPromotion =(lastMonthPaidMoreThan4000 ==true && isWeekday ==true && !hasBoughtProductFromITCategory ==false && !hasAttendedDiscountEvent == false) || (isPlatinum == true);//เงื่อนไขส่วนลด
console.log(hasPromotion); //เงื่อนไขส่วนลด
hasPromotion= (lastMonthPaidMoreThan4000 == true && isWeekday ==true && !hasBoughtProductFromITCategory ==false && hasAttendedDiscountEvent ==false) || (!isPlatinum ==true)//john
console.log(hasPromotion); //john ไม่ได้ส่วนลด