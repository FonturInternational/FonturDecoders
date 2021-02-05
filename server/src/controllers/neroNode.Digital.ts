import {hex2bin} from '../utilities/hex2bin';

export const voltage = (firstTwoBytes: string): number => {
  //little endian
  const voltageHex = firstTwoBytes.substring(2) + firstTwoBytes.substring(0, 2);
  return parseInt(voltageHex, 16) / 1000;
};

export const status = (thirdByte: string): string[] => {

  const statusvalues = [
    "Reserved",
    "Reserved",
    "Viberation Detected",
    "Active",
    "All clear",//Digital Input 4
    "Red Alarm",//Digital Input 3
    "Orange Alarm",//Digital Input 2
    "Yellow Alarm",//Digital Input 1
  ];

  let binary = hex2bin(thirdByte);
   

  if (binary.substring(4) === "1111") return ["Lightning Detector Reset"];
  else if (binary.substring(4) === "0000") return ["Error: Missing Data."];
  else
    return statusvalues.filter((value, index) => {
      if (+binary[index]) return value;
    });
};

export const headerId = (thirdByte: string): string => {
  if (thirdByte.toLowerCase() == "0f") return "Sigfox";
  else return "LoRaWAN";
};
