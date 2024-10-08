export const machine = [
  {
    title: " 	Периодичность ремонтов агрегатов определяется	",
    answers: [
      { title: "	Распоряжением по подразделению	", bool: false },
      { title: "	Состоянием оборудования	", bool: false },
      { title: "	Годовым графиком ремонтов	", bool: true },
      { title: "	Месячным графиком ремонтов	", bool: false },
    ],
  },
  {
    title: " 	Корректировка графиков ремонтов производится	",
    answers: [
      { title: "	Не корректируется	", bool: false },
      { title: "	Письмом 	", bool: false },
      {
        title:
          "	Годовых графиков – месячным графиком, месячных графиков –недельным графиком, недельных графиков-письмом	",
        bool: true,
      },
      { title: "	Месячным графиком	", bool: false },
    ],
  },
  {
    title: " 	Строповка груза, превышающего грузоподъемность крана, допускается	",
    answers: [
      { title: "	При производственной необходимости	", bool: false },
      { title: "	При выполнении ремонтных работ	", bool: false },
      { title: "	По указанию начальника ремонта	", bool: false },
      { title: "	Не допускается	", bool: true },
    ],
  },
  {
    title: " 	Смазчик при прокачивании механизмов пресса руководствуется	",
    answers: [
      { title: "	Ремонтной ведомостью	", bool: false },
      { title: "	Картой смазки агрегата	", bool: true },
      { title: "	Справочником масел	", bool: false },
      { title: "	Рекламным проспектом	", bool: false },
    ],
  },
  {
    title: " 	Периодичность технического обслуживания оборудования определяет	",
    answers: [
      {
        title:
          "	Регламент технического обслуживания, составленный в соответствии с инструкцией завода изготовителя	",
        bool: true,
      },
      { title: "	Стандарт предприятия 	", bool: false },
      { title: "	Инструкция завода-изготовителя 	", bool: false },
      { title: "	Технологическая инструкция	", bool: false },
    ],
  },
  {
    title: " 	Регламенты технического обслуживания распространяются на 	",
    answers: [
      { title: "	Ремонтный персонал	", bool: false },
      { title: "	Технологический персонал	", bool: false },
      {
        title: "	Технологический, ремонтный персонал и службы заказчика	",
        bool: true,
      },
      { title: "	РСС подразделения	", bool: false },
    ],
  },
  {
    title:
      " 	Порядок разборки и сборки механизмов при проведении ремонта определяется 	",
    answers: [
      { title: "	Ремонтной ведомостью	", bool: false },
      { title: "	Технологической картой	", bool: true },
      { title: "	Указанием бригадира, мастера	", bool: false },
      { title: "	Инструкцией завода-изготовителя 	", bool: false },
    ],
  },
  {
    title: " 	Температура нагрева муфты тормоза пресса не должна превышать	",
    answers: [
      { title: "	50о С	", bool: false },
      { title: "	100о С	", bool: true },
      { title: "	150о С	", bool: false },
    ],
  },
  {
    title:
      " 	Чем определяется диаметр сварочного электрода при ручной сварке металлов	",
    answers: [
      { title: "	Толщиной свариваемого металла	", bool: false },
      {
        title:
          "	Толщиной свариваемого металла и пространственным расположением шва	",
        bool: true,
      },
      { title: "	Пространственным расположением шва	", bool: false },
    ],
  },
  {
    title:
      " 	Где должно проводиться техническое освидетельствование съемных грузозахватных приспособлений после их ремонта?	",
    answers: [
      { title: "	На заводе-изготовителе	", bool: false },
      {
        title: "	На предприятии-владельце съемных грузозахватных приспособлений	",
        bool: false,
      },
      { title: "	На предприятии, где проводился ремонт	", bool: true },
      { title: "	Не проводится	", bool: false },
    ],
  },
  {
    title:
      " 	Минимальное количество зажимов при креплении конца каната грузоподъемного крана должно быть 	",
    answers: [
      { title: "	4	", bool: false },
      { title: "	2	", bool: true },
      { title: "	5	", bool: false },
      { title: "	6	", bool: false },
    ],
  },
  {
    title:
      " 	Какие соединения должны применяться в конструкции механизмов кранов, передающих крутящий момент?	",
    answers: [
      { title: "	Шлицевые	", bool: true },
      { title: "	Сварные	", bool: false },
      { title: "	Болтовые	", bool: true },
      { title: "	Шпоночные	", bool: true },
    ],
  },
  {
    title: " 	Пневмораспределитель предназначен для управления приводом 	",
    answers: [
      { title: "	ползуна	", bool: false },
      { title: "	Муфты- тормоза	", bool: true },
      { title: "	Коленчатого вала	", bool: false },
      { title: "	Смазочной станции	", bool: false },
    ],
  },
  {
    title:
      " 	Проведение проверки механизмов на технологическую точность требуется	",
    answers: [
      { title: "	При проведении ремонта агрегата	", bool: false },
      {
        title:
          "	При проведении ремонта механизма, включенного в перечень оборудования подлежащего проверке на тех. точность	",
        bool: true,
      },
      { title: "	Согласно графика	", bool: false },
      { title: "	Ежесменно 	", bool: false },
    ],
  },
  {
    title:
      " 	Рабочий температурный режим нагрева подшипников-скольжения не должен превышать	",
    answers: [
      { title: "	20-30о С	", bool: false },
      { title: "	60-70о С	", bool: true },
      { title: "	100-110о С	", bool: false },
      { title: "	150-160о С	", bool: false },
    ],
  },
  {
    title:
      " 	Входит ли масса грузозахватных приспособлений в грузоподъемность крана	",
    answers: [
      { title: "	Входит, если масса ГЗП не более 1 тонны	", bool: false },
      { title: "	Входит	", bool: false },
      { title: "	Не входит	", bool: true },
      {
        title: "	Входит, если ГЗП изготовлены на том же предприятии, что и кран	",
        bool: false,
      },
    ],
  },
  {
    title:
      " 	Колодочный тормоз не исправен, если износ накладок на колодках  составляет	",
    answers: [
      { title: "	30% от первоначальной толщины	", bool: false },
      { title: "	40% от первоначальной толщины	", bool: false },
      { title: "	50% от первоначальной толщины	", bool: false },
      {
        title:
          "	До появления головок заклёпок или более 50% от первоначальной толщины	",
        bool: true,
      },
    ],
  },
  {
    title:
      " 	Максимальный допустимый нагрев подшипников большого диаметра, при монтаже, составляет  	",
    answers: [
      { title: "	До температуры 80-90оС в масляной ванне	", bool: false },
      {
        title: "	До температуры 80-90оС газовым резаком открытым пламенем	",
        bool: false,
      },
      { title: "	До температуры 130-140оС индукционным методом	", bool: false },
      { title: "	До температуры 100-110оС индукционным методом	", bool: true },
    ],
  },
];
