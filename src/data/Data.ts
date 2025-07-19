import { ActivityLevel, Room, SportType, User, Gender } from "@/types";

// Mock Users
export const mockUsers: User[] = [
  {
    id: "1",
    name: "Xonazimxon A'zamova",
    avatar: "https://randomuser.me/api/portraits/men/34.jpg",
    interests: [SportType.Running, SportType.Football, SportType.Tennis],
    activityLevel: ActivityLevel.Intermediate,
    joinedDate: "2025-06-24",
    bio: "Fitness enthusiast with interest in Running, Football, Tennis.",
    gender: Gender.Female
  },
  {
    id: "2",
    name: "Hojiakbar Abdug'offorov",
    avatar: "https://randomuser.me/api/portraits/women/6.jpg",
    interests: [SportType.Yoga, SportType.Cycling, SportType.Football],
    activityLevel: ActivityLevel.Beginner,
    joinedDate: "2025-06-18",
    bio: "Active lifestyle seeker with interest in Yoga, Cycling, Football.",
    gender: Gender.Male
  },
  {
    id: "3",
    name: "Hojiakbar Abdugafforov",
    avatar: "https://randomuser.me/api/portraits/men/11.jpg",
    interests: [SportType.Cycling, SportType.Yoga],
    activityLevel: ActivityLevel.Intermediate,
    joinedDate: "2025-05-16",
    bio: "Loves sports with interest in Cycling, Yoga.",
    gender: Gender.Male
  },
  {
    id: "4",
    name: "Humoyun Abduhalilov",
    avatar: "https://randomuser.me/api/portraits/men/54.jpg",
    interests: [SportType.Running, SportType.Football],
    activityLevel: ActivityLevel.Advanced,
    joinedDate: "2025-05-09",
    bio: "Active lifestyle seeker with interest in Running, Football.",
    gender: Gender.Male
  },
  {
    id: "5",
    name: "Abdurahmon Abduhamidov",
    avatar: "https://randomuser.me/api/portraits/men/13.jpg",
    interests: [SportType.Yoga],
    activityLevel: ActivityLevel.Advanced,
    joinedDate: "2025-06-18",
    bio: "Active lifestyle seeker with interest in Yoga.",
    gender: Gender.Male
  },
  {
    id: "6",
    name: "Fazliddin Abduholiqov",
    avatar: "https://randomuser.me/api/portraits/women/80.jpg",
    interests: [SportType.Running],
    activityLevel: ActivityLevel.Advanced,
    joinedDate: "2025-06-04",
    bio: "Fitness enthusiast with interest in Running.",
    gender: Gender.Female
  },
  {
    id: "7",
    name: "Abdusalim Abdukarimov",
    avatar: "https://randomuser.me/api/portraits/men/82.jpg",
    interests: [SportType.Swimming, SportType.Cycling, SportType.Tennis],
    activityLevel: ActivityLevel.Advanced,
    joinedDate: "2025-07-11",
    bio: "Fitness enthusiast with interest in Swimming, Cycling, Tennis.",
    gender: Gender.Male
  },
  {
    id: "8",
    name: "Maftuna Abdukhakimova",
    avatar: "https://randomuser.me/api/portraits/women/54.jpg",
    interests: [SportType.Basketball, SportType.Yoga],
    activityLevel: ActivityLevel.Advanced,
    joinedDate: "2025-06-10",
    bio: "Fitness enthusiast with interest in Basketball, Yoga.",
    gender: Gender.Female
  },
  {
    id: "9",
    name: "Shukrullo Abdulkhakimov",
    avatar: "https://randomuser.me/api/portraits/men/40.jpg",
    interests: [SportType.Cycling],
    activityLevel: ActivityLevel.Advanced,
    joinedDate: "2025-07-03",
    bio: "Loves sports with interest in Cycling.",
    gender: Gender.Male
  },
  {
    id: "10",
    name: "Ismoil Abdullayev",
    avatar: "https://randomuser.me/api/portraits/women/32.jpg",
    interests: [SportType.Swimming],
    activityLevel: ActivityLevel.Intermediate,
    joinedDate: "2025-07-08",
    bio: "Fitness enthusiast with interest in Swimming.",
    gender: Gender.Female
  },
  {
    id: "11",
    name: "Muhammadamin Abdullayev",
    avatar: "https://randomuser.me/api/portraits/men/34.jpg",
    interests: [SportType.Running],
    activityLevel: ActivityLevel.Beginner,
    joinedDate: "2025-07-03",
    bio: "Loves sports with interest in Running.",
    gender: Gender.Male
  },
  {
    id: "12",
    name: "Rustambek Abdullayev",
    avatar: "https://randomuser.me/api/portraits/women/72.jpg",
    interests: [SportType.Cycling, SportType.Basketball, SportType.Gym],
    activityLevel: ActivityLevel.Beginner,
    joinedDate: "2025-06-24",
    bio: "Active lifestyle seeker with interest in Cycling, Basketball, Gym.",
    gender: Gender.Female
  },
  {
    id: "13",
    name: "Sirojiddin Abdullayev",
    avatar: "https://randomuser.me/api/portraits/women/16.jpg",
    interests: [SportType.Swimming, SportType.Basketball],
    activityLevel: ActivityLevel.Beginner,
    joinedDate: "2025-05-02",
    bio: "Loves sports with interest in Swimming, Basketball.",
    gender: Gender.Female
  },
  {
    id: "14",
    name: "Abdujalil Abdumajidov",
    avatar: "https://randomuser.me/api/portraits/women/54.jpg",
    interests: [SportType.Cycling],
    activityLevel: ActivityLevel.Advanced,
    joinedDate: "2025-06-28",
    bio: "Active lifestyle seeker with interest in Cycling.",
    gender: Gender.Female
  },
  {
    id: "15",
    name: "Aziz Abduqodirov",
    avatar: "https://randomuser.me/api/portraits/women/70.jpg",
    interests: [SportType.Football, SportType.Gym],
    activityLevel: ActivityLevel.Beginner,
    joinedDate: "2025-06-08",
    bio: "Loves sports with interest in Football, Gym.",
    gender: Gender.Female
  },
  {
    id: "16",
    name: "Muhabbatxon Abdurahimova",
    avatar: "https://randomuser.me/api/portraits/men/47.jpg",
    interests: [SportType.Running],
    activityLevel: ActivityLevel.Beginner,
    joinedDate: "2025-07-16",
    bio: "Active lifestyle seeker with interest in Running.",
    gender: Gender.Female
  },
  {
    id: "17",
    name: "Mubina Abdurahmanova",
    avatar: "https://randomuser.me/api/portraits/men/29.jpg",
    interests: [SportType.Yoga, SportType.Football, SportType.Gym],
    activityLevel: ActivityLevel.Intermediate,
    joinedDate: "2025-05-31",
    bio: "Loves sports with interest in Yoga, Football, Gym.",
    gender: Gender.Female
  },
  {
    id: "18",
    name: "Muhammadrizo Abduraimov",
    avatar: "https://randomuser.me/api/portraits/men/46.jpg",
    interests: [SportType.Tennis, SportType.Cycling],
    activityLevel: ActivityLevel.Advanced,
    joinedDate: "2025-05-09",
    bio: "Fitness enthusiast with interest in Tennis, Cycling.",
    gender: Gender.Male
  },
  {
    id: "19",
    name: "Abror Abdurashidov",
    avatar: "https://randomuser.me/api/portraits/men/3.jpg",
    interests: [SportType.Basketball, SportType.Yoga],
    activityLevel: ActivityLevel.Advanced,
    joinedDate: "2025-07-17",
    bio: "Active lifestyle seeker with interest in Basketball, Yoga.",
    gender: Gender.Male
  },
  {
    id: "20",
    name: "Abubakr Abduraximov",
    avatar: "https://randomuser.me/api/portraits/women/40.jpg",
    interests: [SportType.Football, SportType.Gym, SportType.Running],
    activityLevel: ActivityLevel.Advanced,
    joinedDate: "2025-06-17",
    bio: "Loves sports with interest in Football, Gym, Running.",
    gender: Gender.Female
  },
  {
    id: "21",
    name: "Abdulloh Abdurazzoqov",
    avatar: "https://randomuser.me/api/portraits/men/36.jpg",
    interests: [SportType.Tennis, SportType.Cycling],
    activityLevel: ActivityLevel.Intermediate,
    joinedDate: "2025-06-13",
    bio: "Loves sports with interest in Tennis, Cycling.",
    gender: Gender.Male
  },
  {
    id: "22",
    name: "Muxammadjon Abduvohidov",
    avatar: "https://randomuser.me/api/portraits/women/22.jpg",
    interests: [SportType.Yoga, SportType.Gym, SportType.Cycling],
    activityLevel: ActivityLevel.Beginner,
    joinedDate: "2025-05-08",
    bio: "Fitness enthusiast with interest in Yoga, Gym, Cycling.",
    gender: Gender.Female
  },
  {
    id: "23",
    name: "Dilnoza Abduvohidova",
    avatar: "https://randomuser.me/api/portraits/women/76.jpg",
    interests: [SportType.Swimming],
    activityLevel: ActivityLevel.Advanced,
    joinedDate: "2025-07-02",
    bio: "Fitness enthusiast with interest in Swimming.",
    gender: Gender.Female
  },
  {
    id: "24",
    name: "AHMADXO'JA Abrorhajaev",
    avatar: "https://randomuser.me/api/portraits/men/30.jpg",
    interests: [SportType.Swimming, SportType.Tennis],
    activityLevel: ActivityLevel.Intermediate,
    joinedDate: "2025-05-13",
    bio: "Loves sports with interest in Swimming, Tennis.",
    gender: Gender.Male
  },
  {
    id: "25",
    name: "Asilbek Adilov",
    avatar: "https://randomuser.me/api/portraits/men/11.jpg",
    interests: [SportType.Basketball, SportType.Football],
    activityLevel: ActivityLevel.Advanced,
    joinedDate: "2025-05-13",
    bio: "Loves sports with interest in Basketball, Football.",
    gender: Gender.Male
  },
  {
    id: "26",
    name: "Dilnoza Ahmadova",
    avatar: "https://randomuser.me/api/portraits/men/70.jpg",
    interests: [SportType.Swimming],
    activityLevel: ActivityLevel.Intermediate,
    joinedDate: "2025-07-08",
    bio: "Loves sports with interest in Swimming.",
    gender: Gender.Female
  },
  {
    id: "27",
    name: "Abdulaziz Ahmedov",
    avatar: "https://randomuser.me/api/portraits/men/61.jpg",
    interests: [SportType.Yoga],
    activityLevel: ActivityLevel.Advanced,
    joinedDate: "2025-05-10",
    bio: "Fitness enthusiast with interest in Yoga.",
    gender: Gender.Male
  },
  {
    id: "28",
    name: "Nursaid Akbarov",
    avatar: "https://randomuser.me/api/portraits/women/89.jpg",
    interests: [SportType.Tennis, SportType.Gym, SportType.Cycling],
    activityLevel: ActivityLevel.Intermediate,
    joinedDate: "2025-07-02",
    bio: "Loves sports with interest in Tennis, Gym, Cycling.",
    gender: Gender.Female
  },
  {
    id: "29",
    name: "Mubina Akbarova",
    avatar: "https://randomuser.me/api/portraits/men/7.jpg",
    interests: [SportType.Cycling, SportType.Tennis],
    activityLevel: ActivityLevel.Advanced,
    joinedDate: "2025-06-19",
    bio: "Fitness enthusiast with interest in Cycling, Tennis.",
    gender: Gender.Female
  },
  {
    id: "30",
    name: "Oysha Akbarova",
    avatar: "https://randomuser.me/api/portraits/women/11.jpg",
    interests: [SportType.Swimming, SportType.Gym, SportType.Cycling],
    activityLevel: ActivityLevel.Intermediate,
    joinedDate: "2025-05-28",
    bio: "Active lifestyle seeker with interest in Swimming, Gym, Cycling.",
    gender: Gender.Female
  },
  {
    id: "31",
    name: "Saidolimxon Akmalxonov",
    avatar: "https://randomuser.me/api/portraits/women/54.jpg",
    interests: [SportType.Football, SportType.Tennis],
    activityLevel: ActivityLevel.Intermediate,
    joinedDate: "2025-07-04",
    bio: "Fitness enthusiast with interest in Football, Tennis.",
    gender: Gender.Female
  },
  {
    id: "32",
    name: "Muhammadaziz Akramov",
    avatar: "https://randomuser.me/api/portraits/women/85.jpg",
    interests: [SportType.Football],
    activityLevel: ActivityLevel.Intermediate,
    joinedDate: "2025-05-09",
    bio: "Active lifestyle seeker with interest in Football.",
    gender: Gender.Female
  },
  {
    id: "33",
    name: "Humoyun Alijonov",
    avatar: "https://randomuser.me/api/portraits/men/44.jpg",
    interests: [SportType.Cycling, SportType.Yoga],
    activityLevel: ActivityLevel.Advanced,
    joinedDate: "2025-05-11",
    bio: "Fitness enthusiast with interest in Cycling, Yoga.",
    gender: Gender.Male
  },
  {
    id: "34",
    name: "Ozodbek Amirov",
    avatar: "https://randomuser.me/api/portraits/men/85.jpg",
    interests: [SportType.Gym],
    activityLevel: ActivityLevel.Intermediate,
    joinedDate: "2025-05-31",
    bio: "Fitness enthusiast with interest in Gym.",
    gender: Gender.Male
  },
  {
    id: "35",
    name: "Muhammaddiyor Anvarov",
    avatar: "https://randomuser.me/api/portraits/men/27.jpg",
    interests: [SportType.Basketball],
    activityLevel: ActivityLevel.Advanced,
    joinedDate: "2025-06-28",
    bio: "Active lifestyle seeker with interest in Basketball.",
    gender: Gender.Male
  },
  {
    id: "36",
    name: "Xadicha Artikbaeva",
    avatar: "https://randomuser.me/api/portraits/men/13.jpg",
    interests: [SportType.Cycling, SportType.Football, SportType.Gym],
    activityLevel: ActivityLevel.Advanced,
    joinedDate: "2025-05-09",
    bio: "Loves sports with interest in Cycling, Football, Gym.",
    gender: Gender.Female
  },
  {
    id: "37",
    name: "Rasulbek Artikboyev",
    avatar: "https://randomuser.me/api/portraits/women/7.jpg",
    interests: [SportType.Running, SportType.Basketball],
    activityLevel: ActivityLevel.Beginner,
    joinedDate: "2025-06-08",
    bio: "Loves sports with interest in Running, Basketball.",
    gender: Gender.Female
  },
  {
    id: "38",
    name: "Muhhamedov Asilbek",
    avatar: "https://randomuser.me/api/portraits/men/24.jpg",
    interests: [SportType.Basketball, SportType.Yoga],
    activityLevel: ActivityLevel.Advanced,
    joinedDate: "2025-05-15",
    bio: "Fitness enthusiast with interest in Basketball, Yoga.",
    gender: Gender.Male
  },
  {
    id: "39",
    name: "Abbos Athamjonov",
    avatar: "https://randomuser.me/api/portraits/women/40.jpg",
    interests: [SportType.Cycling, SportType.Running],
    activityLevel: ActivityLevel.Advanced,
    joinedDate: "2025-06-03",
    bio: "Fitness enthusiast with interest in Cycling, Running.",
    gender: Gender.Female
  },
  {
    id: "40",
    name: "Gavharoy Avbakirova",
    avatar: "https://randomuser.me/api/portraits/men/34.jpg",
    interests: [SportType.Gym, SportType.Basketball],
    activityLevel: ActivityLevel.Advanced,
    joinedDate: "2025-06-05",
    bio: "Fitness enthusiast with interest in Gym, Basketball.",
    gender: Gender.Male
  },
  {
    id: "41",
    name: "Ismoil Axrorjonov",
    avatar: "https://randomuser.me/api/portraits/men/37.jpg",
    interests: [SportType.Basketball, SportType.Football],
    activityLevel: ActivityLevel.Intermediate,
    joinedDate: "2025-06-26",
    bio: "Fitness enthusiast with interest in Basketball, Football.",
    gender: Gender.Male
  },
  {
    id: "42",
    name: "Odina Axrorova",
    avatar: "https://randomuser.me/api/portraits/men/56.jpg",
    interests: [SportType.Football, SportType.Swimming, SportType.Running],
    activityLevel: ActivityLevel.Advanced,
    joinedDate: "2025-05-20",
    bio: "Loves sports with interest in Football, Swimming, Running.",
    gender: Gender.Female
  },
  {
    id: "43",
    name: "Abubakir Azambekov",
    avatar: "https://randomuser.me/api/portraits/women/57.jpg",
    interests: [SportType.Yoga, SportType.Gym],
    activityLevel: ActivityLevel.Beginner,
    joinedDate: "2025-06-16",
    bio: "Fitness enthusiast with interest in Yoga, Gym.",
    gender: Gender.Female
  },
  {
    id: "44",
    name: "Hasanjon Azamjonov",
    avatar: "https://randomuser.me/api/portraits/women/42.jpg",
    interests: [SportType.Basketball],
    activityLevel: ActivityLevel.Advanced,
    joinedDate: "2025-06-22",
    bio: "Fitness enthusiast with interest in Basketball.",
    gender: Gender.Female
  },
  {
    id: "45",
    name: "Husanjon Azamjonov",
    avatar: "https://randomuser.me/api/portraits/women/2.jpg",
    interests: [SportType.Cycling, SportType.Yoga],
    activityLevel: ActivityLevel.Beginner,
    joinedDate: "2025-05-23",
    bio: "Fitness enthusiast with interest in Cycling, Yoga.",
    gender: Gender.Female
  },
  {
    id: "46",
    name: "Firdavs Bahodirov",
    avatar: "https://randomuser.me/api/portraits/men/17.jpg",
    interests: [SportType.Cycling],
    activityLevel: ActivityLevel.Intermediate,
    joinedDate: "2025-05-05",
    bio: "Active lifestyle seeker with interest in Cycling.",
    gender: Gender.Male
  },
  {
    id: "47",
    name: "Ozodbek Bahromov",
    avatar: "https://randomuser.me/api/portraits/women/10.jpg",
    interests: [SportType.Football],
    activityLevel: ActivityLevel.Advanced,
    joinedDate: "2025-05-04",
    bio: "Active lifestyle seeker with interest in Football.",
    gender: Gender.Female
  },
  {
    id: "48",
    name: "Xumoyun Bahtiyorov",
    avatar: "https://randomuser.me/api/portraits/men/80.jpg",
    interests: [SportType.Swimming, SportType.Football, SportType.Running],
    activityLevel: ActivityLevel.Intermediate,
    joinedDate: "2025-07-05",
    bio: "Active lifestyle seeker with interest in Swimming, Football, Running.",
    gender: Gender.Male
  },
  {
    id: "49",
    name: "Bilol Bakhrillaev",
    avatar: "https://randomuser.me/api/portraits/men/75.jpg",
    interests: [SportType.Basketball, SportType.Football, SportType.Swimming],
    activityLevel: ActivityLevel.Beginner,
    joinedDate: "2025-07-14",
    bio: "Active lifestyle seeker with interest in Basketball, Football, Swimming.",
    gender: Gender.Female
  },
  {
    id: "50",
    name: "Begzod Baxodirov",
    avatar: "https://randomuser.me/api/portraits/men/12.jpg",
    interests: [SportType.Swimming, SportType.Football, SportType.Yoga],
    activityLevel: ActivityLevel.Advanced,
    joinedDate: "2025-07-17",
    bio: "Active lifestyle seeker with interest in Swimming, Football, Yoga.",
    gender: Gender.Female
  },
  {
    id: "51",
    name: "Firdavs Baxodirov",
    avatar: "https://randomuser.me/api/portraits/men/93.jpg",
    interests: [SportType.Cycling, SportType.Swimming, SportType.Gym],
    activityLevel: ActivityLevel.Advanced,
    joinedDate: "2025-07-06",
    bio: "Fitness enthusiast with interest in Cycling, Swimming, Gym.",
    gender: Gender.Male
  },
  {
    id: "52",
    name: "Iskandar Baxtiyorjonov",
    avatar: "https://randomuser.me/api/portraits/women/24.jpg",
    interests: [SportType.Tennis],
    activityLevel: ActivityLevel.Beginner,
    joinedDate: "2025-06-10",
    bio: "Fitness enthusiast with interest in Tennis.",
    gender: Gender.Female
  },
  {
    id: "53",
    name: "Mardon Baxtiyorov",
    avatar: "https://randomuser.me/api/portraits/men/79.jpg",
    interests: [SportType.Yoga, SportType.Football, SportType.Gym],
    activityLevel: ActivityLevel.Advanced,
    joinedDate: "2025-06-07",
    bio: "Active lifestyle seeker with interest in Yoga, Football, Gym.",
    gender: Gender.Male
  },
  {
    id: "54",
    name: "Mustafo Baxtiyorov",
    avatar: "https://randomuser.me/api/portraits/men/75.jpg",
    interests: [SportType.Football, SportType.Running, SportType.Swimming],
    activityLevel: ActivityLevel.Advanced,
    joinedDate: "2025-07-18",
    bio: "Active lifestyle seeker with interest in Football, Running, Swimming.",
    gender: Gender.Female
  },
  {
    id: "55",
    name: "Nurbekjon Bobonqulov",
    avatar: "https://randomuser.me/api/portraits/women/48.jpg",
    interests: [SportType.Swimming],
    activityLevel: ActivityLevel.Beginner,
    joinedDate: "2025-07-14",
    bio: "Fitness enthusiast with interest in Swimming.",
    gender: Gender.Female
  },
  {
    id: "56",
    name: "Lola Bunyadova",
    avatar: "https://randomuser.me/api/portraits/women/39.jpg",
    interests: [SportType.Yoga, SportType.Tennis],
    activityLevel: ActivityLevel.Advanced,
    joinedDate: "2025-06-30",
    bio: "Loves sports with interest in Yoga, Tennis.",
    gender: Gender.Female
  },
  {
    id: "57",
    name: "Nozimxo'ja Burxonxo'jayev",
    avatar: "https://randomuser.me/api/portraits/women/97.jpg",
    interests: [SportType.Gym, SportType.Yoga],
    activityLevel: ActivityLevel.Advanced,
    joinedDate: "2025-05-26",
    bio: "Fitness enthusiast with interest in Gym, Yoga.",
    gender: Gender.Female
  },
  {
    id: "58",
    name: "Muslima Chanoyeva",
    avatar: "https://randomuser.me/api/portraits/men/53.jpg",
    interests: [SportType.Yoga],
    activityLevel: ActivityLevel.Beginner,
    joinedDate: "2025-06-28",
    bio: "Active lifestyle seeker with interest in Yoga.",
    gender: Gender.Female
  },
  {
    id: "59",
    name: "Akbar Daminov",
    avatar: "https://randomuser.me/api/portraits/women/98.jpg",
    interests: [SportType.Basketball],
    activityLevel: ActivityLevel.Intermediate,
    joinedDate: "2025-05-01",
    bio: "Loves sports with interest in Basketball.",
    gender: Gender.Female
  },
  {
    id: "60",
    name: "Nozima Doniyorova",
    avatar: "https://randomuser.me/api/portraits/women/83.jpg",
    interests: [SportType.Swimming, SportType.Yoga],
    activityLevel: ActivityLevel.Intermediate,
    joinedDate: "2025-06-01",
    bio: "Active lifestyle seeker with interest in Swimming, Yoga.",
    gender: Gender.Female
  },
  {
    id: "61",
    name: "Abror Egamberdiyev",
    avatar: "https://randomuser.me/api/portraits/women/62.jpg",
    interests: [SportType.Yoga],
    activityLevel: ActivityLevel.Beginner,
    joinedDate: "2025-07-04",
    bio: "Active lifestyle seeker with interest in Yoga.",
    gender: Gender.Female
  },
  {
    id: "62",
    name: "Behruzbek Ergashev",
    avatar: "https://randomuser.me/api/portraits/men/40.jpg",
    interests: [SportType.Football, SportType.Running],
    activityLevel: ActivityLevel.Advanced,
    joinedDate: "2025-06-05",
    bio: "Active lifestyle seeker with interest in Football, Running.",
    gender: Gender.Male
  },
  {
    id: "63",
    name: "Robiya Erkinova",
    avatar: "https://randomuser.me/api/portraits/men/82.jpg",
    interests: [SportType.Cycling, SportType.Tennis],
    activityLevel: ActivityLevel.Beginner,
    joinedDate: "2025-06-06",
    bio: "Active lifestyle seeker with interest in Cycling, Tennis.",
    gender: Gender.Female
  },
  {
    id: "64",
    name: "Muhammadaziz Faxriddinov",
    avatar: "https://randomuser.me/api/portraits/men/7.jpg",
    interests: [SportType.Gym, SportType.Basketball],
    activityLevel: ActivityLevel.Advanced,
    joinedDate: "2025-06-19",
    bio: "Loves sports with interest in Gym, Basketball.",
    gender: Gender.Male
  },
  {
    id: "65",
    name: "Abbos G'ofurov",
    avatar: "https://randomuser.me/api/portraits/men/53.jpg",
    interests: [SportType.Basketball, SportType.Running, SportType.Yoga],
    activityLevel: ActivityLevel.Beginner,
    joinedDate: "2025-06-23",
    bio: "Active lifestyle seeker with interest in Basketball, Running, Yoga.",
    gender: Gender.Female
  },
  {
    id: "66",
    name: "Azizjon G'opporov",
    avatar: "https://randomuser.me/api/portraits/men/38.jpg",
    interests: [SportType.Swimming, SportType.Football],
    activityLevel: ActivityLevel.Advanced,
    joinedDate: "2025-07-01",
    bio: "Loves sports with interest in Swimming, Football.",
    gender: Gender.Male
  },
  {
    id: "67",
    name: "Kamron Gulomov",
    avatar: "https://randomuser.me/api/portraits/men/66.jpg",
    interests: [SportType.Tennis, SportType.Gym],
    activityLevel: ActivityLevel.Intermediate,
    joinedDate: "2025-07-09",
    bio: "Loves sports with interest in Tennis, Gym.",
    gender: Gender.Male
  },
  {
    id: "68",
    name: "Dilnavoz Gulomqodirova",
    avatar: "https://randomuser.me/api/portraits/women/70.jpg",
    interests: [SportType.Yoga],
    activityLevel: ActivityLevel.Intermediate,
    joinedDate: "2025-05-04",
    bio: "Loves sports with interest in Yoga.",
    gender: Gender.Female
  },
  {
    id: "69",
    name: "Abdurashid Habibulaev",
    avatar: "https://randomuser.me/api/portraits/women/57.jpg",
    interests: [SportType.Basketball, SportType.Gym],
    activityLevel: ActivityLevel.Intermediate,
    joinedDate: "2025-07-08",
    bio: "Fitness enthusiast with interest in Basketball, Gym.",
    gender: Gender.Female
  },
  {
    id: "70",
    name: "Abdullox Hosiyatov",
    avatar: "https://randomuser.me/api/portraits/men/16.jpg",
    interests: [SportType.Football, SportType.Yoga],
    activityLevel: ActivityLevel.Intermediate,
    joinedDate: "2025-06-29",
    bio: "Loves sports with interest in Football, Yoga.",
    gender: Gender.Male
  },
  {
    id: "71",
    name: "Xojarxon Ibaydullayeva",
    avatar: "https://randomuser.me/api/portraits/women/68.jpg",
    interests: [SportType.Basketball, SportType.Tennis, SportType.Swimming],
    activityLevel: ActivityLevel.Intermediate,
    joinedDate: "2025-06-13",
    bio: "Loves sports with interest in Basketball, Tennis, Swimming.",
    gender: Gender.Female
  },
  {
    id: "72",
    name: "Abdurauf Isakov",
    avatar: "https://randomuser.me/api/portraits/women/60.jpg",
    interests: [SportType.Yoga, SportType.Gym],
    activityLevel: ActivityLevel.Advanced,
    joinedDate: "2025-05-03",
    bio: "Loves sports with interest in Yoga, Gym.",
    gender: Gender.Female
  },
  {
    id: "73",
    name: "Jahongir Iskandarov",
    avatar: "https://randomuser.me/api/portraits/women/32.jpg",
    interests: [SportType.Gym, SportType.Cycling, SportType.Tennis],
    activityLevel: ActivityLevel.Intermediate,
    joinedDate: "2025-05-06",
    bio: "Fitness enthusiast with interest in Gym, Cycling, Tennis.",
    gender: Gender.Female
  },
  {
    id: "74",
    name: "Samandar Ismailov",
    avatar: "https://randomuser.me/api/portraits/women/97.jpg",
    interests: [SportType.Yoga, SportType.Gym, SportType.Tennis],
    activityLevel: ActivityLevel.Advanced,
    joinedDate: "2025-06-30",
    bio: "Active lifestyle seeker with interest in Yoga, Gym, Tennis.",
    gender: Gender.Female
  },
  {
    id: "75",
    name: "Kozimjon Isomov",
    avatar: "https://randomuser.me/api/portraits/men/6.jpg",
    interests: [SportType.Tennis, SportType.Football, SportType.Gym],
    activityLevel: ActivityLevel.Intermediate,
    joinedDate: "2025-07-17",
    bio: "Active lifestyle seeker with interest in Tennis, Football, Gym.",
    gender: Gender.Male
  },
  {
    id: "76",
    name: "Ulug`bek Istamov",
    avatar: "https://randomuser.me/api/portraits/men/13.jpg",
    interests: [SportType.Basketball, SportType.Football, SportType.Gym],
    activityLevel: ActivityLevel.Intermediate,
    joinedDate: "2025-06-18",
    bio: "Active lifestyle seeker with interest in Basketball, Football, Gym.",
    gender: Gender.Male
  },
  {
    id: "77",
    name: "Yasmina Jahongirova",
    avatar: "https://randomuser.me/api/portraits/men/83.jpg",
    interests: [SportType.Tennis, SportType.Basketball],
    activityLevel: ActivityLevel.Beginner,
    joinedDate: "2025-07-16",
    bio: "Loves sports with interest in Tennis, Basketball.",
    gender: Gender.Female
  },
  {
    id: "78",
    name: "Shohjahon Jumanazarov",
    avatar: "https://randomuser.me/api/portraits/women/70.jpg",
    interests: [SportType.Football],
    activityLevel: ActivityLevel.Beginner,
    joinedDate: "2025-06-13",
    bio: "Loves sports with interest in Football.",
    gender: Gender.Female
  },
  {
    id: "79",
    name: "Abdurahim Juramurodov",
    avatar: "https://randomuser.me/api/portraits/women/14.jpg",
    interests: [SportType.Basketball, SportType.Yoga, SportType.Football],
    activityLevel: ActivityLevel.Advanced,
    joinedDate: "2025-06-28",
    bio: "Fitness enthusiast with interest in Basketball, Yoga, Football.",
    gender: Gender.Female
  },
  {
    id: "80",
    name: "Asal Khojiyeva",
    avatar: "https://randomuser.me/api/portraits/men/60.jpg",
    interests: [SportType.Cycling, SportType.Basketball, SportType.Tennis],
    activityLevel: ActivityLevel.Advanced,
    joinedDate: "2025-06-25",
    bio: "Fitness enthusiast with interest in Cycling, Basketball, Tennis.",
    gender: Gender.Female
  },
  {
    id: "81",
    name: "Visola Kholmukhamedova",
    avatar: "https://randomuser.me/api/portraits/women/57.jpg",
    interests: [SportType.Tennis, SportType.Yoga],
    activityLevel: ActivityLevel.Beginner,
    joinedDate: "2025-06-01",
    bio: "Loves sports with interest in Tennis, Yoga.",
    gender: Gender.Female
  },
  {
    id: "82",
    name: "Husniddin Kironov",
    avatar: "https://randomuser.me/api/portraits/men/9.jpg",
    interests: [SportType.Yoga, SportType.Cycling],
    activityLevel: ActivityLevel.Beginner,
    joinedDate: "2025-05-24",
    bio: "Loves sports with interest in Yoga, Cycling.",
    gender: Gender.Male
  },
  {
    id: "83",
    name: "Abdulloh Komiljonov",
    avatar: "https://randomuser.me/api/portraits/women/70.jpg",
    interests: [SportType.Yoga, SportType.Swimming, SportType.Basketball],
    activityLevel: ActivityLevel.Intermediate,
    joinedDate: "2025-06-05",
    bio: "Active lifestyle seeker with interest in Yoga, Swimming, Basketball.",
    gender: Gender.Female
  },
  {
    id: "84",
    name: "Abdulloh Komilov",
    avatar: "https://randomuser.me/api/portraits/women/20.jpg",
    interests: [SportType.Cycling],
    activityLevel: ActivityLevel.Intermediate,
    joinedDate: "2025-06-22",
    bio: "Fitness enthusiast with interest in Cycling.",
    gender: Gender.Female
  },
  {
    id: "85",
    name: "Elyor Komilov",
    avatar: "https://randomuser.me/api/portraits/men/15.jpg",
    interests: [SportType.Tennis, SportType.Football],
    activityLevel: ActivityLevel.Advanced,
    joinedDate: "2025-06-07",
    bio: "Fitness enthusiast with interest in Tennis, Football.",
    gender: Gender.Male
  },
  {
    id: "86",
    name: "Shoxruz Kukanboyev",
    avatar: "https://randomuser.me/api/portraits/women/24.jpg",
    interests: [SportType.Gym, SportType.Football],
    activityLevel: ActivityLevel.Intermediate,
    joinedDate: "2025-06-17",
    bio: "Fitness enthusiast with interest in Gym, Football.",
    gender: Gender.Female
  },
  {
    id: "87",
    name: "Doniyor Kuziyev",
    avatar: "https://randomuser.me/api/portraits/women/5.jpg",
    interests: [SportType.Football, SportType.Cycling, SportType.Gym],
    activityLevel: ActivityLevel.Advanced,
    joinedDate: "2025-06-04",
    bio: "Fitness enthusiast with interest in Football, Cycling, Gym.",
    gender: Gender.Male
  },
  {
    id: "88",
    name: "Omadjon Latibjonov",
    avatar: "https://randomuser.me/api/portraits/men/63.jpg",
    interests: [SportType.Basketball, SportType.Tennis],
    activityLevel: ActivityLevel.Beginner,
    joinedDate: "2025-07-08",
    bio: "Loves sports with interest in Basketball, Tennis.",
    gender: Gender.Male
  },
  {
    id: "89",
    name: "Shirin Mahmudjanova",
    avatar: "https://randomuser.me/api/portraits/men/18.jpg",
    interests: [SportType.Swimming, SportType.Cycling],
    activityLevel: ActivityLevel.Beginner,
    joinedDate: "2025-07-16",
    bio: "Fitness enthusiast with interest in Swimming, Cycling.",
    gender: Gender.Female
  },
  {
    id: "90",
    name: "Dinora Maksudova",
    avatar: "https://randomuser.me/api/portraits/men/1.jpg",
    interests: [SportType.Cycling],
    activityLevel: ActivityLevel.Intermediate,
    joinedDate: "2025-05-02",
    bio: "Loves sports with interest in Cycling.",
    gender: Gender.Female
  },
  {
    id: "91",
    name: "Mohinabonu Maksudova",
    avatar: "https://randomuser.me/api/portraits/men/4.jpg",
    interests: [SportType.Gym, SportType.Cycling],
    activityLevel: ActivityLevel.Beginner,
    joinedDate: "2025-05-17",
    bio: "Active lifestyle seeker with interest in Gym, Cycling.",
    gender: Gender.Female
  },
  {
    id: "92",
    name: "Abrorbek Mammadiyev",
    avatar: "https://randomuser.me/api/portraits/women/59.jpg",
    interests: [SportType.Yoga],
    activityLevel: ActivityLevel.Intermediate,
    joinedDate: "2025-05-24",
    bio: "Active lifestyle seeker with interest in Yoga.",
    gender: Gender.Female
  },
  {
    id: "93",
    name: "Amirxon Matyakobov",
    avatar: "https://randomuser.me/api/portraits/women/45.jpg",
    interests: [SportType.Yoga],
    activityLevel: ActivityLevel.Advanced,
    joinedDate: "2025-05-10",
    bio: "Active lifestyle seeker with interest in Yoga.",
    gender: Gender.Female
  },
  {
    id: "94",
    name: "Abdulaziz Maxamadjonov",
    avatar: "https://randomuser.me/api/portraits/women/69.jpg",
    interests: [SportType.Football, SportType.Running],
    activityLevel: ActivityLevel.Intermediate,
    joinedDate: "2025-05-16",
    bio: "Fitness enthusiast with interest in Football, Running.",
    gender: Gender.Female
  },
  {
    id: "95",
    name: "Mirziyod Mirg'iyozov",
    avatar: "https://randomuser.me/api/portraits/women/94.jpg",
    interests: [SportType.Gym, SportType.Running],
    activityLevel: ActivityLevel.Beginner,
    joinedDate: "2025-06-26",
    bio: "Loves sports with interest in Gym, Running.",
    gender: Gender.Female
  },
  {
    id: "96",
    name: "Ulug`bek Mirhosilov",
    avatar: "https://randomuser.me/api/portraits/men/77.jpg",
    interests: [SportType.Swimming, SportType.Yoga],
    activityLevel: ActivityLevel.Beginner,
    joinedDate: "2025-05-28",
    bio: "Fitness enthusiast with interest in Swimming, Yoga.",
    gender: Gender.Female
  },
  {
    id: "97",
    name: "Rayya Mirsoatova",
    avatar: "https://randomuser.me/api/portraits/men/33.jpg",
    interests: [SportType.Swimming],
    activityLevel: ActivityLevel.Advanced,
    joinedDate: "2025-05-21",
    bio: "Loves sports with interest in Swimming.",
    gender: Gender.Female
  },
  {
    id: "98",
    name: "Mohira Mirzaahmadova",
    avatar: "https://randomuser.me/api/portraits/men/47.jpg",
    interests: [SportType.Swimming, SportType.Football, SportType.Cycling],
    activityLevel: ActivityLevel.Beginner,
    joinedDate: "2025-06-06",
    bio: "Active lifestyle seeker with interest in Swimming, Football, Cycling.",
    gender: Gender.Female
  },
  {
    id: "99",
    name: "Amirbek Mirzajanov",
    avatar: "https://randomuser.me/api/portraits/women/16.jpg",
    interests: [SportType.Tennis],
    activityLevel: ActivityLevel.Beginner,
    joinedDate: "2025-07-15",
    bio: "Loves sports with interest in Tennis.",
    gender: Gender.Female
  },
  {
    id: "100",
    name: "Suhrob Mirzakulov",
    avatar: "https://randomuser.me/api/portraits/women/70.jpg",
    interests: [SportType.Basketball, SportType.Yoga],
    activityLevel: ActivityLevel.Advanced,
    joinedDate: "2025-05-10",
    bio: "Active lifestyle seeker with interest in Basketball, Yoga.",
    gender: Gender.Female
  },
  {
    id: "101",
    name: "Abdurahmon Muhamedov",
    avatar: "https://randomuser.me/api/portraits/women/2.jpg",
    interests: [SportType.Yoga, SportType.Football],
    activityLevel: ActivityLevel.Advanced,
    joinedDate: "2025-06-08",
    bio: "Fitness enthusiast with interest in Yoga, Football.",
    gender: Gender.Female
  },
  {
    id: "102",
    name: "Munisbek Muhammadov",
    avatar: "https://randomuser.me/api/portraits/women/71.jpg",
    interests: [SportType.Football],
    activityLevel: ActivityLevel.Advanced,
    joinedDate: "2025-06-25",
    bio: "Fitness enthusiast with interest in Football.",
    gender: Gender.Female
  },
  {
    id: "103",
    name: "Shaxriyor Muhammadov",
    avatar: "https://randomuser.me/api/portraits/men/84.jpg",
    interests: [SportType.Running],
    activityLevel: ActivityLevel.Intermediate,
    joinedDate: "2025-07-15",
    bio: "Loves sports with interest in Running.",
    gender: Gender.Male
  },
  {
    id: "104",
    name: "Turg`unov Muhammadzohid",
    avatar: "https://randomuser.me/api/portraits/women/66.jpg",
    interests: [SportType.Gym],
    activityLevel: ActivityLevel.Advanced,
    joinedDate: "2025-06-26",
    bio: "Fitness enthusiast with interest in Gym.",
    gender: Gender.Female
  },
  {
    id: "105",
    name: "Nizomiddin Mukhitdinov",
    avatar: "https://randomuser.me/api/portraits/women/98.jpg",
    interests: [SportType.Tennis, SportType.Yoga, SportType.Running],
    activityLevel: ActivityLevel.Beginner,
    joinedDate: "2025-06-22",
    bio: "Fitness enthusiast with interest in Tennis, Yoga, Running.",
    gender: Gender.Female
  },
  {
    id: "106",
    name: "Abdulboriy Muradjonov",
    avatar: "https://randomuser.me/api/portraits/men/29.jpg",
    interests: [SportType.Yoga, SportType.Football, SportType.Running],
    activityLevel: ActivityLevel.Intermediate,
    joinedDate: "2025-07-03",
    bio: "Active lifestyle seeker with interest in Yoga, Football, Running.",
    gender: Gender.Male
  },
  {
    id: "107",
    name: "Xasanboy Murodilov",
    avatar: "https://randomuser.me/api/portraits/men/38.jpg",
    interests: [SportType.Running],
    activityLevel: ActivityLevel.Intermediate,
    joinedDate: "2025-06-11",
    bio: "Fitness enthusiast with interest in Running.",
    gender: Gender.Male
  },
  {
    id: "108",
    name: "Safiya Murodilova",
    avatar: "https://randomuser.me/api/portraits/men/83.jpg",
    interests: [SportType.Running],
    activityLevel: ActivityLevel.Advanced,
    joinedDate: "2025-05-25",
    bio: "Active lifestyle seeker with interest in Running.",
    gender: Gender.Female
  },
  {
    id: "109",
    name: "Ibrohim Murodjonov",
    avatar: "https://randomuser.me/api/portraits/men/68.jpg",
    interests: [SportType.Gym],
    activityLevel: ActivityLevel.Intermediate,
    joinedDate: "2025-06-04",
    bio: "Loves sports with interest in Gym.",
    gender: Gender.Male
  },
  {
    id: "110",
    name: "Hasanboy Murodov",
    avatar: "https://randomuser.me/api/portraits/men/90.jpg",
    interests: [SportType.Swimming, SportType.Yoga],
    activityLevel: ActivityLevel.Advanced,
    joinedDate: "2025-07-17",
    bio: "Loves sports with interest in Swimming, Yoga.",
    gender: Gender.Male
  },
  {
    id: "111",
    name: "Akbarjon Murodqosimov",
    avatar: "https://randomuser.me/api/portraits/women/79.jpg",
    interests: [SportType.Running, SportType.Swimming],
    activityLevel: ActivityLevel.Intermediate,
    joinedDate: "2025-05-15",
    bio: "Fitness enthusiast with interest in Running, Swimming.",
    gender: Gender.Female
  },
  {
    id: "112",
    name: "Kamronbek Mustofokulov",
    avatar: "https://randomuser.me/api/portraits/women/88.jpg",
    interests: [SportType.Gym, SportType.Swimming],
    activityLevel: ActivityLevel.Intermediate,
    joinedDate: "2025-07-05",
    bio: "Fitness enthusiast with interest in Gym, Swimming.",
    gender: Gender.Female
  },
  {
    id: "113",
    name: "Najmitdin Muxitdinov",
    avatar: "https://randomuser.me/api/portraits/women/69.jpg",
    interests: [SportType.Basketball, SportType.Football, SportType.Gym],
    activityLevel: ActivityLevel.Beginner,
    joinedDate: "2025-06-19",
    bio: "Active lifestyle seeker with interest in Basketball, Football, Gym.",
    gender: Gender.Female
  },
  {
    id: "114",
    name: "Abdulloh Nabiyev",
    avatar: "https://randomuser.me/api/portraits/women/90.jpg",
    interests: [SportType.Gym, SportType.Football, SportType.Cycling],
    activityLevel: ActivityLevel.Advanced,
    joinedDate: "2025-06-13",
    bio: "Active lifestyle seeker with interest in Gym, Football, Cycling.",
    gender: Gender.Female
  },
  {
    id: "115",
    name: "Asma Nabiyeva",
    avatar: "https://randomuser.me/api/portraits/men/95.jpg",
    interests: [SportType.Swimming, SportType.Tennis],
    activityLevel: ActivityLevel.Advanced,
    joinedDate: "2025-07-02",
    bio: "Fitness enthusiast with interest in Swimming, Tennis.",
    gender: Gender.Female
  },
  {
    id: "116",
    name: "Abrorjon Namozov",
    avatar: "https://randomuser.me/api/portraits/men/24.jpg",
    interests: [SportType.Yoga, SportType.Swimming, SportType.Football],
    activityLevel: ActivityLevel.Advanced,
    joinedDate: "2025-06-18",
    bio: "Fitness enthusiast with interest in Yoga, Swimming, Football.",
    gender: Gender.Male
  },
  {
    id: "117",
    name: "Madinabonu Nasriddinova",
    avatar: "https://randomuser.me/api/portraits/men/53.jpg",
    interests: [SportType.Yoga],
    activityLevel: ActivityLevel.Advanced,
    joinedDate: "2025-05-06",
    bio: "Fitness enthusiast with interest in Yoga.",
    gender: Gender.Female
  },
  {
    id: "118",
    name: "Madinabonu Nasritdinova",
    avatar: "https://randomuser.me/api/portraits/men/51.jpg",
    interests: [SportType.Tennis, SportType.Swimming],
    activityLevel: ActivityLevel.Advanced,
    joinedDate: "2025-07-03",
    bio: "Active lifestyle seeker with interest in Tennis, Swimming.",
    gender: Gender.Female
  },
  {
    id: "119",
    name: "Aziz Nazarov",
    avatar: "https://randomuser.me/api/portraits/men/74.jpg",
    interests: [SportType.Running, SportType.Football, SportType.Yoga],
    activityLevel: ActivityLevel.Beginner,
    joinedDate: "2025-07-07",
    bio: "Fitness enthusiast with interest in Running, Football, Yoga.",
    gender: Gender.Male
  },
  {
    id: "120",
    name: "Iymona Nazarova",
    avatar: "https://randomuser.me/api/portraits/women/40.jpg",
    interests: [SportType.Basketball, SportType.Swimming],
    activityLevel: ActivityLevel.Beginner,
    joinedDate: "2025-05-20",
    bio: "Fitness enthusiast with interest in Basketball, Swimming.",
    gender: Gender.Female
  },
  {
    id: "121",
    name: "Mohichehra Ne'matillayeva",
    avatar: "https://randomuser.me/api/portraits/women/91.jpg",
    interests: [SportType.Basketball, SportType.Gym, SportType.Tennis],
    activityLevel: ActivityLevel.Intermediate,
    joinedDate: "2025-07-08",
    bio: "Active lifestyle seeker with interest in Basketball, Gym, Tennis.",
    gender: Gender.Female
  },
  {
    id: "122",
    name: "Mohir Niyozov",
    avatar: "https://randomuser.me/api/portraits/men/68.jpg",
    interests: [SportType.Cycling, SportType.Gym, SportType.Yoga],
    activityLevel: ActivityLevel.Intermediate,
    joinedDate: "2025-05-09",
    bio: "Fitness enthusiast with interest in Cycling, Gym, Yoga.",
    gender: Gender.Male
  },
  {
    id: "123",
    name: "Ezoza Nizomova",
    avatar: "https://randomuser.me/api/portraits/men/16.jpg",
    interests: [SportType.Basketball],
    activityLevel: ActivityLevel.Advanced,
    joinedDate: "2025-05-22",
    bio: "Loves sports with interest in Basketball.",
    gender: Gender.Male
  },
  {
    id: "124",
    name: "Asilbek Nomozov",
    avatar: "https://randomuser.me/api/portraits/men/81.jpg",
    interests: [SportType.Cycling, SportType.Yoga, SportType.Swimming],
    activityLevel: ActivityLevel.Intermediate,
    joinedDate: "2025-06-25",
    bio: "Loves sports with interest in Cycling, Yoga, Swimming.",
    gender: Gender.Female
  },
  {
    id: "125",
    name: "Diyorbek Nomozov",
    avatar: "https://randomuser.me/api/portraits/women/57.jpg",
    interests: [SportType.Running, SportType.Football],
    activityLevel: ActivityLevel.Beginner,
    joinedDate: "2025-07-18",
    bio: "Fitness enthusiast with interest in Running, Football.",
    gender: Gender.Female
  },
  {
    id: "126",
    name: "Asilbek Normatov",
    avatar: "https://randomuser.me/api/portraits/women/94.jpg",
    interests: [SportType.Swimming, SportType.Basketball],
    activityLevel: ActivityLevel.Intermediate,
    joinedDate: "2025-06-02",
    bio: "Active lifestyle seeker with interest in Swimming, Basketball.",
    gender: Gender.Female
  },
  {
    id: "127",
    name: "Jamshid Normuhammedov",
    avatar: "https://randomuser.me/api/portraits/women/8.jpg",
    interests: [SportType.Gym, SportType.Yoga],
    activityLevel: ActivityLevel.Advanced,
    joinedDate: "2025-06-08",
    bio: "Loves sports with interest in Gym, Yoga.",
    gender: Gender.Female
  },
  {
    id: "128",
    name: "Ayubhon Nurmuhammadov",
    avatar: "https://randomuser.me/api/portraits/women/7.jpg",
    interests: [SportType.Gym, SportType.Yoga],
    activityLevel: ActivityLevel.Advanced,
    joinedDate: "2025-05-31",
    bio: "Active lifestyle seeker with interest in Gym, Yoga.",
    gender: Gender.Female
  },
  {
    id: "129",
    name: "Bobur Omonov",
    avatar: "https://randomuser.me/api/portraits/women/79.jpg",
    interests: [SportType.Swimming],
    activityLevel: ActivityLevel.Intermediate,
    joinedDate: "2025-06-05",
    bio: "Active lifestyle seeker with interest in Swimming.",
    gender: Gender.Female
  },
  {
    id: "130",
    name: "Mehrangiz Pirmatova",
    avatar: "https://randomuser.me/api/portraits/women/29.jpg",
    interests: [SportType.Gym, SportType.Tennis, SportType.Football],
    activityLevel: ActivityLevel.Intermediate,
    joinedDate: "2025-06-15",
    bio: "Active lifestyle seeker with interest in Gym, Tennis, Football.",
    gender: Gender.Female
  },
  {
    id: "131",
    name: "Mohinur Po'latboyeva",
    avatar: "https://randomuser.me/api/portraits/women/9.jpg",
    interests: [SportType.Swimming, SportType.Yoga],
    activityLevel: ActivityLevel.Advanced,
    joinedDate: "2025-05-06",
    bio: "Active lifestyle seeker with interest in Swimming, Yoga.",
    gender: Gender.Female
  },
  {
    id: "132",
    name: "Ibroxim Po'latov",
    avatar: "https://randomuser.me/api/portraits/men/48.jpg",
    interests: [SportType.Football],
    activityLevel: ActivityLevel.Advanced,
    joinedDate: "2025-06-11",
    bio: "Fitness enthusiast with interest in Football.",
    gender: Gender.Male
  },
  {
    id: "133",
    name: "Ibrohim Pulatov",
    avatar: "https://randomuser.me/api/portraits/women/31.jpg",
    interests: [SportType.Yoga, SportType.Basketball],
    activityLevel: ActivityLevel.Advanced,
    joinedDate: "2025-06-04",
    bio: "Loves sports with interest in Yoga, Basketball.",
    gender: Gender.Female
  },
  {
    id: "134",
    name: "Ruqiya Pulatova",
    avatar: "https://randomuser.me/api/portraits/women/87.jpg",
    interests: [SportType.Running, SportType.Gym, SportType.Yoga],
    activityLevel: ActivityLevel.Intermediate,
    joinedDate: "2025-05-10",
    bio: "Loves sports with interest in Running, Gym, Yoga.",
    gender: Gender.Female
  },
  {
    id: "135",
    name: "Husniddin Qironov",
    avatar: "https://randomuser.me/api/portraits/women/68.jpg",
    interests: [SportType.Tennis, SportType.Running],
    activityLevel: ActivityLevel.Intermediate,
    joinedDate: "2025-06-20",
    bio: "Loves sports with interest in Tennis, Running.",
    gender: Gender.Female
  },
  {
    id: "136",
    name: "Shodmon Qodirov",
    avatar: "https://randomuser.me/api/portraits/women/18.jpg",
    interests: [SportType.Basketball, SportType.Football, SportType.Swimming],
    activityLevel: ActivityLevel.Beginner,
    joinedDate: "2025-06-03",
    bio: "Fitness enthusiast with interest in Basketball, Football, Swimming.",
    gender: Gender.Female
  },
  {
    id: "137",
    name: "Shuhrat Qodirov",
    avatar: "https://randomuser.me/api/portraits/women/9.jpg",
    interests: [SportType.Yoga, SportType.Cycling],
    activityLevel: ActivityLevel.Beginner,
    joinedDate: "2025-05-04",
    bio: "Loves sports with interest in Yoga, Cycling.",
    gender: Gender.Female
  },
  {
    id: "138",
    name: "Shaxriyor Qudratullayev",
    avatar: "https://randomuser.me/api/portraits/women/18.jpg",
    interests: [SportType.Tennis],
    activityLevel: ActivityLevel.Advanced,
    joinedDate: "2025-06-08",
    bio: "Loves sports with interest in Tennis.",
    gender: Gender.Female
  },
  {
    id: "139",
    name: "Asliddin Rahmatov",
    avatar: "https://randomuser.me/api/portraits/men/53.jpg",
    interests: [SportType.Basketball],
    activityLevel: ActivityLevel.Intermediate,
    joinedDate: "2025-05-15",
    bio: "Loves sports with interest in Basketball.",
    gender: Gender.Male
  },
  {
    id: "140",
    name: "Maryamjon Raimova",
    avatar: "https://randomuser.me/api/portraits/men/94.jpg",
    interests: [SportType.Tennis, SportType.Running, SportType.Cycling],
    activityLevel: ActivityLevel.Beginner,
    joinedDate: "2025-07-09",
    bio: "Fitness enthusiast with interest in Tennis, Running, Cycling.",
    gender: Gender.Female
  },
  {
    id: "141",
    name: "Diyorbek Rashidov",
    avatar: "https://randomuser.me/api/portraits/women/58.jpg",
    interests: [SportType.Swimming, SportType.Football, SportType.Yoga],
    activityLevel: ActivityLevel.Intermediate,
    joinedDate: "2025-06-05",
    bio: "Loves sports with interest in Swimming, Football, Yoga.",
    gender: Gender.Female
  },
  {
    id: "142",
    name: "Ibroxim Raupov",
    avatar: "https://randomuser.me/api/portraits/men/79.jpg",
    interests: [SportType.Running],
    activityLevel: ActivityLevel.Advanced,
    joinedDate: "2025-06-17",
    bio: "Active lifestyle seeker with interest in Running.",
    gender: Gender.Male
  },
  {
    id: "143",
    name: "Rustam Rayimberdiyev",
    avatar: "https://randomuser.me/api/portraits/men/66.jpg",
    interests: [SportType.Yoga, SportType.Swimming, SportType.Football],
    activityLevel: ActivityLevel.Beginner,
    joinedDate: "2025-05-12",
    bio: "Fitness enthusiast with interest in Yoga, Swimming, Football.",
    gender: Gender.Male
  },
  {
    id: "144",
    name: "Abdullox Rustamov",
    avatar: "https://randomuser.me/api/portraits/men/88.jpg",
    interests: [SportType.Football, SportType.Yoga, SportType.Tennis],
    activityLevel: ActivityLevel.Advanced,
    joinedDate: "2025-05-09",
    bio: "Active lifestyle seeker with interest in Football, Yoga, Tennis.",
    gender: Gender.Female
  },
  {
    id: "145",
    name: "Umarjon Rustamov",
    avatar: "https://randomuser.me/api/portraits/women/35.jpg",
    interests: [SportType.Gym],
    activityLevel: ActivityLevel.Beginner,
    joinedDate: "2025-07-16",
    bio: "Fitness enthusiast with interest in Gym.",
    gender: Gender.Female
  },
  {
    id: "146",
    name: "Muhammadsulton Ruziboyev",
    avatar: "https://randomuser.me/api/portraits/women/42.jpg",
    interests: [SportType.Running],
    activityLevel: ActivityLevel.Advanced,
    joinedDate: "2025-05-15",
    bio: "Active lifestyle seeker with interest in Running.",
    gender: Gender.Female
  },
  {
    id: "147",
    name: "Qahramon Sa'dullayev",
    avatar: "https://randomuser.me/api/portraits/women/58.jpg",
    interests: [SportType.Basketball, SportType.Swimming, SportType.Yoga],
    activityLevel: ActivityLevel.Beginner,
    joinedDate: "2025-05-23",
    bio: "Fitness enthusiast with interest in Basketball, Swimming, Yoga.",
    gender: Gender.Female
  },
  {
    id: "148",
    name: "Umar Sadriddinov",
    avatar: "https://randomuser.me/api/portraits/women/60.jpg",
    interests: [SportType.Tennis],
    activityLevel: ActivityLevel.Intermediate,
    joinedDate: "2025-06-27",
    bio: "Fitness enthusiast with interest in Tennis.",
    gender: Gender.Female
  },
  {
    id: "149",
    name: "Abdujabbor Sahiyev",
    avatar: "https://randomuser.me/api/portraits/men/10.jpg",
    interests: [SportType.Gym],
    activityLevel: ActivityLevel.Beginner,
    joinedDate: "2025-07-18",
    bio: "Fitness enthusiast with interest in Gym.",
    gender: Gender.Male
  },
  {
    id: "150",
    name: "Maftuna Saidazimova",
    avatar: "https://randomuser.me/api/portraits/men/97.jpg",
    interests: [SportType.Basketball],
    activityLevel: ActivityLevel.Intermediate,
    joinedDate: "2025-06-24",
    bio: "Fitness enthusiast with interest in Basketball.",
    gender: Gender.Female
  },
  {
    id: "151",
    name: "Navruza Shamsiddinova",
    avatar: "https://randomuser.me/api/portraits/women/5.jpg",
    interests: [SportType.Football, SportType.Gym, SportType.Swimming],
    activityLevel: ActivityLevel.Advanced,
    joinedDate: "2025-05-19",
    bio: "Loves sports with interest in Football, Gym, Swimming.",
    gender: Gender.Female
  },
  {
    id: "152",
    name: "Shamshod Shavkatov",
    avatar: "https://randomuser.me/api/portraits/men/36.jpg",
    interests: [SportType.Yoga, SportType.Basketball, SportType.Running],
    activityLevel: ActivityLevel.Intermediate,
    joinedDate: "2025-06-28",
    bio: "Active lifestyle seeker with interest in Yoga, Basketball, Running.",
    gender: Gender.Female
  },
  {
    id: "153",
    name: "Yahyo Shavkatov",
    avatar: "https://randomuser.me/api/portraits/men/76.jpg",
    interests: [SportType.Swimming, SportType.Yoga, SportType.Gym],
    activityLevel: ActivityLevel.Beginner,
    joinedDate: "2025-05-28",
    bio: "Fitness enthusiast with interest in Swimming, Yoga, Gym.",
    gender: Gender.Male
  },
  {
    id: "154",
    name: "Nurmuxammatova Shaxzoda",
    avatar: "https://randomuser.me/api/portraits/men/73.jpg",
    interests: [SportType.Football],
    activityLevel: ActivityLevel.Intermediate,
    joinedDate: "2025-06-23",
    bio: "Loves sports with interest in Football.",
    gender: Gender.Female
  },
  {
    id: "155",
    name: "Abubakr Shermamatov",
    avatar: "https://randomuser.me/api/portraits/men/51.jpg",
    interests: [SportType.Yoga],
    activityLevel: ActivityLevel.Intermediate,
    joinedDate: "2025-06-30",
    bio: "Fitness enthusiast with interest in Yoga.",
    gender: Gender.Male
  },
  {
    id: "156",
    name: "Usmon Shomirzayev",
    avatar: "https://randomuser.me/api/portraits/women/33.jpg",
    interests: [SportType.Basketball],
    activityLevel: ActivityLevel.Intermediate,
    joinedDate: "2025-06-17",
    bio: "Loves sports with interest in Basketball.",
    gender: Gender.Female
  },
  {
    id: "157",
    name: "Omina Shorahimova",
    avatar: "https://randomuser.me/api/portraits/men/81.jpg",
    interests: [SportType.Tennis, SportType.Football],
    activityLevel: ActivityLevel.Intermediate,
    joinedDate: "2025-06-24",
    bio: "Active lifestyle seeker with interest in Tennis, Football.",
    gender: Gender.Female
  },
  {
    id: "158",
    name: "Hadicha Shoyusufova",
    avatar: "https://randomuser.me/api/portraits/men/91.jpg",
    interests: [SportType.Swimming],
    activityLevel: ActivityLevel.Beginner,
    joinedDate: "2025-05-28",
    bio: "Loves sports with interest in Swimming.",
    gender: Gender.Female
  },
  {
    id: "159",
    name: "Firdavs Shuhratillayev",
    avatar: "https://randomuser.me/api/portraits/men/68.jpg",
    interests: [SportType.Swimming, SportType.Running],
    activityLevel: ActivityLevel.Intermediate,
    joinedDate: "2025-06-17",
    bio: "Active lifestyle seeker with interest in Swimming, Running.",
    gender: Gender.Male
  },
  {
    id: "160",
    name: "Soliha Shuxratova",
    avatar: "https://randomuser.me/api/portraits/women/29.jpg",
    interests: [SportType.Running, SportType.Tennis],
    activityLevel: ActivityLevel.Advanced,
    joinedDate: "2025-07-18",
    bio: "Fitness enthusiast with interest in Running, Tennis.",
    gender: Gender.Female
  },
  {
    id: "161",
    name: "Xondamir Siddiqov",
    avatar: "https://randomuser.me/api/portraits/men/2.jpg",
    interests: [SportType.Tennis],
    activityLevel: ActivityLevel.Intermediate,
    joinedDate: "2025-06-09",
    bio: "Active lifestyle seeker with interest in Tennis.",
    gender: Gender.Male
  },
  {
    id: "162",
    name: "Behruz Sodiqov",
    avatar: "https://randomuser.me/api/portraits/men/33.jpg",
    interests: [SportType.Football, SportType.Cycling],
    activityLevel: ActivityLevel.Advanced,
    joinedDate: "2025-06-21",
    bio: "Active lifestyle seeker with interest in Football, Cycling.",
    gender: Gender.Male
  },
  {
    id: "163",
    name: "Javlonbek Sulaymonkulov",
    avatar: "https://randomuser.me/api/portraits/women/16.jpg",
    interests: [SportType.Swimming, SportType.Football, SportType.Cycling],
    activityLevel: ActivityLevel.Advanced,
    joinedDate: "2025-06-18",
    bio: "Loves sports with interest in Swimming, Football, Cycling.",
    gender: Gender.Female
  },
  {
    id: "164",
    name: "Asliddin Sulaymonqulov",
    avatar: "https://randomuser.me/api/portraits/men/98.jpg",
    interests: [SportType.Yoga, SportType.Football, SportType.Basketball],
    activityLevel: ActivityLevel.Beginner,
    joinedDate: "2025-06-11",
    bio: "Active lifestyle seeker with interest in Yoga, Football, Basketball.",
    gender: Gender.Female
  },
  {
    id: "165",
    name: "Muslima Suleymanova",
    avatar: "https://randomuser.me/api/portraits/women/46.jpg",
    interests: [SportType.Basketball, SportType.Football],
    activityLevel: ActivityLevel.Intermediate,
    joinedDate: "2025-05-07",
    bio: "Active lifestyle seeker with interest in Basketball, Football.",
    gender: Gender.Female
  },
  {
    id: "166",
    name: "Madina Sultonkhodjayeva",
    avatar: "https://randomuser.me/api/portraits/men/67.jpg",
    interests: [SportType.Gym],
    activityLevel: ActivityLevel.Advanced,
    joinedDate: "2025-06-04",
    bio: "Loves sports with interest in Gym.",
    gender: Gender.Female
  },
  {
    id: "167",
    name: "Temur Tashniyozov",
    avatar: "https://randomuser.me/api/portraits/men/64.jpg",
    interests: [SportType.Yoga],
    activityLevel: ActivityLevel.Intermediate,
    joinedDate: "2025-07-15",
    bio: "Loves sports with interest in Yoga.",
    gender: Gender.Male
  },
  {
    id: "168",
    name: "Abdulloh Tohirjonov",
    avatar: "https://randomuser.me/api/portraits/women/95.jpg",
    interests: [SportType.Basketball],
    activityLevel: ActivityLevel.Advanced,
    joinedDate: "2025-05-08",
    bio: "Fitness enthusiast with interest in Basketball.",
    gender: Gender.Female
  },
  {
    id: "169",
    name: "Muhiddin Tohirov",
    avatar: "https://randomuser.me/api/portraits/men/74.jpg",
    interests: [SportType.Basketball, SportType.Football],
    activityLevel: ActivityLevel.Intermediate,
    joinedDate: "2025-06-07",
    bio: "Loves sports with interest in Basketball, Football.",
    gender: Gender.Male
  },
  {
    id: "170",
    name: "Sultonmurod Tojiboyev",
    avatar: "https://randomuser.me/api/portraits/women/26.jpg",
    interests: [SportType.Running, SportType.Cycling],
    activityLevel: ActivityLevel.Advanced,
    joinedDate: "2025-07-08",
    bio: "Fitness enthusiast with interest in Running, Cycling.",
    gender: Gender.Female
  },
  {
    id: "171",
    name: "Ibrohim Tolibboyev",
    avatar: "https://randomuser.me/api/portraits/men/9.jpg",
    interests: [SportType.Football, SportType.Cycling, SportType.Swimming],
    activityLevel: ActivityLevel.Beginner,
    joinedDate: "2025-05-03",
    bio: "Loves sports with interest in Football, Cycling, Swimming.",
    gender: Gender.Male
  },
  {
    id: "172",
    name: "Shohruh Tolibjonov",
    avatar: "https://randomuser.me/api/portraits/women/42.jpg",
    interests: [SportType.Running, SportType.Football],
    activityLevel: ActivityLevel.Beginner,
    joinedDate: "2025-05-15",
    bio: "Active lifestyle seeker with interest in Running, Football.",
    gender: Gender.Female
  },
  {
    id: "173",
    name: "Akobirxon Tolibxonov",
    avatar: "https://randomuser.me/api/portraits/men/67.jpg",
    interests: [SportType.Swimming, SportType.Basketball],
    activityLevel: ActivityLevel.Beginner,
    joinedDate: "2025-06-16",
    bio: "Active lifestyle seeker with interest in Swimming, Basketball.",
    gender: Gender.Male
  },
  {
    id: "174",
    name: "Gulsevar Toshtemirova",
    avatar: "https://randomuser.me/api/portraits/men/73.jpg",
    interests: [SportType.Football, SportType.Basketball, SportType.Cycling],
    activityLevel: ActivityLevel.Intermediate,
    joinedDate: "2025-07-07",
    bio: "Loves sports with interest in Football, Basketball, Cycling.",
    gender: Gender.Female
  },
  {
    id: "175",
    name: "Begzod Toxirov",
    avatar: "https://randomuser.me/api/portraits/women/74.jpg",
    interests: [SportType.Gym, SportType.Basketball, SportType.Running],
    activityLevel: ActivityLevel.Beginner,
    joinedDate: "2025-07-05",
    bio: "Loves sports with interest in Gym, Basketball, Running.",
    gender: Gender.Female
  },
  {
    id: "176",
    name: "Saidxon Toxirxo'jayev",
    avatar: "https://randomuser.me/api/portraits/women/81.jpg",
    interests: [SportType.Cycling, SportType.Gym, SportType.Swimming],
    activityLevel: ActivityLevel.Beginner,
    joinedDate: "2025-05-19",
    bio: "Active lifestyle seeker with interest in Cycling, Gym, Swimming.",
    gender: Gender.Female
  },
  {
    id: "177",
    name: "Muxammadamin Tulkinov",
    avatar: "https://randomuser.me/api/portraits/women/49.jpg",
    interests: [SportType.Gym, SportType.Basketball],
    activityLevel: ActivityLevel.Advanced,
    joinedDate: "2025-05-10",
    bio: "Loves sports with interest in Gym, Basketball.",
    gender: Gender.Female
  },
  {
    id: "178",
    name: "Begzod Turdiyev",
    avatar: "https://randomuser.me/api/portraits/men/74.jpg",
    interests: [SportType.Cycling],
    activityLevel: ActivityLevel.Beginner,
    joinedDate: "2025-06-10",
    bio: "Fitness enthusiast with interest in Cycling.",
    gender: Gender.Male
  },
  {
    id: "179",
    name: "Samir Turdiyev",
    avatar: "https://randomuser.me/api/portraits/women/57.jpg",
    interests: [SportType.Football, SportType.Yoga, SportType.Cycling],
    activityLevel: ActivityLevel.Advanced,
    joinedDate: "2025-07-15",
    bio: "Active lifestyle seeker with interest in Football, Yoga, Cycling.",
    gender: Gender.Female
  },
  {
    id: "180",
    name: "Ravshan Ubaydullayev",
    avatar: "https://randomuser.me/api/portraits/women/21.jpg",
    interests: [SportType.Cycling, SportType.Swimming],
    activityLevel: ActivityLevel.Beginner,
    joinedDate: "2025-05-05",
    bio: "Loves sports with interest in Cycling, Swimming.",
    gender: Gender.Female
  },
  {
    id: "181",
    name: "Asadbek Ulug'bekov",
    avatar: "https://randomuser.me/api/portraits/women/2.jpg",
    interests: [SportType.Cycling],
    activityLevel: ActivityLevel.Intermediate,
    joinedDate: "2025-07-04",
    bio: "Active lifestyle seeker with interest in Cycling.",
    gender: Gender.Female
  },
  {
    id: "182",
    name: "Diyorbek Urozboev",
    avatar: "https://randomuser.me/api/portraits/men/53.jpg",
    interests: [SportType.Running, SportType.Tennis, SportType.Football],
    activityLevel: ActivityLevel.Intermediate,
    joinedDate: "2025-07-17",
    bio: "Loves sports with interest in Running, Tennis, Football.",
    gender: Gender.Male
  },
  {
    id: "183",
    name: "Elyorbek Urozboev",
    avatar: "https://randomuser.me/api/portraits/men/17.jpg",
    interests: [SportType.Basketball, SportType.Swimming, SportType.Tennis],
    activityLevel: ActivityLevel.Beginner,
    joinedDate: "2025-05-11",
    bio: "Active lifestyle seeker with interest in Basketball, Swimming, Tennis.",
    gender: Gender.Male
  },
  {
    id: "184",
    name: "Aziza Usmanova",
    avatar: "https://randomuser.me/api/portraits/women/45.jpg",
    interests: [SportType.Running, SportType.Cycling],
    activityLevel: ActivityLevel.Beginner,
    joinedDate: "2025-07-06",
    bio: "Fitness enthusiast with interest in Running, Cycling.",
    gender: Gender.Female
  },
  {
    id: "185",
    name: "Shohruz Vladimirov",
    avatar: "https://randomuser.me/api/portraits/men/62.jpg",
    interests: [SportType.Cycling],
    activityLevel: ActivityLevel.Intermediate,
    joinedDate: "2025-07-16",
    bio: "Fitness enthusiast with interest in Cycling.",
    gender: Gender.Male
  },
  {
    id: "186",
    name: "Mamlakat Xakimova",
    avatar: "https://randomuser.me/api/portraits/men/85.jpg",
    interests: [SportType.Tennis, SportType.Swimming, SportType.Running],
    activityLevel: ActivityLevel.Intermediate,
    joinedDate: "2025-06-06",
    bio: "Active lifestyle seeker with interest in Tennis, Swimming, Running.",
    gender: Gender.Female
  },
  {
    id: "187",
    name: "Sevinch Xakimova",
    avatar: "https://randomuser.me/api/portraits/women/69.jpg",
    interests: [SportType.Running, SportType.Cycling, SportType.Tennis],
    activityLevel: ActivityLevel.Intermediate,
    joinedDate: "2025-06-20",
    bio: "Fitness enthusiast with interest in Running, Cycling, Tennis.",
    gender: Gender.Female
  },
  {
    id: "188",
    name: "Xusanboy Xo'jamnazarov",
    avatar: "https://randomuser.me/api/portraits/men/17.jpg",
    interests: [SportType.Swimming],
    activityLevel: ActivityLevel.Intermediate,
    joinedDate: "2025-07-07",
    bio: "Active lifestyle seeker with interest in Swimming.",
    gender: Gender.Male
  },
  {
    id: "189",
    name: "Muxammadsaid Xolmirzayev",
    avatar: "https://randomuser.me/api/portraits/men/74.jpg",
    interests: [SportType.Swimming, SportType.Gym],
    activityLevel: ActivityLevel.Advanced,
    joinedDate: "2025-05-28",
    bio: "Active lifestyle seeker with interest in Swimming, Gym.",
    gender: Gender.Male
  },
  {
    id: "190",
    name: "Xasanboy Xujamnazarov",
    avatar: "https://randomuser.me/api/portraits/women/16.jpg",
    interests: [SportType.Football],
    activityLevel: ActivityLevel.Intermediate,
    joinedDate: "2025-06-07",
    bio: "Fitness enthusiast with interest in Football.",
    gender: Gender.Female
  },
  {
    id: "191",
    name: "Sardor Yarilkabov",
    avatar: "https://randomuser.me/api/portraits/men/54.jpg",
    interests: [SportType.Yoga, SportType.Cycling, SportType.Gym],
    activityLevel: ActivityLevel.Beginner,
    joinedDate: "2025-07-16",
    bio: "Loves sports with interest in Yoga, Cycling, Gym.",
    gender: Gender.Male
  },
  {
    id: "192",
    name: "Nurmahammedov Yaxyoxon",
    avatar: "https://randomuser.me/api/portraits/men/64.jpg",
    interests: [SportType.Tennis],
    activityLevel: ActivityLevel.Advanced,
    joinedDate: "2025-05-06",
    bio: "Active lifestyle seeker with interest in Tennis.",
    gender: Gender.Male
  },
  {
    id: "193",
    name: "Ayaulim Yergasheva",
    avatar: "https://randomuser.me/api/portraits/men/67.jpg",
    interests: [SportType.Basketball],
    activityLevel: ActivityLevel.Beginner,
    joinedDate: "2025-06-27",
    bio: "Active lifestyle seeker with interest in Basketball.",
    gender: Gender.Female
  },
  {
    id: "194",
    name: "Abdujabbor Yo'ldoshev",
    avatar: "https://randomuser.me/api/portraits/men/33.jpg",
    interests: [SportType.Cycling, SportType.Running, SportType.Swimming],
    activityLevel: ActivityLevel.Beginner,
    joinedDate: "2025-07-13",
    bio: "Active lifestyle seeker with interest in Cycling, Running, Swimming.",
    gender: Gender.Female
  },
  {
    id: "195",
    name: "Hosilbek Yo'ldoshev",
    avatar: "https://randomuser.me/api/portraits/women/51.jpg",
    interests: [SportType.Yoga],
    activityLevel: ActivityLevel.Intermediate,
    joinedDate: "2025-05-21",
    bio: "Loves sports with interest in Yoga.",
    gender: Gender.Female
  },
  {
    id: "196",
    name: "Muhammadnur Yusupov",
    avatar: "https://randomuser.me/api/portraits/men/21.jpg",
    interests: [SportType.Gym, SportType.Tennis],
    activityLevel: ActivityLevel.Beginner,
    joinedDate: "2025-07-10",
    bio: "Fitness enthusiast with interest in Gym, Tennis.",
    gender: Gender.Female
  },
  {
    id: "197",
    name: "Gulsevar Yusupova",
    avatar: "https://randomuser.me/api/portraits/men/20.jpg",
    interests: [SportType.Swimming, SportType.Tennis, SportType.Cycling],
    activityLevel: ActivityLevel.Beginner,
    joinedDate: "2025-06-27",
    bio: "Loves sports with interest in Swimming, Tennis, Cycling.",
    gender: Gender.Female
  },
  {
    id: "198",
    name: "Ulug'bek Zamirov",
    avatar: "https://randomuser.me/api/portraits/men/77.jpg",
    interests: [SportType.Basketball],
    activityLevel: ActivityLevel.Beginner,
    joinedDate: "2025-06-14",
    bio: "Active lifestyle seeker with interest in Basketball.",
    gender: Gender.Female
  },
  {
    id: "199",
    name: "Abduraxmonova Zinnura",
    avatar: "https://randomuser.me/api/portraits/men/26.jpg",
    interests: [SportType.Swimming, SportType.Running, SportType.Cycling],
    activityLevel: ActivityLevel.Intermediate,
    joinedDate: "2025-06-17",
    bio: "Loves sports with interest in Swimming, Running, Cycling.",
    gender: Gender.Female
  },
  {
    id: "200",
    name: "Asadbek Zohidov",
    avatar: "https://randomuser.me/api/portraits/men/39.jpg",
    interests: [SportType.Swimming, SportType.Cycling, SportType.Football],
    activityLevel: ActivityLevel.Beginner,
    joinedDate: "2025-05-18",
    bio: "Fitness enthusiast with interest in Swimming, Cycling, Football.",
    gender: Gender.Male
  },
  {
    id: "201",
    name: "Adham Zokirov",
    avatar: "https://randomuser.me/api/portraits/women/63.jpg",
    interests: [SportType.Running],
    activityLevel: ActivityLevel.Intermediate,
    joinedDate: "2025-07-18",
    bio: "Fitness enthusiast with interest in Running.",
    gender: Gender.Female
  },
];
// Mock current user
export const currentUser: User = mockUsers[0];

