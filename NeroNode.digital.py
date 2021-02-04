import bitDecoder

print("Start")
theHex = input("Input hex and press <ENTER>: ")
print("Bit output by Hex:")
bitsOutput = bitDecoder.hex2bin(theHex)
print(bitsOutput)

# Switch:
def neroNodeDigital(hexInput):
    print("neroNode.Digital begins")
    bitsOutput = bitDecoder.hex2bin(hexInput)
    hexInput = hexInput.upper()
    if len(bitsOutput) != 8:
        raise TypeError("Hex must be exactly 4 bytes long")

    batteryBits = bitsOutput[2:4] + bitsOutput[0:2]
    batteryPower = str(int(''.join(batteryBits),2)/1000)
    #batteryPercent = (batteryPower / 3.7) * 100
    print("Voltage: " + batteryPower)
    #print("Battery Power: " + batteryPercent + "%")
    
    statusBits = bitsOutput[4:6]
    if (statusBits[0][3] == "1") :
        print("Heartbeat Message")

    if statusBits == "1111":
        print("Lightning Detector Reset")
    elif statusBits == "0000":
        print("Error: Missing Data.")
    else:
        if (statusBits[1][1] == "1") :
            print("Red Alarm") #Digital Input 3
        elif (statusBits[1][2] == "1") :
            print("Orange Alarm") #Digital Input 2 
        elif (statusBits[1][3] == "1") :
            print("Yellow Alarm") #Digital Input 1
        elif (statusBits[1][0] == "1") :
            print("All Clear") #Digital Input 4

    headerBits = hexInput[6:8]  
    #print (headerBits)
    if headerBits == "0F":
        print ("Sigfox")
    elif headerBits == "8F":
        print ("LoRaWAN")


neroNodeDigital(theHex)