import React from "react";
import { SlideContainer, SwissGrid, SwissHeader } from "../ui/SlideComponents";

export default function Slide4Details() {
  const transactionData = [
    { pic: "RIO", hospital: "RS GRIYA MEDIKA DOMPET DHUAFA", date: "03/08", no: "202608-001701", amount: 8806740 },
    { pic: "RIO", hospital: "RS GRIYA MEDIKA DOMPET DHUAFA", date: "04/08", no: "202608-001717", amount: 4084800 },
    { pic: "RIO", hospital: "RS GRIYA MEDIKA DOMPET DHUAFA", date: "14/08", no: "202608-001835", amount: 9590400 },
    { pic: "RIO", hospital: "RS GRIYA MEDIKA DOMPET DHUAFA", date: "18/08", no: "202608-001846", amount: 3330000 },
    { pic: "RIO", hospital: "RS GRIYA MEDIKA DOMPET DHUAFA", date: "19/08", no: "202608-001856", amount: 4141410 },
    { pic: "RIO", hospital: "RS GRIYA MEDIKA DOMPET DHUAFA", date: "24/08", no: "202608-001892", amount: 8664660 },
    { pic: "RIO", hospital: "RS GRIYA MEDIKA DOMPET DHUAFA", date: "31/08", no: "202608-001934", amount: 9640350 },
    { pic: "RIO", hospital: "RS PANTI SECANTI", date: "19/08", no: "202608-001848", amount: 246420 },
    { pic: "RIO", hospital: "RS PANTI SECANTI", date: "27/08", no: "202608-001912", amount: 3071370 },
    { pic: "RIO", hospital: "RS PENAWAR MEDIKA", date: "24/08", no: "202608-001898", amount: 6869679 },
    { pic: "RIO", hospital: "RS Umum Daerah Pesawaran", date: "31/07", no: "202608-001711", amount: 8677980 },
    { pic: "RIO", hospital: "RS Umum Daerah Pesawaran", date: "29/07", no: "202608-001828", amount: 110009325 },
    { pic: "RIO", hospital: "RS Umum Daerah Pesawaran", date: "20/08", no: "202608-001878", amount: 7392600 },
    { pic: "RIO", hospital: "RS URIP SUMOHARJO", date: "03/08", no: "202608-001706", amount: 2453100 },
    { pic: "RIO", hospital: "RS URIP SUMOHARJO", date: "03/08", no: "202608-001707", amount: 1948050 },
    { pic: "RIO", hospital: "RS URIP SUMOHARJO", date: "03/08", no: "202608-001708", amount: 1179375 },
    { pic: "RIO", hospital: "RS URIP SUMOHARJO", date: "03/08", no: "202608-001710", amount: 212287 },
    { pic: "RIO", hospital: "RS URIP SUMOHARJO", date: "05/08", no: "202608-001727", amount: 35098200 },
    { pic: "RIO", hospital: "RS URIP SUMOHARJO", date: "07/08", no: "202608-001749", amount: 1348095 },
    { pic: "RIO", hospital: "RS URIP SUMOHARJO", date: "10/08", no: "202608-001778", amount: 1839825 },
    { pic: "RIO", hospital: "RS URIP SUMOHARJO", date: "11/08", no: "202608-001800", amount: 79920 },
    { pic: "RIO", hospital: "RS URIP SUMOHARJO", date: "13/08", no: "202608-001813", amount: 2453100 },
    { pic: "RIO", hospital: "RS URIP SUMOHARJO", date: "13/08", no: "202608-001814", amount: 613275 },
    { pic: "RIO", hospital: "RS URIP SUMOHARJO", date: "18/08", no: "202608-001843", amount: 274725 },
    { pic: "RIO", hospital: "RS URIP SUMOHARJO", date: "19/08", no: "202608-001850", amount: 5189250 },
    { pic: "RIO", hospital: "RS URIP SUMOHARJO", date: "19/08", no: "202608-001851", amount: 699300 },
    { pic: "RIO", hospital: "RS URIP SUMOHARJO", date: "19/08", no: "202608-001852", amount: 888000 },
    { pic: "RIO", hospital: "RS URIP SUMOHARJO", date: "19/08", no: "202608-001853", amount: 279720 },
    { pic: "RIO", hospital: "RS URIP SUMOHARJO", date: "19/08", no: "202608-001854", amount: 2453100 },
    { pic: "RIO", hospital: "RS URIP SUMOHARJO", date: "19/08", no: "202608-001855", amount: 499500 },
    { pic: "RIO", hospital: "RS URIP SUMOHARJO", date: "20/08", no: "202608-001867", amount: 1179375 },
    { pic: "RIO", hospital: "RS URIP SUMOHARJO", date: "24/08", no: "202608-001893", amount: 4601793 },
    { pic: "RIO", hospital: "RS URIP SUMOHARJO", date: "31/08", no: "202608-001926", amount: 607725 },
    { pic: "RIO", hospital: "RS. ASY-SYIFA MEDIKA", date: "31/08", no: "202608-001906", amount: 1698300 },
    { pic: "RIO", hospital: "RSIA PURI BETIK HATI", date: "04/08", no: "202608-001719", amount: 4911750 },
    { pic: "RIO", hospital: "RSIA PURI BETIK HATI", date: "04/08", no: "202608-001720", amount: 159840 },
    { pic: "RIO", hospital: "RSIA PURI BETIK HATI", date: "07/08", no: "202608-001752", amount: 532800 },
    { pic: "RIO", hospital: "RSIA PURI BETIK HATI", date: "19/08", no: "202608-001865", amount: 145410 },
    { pic: "RIO", hospital: "RSIA PURI BETIK HATI", date: "19/08", no: "202608-001866", amount: 270562 },
    { pic: "RIO", hospital: "RSIA PURI BETIK HATI", date: "21/08", no: "202608-001882", amount: 291375 },
    { pic: "RIO", hospital: "RSIA PURI BETIK HATI", date: "24/08", no: "202608-001889", amount: 2783880 },
    { pic: "RIO", hospital: "RSU KARTINI", date: "01/08", no: "202608-001691", amount: 3636360 },
    { pic: "RIO", hospital: "RSU KARTINI", date: "01/08", no: "202608-001692", amount: 2256630 },
    { pic: "RIO", hospital: "RSU KARTINI", date: "20/08", no: "202608-001881", amount: 4815180 },
    { pic: "RIO", hospital: "RSU AZ-ZAHRA", date: "01/08", no: "202608-001689", amount: 3349425 },
    { pic: "RIO", hospital: "RSU AZ-ZAHRA", date: "11/08", no: "202608-001788", amount: 8118817 },
    { pic: "RIO", hospital: "RSU AZ-ZAHRA", date: "14/08", no: "202608-001827", amount: 0 },
    { pic: "RIO", hospital: "RSU AZ-ZAHRA", date: "18/08", no: "202608-001845", amount: 1698300 },
    { pic: "RIO", hospital: "RSU AZ-ZAHRA", date: "21/08", no: "202608-001877", amount: 4363687 },
    { pic: "RIO", hospital: "RSU AZ-ZAHRA", date: "20/08", no: "202608-001879", amount: 2405925 },
    { pic: "RIO", hospital: "RSU AZ-ZAHRA", date: "29/08", no: "202608-001921", amount: 5632695 },
    { pic: "RIO", hospital: "RSU BELLEZA", date: "21/08", no: "202608-001883", amount: 0 },
    { pic: "RIO", hospital: "RSUD Dr. Hi. ABDUL MOELOEK", date: "08/08", no: "202608-001758", amount: 4633695 },
    { pic: "RIO", hospital: "RSUD Dr. Hi. ABDUL MOELOEK", date: "08/08", no: "202608-001759", amount: 3026415 },
    { pic: "RIO", hospital: "RSUD Dr. Hi. ABDUL MOELOEK", date: "10/08", no: "202608-001764", amount: 1800031 },
    { pic: "RIO", hospital: "RSUD Dr. Hi. ABDUL MOELOEK", date: "10/08", no: "202608-001765", amount: 780330 },
    { pic: "RIO", hospital: "RSUD Dr. Hi. ABDUL MOELOEK", date: "10/08", no: "202608-001766", amount: 917415 },
    { pic: "RIO", hospital: "RSUD Dr. Hi. ABDUL MOELOEK", date: "10/08", no: "202608-001767", amount: 31045035 },
    { pic: "RIO", hospital: "RSUD Dr. Hi. ABDUL MOELOEK", date: "19/08", no: "202608-001861", amount: 1010100 },
    { pic: "RIO", hospital: "RSUD Dr. Hi. ABDUL MOELOEK", date: "19/08", no: "202608-001862", amount: 360750 },
    { pic: "RIO", hospital: "RSUD Dr. Hi. ABDUL MOELOEK", date: "19/08", no: "202608-001863", amount: 5050500 },
    { pic: "RIO", hospital: "RSUD Dr. Hi. ABDUL MOELOEK", date: "20/08", no: "202608-001871", amount: 2020200 },
    { pic: "RIO", hospital: "RSUD Dr. Hi. ABDUL MOELOEK", date: "27/08", no: "202608-001915", amount: 6060600 },
    { pic: "RIO", hospital: "RSUD JEND. AHMAD YANI", date: "04/08", no: "202608-001712", amount: 1665000 },
    { pic: "RIO", hospital: "RSUD JEND. AHMAD YANI", date: "04/08", no: "202608-001713", amount: 432900 },
    { pic: "RIO", hospital: "RSUD JEND. AHMAD YANI", date: "04/08", no: "202608-001714", amount: 52438176 },
    { pic: "RIO", hospital: "RSUD JEND. AHMAD YANI", date: "24/08", no: "202608-001916", amount: 1265400 },
    { pic: "RIO", hospital: "RSUD MENGGALA KAB. TULANG BAWANG", date: "19/08", no: "202608-001849", amount: 360750 },
    { pic: "RIO", hospital: "RSUD PRINGSEWU", date: "05/08", no: "202608-001728", amount: 14679750 },
    { pic: "RIO", hospital: "RSUD PRINGSEWU", date: "10/08", no: "202608-001763", amount: 2974800 },
    { pic: "RIO", hospital: "RSUD PRINGSEWU", date: "20/08", no: "202608-001868", amount: 11322000 },
    { pic: "RIO", hospital: "RSUD PRINGSEWU", date: "20/08", no: "202608-001870", amount: 4095900 },
    { pic: "RIO", hospital: "RSUD PRINGSEWU", date: "27/08", no: "202608-001913", amount: 12931500 },
    { pic: "RIO", hospital: "RUMAH SAKIT ADVENT BANDAR LAMPUNG", date: "31/08", no: "202608-001930", amount: 3086910 },
    { pic: "RIO", hospital: "UTD Dinkes Mesuji", date: "03/08", no: "202608-001896", amount: 88039650 },
    { pic: "RIO", hospital: "UTD PMI BANDAR LAMPUNG", date: "03/08", no: "202608-001709", amount: 2359993 },
    { pic: "RIO", hospital: "UTD PMI BANDAR LAMPUNG", date: "31/08", no: "202608-001932", amount: 290145 },
  ];

  const formatIDR = (val: number) => {
    return new Intl.NumberFormat('id-ID').format(val);
  };

  return (
    <SlideContainer>
      <SwissGrid className="grid grid-cols-1 md:grid-cols-12 grid-rows-6">
        <div className="md:col-span-12 row-span-1">
          <SwissHeader
            title="Rincian Transaksi"
            subtitle="Detail transaksi berdasarkan rumah sakit"
          />
        </div>

        <div className="md:col-span-12 row-span-5 p-6 md:p-12 flex flex-col justify-start bg-surface overflow-y-auto">
          <div className="w-full mx-auto">
            <table className="w-full text-left border-collapse text-sm md:text-base">
              <thead className="sticky top-0 bg-surface shadow-[0_1px_0_var(--color-border)] z-10">
                <tr className="text-text-secondary font-mono uppercase tracking-wider font-semibold">
                  <th className="py-3 px-2">PIC</th>
                  <th className="py-3 px-2">Rumah Sakit</th>
                  <th className="py-3 px-2">Tanggal</th>
                  <th className="py-3 px-2">No.</th>
                  <th className="py-3 px-2 text-right">Nominal</th>
                </tr>
              </thead>
              <tbody className="font-mono">
                {transactionData.map((row, i) => (
                  <tr key={i} className="border-b border-border/30 hover:bg-black/5 transition-colors">
                    <td className="py-3 px-2 text-text-primary">{row.pic}</td>
                    <td className="py-3 px-2 text-text-primary font-display font-medium text-sm md:text-base truncate max-w-[150px] md:max-w-none">{row.hospital}</td>
                    <td className="py-3 px-2 text-text-secondary">{row.date}</td>
                    <td className="py-3 px-2 text-text-secondary text-xs md:text-sm">{row.no}</td>
                    <td className="py-3 px-2 text-right text-text-primary font-medium">{formatIDR(row.amount)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </SwissGrid>
    </SlideContainer>
  );
}