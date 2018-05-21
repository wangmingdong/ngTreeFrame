'use strict';

angular.module("demoApp", ['ng.treeFrame'])
    .controller("MenuController", function($scope){
        // $scope.treeObj = {
        // 	name: '项目1',
        // 	id: 1,
        // 	child: [
        // 		{name: '123', id: 2},
        // 		{name: '333', id: 3, child: [{name: '300', id: 4}]}
        // 	]
        // }
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
                                            "parentId":777,
                                            "type":0,
                                            "userName":""
                                        },
                                        {
                                            "child":[],
                                            "des":"",
                                            "id":666,
                                            "name":"666",
                                            "parentId":777,
                                            "type":0,
                                            "userName":""
                                        },
                                        {
                                            "child":[],
                                            "des":"",
                                            "id":66236,
                                            "name":"62366",
                                            "parentId":777,
                                            "type":0,
                                            "userName":""
                                        }
                                    ],
                                    "des":"",
                                    "id":777,
                                    "name":"7777",
                                    "parentId":466,
                                    "type":0,
                                    "userName":""
                                },
                                {
                                    "child":[
                                        {
                                            "child":[],
                                            "des":"",
                                            "id":6664,
                                            "name":"666",
                                            "parentId":777,
                                            "type":0,
                                            "userName":""
                                        },
                                        {
                                            "child":[],
                                            "des":"",
                                            "id":6663,
                                            "name":"666",
                                            "parentId":777,
                                            "type":1,
                                            "userName":""
                                        },
                                        {
                                            "child":[],
                                            "des":"",
                                            "id":6626,
                                            "name":"666",
                                            "parentId":777,
                                            "type":0,
                                            "userName":""
                                        },
                                        {
                                            "child":[],
                                            "des":"",
                                            "id":6626,
                                            "name":"666",
                                            "parentId":777,
                                            "type":0,
                                            "userName":""
                                        },
                                        {
                                            "child":[],
                                            "des":"",
                                            "id":6626,
                                            "name":"666",
                                            "parentId":777,
                                            "type":0,
                                            "userName":""
                                        },
                                        {
                                            "child":[],
                                            "des":"",
                                            "id":6626,
                                            "name":"666",
                                            "parentId":777,
                                            "type":0,
                                            "userName":""
                                        },
                                        {
                                            "child":[],
                                            "des":"",
                                            "id":6626,
                                            "name":"666",
                                            "parentId":777,
                                            "type":0,
                                            "userName":""
                                        },
                                        {
                                            "child":[],
                                            "des":"",
                                            "id":6626,
                                            "name":"666",
                                            "parentId":777,
                                            "type":0,
                                            "userName":""
                                        },
                                        {
                                            "child":[],
                                            "des":"",
                                            "id":6626,
                                            "name":"666",
                                            "parentId":777,
                                            "type":0,
                                            "userName":""
                                        },
                                        {
                                            "child":[],
                                            "des":"",
                                            "id":6626,
                                            "name":"666",
                                            "parentId":777,
                                            "type":0,
                                            "userName":""
                                        },
                                        {
                                            "child":[],
                                            "des":"",
                                            "id":6626,
                                            "name":"666",
                                            "parentId":777,
                                            "type":0,
                                            "userName":"",
                                            "icon": 'icon.png'
                                        },
                                        {
                                            "child":[],
                                            "des":"",
                                            "id":6626,
                                            "name":"666",
                                            "parentId":777,
                                            "type":0,
                                            "userName":""
                                        },
                                        {
                                            "child":[],
                                            "des":"",
                                            "id":6626,
                                            "name":"666",
                                            "parentId":777,
                                            "type":0,
                                            "userName":""
                                        },
                                        {
                                            "child":[],
                                            "des":"",
                                            "id":6626,
                                            "name":"666",
                                            "parentId":777,
                                            "type":0,
                                            "userName":""
                                        },
                                        {
                                            "child":[],
                                            "des":"",
                                            "id":6626,
                                            "name":"666",
                                            "parentId":777,
                                            "type":0,
                                            "userName":"",
                                            "icon": 'icon.png'
                                        },
                                        {
                                            "child":[],
                                            "des":"",
                                            "id":6626,
                                            "name":"666",
                                            "parentId":777,
                                            "type":0,
                                            "userName":""
                                        }
                                    ],
                                    "des":"",
                                    "id":6566,
                                    "name":"666",
                                    "parentId":777,
                                    "type":1,
                                    "userName":""
                                }
                            ],
                            "des":"",
                            "id":466,
                            "name":"123",
                            "parentId":465,
                            "type":0,
                            "userName":""
                        },
                        {
                            "child":[],
                            "des":"",
                            "id":542,
                            "name":"54223",
                            "parentId":465,
                            "type":0,
                            "userName":""
                        }
                    ],
                    "des":"",
                    "id":465,
                    "name":"3333",
                    "parentId":464,
                    "type":0,
                    "userName":""
                },
                {
                    "child":[],
                    "des":"",
                    "id":467,
                    "name":"444",
                    "parentId":464,
                    "type":0,
                    "userName":"",
                    "icon": 'icon.png'
                }
            ],
            "des":"123",
            "id":464,
            "name":"213",
            "parentId":0,
            "type":0,
            "userName":"",
            "icon": 'icon.png'
        };
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

        // 配置字段
        $scope.treeFrameConfig = {
            id: 'id',
            parentId: 'parentId',
            icon: 'icon'
        }

        // 过去选中的节点
        $scope.treeNodeClick = function (node) {
            console.log(node);
        };
    });