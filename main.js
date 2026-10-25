// ==========================================
// 1. БАРДЫК 118 ЭЛЕМЕНТТИН ТОЛУК БАЗАСЫ (Fake Data & Array)
// ==========================================
const elementsData = [
    { number: 1, symbol: 'H', name: 'Суутек', weight: 1.008, group: 'nonmetal', config: '1s¹', desc: 'Ааламдагы эң кеңири тараган эң жеңил газ.' },
    { number: 2, symbol: 'He', name: 'Гелий', weight: 4.0026, group: 'noble', config: '1s²', desc: 'Инерттүү газ, шарларды учурууда жана муздатууда колдонулат.' },
    { number: 3, symbol: 'Li', name: 'Литий', weight: 6.94, group: 'alkali', config: '[He] 2s¹', desc: 'Батареяларда колдонулуучу эң жеңил щелочтуу металл.' },
    { number: 4, symbol: 'Be', name: 'Бериллий', weight: 9.0122, group: 'alkaline-earth', config: '[He] 2s²', desc: 'Бышык жана жеңил металл, авиацияда колдонулат.' },
    { number: 5, symbol: 'B', name: 'Бор', weight: 10.81, group: 'nonmetal', config: '[He] 2s² 2p¹', desc: 'Жартылай өткөргүч металлоид, айнек өндүрүшүндө колдонулат.' },
    { number: 6, symbol: 'C', name: 'Көмүртек', weight: 12.011, group: 'nonmetal', config: '[He] 2s² 2p²', desc: 'Бардык органикалык бирикмелердин жана жашоонун негизи (Алмаз, Графит).' },
    { number: 7, symbol: 'N', name: 'Азот', weight: 14.007, group: 'nonmetal', config: '[He] 2s² 2p³', desc: 'Атмосферадагы абанын 78% түзүүчү газ.' },
    { number: 8, symbol: 'O', name: 'Кычкылтек', weight: 15.999, group: 'nonmetal', config: '[He] 2s² 2p⁴', desc: 'Дем алуу жана күйүү үчүн эң зарыл элемент.' },
    { number: 9, symbol: 'F', name: 'Фтор', weight: 18.998, group: 'halogen', config: '[He] 2s² 2p⁵', desc: 'Эң активдүү галоген, тиш пасталарында колдонулат.' },
    { number: 10, symbol: 'Ne', name: 'Неон', weight: 20.180, group: 'noble', config: '[He] 2s² 2p⁶', desc: 'Жаркыраган инерттүү газ, жарнама чырактарында колдонулат.' },
    { number: 11, symbol: 'Na', name: 'Натрий', weight: 22.990, group: 'alkali', config: '[Ne] 3s¹', desc: 'Суу менен активдүү реакцияга кирүүчү щелочтуу металл, аш тузунун курамында бар.' },
    { number: 12, symbol: 'Mg', name: 'Магний', weight: 24.305, group: 'alkaline-earth', config: '[Ne] 3s²', desc: 'Өсүмдүк хлорофиллинде жана сөөктөрдө бар жеңил металл.' },
    { number: 13, symbol: 'Al', name: 'Алюминий', weight: 26.982, group: 'transition', config: '[Ne] 3s² 3p¹', desc: 'Жаныбызда эң көп колдонулган жеңил, дат баспаган металл.' },
    { number: 14, symbol: 'Si', name: 'Кремний', weight: 28.085, group: 'nonmetal', config: '[Ne] 3s² 3p²', desc: 'Компьютердик микросхемалардын жана кумдун негизи.' },
    { number: 15, symbol: 'P', name: 'Фосфор', weight: 30.974, group: 'nonmetal', config: '[Ne] 3s² 3p³', desc: 'Ширеңке өндүрүшүндө жана ДНКда бар маанилүү элемент.' },
    { number: 16, symbol: 'S', name: 'Күкүрт', weight: 32.06, group: 'nonmetal', config: '[Ne] 3s² 3p⁴', desc: 'Сары түстөгү металл эмес, порох жана кислота жасоодо колдонулат.' },
    { number: 17, symbol: 'Cl', name: 'Хлор', weight: 35.45, group: 'halogen', config: '[Ne] 3s² 3p⁵', desc: 'Сууну тазалоодо жана дезинфекциялоодо колдонулган газ.' },
    { number: 18, symbol: 'Ar', name: 'Аргон', weight: 39.948, group: 'noble', config: '[Ne] 3s² 3p⁶', desc: 'Ысытуучу лампочкалардын ичинде колдонулуучу инерттүү газ.' },
    { number: 19, symbol: 'K', name: 'Калий', weight: 39.098, group: 'alkali', config: '[Ar] 4s¹', desc: 'Жүрөктүн иштешине жана өсүмдүк жер семирткичке керектүү элемент.' },
    { number: 20, symbol: 'Ca', name: 'Кальций', weight: 40.078, group: 'alkaline-earth', config: '[Ar] 4s²', desc: 'Сөөктөрдү жана тиштерди бекемдөөчү негизги металл.' },
    { number: 21, symbol: 'Sc', name: 'Скандий', weight: 44.956, group: 'transition', config: '[Ar] 3d¹ 4s²', desc: 'Жеңил жана бышык куймаларды жасоодо колдонулат.' },
    { number: 22, symbol: 'Ti', name: 'Титан', weight: 47.867, group: 'transition', config: '[Ar] 3d² 4s²', desc: 'Абдан бышык, медициналык импланттарда колдонулуучу металл.' },
    { number: 23, symbol: 'V', name: 'Ванадий', weight: 50.942, group: 'transition', config: '[Ar] 3d³ 4s²', desc: 'Болоттун сапатын жана бышыктыгын жогорулатат.' },
    { number: 24, symbol: 'Cr', name: 'Хром', weight: 51.996, group: 'transition', config: '[Ar] 3d⁵ 4s¹', desc: 'Металлдарды дат басуудан коргоочу жалтырак каптоо.' },
    { number: 25, symbol: 'Mn', name: 'Марганец', weight: 54.938, group: 'transition', config: '[Ar] 3d⁵ 4s²', desc: 'Болот куймаларын чыңдоодо колдонулат.' },
    { number: 26, symbol: 'Fe', name: 'Темир', weight: 55.845, group: 'transition', config: '[Ar] 3d⁶ 4s²', desc: 'Кандагы гемоглобиндин жана курулуш металлдарынын негизи.' },
    { number: 27, symbol: 'Co', name: 'Кобальт', weight: 58.933, group: 'transition', config: '[Ar] 3d⁷ 4s²', desc: 'Магниттерде жана литий-иондук батареяларда колдонулат.' },
    { number: 28, symbol: 'Ni', name: 'Никель', weight: 58.693, group: 'transition', config: '[Ar] 3d⁸ 4s²', desc: 'Тыйындарды жасоодо жана каптоодо колдонулуучу металл.' },
    { number: 29, symbol: 'Cu', name: 'Жез', weight: 63.546, group: 'transition', config: '[Ar] 3d¹⁰ 4s¹', desc: 'Электр тогун эң сонун өткөрүүчү металл.' },
    { number: 30, symbol: 'Zn', name: 'Цинк', weight: 65.38, group: 'transition', config: '[Ar] 3d¹⁰ 4s²', desc: 'Металлдарды даттан коргоо (галванизация) үчүн колдонулат.' },
    { number: 31, symbol: 'Ga', name: 'Галлий', weight: 69.723, group: 'transition', config: '[Ar] 3d¹⁰ 4s² 4p¹', desc: 'Колго кармаганда жылуулуктан улам эрип кетүүчү металл.' },
    { number: 32, symbol: 'Ge', name: 'Германий', weight: 72.630, group: 'transition', config: '[Ar] 3d¹⁰ 4s² 4p²', desc: 'Транзистордо жана оптоэлектроникада колдонулат.' },
    { number: 33, symbol: 'As', name: 'Мышьяк', weight: 74.922, group: 'nonmetal', config: '[Ar] 3d¹⁰ 4s² 4p³', desc: 'Тарыхта уу катары белгилүү болгон жартылай металл.' },
    { number: 34, symbol: 'Se', name: 'Селен', weight: 78.971, group: 'nonmetal', config: '[Ar] 3d¹⁰ 4s² 4p⁴', desc: 'Күн батареяларында жана фоторецепторлордо колдонулат.' },
    { number: 35, symbol: 'Br', name: 'Бром', weight: 79.904, group: 'halogen', config: '[Ar] 3d¹⁰ 4s² 4p⁵', desc: 'Кадимки температурада суюк абалда болгон жалгыз металл эмес элемент.' },
    { number: 36, symbol: 'Kr', name: 'Криптон', weight: 83.798, group: 'noble', config: '[Ar] 3d¹⁰ 4s² 4p⁶', desc: 'Лазерлерде жана жогорку кубаттуулуктагы чырактарда колдонулат.' },
    { number: 37, symbol: 'Rb', name: 'Рубидий', weight: 85.468, group: 'alkali', config: '[Kr] 5s¹', desc: 'Атомдук сааттарда колдонулуучу радиоактивдүү щелочтуу металл.' },
    { number: 38, symbol: 'Sr', name: 'Стронций', weight: 87.62, group: 'alkaline-earth', config: '[Kr] 5s²', desc: 'Фейерверктерге кызыл түс берүү үчүн колдонулат.' },
    { number: 39, symbol: 'Y', name: 'Иттрий', weight: 88.906, group: 'transition', config: '[Kr] 4d¹ 5s²', desc: 'Светодиоддордо (LED) жана лазерлерде колдонулат.' },
    { number: 40, symbol: 'Zr', name: 'Цирконий', weight: 91.224, group: 'transition', config: '[Kr] 4d² 5s²', desc: 'Ядролук реакторлордо жана жасалма бриллиант жасоодо колдонулат.' },
    { number: 41, symbol: 'Nb', name: 'Ниобий', weight: 92.906, group: 'transition', config: '[Kr] 4d⁴ 5s¹', desc: 'Өтө өткөргүч (суперөткөргүч) магниттерде колдонулат.' },
    { number: 42, symbol: 'Mo', name: 'Молибден', weight: 95.95, group: 'transition', config: '[Kr] 4d⁵ 5s¹', desc: 'Жогорку температурага чыдамдуу металл куймалары.' },
    { number: 43, symbol: 'Tc', name: 'Технеций', weight: 98, group: 'transition', config: '[Kr] 4d⁵ 5s²', desc: 'Адам тарабынан жасалма жол менен алынган биринчи радиоактивдүү элемент.' },
    { number: 44, symbol: 'Ru', name: 'Рутений', weight: 101.07, group: 'transition', config: '[Kr] 4d⁷ 5s¹', desc: 'Платина тобундагы сейрек металл.' },
    { number: 45, symbol: 'Rh', name: 'Родий', weight: 102.91, group: 'transition', config: '[Kr] 4d⁸ 5s¹', desc: 'Автоунаалардын катализаторлорунда колдонулуучу эң кымбат металлдардын бири.' },
    { number: 46, symbol: 'Pd', name: 'Палладий', weight: 106.42, group: 'transition', config: '[Kr] 4d¹⁰', desc: 'Водородду өзүнө сиңирүүчү жана тазалоочу металл.' },
    { number: 47, symbol: 'Ag', name: 'Күмүш', weight: 107.87, group: 'transition', config: '[Kr] 4d¹⁰ 5s¹', desc: 'Электр тогун жана жылуулукту эң жакшы өткөрүүчү металл.' },
    { number: 48, symbol: 'Cd', name: 'Кадмий', weight: 112.41, group: 'transition', config: '[Kr] 4d¹⁰ 5s²', desc: 'Аккумуляторлордо колдонулуучу оор металл.' },
    { number: 49, symbol: 'In', name: 'Индий', weight: 114.82, group: 'transition', config: '[Kr] 4d¹⁰ 5s² 5p¹', desc: 'Сенсордук экрандарды (Touchscreen) жасоодо колдонулат.' },
    { number: 50, symbol: 'Sn', name: 'Калай', weight: 118.71, group: 'transition', config: '[Kr] 4d¹⁰ 5s² 5p²', desc: 'Консерва идиштерин каптоодо жана ширетүүдө колдонулат.' },
    { number: 51, symbol: 'Sb', name: 'Сурьма', weight: 121.76, group: 'nonmetal', config: '[Kr] 4d¹⁰ 5s² 5p³', desc: 'Ок-дарыларда жана жартылай өткөргүчтөрдө колдонулат.' },
    { number: 52, symbol: 'Te', name: 'Теллур', weight: 127.60, group: 'nonmetal', config: '[Kr] 4d¹⁰ 5s² 5p⁴', desc: 'Күн панелдеринин натыйжалуулугун жогорулатууда колдонулат.' },
    { number: 53, symbol: 'I', name: 'Иод', weight: 126.90, group: 'halogen', config: '[Kr] 4d¹⁰ 5s² 5p⁵', desc: 'Калкан безинин иштешине жана медициналык дезинфекцияга зарыл.' },
    { number: 54, symbol: 'Xe', name: 'Ксенон', weight: 131.29, group: 'noble', config: '[Kr] 4d¹⁰ 5s² 5p⁶', desc: 'Космос кемелеринин иондук кыймылдаткычтарында колдонулуучу газ.' },
    { number: 55, symbol: 'Cs', name: 'Цезий', weight: 132.91, group: 'alkali', config: '[Xe] 6s¹', desc: 'Дүйнөдөгү эң так атомдук сааттарда колдонулат.' },
    { number: 56, symbol: 'Ba', name: 'Барий', weight: 137.33, group: 'alkaline-earth', config: '[Xe] 6s²', desc: 'Медициналык рентген диагностикасында колдонулат.' },
    { number: 57, symbol: 'La', name: 'Лантан', weight: 138.91, group: 'transition', config: '[Xe] 5d¹ 6s²', desc: 'Гибриддик автоунаалардын батареяларында колдонулуучу лантаноид.' },
    { number: 58, symbol: 'Ce', name: 'Церий', weight: 140.12, group: 'transition', config: '[Xe] 4f¹ 5d¹ 6s²', desc: 'Зажигалкалардын чакмак таштарында колдонулат.' },
    { number: 59, symbol: 'Pr', name: 'Празеодим', weight: 140.91, group: 'transition', config: '[Xe] 4f³ 6s²', desc: 'Атайын коргоочу айнектерге сары-жашыл түс берет.' },
    { number: 60, symbol: 'Nd', name: 'Неодим', weight: 144.24, group: 'transition', config: '[Xe] 4f⁴ 6s²', desc: 'Эң күчтүү туруктуу магниттерди жасоодо колдонулат.' },
    { number: 61, symbol: 'Pm', name: 'Прометий', weight: 145, group: 'transition', config: '[Xe] 4f⁵ 6s²', desc: 'Радиоактивдүү элемент, атомдук батареяларда колдонулат.' },
    { number: 62, symbol: 'Sm', name: 'Самарий', weight: 150.36, group: 'transition', config: '[Xe] 4f⁶ 6s²', desc: 'Жогорку температурага чыдамдуу магниттерде колдонулат.' },
    { number: 63, symbol: 'Eu', name: 'Европий', weight: 151.96, group: 'transition', config: '[Xe] 4f⁷ 6s²', desc: 'Евро банкнотторун жасалмалуулуктан коргоочу люминесценттик зат.' },
    { number: 64, symbol: 'Gd', name: 'Гадолиний', weight: 157.25, group: 'transition', config: '[Xe] 4f⁷ 5d¹ 6s²', desc: 'МРТ (томография) контрасттык заты катары колдонулат.' },
    { number: 65, symbol: 'Tb', name: 'Тербий', weight: 158.93, group: 'transition', config: '[Xe] 4f⁹ 6s²', desc: 'Электрондук дисплейлерге жашыл люминофор берет.' },
    { number: 66, symbol: 'Dy', name: 'Диспрозий', weight: 162.50, group: 'transition', config: '[Xe] 4f¹⁰ 6s²', desc: 'Лазердик материалдарда жана ядердик реакторлордо колдонулат.' },
    { number: 67, symbol: 'Ho', name: 'Гольмий', weight: 164.93, group: 'transition', config: '[Xe] 4f¹¹ 6s²', desc: 'Медициналык хирургиялык лазердерде колдонулат.' },
    { number: 68, symbol: 'Er', name: 'Эрбий', weight: 167.26, group: 'transition', config: '[Xe] 4f¹² 6s²', desc: 'Була-оптикалык байланыш линияларын күчөтүүдө колдонулат.' },
    { number: 69, symbol: 'Tm', name: 'Тулий', weight: 168.93, group: 'transition', config: '[Xe] 4f¹³ 6s²', desc: 'Көчмө рентген аппараттарында колдонулуучу сейрек элемент.' },
    { number: 70, symbol: 'Yb', name: 'Иттербий', weight: 173.05, group: 'transition', config: '[Xe] 4f¹⁴ 6s²', desc: 'Өтө так атомдук сааттарда жана болотту кесүүчү лазерде.' },
    { number: 71, symbol: 'Lu', name: 'Лютеций', weight: 174.97, group: 'transition', config: '[Xe] 4f¹⁴ 5d¹ 6s²', desc: 'ПОЗИТРОНДУК-эмиссиялык томографияда (ПЭТ) колдонулат.' },
    { number: 72, symbol: 'Hf', name: 'Гафний', weight: 178.49, group: 'transition', config: '[Xe] 4f¹⁴ 5d² 6s²', desc: 'Процессорлордогу микротранзисторлорду кичирейтүүдө колдонулат.' },
    { number: 73, symbol: 'Ta', name: 'Тантал', weight: 180.95, group: 'transition', config: '[Xe] 4f¹⁴ 5d³ 6s²', desc: 'Смартфондордун кичинекей конденсаторлорунда колдонулат.' },
    { number: 74, symbol: 'W', name: 'Вольфрам', weight: 183.84, group: 'transition', config: '[Xe] 4f¹⁴ 5d⁴ 6s²', desc: 'Эң жогорку эрүү температурасына ээ металл (3422°C).' },
    { number: 75, symbol: 'Re', name: 'Рений', weight: 186.21, group: 'transition', config: '[Xe] 4f¹⁴ 5d⁵ 6s²', desc: 'Реактивдүү турбиналык кыймылдаткычтардын куймаларында.' },
    { number: 76, symbol: 'Os', name: 'Осмий', weight: 190.23, group: 'transition', config: '[Xe] 4f¹⁴ 5d⁶ 6s²', desc: 'Жер бетиндеги эң оор тыгыздыктагы металл.' },
    { number: 77, symbol: 'Ir', name: 'Иридий', weight: 192.22, group: 'transition', config: '[Xe] 4f¹⁴ 5d⁷ 6s²', desc: 'Жогорку коррозияга чыдамдуу, метеориттерде көп кездешкен металл.' },
    { number: 78, symbol: 'Pt', name: 'Платина', weight: 195.08, group: 'transition', config: '[Xe] 4f¹⁴ 5d⁹ 6s¹', desc: 'Баалуу зергерчиликте жана химикат катализатор катары колдонулат.' },
    { number: 79, symbol: 'Au', name: 'Алтын', weight: 196.97, group: 'transition', config: '[Xe] 4f¹⁴ 5d¹⁰ 6s¹', desc: 'Дат баспаган, өтө баалуу металл жана валюта резерви.' },
    { number: 80, symbol: 'Hg', name: 'Сымап', weight: 200.59, group: 'transition', config: '[Xe] 4f¹⁴ 5d¹⁰ 6s²', desc: 'Бөлмө температурасында суюк болгон жалгыз металл.' },
    { number: 81, symbol: 'Tl', name: 'Таллий', weight: 204.38, group: 'transition', config: '[Xe] 4f¹⁴ 5d¹⁰ 6s² 6p¹', desc: 'Өтө уулуу металл, мурда чычкандарды ууландырууда колдонулган.' },
    { number: 82, symbol: 'Pb', name: 'Коргошун', weight: 207.2, group: 'transition', config: '[Xe] 4f¹⁴ 5d¹⁰ 6s² 6p²', desc: 'Рентген нурларынан коргоочу жана оор жумшак металл.' },
    { number: 83, symbol: 'Bi', name: 'Висмут', weight: 208.98, group: 'transition', config: '[Xe] 4f¹⁴ 5d¹⁰ 6s² 6p³', desc: 'Радиоактивдүү эмес эң оор металлдардын бири, ашказан дарыларында бар.' },
    { number: 84, symbol: 'Po', name: 'Полоний', weight: 209, group: 'nonmetal', config: '[Xe] 4f¹⁴ 5d¹⁰ 6s² 6p⁴', desc: 'Мария Кюри тарабынан ачылган радиоактивдүү сейрек элемент.' },
    { number: 85, symbol: 'At', name: 'Астат', weight: 210, group: 'halogen', config: '[Xe] 4f¹⁴ 5d¹⁰ 6s² 6p⁵', desc: 'Жер кыртышындагы эң сейрек кездешкен радиоактивдүү галоген.' },
    { number: 86, symbol: 'Rn', name: 'Радон', weight: 222, group: 'noble', config: '[Xe] 4f¹⁴ 5d¹⁰ 6s² 6p⁶', desc: 'Жерден бөлүнүп чыгуучу радиоактивдүү инерттүү газ.' },
    { number: 87, symbol: 'Fr', name: 'Франций', weight: 223, group: 'alkali', config: '[Rn] 7s¹', desc: 'Өтө туруксуз, тез ажыроочу щелочтуу радиоактивдүү металл.' },
    { number: 88, symbol: 'Ra', name: 'Радий', weight: 226, group: 'alkaline-earth', config: '[Rn] 7s²', desc: 'Караңгыда жаркырап күйүүчү радиоактивдүү элемент.' },
    { number: 89, symbol: 'Ac', name: 'Актиний', weight: 227, group: 'transition', config: '[Rn] 6d¹ 7s²', desc: 'Рак оорусун лазердик радиотерапияда дарылоодо колдонулат.' },
    { number: 90, symbol: 'Th', name: 'Торий', weight: 232.04, group: 'transition', config: '[Rn] 6d² 7s²', desc: 'Келечектеги коопсуз ядролук энергетиканын отуну.' },
    { number: 91, symbol: 'Pa', name: 'Протактиний', weight: 231.04, group: 'transition', config: '[Rn] 5f² 6d¹ 7s²', desc: 'Өтө сейрек кездешүүчү, токсиндүү радиоактивдүү металл.' },
    { number: 92, symbol: 'U', name: 'Уран', weight: 238.03, group: 'transition', config: '[Rn] 5f³ 6d¹ 7s²', desc: 'Атомдук электр станцияларында колдонулуучу негизги ядролук отун.' },
    { number: 93, symbol: 'Np', name: 'Нептуний', weight: 237, group: 'transition', config: '[Rn] 5f⁴ 6d¹ 7s²', desc: 'Урандан кийин жасалма алынган трансурандык элемент.' },
    { number: 94, symbol: 'Pu', name: 'Плутоний', weight: 244, group: 'transition', config: '[Rn] 5f⁶ 7s²', desc: 'Ядролук куралдарда жана космостук зонддордун батареясында колдонулат.' },
    { number: 95, symbol: 'Am', name: 'Америций', weight: 243, group: 'transition', config: '[Rn] 5f⁷ 7s²', desc: 'Түтүндү аныктагыч (дымовые датчики) тиричилик куралдарында колдонулат.' },
    { number: 96, symbol: 'Cm', name: 'Кюрий', weight: 247, group: 'transition', config: '[Rn] 5f⁷ 6d¹ 7s²', desc: 'Пьер жана Мария Кюринин урматына аталган радиоактивдүү металл.' },
    { number: 97, symbol: 'Bk', name: 'Беркли', weight: 247, group: 'transition', config: '[Rn] 5f⁹ 7s²', desc: 'Калифорния университетинде синтезделген жасалма элемент.' },
    { number: 98, symbol: 'Cf', name: 'Калифорний', weight: 251, group: 'transition', config: '[Rn] 5f¹⁰ 7s²', desc: 'Өтө кымбат элемент, нейтрондук каротаж тармагында колдонулат.' },
    { number: 99, symbol: 'Es', name: 'Эйнштейний', weight: 252, group: 'transition', config: '[Rn] 5f¹¹ 7s²', desc: 'Альберт Эйнштейндин урматына аталган жасалма элемент.' },
    { number: 100, symbol: 'Fm', name: 'Фермий', weight: 257, group: 'transition', config: '[Rn] 5f¹² 7s²', desc: 'Суутек бомбасынын жарылуусунун калдыктарынан табылган.' },
    { number: 101, symbol: 'Md', name: 'Менделевий', weight: 258, group: 'transition', config: '[Rn] 5f¹³ 7s²', desc: 'Дмитрий Менделеевдин урматына аталган трансурандык элемент.' },
    { number: 102, symbol: 'No', name: 'Нобелий', weight: 259, group: 'transition', config: '[Rn] 5f¹⁴ 7s²', desc: 'Альфред Нобельдин урматына аталган жасалма радиоактивдүү металл.' },
    { number: 103, symbol: 'Lr', name: 'Лоуренсий', weight: 266, group: 'transition', config: '[Rn] 5f¹⁴ 7s² 7p¹', desc: 'Лабораторияда атому боюнча синтезделген оор металл.' },
    { number: 104, symbol: 'Rf', name: 'Резерфордий', weight: 267, group: 'transition', config: '[Rn] 5f¹⁴ 6d² 7s²', desc: 'Эрнест Резерфорддун урматына аталган супер оор элемент.' },
    { number: 105, symbol: 'Db', name: 'Дубний', weight: 268, group: 'transition', config: '[Rn] 5f¹⁴ 6d³ 7s²', desc: 'Орусиянын Дубна шаарындагы ядролук изилдөө борборунда алынган.' },
    { number: 106, symbol: 'Sg', name: 'Сиборгий', weight: 269, group: 'transition', config: '[Rn] 5f¹⁴ 6d⁴ 7s²', desc: 'Гленн Сиборгдун урматына аталган жасалма оор элемент.' },
    { number: 107, symbol: 'Bh', name: 'Борий', weight: 270, group: 'transition', config: '[Rn] 5f¹⁴ 6d⁵ 7s²', desc: 'Нильс Бордун урматына аталган радиоактивдүү элемент.' },
    { number: 108, symbol: 'Hs', name: 'Хассий', weight: 277, group: 'transition', config: '[Rn] 5f¹⁴ 6d⁶ 7s²', desc: 'Германиянын Гессен аймагынын урматына аталган элемент.' },
    { number: 109, symbol: 'Mt', name: 'Майтнерий', weight: 278, group: 'transition', config: '[Rn] 5f¹⁴ 6d⁷ 7s²', desc: 'Физик Лиза Майтнердин урматына аталган синтетикалык элемент.' },
    { number: 110, symbol: 'Ds', name: 'Дармштадтий', weight: 281, group: 'transition', config: '[Rn] 5f¹⁴ 6d⁸ 7s²', desc: 'Германиянын Дармштадт шаарында биринчи жолу синтезделген.' },
    { number: 111, symbol: 'Rg', name: 'Рентгений', weight: 282, group: 'transition', config: '[Rn] 5f¹⁴ 6d⁹ 7s²', desc: 'Вильгельм Рентгендин урматына аталган элемент.' },
    { number: 112, symbol: 'Cn', name: 'Коперниций', weight: 285, group: 'transition', config: '[Rn] 5f¹⁴ 6d¹⁰ 7s²', desc: 'Николай Коперниктин урматына аталган оор радиоактивдүү элемент.' },
    { number: 113, symbol: 'Nh', name: 'Нихоний', weight: 286, group: 'transition', config: '[Rn] 5f¹⁴ 6d¹⁰ 7s² 7p¹', desc: 'Японияда (Нихон) ачылган Азиядагы биринчи элемент.' },
    { number: 114, symbol: 'Fl', name: 'Флеровий', weight: 289, group: 'transition', config: '[Rn] 5f¹⁴ 6d¹⁰ 7s² 7p²', desc: 'Флёров атындагы ядролук реакциялар лабораториясында алынган.' },
    { number: 115, symbol: 'Mc', name: 'Московий', weight: 290, group: 'transition', config: '[Rn] 5f¹⁴ 6d¹⁰ 7s² 7p³', desc: 'Москва облусунун урматына аталган синтетикалык оор элемент.' },
    { number: 116, symbol: 'Lv', name: 'Ливерморий', weight: 293, group: 'transition', config: '[Rn] 5f¹⁴ 6d¹⁰ 7s² 7p⁴', desc: 'Ливермор улуттук лабораториясынын урматына аталган.' },
    { number: 117, symbol: 'Ts', name: 'Теннессин', weight: 294, group: 'halogen', config: '[Rn] 5f¹⁴ 6d¹⁰ 7s² 7p⁵', desc: 'АКШнын Теннесси штатынын урматына аталган жасалма галоген.' },
    { number: 118, symbol: 'Og', name: 'Оганесон', weight: 294, group: 'noble', config: '[Rn] 5f¹⁴ 6d¹⁰ 7s² 7p⁶', desc: 'Академик Юрий Оганесяндын урматына аталган эң акыркы 118-элемент.' }
];

