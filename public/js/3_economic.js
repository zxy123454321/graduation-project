//在父窗口控制子窗口的三个开关，并且实现页头部分三开关的跳转
hasSkip();

//通过地址栏的true&&false信息来决定登录还是已登录
window.addEventListener("load",function(){
    console.log("wo shi yi zhang gong");
    var headinfoLogin = document.getElementById('top_iframe') 
        .contentWindow.document.getElementById("denglu");
    var info = window.location.search.substring(1).split("&&")[0].split("=")[1];
    if(info=="false"){
        headinfoLogin.children[0].innerHTML="登录";
    }else if(info=="true"){
        headinfoLogin.children[0].innerHTML="退出登录";
    }

    //人口统计
    var myChart1 = echarts.init(document.getElementById('main1'));
    var option1 = {
        title : {
            text: '明朝人口统计图',
            subtext: '人口总数'
        },
        tooltip : {
            trigger: 'axis'
        },
        legend: {
            data:['人口']
        },
        toolbox: {
            show : true,
            feature : {
                mark : {show: true},
                dataView : {show: true, readOnly: false},
                magicType : {show: true, type: ['line', 'bar']},
                restore : {show: true},
                saveAsImage : {show: true}
            }
        },
        calculable : true,
        xAxis : [
            {
                type : 'category',
                data : ['1381年','1393年','1403年','1404年','1479年','1488年','1491年','1502年','1504年','1578年','1620年','1644年']
            }
        ],
        yAxis : [
            {
                type : 'value'
            }
        ],
        series : [
            {
                name:'明朝人口',
                type:'bar',
                data:[59870000,65000000,66590000,50950000,71850000,75000000,53280000,50900000,60100000,60690000,51650000,100000000],
                markPoint : {
                    data : [
                        {type : 'max', name: '最大值'},
                        {type : 'min', name: '最小值'}
                    ]
                },
                markLine : {
                    data : [
                        {type : 'average', name: '平均值'}
                    ]
                }
            },
        ]
    };
    myChart1.setOption(option1);

    //税收统计
    var myChart2 = echarts.init(document.getElementById('main2'));
    var option2 = {
        title : {
            text: '明朝税收统计图',
            subtext: '税收总数'
        },
        tooltip : {
            trigger: 'axis'
        },
        legend: {
            data:['税收']
        },
        toolbox: {
            show : true,
            feature : {
                mark : {show: true},
                dataView : {show: true, readOnly: false},
                magicType : {show: true, type: ['line', 'bar']},
                restore : {show: true},
                saveAsImage : {show: true}
            }
        },
        calculable : true,
        xAxis : [
            {
                type : 'category',
                data : ['明初','正统年间','正德年间','嘉靖年间','隆庆年间','崇祯时期前','崇祯时期后']
            }
        ],
        yAxis : [
            {
                type : 'value'
            }
        ],
        series : [
            {
                name:'明朝税收',
                type:'bar',
                data:[15000000,22000000,6000000,4000000,8000000,8000000,10000000],
                markPoint : {
                    data : [
                        {type : 'max', name: '最大值'},
                        {type : 'min', name: '最小值'}
                    ]
                },
                markLine : {
                    data : [
                        {type : 'average', name: '平均值'}
                    ]
                }
            },
        ]
    };
    myChart2.setOption(option2);
},false)
