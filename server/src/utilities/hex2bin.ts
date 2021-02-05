export  const hex2bin = (hex : string ):string =>{
    const binary = BigInt('0x' + hex).toString(2);

    
  return (
    Array(hex.length * 4 - binary.length)
      .fill("0")
      .join("") + binary
  );
  
}
