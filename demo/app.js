'use strict';

angular.module("demoApp", ['ngTreeFrame'])
    .controller("MenuController", function($scope, $timeout){
        // $scope.treeObj = {
        // 	name: '项目1',
        // 	id: 1,
        // 	child: [
        // 		{name: '123', id: 2},
        // 		{name: '333', id: 3, child: [{name: '300', id: 4}]}
        // 	]
        // }
        $timeout(function () {
            $scope.treeObj = {
                "child":[
                    {
                        "child":[
                            {
                                "child":[
                                    {
                                        "child":[
                                            {
                                                "child":[],
                                                "des":"",
                                                "id":999,
                                                "name":"999",
                                                "parentCode":777,
                                                "type":0,
                                                "userName":""
                                            },
                                            {
                                                "child":[],
                                                "des":"",
                                                "id":666,
                                                "name":"没有菜单1",
                                                "parentCode":777,
                                                "type":0,
                                                "userName":""
                                            },
                                            {
                                                "child":[],
                                                "des":"",
                                                "id":66236,
                                                "name":"62366",
                                                "parentCode":777,
                                                "type":0,
                                                "userName":""
                                            }
                                        ],
                                        "des":"",
                                        "id":777,
                                        "name":"7777",
                                        "parentCode":466,
                                        "type":0,
                                        "userName":""
                                    },
                                    {
                                        "child":[
                                            {
                                                "child":[],
                                                "des":"",
                                                "id":6664,
                                                "name":"没有菜单2",
                                                "parentCode":6566,
                                                "type":0,
                                                "userName":""
                                            },
                                            {
                                                "child":[],
                                                "des":"",
                                                "id":6663,
                                                "name":"没有菜单3",
                                                "parentCode":6566,
                                                "type":1,
                                                "userName":""
                                            },
                                            {
                                                "child":[],
                                                "des":"",
                                                "id":6626,
                                                "name":"666",
                                                "parentCode":6566,
                                                "type":0,
                                                "userName":""
                                            },
                                            {
                                                "child":[],
                                                "des":"",
                                                "id":662326,
                                                "name":"666",
                                                "parentCode":6566,
                                                "type":0,
                                                "userName":""
                                            }
                                        ],
                                        "des":"",
                                        "id":6566,
                                        "name":"666",
                                        "parentCode":466,
                                        "type":1,
                                        "userName":""
                                    }
                                ],
                                "des":"",
                                "id":466,
                                "name":"123",
                                "parentCode":465,
                                "type":0,
                                "userName":""
                            },
                            {
                                "child":[],
                                "des":"",
                                "id":542,
                                "name":"54223",
                                "parentCode":465,
                                "type":0,
                                "userName":""
                            }
                        ],
                        "des":"",
                        "id":465,
                        "name":"3333",
                        "parentCode":123,
                        "type":0,
                        "userName":""
                    },
                    {
                        "child":[],
                        "des":"",
                        "id":467,
                        "name":"444",
                        "parentCode":123,
                        "type":0,
                        "userName":"",
                        "icon": './../icon.png'
                    }
                ],
                "des":"123",
                "id":123,
                "name":"213",
                "parentCode":0,
                "type":0,
                "userName":"",
                "icon": './../icon.png'
            };
            // $timeout(function() {
            //     $scope.treeObj = {};
            // }, 3000)
        }, 500);

        // 根据某一属性key区分背景色
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

        // 根据层级关系区分背景色，除了最高父其余都同色
        $scope.bgColorForLevelConfig = [{
            bgColor: '#e1ebfd',
            color: '#000000'
        }, {
            bgColor: '#faebd7',
            color: '#000000'
        }];


        // 格式化数据(递归)
        function fmtTreeData(treeData, id, callback) {
            if (id) {
                if (treeData.id == id) {
                    callback(treeData);
                }
            }
            if (treeData.child && treeData.child.length) {
                for (var i = 0; i < treeData.child.length; i++) {
                    if (new RegExp('^666').test(treeData.child[i].id)) {
                        treeData.child[i].disableTreeMenu = true;
                    }
                    fmtTreeData(treeData.child[i], id, callback);
                }
            }
        }

        // 配置字段
        $scope.treeFrameConfig = {
            id: 'id',   // 唯一标识字段（不能重复）
            parentId: 'parentId',   // 父节点唯一标识
            icon: 'icon',   // 若果有图标，则显示icon的图片
            parentIcon: './../icon.png',    // 顶级父节点ico
            formatName: function(node) {    // 格式化节点的名称
                return node.name;
            },
            formatTreeData: function(treeData) {
                // 对于不显示菜单的字段配置 disableTreeMenu: true
                fmtTreeData(treeData);
                return treeData;
            },
            // menuAvailable: matchId,    // 匹配标识，是否弹出菜单
            // 菜单配置
            menuConfig:[
                {
                    text: '创建机构',
                    visible: function(node) {   // 该菜单是否显示
                        return node.parentId == 0;
                    },
                    callback: function(node) {
                        fmtTreeData($scope.treeObj, node.id, function(data) {
                            if (!data.child || !data.child.length) {
                                data.child = [];
                            }
                            data.child.push({
                                id: parseInt(Math.random()*100000),
                                name: '新增',
                                parentId: node.id
                            })
                        });
                    }
                },
                {
                    text: '创建子机构',
                    visible: function(node) {
                        return node.parentId != 0;
                    },
                    callback: function(node) {
                        fmtTreeData($scope.treeObj, node.id, function(data) {
                            if (!data.child || !data.child.length) {
                                data.child = [];
                            }
                            var tempId = parseInt(Math.random()*100000);
                            data.child.push({
                                id: tempId,
                                name: '新增' + tempId,
                                parentId: node.id
                            })
                        });
                        $scope.$broadcast('refreshNgTreeFrame', $scope.treeObj);
                    }
                },
                {
                    text: '园所管理',
                    visible: function(node) {
                        return node.parentId != 0;
                    },
                    callback: function(node) {
                        console.log(node)
                    }
                },
                {
                    text: '查看',
                    visible: function(node) {
                        return node.parentId != 0;
                    },
                    callback: function(node) {

                    }
                },
                {
                    text: '编辑',
                    visible: function(node) {
                        return node.parentId != 0;
                    },
                    callback: function(node) {
                        fmtTreeData($scope.treeObj, node.id, function(data) {
                            var tempId = parseInt(Math.random()*100000);
                            data.name = '修改' + tempId;
                            $scope.$broadcast('refreshNgTreeFrame', data);
                        });
                    }
                },
                {
                    text: '删除',
                    visible: function(node) {
                        return node.parentId != 0;
                    },
                    callback: function(node) {
                        fmtTreeData($scope.treeObj, node.parentId, function(data) {
                            for (var i = 0; i < data.child.length; i++) {
                                if (data.child[i].id == node.id) {
                                    data.child.splice(i, 1);
                                    break;
                                }
                            }
                        });
                    }
                }
            ]
        }

        // 选中的节点
        $scope.treeNodeClick = function (node) {
            console.log(node.name);
        };
    });