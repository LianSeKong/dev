const { prisma } = require("../utils/dbConnect");
const { CallJSTAPI } = require("../utils/CallJSTAPI");
const { CronJob } = require('cron');
const moment = require('moment')

// 递增周期
/**
 * 
 * @param { String } modified_begin 
 * @param { String } modified_end 
 * @returns { Object } 
 */
function increaseTime(modified_begin, modified_end) {
    modified_begin = new moment(modified_begin).add(7, "days")
    modified_end = new moment(modified_end).add(7, "days")
    return {modified_begin, modified_end}
}


function goToNext(modified_begin, modified_end) {
    const currentTime = increaseTime(modified_begin, modified_end)
    return {
        wms_co_id: 0,  // 分仓公司编号
        page_index: 1,
        modified_begin: currentTime.modified_begin,
        modified_end: currentTime.modified_end,
        has_lock_qty: true,
        page_size: 100
    }
}

let biz = {
    "wms_co_id": 0,
    "page_index": 1,
    "modified_begin": "2024-04-22 01:00:06",
    "modified_end": "2024-04-28 00:00:06",
    "has_lock_qty": true,
    "page_size": 100
}
/**
 * 1. 请求数据（一次请求七天）
 *    *  每五秒一次
 *    *  将数据存储在list中
 *    *  不断循环直到时间为2020年
 *    *  当list的长度大于10000时， 进行数据库操作
 *    *  list清空
 *   
 * 
 */
const cronTime = '0 0/5 * * * *';
let hasNext = true;
let list = [];
let isInOperation = false;
new CronJob(cronTime, 
    async function () {
        if (hasNext) {
            if (!isInOperation) {
                CallJSTAPI('open/inventory/query', biz).then(res => {
                    if (res.code === 0) {
                        const { has_next = false, inventorys } = res.data;
                        list.push(...inventorys);
                        biz.page_index += 1;
                        hasNext = has_next;
                    }
                })
            }
        } else {
            // 增加时间周期

        }
        CallJSTAPI('open/inventory/query', biz).then(res => {
            console.log(res.data.inventorys);
            res.data.inventorys.forEach( async (element) => {
                delete element.ts
                const update = {...element}
                delete update.sku_id
                const upsertUser = await prisma.inventory.upsert({
                    where: {
                      sku_id: element.sku_id,
                    },
                    update,
                    create: element,
                })
                console.log(upsertUser);
            })
        })
    }, // onTick
    function () {

    }, // onComplete
    true, // start
    'system'
);


