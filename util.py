print("Enter seconds")
totalSeconds = int(input())
if(totalSeconds < 60):
    seconds = totalSeconds 
    mins = 0 
    hours = 0 
    days = 0
else:
    mins = 0
    while(totalSeconds>=60):
        totalSeconds = totalSeconds - 60
        mins = mins + 1 
    seconds = totalSeconds 
    hours = 0
    while(mins>=60):
        mins = mins - 60
        hours = hours + 1
    