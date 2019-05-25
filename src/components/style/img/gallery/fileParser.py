#This function opens up a directory and reads the names of all files in the directory on the console
import os
# <img src={require('../../../style/img/Gallery/2016/2016_nccaf_scholarship_031-150x150.jpg')} alt='banner' />
def main():
    #text = input("enter directory: ")
    #print(text)

    pictures = []
    
    for x in os.walk('./2016'): #all of the picture files will be stored in the 3rd tuple no matter what 
        pictures = x[2]

    for x in pictures:
        str = "<div className=\"image\"><img src={require('../../../style/img/Gallery/2016/"+x+"')} alt='banner' /></div>" 
        print(str)


    #print(x[2][0])


if __name__ == "__main__":
    main()
