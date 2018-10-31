import {HTTP} from '../util/http.js'
class ClassicModel extends HTTP{
  getLatest(sCallback){
    this.request({
      // url: '/v1/classic/latest',
      success: (res) => {
        //由于appkey有问题，只能弄虚拟数据
        res = { like_status: 0, fav_nums: 11, image:'http://bl.7yue.pro/images/movie.8.png', 
        content:'人生不能像做菜，把所有的料准备好才下锅', id:1, type:200,
        index:8 }
        sCallback(res)
      }
    })
  }
}

export {ClassicModel}