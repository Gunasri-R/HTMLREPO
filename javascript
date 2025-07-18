name)||typeof(parseInt(name))=='number'

  while(true)
{
    var name = prompt("enter your name:")
if(!name)
{
    console.log("invalid")
}
else if(!isNaN(parseInt(name)))
{
    console.log("your name contain numbers")

}
console.log(name)
}



<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <script src="script.js"></script>
    
</body>
</html>
