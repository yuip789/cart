const Mock = require('mockjs');
const Random = Mock.Random;


export const goodsData = () => {
    let goods = [];
    for (let i = 0; i < 100; i++) {
        let object = {
            name: Random.ctitle(),
            // name: Random.cparagraph(),
            // price: Random.natural(),
            url: `https://gw.alicdn.com/tfs/TB17rMNN2b2gK0jSZK9XXaEgFXa-255-204.jpg`,
            price: Random.natural(1, 100),
        }
        goods.push(object);
    }
    return goods;
}
Mock.mock('/goods','get',goodsData);