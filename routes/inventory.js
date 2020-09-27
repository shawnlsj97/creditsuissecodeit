import { Router } from "express";
var router = Router();

router.post('/', function (req, res) {
    var name = req.body[0]["searchItemName"];
    var items = req.body[0]["items"];
    console.log(name);
    console.log(items);
    let result = [{"searchItemName":`${name}`,"searchResult":[]}];
    for (var i in items) {
      var item = items[i];
      console.log(item);
      var fixedName = "";
      var x = 0;
      var y = 0;
      for (var j = 0; j < item.length; j++) {
        if (item.charAt(x).toLowerCase() == name.charAt(y).toLowerCase()) {
          fixedName += name.charAt(y);
          x++;
          y++;
        } else if (item.charAt(x).toLowerCase() == name.charAt(y + 1).toLowerCase()) {
          fixedName += "-";
          fixedName += name.charAt(y);
          fixedName += item.charAt(x).toLowerCase();
          x++;
          y++;
          y++;
        } else if (item.charAt(x + 1).toLowerCase() == name.charAt(y + 1).toLowerCase()) {
          fixedName += item.charAt(x);
          x++;
          y++;
        } else {
          fixedName += "+";
          fixedName += item.charAt(x);
          x++;
        }
      }
      result[0].searchResult.push(fixedName);
    }
    console.log("My result--> %s", result);
    res.send(JSON.stringify(result));
});


export default router;
