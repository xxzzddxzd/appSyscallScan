/**
    隐私权政策 - 设备信息
**/
'use strict';

var predefine_hardware = [{
    'tag': '硬件信息读取',
    'class': 'java.net.NetworkInterface',
    'funclist': [{
        'funcname': 'getDisplayName',
        'used': 'Get the display name of this network interface.',
        'returntype': 'String'
    },
    {
        'funcname': 'getHardwareAddress',
        'used': 'Returns the hardware address (usually MAC) of the interface if it has one and if it can be accessed given the current privileges.',
        'returntype': 'byte[]'
    },
    {
        'funcname': 'getInetAddresses',
        'used': 'Convenience method to return an Enumeration with all or a subset of the InetAddresses bound to this network interface.',
        'returntype': 'Enumeration<InetAddress>'
    },
    {
        'funcname': 'getInterfaceAddresses',
        'used': 'Get a List of all or a subset of the InterfaceAddresses of this network interface.',
        'returntype': 'List<InterfaceAddress>'
    },
    {
        'funcname': 'getMTU',
        'used': 'Returns the Maximum Transmission Unit (MTU) of this interface.',
        'returntype': 'int'
    },
    {
        'funcname': 'getName',
        'used': 'Get the name of this network interface.',
        'returntype': 'String'
    },
    {
        'funcname': 'getNetworkInterfaces',
        'used': 'Returns all the interfaces on this machine.',
        'returntype': 'staticEnumeration<NetworkInterface>'
    },
    {
        'funcname': 'getParent',
        'used': 'Returns the parent NetworkInterface of this interface if this is a subinterface, or null if it is a physical (non virtual) interface or has no parent.',
        'returntype': 'NetworkInterface'
    },
    {
        'funcname': 'getSubInterfaces',
        'used': 'Get an Enumeration with all the subinterfaces (also known as virtual interfaces) attached to this network interface.',
        'returntype': 'Enumeration<NetworkInterface>'
    }],
    'count': 0
},{
    'tag': '硬件信息读取 - IMEI/MEID',
    'class': 'android.telephony.TelephonyManager',
    'funclist': [
        {'funcname': 'getImei','used': 'IMEI'},
        {'funcname': 'getDeviceId','used': 'IMEI'},
        {'funcname': 'getDeviceSoftwareVersion','used': 'IMEI'},
        {'funcname': 'getTypeAllocationCode','used': 'MEID'},
        {'funcname': 'getManufacturerCode','used': 'MEID'},
        {'funcname': 'getMeid','used': 'MEID'}
    ]
}]
console.log("Privacy - hardware");
init_predefine(predefine_hardware);
