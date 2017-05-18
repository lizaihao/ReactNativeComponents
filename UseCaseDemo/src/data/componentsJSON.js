import React from 'react';


const componentsData = {
    components: [
        {
            name: '管理层',
            person: [{ name: '张云' }, { name: '李想' }, { name: '郭跃' }, { name: '刘涵' }, { name: '彰武' },],
            childName: [{ name: '管理层秘书处', person: [{ name: '风雨' }, { name: '武圣' }], childName: [{ name: '秘书处科室1', person: [{ name: '苟皓衍' }, { name: '黄佳明' }] }, { name: '秘书处科室2', person: [{ name: '浮云份' }, { name: '韩思敏' }] }] }]
        },
        {
            name: '人事部',
            person: [{ name: '张云' }, { name: '李想' }, { name: '郭跃' }, { name: '刘涵' }, { name: '彰武' },],
            childName: [{ name: '人事部1处', person: [{ name: '风雨' }, { name: '武圣' }], childName: [{ name: '财务科', person: [{ name: '苟皓衍' }, { name: '黄佳明' }] }, { name: '理财科', person: [{ name: '浮云份' }, { name: '韩思敏' }] }] }]
        },
        {
            name: '财务部',
            person: [{ name: '张云' }, { name: '李想' }, { name: '郭跃' }, { name: '刘涵' }, { name: '彰武' },],
            childName: [{ name: '财务部1处', person: [{ name: '风雨' }, { name: '武圣' }], childName: [{ name: '档案科', person: [{ name: '苟皓衍' }, { name: '黄佳明' }] }, { name: '人事科', person: [{ name: '浮云份' }, { name: '韩思敏' }] }] }]
        },
        {
            name: '生物公司',
            person: [{ name: '张云' }, { name: '李想' }, { name: '郭跃' }, { name: '刘涵' }, { name: '彰武' },],
            childName: [
                {
                    name: '生物公司研发部', person: [{ name: '风雨' }, { name: '武圣' }], childName: [{ name: '研发部', person: [{ name: '苟皓衍' }, { name: '黄佳明' }] }, { name: '装备处', person: [{ name: '浮云份' }, { name: '韩思敏' }] }]
                },
                {
                    name: '生物公司后勤部', person: [{ name: '风雨' }, { name: '武圣' }], childName: [{ name: '后勤一科', person: [{ name: '苟皓衍' }, { name: '黄佳明' }] }, { name: '食堂科', person: [{ name: '浮云份' }, { name: '韩思敏' }] }]
                },
            ]
        },
    ]
}


module.exports = componentsData; 