#!/usr/bin/python
import sys
import urllib


input = ''
for line in sys.stdin:
    input += line

#print input,

#for line in sys.stdin:
#    input += str(sys.stdout.write(line))

#Input = sys.argv[1]
#print sys.argv

print urllib.quote(input)