// ==========================================
// 2. DOM LOADED & EVENT LISTENERS
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
    // Навигация табын которуу
    const navButtons = document.querySelectorAll('.nav-btn');
    const tabContents = document.querySelectorAll('.tab-content');

    navButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const tabId = btn.getAttribute('data-tab');

            navButtons.forEach(b => b.classList.remove('active'));
            tabContents.forEach(c => c.classList.remove('active'));

            btn.classList.add('active');
            const targetTab = document.getElementById(tabId);
            if (targetTab) targetTab.classList.add('active');
        });
    });

    // Теманы өзгөртүү жана localStorage'ка сактоо
    const themeBtn = document.getElementById('theme-toggle');
    const savedTheme = localStorage.getItem('chem_theme') || 'dark';
    
    document.body.setAttribute('data-bs-theme', savedTheme);
    if (themeBtn) {
        themeBtn.innerHTML = savedTheme === 'light' ? '<i class="fa-solid fa-sun"></i>' : '<i class="fa-solid fa-moon"></i>';
        
        themeBtn.addEventListener('click', () => {
            const currentTheme = document.body.getAttribute('data-bs-theme');
            const newTheme = currentTheme === 'light' ? 'dark' : 'light';
            
            document.body.setAttribute('data-bs-theme', newTheme);
            localStorage.setItem('chem_theme', newTheme);
            themeBtn.innerHTML = newTheme === 'light' ? '<i class="fa-solid fa-sun"></i>' : '<i class="fa-solid fa-moon"></i>';
        });
    }

    // Бардык негизги функцияларды иштетүү
    renderPeriodicTable('all');
    setupSearch();
    setupDragAndDrop();
    loadQuizQuestion();
    setupContactForm();
});

