import { hex2bin } from "../utilities/hex2bin";

interface MeteoRainPayload {
  type: number;
  battery: number;
  rainClicks: number;
  timeInterval: number;
  isInternal: boolean;
  heaterStatus: boolean;
  rainIntensityCorrection: number;
}
export const type = (bits: string): number => {
  return parseInt(bits, 2);
};
export const battery = (bits: string): number => {
  return parseInt(bits, 2) * 0.05 + 3;
};
export const rainClicks = (bits: string): number => {
  return parseInt(bits, 2);
};
export const timeInterval = (bits: string): number => {
  return parseInt(bits, 2);
};
export const isInternal = (bits: string): boolean => {
  return !!+bits;
};
export const heaterStatus = (bits: string): boolean => {
  return !!+bits;
};
export const rainIntensityCorrection = (bits: string): number => {
  return parseInt(bits, 2) * 0.01;
};

export const meteoRain = (hex: string): MeteoRainPayload => {
  const binary: string = hex2bin(hex);

  const rawType: string = binary.substr(0, 2);
  const rawBattery: string = binary.substr(2, 5);
  const rawRainClicks: string = binary.substr(7, 12);
  const rawTimeInterval: string = binary.substr(19, 8);
  const rawIsInternal: string = binary.substr(27, 1);
  const rawHeaterStatus: string = binary.substr(28, 1);
  const rawRainIntensityCorrection: string = binary.substr(29, 12);

  return {
    type: type(rawType),
    battery: battery(rawBattery),
    rainClicks: rainClicks(rawRainClicks),
    timeInterval: timeInterval(rawTimeInterval),
    isInternal: isInternal(rawIsInternal),
    heaterStatus: heaterStatus(rawHeaterStatus),
    rainIntensityCorrection: rainIntensityCorrection(
      rawRainIntensityCorrection
    ),
  };
};
