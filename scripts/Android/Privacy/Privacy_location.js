/**
    隐私权政策 - 位置信息
**/

'use strict';

var predefine_locations=[{
    'tag': '位置信息读取-LocationManager',
    'class': 'android.location.LocationManager',
    'funclist': [{
        'funcname': 'getBestProvider',
        'used': 'Returns the name of the provider that best meets the given criteria.',
        'returntype': 'String'
    },
    {
        'funcname': 'getCurrentLocation',
        'used': 'Asynchronously returns a single current location fix from the given provider based on the given LocationRequest.',
        'returntype': 'void'
    },
    {
        'funcname': 'getGnssAntennaInfos',
        'used': 'Returns the current list of GNSS antenna infos, or null if unknown or unsupported.',
        'returntype': 'List<GnssAntennaInfo>'
    },
    {
        'funcname': 'getGnssCapabilities',
        'used': 'Returns the supported capabilities of the GNSS chipset.',
        'returntype': 'GnssCapabilities'
    },
    {
        'funcname': 'getGnssHardwareModelName',
        'used': 'Returns the model name (including vendor and hardware/software version) of the GNSS hardware driver, or null if this information is not available.',
        'returntype': 'String'
    },
    {
        'funcname': 'getGnssYearOfHardware',
        'used': 'Returns the model year of the GNSS hardware and software build, or 0 if the model year is before 2016.',
        'returntype': 'int'
    },
    {
        'funcname': 'getGpsStatus',
        'used': 'This method was deprecated in API level 24. GpsStatus APIs are deprecated, use GnssStatus APIs instead. No longer supported in apps targeting S and above.',
        'returntype': 'GpsStatus'
    },
    {
        'funcname': 'getLastKnownLocation',
        'used': 'Gets the last known location from the given provider, or null if there is no last known location.',
        'returntype': 'Location'
    },
    {
        'funcname': 'getProvider',
        'used': 'This method was deprecated in API level 31. This method has no way to indicate that a providers properties are unknown, and so may return incorrect results on rare occasions.Use getProviderProperties(java.lang.String) instead.',
        'returntype': 'LocationProvider '
    },
    {
        'funcname': 'getProviderProperties',
        'used': 'Returns the properties of the given provider, or null if the properties are currently unknown.',
        'returntype': 'ProviderProperties '
    },
    {
        'funcname': 'getProviders',
        'used': 'Returns a list of the names of available location providers.',
        'returntype': 'List < String > '
    },
    {
        'funcname': 'requestFlush',
        'used': 'Requests that the given provider flush any batched locations to listeners.',
        'returntype': 'void '
    },
    {
        'funcname': 'requestLocationUpdates',
        'used': 'Register for location updates from the given provider with the given arguments, and a callback on the Looper of the calling thread.',
        'returntype': 'void '
    },
    {
        'funcname': 'requestSingleUpdate',
        'used': 'This method was deprecated in API level 30.Use getCurrentLocation(java.lang.String, android.os.CancellationSignal, java.util.concurrent.Executor, java.util. function.Consumer) instead as it does not carry a risk of extreme battery drain.',
        'returntype': 'void '
    }],
    'count': 0
},{
    'tag': '位置信息读取-Location',
    'class': 'android.location.Location',
    'funclist': [{
        'funcname': 'getAccuracy',
        'used': 'Get the estimated horizontal accuracy of this location, radial, in meters.'
    },
    {
        'funcname': 'getAltitude',
        'used': 'Get the altitude if available, in meters above the WGS 84 reference ellipsoid.'
    },
    {
        'funcname': 'getBearing',
        'used': 'Get the bearing, in degrees.'
    },
    {
        'funcname': 'getBearingAccuracyDegrees',
        'used': 'Get the estimated bearing accuracy of this location, in degrees.'
    },
    {
        'funcname': 'getElapsedRealtimeNanos',
        'used': 'Return the time of this fix in nanoseconds of elapsed realtime since system boot.'
    },
    {
        'funcname': 'getElapsedRealtimeUncertaintyNanos',
        'used': 'Get estimate of the relative precision of the alignment of the ElapsedRealtimeNanos timestamp, with the reported measurements in nanoseconds (68% confidence).'
    },
    {
        'funcname': 'getExtras',
        'used': 'Returns additional provider-specific information about the location fix as a Bundle.'
    },
    {
        'funcname': 'getLatitude',
        'used': 'Get the latitude, in degrees.'
    },
    {
        'funcname': 'getLongitude',
        'used': 'Get the longitude, in degrees.'
    },
    {
        'funcname': 'getProvider',
        'used': 'Returns the name of the provider that generated this fix.'
    },
    {
        'funcname': 'getSpeed',
        'used': 'Get the speed if it is available, in meters/second over ground.'
    },
    {
        'funcname': 'getSpeedAccuracyMetersPerSecond',
        'used': 'Get the estimated speed accuracy of this location, in meters per second.'
    },
    {
        'funcname': 'getTime',
        'used': 'Return the UTC time of this location fix, in milliseconds since epoch (January 1, 1970).'
    },
    {
        'funcname': 'getVerticalAccuracyMeters',
        'used': 'Get the estimated vertical accuracy of this location, in meters.'
    }],
    'count': 0
},{
    'tag': '位置信息读取-TelephonyManager',
    'class': 'android.telephony.TelephonyManager',
    'count': 0,
    'funclist': [{
        'funcname': 'getAllCellInfo',
        'used': 'Requests all available cell information from all radios on the device including the camped/registered, serving, and neighboring cells.'
    },{
        'funcname': 'getCellLocation',
        'used': 'Returns the current location of the device.'
    }]
},{
    'tag': '位置信息读取-TelephonyManager',
    'class': 'android.telephony.gsm.GsmCellLocation',
    'count': 0,
    'funclist': [{
        'funcname': 'getCid',
        'used': 'None.'
    },{
        'funcname': 'getLac',
        'used': 'None.'
    },{
        'funcname': 'getPsc',
        'used': 'On a UMTS network, returns the primary scrambling code of the serving cell.'
    }]
},{
    'tag': '位置信息读取-CellIdentityGsm',
    'class': 'android.telephony.CellIdentityGsm',
    'count': 0,
    'funclist': [
        {'funcname':'getArfcn','used': 'None.'},
        {'funcname':'getBsic','used': 'None.'},
        {'funcname':'getCid','used': 'None.'},
        {'funcname':'getLac','used': 'None.'},
        {'funcname':'getMcc','used': 'None.'},
        {'funcname':'getMccString','used': 'None.'},
        {'funcname':'getMnc','used': 'None.'},
        {'funcname':'getMncString','used': 'None.'},
        {'funcname':'getMobileNetworkOperator','used': 'None.'},
        {'funcname':'getPsc','used': 'None.'}]
}
]

console.log("Privacy - location");
init_predefine(predefine_locations);
