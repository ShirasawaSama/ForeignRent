declare interface IAppOption {
  globalData: {
  }
  userInfoReadyCallback?: WechatMiniprogram.GetUserInfoSuccessCallback
}

declare module 'miniprogram-api-promise' {
  type Wx = WechatMiniprogram.Wx

  export type Wxp = {
    [P in keyof Wx]: Parameters<Wx[P]>[0] extends undefined ? Wx[P]
      : NonNullable<NonNullable<Parameters<Wx[P]>[0]>['success']> extends undefined
        ? never
        : (option?: Omit<Parameters<Wx[P]>[0], 'success' | 'fail'>) => Promise<Parameters<NonNullable<NonNullable<Parameters<Wx[P]>[0]>['success']>>[0]>
  }

  export declare function promisify<Func>(func: Func): (option: ParamType<Func> = {}) => Promise<ResultType<Func>>
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  export declare function promisifyAll(wx: Wx, wxp: any): void
}
