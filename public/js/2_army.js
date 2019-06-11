//在父窗口控制子窗口的三个开关，并且实现页头部分三开关的跳转
hasSkip();

//通过地址栏的true&&false信息来决定登录还是已登录
window.addEventListener("load",function(){
    var myChart1 = echarts.init(document.getElementById('main1'));
    myChart1.title = '嵌套环形图';

    var option1 = {
        tooltip: {
            trigger: 'item',
            formatter: "{a} <br/>{b}: {c} ({d}%)"
        },
        legend: {
            orient: 'vertical',
            x: 'right',
            data:['京军','边军','地方边军','蓟州','益府','大同','偏头','固原','延绥','宁夏','甘肃','卫所军','镇戌军','民军','土司兵']
        },
        series: [
            {
                name:'大明主要军队',
                type:'pie',
                selectedMode: 'single',
                radius: [0, '30%'],

                label: {
                    normal: {
                        position: 'inner'
                    }
                },
                labelLine: {
                    normal: {
                        show: false
                    }
                },
                data:[
                    {value:100, name:'京军', selected:true},
                    {value:100, name:'边军'},
                    {value:100, name:'地方边军'}
                ]
            },
            {
                name:'',
                type:'pie',
                radius: ['40%', '55%'],
                label: {
                    normal: {
                        formatter: '{a|{a}}{abg|}\n{hr|}\n  {b|{b}：}{c}  {per|{d}%}  ',
                        backgroundColor: '#eee',
                        borderColor: '#aaa',
                        borderWidth: 1,
                        borderRadius: 4,
                        // shadowBlur:3,
                        // shadowOffsetX: 2,
                        // shadowOffsetY: 2,
                        // shadowColor: '#999',
                        // padding: [0, 7],
                        rich: {
                            a: {
                                color: '#999',
                                lineHeight: 1,
                                align: 'center'
                            },
                            abg: {
                                backgroundColor: '#333',
                                width: '100%',
                                align: 'right',
                                height: 1,
                                borderRadius: [4, 4, 0, 0]
                            },
                            hr: {
                                borderColor: '#aaa',
                                width: '100%',
                                borderWidth: 0.5,
                                height: 0
                            },
                            b: {
                                fontSize: 16,
                                lineHeight: 33
                            },
                            per: {
                                color: '#eee',
                                backgroundColor: '#334455',
                                padding: [2, 4],
                                borderRadius: 2
                            }
                        }
                    }
                },
                data:[
                    {value:600, name:'京营'},
                    {value:600, name:'亲军'},
                    {value:600, name:'辽东'},
                    {value:200, name:'蓟州'},
                    {value:200, name:'益府'},
                    {value:200, name:'大同'},
                    {value:200, name:'偏头'},
                    {value:200, name:'固原'},
                    {value:200, name:"延绥"},
                    {value:200, name:'宁夏'},
                    {value:200, name:'甘肃'},
                    {value:420, name:'卫所军'},
                    {value:420, name:'镇戌军'},
                    {value:420, name:'民军'},
                    {value:420, name:'土司兵'},
                ]
            }
        ]
    };

    myChart1.setOption(option1);
},false)
