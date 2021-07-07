import bitDecoder

print("Start")
theHex = input("Input hex and press <ENTER>: ")
print("Bit output by Hex:")
bitsOutput = bitDecoder.hex2bin(theHex)
print(bitsOutput)

# Switch:
def neroNodeTemp(hexInput):
    print("neroNode.Temp begins")
    bitsOutput = bitDecoder.hex2bin(hexInput)
    hexInput = hexInput.upper()
    if len(bitsOutput) != 12:
        raise TypeError("Hex must be exactly 6 bytes long")

    batteryBits = bitsOutput[2:4] + bitsOutput[0:2]
    batteryPower = str(int(''.join(batteryBits),2)/1000)
    #batteryPercent = (batteryPower / 3.7) * 100
    print("Voltage: " + batteryPower)
    #print("Battery Power: " + batteryPercent + "%")
    
    statusBits = bitsOutput[4:6]
    if ((statusBits[1] == "1111") and (statusBits[0] == "0111")):
        print("Sensor Error") #Error
    else: 
        if (statusBits[1][0] == "1") :
            print("Heartbeat Message") #Heartbeat
        if (statusBits[1][1] == "1") :
            print("Temperature Threshold Passed") #Threshold Message
        if (statusBits[1][2] == "1") :
            print("Change in Temperature Detected") #Delta Message
        if (statusBits[1][3] == "1") :
            print("Interval Temperature Check") #Interval Message

    headerBits = hexInput[6:8]  
    #print (headerBits)
    if headerBits == "0F":
        print ("Sigfox")
    elif headerBits == "8F":
        print ("LoRaWAN")

    tempBits = bitsOutput[10:12] + bitsOutput[8:10]
    #print(tempBits)
    temperature = str(int(''.join(tempBits),2)/100)
    print("The Temperature is " + temperature + '\u00b0' + "C")


neroNodeTemp(theHex)