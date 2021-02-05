import { hex2bin } from "../utilities/hex2bin";

interface MeteoHelixPayload {
  type: number;
  battery: number;
  temprature: number;
  t_min: number;
  t_max: number;
  humidity: number;
  pressure: number;
  irradiation: number;
  irr_max: number;
  rain: number;
  time_between_rain: number;
}
export const type = (bits: string): number => {
  return parseInt(bits, 2);
};
export const battery = (bits: string): number => {
  return parseInt(bits, 2) * 0.05 + 3;
};
export const temperature = (bits: string): number => {
  return parseInt(bits, 2) * 0.1 + -100;
};
export const t_min = (bits: string): number => {
  return parseInt(bits, 2) * 0.1;
};
export const t_max = (bits: string): number => {
  return parseInt(bits, 2) * 0.1;
};
export const humidity = (bits: string): number => {
  return parseInt(bits, 2) * 0.2;
};
export const pressure = (bits: string): number => {
  return parseInt(bits, 2) * 5 + 50000;
};
export const irradiation = (bits: string): number => {
  return parseInt(bits, 2) * 2;
};
export const irr_max = (bits: string): number => {
  return parseInt(bits, 2) * 2;
};
export const rain = (bits: string): number => {
  return parseInt(bits, 2);
};
export const time_between_rain = (bits: string): number => {
  console.log(bits);

  return parseInt(bits, 2);
};

export const meteoHelix = (hex: string): MeteoHelixPayload => {
  const binary: string = hex2bin(hex);

  const rawType: string = binary.substr(0, 2);
  const rawBattery: string = binary.substr(2, 5);
  const rawTemperature: string = binary.substr(7, 11);
  const rawT_min: string = binary.substr(18, 6);
  const rawT_max: string = binary.substr(24, 6);
  const rawHumidity: string = binary.substr(30, 9);
  const rawpressure: string = binary.substr(39, 14);
  const rawIrradiation: string = binary.substr(53, 10);
  const rawIrr_max: string = binary.substr(63, 9);
  const rawRain: string = binary.substr(72, 8);
  const rawTime_between_rain: string = binary.substr(80, 8);

  return {
    type: type(rawType),
    battery: battery(rawBattery),
    temprature: temperature(rawTemperature),
    t_min: t_min(rawT_min),
    t_max: t_max(rawT_max),
    humidity: humidity(rawHumidity),
    pressure: pressure(rawpressure),
    irradiation: irradiation(rawIrradiation),
    irr_max: irr_max(rawIrr_max),
    rain: rain(rawRain),
    time_between_rain: time_between_rain(rawTime_between_rain),
  };
};
