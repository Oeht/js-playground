import hashlib
import time
from datetime import datetime

block = 1
number = 1
previous = "0000000000000000000000000000000000000000000000000000000000000000"
text = "das ist ein test"

hashStr = f'{block}{number}{previous}{text}'
hashStr = hashStr.encode('utf-8')
hashStr = hashlib.sha256(hashStr)
now = datetime.now()
unix_start = time.time()
print("Start time: " + now.strftime("%d/%m/%Y %H:%M:%S"))
print("-----------------------------------------------------")

while hashStr.hexdigest()[:5] != "00000":
    number = number + 1
    hashStr = f'{block}{number}{previous}{text}'
    hashStr = hashStr.encode('utf-8')
    hashStr = hashlib.sha256(hashStr)

now = datetime.now()
unix_1 = time.time()
print("First block: " + now.strftime("%d/%m/%Y %H:%M:%S"))
print("First block: " + str((number / (unix_1 - unix_start))) + " hashes per second")
print(number)
print(hashStr.hexdigest())
print("-----------------------------------------------------")

block = 2
number = 1
previous = hashStr.hexdigest()
text = "das ist noch einmal ein test"

hashStr = f'{block}{number}{previous}{text}'
hashStr = hashStr.encode('utf-8')
hashStr = hashlib.sha256(hashStr)

while hashStr.hexdigest()[:5] != "00000":
    number = number + 1
    hashStr = f'{block}{number}{previous}{text}'
    hashStr = hashStr.encode('utf-8')
    hashStr = hashlib.sha256(hashStr)

now = datetime.now()
unix_2 = time.time()
print("Second block: " + now.strftime("%d/%m/%Y %H:%M:%S"))
print("First block: " + str((number / (unix_2 - unix_1))) + " hashes per second")
print(number)
print(hashStr.hexdigest())
print("-----------------------------------------------------")
