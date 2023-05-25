file = "C:\\users\\cjcre\\desktop\\horses.pdf"
newfile = open("newhorses.txt", 'w')

with open(file, 'r') as file:
    data = file.read()
    print(data)

