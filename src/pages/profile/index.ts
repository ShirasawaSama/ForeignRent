import * as wxp from 'weapp-api-promise'

Page({
  data: {
    name: '',
    avatar: ''
  },
  onLoad () {
    wxp.getSetting().then(res => {
      if (!res.authSetting['scope.userInfo']) return
      return wx.getUserInfo({ success: it => this.setUserData(it) })
    }).catch(console.error)
  },
  getUserInfo (data) {
    this.setUserData(data.detail)
  },
  setUserData (data: WechatMiniprogram.GetUserInfoSuccessCallbackResult) {
    console.log(data)
    if (!data || data.errMsg !== 'getUserInfo:ok') return
    this.setData({ avatar: data.userInfo.avatarUrl, name: data.userInfo.nickName })
  }
})
