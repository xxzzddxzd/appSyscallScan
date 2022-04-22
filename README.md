# 改编于appmon的api调用检测平台

## 使用（安卓检测）
1. 安装nox模拟器
2. 安装frida环境于pc、模拟器中
3. 启动模拟器、启动frida-server进程
4. 安装目标app，使用命令行启动后台检测服务
   - adb connect 127.0.0.1:62001 adb连接模拟器
   - adb install xxxxx.apk 安装应用
   - adb shell /data/local/tmp/frida-server &  启动模拟器中的server
   - python3 appmon.py -p android -a "com.app.bundle" --spawn=1 -s scripts/Android 启动监测平台并开启app
   - 在https://localhost:5000/ 查看检测结果


## 增加检测项
1. 在scripts/Android/Privacy中添加api规则
2. 在Privacy_default.js中的keyword对关键字进行定义