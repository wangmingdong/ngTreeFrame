# NgTreeFrame

[![Build Status](https://www.travis-ci.org/wangmingdong/ngTreeFrame.svg?branch=master)](https://www.travis-ci.org/wangmingdong/ngTreeFrame)

### 基于 Angular 的树形组织结构框架

在线 Demo:[http://www.bannary.com/ngTreeFrame/demo/](http://www.bannary.com/ngTreeFrame/demo/)

### 依赖

Angular

### 使用

引入 js

```html
<script src="./../js/ngTreeFrame.js"></script>
```

```html
<tree-frame
  tree-data="treeObj"
  bg-color-config="treeBgColorConfig"
  bg-color-for-level="bgColorForLevelConfig"
  tree-frame-config="treeFrameConfig"
  tree-node-click="treeNodeClick"
>
</tree-frame>
```

```js
// 注入 ngTreeFrame
angular
  .module("demoApp", ["ngTreeFrame"])
  .controller("DemoController", function ($scope) {
    // ...
  });
```

### 参数

- **treeObj**:树结构数据，是个 object，只有一个顶级父。

```js
$scope.treeObj = {
  child: [
    {
      child: [
        {
          child: [],
          des: "",
          id: 542,
          name: "54223",
          parentCode: 465,
          type: 0,
          userName: "",
        },
      ],
      des: "",
      id: 465,
      name: "3333",
      parentCode: 123,
      type: 0,
      userName: "",
    },
    {
      child: [],
      des: "",
      id: 467,
      name: "444",
      parentCode: 123,
      type: 0,
      userName: "",
      icon: "./../icon.png",
    },
  ],
  des: "123",
  id: 123,
  name: "213",
  parentCode: 0,
  type: 0,
  userName: "",
  icon: "./../icon.png",
};
```

- **treeBgColorConfig**:根据某一属性 key 区分背景色，例：

```js
$scope.treeBgColorConfig = {
  key: "type",
  values: [
    {
      value: 0,
      bgColor: "#e1ebfd",
      color: "#000000",
    },
    {
      value: 1,
      bgColor: "#faebd7",
      color: "#000000",
    },
  ],
};
```

- **bgColorForLevelConfig**:
  根据层级关系区分背景色，除了最高父其余都同色,如：

```js
$scope.bgColorForLevelConfig = [
  {
    bgColor: "#e1ebfd",
    color: "#000000",
  },
  {
    bgColor: "#faebd7",
    color: "#000000",
  },
];
```

- **treeFrameConfig**:
  各种配置字段

```js
$scope.treeFrameConfig = {
  id: "id", // 唯一标识字段（不能重复）
  parentId: "parentId", // 父节点唯一标识
  icon: "icon", // 若果有图标，则显示icon的图片
  parentIcon: "./../icon.png", // 顶级父节点ico
  formatTreeData: function (treeData) {
    // ... 对数据的预处理操作
    // ...
    // 对于不显示菜单的字段配置 disableTreeMenu: true
    // ...
    return treeData;
  },
  // 菜单配置
  menuConfig: [
    {
      text: "创建子机构",
      callback: function (node) {
        // 点击菜单后要做的事
        console.log(node);
      },
    },
    {
      text: "园所管理",
      visible: function (node) {
        // 该菜单是否显示
        return node.parentId == 0;
      },
      callback: function (node) {},
    },
    {
      text: "查看",
      callback: function (node) {},
    },
    {
      text: "编辑",
      callback: function (node) {},
    },
    {
      text: "删除",
      callback: function (node) {},
    },
  ],
};
```

- **treeNodeClick**:
  选中某一节点后的回调

```js
$scope.treeNodeClick = function (node) {
  console.log(node);
};
```
