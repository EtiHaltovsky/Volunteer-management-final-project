
// const { Driver, driverModel } = require('../models/tablesModel');
// const { Travel, travelModel } = require('../models/tablesModel');
// const { Shift, shiftModel } = require('../models/tablesModel');
// const { Line, lineModel } = require('../models/tablesModel');

// const enterToAvlTree = require('./EnterToAvlTree')

// const AddDetailsFromExcel = async (obj) => {
//     for (const result of obj) {
//         const ratingsData = new ratingsdModel({
//             volunteerId: result['מספר מתנדב'],
//             organization: result['האם אתה משתייך לארגון מתנדבים באופן קבוע'],
//             selectedHospital: result['באיזה בתי חולים הינך מעונין להתנדב'],
//             department: result['באיזה מחלקות הינך מעונין להתנדב'],
//             anotherLanguage: result[''],
//             preferredHours: result[''],
//             preferredDays: result[''],

//         });
//         const preferenceData = new preferenceModel({
//             volunteerId: result['מספר מתנדב'],
//             selectedLanguage: result['כיצד אתה דובר אנגלית'],
//             firstAidKnowledge: result['האם יש לך ידע בעזרה ראשונה'],
//             selectedCar: result['תיאור הרכב'],
//         });

//         try {
//             const findLineByNumOfLine = await ratings.findOne({ volunteerId: result['מספר מתנדב'] });
//             console.log(findLineByNumOfLine);
//             if (!findLineByNumOfLine) {
//                 const line = new Line(lineData);
//                 const saveLine = await line.save();
//                 console.log(saveLine);
//             } else {
//                 // Perform actions if the line already exists
//             }
//             const findTravellByIdTravel = await preference.findOne({ volunteerId: result['מספר מתנדב'] });
//             console.log(findTravellByIdTravel);
//             if (!findTravellByIdTravel) {
//                 const travel = new Travel(travelData);
//                 const saveTravel = await travel.save();
//                 console.log(saveTravel);
//             } else {
//                 // Perform actions if the line already exists
//             }
//         } catch (error) {
//             console.error('שגיאה בשמירה :', error);
//         }
//     }
//     //קריאה לפונקציה הבונה 2 עצי AVL
//     //ומכניסה לתוכם את זמני המשמרות
//     enterToAvlTree.addShiftsToBST();
// };


// module.exports = { AddDetailsFromExcel };


















// // const addDetails = async (obj) => {
// //     obj.forEach(async (result) => {
// //         const travelData = new travelModel({
// //             idTravel: result['מספר נסיעה'],
// //             numOfLine: result['מספר הקו'],
// //             idDriver: result['ת.ז. נהג'],
// //             timeOfExit: result['שעת יציאה'],
// //             amountOfTravels: result['כמות נוסעים'],
// //             dateOfTravels: result['תאריך נסיעה'],
// //             DoAddedNewTravel: false,

// //         });

// //         // console.log(travelData);
// //         const driverData = new driverModel({
// //             idDriver: result['ת.ז. נהג'],
// //             nameOfDriver: result['שם נהג'],
// //             password: result['סיסמא נהג'],
// //             phone: result['פלאפון נהג'],
// //             idShift: result['מספר משמרת'],

// //         });

// //         const lineData = new lineModel({
// //             numOfLine: result['מספר הקו'],
// //             addressOfStartingPoint: result['כתובת תחנת מוצא'],
// //             numOfStartingStation: result['מספר תחנת מוצא'],
// //             addressOfDestinationStation: result['כתובת תחנת יעד'],
// //             numOfDestiantionStation: result['מספר תחנת יעד'],
// //             EstimatedTravelTime: result['זמן נסיעה משוער'],

// //         });

// //         const shiftlData = new shiftModel({
// //             idShift: result['מספר משמרת'],
// //             idDriver: result['ת.ז. נהג'],
// //             beginOfshift: result['תחילת משמרת'],
// //             endOfshift: result['סיום משמרת'],
// //             dateOfShift: result['תאריך נסיעה'],
// //         });
// //         try {

// //             // בדיקה האם נהג קיים לפי תעודת הזהות
// //             // const existingDriver = await Driver.findOne(drive=>drive.idDriver==driverData.idDriver).exec();
// //             // console.log(driverData.idDriver);
// //             // if (existingDriver) {
// //             //   console.log('נהג קיים בטבלה');
// //             // } else {
// //             //   console.log('נהג לא קיים בטבלה');
// //             // }
// //             // console.log(result['מספר הקו']);
// //             // console.log({ numOfLine: result['מספר הקו'] });
// //             const findTravelByNumOfLine = await Line.findOne({ numOfLine: result['מספר הקו'] });
// //             console.log(findTravelByNumOfLine);
// //             if (!findTravelByNumOfLine) {
// //                 const line = new Line(lineData);
// //                 const saveLine = await line.save();
// //                 console.log(saveLine);
// //               } else {
// //                 // Perform actions if the line already exists
// //               }

// //             // const findTravelByNumOfLine = await Line.find({ numOfLine: result['מספר הקו'] });
// //             // console.log(findTravelByNumOfLine);
// //             // if (!findTravelByNumOfLine) {
// //             //     console.log('Line does not exist');
// //             // }
// //             // else {
// //             //     const line = new Line(lineData);
// //             //     const saveLine = await line.save();
// //             //     console.log(saveLine);
// //             // }
// //             // const travel = new Travel(travelData);
// //             // const saveTravel = await travel.save();
// //             // const driver = new Driver(driverData);
// //             // const savedDriver = await driver.save();
// //             // const shift = new Shift(shiftlData);
// //             // const saveShift = await shift.save();
// //             // console.log(savedDriver, saveLine, saveTravel, saveShift);

// //         } catch (error) {
// //             console.error('שגיאה בשמירה :', error);
// //         }
// //     });

// // }

