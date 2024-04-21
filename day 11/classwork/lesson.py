i = 0
while i <= 20:
    print(i)
    i = i + 2 

    i = 100
    while i >= 0:
        print(i)
        i = i - 1


age = int(input("Please enter your age: "))
if age >= 18:
    print("User is adult")
else:
    print("User is kid or teen")