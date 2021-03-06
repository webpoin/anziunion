

// 自定义扩展图表类型：mapType = body
require('/echart/params').params.baiduBuilding = {
    getGeoJson: function (callback) {
        $.ajax({
            url: "svg/baidu-building.svg",
            dataType: 'xml',
            success: function(xml) {
                callback(xml)
            }
        });
    }
}


option = {
    backgroundColor:'#eee',
    title : {
        text : '百度大厦',
        textStyle: {
            color: '#000'
        }
    },
    tooltip : {
        trigger: 'item',
        formatter: '{b}'
    },
    color: ['rgba(218, 70, 214, 1)', 'rgba(100, 149, 237, 1)', 'green'],
    legend: {
        data: ['嘿嘿', '高经', '会议室']
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
            name: '嘿嘿',
            type: 'map',
            mapType: 'baiduBuilding',
            roam:true,
            itemStyle:{
                normal:{label:{show:true}},
                emphasis:{label:{show:true}}
            },
            data: [],
            geoCoord: {
                '叮叮': [39, 45],
                '小兑儿': [71, 45],
                '胡瑶': [195, 29],
                '祖明': [195, 44],
                '林峰': [195, 60],
                '安晨': [210, 44],
                '功': [210, 60],
                '立新': [144, 59],
                '诗才': [195, 71],
                '黄競': [210, 59],
                '浪宇': [150, 55],
                '晓青': [210, 71],
                '毅楠': [222, 59],
                '朝霞': [222, 71],
                '武琦': [231, 71],
                '严萍': [231, 46],
                '绍波': [231, 59],
                '开放': [488, 43],
                '兵兵': [488, 60],
                '孟珂': [522, 43],
                '辉耀': [522, 60],
                '佳璐': [488, 23],
                '新乐': [522, 23],
                '大佛': [165, 29],
                '周玉': [165, 44],
                '令君': [165, 60],
                '佳璐': [165, 71],
                'erik': [222, 44],
                '爽哥': [240, 60],
                '雷哥': [240, 44],
                '坤哥': [176, 59],
                '刚哥': [176, 71],
                '高经': [545, 54],
                '邱华': [468, 23],
                '饥渴难耐的辉辉': [473, 40],
                '大发': [500, 40],
                '淼童': [473, 60],
                '亚江': [500, 60],
                '莉姐': [530, 70],
                '红启': [570, 54],
                '五福降中天': [373, 173],
                'csfe': [500, 54],
                '得胜令': [253, 179],
                '西湖春': [496, 179],
                '望江南': [72, 203],
                '庆千秋': [86, 203],
                '过江龙': [289, 32],
                '天下乐': [289, 50],
                '万年欢': [687, 24],
                '浣溪沙': [637, 203],
                '清平乐': [649, 203],
                '四和春': [663, 203],
                '杏花天': [676, 203]
            },
            markPoint : {
                symbolSize : 3,
                data : [
                    {name: '叮叮'},
                    {name: '小兑儿'},
                    {name: '胡瑶'},
                    {name: '高经'},
                    {name: 'erik'},
                    {name: '祖明'},
                    {name: '林峰'},
                    {name: '坤哥'},
                    {name: '刚哥'},
                    {name: '爽哥'},
                    {name: '雷哥'},
                    {name: '邱华'},
                    {name: '淼童'},
                    {name: '亚江'},
                    {name: '莉姐'},
                    {name: '大发'},
                    {name: '饥渴难耐的辉辉'},
                    {name: '红启'},
                    {name: '安晨'},
                    {name: '功'},
                    {name: '立新'},
                    {name: '诗才'},
                    {name: '黄競'},
                    {name: '晓青'},
                    {name: '毅楠'},
                    {name: '浪宇'},
                    {name: '朝霞'},
                    {name: '严萍'},
                    {name: '武琦'},
                    {name: '绍波'},
                    {name: '开放'},
                    {name: '兵兵'},
                    {name: '孟珂'},
                    {name: '辉耀'},
                    {name: '佳璐'},
                    {name: '新乐'},
                    {name: '周玉'},
                    {name: '令君'},
                    {name: '佳璐'}
                ]
            },
            markLine : {
                smooth:true,
                effect : {
                    show: true,
                    scaleSize: 1,
                    period: 20,
                    color: '#fff',
                    shadowBlur: 5
                },
                symbol: ['none'],
                itemStyle : {
                    normal: {
                        borderWidth:1,
                        lineStyle: {
                            type: 'solid'
                        }
                    }
                },
                data : [
                    [
                        {name:'erik'}, 
                        {name:'胡瑶'}
                    ],
                    [
                        {name:'祖明'}, 
                        {name:'叮叮'}
                    ],
                    [
                        {name:'祖明'}, 
                        {name:'小兑儿'}
                    ]
                ]
            }
        },
        {
            name: '高经',
            type: 'map',
            mapType: 'baiduBuilding',
            roam:true,
            symbol: ['none'],
            itemStyle:{
                normal:{label:{show:true}},
                emphasis:{label:{show:true}}
            },
            data: [],
            markLine : {
                smooth:true,
                effect : {
                    show: true,
                    scaleSize: 1,
                    period: 20,
                    color: '#fff',
                    shadowBlur: 5
                },
                itemStyle : {
                    normal: {
                        borderWidth:1,
                        lineStyle: {
                            type: 'solid'
                        }
                    }
                },
                data : [
                    [
                        {name:'高经'}, 
                        {name:'洗手间', geoCoord:[440, 179]}
                    ],
                    [
                        {name:'高经'}, 
                        {name:'洗手间', geoCoord:[637, 53]}
                    ],
                    [
                        {name:'高经'}, 
                        {name:'洗手间', geoCoord:[637, 179]}
                    ],
                    [
                        {name:'高经'},
                        {name:'洗手间', geoCoord:[307, 179]}
                    ]
                ]
            }
        },
        {
            name: '会议室',
            type: 'map',
            mapType: 'baiduBuilding',
            roam:true,
            itemStyle:{
                normal:{label:{show:true}},
                emphasis:{label:{show:true}}
            },
            data:[],
            markPoint : {
                symbol:'circle',
                symbolSize : 2,
                color: 'green',
                data : []
            },
            markLine : {
                smooth:true,
                effect : {
                    show: true,
                    scaleSize: 1,
                    period: 20,
                    color: '#fff',
                    shadowBlur: 5
                },
                symbol: ['none'],
                itemStyle : {
                    normal: {
                        borderWidth:1,
                        lineStyle: {
                            type: 'solid'
                        }
                    }
                },
                data : [
                    [
                        {name:'淼童'},
                        {name:'五福降中天'}
                    ],
                    [
                        {name:'大发'},
                        {name:'西湖春'}
                    ],
                    [
                        {name:'林峰'},
                        {name:'望江南'}
                    ],
                    [
                        {name:'莉姐'},
                        {name:'杏花天'}
                    ],
                    [
                        {name:'雷哥'},
                        {name:'过江龙'}
                    ],
                    [
                        {name:'毅楠'},
                        {name:'天下乐'}
                    ],
                    [
                        {name:'红启'},
                        {name:'万年欢'}
                    ],
                    [
                        {name:'亚江'},
                        {name:'浣溪沙'}
                    ],
                    [
                        {name:'爽哥'},
                        {name:'得胜令'}
                    ],
                    [
                        {name:'饥渴难耐的辉辉'},
                        {name:'万年欢'}
                    ]
                ]
            }
        },
        {
            type: 'map',
            mapType: 'baiduBuilding',
            data: [],
            markPoint: {
                symbol: 'emptyCircle',
                effect: {
                    show: true,
                    color: 'rgba(218, 70, 214, 1)'
                },
                data: [
                    {name: '叮叮'},
                    {name: '小兑儿'},
                    {name: '胡瑶'},
                    {name: '淼童'}
                ]
            }
        },
        {
            type: 'map',
            mapType: 'baiduBuilding',
            data: [],
            markPoint: {
                symbol: 'emptyCircle',
                effect: {
                    show: true,
                    color: 'rgba(100, 149, 237, 1)'
                },
                data: [
                    {name: '高经'}
                ]
            }
        },
        {
            type: 'map',
            mapType: 'baiduBuilding',
            data: [],
            markPoint: {
                symbol: 'emptyCircle',
                symbolSize : 15,
                effect: {
                    show: true,
                    color: 'green'
                },
                data: [
                    {name: '五福降中天'}
                ]
            }
        }
    ]
};
                    