// ==========================================
// 3. RENDER PERIODIC TABLE (Fake Data & Array Methods)
// ==========================================
function renderPeriodicTable(filterGroup) {
    const grid = document.getElementById('grid');
    if (!grid) return;
    grid.innerHTML = '';

    const filtered = filterGroup === 'all' 
        ? elementsData 
        : elementsData.filter(e => e.group === filterGroup);

    filtered.forEach(elem => {
        const card = document.createElement('div');
        card.className = `element-card ${elem.group}`;
        card.innerHTML = `
            <div class="number">${elem.number}</div>
            <div class="symbol">${elem.symbol}</div>
            <div class="name">${elem.name}</div>
        `;
        card.addEventListener('click', () => showElementDetail(elem));
        grid.appendChild(card);
    });
}

// Издөө (Search & Event)
function setupSearch() {
    const searchInput = document.getElementById('element-search');
    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            const val = e.target.value.toLowerCase();
            document.querySelectorAll('.element-card').forEach(card => {
                const txt = card.innerText.toLowerCase();
                card.style.display = txt.includes(val) ? 'block' : 'none';
            });
        });
    }

    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
            e.target.classList.add('active');
            renderPeriodicTable(e.target.dataset.group);
        });
    });
}

// ==========================================
// 4. MODAL & 3D ATOM SIMULATION
// ==========================================
function showElementDetail(elem) {
    const modal = document.getElementById('element-modal');
    const info = document.getElementById('modal-info');
    const stage = document.getElementById('atom-stage');
    const nucleus = document.getElementById('atom-nucleus');

    if (!modal || !info || !stage || !nucleus) return;

    nucleus.innerText = elem.symbol;
    stage.querySelectorAll('.electron-orbit').forEach(o => o.remove());

    const orbitsCount = Math.min(Math.ceil(elem.number / 18) + 1, 4);
    for (let i = 1; i <= orbitsCount; i++) {
        const orbit = document.createElement('div');
        orbit.className = 'electron-orbit';
        const size = 50 + i * 22;
        orbit.style.width = `${size}px`;
        orbit.style.height = `${size}px`;
        orbit.style.animationDuration = `${3 / i}s`;

        const electron = document.createElement('div');
        electron.className = 'electron';
        orbit.appendChild(electron);
        stage.appendChild(orbit);
    }

    info.innerHTML = `
        <h3 class="text-info">${elem.name} (${elem.symbol})</h3>
        <p><strong>Атомдук номери:</strong> ${elem.number}</p>
        <p><strong>Атомдук массасы:</strong> ${elem.weight} g/mol</p>
        <p><strong>Электрондук формула:</strong> <code>${elem.config}</code></p>
        <p class="text-muted small">${elem.desc}</p>
    `;

    modal.style.display = 'flex';
}

