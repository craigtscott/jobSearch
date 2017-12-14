function printJson(data, output, bool) {
  if (output){
    var output = output;
    var bool = bool;
  } else {
    var output = "";
    var bool = true;
  }
  for (var i = 0; i < data.length; i++) {
    var line = "";
    var len = data[i].path.split("/").length;

    if (len === 2){
      line = line + data[i].name + "\n";
    }
    else {
        for (var j = 0; j < (len-2); j++) {
          line = line + "|\t";
        }
        line = line + "|-" + data[i].name + "\n";
      }
      output = output + line;
      if (data[0].children){
        output = output + line + printJson(data[i].children, output, bool);
      } else {
        bool = false;
      }
  }
  if (!bool){
    console.log(output);
    bool = true;
  }
};




var files = [{
    type: "folder",
    name: "animals",
    path: "/animals",
    children: [
      {
        type: "folder",
        name: "cat",
        path: "/animals/cat",
        children: [
          {
            type: "folder",
            name: "images",
            path: "/animals/cat/images",
            children: [
              {
                type: "file",
                name: "cat001.jpg",
                path: "/animals/cat/images/cat001.jpg"
              }, {
                type: "file",
                name: "cat001.jpg",
                path: "/animals/cat/images/cat002.jpg"
              }
            ]
          }
        ]
      },
    ]
  }
];

printJson(files);
