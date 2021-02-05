import { hex2bin } from "../utilities/hex2bin";

interface MeteoWindPayload {
  type: number;
  battery: number;
  wind_ave10: number;
  wind_max10: number;
  wind_min10: number;
  dir_ave10: number;
  dir_max10: number;
  dir_hi10: number;
  dir_lo10: number;
}
export const type = (bits: string): number => {
  return parseInt(bits, 2);
};
export const battery = (bits: string): number => {
  return parseInt(bits, 2) * 0.05 + 3;
};
export const wind_ave10 = (bits: string): number => {
  return parseInt(bits, 2) * 0.1 ;
};
export const wind_max10 = (bits: string): number => {
  return parseInt(bits, 2) * 0.1;
};
export const wind_min10 = (bits: string): number => {
  return parseInt(bits, 2) * 0.1;
};
export const dir_ave10 = (bits: string): number => {
  return parseInt(bits, 2);
};
export const dir_max10 = (bits: string): number => {
  return parseInt(bits, 2);
};
export const dir_hi10 = (bits: string): number => {
  return parseInt(bits, 2) ;
};
export const dir_lo10 = (bits: string): number => {
  return parseInt(bits, 2);
};


export const meteoWind = (hex: string): MeteoWindPayload => {
  const binary: string = hex2bin(hex);

  const rawType: string = binary.substr(0, 2);
  const rawBattery: string = binary.substr(2, 5);
  const rawWind_ave10: string = binary.substr(7, 9);
  const rawWind_max10: string = binary.substr(16, 9);
  const rawWind_min10: string = binary.substr(25, 9);
  const rawDir_ave10: string = binary.substr(34, 9);
  const rawDir_max10: string = binary.substr(43, 9);
  const rawDir_hi10: string = binary.substr(52, 8);
  const rawDir_lo10: string = binary.substr(60, 8);


  return {
    type: type(rawType),
    battery: battery(rawBattery),
    wind_ave10: wind_ave10(rawWind_ave10),
    wind_max10: wind_max10(rawWind_max10),
    wind_min10: wind_min10(rawWind_min10),
    dir_ave10: dir_ave10(rawDir_ave10),
    dir_max10:dir_max10(rawDir_max10) ,
    dir_hi10: dir_hi10(rawDir_hi10),
    dir_lo10: dir_lo10(rawDir_lo10),
  };
};