const closeModalBtn = document.querySelector('.close-modal');
if (closeModalBtn) {
    closeModalBtn.addEventListener('click', () => {
        document.getElementById('element-modal').style.display = 'none';
    });
}

// ==========================================
// 5. DRAG & DROP LAB
// ==========================================
let slot1Val = null;
let slot2Val = null;

function setupDragAndDrop() {
    document.querySelectorAll('.drag-item').forEach(item => {
        item.addEventListener('dragstart', (e) => {
            e.dataTransfer.setData('text/plain', item.dataset.elem);
        });
    });

    document.querySelectorAll('.drop-zone').forEach(zone => {
        zone.addEventListener('dragover', (e) => {
            e.preventDefault();
            zone.classList.add('drag-over');
        });

        zone.addEventListener('dragleave', () => zone.classList.remove('drag-over'));

        zone.addEventListener('drop', (e) => {
            e.preventDefault();
            zone.classList.remove('drag-over');
            const elem = e.dataTransfer.getData('text/plain');
            
            if (zone.dataset.slot === '1') {
                slot1Val = elem;
                zone.innerText = elem;
            } else {
                slot2Val = elem;
                zone.innerText = elem;
            }
        });
    });

    const mixBtn = document.getElementById('mix-btn');
    const resetBtn = document.getElementById('reset-lab-btn');

    if (mixBtn) mixBtn.addEventListener('click', runReaction);
    if (resetBtn) resetBtn.addEventListener('click', resetLab);
}

