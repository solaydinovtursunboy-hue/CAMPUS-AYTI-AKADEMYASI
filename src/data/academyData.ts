import webDevImg from '../assets/images/course_web_dev_1795530646351.jpg';
import arduinoImg from '../assets/images/course_arduino_robotics_1795530646283.jpg';
import legoWedoImg from '../assets/images/course_lego_wedo_1795530647440.jpg';
import scratchImg from '../assets/images/course_scratch_coding_1795530648086.jpg';

export type CourseId = 'web-dev' | 'arduino' | 'lego-wedo' | 'scratch';

export interface CourseItem {
  id: CourseId;
  index: string;
  title: string;
  subtitle: string;
  description: string;
  ageGroup: string;
  ageCategory: 'kids' | 'teens';
  duration: string;
  schedule: string;
  techStack: string[];
  outcomes: string[];
  image: string;
  imageAlt: string;
}

export const ACADEMY_INFO = {
  name: 'Campus Ayti Academy',
  address: 'Andijon viloyati, Oltinkoʻl tumani, Katta pochta binosi yonida',
  postalCode: '171000',
  coordinates: '40.8012° N, 72.1645° E',
  phoneDisplay: '+998 97 234 03 01',
  phoneHref: 'tel:+998972340301',
  telegramHandle: '@Nursaid_inno',
  telegramUrl: 'https://t.me/Nursaid_inno',
  workingHours: 'Du–Sha: 08:30 – 19:00',
} as const;

export const COURSES: CourseItem[] = [
  {
    id: 'web-dev',
    index: '01',
    title: 'Web Dasturlash (HTML & CSS)',
    subtitle: 'Zamonaviy veb-saytlar yaratish va frontend asoslari',
    description:
      'Noldan boshlab responsiv veb-sahifalar, landing loyihalar va zamonaviy interfeyslar tuzishni real amaliy topshiriqlar orqali oʻrganasiz.',
    ageGroup: '12–22 yosh',
    ageCategory: 'teens',
    duration: '4 oy',
    schedule: 'Haftasiga 3 kun · 90 daqiqa',
    techStack: ['HTML5', 'CSS3', 'Flexbox & Grid', 'Responsive UI', 'Git asoslari'],
    outcomes: [
      'Shaxsiy portfolio va biznes landing sahifalar yaratish',
      'Kompyuter va telefon ekranlariga mos dizayn yigʻish',
      'Kodni toza va standartlar asosida yozish koʻnikmasi',
    ],
    image: webDevImg,
    imageAlt: 'Campus Ayti Academy Web Dasturlash dars xonasi va kod muhiti',
  },
  {
    id: 'arduino',
    index: '02',
    title: 'Robototexnika (Arduino)',
    subtitle: 'Mikrokontrollerlar, sensorlar va aqlli qurilmalar yasash',
    description:
      'Elektronika asoslari, C++ tilida mikrokontroller dasturlash, ultratovush datchiklar va avtomatlashtirilgan robot modellarini yigʻish.',
    ageGroup: '11–18 yosh',
    ageCategory: 'teens',
    duration: '6 oy',
    schedule: 'Haftasiga 3 kun · 90 daqiqa',
    techStack: ['Arduino UNO', 'C++ asoslari', 'Sensorlar', 'Servo motorlar', 'IoT'],
    outcomes: [
      'Aqlli uy tizimi va toʻsiqlardan qochuvchi robot yasash',
      'Sxematexnika va elektronika zanjirlarini toʻgʻri ulash',
      'Tuman va viloyat robototexnika musobaqalariga tayyorgarlik',
    ],
    image: arduinoImg,
    imageAlt: 'Arduino mikrokontrolleri, sensorlar va servo motor toʻplami',
  },
  {
    id: 'lego-wedo',
    index: '03',
    title: 'Bolalar Robototexnikasi (LEGO WeDo)',
    subtitle: '6–11 yoshli bolalar uchun muhandislik va mantiqiy fikrlash',
    description:
      'Boshlangʻich sinf oʻquvchilari uchun mexanika, tishli uzatmalar va datchiklar yordamida harakatlanuvchi robotlarni yigʻish hamda boshqarish.',
    ageGroup: '6–11 yosh',
    ageCategory: 'kids',
    duration: '5 oy',
    schedule: 'Haftasiga 3 kun · 80 daqiqa',
    techStack: ['LEGO WeDo 2.0', 'Mexanika', 'Smart Hub', 'Blokli dasturlash'],
    outcomes: [
      'Fazoviy tasavvur, mayda motorika va mantiqiy fikrlashni rivojlantirish',
      'Har darsda bitta harakatlanuvchi robot loyihasini yakunlash',
      'Jamoaviy ishlash va texnik fikrini tushuntira olish koʻnikmasi',
    ],
    image: legoWedoImg,
    imageAlt: 'LEGO WeDo tishli uzatmalar va harakat sensori bilan yigʻilgan robot',
  },
  {
    id: 'scratch',
    index: '04',
    title: 'Dasturlash Asoslari (Scratch)',
    subtitle: 'Oʻyinlar yaratish va algoritmik tafakkurni rivojlantirish',
    description:
      'Kod yozishdan oldingi eng muhim bosqich: vizual bloklar orqali shaxsiy 2D oʻyinlar, interaktiv animatsiyalar va mantiqiy masalalar yaratish.',
    ageGroup: '7–12 yosh',
    ageCategory: 'kids',
    duration: '4 oy',
    schedule: 'Haftasiga 3 kun · 80 daqiqa',
    techStack: ['Scratch 3.0', 'Algoritmlar', 'Oʻyin fizikasi', 'Animatsiya'],
    outcomes: [
      'Oʻzining birinchi 2D kompyuter oʻyinini yaratish va doʻstlariga ulashish',
      'Shartlar, sikllar va oʻzgaruvchilar kabi dasturlash tushunchalarini oʻzlashtirish',
      'Katta dasturlash tillariga (Python, Web) mustahkam poydevor qoʻyish',
    ],
    image: scratchImg,
    imageAlt: 'Scratch vizual bloklari va 2D oʻyin yaratish muhiti',
  },
];

