
String.prototype.compare = function(str) {
    //不区分大小写
    if (this.toLowerCase().search(str.toLowerCase()) != -1) {
        return true;
    } else {
        return false;
    }
}

String.prototype.compare_CapLock = function(str) {
    //不区分大小写
    if (this.search(str) != -1) {
        return true;
    } else {
        return false;
    }
}

var keyword={
    '高德':['AMap','AmapLocationManager','ApsManager','com.loc.'],
    '同盾':['cn.tongdun.android'],
    '闪验':['com.chuanglan.shanyan'],
    '天翼账号sdk':['cn.com.chinatelecom.account.api'],
    '滴滴DoraemonKit':['com.didichuxing.doraemonkit.kit'],
    'amitshekhar':['amitshekhar'],
    '腾讯移动分析(MTA)':['com.tencent.stat'],
    '腾讯内存泄露解决方案(TBS)':['com.tencent.smtt'],
    'chromium':['chromium']
}

function checkkeyword(bt){
    var rkeyword = '';
    for (var n in keyword){
        // console.log(n)
        // console.log(keyword[n])
        for (var m in keyword[n]){
            // console.log(m)
            // console.log(keyword[n][m])
            if (bt.compare_CapLock(keyword[n][m])) {
                // console.log('keyword:'+n);
                rkeyword+='['+n+']';
            }
        }
    }
    if (rkeyword=='') {rkeyword = 'NotBelongToAnySDK'}
    return rkeyword
}

function hook_all_method(targetClass, funcdict, countvar,tag) {
    Java.perform(function() {
        //目标类
        var hook = Java.use(targetClass);
        console.log('class:'+targetClass);
        var mhd_array = hook.class.getDeclaredMethods();
        for (var f = 0; f < mhd_array.length; f++) {
            var mhd_cur = mhd_array[f]; 
            var targetMethod = mhd_cur.getName(); 
            var overloadCount = hook[targetMethod].overloads.length;
            if (funcdict != null) {
                for (var k = 0; k < funcdict.length; k++) {
                    // console.log(targetMethod+' '+funcdict[k]['funcname'])
                    if (targetMethod == funcdict[k]['funcname']) {
                        console.log('hook ' + targetClass + ':' + targetMethod);
                        overload_hook(overloadCount, targetMethod, hook, targetClass, countvar, funcdict[k],tag);
                    }
                }
            }
        }
    });
}
function overload_hook(overloadCount, targetMethod, hook, targetClass, countvar, funcunit,tag) {
    for (var i = 0; i < overloadCount; i++) {
        hook[targetMethod].overloads[i].implementation = function() {
            var retval = this[targetMethod].apply(this, arguments); // rare crash (Frida bug?)
            countvar += 1;
            /*   --- Payload Header --- */
            var send_data = {};
            send_data.time = new Date();
            send_data.txnType = tag;
            send_data.lib = targetClass;
            send_data.method = funcunit['funcname'] ;//+ '\n\nUsed:' + funcunit['used'];
            send_data.artifact = [];
            var bt = Java.use("android.util.Log").getStackTraceString(Java.use("java.lang.Exception").$new());
            let len = bt.split('\n').length
            // console.log(len)
            if (len == 3){
                // 行数等于2的暂不记录
            }
            else{
                send_data.belongto = checkkeyword(bt);
                var data = {};
                data.value = bt;
                data.argSeq = 0;
                send_data.artifact.push(data);
                send(JSON.stringify(send_data));
            }
            return retval;
        }
    }
}

function init_predefine(predefine){
    for (var line in predefine) {
    // console.log('line:'+predefine[line]);
    var thisclass = predefine[line]['class'];
    var thisfuncs = predefine[line]['funclist'];
    var thiscount = predefine[line]['count'];
    var thistag = predefine[line]['tag'];
    hook_all_method(thisclass, thisfuncs, thiscount,thistag)
}
}