function runReaction() {
    const output = document.getElementById('reaction-output');
    const liquid = document.getElementById('liquid');

    if (!output || !liquid) return;

    if (!slot1Val || !slot2Val) {
        output.innerHTML = '<span class="text-danger">Эки затка тең элемент сүйрөп таштаңыз!</span>';
        return;
    }

    const pair = [slot1Val, slot2Val].sort().join(' + ');

    if (pair === 'H2 + O2') {
        liquid.style.height = '70%'; liquid.style.backgroundColor = '#38bdf8';
        output.innerHTML = '<h5>2H₂ + O₂ → 2H₂O</h5><p class="text-success">Суу пайда болду!</p>';
    } else if (pair === 'Cl2 + Na') {
        liquid.style.height = '50%'; liquid.style.backgroundColor = '#f8fafc';
        output.innerHTML = '<h5>2Na + Cl₂ → 2NaCl</h5><p class="text-success">Аш тузу пайда болду!</p>';
    } else {
        liquid.style.height = '30%'; liquid.style.backgroundColor = '#64748b';
        output.innerHTML = '<h5>Реакция жүргөн жок</h5><p class="text-muted">Бул заттар кадимки шартта кошулбайт.</p>';
    }
}

function resetLab() {
    slot1Val = null; slot2Val = null;
    document.getElementById('zone-1').innerText = '1-Затты ушул жерге таштаңыз';
    document.getElementById('zone-2').innerText = '2-Затты ушул жерге таштаңыз';
    document.getElementById('liquid').style.height = '0%';
    document.getElementById('reaction-output').innerHTML = '<p class="text-body-secondary">Заттарды тандап, колбага таштаңыз...</p>';
}

