#Bit decoder:
def hex2bin(hexInput):
    scale = 16 #hexadecimal
    numBits = 4
    hexList = list(hexInput)
    #print(hexList)
    bitList = []
    for x in range(0, len(hexList)):
        #print(hexList[x])
        bitList.append(bin(int(hexList[x], scale))[2:].zfill(numBits))
    #print (bitList)
    return bitList