// Mock Rooms/Activities
export const mockRooms: Room[] = [
  {
    id: "101",
    title: "Morning Run in Central Park",
    sportType: SportType.Running,
    host: mockUsers[0],
    location: {
      address: "Central Park, Loop Trail",
      city: "New York",
      lat: 40.785091,
      lng: -73.968285
    },
    dateTime: "2025-05-15T08:00:00",
    duration: 60,
    maxParticipants: 10,
    currentParticipants: 3,
    description: "A refreshing 5K morning run. All levels welcome!"
  },
  {
    id: "102",
    title: "Sunset Yoga Session",
    sportType: SportType.Yoga,
    host: mockUsers[1],
    location: {
      address: "Venice Beach",
      city: "Los Angeles",
      lat: 33.985047,
      lng: -118.469601
    },
    dateTime: "2025-05-16T18:30:00",
    duration: 90,
    maxParticipants: 15,
    currentParticipants: 8,
    description: "Relaxing yoga session as the sun sets. Bring your own mat.",
    price: 10
  },
  {
    id: "103",
    title: "Basketball Pickup Game",
    sportType: SportType.Basketball,
    host: mockUsers[2],
    location: {
      address: "Rucker Park",
      city: "New York",
      lat: 40.829023,
      lng: -73.936275
    },
    dateTime: "2025-05-17T17:00:00",
    duration: 120,
    maxParticipants: 10,
    currentParticipants: 6,
    description: "Casual 5v5 basketball. All skill levels welcome."
  },
  {
    id: "104",
    title: "Group Cycling Adventure",
    sportType: SportType.Cycling,
    host: mockUsers[0],
    location: {
      address: "Golden Gate Park",
      city: "San Francisco",
      lat: 37.769421,
      lng: -122.486214
    },
    dateTime: "2025-05-18T09:00:00",
    duration: 180,
    maxParticipants: 8,
    currentParticipants: 3,
    description: "25-mile scenic ride through the city and along the coast. Intermediate level."
  },
  {
    id: "105",
    title: "Tennis Match Practice",
    sportType: SportType.Tennis,
    host: mockUsers[3],
    location: {
      address: "City Tennis Courts",
      city: "Boston",
      lat: 42.361145,
      lng: -71.057083
    },
    dateTime: "2025-05-19T16:00:00",
    duration: 90,
    maxParticipants: 4,
    currentParticipants: 2,
    description: "Looking for tennis partners for doubles practice.",
    price: 5
  },
  {
    id: "106",
    title: "Gym Buddy Workout",
    sportType: SportType.Gym,
    host: mockUsers[2],
    location: {
      address: "Fitness First",
      city: "Chicago",
      lat: 41.881832,
      lng: -87.623177
    },
    dateTime: "2025-05-20T18:00:00",
    duration: 60,
    maxParticipants: 3,
    currentParticipants: 1,
    description: "Need a spotter for chest day. Can help with your routine too!"
  }
];

// Helper function to filter rooms by sport type
export const getRoomsBySport = (sportType: SportType): Room[] => {
  return mockRooms.filter(room => room.sportType === sportType);
};

// Helper function to get upcoming rooms
export const getUpcomingRooms = (): Room[] => {
  const now = new Date();
  return mockRooms
    .filter(room => new Date(room.dateTime) > now)
    .sort((a, b) => new Date(a.dateTime).getTime() - new Date(b.dateTime).getTime());
};

// Helper function to get joined rooms for current user
export const getJoinedRooms = (): Room[] => {
  // Mock implementation - in real app would check participant list
  return [mockRooms[0], mockRooms[4]];
};