// ==========================================
// 6. INTERACTIVE QUIZ
// ==========================================
const quizData = [
    { question: "Суунун химиялык формуласында канча водород атому бар?", options: ["1", "2", "3", "4"], correct: 1 },
    { question: "Алмаз менен Графит кайсы элементтин түрү?", options: ["Кычкылтек", "Азот", "Көмүртек (C)", "Темир"], correct: 2 }
];
let currentQuizIndex = 0;

function loadQuizQuestion() {
    const q = quizData[currentQuizIndex];
    const questionEl = document.getElementById('quiz-question');
    if (!questionEl) return;

    questionEl.innerText = `${currentQuizIndex + 1}. ${q.question}`;
    const optionsGrid = document.getElementById('quiz-options');
    optionsGrid.innerHTML = '';

    document.getElementById('quiz-feedback').innerText = '';
    document.getElementById('next-quiz-btn').style.display = 'none';

    q.options.forEach((opt, idx) => {
        const btn = document.createElement('button');
        btn.className = 'btn btn-outline-secondary text-start';
        btn.innerText = opt;
        btn.addEventListener('click', () => checkQuizAnswer(idx));
        optionsGrid.appendChild(btn);
    });
}

function checkQuizAnswer(selectedIndex) {
    const q = quizData[currentQuizIndex];
    const feedback = document.getElementById('quiz-feedback');

    if (selectedIndex === q.correct) {
        feedback.innerHTML = '<span class="text-success">Азаматсыз! Жооп туура.</span>';
    } else {
        feedback.innerHTML = `<span class="text-danger">Ката! Туура жооп: ${q.options[q.correct]}</span>`;
    }
    document.getElementById('next-quiz-btn').style.display = 'inline-block';
}

