//在父窗口控制子窗口的三个开关，并且实现页头部分三开关的跳转
hasSkip();


window.addEventListener("load",function(){
    var myChart = echarts.init(document.getElementById('main1'));
    var myChart2 = echarts.init(document.getElementById("main2"));
    var myChart3 = echarts.init(document.getElementById("main3"));
    var myChart4 = echarts.init(document.getElementById("main4"));
    // 指定图表的配置项和数据
    // var option = {
    //     title: {
    //         text: 'ECharts first lesson'
    //     },
    //     tooltip: {},
    //     legend: {
    //         data:['销量']
    //     },
    //     xAxis: {
    //         data: ["shirt","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]
    //     },
    //     yAxis: {},
    //     series: [{
    //         name: '销量',
    //         type: 'bar',
    //         data: [5, 20, 36, 10, 10, 20]
    //     }]
    // };

    //树形图
    var option = {
        title : {
            text: '明朝前期官位'
        },
        toolbox: {
            show : true,
            feature : {
                mark : {show: true},
                dataView : {show: true, readOnly: false},
                restore : {show: true},
                saveAsImage : {show: true}
            }
        },
        series : [
            {
                name:'树图',
                type:'tree',
                orient: 'horizontal',  // vertical horizontal
                rootLocation: {x: 12,y: 230}, // 根节点位置  {x: 100, y: 'center'}
                nodePadding: 12,
                layerPadding: 200,
                hoverable: false,
                roam: true,
                symbolSize: 12,
                itemStyle: {
                    normal: {
                        color: '#4883b4',
                        label: {
                            show: true,
                            position: 'right',
                            formatter: "{b}",
                            textStyle: {
                                color: '#000',
                                fontSize: 14
                            }
                        },
                        lineStyle: {
                            color: '#ccc',
                            type: 'dashed' // 'curve'|'broken'|'solid'|'dotted'|'dashed'
    
                        }
                    },
                    emphasis: {
                        color: '#4883b4',
                        label: {
                            show: false
                        },
                        borderWidth: 0
                    }
                },
                
                data: [
                    {
                        "name":"皇帝",
                        "children":[
                            {
                                "name":"中书省",
                                "children":[
                                    {
                                        "name":"正一品",
                                        "children":[
                                            {"name":"左丞相"},
                                            {"name":"右丞相"}
                                        ]
                                    },
                                    {
                                        "name":"从一品",
                                        "children":[
                                            {"name":"平章政事"}
                                        ]
                                    },
                                    {
                                        "name":"正二品",
                                        "children":[
                                            {"name":"左丞",},
                                            {"name":"右丞"}
                                        ]
                                    },
                                    {
                                        "name":"从二品",
                                        "children":[
                                            {"name":"参知政事"}
                                        ]
                                    },
                                    {
                                        "name":"正三品",
                                        "children":[
                                            {"name":"参议"}
                                        ]
                                    },
                                    {
                                        "name":"从三品",
                                        "children":[
                                            {"name":"参军"},
                                            {"name":"断事官"}
                                        ]
                                    },
                                    {
                                        "name":"正五品",
                                        "children":[
                                            {"name":"左司郎中"},
                                            {"name":"右司郎中"},
                                            {"name":"都镇抚"}
                                        ]
                                    },
                                    {
                                        "name":"正六品",
                                        "children":[
                                            {"name":"员外郎"},
                                        ]
                                    },
                                    {
                                        "name":"正七品",
                                        "children":[
                                            {"name":"都事"},
                                            {"name":"检校"},
                                            {"name":"断事"},
                                            {"name":"经历"},
                                            {"name":"考功郎"},
                                        ]
                                    },
                                    {
                                        "name":"从七品",
                                        "children":[
                                            {"name":"照磨"},
                                            {"name":"管勾"},
                                            {"name":"中书舍人"},
                                        ]
                                    },
                                ]
                            },
                        ]
                    }
                ]
            }
        ]
    };

    //饼图
    var option2 = {
        title : {
            text: '明朝中后期主要机构',
            subtext: '洪武十三年（1380）以后',
            x:'center'
        },
        tooltip : {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        legend: {
            orient : 'vertical',
            x : 'left',
            data:['内阁','六部','都察院','通政使司','大理寺','翰林院','国子监','五寺','太医院']
        },
        toolbox: {
            show : true,
            feature : {
                mark : {show: true},
                dataView : {show: true, readOnly: false},
                magicType : {
                    show: true, 
                    type: ['pie', 'funnel'],
                    option: {
                        funnel: {
                            x: '25%',
                            width: '50%',
                            funnelAlign: 'left',
                            max: 1548
                        }
                    }
                },
                restore : {show: true},
                saveAsImage : {show: true}
            }
        },
        calculable : true,
        series : [
            {
                name:'机构组成',
                type:'pie',
                radius : '55%',
                center: ['50%', '60%'],
                data:[
                    {value:240, name:'内阁'},
                    {value:240, name:'六部'},
                    {value:240, name:'都察院'},
                    {value:240, name:'通政使司'},
                    {value:240, name:'大理寺'},
                    {value:240, name:'翰林院'},
                    {value:240, name:'国子监'},
                    {value:240, name:'五寺'},
                    {value:240, name:'詹事府'},
                    {value:240, name:'太医院'},
                ]
            }
        ]
    };

    //树形图
    var option3 = {
        title : {
            text: '明朝中后期期官位'
        },
        toolbox: {
            show : true,
            feature : {
                mark : {show: true},
                dataView : {show: true, readOnly: false},
                restore : {show: true},
                saveAsImage : {show: true}
            }
        },
        series : [
            {
                name:'树图',
                type:'tree',
                orient: 'vertical',  // vertical horizontal
                rootLocation: {x: 12,y: 230}, // 根节点位置  {x: 100, y: 'center'}
                nodePadding: 12,
                layerPadding: 200,
                hoverable: false,
                roam: true,
                symbolSize: 1,
                itemStyle: {
                    normal: {
                        color: '#4883b4',
                        label: {
                            show: true,
                            position: 'right',
                            formatter: "{b}",
                            textStyle: {
                                color: '#000',
                                fontSize: 18
                            }
                        },
                        lineStyle: {
                            color: '#ccc',
                            type: 'dotted' // 'curve'|'broken'|'solid'|'dotted'|'dashed'
    
                        }
                    },
                    emphasis: {
                        color: '#4883b4',
                        label: {
                            show: false
                        },
                        borderWidth: 0
                    }
                },
                
                data: [
                    {
                        "name":"内阁",
                        "children":[
                            {"name":"中极殿大学士"},
                            {"name":"建极殿大学士"},
                            {"name":"文华殿大学士"},
                            {"name":"武英殿大学士"},
                            {"name":"文渊阁大学士"},
                            {"name":"东阁大学士"}
                        ]
                    }
                ]
            }
        ]
    };


    var option4 = {
        title : {
            text: '明朝中后期官位',
            subtext: '六部'
        },
        tooltip : {
            trigger: 'item',
            formatter: "{b}: {c}"
        },
        toolbox: {
            show : true,
            feature : {
                mark : {show: true},
                dataView : {show: true, readOnly: false},
                restore : {show: true},
                saveAsImage : {show: true}
            }
        },
        calculable : false,
    
        series : [
            {
                name:'树图',
                type:'tree',
                orient: 'horizontal',  // vertical horizontal
                rootLocation: {x: 100, y: '60%'}, // 根节点位置  {x: 'center',y: 10}
                nodePadding: 30,
                itemStyle: {
                    normal: {
                        label: {
                            show: true,
                            position: 'inside',
                            textStyle: {
                                color: 'black',
                                fontSize: 15,
                                fontWeight:  'bolder'
                            }
                        },
                        lineStyle: {
                            color: '#000',
                            width: 1,
                            type: 'broken' // 'curve'|'broken'|'solid'|'dotted'|'dashed'
                        }
                    },
                    emphasis: {
                        label: {
                            show: true
                        }
                    }
                },
                data: [
                    {
                        name: '六部',
                        value: 10,
                        itemStyle: {
                            normal: {
                                label: {
                                    show: false
                                }
                            }
                        },
                        children: [
                            {
                                name: '吏部',
                                itemStyle: {
                                    normal: {
                                        label: {
                                            show: false
                                        }
                                    }
                                },
                                children: [
                                    {
                                        name: '文选清吏司',
                                        itemStyle: {
                                            normal: {
                                                color: 'black',
                                                label: {
                                                    show: true,
                                                    position: 'right'
                                                },
                                                
                                            },
                                            emphasis: {
                                                label: {
                                                    show: false
                                                },
                                                borderWidth: 0
                                            }
                                        }
                                    },
                                    {
                                        name: '验封清吏司',
                                        itemStyle: {
                                            normal: {
                                                label: {
                                                    show: true,
                                                    position: 'right',
                                                    formatter: "{b}"
                                                },
                                                color: 'black',
                                                borderWidth: 2,
                                                borderColor: '#cc66ff'
    
                                            },
                                            emphasis: {
                                                borderWidth: 0
                                            }
                                        }
                                    },
                                    {
                                        name: '稽勋清吏司',
                                        itemStyle: {
                                            normal: {
                                                label: {
                                                    position: 'right'
                                                },
                                                color: 'black',
                                                brushType: 'stroke',
                                                borderWidth: 1,
                                                borderColor: '#999966',
                                            },
                                            emphasis: {
                                                borderWidth: 0
                                            }
                                        }
                                    },
                                    {
                                        name: '稽勋清吏司',
                                        itemStyle: {
                                            normal: {
                                                label: {
                                                    position: 'right'
                                                },
                                                color: 'black',
                                                brushType: 'stroke',
                                                borderWidth: 1,
                                                borderColor: '#999966',
                                            },
                                            emphasis: {
                                                borderWidth: 0
                                            }
                                        }
                                    }
                                ]
                            },
                            {
                                name: '户部',
                                itemStyle: {
                                    normal: {
                                        label: {
                                            show: false
                                        }
                                        
                                    }
                                },
                                children: [
                                    {
                                        name: '浙江清吏司',
                                        itemStyle: {
                                            normal: {
                                                color: 'black',
                                                label: {
                                                    show: true,
                                                    position: 'right'
                                                },
                                                
                                            },
                                            emphasis: {
                                                label: {
                                                    show: false
                                                },
                                                borderWidth: 0
                                            }
                                        }
                                    },
                                    {
                                        name: '江西清吏司',
                                        itemStyle: {
                                            normal: {
                                                label: {
                                                    show: true,
                                                    position: 'right',
                                                    formatter: "{b}"
                                                },
                                                color: 'black',
                                                borderWidth: 2,
                                                borderColor: '#cc66ff'
    
                                            },
                                            emphasis: {
                                                borderWidth: 0
                                            }
                                        }
                                    },
                                    {
                                        name: '湖广清吏司',
                                        itemStyle: {
                                            normal: {
                                                label: {
                                                    position: 'right'
                                                },
                                                color: 'black',
                                                brushType: 'stroke',
                                                borderWidth: 1,
                                                borderColor: '#999966',
                                            },
                                            emphasis: {
                                                borderWidth: 0
                                            }
                                        }
                                    },
                                    {
                                        name: '陕西清吏司',
                                        itemStyle: {
                                            normal: {
                                                label: {
                                                    position: 'right'
                                                },
                                                color: 'black',
                                                brushType: 'stroke',
                                                borderWidth: 1,
                                                borderColor: '#999966',
                                            },
                                            emphasis: {
                                                borderWidth: 0
                                            }
                                        }
                                    },
                                    {
                                        name: '广东清吏司',
                                        itemStyle: {
                                            normal: {
                                                color: 'black',
                                                label: {
                                                    show: true,
                                                    position: 'right'
                                                },
                                                
                                            },
                                            emphasis: {
                                                label: {
                                                    show: false
                                                },
                                                borderWidth: 0
                                            }
                                        }
                                    },
                                    {
                                        name: '山东清吏司',
                                        itemStyle: {
                                            normal: {
                                                label: {
                                                    show: true,
                                                    position: 'right',
                                                    formatter: "{b}"
                                                },
                                                color: 'black',
                                                borderWidth: 2,
                                                borderColor: '#cc66ff'
    
                                            },
                                            emphasis: {
                                                borderWidth: 0
                                            }
                                        }
                                    },
                                    {
                                        name: '福建清吏司',
                                        itemStyle: {
                                            normal: {
                                                label: {
                                                    position: 'right'
                                                },
                                                color: 'black',
                                                brushType: 'stroke',
                                                borderWidth: 1,
                                                borderColor: '#999966',
                                            },
                                            emphasis: {
                                                borderWidth: 0
                                            }
                                        }
                                    },
                                    {
                                        name: '河南清吏司',
                                        itemStyle: {
                                            normal: {
                                                label: {
                                                    position: 'right'
                                                },
                                                color: 'black',
                                                brushType: 'stroke',
                                                borderWidth: 1,
                                                borderColor: '#999966',
                                            },
                                            emphasis: {
                                                borderWidth: 0
                                            }
                                        }
                                    },
                                    {
                                        name: '山西清吏司',
                                        itemStyle: {
                                            normal: {
                                                color: 'black',
                                                label: {
                                                    show: true,
                                                    position: 'right'
                                                },
                                                
                                            },
                                            emphasis: {
                                                label: {
                                                    show: false
                                                },
                                                borderWidth: 0
                                            }
                                        }
                                    },
                                    {
                                        name: '四川清吏司',
                                        itemStyle: {
                                            normal: {
                                                label: {
                                                    show: true,
                                                    position: 'right',
                                                    formatter: "{b}"
                                                },
                                                color: 'black',
                                                borderWidth: 2,
                                                borderColor: '#cc66ff'
    
                                            },
                                            emphasis: {
                                                borderWidth: 0
                                            }
                                        }
                                    },
                                    {
                                        name: '广西清吏司',
                                        itemStyle: {
                                            normal: {
                                                label: {
                                                    position: 'right'
                                                },
                                                color: 'black',
                                                brushType: 'stroke',
                                                borderWidth: 1,
                                                borderColor: '#999966',
                                            },
                                            emphasis: {
                                                borderWidth: 0
                                            }
                                        }
                                    },
                                    {
                                        name: '贵州清吏司',
                                        itemStyle: {
                                            normal: {
                                                label: {
                                                    position: 'right'
                                                },
                                                color: 'black',
                                                brushType: 'stroke',
                                                borderWidth: 1,
                                                borderColor: '#999966',
                                            },
                                            emphasis: {
                                                borderWidth: 0
                                            }
                                        }
                                    },
                                    {
                                        name: '云南清吏司',
                                        itemStyle: {
                                            normal: {
                                                label: {
                                                    position: 'right'
                                                },
                                                color: 'black',
                                                brushType: 'stroke',
                                                borderWidth: 1,
                                                borderColor: '#999966',
                                            },
                                            emphasis: {
                                                borderWidth: 0
                                            }
                                        }
                                    }
                                ]
                            },
                            {
                                name: '礼部',
                                itemStyle: {
                                    normal: {
                                        label: {
                                            show: false
                                        }
                                        
                                    }
                                },
                                children: [
                                    {
                                        name: '仪制清吏司',
                                        itemStyle: {
                                            normal: {
                                                color: 'black',
                                                label: {
                                                    show: true,
                                                    position: 'right'
                                                },
                                                
                                            },
                                            emphasis: {
                                                label: {
                                                    show: false
                                                },
                                                borderWidth: 0
                                            }
                                        }
                                    },
                                    {
                                        name: '祀祭清吏司',
                                        itemStyle: {
                                            normal: {
                                                label: {
                                                    show: true,
                                                    position: 'right',
                                                    formatter: "{b}"
                                                },
                                                color: 'black',
                                                borderWidth: 2,
                                                borderColor: '#cc66ff'
    
                                            },
                                            emphasis: {
                                                borderWidth: 0
                                            }
                                        }
                                    },
                                    {
                                        name: '主客清吏司',
                                        itemStyle: {
                                            normal: {
                                                label: {
                                                    position: 'right'
                                                },
                                                color: 'black',
                                                brushType: 'stroke',
                                                borderWidth: 1,
                                                borderColor: '#999966',
                                            },
                                            emphasis: {
                                                borderWidth: 0
                                            }
                                        }
                                    },
                                    {
                                        name: '精膳清吏司',
                                        itemStyle: {
                                            normal: {
                                                label: {
                                                    position: 'right'
                                                },
                                                color: 'black',
                                                brushType: 'stroke',
                                                borderWidth: 1,
                                                borderColor: '#999966',
                                            },
                                            emphasis: {
                                                borderWidth: 0
                                            }
                                        }
                                    }
                                ]
                            },
                            {
                                name: '兵部',
                                itemStyle: {
                                    normal: {
                                        label: {
                                            show: false
                                        }
                                        
                                    }
                                },
                                children: [
                                    {
                                        name: '武选清吏司',
                                        itemStyle: {
                                            normal: {
                                                color: 'black',
                                                label: {
                                                    show: true,
                                                    position: 'right'
                                                },
                                                
                                            },
                                            emphasis: {
                                                label: {
                                                    show: false
                                                },
                                                borderWidth: 0
                                            }
                                        }
                                    },
                                    {
                                        name: '职方清吏司',
                                        itemStyle: {
                                            normal: {
                                                label: {
                                                    show: true,
                                                    position: 'right',
                                                    formatter: "{b}"
                                                },
                                                color: 'black',
                                                borderWidth: 2,
                                                borderColor: '#cc66ff'
    
                                            },
                                            emphasis: {
                                                borderWidth: 0
                                            }
                                        }
                                    },
                                    {
                                        name: '车驾清吏司',
                                        itemStyle: {
                                            normal: {
                                                label: {
                                                    position: 'right'
                                                },
                                                color: 'black',
                                                brushType: 'stroke',
                                                borderWidth: 1,
                                                borderColor: '#999966',
                                            },
                                            emphasis: {
                                                borderWidth: 0
                                            }
                                        }
                                    },
                                    {
                                        name: '武库清吏司',
                                        itemStyle: {
                                            normal: {
                                                label: {
                                                    position: 'right'
                                                },
                                                color: 'black',
                                                brushType: 'stroke',
                                                borderWidth: 1,
                                                borderColor: '#999966',
                                            },
                                            emphasis: {
                                                borderWidth: 0
                                            }
                                        }
                                    }
                                ]
                            },
                            {
                                name: '刑部',
                                itemStyle: {
                                    normal: {
                                        label: {
                                            show: false
                                        }
                                        
                                    }
                                },
                                children: [
                                    {
                                        name: '浙江清吏司',
                                        itemStyle: {
                                            normal: {
                                                color: 'black',
                                                label: {
                                                    show: true,
                                                    position: 'right'
                                                },
                                                
                                            },
                                            emphasis: {
                                                label: {
                                                    show: false
                                                },
                                                borderWidth: 0
                                            }
                                        }
                                    },
                                    {
                                        name: '江西清吏司',
                                        itemStyle: {
                                            normal: {
                                                label: {
                                                    show: true,
                                                    position: 'right',
                                                    formatter: "{b}"
                                                },
                                                color: 'black',
                                                borderWidth: 2,
                                                borderColor: '#cc66ff'
    
                                            },
                                            emphasis: {
                                                borderWidth: 0
                                            }
                                        }
                                    },
                                    {
                                        name: '湖广清吏司',
                                        itemStyle: {
                                            normal: {
                                                label: {
                                                    position: 'right'
                                                },
                                                color: 'black',
                                                brushType: 'stroke',
                                                borderWidth: 1,
                                                borderColor: '#999966',
                                            },
                                            emphasis: {
                                                borderWidth: 0
                                            }
                                        }
                                    },
                                    {
                                        name: '陕西清吏司',
                                        itemStyle: {
                                            normal: {
                                                label: {
                                                    position: 'right'
                                                },
                                                color: 'black',
                                                brushType: 'stroke',
                                                borderWidth: 1,
                                                borderColor: '#999966',
                                            },
                                            emphasis: {
                                                borderWidth: 0
                                            }
                                        }
                                    },
                                    {
                                        name: '广东清吏司',
                                        itemStyle: {
                                            normal: {
                                                color: 'black',
                                                label: {
                                                    show: true,
                                                    position: 'right'
                                                },
                                                
                                            },
                                            emphasis: {
                                                label: {
                                                    show: false
                                                },
                                                borderWidth: 0
                                            }
                                        }
                                    },
                                    {
                                        name: '山东清吏司',
                                        itemStyle: {
                                            normal: {
                                                label: {
                                                    show: true,
                                                    position: 'right',
                                                    formatter: "{b}"
                                                },
                                                color: 'black',
                                                borderWidth: 2,
                                                borderColor: '#cc66ff'
    
                                            },
                                            emphasis: {
                                                borderWidth: 0
                                            }
                                        }
                                    },
                                    {
                                        name: '福建清吏司',
                                        itemStyle: {
                                            normal: {
                                                label: {
                                                    position: 'right'
                                                },
                                                color: 'black',
                                                brushType: 'stroke',
                                                borderWidth: 1,
                                                borderColor: '#999966',
                                            },
                                            emphasis: {
                                                borderWidth: 0
                                            }
                                        }
                                    },
                                    {
                                        name: '河南清吏司',
                                        itemStyle: {
                                            normal: {
                                                label: {
                                                    position: 'right'
                                                },
                                                color: 'black',
                                                brushType: 'stroke',
                                                borderWidth: 1,
                                                borderColor: '#999966',
                                            },
                                            emphasis: {
                                                borderWidth: 0
                                            }
                                        }
                                    },
                                    {
                                        name: '山西清吏司',
                                        itemStyle: {
                                            normal: {
                                                color: 'black',
                                                label: {
                                                    show: true,
                                                    position: 'right'
                                                },
                                                
                                            },
                                            emphasis: {
                                                label: {
                                                    show: false
                                                },
                                                borderWidth: 0
                                            }
                                        }
                                    },
                                    {
                                        name: '四川清吏司',
                                        itemStyle: {
                                            normal: {
                                                label: {
                                                    show: true,
                                                    position: 'right',
                                                    formatter: "{b}"
                                                },
                                                color: 'black',
                                                borderWidth: 2,
                                                borderColor: '#cc66ff'
    
                                            },
                                            emphasis: {
                                                borderWidth: 0
                                            }
                                        }
                                    },
                                    {
                                        name: '广西清吏司',
                                        itemStyle: {
                                            normal: {
                                                label: {
                                                    position: 'right'
                                                },
                                                color: 'black',
                                                brushType: 'stroke',
                                                borderWidth: 1,
                                                borderColor: '#999966',
                                            },
                                            emphasis: {
                                                borderWidth: 0
                                            }
                                        }
                                    },
                                    {
                                        name: '贵州清吏司',
                                        itemStyle: {
                                            normal: {
                                                label: {
                                                    position: 'right'
                                                },
                                                color: 'black',
                                                brushType: 'stroke',
                                                borderWidth: 1,
                                                borderColor: '#999966',
                                            },
                                            emphasis: {
                                                borderWidth: 0
                                            }
                                        }
                                    },
                                    {
                                        name: '云南清吏司',
                                        itemStyle: {
                                            normal: {
                                                label: {
                                                    position: 'right'
                                                },
                                                color: 'black',
                                                brushType: 'stroke',
                                                borderWidth: 1,
                                                borderColor: '#999966',
                                            },
                                            emphasis: {
                                                borderWidth: 0
                                            }
                                        }
                                    }
                                ]
                            },
                            {
                                name: '工部',
                                itemStyle: {
                                    normal: {
                                        label: {
                                            show: false
                                        }
                                        
                                    }
                                },
                                children: [
                                    {
                                        name: '营缮清吏司',
                                        itemStyle: {
                                            normal: {
                                                color: 'black',
                                                label: {
                                                    show: true,
                                                    position: 'right'
                                                },
                                                
                                            },
                                            emphasis: {
                                                label: {
                                                    show: false
                                                },
                                                borderWidth: 0
                                            }
                                        }
                                    },
                                    {
                                        name: '虞衡清吏司',
                                        itemStyle: {
                                            normal: {
                                                label: {
                                                    show: true,
                                                    position: 'right',
                                                    formatter: "{b}"
                                                },
                                                color: 'black',
                                                borderWidth: 2,
                                                borderColor: '#cc66ff'
    
                                            },
                                            emphasis: {
                                                borderWidth: 0
                                            }
                                        }
                                    },
                                    {
                                        name: '都水清吏司',
                                        itemStyle: {
                                            normal: {
                                                label: {
                                                    position: 'right'
                                                },
                                                color: 'black',
                                                brushType: 'stroke',
                                                borderWidth: 1,
                                                borderColor: '#999966',
                                            },
                                            emphasis: {
                                                borderWidth: 0
                                            }
                                        }
                                    },
                                    {
                                        name: '屯田清吏司',
                                        itemStyle: {
                                            normal: {
                                                label: {
                                                    position: 'right'
                                                },
                                                color: 'black',
                                                brushType: 'stroke',
                                                borderWidth: 1,
                                                borderColor: '#999966',
                                            },
                                            emphasis: {
                                                borderWidth: 0
                                            }
                                        }
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ]
    };
                        
                        

    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
    myChart2.setOption(option2);
    myChart3.setOption(option3);
    myChart4.setOption(option4);

},false);


