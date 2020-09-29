import axios from 'axios';
import qs from 'qs';
let actions = ['get', 'post', 'put', 'delete'];

axios.jsonp = (url, data) => {
  if (!url)
    throw new Error('url is necessary')
  const callback = 'CALLBACK' + Math.random().toString().substr(9, 18)
  const JSONP = document.createElement('script')
  JSONP.setAttribute('type', 'text/javascript')

  const headEle = document.getElementsByTagName('head')[0]

  let ret = '';
  if (data) {
    if (typeof data === 'string')
      ret = '&' + data;
    else if (typeof data === 'object') {
      for (let key in data)
        ret += '&' + key + '=' + encodeURIComponent(data[key]);
    }
    ret += '&_time=' + Date.now();
  }
  JSONP.src = `${url}?sts_type=shtech-diy&callback=${callback}${ret}`;
  return new Promise((resolve, reject) => {
    window[callback] = r => {
      resolve(r)
      headEle.removeChild(JSONP)
      delete window[callback]
    }
    headEle.appendChild(JSONP)
  })
}


const axiosInst = axios.create({
  timeout: 5000
});

axiosInst.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded; charset=UTF-8';

axiosInst.interceptors.request.use(
  config => {
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

// respone拦截器
axiosInst.interceptors.response.use(
  response => {
    return response;
  },
  error => {
    return Promise.resolve(error.response);
  }
);

function checkStatus(response = {}) {
  if (response.status === 200 || response.status === 304 || response.status === 400) {
    return response.data || {};
  }
  const message = response.data.message || response.message || '网络异常';
  return {
    status: 404,
    message
  };
}

function checkCode(res) {
  if (res.data !== false) {
    res.data = res.data || {};
  }

  if (res.errno !== 0) {
    var data = res.data;
    data.errno = res.errno;
    return data;
  }
  return res.data;
}

actions.forEach(action => {
  let methods = ['PUT', 'POST', 'PATCH'];
  let data = 'params';
  axiosInst[action] = (url, params = {}) => {
    if (
      methods.some(item => {
        return item === action.toUpperCase();
      })
    ) {
      data = 'data';
    }
    if (action === 'post') {
      params = qs.stringify(params);
    }
    return axiosInst({
        method: action,
        url,
        [data]: params
      })
      .then(response => {
        return checkStatus(response);
      })
      .then(res => {
        return checkCode(res);
      });
  };
});

export default axiosInst;