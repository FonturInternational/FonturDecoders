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


print("start")

theHex = input("Input hex and press <ENTER>:")

print(hex2bin(theHex))
#print(hex2bin("2123006AD00F694CE120"))
#2123006AD00F694CE120


# Switch:
def neroNodeDigital(hex):
    if (hex) :
        print("yop")
    elif not (hex):
        print("yep")


