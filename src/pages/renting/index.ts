const rooms = [
  {
    image: '0.jpg',
    title: '利比亚小镇20 100房3厅',
    subtitle: '413㎡ | 100房3厅 | 朝南',
    tags: ['整租', '三十卫生间'],
    location: '房间就在地铁站里边',
    price: 3
  },
  {
    image: '0.jpg',
    title: '巴基斯坦313号公共厕所',
    subtitle: '413㎡ | 1房375卫 | 朝东',
    tags: ['挺好'],
    location: '房间在天上',
    price: 3523
  },
  {
    image: '0.jpg',
    title: '利比亚小镇20 100房3厅',
    subtitle: '413㎡ | 100房3厅 | 朝南',
    tags: ['整租', '三十卫生间'],
    location: '房间就在地铁站里边',
    price: 3
  },
  {
    image: '0.jpg',
    title: '巴基斯坦313号公共厕所',
    subtitle: '413㎡ | 1房375卫 | 朝东',
    tags: ['挺好'],
    location: '房间在天上',
    price: 3523
  }
]

// eslint-disable-next-line @typescript-eslint/no-explicit-any
rooms.forEach((it: any) => (it.time = Date.now()))

Page({
  data: {
    rooms
  }
})
