# 目录结构
这个项目没有用webpack打包，只用了requirejs来做依赖管理和文件模块化管理，(Component/Assets/zh-CN) 这个是我从tfs上复制下来为了继续下一步合成用的

- components 组件目录 
- entry 入口目录，里面的startup就是 requirejs的入口文件
- pages 页面目录，里面每一个页面一个文件夹的方式来存放，里面就是js和index页面，这里面每一个页面都是一个组件
- modules 是存在外部库的文件夹

# 运行方法
- 直接把这个文件夹放到iis目录下即可，没有任何其它编译和依赖