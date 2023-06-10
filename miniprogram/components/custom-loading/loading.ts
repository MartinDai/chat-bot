const defaultOptions = {
  selector: '#custom-loading',
};

function getContext() {
  const pages = getCurrentPages();
  return pages[pages.length - 1];
}

const Loading = (options = {}) => {
  options = Object.assign({ ...defaultOptions }, options);

  return new Promise<void>(() => {
    const content = getContext();
    if (content) {
      // @ts-ignore
      const loading = content.selectComponent(options.selector || "");
      // @ts-ignore
      delete options.selector;
      if (loading) {
        loading.setData(options);
      } else {
        console.warn('未找到 custom-loading 节点，请确认 selector 及 context 是否正确');
      }
    } else {
      console.warn('未找到 custom-loading 节点所在的页面栈信息');
    }
  });
};

Loading.show = function () {
  return Loading({
    loading: true,
  });
};

Loading.clear = function () {
  return Loading({
    loading: false,
  });
};

export { Loading };