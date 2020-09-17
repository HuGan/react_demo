import server from './server';
// const isDev = process.env.NODE_ENV === 'development';

// 获取壁纸列表
export function getLockscreenWallpaper(param: object) {
  return server.post(`http://wp.birdpaper.cn/intf/GetLockscreenWallpaper`, param);
}