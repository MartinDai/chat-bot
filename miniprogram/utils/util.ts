/**
 * @method getItemSync 缓存读取
 * @param {*} key
 */
export const getItemSync = (key: string) => {
  try {
    return wx.getStorageSync(key);
  } catch (err) {
    console.error('wx.getStorageSync(key)', err);
  }
};

/**
 * @method setItemSync 缓存存储
 * @param {*} key
 * @param {*} value
 */
export const setItemSync = (key: string, value: string) => {
  try {
    wx.setStorageSync(key, value);
  } catch (err) {
    console.error('wx.setStorageSync(key, value)', err);
  }
};

/**
 * @method deleteItemSync 缓存删除
 * @param {*} key
 */
export const deleteItemSync = (key: string) => {
  try {
    return wx.removeStorageSync(key);
  } catch (err) {
    console.error('wx.removeStorageSync(key)', err);
  }
};

/**
 * @method getCurrentPageInfo 获取当前页面栈中指定路径的页面信息
 * @param {*} path app.json中定义的完整路径
 */
export const getCurrentPageInfo = (path: string) => {
  // 存在指定路径， 返回指定路径页面详情
  if (path) {
    // 反转数组，返回最后一次出现路由
    return getCurrentPages()
      .reverse()
      .find((item) => {
        return `/${item.route}` === path;
      });

    // 反转数组,返回当前页面详情
  } else {
    return getCurrentPages().reverse()[0];
  }
};

/**
 * @method getCurrentPageIndex 获取当前页面栈中指定路径的下标
 * @param {*} path app.json中定义的完整路径
 */
export const getCurrentPageIndex = (path: string) => {
  return getCurrentPages()
    .reverse()
    .findIndex((item) => {
      return `/${item.route}` === path;
    });
};
