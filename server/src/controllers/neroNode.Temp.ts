import {hex2bin} from "../utilities/hex2bin";

export const voltage = (firstTwoBytes: string): number => {
  //little endian
  const voltageHex = firstTwoBytes.substring(2) + firstTwoBytes.substring(0, 2);
  return parseInt(voltageHex, 16) / 1000;
};

export const sensor = (thirdByte:string): string[]=>{
  const statusvalues = [
    "Reserved",
    "Digital High",
    "Digital Low",
    "Viberation Detected",
    "Active",//Heartbeat Message
    "Temperature Threshold Passed",//Threshold Message
    "Change in Temperature Detected",//Delta Message
    "Interval Temperature Check",//Interval Message
  ];
  let binary = hex2bin(thirdByte);
  if (binary.substring(1) === "1111111") return ["Sensor Error"];
  else
    return statusvalues.filter((value, index) => {
      if (+binary[index]) return value;
    });
}

export const headerId = (thirdByte: string): string => {
  if (thirdByte.toLowerCase() == "0a") return "Sigfox";
  else return "LoRaWAN";
};

export const temperature = (lastTwoBytes:string):number=>{
  const tempHex = lastTwoBytes.substring(2) + lastTwoBytes.substring(0, 2);
  return parseInt(tempHex, 16) / 100;

}