export interface QuizQuestion {
  id: string;
  stepLabel: string;
  question: string;
  options: {
    id: string;
    label: string;
    detail: string;
  }[];
}

export const QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    id: 'age',
    stepLabel: '1-savol',
    question: 'Oʻquvchining yoshi nechida?',
    options: [
      { id: '6-10', label: '6–10 yosh', detail: 'Boshlangʻich sinf oʻquvchilari' },
      { id: '11-13', label: '11–13 yosh', detail: 'Oʻrta maktab bosqichi' },
      { id: '14-plus', label: '14+ yosh', detail: 'Yuqori sinf va talabalar' },
    ],
  },
  {
    id: 'interest',
    stepLabel: '2-savol',
    question: 'Qaysi mashgʻulot koʻproq qiziqtiradi?',
    options: [
      { id: 'hardware', label: 'Qoʻlda qurilma va robot yigʻish', detail: 'Motorlar, sensorlar, sxemalar' },
      { id: 'websites', label: 'Veb-sayt va dizayn yaratish', detail: 'Sahifalar, interfeys, kodlash' },
      { id: 'games', label: 'Oʻyin va multfilm yaratish', detail: 'Mantiqiy bloklar va ssenariy' },
    ],
  },
  {
    id: 'goal',
    stepLabel: '3-savol',
    question: 'Kursdan kutilayotgan asosiy natija nima?',
    options: [
      { id: 'logic', label: 'Mantiqiy fikrlash va texnik qiziqishni ochish', detail: 'Poydevor va ilk ijodiy loyihalar' },
      { id: 'engineering', label: 'Real ishlaydigan aqlli qurilma yasash', detail: 'Muhandislik va musobaqalar' },
      { id: 'profession', label: 'IT kasbiga ilk amaliy qadam qoʻyish', detail: 'Portfolio va zamonaviy frontend' },
    ],
  },
];

export function recommendCourseFromQuiz(answers: Record<string, string>): {
  course: CourseItem;
  reason: string;
} {
  const { age, interest, goal } = answers;

  if (interest === 'websites' || (age === '14-plus' && goal === 'profession')) {
    return {
      course: COURSES[0],
      reason:
        'Sizning qiziqishingiz va yoshingiz uchun zamonaviy veb-saytlar yaratishga oʻrgatuvchi Web Dasturlash (HTML & CSS) kursi eng tezkor va amaliy tanlov.',
    };
  }

  if (interest === 'hardware') {
    if (age === '6-10') {
      return {
        course: COURSES[2],
        reason:
          '6–10 yoshdagi bolalar uchun mexanika va muhandislikni xavfsiz, qiziqarli oʻrganishning eng yaxshi yoʻli — Bolalar Robototexnikasi (LEGO WeDo).',
      };
    }
    return {
      course: COURSES[1],
      reason:
        'Haqiqiy elektronika, sensorlar va C++ dasturlash orqali aqlli qurilmalar yasash uchun Robototexnika (Arduino) kursi aynan sizga mos.',
    };
  }

  if (interest === 'games') {
    if (age === '14-plus' && goal === 'profession') {
      return {
        course: COURSES[0],
        reason:
          'Kattaroq yoshdagilar uchun interaktiv raqamli mahsulotlar yaratishda Web Dasturlash (HTML & CSS) kursi kuchli amaliy start beradi.',
      };
    }
    return {
      course: COURSES[3],
      reason:
        'Oʻyinlar va animatsiyalar yaratish orqali algoritmik tafakkurni shakllantirish uchun Dasturlash Asoslari (Scratch) ideal boshlangʻich kurs.',
    };
  }

  if (age === '6-10') {
    return {
      course: COURSES[2],
      reason:
        'Yosh toifangizga mos ravishda qoʻl mehnati va mantiqni uygʻunlashtiruvchi LEGO WeDo robototexnika kursini tavsiya qilamiz.',
    };
  }

  if (goal === 'engineering') {
    return {
      course: COURSES[1],
      reason:
        'Muhandislik loyihalari yaratish maqsadingizga Robototexnika (Arduino) kursi toʻliq javob beradi.',
    };
  }

  return {
    course: COURSES[0],
    reason:
      'Zamonaviy IT sohasiga dadil kirib kelish uchun Web Dasturlash (HTML & CSS) kursi eng qulay boshlangʻich yoʻnalishdir.',
  };
}