const nextQuizBtn = document.getElementById('next-quiz-btn');
if (nextQuizBtn) {
    nextQuizBtn.addEventListener('click', () => {
        currentQuizIndex = (currentQuizIndex + 1) % quizData.length;
        loadQuizQuestion();
    });
}

// ==========================================
// 7. FORM VALIDATION, LOCALSTORAGE & TIMER
// ==========================================
function setupContactForm() {
    const form = document.getElementById('contact-form');
    const alertBox = document.getElementById('form-alert');

    if (!form) return;

    const savedName = localStorage.getItem('user_name');
    const savedEmail = localStorage.getItem('user_email');
    if (savedName) document.getElementById('user-name').value = savedName;
    if (savedEmail) document.getElementById('user-email').value = savedEmail;

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const name = document.getElementById('user-name').value.trim();
        const email = document.getElementById('user-email').value.trim();
        const msg = document.getElementById('user-msg').value.trim();

        if (!name || !email || !msg) {
            alertBox.innerHTML = '<div class="alert alert-danger">Сураныч, бардык талааларды толтуруңуз!</div>';
            return;
        }

        localStorage.setItem('user_name', name);
        localStorage.setItem('user_email', email);

        alertBox.innerHTML = '<div class="alert alert-success">Маалыматыңыз ийгиликтүү сакталды! Рахмат.</div>';
        form.reset();

        setTimeout(() => {
            alertBox.innerHTML = '';
        }, 3000);
    });
}

// 3D Молекулаларды которуштуруу
function loadMolecule(molKey) {
    const moleculesDB = {
        caffeine: { name: "Кофеин", formula: "C₈H₁₀N₄O₂", desc: "Борбордук нерв системасын стимулдаштыруучу алкалоид." },
        aspirin: { name: "Аспирин", formula: "C₉H₈O₄", desc: "Ооруну басаңдатуучу жана ысытманы түшүрүүчү дары." },
        glucose: { name: "Глюкоза", formula: "C₆H₁₂O₆", desc: "Тирүү организмдер үчүн негизги энергия булагы." }
    };
    const mol = moleculesDB[molKey];
    const display = document.getElementById('mol-name-display');
    if (mol && display) {
        display.innerHTML = `<strong>${mol.name}</strong> (${mol.formula})<br><span class="small text-muted">${mol.desc}</span>`;
    }
}
