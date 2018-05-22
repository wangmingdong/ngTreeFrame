# NgTreeFrame

[![Build Status](https://www.travis-ci.org/wangmingdong/ngTreeFrame.svg?branch=master)](https://www.travis-ci.org/wangmingdong/ngTreeFrame)

### 基于Angular的树形组织结构框架

在线Demo:[http://www.weqianduan.com/ngTreeFrame/demo/](http://www.weqianduan.com/ngTreeFrame/demo/)

### 依赖
Angular

### 使用
``` html
<tree-frame tree-data="treeObj"
    bg-color-config="treeBgColorConfig"
    bg-color-for-level="bgColorForLevelConfig"
    tree-frame-config="treeFrameConfig"
    tree-node-click="treeNodeClick">
</tree-frame>
```

### API
__treeObj__:树结构数据，是个object，只有一个顶级父。
__treeBgColorConfig__:根据某一属性key区分背景色，例：
``` js
$scope.treeBgColorConfig = {
    key: 'type',
    values: [
        {
            value: 0,
            bgColor: '#e1ebfd',
            color: '#000000'
        },
        {
            value: 1,
            bgColor: '#faebd7',
            color: '#000000'
        }
    ]
};
```
__bgColorForLevelConfig__:
根据层级关系区分背景色，除了最高父其余都同色,如：
``` js
$scope.bgColorForLevelConfig = [{
    bgColor: '#e1ebfd',
    color: '#000000'
}, {
    bgColor: '#faebd7',
    color: '#000000'
}];
```
__treeFrameConfig__:
各种配置字段
``` js
$scope.treeFrameConfig = {
    id: 'id',   // 唯一标识字段（不能重复）
    parentId: 'parentId',   // 父节点唯一标识
    icon: 'icon',   // 若果有图标，则显示icon的图片
    parentIcon: './../icon.png',    // 顶级父节点ico
    formatTreeData: function(treeData) {
        // ... 对数据的预处理操作
        // ...
        // 对于不显示菜单的字段配置 disableTreeMenu: true
        // ...
        return treeData;
    },
    // 菜单配置
    menuConfig:[
        {
            text: '创建子机构',
            callback: function(node) {
                // 点击菜单后要做的事
                console.log(node)
            }
        },
        {
            text: '园所管理',
            callback: function(node) {}
        },
        {
            text: '查看',
            callback: function(node) {}
        },
        {
            text: '编辑',
            callback: function(node) {}
        },
        {
            text: '删除',
            callback: function(node) {}
        },
    ]
}
```
__treeNodeClick__:
选中某一节点后的回调
``` js
$scope.treeNodeClick = function (node) {
    console.log(node);
};
```