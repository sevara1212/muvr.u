// Auto-generated mockRooms file
import { User } from './types';

export enum SportType {
  Running = "Running",
  Yoga = "Yoga",
  Cycling = "Cycling",
  Swimming = "Swimming",
  Basketball = "Basketball",
  Football = "Football",
  Tennis = "Tennis",
  Gym = "Gym",
  Other = "Other"
};


export interface Room {
  id: string;
  title: string;
  sportType: SportType;
  hostId: string;
  host: User;
  location: {
    address: string;
    city: string;
    lat: number;
    lng: number;
  };
  dateTime: string;
  duration: number;
  maxParticipants: number;
  participants: User[];
  approvedParticipants: User[];
  pendingRequests: User[];
  description: string;
  price: number;
}

import { mockUsers } from './Data';

export const mockRooms: Room[] = [
  {
    "id": "1000",
    "title": "Tennis Court Tennis Session",
    "sportType": "SportType.Tennis",
    "hostId": "mockUsers[119].id",
    "host": mockUsers[119],
    "location": {
      "address": "Oqqurghon Street, 16",
      "city": "Tashkent",
      "lat": 41.32,
      "lng": 69.285
    },
    "dateTime": "2025-08-22T07:00:00",
    "duration": 120,
    "maxParticipants": 5,
    "participants": [
      "mockUsers[119]",
      "mockUsers[53]",
      "mockUsers[148]",
      "mockUsers[111]",
      "mockUsers[150]"
    ],
    "approvedParticipants": [
      "mockUsers[119]",
      "mockUsers[53]",
      "mockUsers[148]",
      "mockUsers[111]",
      "mockUsers[150]"
    ],
    "pendingRequests": [],
    "description": "A fun and social tennis event open to all skill levels!",
    "price": 0
  },
  {
    "id": "1001",
    "title": "Anhor Park Rink Other Session",
    "sportType": "SportType.Other",
    "hostId": "mockUsers[168].id",
    "host": mockUsers[168],
    "location": {
      "address": "Labzak Street, Shaykhantaur",
      "city": "Tashkent",
      "lat": 41.31,
      "lng": 69.24
    },
    "dateTime": "2025-08-28T19:00:00",
    "duration": 120,
    "maxParticipants": 5,
    "participants": [
      "mockUsers[168]",
      "mockUsers[41]",
      "mockUsers[6]",
      "mockUsers[113]",
      "mockUsers[114]"
    ],
    "approvedParticipants": [
      "mockUsers[168]",
      "mockUsers[41]",
      "mockUsers[6]",
      "mockUsers[113]",
      "mockUsers[114]"
    ],
    "pendingRequests": [],
    "description": "A fun and social other event open to all skill levels!",
    "price": 0
  },
  {
    "id": "1002",
    "title": "Yoga Space Yoga Session",
    "sportType": "SportType.Yoga",
    "hostId": "mockUsers[11].id",
    "host": mockUsers[11],
    "location": {
      "address": "Kichik Beshyogoch street, 56",
      "city": "Tashkent",
      "lat": 41.311,
      "lng": 69.27
    },
    "dateTime": "2025-07-16T07:00:00",
    "duration": 90,
    "maxParticipants": 8,
    "participants": [
      "mockUsers[11]",
      "mockUsers[15]",
      "mockUsers[178]",
      "mockUsers[114]",
      "mockUsers[81]",
      "mockUsers[9]",
      "mockUsers[46]",
      "mockUsers[149]"
    ],
    "approvedParticipants": [
      "mockUsers[11]",
      "mockUsers[15]",
      "mockUsers[178]",
      "mockUsers[114]",
      "mockUsers[81]",
      "mockUsers[9]",
      "mockUsers[46]",
      "mockUsers[149]"
    ],
    "pendingRequests": [],
    "description": "A fun and social yoga event open to all skill levels!",
    "price": 0
  },
  {
    "id": "1003",
    "title": "Chamanzar Field Football Session",
    "sportType": "SportType.Football",
    "hostId": "mockUsers[150].id",
    "host": mockUsers[150],
    "location": {
      "address": "Uchtepa District, Chamanzar Mahallah",
      "city": "Tashkent",
      "lat": 41.295,
      "lng": 69.211
    },
    "dateTime": "2025-08-10T17:00:00",
    "duration": 120,
    "maxParticipants": 7,
    "participants": [
      "mockUsers[150]",
      "mockUsers[122]",
      "mockUsers[125]",
      "mockUsers[43]",
      "mockUsers[78]",
      "mockUsers[7]",
      "mockUsers[76]"
    ],
    "approvedParticipants": [
      "mockUsers[150]",
      "mockUsers[122]",
      "mockUsers[125]",
      "mockUsers[43]",
      "mockUsers[78]",
      "mockUsers[7]",
      "mockUsers[76]"
    ],
    "pendingRequests": [],
    "description": "A fun and social football event open to all skill levels!",
    "price": 0
  },
  {
    "id": "1004",
    "title": "Chamanzar Field Football Session",
    "sportType": "SportType.Football",
    "hostId": "mockUsers[195].id",
    "host": mockUsers[195],
    "location": {
      "address": "Uchtepa District, Chamanzar Mahallah",
      "city": "Tashkent",
      "lat": 41.295,
      "lng": 69.211
    },
    "dateTime": "2025-08-13T19:00:00",
    "duration": 60,
    "maxParticipants": 5,
    "participants": [
      "mockUsers[195]",
      "mockUsers[182]",
      "mockUsers[77]",
      "mockUsers[161]",
      "mockUsers[103]"
    ],
    "approvedParticipants": [
      "mockUsers[195]",
      "mockUsers[182]",
      "mockUsers[77]",
      "mockUsers[161]",
      "mockUsers[103]"
    ],
    "pendingRequests": [],
    "description": "A fun and social football event open to all skill levels!",
    "price": 0
  },
  {
    "id": "1005",
    "title": "Anhor Park Rink Other Session",
    "sportType": "SportType.Other",
    "hostId": "mockUsers[22].id",
    "host": mockUsers[22],
    "location": {
      "address": "Labzak Street, Shaykhantaur",
      "city": "Tashkent",
      "lat": 41.31,
      "lng": 69.24
    },
    "dateTime": "2025-07-25T18:00:00",
    "duration": 120,
    "maxParticipants": 8,
    "participants": [
      "mockUsers[22]",
      "mockUsers[29]",
      "mockUsers[4]",
      "mockUsers[53]",
      "mockUsers[135]",
      "mockUsers[104]",
      "mockUsers[38]",
      "mockUsers[134]"
    ],
    "approvedParticipants": [
      "mockUsers[22]",
      "mockUsers[29]",
      "mockUsers[4]",
      "mockUsers[53]",
      "mockUsers[135]",
      "mockUsers[104]",
      "mockUsers[38]",
      "mockUsers[134]"
    ],
    "pendingRequests": [],
    "description": "A fun and social other event open to all skill levels!",
    "price": 0
  },
  {
    "id": "1006",
    "title": "Yunusabad Stadium Football Session",
    "sportType": "SportType.Football",
    "hostId": "mockUsers[199].id",
    "host": mockUsers[199],
    "location": {
      "address": "Yunusabad District, 3-mavze",
      "city": "Tashkent",
      "lat": 41.364559,
      "lng": 69.294178
    },
    "dateTime": "2025-08-04T17:00:00",
    "duration": 90,
    "maxParticipants": 7,
    "participants": [
      "mockUsers[199]",
      "mockUsers[156]",
      "mockUsers[107]",
      "mockUsers[126]",
      "mockUsers[7]",
      "mockUsers[97]",
      "mockUsers[111]"
    ],
    "approvedParticipants": [
      "mockUsers[199]",
      "mockUsers[156]",
      "mockUsers[107]",
      "mockUsers[126]",
      "mockUsers[7]",
      "mockUsers[97]",
      "mockUsers[111]"
    ],
    "pendingRequests": [],
    "description": "A fun and social football event open to all skill levels!",
    "price": 0
  },
  {
    "id": "1007",
    "title": "Fitness First Gym Session",
    "sportType": "SportType.Gym",
    "hostId": "mockUsers[188].id",
    "host": mockUsers[188],
    "location": {
      "address": "Afrosiyob Street, 41",
      "city": "Tashkent",
      "lat": 41.31,
      "lng": 69.28
    },
    "dateTime": "2025-08-18T19:00:00",
    "duration": 90,
    "maxParticipants": 11,
    "participants": [
      "mockUsers[188]",
      "mockUsers[165]",
      "mockUsers[51]",
      "mockUsers[23]",
      "mockUsers[83]",
      "mockUsers[136]",
      "mockUsers[84]",
      "mockUsers[143]",
      "mockUsers[115]",
      "mockUsers[65]",
      "mockUsers[175]"
    ],
    "approvedParticipants": [
      "mockUsers[188]",
      "mockUsers[165]",
      "mockUsers[51]",
      "mockUsers[23]",
      "mockUsers[83]",
      "mockUsers[136]",
      "mockUsers[84]",
      "mockUsers[143]",
      "mockUsers[115]",
      "mockUsers[65]",
      "mockUsers[175]"
    ],
    "pendingRequests": [],
    "description": "A fun and social gym event open to all skill levels!",
    "price": 0
  },
  {
    "id": "1008",
    "title": "Fitness First Gym Session",
    "sportType": "SportType.Gym",
    "hostId": "mockUsers[107].id",
    "host": mockUsers[107],
    "location": {
      "address": "Afrosiyob Street, 41",
      "city": "Tashkent",
      "lat": 41.31,
      "lng": 69.28
    },
    "dateTime": "2025-08-23T07:00:00",
    "duration": 90,
    "maxParticipants": 5,
    "participants": [
      "mockUsers[107]",
      "mockUsers[45]",
      "mockUsers[141]",
      "mockUsers[136]",
      "mockUsers[175]"
    ],
    "approvedParticipants": [
      "mockUsers[107]",
      "mockUsers[45]",
      "mockUsers[141]",
      "mockUsers[136]",
      "mockUsers[175]"
    ],
    "pendingRequests": [],
    "description": "A fun and social gym event open to all skill levels!",
    "price": 0
  },
  {
    "id": "1009",
    "title": "River Park Running Session",
    "sportType": "SportType.Running",
    "hostId": "mockUsers[36].id",
    "host": mockUsers[36],
    "location": {
      "address": "Tashkent",
      "city": "Tashkent",
      "lat": 41.33,
      "lng": 69.31
    },
    "dateTime": "2025-08-04T09:00:00",
    "duration": 90,
    "maxParticipants": 7,
    "participants": [
      "mockUsers[36]",
      "mockUsers[87]",
      "mockUsers[6]",
      "mockUsers[35]",
      "mockUsers[192]",
      "mockUsers[151]",
      "mockUsers[186]"
    ],
    "approvedParticipants": [
      "mockUsers[36]",
      "mockUsers[87]",
      "mockUsers[6]",
      "mockUsers[35]",
      "mockUsers[192]",
      "mockUsers[151]",
      "mockUsers[186]"
    ],
    "pendingRequests": [],
    "description": "A fun and social running event open to all skill levels!",
    "price": 0
  },
  {
    "id": "1010",
    "title": "Anhor Park Rink Other Session",
    "sportType": "SportType.Other",
    "hostId": "mockUsers[130].id",
    "host": mockUsers[130],
    "location": {
      "address": "Labzak Street, Shaykhantaur",
      "city": "Tashkent",
      "lat": 41.31,
      "lng": 69.24
    },
    "dateTime": "2025-07-20T18:00:00",
    "duration": 60,
    "maxParticipants": 4,
    "participants": [
      "mockUsers[130]",
      "mockUsers[113]",
      "mockUsers[94]",
      "mockUsers[6]"
    ],
    "approvedParticipants": [
      "mockUsers[130]",
      "mockUsers[113]",
      "mockUsers[94]",
      "mockUsers[6]"
    ],
    "pendingRequests": [],
    "description": "A fun and social other event open to all skill levels!",
    "price": 0
  },
  {
    "id": "1011",
    "title": "TTClub Tennis Session",
    "sportType": "SportType.Tennis",
    "hostId": "mockUsers[122].id",
    "host": mockUsers[122],
    "location": {
      "address": "Mahtumquli Street, 105\u0413",
      "city": "Tashkent",
      "lat": 41.35,
      "lng": 69.3
    },
    "dateTime": "2025-08-26T09:00:00",
    "duration": 90,
    "maxParticipants": 6,
    "participants": [
      "mockUsers[122]",
      "mockUsers[128]",
      "mockUsers[3]",
      "mockUsers[109]",
      "mockUsers[84]",
      "mockUsers[159]"
    ],
    "approvedParticipants": [
      "mockUsers[122]",
      "mockUsers[128]",
      "mockUsers[3]",
      "mockUsers[109]",
      "mockUsers[84]",
      "mockUsers[159]"
    ],
    "pendingRequests": [],
    "description": "A fun and social tennis event open to all skill levels!",
    "price": 0
  },
  {
    "id": "1012",
    "title": "Fitness First Gym Session",
    "sportType": "SportType.Gym",
    "hostId": "mockUsers[26].id",
    "host": mockUsers[26],
    "location": {
      "address": "Afrosiyob Street, 41",
      "city": "Tashkent",
      "lat": 41.31,
      "lng": 69.28
    },
    "dateTime": "2025-08-15T19:00:00",
    "duration": 120,
    "maxParticipants": 5,
    "participants": [
      "mockUsers[26]",
      "mockUsers[75]",
      "mockUsers[186]",
      "mockUsers[150]",
      "mockUsers[179]"
    ],
    "approvedParticipants": [
      "mockUsers[26]",
      "mockUsers[75]",
      "mockUsers[186]",
      "mockUsers[150]",
      "mockUsers[179]"
    ],
    "pendingRequests": [],
    "description": "A fun and social gym event open to all skill levels!",
    "price": 0
  },
  {
    "id": "1013",
    "title": "Chamanzar Field Football Session",
    "sportType": "SportType.Football",
    "hostId": "mockUsers[36].id",
    "host": mockUsers[36],
    "location": {
      "address": "Uchtepa District, Chamanzar Mahallah",
      "city": "Tashkent",
      "lat": 41.295,
      "lng": 69.211
    },
    "dateTime": "2025-07-15T17:00:00",
    "duration": 60,
    "maxParticipants": 4,
    "participants": [
      "mockUsers[36]",
      "mockUsers[10]",
      "mockUsers[140]",
      "mockUsers[123]"
    ],
    "approvedParticipants": [
      "mockUsers[36]",
      "mockUsers[10]",
      "mockUsers[140]",
      "mockUsers[123]"
    ],
    "pendingRequests": [],
    "description": "A fun and social football event open to all skill levels!",
    "price": 0
  },
  {
    "id": "1014",
    "title": "River Park Running Session",
    "sportType": "SportType.Running",
    "hostId": "mockUsers[61].id",
    "host": mockUsers[61],
    "location": {
      "address": "Tashkent",
      "city": "Tashkent",
      "lat": 41.33,
      "lng": 69.31
    },
    "dateTime": "2025-08-18T18:00:00",
    "duration": 120,
    "maxParticipants": 8,
    "participants": [
      "mockUsers[61]",
      "mockUsers[122]",
      "mockUsers[192]",
      "mockUsers[117]",
      "mockUsers[78]",
      "mockUsers[101]",
      "mockUsers[180]",
      "mockUsers[150]"
    ],
    "approvedParticipants": [
      "mockUsers[61]",
      "mockUsers[122]",
      "mockUsers[192]",
      "mockUsers[117]",
      "mockUsers[78]",
      "mockUsers[101]",
      "mockUsers[180]",
      "mockUsers[150]"
    ],
    "pendingRequests": [],
    "description": "A fun and social running event open to all skill levels!",
    "price": 0
  },
  {
    "id": "1015",
    "title": "Yunusabad Stadium Football Session",
    "sportType": "SportType.Football",
    "hostId": "mockUsers[163].id",
    "host": mockUsers[163],
    "location": {
      "address": "Yunusabad District, 3-mavze",
      "city": "Tashkent",
      "lat": 41.364559,
      "lng": 69.294178
    },
    "dateTime": "2025-08-22T17:00:00",
    "duration": 90,
    "maxParticipants": 11,
    "participants": [
      "mockUsers[163]",
      "mockUsers[20]",
      "mockUsers[173]",
      "mockUsers[104]",
      "mockUsers[149]",
      "mockUsers[3]",
      "mockUsers[151]",
      "mockUsers[129]",
      "mockUsers[128]",
      "mockUsers[79]",
      "mockUsers[58]"
    ],
    "approvedParticipants": [
      "mockUsers[163]",
      "mockUsers[20]",
      "mockUsers[173]",
      "mockUsers[104]",
      "mockUsers[149]",
      "mockUsers[3]",
      "mockUsers[151]",
      "mockUsers[129]",
      "mockUsers[128]",
      "mockUsers[79]",
      "mockUsers[58]"
    ],
    "pendingRequests": [],
    "description": "A fun and social football event open to all skill levels!",
    "price": 0
  },
  {
    "id": "1016",
    "title": "Anhor Park Rink Other Session",
    "sportType": "SportType.Other",
    "hostId": "mockUsers[39].id",
    "host": mockUsers[39],
    "location": {
      "address": "Labzak Street, Shaykhantaur",
      "city": "Tashkent",
      "lat": 41.31,
      "lng": 69.24
    },
    "dateTime": "2025-08-04T09:00:00",
    "duration": 120,
    "maxParticipants": 8,
    "participants": [
      "mockUsers[39]",
      "mockUsers[45]",
      "mockUsers[78]",
      "mockUsers[73]",
      "mockUsers[44]",
      "mockUsers[200]",
      "mockUsers[142]",
      "mockUsers[34]"
    ],
    "approvedParticipants": [
      "mockUsers[39]",
      "mockUsers[45]",
      "mockUsers[78]",
      "mockUsers[73]",
      "mockUsers[44]",
      "mockUsers[200]",
      "mockUsers[142]",
      "mockUsers[34]"
    ],
    "pendingRequests": [],
    "description": "A fun and social other event open to all skill levels!",
    "price": 0
  },
  {
    "id": "1017",
    "title": "Yoga Space Yoga Session",
    "sportType": "SportType.Yoga",
    "hostId": "mockUsers[13].id",
    "host": mockUsers[13],
    "location": {
      "address": "Kichik Beshyogoch street, 56",
      "city": "Tashkent",
      "lat": 41.311,
      "lng": 69.27
    },
    "dateTime": "2025-07-25T17:00:00",
    "duration": 60,
    "maxParticipants": 7,
    "participants": [
      "mockUsers[13]",
      "mockUsers[31]",
      "mockUsers[148]",
      "mockUsers[55]",
      "mockUsers[121]",
      "mockUsers[12]",
      "mockUsers[95]"
    ],
    "approvedParticipants": [
      "mockUsers[13]",
      "mockUsers[31]",
      "mockUsers[148]",
      "mockUsers[55]",
      "mockUsers[121]",
      "mockUsers[12]",
      "mockUsers[95]"
    ],
    "pendingRequests": [],
    "description": "A fun and social yoga event open to all skill levels!",
    "price": 0
  },
  {
    "id": "1018",
    "title": "Yunusabad Stadium Football Session",
    "sportType": "SportType.Football",
    "hostId": "mockUsers[81].id",
    "host": mockUsers[81],
    "location": {
      "address": "Yunusabad District, 3-mavze",
      "city": "Tashkent",
      "lat": 41.364559,
      "lng": 69.294178
    },
    "dateTime": "2025-08-11T07:00:00",
    "duration": 60,
    "maxParticipants": 10,
    "participants": [
      "mockUsers[81]",
      "mockUsers[43]",
      "mockUsers[56]",
      "mockUsers[21]",
      "mockUsers[183]",
      "mockUsers[103]",
      "mockUsers[76]",
      "mockUsers[42]",
      "mockUsers[50]",
      "mockUsers[127]"
    ],
    "approvedParticipants": [
      "mockUsers[81]",
      "mockUsers[43]",
      "mockUsers[56]",
      "mockUsers[21]",
      "mockUsers[183]",
      "mockUsers[103]",
      "mockUsers[76]",
      "mockUsers[42]",
      "mockUsers[50]",
      "mockUsers[127]"
    ],
    "pendingRequests": [],
    "description": "A fun and social football event open to all skill levels!",
    "price": 0
  },
  {
    "id": "1019",
    "title": "Tennis Court Tennis Session",
    "sportType": "SportType.Tennis",
    "hostId": "mockUsers[155].id",
    "host": mockUsers[155],
    "location": {
      "address": "Oqqurghon Street, 16",
      "city": "Tashkent",
      "lat": 41.32,
      "lng": 69.285
    },
    "dateTime": "2025-07-31T17:00:00",
    "duration": 120,
    "maxParticipants": 10,
    "participants": [
      "mockUsers[155]",
      "mockUsers[51]",
      "mockUsers[157]",
      "mockUsers[109]",
      "mockUsers[196]",
      "mockUsers[134]",
      "mockUsers[169]",
      "mockUsers[123]",
      "mockUsers[67]",
      "mockUsers[24]"
    ],
    "approvedParticipants": [
      "mockUsers[155]",
      "mockUsers[51]",
      "mockUsers[157]",
      "mockUsers[109]",
      "mockUsers[196]",
      "mockUsers[134]",
      "mockUsers[169]",
      "mockUsers[123]",
      "mockUsers[67]",
      "mockUsers[24]"
    ],
    "pendingRequests": [],
    "description": "A fun and social tennis event open to all skill levels!",
    "price": 0
  },
  {
    "id": "1020",
    "title": "River Park Running Session",
    "sportType": "SportType.Running",
    "hostId": "mockUsers[119].id",
    "host": mockUsers[119],
    "location": {
      "address": "Tashkent",
      "city": "Tashkent",
      "lat": 41.33,
      "lng": 69.31
    },
    "dateTime": "2025-08-26T07:00:00",
    "duration": 90,
    "maxParticipants": 9,
    "participants": [
      "mockUsers[119]",
      "mockUsers[5]",
      "mockUsers[56]",
      "mockUsers[67]",
      "mockUsers[137]",
      "mockUsers[26]",
      "mockUsers[171]",
      "mockUsers[169]",
      "mockUsers[62]"
    ],
    "approvedParticipants": [
      "mockUsers[119]",
      "mockUsers[5]",
      "mockUsers[56]",
      "mockUsers[67]",
      "mockUsers[137]",
      "mockUsers[26]",
      "mockUsers[171]",
      "mockUsers[169]",
      "mockUsers[62]"
    ],
    "pendingRequests": [],
    "description": "A fun and social running event open to all skill levels!",
    "price": 0
  },
  {
    "id": "1021",
    "title": "Chamanzar Field Football Session",
    "sportType": "SportType.Football",
    "hostId": "mockUsers[50].id",
    "host": mockUsers[50],
    "location": {
      "address": "Uchtepa District, Chamanzar Mahallah",
      "city": "Tashkent",
      "lat": 41.295,
      "lng": 69.211
    },
    "dateTime": "2025-08-20T07:00:00",
    "duration": 120,
    "maxParticipants": 11,
    "participants": [
      "mockUsers[50]",
      "mockUsers[162]",
      "mockUsers[19]",
      "mockUsers[185]",
      "mockUsers[13]",
      "mockUsers[154]",
      "mockUsers[53]",
      "mockUsers[200]",
      "mockUsers[117]",
      "mockUsers[170]",
      "mockUsers[101]"
    ],
    "approvedParticipants": [
      "mockUsers[50]",
      "mockUsers[162]",
      "mockUsers[19]",
      "mockUsers[185]",
      "mockUsers[13]",
      "mockUsers[154]",
      "mockUsers[53]",
      "mockUsers[200]",
      "mockUsers[117]",
      "mockUsers[170]",
      "mockUsers[101]"
    ],
    "pendingRequests": [],
    "description": "A fun and social football event open to all skill levels!",
    "price": 0
  },
  {
    "id": "1022",
    "title": "River Park Running Session",
    "sportType": "SportType.Running",
    "hostId": "mockUsers[180].id",
    "host": mockUsers[180],
    "location": {
      "address": "Tashkent",
      "city": "Tashkent",
      "lat": 41.33,
      "lng": 69.31
    },
    "dateTime": "2025-08-04T17:00:00",
    "duration": 120,
    "maxParticipants": 8,
    "participants": [
      "mockUsers[180]",
      "mockUsers[94]",
      "mockUsers[80]",
      "mockUsers[21]",
      "mockUsers[9]",
      "mockUsers[98]",
      "mockUsers[102]",
      "mockUsers[97]"
    ],
    "approvedParticipants": [
      "mockUsers[180]",
      "mockUsers[94]",
      "mockUsers[80]",
      "mockUsers[21]",
      "mockUsers[9]",
      "mockUsers[98]",
      "mockUsers[102]",
      "mockUsers[97]"
    ],
    "pendingRequests": [],
    "description": "A fun and social running event open to all skill levels!",
    "price": 0
  },
  {
    "id": "1023",
    "title": "Yunusabad Stadium Football Session",
    "sportType": "SportType.Football",
    "hostId": "mockUsers[87].id",
    "host": mockUsers[87],
    "location": {
      "address": "Yunusabad District, 3-mavze",
      "city": "Tashkent",
      "lat": 41.364559,
      "lng": 69.294178
    },
    "dateTime": "2025-07-18T19:00:00",
    "duration": 60,
    "maxParticipants": 9,
    "participants": [
      "mockUsers[87]",
      "mockUsers[175]",
      "mockUsers[51]",
      "mockUsers[89]",
      "mockUsers[18]",
      "mockUsers[193]",
      "mockUsers[167]",
      "mockUsers[145]",
      "mockUsers[187]"
    ],
    "approvedParticipants": [
      "mockUsers[87]",
      "mockUsers[175]",
      "mockUsers[51]",
      "mockUsers[89]",
      "mockUsers[18]",
      "mockUsers[193]",
      "mockUsers[167]",
      "mockUsers[145]",
      "mockUsers[187]"
    ],
    "pendingRequests": [],
    "description": "A fun and social football event open to all skill levels!",
    "price": 0
  },
  {
    "id": "1024",
    "title": "Tennis Court Tennis Session",
    "sportType": "SportType.Tennis",
    "hostId": "mockUsers[31].id",
    "host": mockUsers[31],
    "location": {
      "address": "Oqqurghon Street, 16",
      "city": "Tashkent",
      "lat": 41.32,
      "lng": 69.285
    },
    "dateTime": "2025-08-25T07:00:00",
    "duration": 60,
    "maxParticipants": 4,
    "participants": [
      "mockUsers[31]",
      "mockUsers[131]",
      "mockUsers[15]",
      "mockUsers[72]"
    ],
    "approvedParticipants": [
      "mockUsers[31]",
      "mockUsers[131]",
      "mockUsers[15]",
      "mockUsers[72]"
    ],
    "pendingRequests": [],
    "description": "A fun and social tennis event open to all skill levels!",
    "price": 0
  },
  {
    "id": "1025",
    "title": "River Park Running Session",
    "sportType": "SportType.Running",
    "hostId": "mockUsers[144].id",
    "host": mockUsers[144],
    "location": {
      "address": "Tashkent",
      "city": "Tashkent",
      "lat": 41.33,
      "lng": 69.31
    },
    "dateTime": "2025-07-31T18:00:00",
    "duration": 60,
    "maxParticipants": 6,
    "participants": [
      "mockUsers[144]",
      "mockUsers[28]",
      "mockUsers[38]",
      "mockUsers[66]",
      "mockUsers[11]",
      "mockUsers[188]"
    ],
    "approvedParticipants": [
      "mockUsers[144]",
      "mockUsers[28]",
      "mockUsers[38]",
      "mockUsers[66]",
      "mockUsers[11]",
      "mockUsers[188]"
    ],
    "pendingRequests": [],
    "description": "A fun and social running event open to all skill levels!",
    "price": 0
  },
  {
    "id": "1026",
    "title": "Tennis Court Tennis Session",
    "sportType": "SportType.Tennis",
    "hostId": "mockUsers[8].id",
    "host": mockUsers[8],
    "location": {
      "address": "Oqqurghon Street, 16",
      "city": "Tashkent",
      "lat": 41.32,
      "lng": 69.285
    },
    "dateTime": "2025-07-31T19:00:00",
    "duration": 120,
    "maxParticipants": 8,
    "participants": [
      "mockUsers[8]",
      "mockUsers[159]",
      "mockUsers[115]",
      "mockUsers[15]",
      "mockUsers[186]",
      "mockUsers[134]",
      "mockUsers[76]",
      "mockUsers[77]"
    ],
    "approvedParticipants": [
      "mockUsers[8]",
      "mockUsers[159]",
      "mockUsers[115]",
      "mockUsers[15]",
      "mockUsers[186]",
      "mockUsers[134]",
      "mockUsers[76]",
      "mockUsers[77]"
    ],
    "pendingRequests": [],
    "description": "A fun and social tennis event open to all skill levels!",
    "price": 0
  },
  {
    "id": "1027",
    "title": "Aqualand Swimming Session",
    "sportType": "SportType.Swimming",
    "hostId": "mockUsers[64].id",
    "host": mockUsers[64],
    "location": {
      "address": "Chinabad Street, 61A",
      "city": "Tashkent",
      "lat": 41.36,
      "lng": 69.29
    },
    "dateTime": "2025-07-25T18:00:00",
    "duration": 60,
    "maxParticipants": 5,
    "participants": [
      "mockUsers[64]",
      "mockUsers[134]",
      "mockUsers[40]",
      "mockUsers[75]",
      "mockUsers[23]"
    ],
    "approvedParticipants": [
      "mockUsers[64]",
      "mockUsers[134]",
      "mockUsers[40]",
      "mockUsers[75]",
      "mockUsers[23]"
    ],
    "pendingRequests": [],
    "description": "A fun and social swimming event open to all skill levels!",
    "price": 0
  },
  {
    "id": "1028",
    "title": "TTClub Tennis Session",
    "sportType": "SportType.Tennis",
    "hostId": "mockUsers[8].id",
    "host": mockUsers[8],
    "location": {
      "address": "Mahtumquli Street, 105\u0413",
      "city": "Tashkent",
      "lat": 41.35,
      "lng": 69.3
    },
    "dateTime": "2025-07-27T17:00:00",
    "duration": 60,
    "maxParticipants": 4,
    "participants": [
      "mockUsers[8]",
      "mockUsers[62]",
      "mockUsers[133]",
      "mockUsers[159]"
    ],
    "approvedParticipants": [
      "mockUsers[8]",
      "mockUsers[62]",
      "mockUsers[133]",
      "mockUsers[159]"
    ],
    "pendingRequests": [],
    "description": "A fun and social tennis event open to all skill levels!",
    "price": 0
  },
  {
    "id": "1029",
    "title": "Anhor Park Rink Other Session",
    "sportType": "SportType.Other",
    "hostId": "mockUsers[140].id",
    "host": mockUsers[140],
    "location": {
      "address": "Labzak Street, Shaykhantaur",
      "city": "Tashkent",
      "lat": 41.31,
      "lng": 69.24
    },
    "dateTime": "2025-08-07T07:00:00",
    "duration": 120,
    "maxParticipants": 4,
    "participants": [
      "mockUsers[140]",
      "mockUsers[157]",
      "mockUsers[103]",
      "mockUsers[146]"
    ],
    "approvedParticipants": [
      "mockUsers[140]",
      "mockUsers[157]",
      "mockUsers[103]",
      "mockUsers[146]"
    ],
    "pendingRequests": [],
    "description": "A fun and social other event open to all skill levels!",
    "price": 0
  },
  {
    "id": "1030",
    "title": "Tennis Court Tennis Session",
    "sportType": "SportType.Tennis",
    "hostId": "mockUsers[116].id",
    "host": mockUsers[116],
    "location": {
      "address": "Oqqurghon Street, 16",
      "city": "Tashkent",
      "lat": 41.32,
      "lng": 69.285
    },
    "dateTime": "2025-07-31T07:00:00",
    "duration": 120,
    "maxParticipants": 6,
    "participants": [
      "mockUsers[116]",
      "mockUsers[9]",
      "mockUsers[159]",
      "mockUsers[119]",
      "mockUsers[52]",
      "mockUsers[65]"
    ],
    "approvedParticipants": [
      "mockUsers[116]",
      "mockUsers[9]",
      "mockUsers[159]",
      "mockUsers[119]",
      "mockUsers[52]",
      "mockUsers[65]"
    ],
    "pendingRequests": [],
    "description": "A fun and social tennis event open to all skill levels!",
    "price": 0
  },
  {
    "id": "1031",
    "title": "River Park Running Session",
    "sportType": "SportType.Running",
    "hostId": "mockUsers[193].id",
    "host": mockUsers[193],
    "location": {
      "address": "Tashkent",
      "city": "Tashkent",
      "lat": 41.33,
      "lng": 69.31
    },
    "dateTime": "2025-08-04T09:00:00",
    "duration": 60,
    "maxParticipants": 9,
    "participants": [
      "mockUsers[193]",
      "mockUsers[192]",
      "mockUsers[102]",
      "mockUsers[43]",
      "mockUsers[58]",
      "mockUsers[68]",
      "mockUsers[154]",
      "mockUsers[63]",
      "mockUsers[119]"
    ],
    "approvedParticipants": [
      "mockUsers[193]",
      "mockUsers[192]",
      "mockUsers[102]",
      "mockUsers[43]",
      "mockUsers[58]",
      "mockUsers[68]",
      "mockUsers[154]",
      "mockUsers[63]",
      "mockUsers[119]"
    ],
    "pendingRequests": [],
    "description": "A fun and social running event open to all skill levels!",
    "price": 0
  },
  {
    "id": "1032",
    "title": "Yoga Space Yoga Session",
    "sportType": "SportType.Yoga",
    "hostId": "mockUsers[82].id",
    "host": mockUsers[82],
    "location": {
      "address": "Kichik Beshyogoch street, 56",
      "city": "Tashkent",
      "lat": 41.311,
      "lng": 69.27
    },
    "dateTime": "2025-08-23T09:00:00",
    "duration": 90,
    "maxParticipants": 10,
    "participants": [
      "mockUsers[82]",
      "mockUsers[68]",
      "mockUsers[64]",
      "mockUsers[29]",
      "mockUsers[28]",
      "mockUsers[170]",
      "mockUsers[126]",
      "mockUsers[133]",
      "mockUsers[100]",
      "mockUsers[39]"
    ],
    "approvedParticipants": [
      "mockUsers[82]",
      "mockUsers[68]",
      "mockUsers[64]",
      "mockUsers[29]",
      "mockUsers[28]",
      "mockUsers[170]",
      "mockUsers[126]",
      "mockUsers[133]",
      "mockUsers[100]",
      "mockUsers[39]"
    ],
    "pendingRequests": [],
    "description": "A fun and social yoga event open to all skill levels!",
    "price": 0
  },
  {
    "id": "1033",
    "title": "Yunusabad Stadium Football Session",
    "sportType": "SportType.Football",
    "hostId": "mockUsers[96].id",
    "host": mockUsers[96],
    "location": {
      "address": "Yunusabad District, 3-mavze",
      "city": "Tashkent",
      "lat": 41.364559,
      "lng": 69.294178
    },
    "dateTime": "2025-07-23T09:00:00",
    "duration": 120,
    "maxParticipants": 7,
    "participants": [
      "mockUsers[96]",
      "mockUsers[143]",
      "mockUsers[36]",
      "mockUsers[80]",
      "mockUsers[186]",
      "mockUsers[133]",
      "mockUsers[73]"
    ],
    "approvedParticipants": [
      "mockUsers[96]",
      "mockUsers[143]",
      "mockUsers[36]",
      "mockUsers[80]",
      "mockUsers[186]",
      "mockUsers[133]",
      "mockUsers[73]"
    ],
    "pendingRequests": [],
    "description": "A fun and social football event open to all skill levels!",
    "price": 0
  },
  {
    "id": "1034",
    "title": "Aqualand Swimming Session",
    "sportType": "SportType.Swimming",
    "hostId": "mockUsers[25].id",
    "host": mockUsers[25],
    "location": {
      "address": "Chinabad Street, 61A",
      "city": "Tashkent",
      "lat": 41.36,
      "lng": 69.29
    },
    "dateTime": "2025-07-30T07:00:00",
    "duration": 90,
    "maxParticipants": 7,
    "participants": [
      "mockUsers[25]",
      "mockUsers[185]",
      "mockUsers[121]",
      "mockUsers[191]",
      "mockUsers[37]",
      "mockUsers[118]",
      "mockUsers[139]"
    ],
    "approvedParticipants": [
      "mockUsers[25]",
      "mockUsers[185]",
      "mockUsers[121]",
      "mockUsers[191]",
      "mockUsers[37]",
      "mockUsers[118]",
      "mockUsers[139]"
    ],
    "pendingRequests": [],
    "description": "A fun and social swimming event open to all skill levels!",
    "price": 0
  },
  {
    "id": "1035",
    "title": "Anhor Park Rink Other Session",
    "sportType": "SportType.Other",
    "hostId": "mockUsers[158].id",
    "host": mockUsers[158],
    "location": {
      "address": "Labzak Street, Shaykhantaur",
      "city": "Tashkent",
      "lat": 41.31,
      "lng": 69.24
    },
    "dateTime": "2025-08-04T09:00:00",
    "duration": 60,
    "maxParticipants": 9,
    "participants": [
      "mockUsers[158]",
      "mockUsers[145]",
      "mockUsers[170]",
      "mockUsers[28]",
      "mockUsers[69]",
      "mockUsers[129]",
      "mockUsers[130]",
      "mockUsers[116]",
      "mockUsers[48]"
    ],
    "approvedParticipants": [
      "mockUsers[158]",
      "mockUsers[145]",
      "mockUsers[170]",
      "mockUsers[28]",
      "mockUsers[69]",
      "mockUsers[129]",
      "mockUsers[130]",
      "mockUsers[116]",
      "mockUsers[48]"
    ],
    "pendingRequests": [],
    "description": "A fun and social other event open to all skill levels!",
    "price": 0
  },
  {
    "id": "1036",
    "title": "Fitness First Gym Session",
    "sportType": "SportType.Gym",
    "hostId": "mockUsers[19].id",
    "host": mockUsers[19],
    "location": {
      "address": "Afrosiyob Street, 41",
      "city": "Tashkent",
      "lat": 41.31,
      "lng": 69.28
    },
    "dateTime": "2025-08-26T17:00:00",
    "duration": 120,
    "maxParticipants": 11,
    "participants": [
      "mockUsers[19]",
      "mockUsers[101]",
      "mockUsers[94]",
      "mockUsers[97]",
      "mockUsers[79]",
      "mockUsers[74]",
      "mockUsers[85]",
      "mockUsers[200]",
      "mockUsers[31]",
      "mockUsers[30]",
      "mockUsers[106]"
    ],
    "approvedParticipants": [
      "mockUsers[19]",
      "mockUsers[101]",
      "mockUsers[94]",
      "mockUsers[97]",
      "mockUsers[79]",
      "mockUsers[74]",
      "mockUsers[85]",
      "mockUsers[200]",
      "mockUsers[31]",
      "mockUsers[30]",
      "mockUsers[106]"
    ],
    "pendingRequests": [],
    "description": "A fun and social gym event open to all skill levels!",
    "price": 0
  },
  {
    "id": "1037",
    "title": "River Park Running Session",
    "sportType": "SportType.Running",
    "hostId": "mockUsers[119].id",
    "host": mockUsers[119],
    "location": {
      "address": "Tashkent",
      "city": "Tashkent",
      "lat": 41.33,
      "lng": 69.31
    },
    "dateTime": "2025-07-22T19:00:00",
    "duration": 120,
    "maxParticipants": 11,
    "participants": [
      "mockUsers[119]",
      "mockUsers[34]",
      "mockUsers[3]",
      "mockUsers[150]",
      "mockUsers[196]",
      "mockUsers[145]",
      "mockUsers[48]",
      "mockUsers[143]",
      "mockUsers[199]",
      "mockUsers[109]",
      "mockUsers[178]"
    ],
    "approvedParticipants": [
      "mockUsers[119]",
      "mockUsers[34]",
      "mockUsers[3]",
      "mockUsers[150]",
      "mockUsers[196]",
      "mockUsers[145]",
      "mockUsers[48]",
      "mockUsers[143]",
      "mockUsers[199]",
      "mockUsers[109]",
      "mockUsers[178]"
    ],
    "pendingRequests": [],
    "description": "A fun and social running event open to all skill levels!",
    "price": 0
  },
  {
    "id": "1038",
    "title": "Fitness First Gym Session",
    "sportType": "SportType.Gym",
    "hostId": "mockUsers[83].id",
    "host": mockUsers[83],
    "location": {
      "address": "Afrosiyob Street, 41",
      "city": "Tashkent",
      "lat": 41.31,
      "lng": 69.28
    },
    "dateTime": "2025-08-11T18:00:00",
    "duration": 60,
    "maxParticipants": 10,
    "participants": [
      "mockUsers[83]",
      "mockUsers[75]",
      "mockUsers[42]",
      "mockUsers[172]",
      "mockUsers[40]",
      "mockUsers[181]",
      "mockUsers[82]",
      "mockUsers[130]",
      "mockUsers[187]",
      "mockUsers[7]"
    ],
    "approvedParticipants": [
      "mockUsers[83]",
      "mockUsers[75]",
      "mockUsers[42]",
      "mockUsers[172]",
      "mockUsers[40]",
      "mockUsers[181]",
      "mockUsers[82]",
      "mockUsers[130]",
      "mockUsers[187]",
      "mockUsers[7]"
    ],
    "pendingRequests": [],
    "description": "A fun and social gym event open to all skill levels!",
    "price": 0
  },
  {
    "id": "1039",
    "title": "Anhor Park Rink Other Session",
    "sportType": "SportType.Other",
    "hostId": "mockUsers[132].id",
    "host": mockUsers[132],
    "location": {
      "address": "Labzak Street, Shaykhantaur",
      "city": "Tashkent",
      "lat": 41.31,
      "lng": 69.24
    },
    "dateTime": "2025-08-14T19:00:00",
    "duration": 60,
    "maxParticipants": 7,
    "participants": [
      "mockUsers[132]",
      "mockUsers[131]",
      "mockUsers[35]",
      "mockUsers[86]",
      "mockUsers[173]",
      "mockUsers[159]",
      "mockUsers[105]"
    ],
    "approvedParticipants": [
      "mockUsers[132]",
      "mockUsers[131]",
      "mockUsers[35]",
      "mockUsers[86]",
      "mockUsers[173]",
      "mockUsers[159]",
      "mockUsers[105]"
    ],
    "pendingRequests": [],
    "description": "A fun and social other event open to all skill levels!",
    "price": 0
  },
  {
    "id": "1040",
    "title": "Yoga Space Yoga Session",
    "sportType": "SportType.Yoga",
    "hostId": "mockUsers[141].id",
    "host": mockUsers[141],
    "location": {
      "address": "Kichik Beshyogoch street, 56",
      "city": "Tashkent",
      "lat": 41.311,
      "lng": 69.27
    },
    "dateTime": "2025-07-22T18:00:00",
    "duration": 90,
    "maxParticipants": 5,
    "participants": [
      "mockUsers[141]",
      "mockUsers[174]",
      "mockUsers[179]",
      "mockUsers[176]",
      "mockUsers[86]"
    ],
    "approvedParticipants": [
      "mockUsers[141]",
      "mockUsers[174]",
      "mockUsers[179]",
      "mockUsers[176]",
      "mockUsers[86]"
    ],
    "pendingRequests": [],
    "description": "A fun and social yoga event open to all skill levels!",
    "price": 0
  },
  {
    "id": "1041",
    "title": "Aqualand Swimming Session",
    "sportType": "SportType.Swimming",
    "hostId": "mockUsers[102].id",
    "host": mockUsers[102],
    "location": {
      "address": "Chinabad Street, 61A",
      "city": "Tashkent",
      "lat": 41.36,
      "lng": 69.29
    },
    "dateTime": "2025-07-21T09:00:00",
    "duration": 90,
    "maxParticipants": 6,
    "participants": [
      "mockUsers[102]",
      "mockUsers[73]",
      "mockUsers[165]",
      "mockUsers[157]",
      "mockUsers[148]",
      "mockUsers[92]"
    ],
    "approvedParticipants": [
      "mockUsers[102]",
      "mockUsers[73]",
      "mockUsers[165]",
      "mockUsers[157]",
      "mockUsers[148]",
      "mockUsers[92]"
    ],
    "pendingRequests": [],
    "description": "A fun and social swimming event open to all skill levels!",
    "price": 0
  },
  {
    "id": "1042",
    "title": "Aqualand Swimming Session",
    "sportType": "SportType.Swimming",
    "hostId": "mockUsers[97].id",
    "host": mockUsers[97],
    "location": {
      "address": "Chinabad Street, 61A",
      "city": "Tashkent",
      "lat": 41.36,
      "lng": 69.29
    },
    "dateTime": "2025-08-29T18:00:00",
    "duration": 60,
    "maxParticipants": 6,
    "participants": [
      "mockUsers[97]",
      "mockUsers[43]",
      "mockUsers[55]",
      "mockUsers[146]",
      "mockUsers[102]",
      "mockUsers[24]"
    ],
    "approvedParticipants": [
      "mockUsers[97]",
      "mockUsers[43]",
      "mockUsers[55]",
      "mockUsers[146]",
      "mockUsers[102]",
      "mockUsers[24]"
    ],
    "pendingRequests": [],
    "description": "A fun and social swimming event open to all skill levels!",
    "price": 0
  },
  {
    "id": "1043",
    "title": "River Park Running Session",
    "sportType": "SportType.Running",
    "hostId": "mockUsers[134].id",
    "host": mockUsers[134],
    "location": {
      "address": "Tashkent",
      "city": "Tashkent",
      "lat": 41.33,
      "lng": 69.31
    },
    "dateTime": "2025-08-25T18:00:00",
    "duration": 90,
    "maxParticipants": 9,
    "participants": [
      "mockUsers[134]",
      "mockUsers[196]",
      "mockUsers[53]",
      "mockUsers[19]",
      "mockUsers[91]",
      "mockUsers[100]",
      "mockUsers[141]",
      "mockUsers[31]",
      "mockUsers[105]"
    ],
    "approvedParticipants": [
      "mockUsers[134]",
      "mockUsers[196]",
      "mockUsers[53]",
      "mockUsers[19]",
      "mockUsers[91]",
      "mockUsers[100]",
      "mockUsers[141]",
      "mockUsers[31]",
      "mockUsers[105]"
    ],
    "pendingRequests": [],
    "description": "A fun and social running event open to all skill levels!",
    "price": 0
  },
  {
    "id": "1044",
    "title": "Aqualand Swimming Session",
    "sportType": "SportType.Swimming",
    "hostId": "mockUsers[67].id",
    "host": mockUsers[67],
    "location": {
      "address": "Chinabad Street, 61A",
      "city": "Tashkent",
      "lat": 41.36,
      "lng": 69.29
    },
    "dateTime": "2025-08-06T18:00:00",
    "duration": 120,
    "maxParticipants": 4,
    "participants": [
      "mockUsers[67]",
      "mockUsers[94]",
      "mockUsers[66]",
      "mockUsers[149]"
    ],
    "approvedParticipants": [
      "mockUsers[67]",
      "mockUsers[94]",
      "mockUsers[66]",
      "mockUsers[149]"
    ],
    "pendingRequests": [],
    "description": "A fun and social swimming event open to all skill levels!",
    "price": 0
  },
  {
    "id": "1045",
    "title": "Aqualand Swimming Session",
    "sportType": "SportType.Swimming",
    "hostId": "mockUsers[25].id",
    "host": mockUsers[25],
    "location": {
      "address": "Chinabad Street, 61A",
      "city": "Tashkent",
      "lat": 41.36,
      "lng": 69.29
    },
    "dateTime": "2025-08-23T07:00:00",
    "duration": 120,
    "maxParticipants": 6,
    "participants": [
      "mockUsers[25]",
      "mockUsers[116]",
      "mockUsers[88]",
      "mockUsers[30]",
      "mockUsers[114]",
      "mockUsers[140]"
    ],
    "approvedParticipants": [
      "mockUsers[25]",
      "mockUsers[116]",
      "mockUsers[88]",
      "mockUsers[30]",
      "mockUsers[114]",
      "mockUsers[140]"
    ],
    "pendingRequests": [],
    "description": "A fun and social swimming event open to all skill levels!",
    "price": 0
  },
  {
    "id": "1046",
    "title": "Chamanzar Field Football Session",
    "sportType": "SportType.Football",
    "hostId": "mockUsers[21].id",
    "host": mockUsers[21],
    "location": {
      "address": "Uchtepa District, Chamanzar Mahallah",
      "city": "Tashkent",
      "lat": 41.295,
      "lng": 69.211
    },
    "dateTime": "2025-08-13T19:00:00",
    "duration": 60,
    "maxParticipants": 6,
    "participants": [
      "mockUsers[21]",
      "mockUsers[35]",
      "mockUsers[181]",
      "mockUsers[94]",
      "mockUsers[41]",
      "mockUsers[107]"
    ],
    "approvedParticipants": [
      "mockUsers[21]",
      "mockUsers[35]",
      "mockUsers[181]",
      "mockUsers[94]",
      "mockUsers[41]",
      "mockUsers[107]"
    ],
    "pendingRequests": [],
    "description": "A fun and social football event open to all skill levels!",
    "price": 0
  },
  {
    "id": "1047",
    "title": "Chamanzar Field Football Session",
    "sportType": "SportType.Football",
    "hostId": "mockUsers[152].id",
    "host": mockUsers[152],
    "location": {
      "address": "Uchtepa District, Chamanzar Mahallah",
      "city": "Tashkent",
      "lat": 41.295,
      "lng": 69.211
    },
    "dateTime": "2025-07-29T09:00:00",
    "duration": 120,
    "maxParticipants": 8,
    "participants": [
      "mockUsers[152]",
      "mockUsers[90]",
      "mockUsers[147]",
      "mockUsers[75]",
      "mockUsers[64]",
      "mockUsers[19]",
      "mockUsers[103]",
      "mockUsers[108]"
    ],
    "approvedParticipants": [
      "mockUsers[152]",
      "mockUsers[90]",
      "mockUsers[147]",
      "mockUsers[75]",
      "mockUsers[64]",
      "mockUsers[19]",
      "mockUsers[103]",
      "mockUsers[108]"
    ],
    "pendingRequests": [],
    "description": "A fun and social football event open to all skill levels!",
    "price": 0
  },
  {
    "id": "1048",
    "title": "Anhor Park Rink Other Session",
    "sportType": "SportType.Other",
    "hostId": "mockUsers[87].id",
    "host": mockUsers[87],
    "location": {
      "address": "Labzak Street, Shaykhantaur",
      "city": "Tashkent",
      "lat": 41.31,
      "lng": 69.24
    },
    "dateTime": "2025-08-08T17:00:00",
    "duration": 120,
    "maxParticipants": 6,
    "participants": [
      "mockUsers[87]",
      "mockUsers[93]",
      "mockUsers[156]",
      "mockUsers[194]",
      "mockUsers[46]",
      "mockUsers[50]"
    ],
    "approvedParticipants": [
      "mockUsers[87]",
      "mockUsers[93]",
      "mockUsers[156]",
      "mockUsers[194]",
      "mockUsers[46]",
      "mockUsers[50]"
    ],
    "pendingRequests": [],
    "description": "A fun and social other event open to all skill levels!",
    "price": 0
  },
  {
    "id": "1049",
    "title": "Yunusabad Stadium Football Session",
    "sportType": "SportType.Football",
    "hostId": "mockUsers[130].id",
    "host": mockUsers[130],
    "location": {
      "address": "Yunusabad District, 3-mavze",
      "city": "Tashkent",
      "lat": 41.364559,
      "lng": 69.294178
    },
    "dateTime": "2025-08-18T19:00:00",
    "duration": 120,
    "maxParticipants": 6,
    "participants": [
      "mockUsers[130]",
      "mockUsers[26]",
      "mockUsers[108]",
      "mockUsers[153]",
      "mockUsers[185]",
      "mockUsers[124]"
    ],
    "approvedParticipants": [
      "mockUsers[130]",
      "mockUsers[26]",
      "mockUsers[108]",
      "mockUsers[153]",
      "mockUsers[185]",
      "mockUsers[124]"
    ],
    "pendingRequests": [],
    "description": "A fun and social football event open to all skill levels!",
    "price": 0
  },
  {
    "id": "1050",
    "title": "Chamanzar Field Football Session",
    "sportType": "SportType.Football",
    "hostId": "mockUsers[45].id",
    "host": mockUsers[45],
    "location": {
      "address": "Uchtepa District, Chamanzar Mahallah",
      "city": "Tashkent",
      "lat": 41.295,
      "lng": 69.211
    },
    "dateTime": "2025-08-13T19:00:00",
    "duration": 60,
    "maxParticipants": 9,
    "participants": [
      "mockUsers[45]",
      "mockUsers[119]",
      "mockUsers[33]",
      "mockUsers[75]",
      "mockUsers[99]",
      "mockUsers[178]",
      "mockUsers[113]",
      "mockUsers[89]",
      "mockUsers[29]"
    ],
    "approvedParticipants": [
      "mockUsers[45]",
      "mockUsers[119]",
      "mockUsers[33]",
      "mockUsers[75]",
      "mockUsers[99]",
      "mockUsers[178]",
      "mockUsers[113]",
      "mockUsers[89]",
      "mockUsers[29]"
    ],
    "pendingRequests": [],
    "description": "A fun and social football event open to all skill levels!",
    "price": 0
  },
  {
    "id": "1051",
    "title": "TTClub Tennis Session",
    "sportType": "SportType.Tennis",
    "hostId": "mockUsers[3].id",
    "host": mockUsers[3],
    "location": {
      "address": "Mahtumquli Street, 105\u0413",
      "city": "Tashkent",
      "lat": 41.35,
      "lng": 69.3
    },
    "dateTime": "2025-08-30T18:00:00",
    "duration": 60,
    "maxParticipants": 8,
    "participants": [
      "mockUsers[3]",
      "mockUsers[194]",
      "mockUsers[74]",
      "mockUsers[113]",
      "mockUsers[146]",
      "mockUsers[94]",
      "mockUsers[87]",
      "mockUsers[172]"
    ],
    "approvedParticipants": [
      "mockUsers[3]",
      "mockUsers[194]",
      "mockUsers[74]",
      "mockUsers[113]",
      "mockUsers[146]",
      "mockUsers[94]",
      "mockUsers[87]",
      "mockUsers[172]"
    ],
    "pendingRequests": [],
    "description": "A fun and social tennis event open to all skill levels!",
    "price": 0
  },
  {
    "id": "1052",
    "title": "Chamanzar Field Football Session",
    "sportType": "SportType.Football",
    "hostId": "mockUsers[61].id",
    "host": mockUsers[61],
    "location": {
      "address": "Uchtepa District, Chamanzar Mahallah",
      "city": "Tashkent",
      "lat": 41.295,
      "lng": 69.211
    },
    "dateTime": "2025-07-31T17:00:00",
    "duration": 60,
    "maxParticipants": 8,
    "participants": [
      "mockUsers[61]",
      "mockUsers[84]",
      "mockUsers[150]",
      "mockUsers[77]",
      "mockUsers[108]",
      "mockUsers[18]",
      "mockUsers[19]",
      "mockUsers[119]"
    ],
    "approvedParticipants": [
      "mockUsers[61]",
      "mockUsers[84]",
      "mockUsers[150]",
      "mockUsers[77]",
      "mockUsers[108]",
      "mockUsers[18]",
      "mockUsers[19]",
      "mockUsers[119]"
    ],
    "pendingRequests": [],
    "description": "A fun and social football event open to all skill levels!",
    "price": 0
  },
  {
    "id": "1053",
    "title": "Yoga Space Yoga Session",
    "sportType": "SportType.Yoga",
    "hostId": "mockUsers[95].id",
    "host": mockUsers[95],
    "location": {
      "address": "Kichik Beshyogoch street, 56",
      "city": "Tashkent",
      "lat": 41.311,
      "lng": 69.27
    },
    "dateTime": "2025-08-29T18:00:00",
    "duration": 120,
    "maxParticipants": 10,
    "participants": [
      "mockUsers[95]",
      "mockUsers[160]",
      "mockUsers[35]",
      "mockUsers[195]",
      "mockUsers[154]",
      "mockUsers[42]",
      "mockUsers[6]",
      "mockUsers[97]",
      "mockUsers[78]",
      "mockUsers[71]"
    ],
    "approvedParticipants": [
      "mockUsers[95]",
      "mockUsers[160]",
      "mockUsers[35]",
      "mockUsers[195]",
      "mockUsers[154]",
      "mockUsers[42]",
      "mockUsers[6]",
      "mockUsers[97]",
      "mockUsers[78]",
      "mockUsers[71]"
    ],
    "pendingRequests": [],
    "description": "A fun and social yoga event open to all skill levels!",
    "price": 0
  },
  {
    "id": "1054",
    "title": "Tennis Court Tennis Session",
    "sportType": "SportType.Tennis",
    "hostId": "mockUsers[172].id",
    "host": mockUsers[172],
    "location": {
      "address": "Oqqurghon Street, 16",
      "city": "Tashkent",
      "lat": 41.32,
      "lng": 69.285
    },
    "dateTime": "2025-08-25T09:00:00",
    "duration": 60,
    "maxParticipants": 4,
    "participants": [
      "mockUsers[172]",
      "mockUsers[198]",
      "mockUsers[108]",
      "mockUsers[47]"
    ],
    "approvedParticipants": [
      "mockUsers[172]",
      "mockUsers[198]",
      "mockUsers[108]",
      "mockUsers[47]"
    ],
    "pendingRequests": [],
    "description": "A fun and social tennis event open to all skill levels!",
    "price": 0
  },
  {
    "id": "1055",
    "title": "Fitness First Gym Session",
    "sportType": "SportType.Gym",
    "hostId": "mockUsers[99].id",
    "host": mockUsers[99],
    "location": {
      "address": "Afrosiyob Street, 41",
      "city": "Tashkent",
      "lat": 41.31,
      "lng": 69.28
    },
    "dateTime": "2025-08-14T07:00:00",
    "duration": 90,
    "maxParticipants": 8,
    "participants": [
      "mockUsers[99]",
      "mockUsers[150]",
      "mockUsers[102]",
      "mockUsers[36]",
      "mockUsers[149]",
      "mockUsers[127]",
      "mockUsers[86]",
      "mockUsers[84]"
    ],
    "approvedParticipants": [
      "mockUsers[99]",
      "mockUsers[150]",
      "mockUsers[102]",
      "mockUsers[36]",
      "mockUsers[149]",
      "mockUsers[127]",
      "mockUsers[86]",
      "mockUsers[84]"
    ],
    "pendingRequests": [],
    "description": "A fun and social gym event open to all skill levels!",
    "price": 0
  },
  {
    "id": "1056",
    "title": "Aqualand Swimming Session",
    "sportType": "SportType.Swimming",
    "hostId": "mockUsers[29].id",
    "host": mockUsers[29],
    "location": {
      "address": "Chinabad Street, 61A",
      "city": "Tashkent",
      "lat": 41.36,
      "lng": 69.29
    },
    "dateTime": "2025-07-29T17:00:00",
    "duration": 60,
    "maxParticipants": 5,
    "participants": [
      "mockUsers[29]",
      "mockUsers[135]",
      "mockUsers[102]",
      "mockUsers[140]",
      "mockUsers[131]"
    ],
    "approvedParticipants": [
      "mockUsers[29]",
      "mockUsers[135]",
      "mockUsers[102]",
      "mockUsers[140]",
      "mockUsers[131]"
    ],
    "pendingRequests": [],
    "description": "A fun and social swimming event open to all skill levels!",
    "price": 0
  },
  {
    "id": "1057",
    "title": "Yoga Space Yoga Session",
    "sportType": "SportType.Yoga",
    "hostId": "mockUsers[93].id",
    "host": mockUsers[93],
    "location": {
      "address": "Kichik Beshyogoch street, 56",
      "city": "Tashkent",
      "lat": 41.311,
      "lng": 69.27
    },
    "dateTime": "2025-08-04T17:00:00",
    "duration": 120,
    "maxParticipants": 7,
    "participants": [
      "mockUsers[93]",
      "mockUsers[79]",
      "mockUsers[64]",
      "mockUsers[116]",
      "mockUsers[8]",
      "mockUsers[172]",
      "mockUsers[78]"
    ],
    "approvedParticipants": [
      "mockUsers[93]",
      "mockUsers[79]",
      "mockUsers[64]",
      "mockUsers[116]",
      "mockUsers[8]",
      "mockUsers[172]",
      "mockUsers[78]"
    ],
    "pendingRequests": [],
    "description": "A fun and social yoga event open to all skill levels!",
    "price": 0
  },
  {
    "id": "1058",
    "title": "Yoga Space Yoga Session",
    "sportType": "SportType.Yoga",
    "hostId": "mockUsers[9].id",
    "host": mockUsers[9],
    "location": {
      "address": "Kichik Beshyogoch street, 56",
      "city": "Tashkent",
      "lat": 41.311,
      "lng": 69.27
    },
    "dateTime": "2025-07-27T07:00:00",
    "duration": 90,
    "maxParticipants": 10,
    "participants": [
      "mockUsers[9]",
      "mockUsers[28]",
      "mockUsers[177]",
      "mockUsers[73]",
      "mockUsers[102]",
      "mockUsers[161]",
      "mockUsers[94]",
      "mockUsers[196]",
      "mockUsers[35]",
      "mockUsers[135]"
    ],
    "approvedParticipants": [
      "mockUsers[9]",
      "mockUsers[28]",
      "mockUsers[177]",
      "mockUsers[73]",
      "mockUsers[102]",
      "mockUsers[161]",
      "mockUsers[94]",
      "mockUsers[196]",
      "mockUsers[35]",
      "mockUsers[135]"
    ],
    "pendingRequests": [],
    "description": "A fun and social yoga event open to all skill levels!",
    "price": 0
  },
  {
    "id": "1059",
    "title": "TTClub Tennis Session",
    "sportType": "SportType.Tennis",
    "hostId": "mockUsers[12].id",
    "host": mockUsers[12],
    "location": {
      "address": "Mahtumquli Street, 105\u0413",
      "city": "Tashkent",
      "lat": 41.35,
      "lng": 69.3
    },
    "dateTime": "2025-08-10T17:00:00",
    "duration": 60,
    "maxParticipants": 7,
    "participants": [
      "mockUsers[12]",
      "mockUsers[45]",
      "mockUsers[150]",
      "mockUsers[190]",
      "mockUsers[24]",
      "mockUsers[38]",
      "mockUsers[42]"
    ],
    "approvedParticipants": [
      "mockUsers[12]",
      "mockUsers[45]",
      "mockUsers[150]",
      "mockUsers[190]",
      "mockUsers[24]",
      "mockUsers[38]",
      "mockUsers[42]"
    ],
    "pendingRequests": [],
    "description": "A fun and social tennis event open to all skill levels!",
    "price": 0
  },
  {
    "id": "1060",
    "title": "Yunusabad Stadium Football Session",
    "sportType": "SportType.Football",
    "hostId": "mockUsers[153].id",
    "host": mockUsers[153],
    "location": {
      "address": "Yunusabad District, 3-mavze",
      "city": "Tashkent",
      "lat": 41.364559,
      "lng": 69.294178
    },
    "dateTime": "2025-08-07T09:00:00",
    "duration": 60,
    "maxParticipants": 9,
    "participants": [
      "mockUsers[153]",
      "mockUsers[106]",
      "mockUsers[147]",
      "mockUsers[123]",
      "mockUsers[82]",
      "mockUsers[167]",
      "mockUsers[62]",
      "mockUsers[143]",
      "mockUsers[130]"
    ],
    "approvedParticipants": [
      "mockUsers[153]",
      "mockUsers[106]",
      "mockUsers[147]",
      "mockUsers[123]",
      "mockUsers[82]",
      "mockUsers[167]",
      "mockUsers[62]",
      "mockUsers[143]",
      "mockUsers[130]"
    ],
    "pendingRequests": [],
    "description": "A fun and social football event open to all skill levels!",
    "price": 0
  },
  {
    "id": "1061",
    "title": "Yunusabad Stadium Football Session",
    "sportType": "SportType.Football",
    "hostId": "mockUsers[62].id",
    "host": mockUsers[62],
    "location": {
      "address": "Yunusabad District, 3-mavze",
      "city": "Tashkent",
      "lat": 41.364559,
      "lng": 69.294178
    },
    "dateTime": "2025-07-25T07:00:00",
    "duration": 90,
    "maxParticipants": 11,
    "participants": [
      "mockUsers[62]",
      "mockUsers[36]",
      "mockUsers[19]",
      "mockUsers[115]",
      "mockUsers[128]",
      "mockUsers[89]",
      "mockUsers[16]",
      "mockUsers[65]",
      "mockUsers[156]",
      "mockUsers[107]",
      "mockUsers[174]"
    ],
    "approvedParticipants": [
      "mockUsers[62]",
      "mockUsers[36]",
      "mockUsers[19]",
      "mockUsers[115]",
      "mockUsers[128]",
      "mockUsers[89]",
      "mockUsers[16]",
      "mockUsers[65]",
      "mockUsers[156]",
      "mockUsers[107]",
      "mockUsers[174]"
    ],
    "pendingRequests": [],
    "description": "A fun and social football event open to all skill levels!",
    "price": 0
  },
  {
    "id": "1062",
    "title": "Yoga Space Yoga Session",
    "sportType": "SportType.Yoga",
    "hostId": "mockUsers[159].id",
    "host": mockUsers[159],
    "location": {
      "address": "Kichik Beshyogoch street, 56",
      "city": "Tashkent",
      "lat": 41.311,
      "lng": 69.27
    },
    "dateTime": "2025-08-04T07:00:00",
    "duration": 120,
    "maxParticipants": 8,
    "participants": [
      "mockUsers[159]",
      "mockUsers[148]",
      "mockUsers[179]",
      "mockUsers[156]",
      "mockUsers[88]",
      "mockUsers[1]",
      "mockUsers[151]",
      "mockUsers[27]"
    ],
    "approvedParticipants": [
      "mockUsers[159]",
      "mockUsers[148]",
      "mockUsers[179]",
      "mockUsers[156]",
      "mockUsers[88]",
      "mockUsers[1]",
      "mockUsers[151]",
      "mockUsers[27]"
    ],
    "pendingRequests": [],
    "description": "A fun and social yoga event open to all skill levels!",
    "price": 0
  },
  {
    "id": "1063",
    "title": "Yunusabad Stadium Football Session",
    "sportType": "SportType.Football",
    "hostId": "mockUsers[62].id",
    "host": mockUsers[62],
    "location": {
      "address": "Yunusabad District, 3-mavze",
      "city": "Tashkent",
      "lat": 41.364559,
      "lng": 69.294178
    },
    "dateTime": "2025-07-21T07:00:00",
    "duration": 60,
    "maxParticipants": 9,
    "participants": [
      "mockUsers[62]",
      "mockUsers[24]",
      "mockUsers[89]",
      "mockUsers[45]",
      "mockUsers[63]",
      "mockUsers[12]",
      "mockUsers[130]",
      "mockUsers[10]",
      "mockUsers[180]"
    ],
    "approvedParticipants": [
      "mockUsers[62]",
      "mockUsers[24]",
      "mockUsers[89]",
      "mockUsers[45]",
      "mockUsers[63]",
      "mockUsers[12]",
      "mockUsers[130]",
      "mockUsers[10]",
      "mockUsers[180]"
    ],
    "pendingRequests": [],
    "description": "A fun and social football event open to all skill levels!",
    "price": 0
  },
  {
    "id": "1064",
    "title": "Anhor Park Rink Other Session",
    "sportType": "SportType.Other",
    "hostId": "mockUsers[150].id",
    "host": mockUsers[150],
    "location": {
      "address": "Labzak Street, Shaykhantaur",
      "city": "Tashkent",
      "lat": 41.31,
      "lng": 69.24
    },
    "dateTime": "2025-07-21T17:00:00",
    "duration": 120,
    "maxParticipants": 5,
    "participants": [
      "mockUsers[150]",
      "mockUsers[168]",
      "mockUsers[91]",
      "mockUsers[177]",
      "mockUsers[89]"
    ],
    "approvedParticipants": [
      "mockUsers[150]",
      "mockUsers[168]",
      "mockUsers[91]",
      "mockUsers[177]",
      "mockUsers[89]"
    ],
    "pendingRequests": [],
    "description": "A fun and social other event open to all skill levels!",
    "price": 0
  },
  {
    "id": "1065",
    "title": "TTClub Tennis Session",
    "sportType": "SportType.Tennis",
    "hostId": "mockUsers[101].id",
    "host": mockUsers[101],
    "location": {
      "address": "Mahtumquli Street, 105\u0413",
      "city": "Tashkent",
      "lat": 41.35,
      "lng": 69.3
    },
    "dateTime": "2025-08-19T09:00:00",
    "duration": 120,
    "maxParticipants": 8,
    "participants": [
      "mockUsers[101]",
      "mockUsers[129]",
      "mockUsers[171]",
      "mockUsers[105]",
      "mockUsers[72]",
      "mockUsers[40]",
      "mockUsers[131]",
      "mockUsers[178]"
    ],
    "approvedParticipants": [
      "mockUsers[101]",
      "mockUsers[129]",
      "mockUsers[171]",
      "mockUsers[105]",
      "mockUsers[72]",
      "mockUsers[40]",
      "mockUsers[131]",
      "mockUsers[178]"
    ],
    "pendingRequests": [],
    "description": "A fun and social tennis event open to all skill levels!",
    "price": 0
  },
  {
    "id": "1066",
    "title": "Yunusabad Stadium Football Session",
    "sportType": "SportType.Football",
    "hostId": "mockUsers[135].id",
    "host": mockUsers[135],
    "location": {
      "address": "Yunusabad District, 3-mavze",
      "city": "Tashkent",
      "lat": 41.364559,
      "lng": 69.294178
    },
    "dateTime": "2025-08-16T09:00:00",
    "duration": 60,
    "maxParticipants": 10,
    "participants": [
      "mockUsers[135]",
      "mockUsers[109]",
      "mockUsers[9]",
      "mockUsers[183]",
      "mockUsers[41]",
      "mockUsers[69]",
      "mockUsers[50]",
      "mockUsers[157]",
      "mockUsers[43]",
      "mockUsers[165]"
    ],
    "approvedParticipants": [
      "mockUsers[135]",
      "mockUsers[109]",
      "mockUsers[9]",
      "mockUsers[183]",
      "mockUsers[41]",
      "mockUsers[69]",
      "mockUsers[50]",
      "mockUsers[157]",
      "mockUsers[43]",
      "mockUsers[165]"
    ],
    "pendingRequests": [],
    "description": "A fun and social football event open to all skill levels!",
    "price": 0
  },
  {
    "id": "1067",
    "title": "Yoga Space Yoga Session",
    "sportType": "SportType.Yoga",
    "hostId": "mockUsers[51].id",
    "host": mockUsers[51],
    "location": {
      "address": "Kichik Beshyogoch street, 56",
      "city": "Tashkent",
      "lat": 41.311,
      "lng": 69.27
    },
    "dateTime": "2025-08-02T19:00:00",
    "duration": 60,
    "maxParticipants": 10,
    "participants": [
      "mockUsers[51]",
      "mockUsers[73]",
      "mockUsers[61]",
      "mockUsers[183]",
      "mockUsers[74]",
      "mockUsers[119]",
      "mockUsers[177]",
      "mockUsers[49]",
      "mockUsers[20]",
      "mockUsers[185]"
    ],
    "approvedParticipants": [
      "mockUsers[51]",
      "mockUsers[73]",
      "mockUsers[61]",
      "mockUsers[183]",
      "mockUsers[74]",
      "mockUsers[119]",
      "mockUsers[177]",
      "mockUsers[49]",
      "mockUsers[20]",
      "mockUsers[185]"
    ],
    "pendingRequests": [],
    "description": "A fun and social yoga event open to all skill levels!",
    "price": 0
  },
  {
    "id": "1068",
    "title": "River Park Running Session",
    "sportType": "SportType.Running",
    "hostId": "mockUsers[160].id",
    "host": mockUsers[160],
    "location": {
      "address": "Tashkent",
      "city": "Tashkent",
      "lat": 41.33,
      "lng": 69.31
    },
    "dateTime": "2025-08-06T18:00:00",
    "duration": 120,
    "maxParticipants": 4,
    "participants": [
      "mockUsers[160]",
      "mockUsers[189]",
      "mockUsers[76]",
      "mockUsers[9]"
    ],
    "approvedParticipants": [
      "mockUsers[160]",
      "mockUsers[189]",
      "mockUsers[76]",
      "mockUsers[9]"
    ],
    "pendingRequests": [],
    "description": "A fun and social running event open to all skill levels!",
    "price": 0
  },
  {
    "id": "1069",
    "title": "Aqualand Swimming Session",
    "sportType": "SportType.Swimming",
    "hostId": "mockUsers[60].id",
    "host": mockUsers[60],
    "location": {
      "address": "Chinabad Street, 61A",
      "city": "Tashkent",
      "lat": 41.36,
      "lng": 69.29
    },
    "dateTime": "2025-07-25T18:00:00",
    "duration": 120,
    "maxParticipants": 9,
    "participants": [
      "mockUsers[60]",
      "mockUsers[26]",
      "mockUsers[40]",
      "mockUsers[85]",
      "mockUsers[165]",
      "mockUsers[47]",
      "mockUsers[149]",
      "mockUsers[17]",
      "mockUsers[130]"
    ],
    "approvedParticipants": [
      "mockUsers[60]",
      "mockUsers[26]",
      "mockUsers[40]",
      "mockUsers[85]",
      "mockUsers[165]",
      "mockUsers[47]",
      "mockUsers[149]",
      "mockUsers[17]",
      "mockUsers[130]"
    ],
    "pendingRequests": [],
    "description": "A fun and social swimming event open to all skill levels!",
    "price": 0
  },
  {
    "id": "1070",
    "title": "Chamanzar Field Football Session",
    "sportType": "SportType.Football",
    "hostId": "mockUsers[19].id",
    "host": mockUsers[19],
    "location": {
      "address": "Uchtepa District, Chamanzar Mahallah",
      "city": "Tashkent",
      "lat": 41.295,
      "lng": 69.211
    },
    "dateTime": "2025-08-25T18:00:00",
    "duration": 120,
    "maxParticipants": 4,
    "participants": [
      "mockUsers[19]",
      "mockUsers[175]",
      "mockUsers[25]",
      "mockUsers[57]"
    ],
    "approvedParticipants": [
      "mockUsers[19]",
      "mockUsers[175]",
      "mockUsers[25]",
      "mockUsers[57]"
    ],
    "pendingRequests": [],
    "description": "A fun and social football event open to all skill levels!",
    "price": 0
  },
  {
    "id": "1071",
    "title": "TTClub Tennis Session",
    "sportType": "SportType.Tennis",
    "hostId": "mockUsers[103].id",
    "host": mockUsers[103],
    "location": {
      "address": "Mahtumquli Street, 105\u0413",
      "city": "Tashkent",
      "lat": 41.35,
      "lng": 69.3
    },
    "dateTime": "2025-08-20T09:00:00",
    "duration": 120,
    "maxParticipants": 11,
    "participants": [
      "mockUsers[103]",
      "mockUsers[188]",
      "mockUsers[12]",
      "mockUsers[23]",
      "mockUsers[163]",
      "mockUsers[26]",
      "mockUsers[54]",
      "mockUsers[131]",
      "mockUsers[157]",
      "mockUsers[196]",
      "mockUsers[164]"
    ],
    "approvedParticipants": [
      "mockUsers[103]",
      "mockUsers[188]",
      "mockUsers[12]",
      "mockUsers[23]",
      "mockUsers[163]",
      "mockUsers[26]",
      "mockUsers[54]",
      "mockUsers[131]",
      "mockUsers[157]",
      "mockUsers[196]",
      "mockUsers[164]"
    ],
    "pendingRequests": [],
    "description": "A fun and social tennis event open to all skill levels!",
    "price": 0
  },
  {
    "id": "1072",
    "title": "Fitness First Gym Session",
    "sportType": "SportType.Gym",
    "hostId": "mockUsers[180].id",
    "host": mockUsers[180],
    "location": {
      "address": "Afrosiyob Street, 41",
      "city": "Tashkent",
      "lat": 41.31,
      "lng": 69.28
    },
    "dateTime": "2025-08-28T18:00:00",
    "duration": 60,
    "maxParticipants": 4,
    "participants": [
      "mockUsers[180]",
      "mockUsers[116]",
      "mockUsers[115]",
      "mockUsers[55]"
    ],
    "approvedParticipants": [
      "mockUsers[180]",
      "mockUsers[116]",
      "mockUsers[115]",
      "mockUsers[55]"
    ],
    "pendingRequests": [],
    "description": "A fun and social gym event open to all skill levels!",
    "price": 0
  },
  {
    "id": "1073",
    "title": "Yunusabad Stadium Football Session",
    "sportType": "SportType.Football",
    "hostId": "mockUsers[25].id",
    "host": mockUsers[25],
    "location": {
      "address": "Yunusabad District, 3-mavze",
      "city": "Tashkent",
      "lat": 41.364559,
      "lng": 69.294178
    },
    "dateTime": "2025-08-10T18:00:00",
    "duration": 90,
    "maxParticipants": 8,
    "participants": [
      "mockUsers[25]",
      "mockUsers[179]",
      "mockUsers[136]",
      "mockUsers[58]",
      "mockUsers[81]",
      "mockUsers[74]",
      "mockUsers[173]",
      "mockUsers[6]"
    ],
    "approvedParticipants": [
      "mockUsers[25]",
      "mockUsers[179]",
      "mockUsers[136]",
      "mockUsers[58]",
      "mockUsers[81]",
      "mockUsers[74]",
      "mockUsers[173]",
      "mockUsers[6]"
    ],
    "pendingRequests": [],
    "description": "A fun and social football event open to all skill levels!",
    "price": 0
  },
  {
    "id": "1074",
    "title": "Yoga Space Yoga Session",
    "sportType": "SportType.Yoga",
    "hostId": "mockUsers[182].id",
    "host": mockUsers[182],
    "location": {
      "address": "Kichik Beshyogoch street, 56",
      "city": "Tashkent",
      "lat": 41.311,
      "lng": 69.27
    },
    "dateTime": "2025-08-15T17:00:00",
    "duration": 120,
    "maxParticipants": 6,
    "participants": [
      "mockUsers[182]",
      "mockUsers[26]",
      "mockUsers[24]",
      "mockUsers[111]",
      "mockUsers[70]",
      "mockUsers[176]"
    ],
    "approvedParticipants": [
      "mockUsers[182]",
      "mockUsers[26]",
      "mockUsers[24]",
      "mockUsers[111]",
      "mockUsers[70]",
      "mockUsers[176]"
    ],
    "pendingRequests": [],
    "description": "A fun and social yoga event open to all skill levels!",
    "price": 0
  },
  {
    "id": "1075",
    "title": "Aqualand Swimming Session",
    "sportType": "SportType.Swimming",
    "hostId": "mockUsers[21].id",
    "host": mockUsers[21],
    "location": {
      "address": "Chinabad Street, 61A",
      "city": "Tashkent",
      "lat": 41.36,
      "lng": 69.29
    },
    "dateTime": "2025-08-29T19:00:00",
    "duration": 90,
    "maxParticipants": 8,
    "participants": [
      "mockUsers[21]",
      "mockUsers[3]",
      "mockUsers[186]",
      "mockUsers[6]",
      "mockUsers[46]",
      "mockUsers[195]",
      "mockUsers[160]",
      "mockUsers[100]"
    ],
    "approvedParticipants": [
      "mockUsers[21]",
      "mockUsers[3]",
      "mockUsers[186]",
      "mockUsers[6]",
      "mockUsers[46]",
      "mockUsers[195]",
      "mockUsers[160]",
      "mockUsers[100]"
    ],
    "pendingRequests": [],
    "description": "A fun and social swimming event open to all skill levels!",
    "price": 0
  },
  {
    "id": "1076",
    "title": "Yunusabad Stadium Football Session",
    "sportType": "SportType.Football",
    "hostId": "mockUsers[41].id",
    "host": mockUsers[41],
    "location": {
      "address": "Yunusabad District, 3-mavze",
      "city": "Tashkent",
      "lat": 41.364559,
      "lng": 69.294178
    },
    "dateTime": "2025-08-01T07:00:00",
    "duration": 60,
    "maxParticipants": 6,
    "participants": [
      "mockUsers[41]",
      "mockUsers[136]",
      "mockUsers[86]",
      "mockUsers[0]",
      "mockUsers[111]",
      "mockUsers[199]"
    ],
    "approvedParticipants": [
      "mockUsers[41]",
      "mockUsers[136]",
      "mockUsers[86]",
      "mockUsers[0]",
      "mockUsers[111]",
      "mockUsers[199]"
    ],
    "pendingRequests": [],
    "description": "A fun and social football event open to all skill levels!",
    "price": 0
  },
  {
    "id": "1077",
    "title": "Fitness First Gym Session",
    "sportType": "SportType.Gym",
    "hostId": "mockUsers[49].id",
    "host": mockUsers[49],
    "location": {
      "address": "Afrosiyob Street, 41",
      "city": "Tashkent",
      "lat": 41.31,
      "lng": 69.28
    },
    "dateTime": "2025-08-18T19:00:00",
    "duration": 120,
    "maxParticipants": 9,
    "participants": [
      "mockUsers[49]",
      "mockUsers[35]",
      "mockUsers[13]",
      "mockUsers[193]",
      "mockUsers[142]",
      "mockUsers[16]",
      "mockUsers[30]",
      "mockUsers[54]",
      "mockUsers[116]"
    ],
    "approvedParticipants": [
      "mockUsers[49]",
      "mockUsers[35]",
      "mockUsers[13]",
      "mockUsers[193]",
      "mockUsers[142]",
      "mockUsers[16]",
      "mockUsers[30]",
      "mockUsers[54]",
      "mockUsers[116]"
    ],
    "pendingRequests": [],
    "description": "A fun and social gym event open to all skill levels!",
    "price": 0
  },
  {
    "id": "1078",
    "title": "Yunusabad Stadium Football Session",
    "sportType": "SportType.Football",
    "hostId": "mockUsers[75].id",
    "host": mockUsers[75],
    "location": {
      "address": "Yunusabad District, 3-mavze",
      "city": "Tashkent",
      "lat": 41.364559,
      "lng": 69.294178
    },
    "dateTime": "2025-07-19T09:00:00",
    "duration": 60,
    "maxParticipants": 8,
    "participants": [
      "mockUsers[75]",
      "mockUsers[108]",
      "mockUsers[110]",
      "mockUsers[111]",
      "mockUsers[94]",
      "mockUsers[56]",
      "mockUsers[41]",
      "mockUsers[165]"
    ],
    "approvedParticipants": [
      "mockUsers[75]",
      "mockUsers[108]",
      "mockUsers[110]",
      "mockUsers[111]",
      "mockUsers[94]",
      "mockUsers[56]",
      "mockUsers[41]",
      "mockUsers[165]"
    ],
    "pendingRequests": [],
    "description": "A fun and social football event open to all skill levels!",
    "price": 0
  },
  {
    "id": "1079",
    "title": "Fitness First Gym Session",
    "sportType": "SportType.Gym",
    "hostId": "mockUsers[75].id",
    "host": mockUsers[75],
    "location": {
      "address": "Afrosiyob Street, 41",
      "city": "Tashkent",
      "lat": 41.31,
      "lng": 69.28
    },
    "dateTime": "2025-07-29T19:00:00",
    "duration": 90,
    "maxParticipants": 5,
    "participants": [
      "mockUsers[75]",
      "mockUsers[128]",
      "mockUsers[144]",
      "mockUsers[76]",
      "mockUsers[189]"
    ],
    "approvedParticipants": [
      "mockUsers[75]",
      "mockUsers[128]",
      "mockUsers[144]",
      "mockUsers[76]",
      "mockUsers[189]"
    ],
    "pendingRequests": [],
    "description": "A fun and social gym event open to all skill levels!",
    "price": 0
  },
  {
    "id": "1080",
    "title": "Yunusabad Stadium Football Session",
    "sportType": "SportType.Football",
    "hostId": "mockUsers[140].id",
    "host": mockUsers[140],
    "location": {
      "address": "Yunusabad District, 3-mavze",
      "city": "Tashkent",
      "lat": 41.364559,
      "lng": 69.294178
    },
    "dateTime": "2025-08-06T09:00:00",
    "duration": 60,
    "maxParticipants": 7,
    "participants": [
      "mockUsers[140]",
      "mockUsers[67]",
      "mockUsers[168]",
      "mockUsers[125]",
      "mockUsers[178]",
      "mockUsers[8]",
      "mockUsers[116]"
    ],
    "approvedParticipants": [
      "mockUsers[140]",
      "mockUsers[67]",
      "mockUsers[168]",
      "mockUsers[125]",
      "mockUsers[178]",
      "mockUsers[8]",
      "mockUsers[116]"
    ],
    "pendingRequests": [],
    "description": "A fun and social football event open to all skill levels!",
    "price": 0
  },
  {
    "id": "1081",
    "title": "Fitness First Gym Session",
    "sportType": "SportType.Gym",
    "hostId": "mockUsers[126].id",
    "host": mockUsers[126],
    "location": {
      "address": "Afrosiyob Street, 41",
      "city": "Tashkent",
      "lat": 41.31,
      "lng": 69.28
    },
    "dateTime": "2025-08-04T17:00:00",
    "duration": 120,
    "maxParticipants": 8,
    "participants": [
      "mockUsers[126]",
      "mockUsers[101]",
      "mockUsers[36]",
      "mockUsers[31]",
      "mockUsers[64]",
      "mockUsers[102]",
      "mockUsers[77]",
      "mockUsers[82]"
    ],
    "approvedParticipants": [
      "mockUsers[126]",
      "mockUsers[101]",
      "mockUsers[36]",
      "mockUsers[31]",
      "mockUsers[64]",
      "mockUsers[102]",
      "mockUsers[77]",
      "mockUsers[82]"
    ],
    "pendingRequests": [],
    "description": "A fun and social gym event open to all skill levels!",
    "price": 0
  },
  {
    "id": "1082",
    "title": "Anhor Park Rink Other Session",
    "sportType": "SportType.Other",
    "hostId": "mockUsers[164].id",
    "host": mockUsers[164],
    "location": {
      "address": "Labzak Street, Shaykhantaur",
      "city": "Tashkent",
      "lat": 41.31,
      "lng": 69.24
    },
    "dateTime": "2025-08-14T18:00:00",
    "duration": 60,
    "maxParticipants": 4,
    "participants": [
      "mockUsers[164]",
      "mockUsers[21]",
      "mockUsers[47]",
      "mockUsers[168]"
    ],
    "approvedParticipants": [
      "mockUsers[164]",
      "mockUsers[21]",
      "mockUsers[47]",
      "mockUsers[168]"
    ],
    "pendingRequests": [],
    "description": "A fun and social other event open to all skill levels!",
    "price": 0
  },
  {
    "id": "1083",
    "title": "Yoga Space Yoga Session",
    "sportType": "SportType.Yoga",
    "hostId": "mockUsers[60].id",
    "host": mockUsers[60],
    "location": {
      "address": "Kichik Beshyogoch street, 56",
      "city": "Tashkent",
      "lat": 41.311,
      "lng": 69.27
    },
    "dateTime": "2025-07-15T09:00:00",
    "duration": 120,
    "maxParticipants": 6,
    "participants": [
      "mockUsers[60]",
      "mockUsers[156]",
      "mockUsers[74]",
      "mockUsers[177]",
      "mockUsers[145]",
      "mockUsers[138]"
    ],
    "approvedParticipants": [
      "mockUsers[60]",
      "mockUsers[156]",
      "mockUsers[74]",
      "mockUsers[177]",
      "mockUsers[145]",
      "mockUsers[138]"
    ],
    "pendingRequests": [],
    "description": "A fun and social yoga event open to all skill levels!",
    "price": 0
  },
  {
    "id": "1084",
    "title": "Aqualand Swimming Session",
    "sportType": "SportType.Swimming",
    "hostId": "mockUsers[91].id",
    "host": mockUsers[91],
    "location": {
      "address": "Chinabad Street, 61A",
      "city": "Tashkent",
      "lat": 41.36,
      "lng": 69.29
    },
    "dateTime": "2025-07-17T07:00:00",
    "duration": 60,
    "maxParticipants": 10,
    "participants": [
      "mockUsers[91]",
      "mockUsers[107]",
      "mockUsers[41]",
      "mockUsers[74]",
      "mockUsers[114]",
      "mockUsers[105]",
      "mockUsers[69]",
      "mockUsers[49]",
      "mockUsers[173]",
      "mockUsers[113]"
    ],
    "approvedParticipants": [
      "mockUsers[91]",
      "mockUsers[107]",
      "mockUsers[41]",
      "mockUsers[74]",
      "mockUsers[114]",
      "mockUsers[105]",
      "mockUsers[69]",
      "mockUsers[49]",
      "mockUsers[173]",
      "mockUsers[113]"
    ],
    "pendingRequests": [],
    "description": "A fun and social swimming event open to all skill levels!",
    "price": 0
  },
  {
    "id": "1085",
    "title": "River Park Running Session",
    "sportType": "SportType.Running",
    "hostId": "mockUsers[61].id",
    "host": mockUsers[61],
    "location": {
      "address": "Tashkent",
      "city": "Tashkent",
      "lat": 41.33,
      "lng": 69.31
    },
    "dateTime": "2025-07-22T19:00:00",
    "duration": 120,
    "maxParticipants": 5,
    "participants": [
      "mockUsers[61]",
      "mockUsers[73]",
      "mockUsers[48]",
      "mockUsers[150]",
      "mockUsers[16]"
    ],
    "approvedParticipants": [
      "mockUsers[61]",
      "mockUsers[73]",
      "mockUsers[48]",
      "mockUsers[150]",
      "mockUsers[16]"
    ],
    "pendingRequests": [],
    "description": "A fun and social running event open to all skill levels!",
    "price": 0
  },
  {
    "id": "1086",
    "title": "TTClub Tennis Session",
    "sportType": "SportType.Tennis",
    "hostId": "mockUsers[142].id",
    "host": mockUsers[142],
    "location": {
      "address": "Mahtumquli Street, 105\u0413",
      "city": "Tashkent",
      "lat": 41.35,
      "lng": 69.3
    },
    "dateTime": "2025-07-26T09:00:00",
    "duration": 60,
    "maxParticipants": 11,
    "participants": [
      "mockUsers[142]",
      "mockUsers[81]",
      "mockUsers[176]",
      "mockUsers[63]",
      "mockUsers[159]",
      "mockUsers[53]",
      "mockUsers[91]",
      "mockUsers[122]",
      "mockUsers[84]",
      "mockUsers[167]",
      "mockUsers[90]"
    ],
    "approvedParticipants": [
      "mockUsers[142]",
      "mockUsers[81]",
      "mockUsers[176]",
      "mockUsers[63]",
      "mockUsers[159]",
      "mockUsers[53]",
      "mockUsers[91]",
      "mockUsers[122]",
      "mockUsers[84]",
      "mockUsers[167]",
      "mockUsers[90]"
    ],
    "pendingRequests": [],
    "description": "A fun and social tennis event open to all skill levels!",
    "price": 0
  },
  {
    "id": "1087",
    "title": "Aqualand Swimming Session",
    "sportType": "SportType.Swimming",
    "hostId": "mockUsers[132].id",
    "host": mockUsers[132],
    "location": {
      "address": "Chinabad Street, 61A",
      "city": "Tashkent",
      "lat": 41.36,
      "lng": 69.29
    },
    "dateTime": "2025-08-04T07:00:00",
    "duration": 90,
    "maxParticipants": 9,
    "participants": [
      "mockUsers[132]",
      "mockUsers[103]",
      "mockUsers[9]",
      "mockUsers[114]",
      "mockUsers[123]",
      "mockUsers[62]",
      "mockUsers[91]",
      "mockUsers[122]",
      "mockUsers[142]"
    ],
    "approvedParticipants": [
      "mockUsers[132]",
      "mockUsers[103]",
      "mockUsers[9]",
      "mockUsers[114]",
      "mockUsers[123]",
      "mockUsers[62]",
      "mockUsers[91]",
      "mockUsers[122]",
      "mockUsers[142]"
    ],
    "pendingRequests": [],
    "description": "A fun and social swimming event open to all skill levels!",
    "price": 0
  },
  {
    "id": "1088",
    "title": "Yunusabad Stadium Football Session",
    "sportType": "SportType.Football",
    "hostId": "mockUsers[127].id",
    "host": mockUsers[127],
    "location": {
      "address": "Yunusabad District, 3-mavze",
      "city": "Tashkent",
      "lat": 41.364559,
      "lng": 69.294178
    },
    "dateTime": "2025-08-07T09:00:00",
    "duration": 90,
    "maxParticipants": 10,
    "participants": [
      "mockUsers[127]",
      "mockUsers[78]",
      "mockUsers[184]",
      "mockUsers[174]",
      "mockUsers[108]",
      "mockUsers[0]",
      "mockUsers[163]",
      "mockUsers[140]",
      "mockUsers[3]",
      "mockUsers[28]"
    ],
    "approvedParticipants": [
      "mockUsers[127]",
      "mockUsers[78]",
      "mockUsers[184]",
      "mockUsers[174]",
      "mockUsers[108]",
      "mockUsers[0]",
      "mockUsers[163]",
      "mockUsers[140]",
      "mockUsers[3]",
      "mockUsers[28]"
    ],
    "pendingRequests": [],
    "description": "A fun and social football event open to all skill levels!",
    "price": 0
  },
  {
    "id": "1089",
    "title": "Yunusabad Stadium Football Session",
    "sportType": "SportType.Football",
    "hostId": "mockUsers[87].id",
    "host": mockUsers[87],
    "location": {
      "address": "Yunusabad District, 3-mavze",
      "city": "Tashkent",
      "lat": 41.364559,
      "lng": 69.294178
    },
    "dateTime": "2025-07-15T19:00:00",
    "duration": 120,
    "maxParticipants": 11,
    "participants": [
      "mockUsers[87]",
      "mockUsers[167]",
      "mockUsers[39]",
      "mockUsers[177]",
      "mockUsers[134]",
      "mockUsers[194]",
      "mockUsers[60]",
      "mockUsers[11]",
      "mockUsers[33]",
      "mockUsers[46]",
      "mockUsers[191]"
    ],
    "approvedParticipants": [
      "mockUsers[87]",
      "mockUsers[167]",
      "mockUsers[39]",
      "mockUsers[177]",
      "mockUsers[134]",
      "mockUsers[194]",
      "mockUsers[60]",
      "mockUsers[11]",
      "mockUsers[33]",
      "mockUsers[46]",
      "mockUsers[191]"
    ],
    "pendingRequests": [],
    "description": "A fun and social football event open to all skill levels!",
    "price": 0
  },
  {
    "id": "1090",
    "title": "Fitness First Gym Session",
    "sportType": "SportType.Gym",
    "hostId": "mockUsers[26].id",
    "host": mockUsers[26],
    "location": {
      "address": "Afrosiyob Street, 41",
      "city": "Tashkent",
      "lat": 41.31,
      "lng": 69.28
    },
    "dateTime": "2025-08-24T07:00:00",
    "duration": 90,
    "maxParticipants": 7,
    "participants": [
      "mockUsers[26]",
      "mockUsers[87]",
      "mockUsers[157]",
      "mockUsers[94]",
      "mockUsers[153]",
      "mockUsers[148]",
      "mockUsers[112]"
    ],
    "approvedParticipants": [
      "mockUsers[26]",
      "mockUsers[87]",
      "mockUsers[157]",
      "mockUsers[94]",
      "mockUsers[153]",
      "mockUsers[148]",
      "mockUsers[112]"
    ],
    "pendingRequests": [],
    "description": "A fun and social gym event open to all skill levels!",
    "price": 0
  },
  {
    "id": "1091",
    "title": "Chamanzar Field Football Session",
    "sportType": "SportType.Football",
    "hostId": "mockUsers[193].id",
    "host": mockUsers[193],
    "location": {
      "address": "Uchtepa District, Chamanzar Mahallah",
      "city": "Tashkent",
      "lat": 41.295,
      "lng": 69.211
    },
    "dateTime": "2025-07-16T09:00:00",
    "duration": 120,
    "maxParticipants": 8,
    "participants": [
      "mockUsers[193]",
      "mockUsers[194]",
      "mockUsers[156]",
      "mockUsers[104]",
      "mockUsers[39]",
      "mockUsers[84]",
      "mockUsers[142]",
      "mockUsers[157]"
    ],
    "approvedParticipants": [
      "mockUsers[193]",
      "mockUsers[194]",
      "mockUsers[156]",
      "mockUsers[104]",
      "mockUsers[39]",
      "mockUsers[84]",
      "mockUsers[142]",
      "mockUsers[157]"
    ],
    "pendingRequests": [],
    "description": "A fun and social football event open to all skill levels!",
    "price": 0
  },
  {
    "id": "1092",
    "title": "Anhor Park Rink Other Session",
    "sportType": "SportType.Other",
    "hostId": "mockUsers[47].id",
    "host": mockUsers[47],
    "location": {
      "address": "Labzak Street, Shaykhantaur",
      "city": "Tashkent",
      "lat": 41.31,
      "lng": 69.24
    },
    "dateTime": "2025-08-30T19:00:00",
    "duration": 90,
    "maxParticipants": 6,
    "participants": [
      "mockUsers[47]",
      "mockUsers[64]",
      "mockUsers[16]",
      "mockUsers[62]",
      "mockUsers[171]",
      "mockUsers[57]"
    ],
    "approvedParticipants": [
      "mockUsers[47]",
      "mockUsers[64]",
      "mockUsers[16]",
      "mockUsers[62]",
      "mockUsers[171]",
      "mockUsers[57]"
    ],
    "pendingRequests": [],
    "description": "A fun and social other event open to all skill levels!",
    "price": 0
  },
  {
    "id": "1093",
    "title": "Chamanzar Field Football Session",
    "sportType": "SportType.Football",
    "hostId": "mockUsers[103].id",
    "host": mockUsers[103],
    "location": {
      "address": "Uchtepa District, Chamanzar Mahallah",
      "city": "Tashkent",
      "lat": 41.295,
      "lng": 69.211
    },
    "dateTime": "2025-08-04T17:00:00",
    "duration": 120,
    "maxParticipants": 6,
    "participants": [
      "mockUsers[103]",
      "mockUsers[26]",
      "mockUsers[10]",
      "mockUsers[152]",
      "mockUsers[13]",
      "mockUsers[15]"
    ],
    "approvedParticipants": [
      "mockUsers[103]",
      "mockUsers[26]",
      "mockUsers[10]",
      "mockUsers[152]",
      "mockUsers[13]",
      "mockUsers[15]"
    ],
    "pendingRequests": [],
    "description": "A fun and social football event open to all skill levels!",
    "price": 0
  },
  {
    "id": "1094",
    "title": "Yoga Space Yoga Session",
    "sportType": "SportType.Yoga",
    "hostId": "mockUsers[196].id",
    "host": mockUsers[196],
    "location": {
      "address": "Kichik Beshyogoch street, 56",
      "city": "Tashkent",
      "lat": 41.311,
      "lng": 69.27
    },
    "dateTime": "2025-08-10T19:00:00",
    "duration": 90,
    "maxParticipants": 10,
    "participants": [
      "mockUsers[196]",
      "mockUsers[98]",
      "mockUsers[9]",
      "mockUsers[158]",
      "mockUsers[52]",
      "mockUsers[175]",
      "mockUsers[30]",
      "mockUsers[70]",
      "mockUsers[143]",
      "mockUsers[160]"
    ],
    "approvedParticipants": [
      "mockUsers[196]",
      "mockUsers[98]",
      "mockUsers[9]",
      "mockUsers[158]",
      "mockUsers[52]",
      "mockUsers[175]",
      "mockUsers[30]",
      "mockUsers[70]",
      "mockUsers[143]",
      "mockUsers[160]"
    ],
    "pendingRequests": [],
    "description": "A fun and social yoga event open to all skill levels!",
    "price": 0
  },
  {
    "id": "1095",
    "title": "Tennis Court Tennis Session",
    "sportType": "SportType.Tennis",
    "hostId": "mockUsers[151].id",
    "host": mockUsers[151],
    "location": {
      "address": "Oqqurghon Street, 16",
      "city": "Tashkent",
      "lat": 41.32,
      "lng": 69.285
    },
    "dateTime": "2025-07-29T19:00:00",
    "duration": 120,
    "maxParticipants": 7,
    "participants": [
      "mockUsers[151]",
      "mockUsers[169]",
      "mockUsers[149]",
      "mockUsers[166]",
      "mockUsers[99]",
      "mockUsers[29]",
      "mockUsers[0]"
    ],
    "approvedParticipants": [
      "mockUsers[151]",
      "mockUsers[169]",
      "mockUsers[149]",
      "mockUsers[166]",
      "mockUsers[99]",
      "mockUsers[29]",
      "mockUsers[0]"
    ],
    "pendingRequests": [],
    "description": "A fun and social tennis event open to all skill levels!",
    "price": 0
  },
  {
    "id": "1096",
    "title": "Yunusabad Stadium Football Session",
    "sportType": "SportType.Football",
    "hostId": "mockUsers[117].id",
    "host": mockUsers[117],
    "location": {
      "address": "Yunusabad District, 3-mavze",
      "city": "Tashkent",
      "lat": 41.364559,
      "lng": 69.294178
    },
    "dateTime": "2025-07-27T07:00:00",
    "duration": 90,
    "maxParticipants": 6,
    "participants": [
      "mockUsers[117]",
      "mockUsers[66]",
      "mockUsers[48]",
      "mockUsers[71]",
      "mockUsers[2]",
      "mockUsers[126]"
    ],
    "approvedParticipants": [
      "mockUsers[117]",
      "mockUsers[66]",
      "mockUsers[48]",
      "mockUsers[71]",
      "mockUsers[2]",
      "mockUsers[126]"
    ],
    "pendingRequests": [],
    "description": "A fun and social football event open to all skill levels!",
    "price": 0
  },
  {
    "id": "1097",
    "title": "Fitness First Gym Session",
    "sportType": "SportType.Gym",
    "hostId": "mockUsers[26].id",
    "host": mockUsers[26],
    "location": {
      "address": "Afrosiyob Street, 41",
      "city": "Tashkent",
      "lat": 41.31,
      "lng": 69.28
    },
    "dateTime": "2025-08-18T17:00:00",
    "duration": 90,
    "maxParticipants": 8,
    "participants": [
      "mockUsers[26]",
      "mockUsers[197]",
      "mockUsers[28]",
      "mockUsers[52]",
      "mockUsers[136]",
      "mockUsers[98]",
      "mockUsers[105]",
      "mockUsers[156]"
    ],
    "approvedParticipants": [
      "mockUsers[26]",
      "mockUsers[197]",
      "mockUsers[28]",
      "mockUsers[52]",
      "mockUsers[136]",
      "mockUsers[98]",
      "mockUsers[105]",
      "mockUsers[156]"
    ],
    "pendingRequests": [],
    "description": "A fun and social gym event open to all skill levels!",
    "price": 0
  },
  {
    "id": "1098",
    "title": "Fitness First Gym Session",
    "sportType": "SportType.Gym",
    "hostId": "mockUsers[28].id",
    "host": mockUsers[28],
    "location": {
      "address": "Afrosiyob Street, 41",
      "city": "Tashkent",
      "lat": 41.31,
      "lng": 69.28
    },
    "dateTime": "2025-08-09T17:00:00",
    "duration": 120,
    "maxParticipants": 6,
    "participants": [
      "mockUsers[28]",
      "mockUsers[148]",
      "mockUsers[56]",
      "mockUsers[194]",
      "mockUsers[59]",
      "mockUsers[120]"
    ],
    "approvedParticipants": [
      "mockUsers[28]",
      "mockUsers[148]",
      "mockUsers[56]",
      "mockUsers[194]",
      "mockUsers[59]",
      "mockUsers[120]"
    ],
    "pendingRequests": [],
    "description": "A fun and social gym event open to all skill levels!",
    "price": 0
  },
  {
    "id": "1099",
    "title": "TTClub Tennis Session",
    "sportType": "SportType.Tennis",
    "hostId": "mockUsers[179].id",
    "host": mockUsers[179],
    "location": {
      "address": "Mahtumquli Street, 105\u0413",
      "city": "Tashkent",
      "lat": 41.35,
      "lng": 69.3
    },
    "dateTime": "2025-07-22T19:00:00",
    "duration": 90,
    "maxParticipants": 7,
    "participants": [
      "mockUsers[179]",
      "mockUsers[151]",
      "mockUsers[111]",
      "mockUsers[79]",
      "mockUsers[75]",
      "mockUsers[91]",
      "mockUsers[47]"
    ],
    "approvedParticipants": [
      "mockUsers[179]",
      "mockUsers[151]",
      "mockUsers[111]",
      "mockUsers[79]",
      "mockUsers[75]",
      "mockUsers[91]",
      "mockUsers[47]"
    ],
    "pendingRequests": [],
    "description": "A fun and social tennis event open to all skill levels!",
    "price": 0
  },
  {
    "id": "1100",
    "title": "Yoga Space Yoga Session",
    "sportType": "SportType.Yoga",
    "hostId": "mockUsers[186].id",
    "host": mockUsers[186],
    "location": {
      "address": "Kichik Beshyogoch street, 56",
      "city": "Tashkent",
      "lat": 41.311,
      "lng": 69.27
    },
    "dateTime": "2025-08-02T09:00:00",
    "duration": 120,
    "maxParticipants": 5,
    "participants": [
      "mockUsers[186]",
      "mockUsers[153]",
      "mockUsers[187]",
      "mockUsers[43]",
      "mockUsers[77]"
    ],
    "approvedParticipants": [
      "mockUsers[186]",
      "mockUsers[153]",
      "mockUsers[187]",
      "mockUsers[43]",
      "mockUsers[77]"
    ],
    "pendingRequests": [],
    "description": "A fun and social yoga event open to all skill levels!",
    "price": 0
  },
  {
    "id": "1101",
    "title": "Anhor Park Rink Other Session",
    "sportType": "SportType.Other",
    "hostId": "mockUsers[107].id",
    "host": mockUsers[107],
    "location": {
      "address": "Labzak Street, Shaykhantaur",
      "city": "Tashkent",
      "lat": 41.31,
      "lng": 69.24
    },
    "dateTime": "2025-08-22T17:00:00",
    "duration": 60,
    "maxParticipants": 9,
    "participants": [
      "mockUsers[107]",
      "mockUsers[192]",
      "mockUsers[61]",
      "mockUsers[48]",
      "mockUsers[62]",
      "mockUsers[106]",
      "mockUsers[126]",
      "mockUsers[80]",
      "mockUsers[63]"
    ],
    "approvedParticipants": [
      "mockUsers[107]",
      "mockUsers[192]",
      "mockUsers[61]",
      "mockUsers[48]",
      "mockUsers[62]",
      "mockUsers[106]",
      "mockUsers[126]",
      "mockUsers[80]",
      "mockUsers[63]"
    ],
    "pendingRequests": [],
    "description": "A fun and social other event open to all skill levels!",
    "price": 0
  },
  {
    "id": "1102",
    "title": "Chamanzar Field Football Session",
    "sportType": "SportType.Football",
    "hostId": "mockUsers[69].id",
    "host": mockUsers[69],
    "location": {
      "address": "Uchtepa District, Chamanzar Mahallah",
      "city": "Tashkent",
      "lat": 41.295,
      "lng": 69.211
    },
    "dateTime": "2025-08-03T19:00:00",
    "duration": 120,
    "maxParticipants": 5,
    "participants": [
      "mockUsers[69]",
      "mockUsers[24]",
      "mockUsers[183]",
      "mockUsers[107]",
      "mockUsers[34]"
    ],
    "approvedParticipants": [
      "mockUsers[69]",
      "mockUsers[24]",
      "mockUsers[183]",
      "mockUsers[107]",
      "mockUsers[34]"
    ],
    "pendingRequests": [],
    "description": "A fun and social football event open to all skill levels!",
    "price": 0
  },
  {
    "id": "1103",
    "title": "Yoga Space Yoga Session",
    "sportType": "SportType.Yoga",
    "hostId": "mockUsers[16].id",
    "host": mockUsers[16],
    "location": {
      "address": "Kichik Beshyogoch street, 56",
      "city": "Tashkent",
      "lat": 41.311,
      "lng": 69.27
    },
    "dateTime": "2025-07-21T18:00:00",
    "duration": 120,
    "maxParticipants": 11,
    "participants": [
      "mockUsers[16]",
      "mockUsers[139]",
      "mockUsers[83]",
      "mockUsers[50]",
      "mockUsers[132]",
      "mockUsers[152]",
      "mockUsers[26]",
      "mockUsers[6]",
      "mockUsers[168]",
      "mockUsers[62]",
      "mockUsers[12]"
    ],
    "approvedParticipants": [
      "mockUsers[16]",
      "mockUsers[139]",
      "mockUsers[83]",
      "mockUsers[50]",
      "mockUsers[132]",
      "mockUsers[152]",
      "mockUsers[26]",
      "mockUsers[6]",
      "mockUsers[168]",
      "mockUsers[62]",
      "mockUsers[12]"
    ],
    "pendingRequests": [],
    "description": "A fun and social yoga event open to all skill levels!",
    "price": 0
  },
  {
    "id": "1104",
    "title": "Tennis Court Tennis Session",
    "sportType": "SportType.Tennis",
    "hostId": "mockUsers[191].id",
    "host": mockUsers[191],
    "location": {
      "address": "Oqqurghon Street, 16",
      "city": "Tashkent",
      "lat": 41.32,
      "lng": 69.285
    },
    "dateTime": "2025-08-12T18:00:00",
    "duration": 120,
    "maxParticipants": 7,
    "participants": [
      "mockUsers[191]",
      "mockUsers[18]",
      "mockUsers[47]",
      "mockUsers[84]",
      "mockUsers[67]",
      "mockUsers[29]",
      "mockUsers[145]"
    ],
    "approvedParticipants": [
      "mockUsers[191]",
      "mockUsers[18]",
      "mockUsers[47]",
      "mockUsers[84]",
      "mockUsers[67]",
      "mockUsers[29]",
      "mockUsers[145]"
    ],
    "pendingRequests": [],
    "description": "A fun and social tennis event open to all skill levels!",
    "price": 0
  },
  {
    "id": "1105",
    "title": "Aqualand Swimming Session",
    "sportType": "SportType.Swimming",
    "hostId": "mockUsers[197].id",
    "host": mockUsers[197],
    "location": {
      "address": "Chinabad Street, 61A",
      "city": "Tashkent",
      "lat": 41.36,
      "lng": 69.29
    },
    "dateTime": "2025-08-21T18:00:00",
    "duration": 120,
    "maxParticipants": 8,
    "participants": [
      "mockUsers[197]",
      "mockUsers[1]",
      "mockUsers[18]",
      "mockUsers[198]",
      "mockUsers[62]",
      "mockUsers[110]",
      "mockUsers[28]",
      "mockUsers[97]"
    ],
    "approvedParticipants": [
      "mockUsers[197]",
      "mockUsers[1]",
      "mockUsers[18]",
      "mockUsers[198]",
      "mockUsers[62]",
      "mockUsers[110]",
      "mockUsers[28]",
      "mockUsers[97]"
    ],
    "pendingRequests": [],
    "description": "A fun and social swimming event open to all skill levels!",
    "price": 0
  },
  {
    "id": "1106",
    "title": "Fitness First Gym Session",
    "sportType": "SportType.Gym",
    "hostId": "mockUsers[72].id",
    "host": mockUsers[72],
    "location": {
      "address": "Afrosiyob Street, 41",
      "city": "Tashkent",
      "lat": 41.31,
      "lng": 69.28
    },
    "dateTime": "2025-07-29T19:00:00",
    "duration": 60,
    "maxParticipants": 9,
    "participants": [
      "mockUsers[72]",
      "mockUsers[191]",
      "mockUsers[17]",
      "mockUsers[158]",
      "mockUsers[96]",
      "mockUsers[59]",
      "mockUsers[121]",
      "mockUsers[52]",
      "mockUsers[64]"
    ],
    "approvedParticipants": [
      "mockUsers[72]",
      "mockUsers[191]",
      "mockUsers[17]",
      "mockUsers[158]",
      "mockUsers[96]",
      "mockUsers[59]",
      "mockUsers[121]",
      "mockUsers[52]",
      "mockUsers[64]"
    ],
    "pendingRequests": [],
    "description": "A fun and social gym event open to all skill levels!",
    "price": 0
  },
  {
    "id": "1107",
    "title": "Fitness First Gym Session",
    "sportType": "SportType.Gym",
    "hostId": "mockUsers[97].id",
    "host": mockUsers[97],
    "location": {
      "address": "Afrosiyob Street, 41",
      "city": "Tashkent",
      "lat": 41.31,
      "lng": 69.28
    },
    "dateTime": "2025-08-07T19:00:00",
    "duration": 120,
    "maxParticipants": 5,
    "participants": [
      "mockUsers[97]",
      "mockUsers[0]",
      "mockUsers[115]",
      "mockUsers[167]",
      "mockUsers[108]"
    ],
    "approvedParticipants": [
      "mockUsers[97]",
      "mockUsers[0]",
      "mockUsers[115]",
      "mockUsers[167]",
      "mockUsers[108]"
    ],
    "pendingRequests": [],
    "description": "A fun and social gym event open to all skill levels!",
    "price": 0
  },
  {
    "id": "1108",
    "title": "Fitness First Gym Session",
    "sportType": "SportType.Gym",
    "hostId": "mockUsers[101].id",
    "host": mockUsers[101],
    "location": {
      "address": "Afrosiyob Street, 41",
      "city": "Tashkent",
      "lat": 41.31,
      "lng": 69.28
    },
    "dateTime": "2025-08-21T07:00:00",
    "duration": 60,
    "maxParticipants": 8,
    "participants": [
      "mockUsers[101]",
      "mockUsers[102]",
      "mockUsers[69]",
      "mockUsers[4]",
      "mockUsers[148]",
      "mockUsers[89]",
      "mockUsers[111]",
      "mockUsers[88]"
    ],
    "approvedParticipants": [
      "mockUsers[101]",
      "mockUsers[102]",
      "mockUsers[69]",
      "mockUsers[4]",
      "mockUsers[148]",
      "mockUsers[89]",
      "mockUsers[111]",
      "mockUsers[88]"
    ],
    "pendingRequests": [],
    "description": "A fun and social gym event open to all skill levels!",
    "price": 0
  },
  {
    "id": "1109",
    "title": "Yoga Space Yoga Session",
    "sportType": "SportType.Yoga",
    "hostId": "mockUsers[17].id",
    "host": mockUsers[17],
    "location": {
      "address": "Kichik Beshyogoch street, 56",
      "city": "Tashkent",
      "lat": 41.311,
      "lng": 69.27
    },
    "dateTime": "2025-08-28T09:00:00",
    "duration": 90,
    "maxParticipants": 8,
    "participants": [
      "mockUsers[17]",
      "mockUsers[157]",
      "mockUsers[118]",
      "mockUsers[59]",
      "mockUsers[161]",
      "mockUsers[126]",
      "mockUsers[52]",
      "mockUsers[120]"
    ],
    "approvedParticipants": [
      "mockUsers[17]",
      "mockUsers[157]",
      "mockUsers[118]",
      "mockUsers[59]",
      "mockUsers[161]",
      "mockUsers[126]",
      "mockUsers[52]",
      "mockUsers[120]"
    ],
    "pendingRequests": [],
    "description": "A fun and social yoga event open to all skill levels!",
    "price": 0
  },
  {
    "id": "1110",
    "title": "Yoga Space Yoga Session",
    "sportType": "SportType.Yoga",
    "hostId": "mockUsers[162].id",
    "host": mockUsers[162],
    "location": {
      "address": "Kichik Beshyogoch street, 56",
      "city": "Tashkent",
      "lat": 41.311,
      "lng": 69.27
    },
    "dateTime": "2025-07-15T09:00:00",
    "duration": 120,
    "maxParticipants": 9,
    "participants": [
      "mockUsers[162]",
      "mockUsers[49]",
      "mockUsers[194]",
      "mockUsers[142]",
      "mockUsers[160]",
      "mockUsers[0]",
      "mockUsers[36]",
      "mockUsers[181]",
      "mockUsers[27]"
    ],
    "approvedParticipants": [
      "mockUsers[162]",
      "mockUsers[49]",
      "mockUsers[194]",
      "mockUsers[142]",
      "mockUsers[160]",
      "mockUsers[0]",
      "mockUsers[36]",
      "mockUsers[181]",
      "mockUsers[27]"
    ],
    "pendingRequests": [],
    "description": "A fun and social yoga event open to all skill levels!",
    "price": 0
  },
  {
    "id": "1111",
    "title": "River Park Running Session",
    "sportType": "SportType.Running",
    "hostId": "mockUsers[26].id",
    "host": mockUsers[26],
    "location": {
      "address": "Tashkent",
      "city": "Tashkent",
      "lat": 41.33,
      "lng": 69.31
    },
    "dateTime": "2025-08-13T07:00:00",
    "duration": 90,
    "maxParticipants": 11,
    "participants": [
      "mockUsers[26]",
      "mockUsers[126]",
      "mockUsers[106]",
      "mockUsers[170]",
      "mockUsers[184]",
      "mockUsers[17]",
      "mockUsers[151]",
      "mockUsers[145]",
      "mockUsers[138]",
      "mockUsers[123]",
      "mockUsers[6]"
    ],
    "approvedParticipants": [
      "mockUsers[26]",
      "mockUsers[126]",
      "mockUsers[106]",
      "mockUsers[170]",
      "mockUsers[184]",
      "mockUsers[17]",
      "mockUsers[151]",
      "mockUsers[145]",
      "mockUsers[138]",
      "mockUsers[123]",
      "mockUsers[6]"
    ],
    "pendingRequests": [],
    "description": "A fun and social running event open to all skill levels!",
    "price": 0
  },
  {
    "id": "1112",
    "title": "TTClub Tennis Session",
    "sportType": "SportType.Tennis",
    "hostId": "mockUsers[141].id",
    "host": mockUsers[141],
    "location": {
      "address": "Mahtumquli Street, 105\u0413",
      "city": "Tashkent",
      "lat": 41.35,
      "lng": 69.3
    },
    "dateTime": "2025-07-21T18:00:00",
    "duration": 90,
    "maxParticipants": 7,
    "participants": [
      "mockUsers[141]",
      "mockUsers[170]",
      "mockUsers[133]",
      "mockUsers[46]",
      "mockUsers[91]",
      "mockUsers[182]",
      "mockUsers[164]"
    ],
    "approvedParticipants": [
      "mockUsers[141]",
      "mockUsers[170]",
      "mockUsers[133]",
      "mockUsers[46]",
      "mockUsers[91]",
      "mockUsers[182]",
      "mockUsers[164]"
    ],
    "pendingRequests": [],
    "description": "A fun and social tennis event open to all skill levels!",
    "price": 0
  },
  {
    "id": "1113",
    "title": "Fitness First Gym Session",
    "sportType": "SportType.Gym",
    "hostId": "mockUsers[33].id",
    "host": mockUsers[33],
    "location": {
      "address": "Afrosiyob Street, 41",
      "city": "Tashkent",
      "lat": 41.31,
      "lng": 69.28
    },
    "dateTime": "2025-08-10T09:00:00",
    "duration": 90,
    "maxParticipants": 6,
    "participants": [
      "mockUsers[33]",
      "mockUsers[120]",
      "mockUsers[194]",
      "mockUsers[178]",
      "mockUsers[82]",
      "mockUsers[47]"
    ],
    "approvedParticipants": [
      "mockUsers[33]",
      "mockUsers[120]",
      "mockUsers[194]",
      "mockUsers[178]",
      "mockUsers[82]",
      "mockUsers[47]"
    ],
    "pendingRequests": [],
    "description": "A fun and social gym event open to all skill levels!",
    "price": 0
  },
  {
    "id": "1114",
    "title": "Aqualand Swimming Session",
    "sportType": "SportType.Swimming",
    "hostId": "mockUsers[140].id",
    "host": mockUsers[140],
    "location": {
      "address": "Chinabad Street, 61A",
      "city": "Tashkent",
      "lat": 41.36,
      "lng": 69.29
    },
    "dateTime": "2025-07-29T09:00:00",
    "duration": 90,
    "maxParticipants": 9,
    "participants": [
      "mockUsers[140]",
      "mockUsers[114]",
      "mockUsers[88]",
      "mockUsers[172]",
      "mockUsers[194]",
      "mockUsers[87]",
      "mockUsers[184]",
      "mockUsers[18]",
      "mockUsers[166]"
    ],
    "approvedParticipants": [
      "mockUsers[140]",
      "mockUsers[114]",
      "mockUsers[88]",
      "mockUsers[172]",
      "mockUsers[194]",
      "mockUsers[87]",
      "mockUsers[184]",
      "mockUsers[18]",
      "mockUsers[166]"
    ],
    "pendingRequests": [],
    "description": "A fun and social swimming event open to all skill levels!",
    "price": 0
  },
  {
    "id": "1115",
    "title": "Anhor Park Rink Other Session",
    "sportType": "SportType.Other",
    "hostId": "mockUsers[113].id",
    "host": mockUsers[113],
    "location": {
      "address": "Labzak Street, Shaykhantaur",
      "city": "Tashkent",
      "lat": 41.31,
      "lng": 69.24
    },
    "dateTime": "2025-08-21T19:00:00",
    "duration": 60,
    "maxParticipants": 5,
    "participants": [
      "mockUsers[113]",
      "mockUsers[75]",
      "mockUsers[44]",
      "mockUsers[167]",
      "mockUsers[72]"
    ],
    "approvedParticipants": [
      "mockUsers[113]",
      "mockUsers[75]",
      "mockUsers[44]",
      "mockUsers[167]",
      "mockUsers[72]"
    ],
    "pendingRequests": [],
    "description": "A fun and social other event open to all skill levels!",
    "price": 0
  },
  {
    "id": "1116",
    "title": "Tennis Court Tennis Session",
    "sportType": "SportType.Tennis",
    "hostId": "mockUsers[136].id",
    "host": mockUsers[136],
    "location": {
      "address": "Oqqurghon Street, 16",
      "city": "Tashkent",
      "lat": 41.32,
      "lng": 69.285
    },
    "dateTime": "2025-08-09T07:00:00",
    "duration": 90,
    "maxParticipants": 11,
    "participants": [
      "mockUsers[136]",
      "mockUsers[58]",
      "mockUsers[82]",
      "mockUsers[132]",
      "mockUsers[1]",
      "mockUsers[158]",
      "mockUsers[102]",
      "mockUsers[64]",
      "mockUsers[199]",
      "mockUsers[169]",
      "mockUsers[54]"
    ],
    "approvedParticipants": [
      "mockUsers[136]",
      "mockUsers[58]",
      "mockUsers[82]",
      "mockUsers[132]",
      "mockUsers[1]",
      "mockUsers[158]",
      "mockUsers[102]",
      "mockUsers[64]",
      "mockUsers[199]",
      "mockUsers[169]",
      "mockUsers[54]"
    ],
    "pendingRequests": [],
    "description": "A fun and social tennis event open to all skill levels!",
    "price": 0
  },
  {
    "id": "1117",
    "title": "River Park Running Session",
    "sportType": "SportType.Running",
    "hostId": "mockUsers[0].id",
    "host": mockUsers[0],
    "location": {
      "address": "Tashkent",
      "city": "Tashkent",
      "lat": 41.33,
      "lng": 69.31
    },
    "dateTime": "2025-08-08T07:00:00",
    "duration": 120,
    "maxParticipants": 4,
    "participants": [
      "mockUsers[0]",
      "mockUsers[33]",
      "mockUsers[6]",
      "mockUsers[58]"
    ],
    "approvedParticipants": [
      "mockUsers[0]",
      "mockUsers[33]",
      "mockUsers[6]",
      "mockUsers[58]"
    ],
    "pendingRequests": [],
    "description": "A fun and social running event open to all skill levels!",
    "price": 0
  },
  {
    "id": "1118",
    "title": "River Park Running Session",
    "sportType": "SportType.Running",
    "hostId": "mockUsers[6].id",
    "host": mockUsers[6],
    "location": {
      "address": "Tashkent",
      "city": "Tashkent",
      "lat": 41.33,
      "lng": 69.31
    },
    "dateTime": "2025-08-07T07:00:00",
    "duration": 60,
    "maxParticipants": 4,
    "participants": [
      "mockUsers[6]",
      "mockUsers[85]",
      "mockUsers[86]",
      "mockUsers[120]"
    ],
    "approvedParticipants": [
      "mockUsers[6]",
      "mockUsers[85]",
      "mockUsers[86]",
      "mockUsers[120]"
    ],
    "pendingRequests": [],
    "description": "A fun and social running event open to all skill levels!",
    "price": 0
  },
  {
    "id": "1119",
    "title": "TTClub Tennis Session",
    "sportType": "SportType.Tennis",
    "hostId": "mockUsers[37].id",
    "host": mockUsers[37],
    "location": {
      "address": "Mahtumquli Street, 105\u0413",
      "city": "Tashkent",
      "lat": 41.35,
      "lng": 69.3
    },
    "dateTime": "2025-08-17T09:00:00",
    "duration": 90,
    "maxParticipants": 11,
    "participants": [
      "mockUsers[37]",
      "mockUsers[54]",
      "mockUsers[191]",
      "mockUsers[120]",
      "mockUsers[171]",
      "mockUsers[157]",
      "mockUsers[151]",
      "mockUsers[61]",
      "mockUsers[149]",
      "mockUsers[172]",
      "mockUsers[138]"
    ],
    "approvedParticipants": [
      "mockUsers[37]",
      "mockUsers[54]",
      "mockUsers[191]",
      "mockUsers[120]",
      "mockUsers[171]",
      "mockUsers[157]",
      "mockUsers[151]",
      "mockUsers[61]",
      "mockUsers[149]",
      "mockUsers[172]",
      "mockUsers[138]"
    ],
    "pendingRequests": [],
    "description": "A fun and social tennis event open to all skill levels!",
    "price": 0
  },
  {
    "id": "1120",
    "title": "Anhor Park Rink Other Session",
    "sportType": "SportType.Other",
    "hostId": "mockUsers[178].id",
    "host": mockUsers[178],
    "location": {
      "address": "Labzak Street, Shaykhantaur",
      "city": "Tashkent",
      "lat": 41.31,
      "lng": 69.24
    },
    "dateTime": "2025-08-21T17:00:00",
    "duration": 90,
    "maxParticipants": 8,
    "participants": [
      "mockUsers[178]",
      "mockUsers[35]",
      "mockUsers[140]",
      "mockUsers[33]",
      "mockUsers[21]",
      "mockUsers[129]",
      "mockUsers[159]",
      "mockUsers[123]"
    ],
    "approvedParticipants": [
      "mockUsers[178]",
      "mockUsers[35]",
      "mockUsers[140]",
      "mockUsers[33]",
      "mockUsers[21]",
      "mockUsers[129]",
      "mockUsers[159]",
      "mockUsers[123]"
    ],
    "pendingRequests": [],
    "description": "A fun and social other event open to all skill levels!",
    "price": 0
  },
  {
    "id": "1121",
    "title": "Anhor Park Rink Other Session",
    "sportType": "SportType.Other",
    "hostId": "mockUsers[42].id",
    "host": mockUsers[42],
    "location": {
      "address": "Labzak Street, Shaykhantaur",
      "city": "Tashkent",
      "lat": 41.31,
      "lng": 69.24
    },
    "dateTime": "2025-08-16T18:00:00",
    "duration": 90,
    "maxParticipants": 10,
    "participants": [
      "mockUsers[42]",
      "mockUsers[193]",
      "mockUsers[18]",
      "mockUsers[1]",
      "mockUsers[37]",
      "mockUsers[51]",
      "mockUsers[171]",
      "mockUsers[84]",
      "mockUsers[189]",
      "mockUsers[92]"
    ],
    "approvedParticipants": [
      "mockUsers[42]",
      "mockUsers[193]",
      "mockUsers[18]",
      "mockUsers[1]",
      "mockUsers[37]",
      "mockUsers[51]",
      "mockUsers[171]",
      "mockUsers[84]",
      "mockUsers[189]",
      "mockUsers[92]"
    ],
    "pendingRequests": [],
    "description": "A fun and social other event open to all skill levels!",
    "price": 0
  },
  {
    "id": "1122",
    "title": "Anhor Park Rink Other Session",
    "sportType": "SportType.Other",
    "hostId": "mockUsers[98].id",
    "host": mockUsers[98],
    "location": {
      "address": "Labzak Street, Shaykhantaur",
      "city": "Tashkent",
      "lat": 41.31,
      "lng": 69.24
    },
    "dateTime": "2025-08-10T18:00:00",
    "duration": 90,
    "maxParticipants": 4,
    "participants": [
      "mockUsers[98]",
      "mockUsers[79]",
      "mockUsers[15]",
      "mockUsers[189]"
    ],
    "approvedParticipants": [
      "mockUsers[98]",
      "mockUsers[79]",
      "mockUsers[15]",
      "mockUsers[189]"
    ],
    "pendingRequests": [],
    "description": "A fun and social other event open to all skill levels!",
    "price": 0
  },
  {
    "id": "1123",
    "title": "Tennis Court Tennis Session",
    "sportType": "SportType.Tennis",
    "hostId": "mockUsers[190].id",
    "host": mockUsers[190],
    "location": {
      "address": "Oqqurghon Street, 16",
      "city": "Tashkent",
      "lat": 41.32,
      "lng": 69.285
    },
    "dateTime": "2025-08-06T07:00:00",
    "duration": 60,
    "maxParticipants": 4,
    "participants": [
      "mockUsers[190]",
      "mockUsers[18]",
      "mockUsers[175]",
      "mockUsers[128]"
    ],
    "approvedParticipants": [
      "mockUsers[190]",
      "mockUsers[18]",
      "mockUsers[175]",
      "mockUsers[128]"
    ],
    "pendingRequests": [],
    "description": "A fun and social tennis event open to all skill levels!",
    "price": 0
  },
  {
    "id": "1124",
    "title": "Chamanzar Field Football Session",
    "sportType": "SportType.Football",
    "hostId": "mockUsers[192].id",
    "host": mockUsers[192],
    "location": {
      "address": "Uchtepa District, Chamanzar Mahallah",
      "city": "Tashkent",
      "lat": 41.295,
      "lng": 69.211
    },
    "dateTime": "2025-07-28T18:00:00",
    "duration": 120,
    "maxParticipants": 8,
    "participants": [
      "mockUsers[192]",
      "mockUsers[2]",
      "mockUsers[110]",
      "mockUsers[84]",
      "mockUsers[29]",
      "mockUsers[13]",
      "mockUsers[101]",
      "mockUsers[169]"
    ],
    "approvedParticipants": [
      "mockUsers[192]",
      "mockUsers[2]",
      "mockUsers[110]",
      "mockUsers[84]",
      "mockUsers[29]",
      "mockUsers[13]",
      "mockUsers[101]",
      "mockUsers[169]"
    ],
    "pendingRequests": [],
    "description": "A fun and social football event open to all skill levels!",
    "price": 0
  },
  {
    "id": "1125",
    "title": "Tennis Court Tennis Session",
    "sportType": "SportType.Tennis",
    "hostId": "mockUsers[53].id",
    "host": mockUsers[53],
    "location": {
      "address": "Oqqurghon Street, 16",
      "city": "Tashkent",
      "lat": 41.32,
      "lng": 69.285
    },
    "dateTime": "2025-08-23T09:00:00",
    "duration": 90,
    "maxParticipants": 6,
    "participants": [
      "mockUsers[53]",
      "mockUsers[90]",
      "mockUsers[155]",
      "mockUsers[12]",
      "mockUsers[175]",
      "mockUsers[167]"
    ],
    "approvedParticipants": [
      "mockUsers[53]",
      "mockUsers[90]",
      "mockUsers[155]",
      "mockUsers[12]",
      "mockUsers[175]",
      "mockUsers[167]"
    ],
    "pendingRequests": [],
    "description": "A fun and social tennis event open to all skill levels!",
    "price": 0
  },
  {
    "id": "1126",
    "title": "River Park Running Session",
    "sportType": "SportType.Running",
    "hostId": "mockUsers[151].id",
    "host": mockUsers[151],
    "location": {
      "address": "Tashkent",
      "city": "Tashkent",
      "lat": 41.33,
      "lng": 69.31
    },
    "dateTime": "2025-07-27T09:00:00",
    "duration": 120,
    "maxParticipants": 5,
    "participants": [
      "mockUsers[151]",
      "mockUsers[6]",
      "mockUsers[164]",
      "mockUsers[92]",
      "mockUsers[194]"
    ],
    "approvedParticipants": [
      "mockUsers[151]",
      "mockUsers[6]",
      "mockUsers[164]",
      "mockUsers[92]",
      "mockUsers[194]"
    ],
    "pendingRequests": [],
    "description": "A fun and social running event open to all skill levels!",
    "price": 0
  },
  {
    "id": "1127",
    "title": "Fitness First Gym Session",
    "sportType": "SportType.Gym",
    "hostId": "mockUsers[23].id",
    "host": mockUsers[23],
    "location": {
      "address": "Afrosiyob Street, 41",
      "city": "Tashkent",
      "lat": 41.31,
      "lng": 69.28
    },
    "dateTime": "2025-07-31T19:00:00",
    "duration": 120,
    "maxParticipants": 11,
    "participants": [
      "mockUsers[23]",
      "mockUsers[92]",
      "mockUsers[29]",
      "mockUsers[109]",
      "mockUsers[123]",
      "mockUsers[2]",
      "mockUsers[9]",
      "mockUsers[196]",
      "mockUsers[120]",
      "mockUsers[134]",
      "mockUsers[179]"
    ],
    "approvedParticipants": [
      "mockUsers[23]",
      "mockUsers[92]",
      "mockUsers[29]",
      "mockUsers[109]",
      "mockUsers[123]",
      "mockUsers[2]",
      "mockUsers[9]",
      "mockUsers[196]",
      "mockUsers[120]",
      "mockUsers[134]",
      "mockUsers[179]"
    ],
    "pendingRequests": [],
    "description": "A fun and social gym event open to all skill levels!",
    "price": 0
  },
  {
    "id": "1128",
    "title": "Chamanzar Field Football Session",
    "sportType": "SportType.Football",
    "hostId": "mockUsers[146].id",
    "host": mockUsers[146],
    "location": {
      "address": "Uchtepa District, Chamanzar Mahallah",
      "city": "Tashkent",
      "lat": 41.295,
      "lng": 69.211
    },
    "dateTime": "2025-07-20T19:00:00",
    "duration": 120,
    "maxParticipants": 11,
    "participants": [
      "mockUsers[146]",
      "mockUsers[189]",
      "mockUsers[78]",
      "mockUsers[104]",
      "mockUsers[100]",
      "mockUsers[30]",
      "mockUsers[147]",
      "mockUsers[24]",
      "mockUsers[95]",
      "mockUsers[29]",
      "mockUsers[74]"
    ],
    "approvedParticipants": [
      "mockUsers[146]",
      "mockUsers[189]",
      "mockUsers[78]",
      "mockUsers[104]",
      "mockUsers[100]",
      "mockUsers[30]",
      "mockUsers[147]",
      "mockUsers[24]",
      "mockUsers[95]",
      "mockUsers[29]",
      "mockUsers[74]"
    ],
    "pendingRequests": [],
    "description": "A fun and social football event open to all skill levels!",
    "price": 0
  },
  {
    "id": "1129",
    "title": "Yoga Space Yoga Session",
    "sportType": "SportType.Yoga",
    "hostId": "mockUsers[175].id",
    "host": mockUsers[175],
    "location": {
      "address": "Kichik Beshyogoch street, 56",
      "city": "Tashkent",
      "lat": 41.311,
      "lng": 69.27
    },
    "dateTime": "2025-08-12T09:00:00",
    "duration": 60,
    "maxParticipants": 7,
    "participants": [
      "mockUsers[175]",
      "mockUsers[181]",
      "mockUsers[81]",
      "mockUsers[84]",
      "mockUsers[134]",
      "mockUsers[128]",
      "mockUsers[147]"
    ],
    "approvedParticipants": [
      "mockUsers[175]",
      "mockUsers[181]",
      "mockUsers[81]",
      "mockUsers[84]",
      "mockUsers[134]",
      "mockUsers[128]",
      "mockUsers[147]"
    ],
    "pendingRequests": [],
    "description": "A fun and social yoga event open to all skill levels!",
    "price": 0
  },
  {
    "id": "1130",
    "title": "Fitness First Gym Session",
    "sportType": "SportType.Gym",
    "hostId": "mockUsers[191].id",
    "host": mockUsers[191],
    "location": {
      "address": "Afrosiyob Street, 41",
      "city": "Tashkent",
      "lat": 41.31,
      "lng": 69.28
    },
    "dateTime": "2025-07-27T17:00:00",
    "duration": 90,
    "maxParticipants": 7,
    "participants": [
      "mockUsers[191]",
      "mockUsers[51]",
      "mockUsers[43]",
      "mockUsers[32]",
      "mockUsers[45]",
      "mockUsers[151]",
      "mockUsers[17]"
    ],
    "approvedParticipants": [
      "mockUsers[191]",
      "mockUsers[51]",
      "mockUsers[43]",
      "mockUsers[32]",
      "mockUsers[45]",
      "mockUsers[151]",
      "mockUsers[17]"
    ],
    "pendingRequests": [],
    "description": "A fun and social gym event open to all skill levels!",
    "price": 0
  },
  {
    "id": "1131",
    "title": "River Park Running Session",
    "sportType": "SportType.Running",
    "hostId": "mockUsers[46].id",
    "host": mockUsers[46],
    "location": {
      "address": "Tashkent",
      "city": "Tashkent",
      "lat": 41.33,
      "lng": 69.31
    },
    "dateTime": "2025-08-16T18:00:00",
    "duration": 120,
    "maxParticipants": 10,
    "participants": [
      "mockUsers[46]",
      "mockUsers[117]",
      "mockUsers[142]",
      "mockUsers[188]",
      "mockUsers[25]",
      "mockUsers[164]",
      "mockUsers[122]",
      "mockUsers[84]",
      "mockUsers[79]",
      "mockUsers[65]"
    ],
    "approvedParticipants": [
      "mockUsers[46]",
      "mockUsers[117]",
      "mockUsers[142]",
      "mockUsers[188]",
      "mockUsers[25]",
      "mockUsers[164]",
      "mockUsers[122]",
      "mockUsers[84]",
      "mockUsers[79]",
      "mockUsers[65]"
    ],
    "pendingRequests": [],
    "description": "A fun and social running event open to all skill levels!",
    "price": 0
  },
  {
    "id": "1132",
    "title": "TTClub Tennis Session",
    "sportType": "SportType.Tennis",
    "hostId": "mockUsers[78].id",
    "host": mockUsers[78],
    "location": {
      "address": "Mahtumquli Street, 105\u0413",
      "city": "Tashkent",
      "lat": 41.35,
      "lng": 69.3
    },
    "dateTime": "2025-08-29T07:00:00",
    "duration": 120,
    "maxParticipants": 10,
    "participants": [
      "mockUsers[78]",
      "mockUsers[174]",
      "mockUsers[77]",
      "mockUsers[18]",
      "mockUsers[184]",
      "mockUsers[55]",
      "mockUsers[106]",
      "mockUsers[66]",
      "mockUsers[13]",
      "mockUsers[44]"
    ],
    "approvedParticipants": [
      "mockUsers[78]",
      "mockUsers[174]",
      "mockUsers[77]",
      "mockUsers[18]",
      "mockUsers[184]",
      "mockUsers[55]",
      "mockUsers[106]",
      "mockUsers[66]",
      "mockUsers[13]",
      "mockUsers[44]"
    ],
    "pendingRequests": [],
    "description": "A fun and social tennis event open to all skill levels!",
    "price": 0
  },
  {
    "id": "1133",
    "title": "Aqualand Swimming Session",
    "sportType": "SportType.Swimming",
    "hostId": "mockUsers[94].id",
    "host": mockUsers[94],
    "location": {
      "address": "Chinabad Street, 61A",
      "city": "Tashkent",
      "lat": 41.36,
      "lng": 69.29
    },
    "dateTime": "2025-07-23T07:00:00",
    "duration": 60,
    "maxParticipants": 6,
    "participants": [
      "mockUsers[94]",
      "mockUsers[150]",
      "mockUsers[198]",
      "mockUsers[81]",
      "mockUsers[146]",
      "mockUsers[186]"
    ],
    "approvedParticipants": [
      "mockUsers[94]",
      "mockUsers[150]",
      "mockUsers[198]",
      "mockUsers[81]",
      "mockUsers[146]",
      "mockUsers[186]"
    ],
    "pendingRequests": [],
    "description": "A fun and social swimming event open to all skill levels!",
    "price": 0
  },
  {
    "id": "1134",
    "title": "Yunusabad Stadium Football Session",
    "sportType": "SportType.Football",
    "hostId": "mockUsers[120].id",
    "host": mockUsers[120],
    "location": {
      "address": "Yunusabad District, 3-mavze",
      "city": "Tashkent",
      "lat": 41.364559,
      "lng": 69.294178
    },
    "dateTime": "2025-07-30T19:00:00",
    "duration": 90,
    "maxParticipants": 8,
    "participants": [
      "mockUsers[120]",
      "mockUsers[115]",
      "mockUsers[12]",
      "mockUsers[8]",
      "mockUsers[168]",
      "mockUsers[118]",
      "mockUsers[167]",
      "mockUsers[50]"
    ],
    "approvedParticipants": [
      "mockUsers[120]",
      "mockUsers[115]",
      "mockUsers[12]",
      "mockUsers[8]",
      "mockUsers[168]",
      "mockUsers[118]",
      "mockUsers[167]",
      "mockUsers[50]"
    ],
    "pendingRequests": [],
    "description": "A fun and social football event open to all skill levels!",
    "price": 0
  },
  {
    "id": "1135",
    "title": "Yunusabad Stadium Football Session",
    "sportType": "SportType.Football",
    "hostId": "mockUsers[152].id",
    "host": mockUsers[152],
    "location": {
      "address": "Yunusabad District, 3-mavze",
      "city": "Tashkent",
      "lat": 41.364559,
      "lng": 69.294178
    },
    "dateTime": "2025-08-27T19:00:00",
    "duration": 60,
    "maxParticipants": 8,
    "participants": [
      "mockUsers[152]",
      "mockUsers[192]",
      "mockUsers[180]",
      "mockUsers[12]",
      "mockUsers[102]",
      "mockUsers[120]",
      "mockUsers[35]",
      "mockUsers[20]"
    ],
    "approvedParticipants": [
      "mockUsers[152]",
      "mockUsers[192]",
      "mockUsers[180]",
      "mockUsers[12]",
      "mockUsers[102]",
      "mockUsers[120]",
      "mockUsers[35]",
      "mockUsers[20]"
    ],
    "pendingRequests": [],
    "description": "A fun and social football event open to all skill levels!",
    "price": 0
  },
  {
    "id": "1136",
    "title": "Yoga Space Yoga Session",
    "sportType": "SportType.Yoga",
    "hostId": "mockUsers[1].id",
    "host": mockUsers[1],
    "location": {
      "address": "Kichik Beshyogoch street, 56",
      "city": "Tashkent",
      "lat": 41.311,
      "lng": 69.27
    },
    "dateTime": "2025-07-23T17:00:00",
    "duration": 90,
    "maxParticipants": 10,
    "participants": [
      "mockUsers[1]",
      "mockUsers[91]",
      "mockUsers[106]",
      "mockUsers[110]",
      "mockUsers[101]",
      "mockUsers[9]",
      "mockUsers[22]",
      "mockUsers[188]",
      "mockUsers[199]",
      "mockUsers[78]"
    ],
    "approvedParticipants": [
      "mockUsers[1]",
      "mockUsers[91]",
      "mockUsers[106]",
      "mockUsers[110]",
      "mockUsers[101]",
      "mockUsers[9]",
      "mockUsers[22]",
      "mockUsers[188]",
      "mockUsers[199]",
      "mockUsers[78]"
    ],
    "pendingRequests": [],
    "description": "A fun and social yoga event open to all skill levels!",
    "price": 0
  },
  {
    "id": "1137",
    "title": "Chamanzar Field Football Session",
    "sportType": "SportType.Football",
    "hostId": "mockUsers[75].id",
    "host": mockUsers[75],
    "location": {
      "address": "Uchtepa District, Chamanzar Mahallah",
      "city": "Tashkent",
      "lat": 41.295,
      "lng": 69.211
    },
    "dateTime": "2025-08-20T19:00:00",
    "duration": 90,
    "maxParticipants": 11,
    "participants": [
      "mockUsers[75]",
      "mockUsers[65]",
      "mockUsers[145]",
      "mockUsers[161]",
      "mockUsers[120]",
      "mockUsers[148]",
      "mockUsers[179]",
      "mockUsers[137]",
      "mockUsers[196]",
      "mockUsers[104]",
      "mockUsers[34]"
    ],
    "approvedParticipants": [
      "mockUsers[75]",
      "mockUsers[65]",
      "mockUsers[145]",
      "mockUsers[161]",
      "mockUsers[120]",
      "mockUsers[148]",
      "mockUsers[179]",
      "mockUsers[137]",
      "mockUsers[196]",
      "mockUsers[104]",
      "mockUsers[34]"
    ],
    "pendingRequests": [],
    "description": "A fun and social football event open to all skill levels!",
    "price": 0
  },
  {
    "id": "1138",
    "title": "Yoga Space Yoga Session",
    "sportType": "SportType.Yoga",
    "hostId": "mockUsers[79].id",
    "host": mockUsers[79],
    "location": {
      "address": "Kichik Beshyogoch street, 56",
      "city": "Tashkent",
      "lat": 41.311,
      "lng": 69.27
    },
    "dateTime": "2025-07-18T19:00:00",
    "duration": 60,
    "maxParticipants": 8,
    "participants": [
      "mockUsers[79]",
      "mockUsers[67]",
      "mockUsers[158]",
      "mockUsers[14]",
      "mockUsers[166]",
      "mockUsers[116]",
      "mockUsers[31]",
      "mockUsers[75]"
    ],
    "approvedParticipants": [
      "mockUsers[79]",
      "mockUsers[67]",
      "mockUsers[158]",
      "mockUsers[14]",
      "mockUsers[166]",
      "mockUsers[116]",
      "mockUsers[31]",
      "mockUsers[75]"
    ],
    "pendingRequests": [],
    "description": "A fun and social yoga event open to all skill levels!",
    "price": 0
  },
  {
    "id": "1139",
    "title": "Chamanzar Field Football Session",
    "sportType": "SportType.Football",
    "hostId": "mockUsers[132].id",
    "host": mockUsers[132],
    "location": {
      "address": "Uchtepa District, Chamanzar Mahallah",
      "city": "Tashkent",
      "lat": 41.295,
      "lng": 69.211
    },
    "dateTime": "2025-08-01T17:00:00",
    "duration": 90,
    "maxParticipants": 8,
    "participants": [
      "mockUsers[132]",
      "mockUsers[192]",
      "mockUsers[113]",
      "mockUsers[89]",
      "mockUsers[92]",
      "mockUsers[2]",
      "mockUsers[198]",
      "mockUsers[95]"
    ],
    "approvedParticipants": [
      "mockUsers[132]",
      "mockUsers[192]",
      "mockUsers[113]",
      "mockUsers[89]",
      "mockUsers[92]",
      "mockUsers[2]",
      "mockUsers[198]",
      "mockUsers[95]"
    ],
    "pendingRequests": [],
    "description": "A fun and social football event open to all skill levels!",
    "price": 0
  },
  {
    "id": "1140",
    "title": "Yoga Space Yoga Session",
    "sportType": "SportType.Yoga",
    "hostId": "mockUsers[32].id",
    "host": mockUsers[32],
    "location": {
      "address": "Kichik Beshyogoch street, 56",
      "city": "Tashkent",
      "lat": 41.311,
      "lng": 69.27
    },
    "dateTime": "2025-08-13T09:00:00",
    "duration": 120,
    "maxParticipants": 4,
    "participants": [
      "mockUsers[32]",
      "mockUsers[76]",
      "mockUsers[109]",
      "mockUsers[165]"
    ],
    "approvedParticipants": [
      "mockUsers[32]",
      "mockUsers[76]",
      "mockUsers[109]",
      "mockUsers[165]"
    ],
    "pendingRequests": [],
    "description": "A fun and social yoga event open to all skill levels!",
    "price": 0
  },
  {
    "id": "1141",
    "title": "Yunusabad Stadium Football Session",
    "sportType": "SportType.Football",
    "hostId": "mockUsers[113].id",
    "host": mockUsers[113],
    "location": {
      "address": "Yunusabad District, 3-mavze",
      "city": "Tashkent",
      "lat": 41.364559,
      "lng": 69.294178
    },
    "dateTime": "2025-07-19T09:00:00",
    "duration": 60,
    "maxParticipants": 7,
    "participants": [
      "mockUsers[113]",
      "mockUsers[168]",
      "mockUsers[194]",
      "mockUsers[64]",
      "mockUsers[107]",
      "mockUsers[3]",
      "mockUsers[103]"
    ],
    "approvedParticipants": [
      "mockUsers[113]",
      "mockUsers[168]",
      "mockUsers[194]",
      "mockUsers[64]",
      "mockUsers[107]",
      "mockUsers[3]",
      "mockUsers[103]"
    ],
    "pendingRequests": [],
    "description": "A fun and social football event open to all skill levels!",
    "price": 0
  },
  {
    "id": "1142",
    "title": "Tennis Court Tennis Session",
    "sportType": "SportType.Tennis",
    "hostId": "mockUsers[151].id",
    "host": mockUsers[151],
    "location": {
      "address": "Oqqurghon Street, 16",
      "city": "Tashkent",
      "lat": 41.32,
      "lng": 69.285
    },
    "dateTime": "2025-08-23T07:00:00",
    "duration": 60,
    "maxParticipants": 11,
    "participants": [
      "mockUsers[151]",
      "mockUsers[69]",
      "mockUsers[21]",
      "mockUsers[105]",
      "mockUsers[108]",
      "mockUsers[197]",
      "mockUsers[167]",
      "mockUsers[195]",
      "mockUsers[148]",
      "mockUsers[145]",
      "mockUsers[72]"
    ],
    "approvedParticipants": [
      "mockUsers[151]",
      "mockUsers[69]",
      "mockUsers[21]",
      "mockUsers[105]",
      "mockUsers[108]",
      "mockUsers[197]",
      "mockUsers[167]",
      "mockUsers[195]",
      "mockUsers[148]",
      "mockUsers[145]",
      "mockUsers[72]"
    ],
    "pendingRequests": [],
    "description": "A fun and social tennis event open to all skill levels!",
    "price": 0
  },
  {
    "id": "1143",
    "title": "Aqualand Swimming Session",
    "sportType": "SportType.Swimming",
    "hostId": "mockUsers[103].id",
    "host": mockUsers[103],
    "location": {
      "address": "Chinabad Street, 61A",
      "city": "Tashkent",
      "lat": 41.36,
      "lng": 69.29
    },
    "dateTime": "2025-08-04T18:00:00",
    "duration": 120,
    "maxParticipants": 8,
    "participants": [
      "mockUsers[103]",
      "mockUsers[51]",
      "mockUsers[21]",
      "mockUsers[1]",
      "mockUsers[93]",
      "mockUsers[81]",
      "mockUsers[149]",
      "mockUsers[8]"
    ],
    "approvedParticipants": [
      "mockUsers[103]",
      "mockUsers[51]",
      "mockUsers[21]",
      "mockUsers[1]",
      "mockUsers[93]",
      "mockUsers[81]",
      "mockUsers[149]",
      "mockUsers[8]"
    ],
    "pendingRequests": [],
    "description": "A fun and social swimming event open to all skill levels!",
    "price": 0
  },
  {
    "id": "1144",
    "title": "Aqualand Swimming Session",
    "sportType": "SportType.Swimming",
    "hostId": "mockUsers[97].id",
    "host": mockUsers[97],
    "location": {
      "address": "Chinabad Street, 61A",
      "city": "Tashkent",
      "lat": 41.36,
      "lng": 69.29
    },
    "dateTime": "2025-08-04T09:00:00",
    "duration": 120,
    "maxParticipants": 6,
    "participants": [
      "mockUsers[97]",
      "mockUsers[180]",
      "mockUsers[10]",
      "mockUsers[139]",
      "mockUsers[148]",
      "mockUsers[156]"
    ],
    "approvedParticipants": [
      "mockUsers[97]",
      "mockUsers[180]",
      "mockUsers[10]",
      "mockUsers[139]",
      "mockUsers[148]",
      "mockUsers[156]"
    ],
    "pendingRequests": [],
    "description": "A fun and social swimming event open to all skill levels!",
    "price": 0
  },
  {
    "id": "1145",
    "title": "River Park Running Session",
    "sportType": "SportType.Running",
    "hostId": "mockUsers[143].id",
    "host": mockUsers[143],
    "location": {
      "address": "Tashkent",
      "city": "Tashkent",
      "lat": 41.33,
      "lng": 69.31
    },
    "dateTime": "2025-08-10T07:00:00",
    "duration": 60,
    "maxParticipants": 6,
    "participants": [
      "mockUsers[143]",
      "mockUsers[75]",
      "mockUsers[71]",
      "mockUsers[116]",
      "mockUsers[80]",
      "mockUsers[87]"
    ],
    "approvedParticipants": [
      "mockUsers[143]",
      "mockUsers[75]",
      "mockUsers[71]",
      "mockUsers[116]",
      "mockUsers[80]",
      "mockUsers[87]"
    ],
    "pendingRequests": [],
    "description": "A fun and social running event open to all skill levels!",
    "price": 0
  },
  {
    "id": "1146",
    "title": "Aqualand Swimming Session",
    "sportType": "SportType.Swimming",
    "hostId": "mockUsers[146].id",
    "host": mockUsers[146],
    "location": {
      "address": "Chinabad Street, 61A",
      "city": "Tashkent",
      "lat": 41.36,
      "lng": 69.29
    },
    "dateTime": "2025-08-15T07:00:00",
    "duration": 90,
    "maxParticipants": 10,
    "participants": [
      "mockUsers[146]",
      "mockUsers[95]",
      "mockUsers[22]",
      "mockUsers[100]",
      "mockUsers[25]",
      "mockUsers[156]",
      "mockUsers[168]",
      "mockUsers[1]",
      "mockUsers[104]",
      "mockUsers[187]"
    ],
    "approvedParticipants": [
      "mockUsers[146]",
      "mockUsers[95]",
      "mockUsers[22]",
      "mockUsers[100]",
      "mockUsers[25]",
      "mockUsers[156]",
      "mockUsers[168]",
      "mockUsers[1]",
      "mockUsers[104]",
      "mockUsers[187]"
    ],
    "pendingRequests": [],
    "description": "A fun and social swimming event open to all skill levels!",
    "price": 0
  },
  {
    "id": "1147",
    "title": "Yunusabad Stadium Football Session",
    "sportType": "SportType.Football",
    "hostId": "mockUsers[62].id",
    "host": mockUsers[62],
    "location": {
      "address": "Yunusabad District, 3-mavze",
      "city": "Tashkent",
      "lat": 41.364559,
      "lng": 69.294178
    },
    "dateTime": "2025-08-01T09:00:00",
    "duration": 120,
    "maxParticipants": 7,
    "participants": [
      "mockUsers[62]",
      "mockUsers[165]",
      "mockUsers[55]",
      "mockUsers[48]",
      "mockUsers[161]",
      "mockUsers[193]",
      "mockUsers[90]"
    ],
    "approvedParticipants": [
      "mockUsers[62]",
      "mockUsers[165]",
      "mockUsers[55]",
      "mockUsers[48]",
      "mockUsers[161]",
      "mockUsers[193]",
      "mockUsers[90]"
    ],
    "pendingRequests": [],
    "description": "A fun and social football event open to all skill levels!",
    "price": 0
  },
  {
    "id": "1148",
    "title": "Yunusabad Stadium Football Session",
    "sportType": "SportType.Football",
    "hostId": "mockUsers[32].id",
    "host": mockUsers[32],
    "location": {
      "address": "Yunusabad District, 3-mavze",
      "city": "Tashkent",
      "lat": 41.364559,
      "lng": 69.294178
    },
    "dateTime": "2025-08-11T17:00:00",
    "duration": 60,
    "maxParticipants": 5,
    "participants": [
      "mockUsers[32]",
      "mockUsers[13]",
      "mockUsers[127]",
      "mockUsers[78]",
      "mockUsers[141]"
    ],
    "approvedParticipants": [
      "mockUsers[32]",
      "mockUsers[13]",
      "mockUsers[127]",
      "mockUsers[78]",
      "mockUsers[141]"
    ],
    "pendingRequests": [],
    "description": "A fun and social football event open to all skill levels!",
    "price": 0
  },
  {
    "id": "1149",
    "title": "Anhor Park Rink Other Session",
    "sportType": "SportType.Other",
    "hostId": "mockUsers[19].id",
    "host": mockUsers[19],
    "location": {
      "address": "Labzak Street, Shaykhantaur",
      "city": "Tashkent",
      "lat": 41.31,
      "lng": 69.24
    },
    "dateTime": "2025-08-21T07:00:00",
    "duration": 60,
    "maxParticipants": 9,
    "participants": [
      "mockUsers[19]",
      "mockUsers[57]",
      "mockUsers[191]",
      "mockUsers[32]",
      "mockUsers[13]",
      "mockUsers[184]",
      "mockUsers[23]",
      "mockUsers[77]",
      "mockUsers[173]"
    ],
    "approvedParticipants": [
      "mockUsers[19]",
      "mockUsers[57]",
      "mockUsers[191]",
      "mockUsers[32]",
      "mockUsers[13]",
      "mockUsers[184]",
      "mockUsers[23]",
      "mockUsers[77]",
      "mockUsers[173]"
    ],
    "pendingRequests": [],
    "description": "A fun and social other event open to all skill levels!",
    "price": 0
  },
  {
    "id": "1150",
    "title": "Yoga Space Yoga Session",
    "sportType": "SportType.Yoga",
    "hostId": "mockUsers[26].id",
    "host": mockUsers[26],
    "location": {
      "address": "Kichik Beshyogoch street, 56",
      "city": "Tashkent",
      "lat": 41.311,
      "lng": 69.27
    },
    "dateTime": "2025-07-20T09:00:00",
    "duration": 60,
    "maxParticipants": 11,
    "participants": [
      "mockUsers[26]",
      "mockUsers[73]",
      "mockUsers[109]",
      "mockUsers[56]",
      "mockUsers[177]",
      "mockUsers[54]",
      "mockUsers[78]",
      "mockUsers[155]",
      "mockUsers[147]",
      "mockUsers[182]",
      "mockUsers[74]"
    ],
    "approvedParticipants": [
      "mockUsers[26]",
      "mockUsers[73]",
      "mockUsers[109]",
      "mockUsers[56]",
      "mockUsers[177]",
      "mockUsers[54]",
      "mockUsers[78]",
      "mockUsers[155]",
      "mockUsers[147]",
      "mockUsers[182]",
      "mockUsers[74]"
    ],
    "pendingRequests": [],
    "description": "A fun and social yoga event open to all skill levels!",
    "price": 0
  },
  {
    "id": "1151",
    "title": "Anhor Park Rink Other Session",
    "sportType": "SportType.Other",
    "hostId": "mockUsers[88].id",
    "host": mockUsers[88],
    "location": {
      "address": "Labzak Street, Shaykhantaur",
      "city": "Tashkent",
      "lat": 41.31,
      "lng": 69.24
    },
    "dateTime": "2025-08-04T07:00:00",
    "duration": 120,
    "maxParticipants": 11,
    "participants": [
      "mockUsers[88]",
      "mockUsers[194]",
      "mockUsers[23]",
      "mockUsers[15]",
      "mockUsers[52]",
      "mockUsers[4]",
      "mockUsers[184]",
      "mockUsers[98]",
      "mockUsers[19]",
      "mockUsers[26]",
      "mockUsers[50]"
    ],
    "approvedParticipants": [
      "mockUsers[88]",
      "mockUsers[194]",
      "mockUsers[23]",
      "mockUsers[15]",
      "mockUsers[52]",
      "mockUsers[4]",
      "mockUsers[184]",
      "mockUsers[98]",
      "mockUsers[19]",
      "mockUsers[26]",
      "mockUsers[50]"
    ],
    "pendingRequests": [],
    "description": "A fun and social other event open to all skill levels!",
    "price": 0
  },
  {
    "id": "1152",
    "title": "Anhor Park Rink Other Session",
    "sportType": "SportType.Other",
    "hostId": "mockUsers[163].id",
    "host": mockUsers[163],
    "location": {
      "address": "Labzak Street, Shaykhantaur",
      "city": "Tashkent",
      "lat": 41.31,
      "lng": 69.24
    },
    "dateTime": "2025-07-29T07:00:00",
    "duration": 90,
    "maxParticipants": 11,
    "participants": [
      "mockUsers[163]",
      "mockUsers[195]",
      "mockUsers[101]",
      "mockUsers[40]",
      "mockUsers[170]",
      "mockUsers[95]",
      "mockUsers[7]",
      "mockUsers[60]",
      "mockUsers[46]",
      "mockUsers[166]",
      "mockUsers[184]"
    ],
    "approvedParticipants": [
      "mockUsers[163]",
      "mockUsers[195]",
      "mockUsers[101]",
      "mockUsers[40]",
      "mockUsers[170]",
      "mockUsers[95]",
      "mockUsers[7]",
      "mockUsers[60]",
      "mockUsers[46]",
      "mockUsers[166]",
      "mockUsers[184]"
    ],
    "pendingRequests": [],
    "description": "A fun and social other event open to all skill levels!",
    "price": 0
  },
  {
    "id": "1153",
    "title": "Aqualand Swimming Session",
    "sportType": "SportType.Swimming",
    "hostId": "mockUsers[74].id",
    "host": mockUsers[74],
    "location": {
      "address": "Chinabad Street, 61A",
      "city": "Tashkent",
      "lat": 41.36,
      "lng": 69.29
    },
    "dateTime": "2025-08-02T09:00:00",
    "duration": 120,
    "maxParticipants": 4,
    "participants": [
      "mockUsers[74]",
      "mockUsers[77]",
      "mockUsers[131]",
      "mockUsers[25]"
    ],
    "approvedParticipants": [
      "mockUsers[74]",
      "mockUsers[77]",
      "mockUsers[131]",
      "mockUsers[25]"
    ],
    "pendingRequests": [],
    "description": "A fun and social swimming event open to all skill levels!",
    "price": 0
  },
  {
    "id": "1154",
    "title": "Anhor Park Rink Other Session",
    "sportType": "SportType.Other",
    "hostId": "mockUsers[124].id",
    "host": mockUsers[124],
    "location": {
      "address": "Labzak Street, Shaykhantaur",
      "city": "Tashkent",
      "lat": 41.31,
      "lng": 69.24
    },
    "dateTime": "2025-08-03T19:00:00",
    "duration": 60,
    "maxParticipants": 5,
    "participants": [
      "mockUsers[124]",
      "mockUsers[114]",
      "mockUsers[147]",
      "mockUsers[167]",
      "mockUsers[170]"
    ],
    "approvedParticipants": [
      "mockUsers[124]",
      "mockUsers[114]",
      "mockUsers[147]",
      "mockUsers[167]",
      "mockUsers[170]"
    ],
    "pendingRequests": [],
    "description": "A fun and social other event open to all skill levels!",
    "price": 0
  },
  {
    "id": "1155",
    "title": "River Park Running Session",
    "sportType": "SportType.Running",
    "hostId": "mockUsers[42].id",
    "host": mockUsers[42],
    "location": {
      "address": "Tashkent",
      "city": "Tashkent",
      "lat": 41.33,
      "lng": 69.31
    },
    "dateTime": "2025-08-16T17:00:00",
    "duration": 60,
    "maxParticipants": 4,
    "participants": [
      "mockUsers[42]",
      "mockUsers[62]",
      "mockUsers[70]",
      "mockUsers[115]"
    ],
    "approvedParticipants": [
      "mockUsers[42]",
      "mockUsers[62]",
      "mockUsers[70]",
      "mockUsers[115]"
    ],
    "pendingRequests": [],
    "description": "A fun and social running event open to all skill levels!",
    "price": 0
  },
  {
    "id": "1156",
    "title": "River Park Running Session",
    "sportType": "SportType.Running",
    "hostId": "mockUsers[180].id",
    "host": mockUsers[180],
    "location": {
      "address": "Tashkent",
      "city": "Tashkent",
      "lat": 41.33,
      "lng": 69.31
    },
    "dateTime": "2025-08-23T07:00:00",
    "duration": 120,
    "maxParticipants": 4,
    "participants": [
      "mockUsers[180]",
      "mockUsers[145]",
      "mockUsers[128]",
      "mockUsers[54]"
    ],
    "approvedParticipants": [
      "mockUsers[180]",
      "mockUsers[145]",
      "mockUsers[128]",
      "mockUsers[54]"
    ],
    "pendingRequests": [],
    "description": "A fun and social running event open to all skill levels!",
    "price": 0
  },
  {
    "id": "1157",
    "title": "Aqualand Swimming Session",
    "sportType": "SportType.Swimming",
    "hostId": "mockUsers[136].id",
    "host": mockUsers[136],
    "location": {
      "address": "Chinabad Street, 61A",
      "city": "Tashkent",
      "lat": 41.36,
      "lng": 69.29
    },
    "dateTime": "2025-08-04T18:00:00",
    "duration": 60,
    "maxParticipants": 11,
    "participants": [
      "mockUsers[136]",
      "mockUsers[118]",
      "mockUsers[145]",
      "mockUsers[198]",
      "mockUsers[122]",
      "mockUsers[156]",
      "mockUsers[177]",
      "mockUsers[18]",
      "mockUsers[183]",
      "mockUsers[142]",
      "mockUsers[126]"
    ],
    "approvedParticipants": [
      "mockUsers[136]",
      "mockUsers[118]",
      "mockUsers[145]",
      "mockUsers[198]",
      "mockUsers[122]",
      "mockUsers[156]",
      "mockUsers[177]",
      "mockUsers[18]",
      "mockUsers[183]",
      "mockUsers[142]",
      "mockUsers[126]"
    ],
    "pendingRequests": [],
    "description": "A fun and social swimming event open to all skill levels!",
    "price": 0
  },
  {
    "id": "1158",
    "title": "Tennis Court Tennis Session",
    "sportType": "SportType.Tennis",
    "hostId": "mockUsers[179].id",
    "host": mockUsers[179],
    "location": {
      "address": "Oqqurghon Street, 16",
      "city": "Tashkent",
      "lat": 41.32,
      "lng": 69.285
    },
    "dateTime": "2025-07-17T07:00:00",
    "duration": 60,
    "maxParticipants": 9,
    "participants": [
      "mockUsers[179]",
      "mockUsers[185]",
      "mockUsers[42]",
      "mockUsers[54]",
      "mockUsers[162]",
      "mockUsers[182]",
      "mockUsers[38]",
      "mockUsers[20]",
      "mockUsers[189]"
    ],
    "approvedParticipants": [
      "mockUsers[179]",
      "mockUsers[185]",
      "mockUsers[42]",
      "mockUsers[54]",
      "mockUsers[162]",
      "mockUsers[182]",
      "mockUsers[38]",
      "mockUsers[20]",
      "mockUsers[189]"
    ],
    "pendingRequests": [],
    "description": "A fun and social tennis event open to all skill levels!",
    "price": 0
  },
  {
    "id": "1159",
    "title": "Fitness First Gym Session",
    "sportType": "SportType.Gym",
    "hostId": "mockUsers[85].id",
    "host": mockUsers[85],
    "location": {
      "address": "Afrosiyob Street, 41",
      "city": "Tashkent",
      "lat": 41.31,
      "lng": 69.28
    },
    "dateTime": "2025-07-21T19:00:00",
    "duration": 90,
    "maxParticipants": 9,
    "participants": [
      "mockUsers[85]",
      "mockUsers[77]",
      "mockUsers[104]",
      "mockUsers[71]",
      "mockUsers[130]",
      "mockUsers[136]",
      "mockUsers[140]",
      "mockUsers[109]",
      "mockUsers[62]"
    ],
    "approvedParticipants": [
      "mockUsers[85]",
      "mockUsers[77]",
      "mockUsers[104]",
      "mockUsers[71]",
      "mockUsers[130]",
      "mockUsers[136]",
      "mockUsers[140]",
      "mockUsers[109]",
      "mockUsers[62]"
    ],
    "pendingRequests": [],
    "description": "A fun and social gym event open to all skill levels!",
    "price": 0
  },
  {
    "id": "1160",
    "title": "Yunusabad Stadium Football Session",
    "sportType": "SportType.Football",
    "hostId": "mockUsers[68].id",
    "host": mockUsers[68],
    "location": {
      "address": "Yunusabad District, 3-mavze",
      "city": "Tashkent",
      "lat": 41.364559,
      "lng": 69.294178
    },
    "dateTime": "2025-07-30T09:00:00",
    "duration": 60,
    "maxParticipants": 10,
    "participants": [
      "mockUsers[68]",
      "mockUsers[25]",
      "mockUsers[81]",
      "mockUsers[76]",
      "mockUsers[154]",
      "mockUsers[63]",
      "mockUsers[87]",
      "mockUsers[139]",
      "mockUsers[41]",
      "mockUsers[136]"
    ],
    "approvedParticipants": [
      "mockUsers[68]",
      "mockUsers[25]",
      "mockUsers[81]",
      "mockUsers[76]",
      "mockUsers[154]",
      "mockUsers[63]",
      "mockUsers[87]",
      "mockUsers[139]",
      "mockUsers[41]",
      "mockUsers[136]"
    ],
    "pendingRequests": [],
    "description": "A fun and social football event open to all skill levels!",
    "price": 0
  },
  {
    "id": "1161",
    "title": "TTClub Tennis Session",
    "sportType": "SportType.Tennis",
    "hostId": "mockUsers[161].id",
    "host": mockUsers[161],
    "location": {
      "address": "Mahtumquli Street, 105\u0413",
      "city": "Tashkent",
      "lat": 41.35,
      "lng": 69.3
    },
    "dateTime": "2025-08-04T18:00:00",
    "duration": 90,
    "maxParticipants": 8,
    "participants": [
      "mockUsers[161]",
      "mockUsers[10]",
      "mockUsers[130]",
      "mockUsers[64]",
      "mockUsers[171]",
      "mockUsers[113]",
      "mockUsers[65]",
      "mockUsers[186]"
    ],
    "approvedParticipants": [
      "mockUsers[161]",
      "mockUsers[10]",
      "mockUsers[130]",
      "mockUsers[64]",
      "mockUsers[171]",
      "mockUsers[113]",
      "mockUsers[65]",
      "mockUsers[186]"
    ],
    "pendingRequests": [],
    "description": "A fun and social tennis event open to all skill levels!",
    "price": 0
  },
  {
    "id": "1162",
    "title": "Yoga Space Yoga Session",
    "sportType": "SportType.Yoga",
    "hostId": "mockUsers[13].id",
    "host": mockUsers[13],
    "location": {
      "address": "Kichik Beshyogoch street, 56",
      "city": "Tashkent",
      "lat": 41.311,
      "lng": 69.27
    },
    "dateTime": "2025-08-15T18:00:00",
    "duration": 120,
    "maxParticipants": 10,
    "participants": [
      "mockUsers[13]",
      "mockUsers[200]",
      "mockUsers[163]",
      "mockUsers[154]",
      "mockUsers[73]",
      "mockUsers[119]",
      "mockUsers[62]",
      "mockUsers[1]",
      "mockUsers[43]",
      "mockUsers[90]"
    ],
    "approvedParticipants": [
      "mockUsers[13]",
      "mockUsers[200]",
      "mockUsers[163]",
      "mockUsers[154]",
      "mockUsers[73]",
      "mockUsers[119]",
      "mockUsers[62]",
      "mockUsers[1]",
      "mockUsers[43]",
      "mockUsers[90]"
    ],
    "pendingRequests": [],
    "description": "A fun and social yoga event open to all skill levels!",
    "price": 0
  },
  {
    "id": "1163",
    "title": "Yunusabad Stadium Football Session",
    "sportType": "SportType.Football",
    "hostId": "mockUsers[140].id",
    "host": mockUsers[140],
    "location": {
      "address": "Yunusabad District, 3-mavze",
      "city": "Tashkent",
      "lat": 41.364559,
      "lng": 69.294178
    },
    "dateTime": "2025-08-17T09:00:00",
    "duration": 60,
    "maxParticipants": 8,
    "participants": [
      "mockUsers[140]",
      "mockUsers[62]",
      "mockUsers[71]",
      "mockUsers[129]",
      "mockUsers[114]",
      "mockUsers[30]",
      "mockUsers[199]",
      "mockUsers[79]"
    ],
    "approvedParticipants": [
      "mockUsers[140]",
      "mockUsers[62]",
      "mockUsers[71]",
      "mockUsers[129]",
      "mockUsers[114]",
      "mockUsers[30]",
      "mockUsers[199]",
      "mockUsers[79]"
    ],
    "pendingRequests": [],
    "description": "A fun and social football event open to all skill levels!",
    "price": 0
  },
  {
    "id": "1164",
    "title": "Anhor Park Rink Other Session",
    "sportType": "SportType.Other",
    "hostId": "mockUsers[103].id",
    "host": mockUsers[103],
    "location": {
      "address": "Labzak Street, Shaykhantaur",
      "city": "Tashkent",
      "lat": 41.31,
      "lng": 69.24
    },
    "dateTime": "2025-07-19T19:00:00",
    "duration": 90,
    "maxParticipants": 10,
    "participants": [
      "mockUsers[103]",
      "mockUsers[69]",
      "mockUsers[169]",
      "mockUsers[162]",
      "mockUsers[70]",
      "mockUsers[22]",
      "mockUsers[191]",
      "mockUsers[148]",
      "mockUsers[185]",
      "mockUsers[117]"
    ],
    "approvedParticipants": [
      "mockUsers[103]",
      "mockUsers[69]",
      "mockUsers[169]",
      "mockUsers[162]",
      "mockUsers[70]",
      "mockUsers[22]",
      "mockUsers[191]",
      "mockUsers[148]",
      "mockUsers[185]",
      "mockUsers[117]"
    ],
    "pendingRequests": [],
    "description": "A fun and social other event open to all skill levels!",
    "price": 0
  },
  {
    "id": "1165",
    "title": "Aqualand Swimming Session",
    "sportType": "SportType.Swimming",
    "hostId": "mockUsers[169].id",
    "host": mockUsers[169],
    "location": {
      "address": "Chinabad Street, 61A",
      "city": "Tashkent",
      "lat": 41.36,
      "lng": 69.29
    },
    "dateTime": "2025-07-16T07:00:00",
    "duration": 90,
    "maxParticipants": 9,
    "participants": [
      "mockUsers[169]",
      "mockUsers[78]",
      "mockUsers[130]",
      "mockUsers[172]",
      "mockUsers[199]",
      "mockUsers[184]",
      "mockUsers[158]",
      "mockUsers[156]",
      "mockUsers[15]"
    ],
    "approvedParticipants": [
      "mockUsers[169]",
      "mockUsers[78]",
      "mockUsers[130]",
      "mockUsers[172]",
      "mockUsers[199]",
      "mockUsers[184]",
      "mockUsers[158]",
      "mockUsers[156]",
      "mockUsers[15]"
    ],
    "pendingRequests": [],
    "description": "A fun and social swimming event open to all skill levels!",
    "price": 0
  },
  {
    "id": "1166",
    "title": "Tennis Court Tennis Session",
    "sportType": "SportType.Tennis",
    "hostId": "mockUsers[7].id",
    "host": mockUsers[7],
    "location": {
      "address": "Oqqurghon Street, 16",
      "city": "Tashkent",
      "lat": 41.32,
      "lng": 69.285
    },
    "dateTime": "2025-08-25T19:00:00",
    "duration": 60,
    "maxParticipants": 5,
    "participants": [
      "mockUsers[7]",
      "mockUsers[154]",
      "mockUsers[64]",
      "mockUsers[108]",
      "mockUsers[196]"
    ],
    "approvedParticipants": [
      "mockUsers[7]",
      "mockUsers[154]",
      "mockUsers[64]",
      "mockUsers[108]",
      "mockUsers[196]"
    ],
    "pendingRequests": [],
    "description": "A fun and social tennis event open to all skill levels!",
    "price": 0
  },
  {
    "id": "1167",
    "title": "Yunusabad Stadium Football Session",
    "sportType": "SportType.Football",
    "hostId": "mockUsers[194].id",
    "host": mockUsers[194],
    "location": {
      "address": "Yunusabad District, 3-mavze",
      "city": "Tashkent",
      "lat": 41.364559,
      "lng": 69.294178
    },
    "dateTime": "2025-08-21T07:00:00",
    "duration": 120,
    "maxParticipants": 6,
    "participants": [
      "mockUsers[194]",
      "mockUsers[3]",
      "mockUsers[148]",
      "mockUsers[33]",
      "mockUsers[34]",
      "mockUsers[174]"
    ],
    "approvedParticipants": [
      "mockUsers[194]",
      "mockUsers[3]",
      "mockUsers[148]",
      "mockUsers[33]",
      "mockUsers[34]",
      "mockUsers[174]"
    ],
    "pendingRequests": [],
    "description": "A fun and social football event open to all skill levels!",
    "price": 0
  },
  {
    "id": "1168",
    "title": "Yunusabad Stadium Football Session",
    "sportType": "SportType.Football",
    "hostId": "mockUsers[69].id",
    "host": mockUsers[69],
    "location": {
      "address": "Yunusabad District, 3-mavze",
      "city": "Tashkent",
      "lat": 41.364559,
      "lng": 69.294178
    },
    "dateTime": "2025-07-24T17:00:00",
    "duration": 120,
    "maxParticipants": 8,
    "participants": [
      "mockUsers[69]",
      "mockUsers[85]",
      "mockUsers[180]",
      "mockUsers[107]",
      "mockUsers[164]",
      "mockUsers[97]",
      "mockUsers[50]",
      "mockUsers[9]"
    ],
    "approvedParticipants": [
      "mockUsers[69]",
      "mockUsers[85]",
      "mockUsers[180]",
      "mockUsers[107]",
      "mockUsers[164]",
      "mockUsers[97]",
      "mockUsers[50]",
      "mockUsers[9]"
    ],
    "pendingRequests": [],
    "description": "A fun and social football event open to all skill levels!",
    "price": 0
  },
  {
    "id": "1169",
    "title": "TTClub Tennis Session",
    "sportType": "SportType.Tennis",
    "hostId": "mockUsers[176].id",
    "host": mockUsers[176],
    "location": {
      "address": "Mahtumquli Street, 105\u0413",
      "city": "Tashkent",
      "lat": 41.35,
      "lng": 69.3
    },
    "dateTime": "2025-08-12T07:00:00",
    "duration": 120,
    "maxParticipants": 4,
    "participants": [
      "mockUsers[176]",
      "mockUsers[64]",
      "mockUsers[109]",
      "mockUsers[83]"
    ],
    "approvedParticipants": [
      "mockUsers[176]",
      "mockUsers[64]",
      "mockUsers[109]",
      "mockUsers[83]"
    ],
    "pendingRequests": [],
    "description": "A fun and social tennis event open to all skill levels!",
    "price": 0
  },
  {
    "id": "1170",
    "title": "Anhor Park Rink Other Session",
    "sportType": "SportType.Other",
    "hostId": "mockUsers[117].id",
    "host": mockUsers[117],
    "location": {
      "address": "Labzak Street, Shaykhantaur",
      "city": "Tashkent",
      "lat": 41.31,
      "lng": 69.24
    },
    "dateTime": "2025-07-17T18:00:00",
    "duration": 90,
    "maxParticipants": 6,
    "participants": [
      "mockUsers[117]",
      "mockUsers[115]",
      "mockUsers[29]",
      "mockUsers[66]",
      "mockUsers[194]",
      "mockUsers[140]"
    ],
    "approvedParticipants": [
      "mockUsers[117]",
      "mockUsers[115]",
      "mockUsers[29]",
      "mockUsers[66]",
      "mockUsers[194]",
      "mockUsers[140]"
    ],
    "pendingRequests": [],
    "description": "A fun and social other event open to all skill levels!",
    "price": 0
  },
  {
    "id": "1171",
    "title": "Yoga Space Yoga Session",
    "sportType": "SportType.Yoga",
    "hostId": "mockUsers[190].id",
    "host": mockUsers[190],
    "location": {
      "address": "Kichik Beshyogoch street, 56",
      "city": "Tashkent",
      "lat": 41.311,
      "lng": 69.27
    },
    "dateTime": "2025-08-16T17:00:00",
    "duration": 90,
    "maxParticipants": 9,
    "participants": [
      "mockUsers[190]",
      "mockUsers[44]",
      "mockUsers[121]",
      "mockUsers[39]",
      "mockUsers[171]",
      "mockUsers[18]",
      "mockUsers[196]",
      "mockUsers[76]",
      "mockUsers[17]"
    ],
    "approvedParticipants": [
      "mockUsers[190]",
      "mockUsers[44]",
      "mockUsers[121]",
      "mockUsers[39]",
      "mockUsers[171]",
      "mockUsers[18]",
      "mockUsers[196]",
      "mockUsers[76]",
      "mockUsers[17]"
    ],
    "pendingRequests": [],
    "description": "A fun and social yoga event open to all skill levels!",
    "price": 0
  },
  {
    "id": "1172",
    "title": "TTClub Tennis Session",
    "sportType": "SportType.Tennis",
    "hostId": "mockUsers[82].id",
    "host": mockUsers[82],
    "location": {
      "address": "Mahtumquli Street, 105\u0413",
      "city": "Tashkent",
      "lat": 41.35,
      "lng": 69.3
    },
    "dateTime": "2025-08-10T09:00:00",
    "duration": 90,
    "maxParticipants": 7,
    "participants": [
      "mockUsers[82]",
      "mockUsers[109]",
      "mockUsers[151]",
      "mockUsers[63]",
      "mockUsers[92]",
      "mockUsers[79]",
      "mockUsers[40]"
    ],
    "approvedParticipants": [
      "mockUsers[82]",
      "mockUsers[109]",
      "mockUsers[151]",
      "mockUsers[63]",
      "mockUsers[92]",
      "mockUsers[79]",
      "mockUsers[40]"
    ],
    "pendingRequests": [],
    "description": "A fun and social tennis event open to all skill levels!",
    "price": 0
  },
  {
    "id": "1173",
    "title": "Tennis Court Tennis Session",
    "sportType": "SportType.Tennis",
    "hostId": "mockUsers[71].id",
    "host": mockUsers[71],
    "location": {
      "address": "Oqqurghon Street, 16",
      "city": "Tashkent",
      "lat": 41.32,
      "lng": 69.285
    },
    "dateTime": "2025-08-14T17:00:00",
    "duration": 120,
    "maxParticipants": 9,
    "participants": [
      "mockUsers[71]",
      "mockUsers[75]",
      "mockUsers[135]",
      "mockUsers[104]",
      "mockUsers[8]",
      "mockUsers[143]",
      "mockUsers[52]",
      "mockUsers[116]",
      "mockUsers[191]"
    ],
    "approvedParticipants": [
      "mockUsers[71]",
      "mockUsers[75]",
      "mockUsers[135]",
      "mockUsers[104]",
      "mockUsers[8]",
      "mockUsers[143]",
      "mockUsers[52]",
      "mockUsers[116]",
      "mockUsers[191]"
    ],
    "pendingRequests": [],
    "description": "A fun and social tennis event open to all skill levels!",
    "price": 0
  },
  {
    "id": "1174",
    "title": "Chamanzar Field Football Session",
    "sportType": "SportType.Football",
    "hostId": "mockUsers[176].id",
    "host": mockUsers[176],
    "location": {
      "address": "Uchtepa District, Chamanzar Mahallah",
      "city": "Tashkent",
      "lat": 41.295,
      "lng": 69.211
    },
    "dateTime": "2025-08-25T18:00:00",
    "duration": 60,
    "maxParticipants": 4,
    "participants": [
      "mockUsers[176]",
      "mockUsers[193]",
      "mockUsers[151]",
      "mockUsers[85]"
    ],
    "approvedParticipants": [
      "mockUsers[176]",
      "mockUsers[193]",
      "mockUsers[151]",
      "mockUsers[85]"
    ],
    "pendingRequests": [],
    "description": "A fun and social football event open to all skill levels!",
    "price": 0
  },
  {
    "id": "1175",
    "title": "Chamanzar Field Football Session",
    "sportType": "SportType.Football",
    "hostId": "mockUsers[45].id",
    "host": mockUsers[45],
    "location": {
      "address": "Uchtepa District, Chamanzar Mahallah",
      "city": "Tashkent",
      "lat": 41.295,
      "lng": 69.211
    },
    "dateTime": "2025-07-21T07:00:00",
    "duration": 120,
    "maxParticipants": 6,
    "participants": [
      "mockUsers[45]",
      "mockUsers[73]",
      "mockUsers[189]",
      "mockUsers[124]",
      "mockUsers[132]",
      "mockUsers[161]"
    ],
    "approvedParticipants": [
      "mockUsers[45]",
      "mockUsers[73]",
      "mockUsers[189]",
      "mockUsers[124]",
      "mockUsers[132]",
      "mockUsers[161]"
    ],
    "pendingRequests": [],
    "description": "A fun and social football event open to all skill levels!",
    "price": 0
  },
  {
    "id": "1176",
    "title": "TTClub Tennis Session",
    "sportType": "SportType.Tennis",
    "hostId": "mockUsers[190].id",
    "host": mockUsers[190],
    "location": {
      "address": "Mahtumquli Street, 105\u0413",
      "city": "Tashkent",
      "lat": 41.35,
      "lng": 69.3
    },
    "dateTime": "2025-08-26T09:00:00",
    "duration": 90,
    "maxParticipants": 8,
    "participants": [
      "mockUsers[190]",
      "mockUsers[24]",
      "mockUsers[60]",
      "mockUsers[157]",
      "mockUsers[129]",
      "mockUsers[36]",
      "mockUsers[151]",
      "mockUsers[70]"
    ],
    "approvedParticipants": [
      "mockUsers[190]",
      "mockUsers[24]",
      "mockUsers[60]",
      "mockUsers[157]",
      "mockUsers[129]",
      "mockUsers[36]",
      "mockUsers[151]",
      "mockUsers[70]"
    ],
    "pendingRequests": [],
    "description": "A fun and social tennis event open to all skill levels!",
    "price": 0
  },
  {
    "id": "1177",
    "title": "TTClub Tennis Session",
    "sportType": "SportType.Tennis",
    "hostId": "mockUsers[130].id",
    "host": mockUsers[130],
    "location": {
      "address": "Mahtumquli Street, 105\u0413",
      "city": "Tashkent",
      "lat": 41.35,
      "lng": 69.3
    },
    "dateTime": "2025-08-30T18:00:00",
    "duration": 120,
    "maxParticipants": 6,
    "participants": [
      "mockUsers[130]",
      "mockUsers[5]",
      "mockUsers[193]",
      "mockUsers[185]",
      "mockUsers[161]",
      "mockUsers[91]"
    ],
    "approvedParticipants": [
      "mockUsers[130]",
      "mockUsers[5]",
      "mockUsers[193]",
      "mockUsers[185]",
      "mockUsers[161]",
      "mockUsers[91]"
    ],
    "pendingRequests": [],
    "description": "A fun and social tennis event open to all skill levels!",
    "price": 0
  },
  {
    "id": "1178",
    "title": "Yoga Space Yoga Session",
    "sportType": "SportType.Yoga",
    "hostId": "mockUsers[162].id",
    "host": mockUsers[162],
    "location": {
      "address": "Kichik Beshyogoch street, 56",
      "city": "Tashkent",
      "lat": 41.311,
      "lng": 69.27
    },
    "dateTime": "2025-08-20T17:00:00",
    "duration": 60,
    "maxParticipants": 5,
    "participants": [
      "mockUsers[162]",
      "mockUsers[178]",
      "mockUsers[18]",
      "mockUsers[160]",
      "mockUsers[93]"
    ],
    "approvedParticipants": [
      "mockUsers[162]",
      "mockUsers[178]",
      "mockUsers[18]",
      "mockUsers[160]",
      "mockUsers[93]"
    ],
    "pendingRequests": [],
    "description": "A fun and social yoga event open to all skill levels!",
    "price": 0
  },
  {
    "id": "1179",
    "title": "Yoga Space Yoga Session",
    "sportType": "SportType.Yoga",
    "hostId": "mockUsers[27].id",
    "host": mockUsers[27],
    "location": {
      "address": "Kichik Beshyogoch street, 56",
      "city": "Tashkent",
      "lat": 41.311,
      "lng": 69.27
    },
    "dateTime": "2025-07-25T07:00:00",
    "duration": 90,
    "maxParticipants": 7,
    "participants": [
      "mockUsers[27]",
      "mockUsers[134]",
      "mockUsers[64]",
      "mockUsers[144]",
      "mockUsers[159]",
      "mockUsers[39]",
      "mockUsers[153]"
    ],
    "approvedParticipants": [
      "mockUsers[27]",
      "mockUsers[134]",
      "mockUsers[64]",
      "mockUsers[144]",
      "mockUsers[159]",
      "mockUsers[39]",
      "mockUsers[153]"
    ],
    "pendingRequests": [],
    "description": "A fun and social yoga event open to all skill levels!",
    "price": 0
  },
  {
    "id": "1180",
    "title": "Tennis Court Tennis Session",
    "sportType": "SportType.Tennis",
    "hostId": "mockUsers[196].id",
    "host": mockUsers[196],
    "location": {
      "address": "Oqqurghon Street, 16",
      "city": "Tashkent",
      "lat": 41.32,
      "lng": 69.285
    },
    "dateTime": "2025-08-30T09:00:00",
    "duration": 120,
    "maxParticipants": 6,
    "participants": [
      "mockUsers[196]",
      "mockUsers[36]",
      "mockUsers[125]",
      "mockUsers[22]",
      "mockUsers[110]",
      "mockUsers[88]"
    ],
    "approvedParticipants": [
      "mockUsers[196]",
      "mockUsers[36]",
      "mockUsers[125]",
      "mockUsers[22]",
      "mockUsers[110]",
      "mockUsers[88]"
    ],
    "pendingRequests": [],
    "description": "A fun and social tennis event open to all skill levels!",
    "price": 0
  },
  {
    "id": "1181",
    "title": "Fitness First Gym Session",
    "sportType": "SportType.Gym",
    "hostId": "mockUsers[152].id",
    "host": mockUsers[152],
    "location": {
      "address": "Afrosiyob Street, 41",
      "city": "Tashkent",
      "lat": 41.31,
      "lng": 69.28
    },
    "dateTime": "2025-08-29T17:00:00",
    "duration": 120,
    "maxParticipants": 11,
    "participants": [
      "mockUsers[152]",
      "mockUsers[185]",
      "mockUsers[46]",
      "mockUsers[99]",
      "mockUsers[95]",
      "mockUsers[107]",
      "mockUsers[151]",
      "mockUsers[181]",
      "mockUsers[76]",
      "mockUsers[141]",
      "mockUsers[30]"
    ],
    "approvedParticipants": [
      "mockUsers[152]",
      "mockUsers[185]",
      "mockUsers[46]",
      "mockUsers[99]",
      "mockUsers[95]",
      "mockUsers[107]",
      "mockUsers[151]",
      "mockUsers[181]",
      "mockUsers[76]",
      "mockUsers[141]",
      "mockUsers[30]"
    ],
    "pendingRequests": [],
    "description": "A fun and social gym event open to all skill levels!",
    "price": 0
  },
  {
    "id": "1182",
    "title": "TTClub Tennis Session",
    "sportType": "SportType.Tennis",
    "hostId": "mockUsers[7].id",
    "host": mockUsers[7],
    "location": {
      "address": "Mahtumquli Street, 105\u0413",
      "city": "Tashkent",
      "lat": 41.35,
      "lng": 69.3
    },
    "dateTime": "2025-07-23T18:00:00",
    "duration": 90,
    "maxParticipants": 7,
    "participants": [
      "mockUsers[7]",
      "mockUsers[85]",
      "mockUsers[164]",
      "mockUsers[154]",
      "mockUsers[3]",
      "mockUsers[126]",
      "mockUsers[136]"
    ],
    "approvedParticipants": [
      "mockUsers[7]",
      "mockUsers[85]",
      "mockUsers[164]",
      "mockUsers[154]",
      "mockUsers[3]",
      "mockUsers[126]",
      "mockUsers[136]"
    ],
    "pendingRequests": [],
    "description": "A fun and social tennis event open to all skill levels!",
    "price": 0
  },
  {
    "id": "1183",
    "title": "River Park Running Session",
    "sportType": "SportType.Running",
    "hostId": "mockUsers[31].id",
    "host": mockUsers[31],
    "location": {
      "address": "Tashkent",
      "city": "Tashkent",
      "lat": 41.33,
      "lng": 69.31
    },
    "dateTime": "2025-08-22T09:00:00",
    "duration": 90,
    "maxParticipants": 9,
    "participants": [
      "mockUsers[31]",
      "mockUsers[18]",
      "mockUsers[38]",
      "mockUsers[167]",
      "mockUsers[101]",
      "mockUsers[166]",
      "mockUsers[34]",
      "mockUsers[137]",
      "mockUsers[50]"
    ],
    "approvedParticipants": [
      "mockUsers[31]",
      "mockUsers[18]",
      "mockUsers[38]",
      "mockUsers[167]",
      "mockUsers[101]",
      "mockUsers[166]",
      "mockUsers[34]",
      "mockUsers[137]",
      "mockUsers[50]"
    ],
    "pendingRequests": [],
    "description": "A fun and social running event open to all skill levels!",
    "price": 0
  },
  {
    "id": "1184",
    "title": "River Park Running Session",
    "sportType": "SportType.Running",
    "hostId": "mockUsers[50].id",
    "host": mockUsers[50],
    "location": {
      "address": "Tashkent",
      "city": "Tashkent",
      "lat": 41.33,
      "lng": 69.31
    },
    "dateTime": "2025-07-15T09:00:00",
    "duration": 120,
    "maxParticipants": 11,
    "participants": [
      "mockUsers[50]",
      "mockUsers[104]",
      "mockUsers[97]",
      "mockUsers[63]",
      "mockUsers[70]",
      "mockUsers[197]",
      "mockUsers[23]",
      "mockUsers[31]",
      "mockUsers[38]",
      "mockUsers[113]",
      "mockUsers[141]"
    ],
    "approvedParticipants": [
      "mockUsers[50]",
      "mockUsers[104]",
      "mockUsers[97]",
      "mockUsers[63]",
      "mockUsers[70]",
      "mockUsers[197]",
      "mockUsers[23]",
      "mockUsers[31]",
      "mockUsers[38]",
      "mockUsers[113]",
      "mockUsers[141]"
    ],
    "pendingRequests": [],
    "description": "A fun and social running event open to all skill levels!",
    "price": 0
  },
  {
    "id": "1185",
    "title": "Tennis Court Tennis Session",
    "sportType": "SportType.Tennis",
    "hostId": "mockUsers[189].id",
    "host": mockUsers[189],
    "location": {
      "address": "Oqqurghon Street, 16",
      "city": "Tashkent",
      "lat": 41.32,
      "lng": 69.285
    },
    "dateTime": "2025-07-27T07:00:00",
    "duration": 90,
    "maxParticipants": 9,
    "participants": [
      "mockUsers[189]",
      "mockUsers[187]",
      "mockUsers[12]",
      "mockUsers[94]",
      "mockUsers[75]",
      "mockUsers[151]",
      "mockUsers[74]",
      "mockUsers[66]",
      "mockUsers[69]"
    ],
    "approvedParticipants": [
      "mockUsers[189]",
      "mockUsers[187]",
      "mockUsers[12]",
      "mockUsers[94]",
      "mockUsers[75]",
      "mockUsers[151]",
      "mockUsers[74]",
      "mockUsers[66]",
      "mockUsers[69]"
    ],
    "pendingRequests": [],
    "description": "A fun and social tennis event open to all skill levels!",
    "price": 0
  },
  {
    "id": "1186",
    "title": "TTClub Tennis Session",
    "sportType": "SportType.Tennis",
    "hostId": "mockUsers[159].id",
    "host": mockUsers[159],
    "location": {
      "address": "Mahtumquli Street, 105\u0413",
      "city": "Tashkent",
      "lat": 41.35,
      "lng": 69.3
    },
    "dateTime": "2025-08-29T09:00:00",
    "duration": 90,
    "maxParticipants": 10,
    "participants": [
      "mockUsers[159]",
      "mockUsers[105]",
      "mockUsers[144]",
      "mockUsers[68]",
      "mockUsers[13]",
      "mockUsers[2]",
      "mockUsers[32]",
      "mockUsers[135]",
      "mockUsers[91]",
      "mockUsers[167]"
    ],
    "approvedParticipants": [
      "mockUsers[159]",
      "mockUsers[105]",
      "mockUsers[144]",
      "mockUsers[68]",
      "mockUsers[13]",
      "mockUsers[2]",
      "mockUsers[32]",
      "mockUsers[135]",
      "mockUsers[91]",
      "mockUsers[167]"
    ],
    "pendingRequests": [],
    "description": "A fun and social tennis event open to all skill levels!",
    "price": 0
  },
  {
    "id": "1187",
    "title": "Yoga Space Yoga Session",
    "sportType": "SportType.Yoga",
    "hostId": "mockUsers[11].id",
    "host": mockUsers[11],
    "location": {
      "address": "Kichik Beshyogoch street, 56",
      "city": "Tashkent",
      "lat": 41.311,
      "lng": 69.27
    },
    "dateTime": "2025-08-06T18:00:00",
    "duration": 60,
    "maxParticipants": 6,
    "participants": [
      "mockUsers[11]",
      "mockUsers[2]",
      "mockUsers[181]",
      "mockUsers[129]",
      "mockUsers[105]",
      "mockUsers[88]"
    ],
    "approvedParticipants": [
      "mockUsers[11]",
      "mockUsers[2]",
      "mockUsers[181]",
      "mockUsers[129]",
      "mockUsers[105]",
      "mockUsers[88]"
    ],
    "pendingRequests": [],
    "description": "A fun and social yoga event open to all skill levels!",
    "price": 0
  },
  {
    "id": "1188",
    "title": "Aqualand Swimming Session",
    "sportType": "SportType.Swimming",
    "hostId": "mockUsers[150].id",
    "host": mockUsers[150],
    "location": {
      "address": "Chinabad Street, 61A",
      "city": "Tashkent",
      "lat": 41.36,
      "lng": 69.29
    },
    "dateTime": "2025-08-29T17:00:00",
    "duration": 60,
    "maxParticipants": 5,
    "participants": [
      "mockUsers[150]",
      "mockUsers[12]",
      "mockUsers[94]",
      "mockUsers[32]",
      "mockUsers[42]"
    ],
    "approvedParticipants": [
      "mockUsers[150]",
      "mockUsers[12]",
      "mockUsers[94]",
      "mockUsers[32]",
      "mockUsers[42]"
    ],
    "pendingRequests": [],
    "description": "A fun and social swimming event open to all skill levels!",
    "price": 0
  },
  {
    "id": "1189",
    "title": "River Park Running Session",
    "sportType": "SportType.Running",
    "hostId": "mockUsers[184].id",
    "host": mockUsers[184],
    "location": {
      "address": "Tashkent",
      "city": "Tashkent",
      "lat": 41.33,
      "lng": 69.31
    },
    "dateTime": "2025-08-14T19:00:00",
    "duration": 120,
    "maxParticipants": 5,
    "participants": [
      "mockUsers[184]",
      "mockUsers[36]",
      "mockUsers[142]",
      "mockUsers[20]",
      "mockUsers[34]"
    ],
    "approvedParticipants": [
      "mockUsers[184]",
      "mockUsers[36]",
      "mockUsers[142]",
      "mockUsers[20]",
      "mockUsers[34]"
    ],
    "pendingRequests": [],
    "description": "A fun and social running event open to all skill levels!",
    "price": 0
  },
  {
    "id": "1190",
    "title": "TTClub Tennis Session",
    "sportType": "SportType.Tennis",
    "hostId": "mockUsers[82].id",
    "host": mockUsers[82],
    "location": {
      "address": "Mahtumquli Street, 105\u0413",
      "city": "Tashkent",
      "lat": 41.35,
      "lng": 69.3
    },
    "dateTime": "2025-08-03T07:00:00",
    "duration": 120,
    "maxParticipants": 9,
    "participants": [
      "mockUsers[82]",
      "mockUsers[195]",
      "mockUsers[45]",
      "mockUsers[162]",
      "mockUsers[48]",
      "mockUsers[81]",
      "mockUsers[105]",
      "mockUsers[181]",
      "mockUsers[176]"
    ],
    "approvedParticipants": [
      "mockUsers[82]",
      "mockUsers[195]",
      "mockUsers[45]",
      "mockUsers[162]",
      "mockUsers[48]",
      "mockUsers[81]",
      "mockUsers[105]",
      "mockUsers[181]",
      "mockUsers[176]"
    ],
    "pendingRequests": [],
    "description": "A fun and social tennis event open to all skill levels!",
    "price": 0
  },
  {
    "id": "1191",
    "title": "TTClub Tennis Session",
    "sportType": "SportType.Tennis",
    "hostId": "mockUsers[177].id",
    "host": mockUsers[177],
    "location": {
      "address": "Mahtumquli Street, 105\u0413",
      "city": "Tashkent",
      "lat": 41.35,
      "lng": 69.3
    },
    "dateTime": "2025-07-17T19:00:00",
    "duration": 60,
    "maxParticipants": 9,
    "participants": [
      "mockUsers[177]",
      "mockUsers[180]",
      "mockUsers[82]",
      "mockUsers[123]",
      "mockUsers[83]",
      "mockUsers[160]",
      "mockUsers[57]",
      "mockUsers[8]",
      "mockUsers[88]"
    ],
    "approvedParticipants": [
      "mockUsers[177]",
      "mockUsers[180]",
      "mockUsers[82]",
      "mockUsers[123]",
      "mockUsers[83]",
      "mockUsers[160]",
      "mockUsers[57]",
      "mockUsers[8]",
      "mockUsers[88]"
    ],
    "pendingRequests": [],
    "description": "A fun and social tennis event open to all skill levels!",
    "price": 0
  },
  {
    "id": "1192",
    "title": "Aqualand Swimming Session",
    "sportType": "SportType.Swimming",
    "hostId": "mockUsers[139].id",
    "host": mockUsers[139],
    "location": {
      "address": "Chinabad Street, 61A",
      "city": "Tashkent",
      "lat": 41.36,
      "lng": 69.29
    },
    "dateTime": "2025-07-28T07:00:00",
    "duration": 120,
    "maxParticipants": 5,
    "participants": [
      "mockUsers[139]",
      "mockUsers[34]",
      "mockUsers[91]",
      "mockUsers[136]",
      "mockUsers[26]"
    ],
    "approvedParticipants": [
      "mockUsers[139]",
      "mockUsers[34]",
      "mockUsers[91]",
      "mockUsers[136]",
      "mockUsers[26]"
    ],
    "pendingRequests": [],
    "description": "A fun and social swimming event open to all skill levels!",
    "price": 0
  },
  {
    "id": "1193",
    "title": "Yoga Space Yoga Session",
    "sportType": "SportType.Yoga",
    "hostId": "mockUsers[171].id",
    "host": mockUsers[171],
    "location": {
      "address": "Kichik Beshyogoch street, 56",
      "city": "Tashkent",
      "lat": 41.311,
      "lng": 69.27
    },
    "dateTime": "2025-08-21T18:00:00",
    "duration": 60,
    "maxParticipants": 5,
    "participants": [
      "mockUsers[171]",
      "mockUsers[188]",
      "mockUsers[162]",
      "mockUsers[39]",
      "mockUsers[141]"
    ],
    "approvedParticipants": [
      "mockUsers[171]",
      "mockUsers[188]",
      "mockUsers[162]",
      "mockUsers[39]",
      "mockUsers[141]"
    ],
    "pendingRequests": [],
    "description": "A fun and social yoga event open to all skill levels!",
    "price": 0
  },
  {
    "id": "1194",
    "title": "Yoga Space Yoga Session",
    "sportType": "SportType.Yoga",
    "hostId": "mockUsers[98].id",
    "host": mockUsers[98],
    "location": {
      "address": "Kichik Beshyogoch street, 56",
      "city": "Tashkent",
      "lat": 41.311,
      "lng": 69.27
    },
    "dateTime": "2025-08-10T09:00:00",
    "duration": 120,
    "maxParticipants": 11,
    "participants": [
      "mockUsers[98]",
      "mockUsers[181]",
      "mockUsers[147]",
      "mockUsers[139]",
      "mockUsers[8]",
      "mockUsers[4]",
      "mockUsers[0]",
      "mockUsers[140]",
      "mockUsers[198]",
      "mockUsers[192]",
      "mockUsers[7]"
    ],
    "approvedParticipants": [
      "mockUsers[98]",
      "mockUsers[181]",
      "mockUsers[147]",
      "mockUsers[139]",
      "mockUsers[8]",
      "mockUsers[4]",
      "mockUsers[0]",
      "mockUsers[140]",
      "mockUsers[198]",
      "mockUsers[192]",
      "mockUsers[7]"
    ],
    "pendingRequests": [],
    "description": "A fun and social yoga event open to all skill levels!",
    "price": 0
  },
  {
    "id": "1195",
    "title": "Yunusabad Stadium Football Session",
    "sportType": "SportType.Football",
    "hostId": "mockUsers[161].id",
    "host": mockUsers[161],
    "location": {
      "address": "Yunusabad District, 3-mavze",
      "city": "Tashkent",
      "lat": 41.364559,
      "lng": 69.294178
    },
    "dateTime": "2025-08-30T18:00:00",
    "duration": 90,
    "maxParticipants": 9,
    "participants": [
      "mockUsers[161]",
      "mockUsers[180]",
      "mockUsers[44]",
      "mockUsers[151]",
      "mockUsers[6]",
      "mockUsers[55]",
      "mockUsers[122]",
      "mockUsers[155]",
      "mockUsers[71]"
    ],
    "approvedParticipants": [
      "mockUsers[161]",
      "mockUsers[180]",
      "mockUsers[44]",
      "mockUsers[151]",
      "mockUsers[6]",
      "mockUsers[55]",
      "mockUsers[122]",
      "mockUsers[155]",
      "mockUsers[71]"
    ],
    "pendingRequests": [],
    "description": "A fun and social football event open to all skill levels!",
    "price": 0
  },
  {
    "id": "1196",
    "title": "Fitness First Gym Session",
    "sportType": "SportType.Gym",
    "hostId": "mockUsers[96].id",
    "host": mockUsers[96],
    "location": {
      "address": "Afrosiyob Street, 41",
      "city": "Tashkent",
      "lat": 41.31,
      "lng": 69.28
    },
    "dateTime": "2025-07-16T07:00:00",
    "duration": 90,
    "maxParticipants": 5,
    "participants": [
      "mockUsers[96]",
      "mockUsers[47]",
      "mockUsers[129]",
      "mockUsers[8]",
      "mockUsers[100]"
    ],
    "approvedParticipants": [
      "mockUsers[96]",
      "mockUsers[47]",
      "mockUsers[129]",
      "mockUsers[8]",
      "mockUsers[100]"
    ],
    "pendingRequests": [],
    "description": "A fun and social gym event open to all skill levels!",
    "price": 0
  },
  {
    "id": "1197",
    "title": "River Park Running Session",
    "sportType": "SportType.Running",
    "hostId": "mockUsers[138].id",
    "host": mockUsers[138],
    "location": {
      "address": "Tashkent",
      "city": "Tashkent",
      "lat": 41.33,
      "lng": 69.31
    },
    "dateTime": "2025-08-03T17:00:00",
    "duration": 60,
    "maxParticipants": 6,
    "participants": [
      "mockUsers[138]",
      "mockUsers[27]",
      "mockUsers[172]",
      "mockUsers[53]",
      "mockUsers[121]",
      "mockUsers[21]"
    ],
    "approvedParticipants": [
      "mockUsers[138]",
      "mockUsers[27]",
      "mockUsers[172]",
      "mockUsers[53]",
      "mockUsers[121]",
      "mockUsers[21]"
    ],
    "pendingRequests": [],
    "description": "A fun and social running event open to all skill levels!",
    "price": 0
  },
  {
    "id": "1198",
    "title": "TTClub Tennis Session",
    "sportType": "SportType.Tennis",
    "hostId": "mockUsers[23].id",
    "host": mockUsers[23],
    "location": {
      "address": "Mahtumquli Street, 105\u0413",
      "city": "Tashkent",
      "lat": 41.35,
      "lng": 69.3
    },
    "dateTime": "2025-07-16T17:00:00",
    "duration": 60,
    "maxParticipants": 7,
    "participants": [
      "mockUsers[23]",
      "mockUsers[124]",
      "mockUsers[186]",
      "mockUsers[130]",
      "mockUsers[29]",
      "mockUsers[63]",
      "mockUsers[45]"
    ],
    "approvedParticipants": [
      "mockUsers[23]",
      "mockUsers[124]",
      "mockUsers[186]",
      "mockUsers[130]",
      "mockUsers[29]",
      "mockUsers[63]",
      "mockUsers[45]"
    ],
    "pendingRequests": [],
    "description": "A fun and social tennis event open to all skill levels!",
    "price": 0
  },
  {
    "id": "1199",
    "title": "Yoga Space Yoga Session",
    "sportType": "SportType.Yoga",
    "hostId": "mockUsers[136].id",
    "host": mockUsers[136],
    "location": {
      "address": "Kichik Beshyogoch street, 56",
      "city": "Tashkent",
      "lat": 41.311,
      "lng": 69.27
    },
    "dateTime": "2025-08-09T18:00:00",
    "duration": 120,
    "maxParticipants": 5,
    "participants": [
      "mockUsers[136]",
      "mockUsers[150]",
      "mockUsers[162]",
      "mockUsers[82]",
      "mockUsers[161]"
    ],
    "approvedParticipants": [
      "mockUsers[136]",
      "mockUsers[150]",
      "mockUsers[162]",
      "mockUsers[82]",
      "mockUsers[161]"
    ],
    "pendingRequests": [],
    "description": "A fun and social yoga event open to all skill levels!",
    "price": 0
  },
  {
    "id": "307",
    "title": "Evening Football Match",
    "sportType": "SportType.Football",
    "hostId": "mockUsers[66].id",
    "host": mockUsers[66],
    "location": {
      "address": "Uchtepa District, Chamanzar Mahallah",
      "city": "Tashkent",
      "lat": 41.295,
      "lng": 69.211
    },
    "dateTime": "2025-06-01T19:00:00",
    "duration": 90,
    "maxParticipants": 12,
    "participants": [
      "mockUsers[66]",
      "mockUsers[5]",
      "mockUsers[29]",
      "mockUsers[7]",
      "mockUsers[17]",
      "mockUsers[28]",
      "mockUsers[56]",
      "mockUsers[67]",
      "mockUsers[68]",
      "mockUsers[69]",
      "mockUsers[48]",
      "mockUsers[6]"
    ],
    "approvedParticipants": [
      "mockUsers[66]",
      "mockUsers[5]",
      "mockUsers[29]",
      "mockUsers[7]",
      "mockUsers[17]",
      "mockUsers[28]",
      "mockUsers[56]",
      "mockUsers[67]",
      "mockUsers[68]",
      "mockUsers[69]",
      "mockUsers[48]",
      "mockUsers[6]"
    ],
    "pendingRequests": [],
    "description": "Friendly football match, all skill levels welcome!",
    "price": 0
  }
];