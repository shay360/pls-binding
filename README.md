# pls-binding - Little script for 2 way binding
> Author: Shay Zeevi

For using this script you need to use attribute called pls-binding.
1. Include the "pls-binding.min.js" file to your project
2. Create input element with data attribute pls-binding
3. Create HTML Element to bind with the input and give it the same attribute value

### Example:
```javascript
<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<body>
<input type="text" pls-binding="test" placeholder="Test Input">
<p pls-binding="test"></p>
<script src="pls-binding.min.js"></script>
</body>
</html>

```
