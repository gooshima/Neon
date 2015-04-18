print("Test TEST TEST")
local file = io.open("Hello.txt", "a")
file:write("Hi this is just a test\n")
file:close()