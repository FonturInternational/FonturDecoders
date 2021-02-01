export const voltage = (firstTwoBytes: string): number => {
  //little endian
  const voltageHex = firstTwoBytes.substring(2) + firstTwoBytes.substring(0, 2);
  console.log(voltageHex);
  return parseInt(voltageHex, 16) / 1000;
};




export const status = (thirdByte: string): string[] => {
      //little endian

  const statusvalues = [
    "Reserved",
    "Reserved",
    "Viberation Detected",
    "HeartBeat message",
    "Digital Input 4 Triggered",
    "Digital Input 3 Triggered",
    "Digital Input 2 Triggered",
    "Digital Input 1 Triggered",
  ];

  let binary = parseInt(thirdByte, 16).toString(2);
  binary =
    Array(thirdByte.length * 4 - binary.length)
      .fill("0")
      .join("") + binary;
 

  return   statusvalues.filter((value, index) => {
    if (+binary[index]) return value;
  });
};




export const headerId = (thirdByte: string): string => {
  if (thirdByte.toLowerCase() == "0f") return "Sigfox";
  else return "LoRaWAN";
};
