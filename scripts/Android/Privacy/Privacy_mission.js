/**
    隐私权政策 - 任务、APP列表
**/

'use strict';

var predefine_missions=[{
    'tag': '任务列表读取-ActivityManager',
    'class': 'android.app.ActivityManager',
    'funclist': [
        {'funcname':'getAppTaskThumbnailSize','used':'Return the current design dimensions for AppTask thumbnails, for use with addAppTask(Activity, Intent, ActivityManager.TaskDescription, Bitmap).','returntype':'Size'},
        {'funcname':'getAppTasks','used':'Get the list of tasks associated with the calling application.','returntype':'List<ActivityManager.AppTask>'},
        // {'funcname':'getDeviceConfigurationInfo','used':'Get the device configuration attributes.','returntype':'ConfigurationInfo'},
        // {'funcname':'getHistoricalProcessExitReasons','used':'Return a list of ApplicationExitInfo records containing the reasons for the most recent app deaths.','returntype':'List<ApplicationExitInfo>'},
        // {'funcname':'getLargeMemoryClass','used':'Return the approximate per-application memory class of the current device when an application is running with a large heap.','returntype':'int'},
        // {'funcname':'getLauncherLargeIconDensity','used':'Get the preferred density of icons for the launcher.','returntype':'int'},
        // {'funcname':'getLauncherLargeIconSize','used':'Get the preferred launcher icon size.','returntype':'int'},
        {'funcname':'getLockTaskModeState','used':'Return the current state of task locking.','returntype':'int'},
        // {'funcname':'getMemoryClass','used':'Return the approximate per-application memory class of the current device.','returntype':'int'},
        // {'funcname':'getMemoryInfo','used':'Return general information about the memory state of the system.','returntype':'void'},
        // {'funcname':'getMyMemoryState','used':'Return global memory state information for the calling process.','returntype':'static void'},
        // {'funcname':'getProcessMemoryInfo','used':'Return information about the memory usage of one or more processes.','returntype':'MemoryInfo[]'},
        // {'funcname':'getProcessesInErrorState','used':'Returns a list of any processes that are currently in an error condition.','returntype':'List<ActivityManager.ProcessErrorStateInfo>'},
        {'funcname':'getRecentTasks','used':'This method was deprecated in API level 21. As of Build.VERSION_CODES.LOLLIPOP, this method is no longer available to third party applications: the introduction of document-centric recents means it can leak personal information to the caller. For backwards compatibility, it will still return a small subset of its data: at least the caller\'s own tasks (though see getAppTasks() for the correct supported way to retrieve that information), and possibly some other tasks such as home that are known to not be sensitive.','returntype':'List<ActivityManager.RecentTaskInfo>'},
        {'funcname':'getRunningAppProcesses','used':'Returns a list of application processes that are running on the device.','returntype':'List<ActivityManager.RunningAppProcessInfo>'},
        {'funcname':'getRunningServiceControlPanel','used':'Returns a PendingIntent you can start to show a control panel for the given running service.','returntype':'PendingIntent'},
        {'funcname':'getRunningServices','used':'This method was deprecated in API level 26. As of Build.VERSION_CODES.O, this method is no longer available to third party applications. For backwards compatibility, it will still return the caller\'s own services.','returntype':'List<ActivityManager.RunningServiceInfo>'},
        {'funcname':'getRunningTasks','used':'This method was deprecated in API level 21. As of Build.VERSION_CODES.LOLLIPOP, this method is no longer available to third party applications: the introduction of document-centric recents means it can leak person information to the caller. For backwards compatibility, it will still return a small subset of its data: at least the caller\'s own tasks, and possibly some other tasks such as home that are known to not be sensitive.','returntype':'List<ActivityManager.RunningTaskInfo>'}
    ],
    'count': 0
},{
    'tag': 'APP列表读取-PackageManager',
    'class': 'android.content.pm.PackageManager',
    'funclist': [
        {'funcname':'getAllPermissionGroups','used':'Retrieve all of the known permission groups in the system.','returntype':'List<PermissionGroupInfo>'},
        {'funcname':'getApplicationBanner','used':'Retrieve the banner associated with an application.','returntype':'Drawable'},
        {'funcname':'getApplicationEnabledSetting','used':'Return the enabled setting for an application.','returntype':'int'},
        {'funcname':'getApplicationIcon','used':'Retrieve the icon associated with an application.','returntype':'Drawable'},
        {'funcname':'getApplicationInfo','used':'Retrieve all of the information we know about a particular package/application.','returntype':'ApplicationInfo'},
        {'funcname':'getApplicationLabel','used':'Return the label to use for this application.','returntype':'CharSequence'},
        {'funcname':'getApplicationLogo','used':'Retrieve the logo associated with an application.','returntype':'Drawable'},
        {'funcname':'getBackgroundPermissionOptionLabel','used':'Gets the localized label that corresponds to the option in settings for granting background access.','returntype':'CharSequence'},
        {'funcname':'getChangedPackages','used':'Returns the names of the packages that have been changed [eg.','returntype':'ChangedPackages'},
        {'funcname':'getComponentEnabledSetting','used':'Return the enabled setting for a package component (activity, receiver, service, provider).','returntype':'int'},
        {'funcname':'getDefaultActivityIcon','used':'Return the generic icon for an activity that is used when no specific icon is defined.','returntype':'Drawable'},
        {'funcname':'getDrawable','used':'Retrieve an image from a package.','returntype':'Drawable'},
        {'funcname':'getGroupOfPlatformPermission','used':'Get the platform-defined permission group of a particular permission, if the permission is a platform-defined permission.','returntype':'void'},
        {'funcname':'getInstallSourceInfo','used':'Retrieves information about how a package was installed or updated.','returntype':'InstallSourceInfo'},
        {'funcname':'getInstalledApplications','used':'Return a List of all application packages that are installed for the current user.','returntype':'List<ApplicationInfo>'},
        {'funcname':'getInstalledModules','used':'Return a List of all modules that are installed.','returntype':'List<ModuleInfo>'},
        {'funcname':'getInstalledPackages','used':'Return a List of all packages that are installed for the current user.','returntype':'List<PackageInfo>'},
        {'funcname':'getInstallerPackageName','used':'This method was deprecated in API level 30. use getInstallSourceInfo(java.lang.String) instead','returntype':'String'},
        {'funcname':'getInstantAppCookie','used':'Gets the instant application cookie for this app.','returntype':'byte[]'},
        {'funcname':'getInstantAppCookieMaxBytes','used':'Gets the maximum size in bytes of the cookie data an instant app can store on the device.','returntype':'int'}
    ],
    'count': 0
},{
    'tag': 'Wifi信息、MAC地址',
    'class': 'android.net.wifi.WifiManager',
    'funclist': [
        {'funcname':'getConnectionInfo','used':'Retrieve all of the known permission groups in the system.','returntype':''}
    ],
    'count': 0
},{
    'tag': 'Wifi信息、MAC地址',
    'class': 'android.net.wifi.WifiInfo',
    'funclist': [
        {'funcname':'getApMldMacAddress','used':'Return the Multi-Link Device (MLD) MAC Address for the connected access point.','returntype':''},
        {'funcname':'getBSSID','used':'Return the basic service set identifier (BSSID) of the current access point.','returntype':''},
        {'funcname':'getMacAddress','used':'Returns the MAC address used for this connection.','returntype':''},
        {'funcname':'getSSID','used':'Returns the service set identifier (SSID) of the current 802.11 network.','returntype':''}
    ],
    'count': 0}
]

console.log("Privacy - mission & app");
init_predefine(predefine_missions);
