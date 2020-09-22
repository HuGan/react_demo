import server from './server';
// const isDev = process.env.NODE_ENV === 'development';

// 获取壁纸列表
export function getLockscreenWallpaper(param: object) {
  return server.get(`/api/json.json`, param);
}