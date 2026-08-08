export const reportData = {
  header: {
    title: "Laporan Penjualan",
    semester: "Semester 1",
    period: "Januari - Juli 2026",
    division: "Marketing",
    area: "Lampung 1",
    author: "Rio Iswadi",
  },
  
  omset: {
    semester1: 2596899061,
    targetTotal: 26000000000,
    percentage: 10,
    targetPerMonth: 400000000,
    monthly: [
      { month: "Januari", target: 400000000, achieved: 256302258, percentage: 64 },
      { month: "Februari", target: 400000000, achieved: 242058029, percentage: 60 },
      { month: "Maret", target: 400000000, achieved: 267154424, percentage: 66 },
      { month: "April", target: 400000000, achieved: 337717119, percentage: 84 },
      { month: "Mei", target: 400000000, achieved: 382819943, percentage: 95 },
      { month: "Juni", target: 400000000, achieved: 520024997, percentage: 130 },
      { month: "Juli", target: 400000000, achieved: 590822292, percentage: 147 },
    ],
  },
  
  newCustomers: [
    "RS. Penawar Medika",
    "RS. Azizah",
    "RSU. Kartini",
    "RSU. Muhammadiyah",
  ],
  
  addedProducts: [
    { customer: "RSUD. AM", product: "Micro" }
  ],
  
  churn: {
    totalCustomers2026: 55,
    churnedCustomers: 1,
    churnedDetails: [
      { name: "RS Bedah Kurnia Pringsewu", value: 0.01 }
    ]
  },
  
  highlight: [
    "HBsAg merek Healgen"
  ]
};
