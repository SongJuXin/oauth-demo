# oauth demo
演示了`github`,`baidu`的oauth认证方式的基本用法。
## 注意
要运行此demo，需要分别到`baidu`的https://github.com/settings/developers 或者 `github`的http://developer.baidu.com/console#app/project 两个网站上，注册并添加自己的oatuh信息。


注册信息包含`重定向url`，要和自己项目内的保持一致。本项目中:`github`的`重定向url`为`http://*.*.*.*:9892/redirect.html`, `baidu`的`重定向url`为`http://*.*.*.*:9892/baidu-redirect.html`


## 更多参考信息
- https://openauth.baidu.com/doc/prepare.html
- https://docs.github.com/en/developers/apps/building-oauth-apps/authorizing-oauth-apps
