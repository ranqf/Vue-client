//使用mockjs来mock数据/接口的模块
import Mock from "mockjs"
import msite from "./msite.json"

//暴露接口: /kingKongList
Mock.mock('/kingKongList', {code: 200, data: msite.kingKongModule.kingKongList});

