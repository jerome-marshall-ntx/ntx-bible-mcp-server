---
layout: page
# set to "yes" (without quotes) if this page is part of a "book"
is_book: no
title: Hyper-V
subtitle: Hyper-V Administration
---

{% include pdf_download.html %}

### Important Pages

More coming soon!

### Command Reference

##### Execute command on multiple remote hosts

Description: Execute a PowerShell on one or many remote hosts

<pre>
$targetServers = "Host1","Host2","Etc"
Invoke-Command -ComputerName  $targetServers {
	<COMMAND or SCRIPT BLOCK>
}
</pre>

##### Check available VMQ Offloads

Description: Display the available number of VMQ offloads for a particular host

<pre>
gwmi –Namespace "root\virtualization\v2" –Class Msvm_VirtualEthernetSwitch | select elementname, MaxVMQOffloads
</pre>

##### Disable VMQ for VMs matching a specific prefix

Description: Disable VMQ for specific VMs

<pre>
$vmPrefix = "myVMs"
Get-VM | Where {$_.Name -match $vmPrefix} | Get-VMNetworkAdapter | Set-VMNetworkAdapter -VmqWeight 0
</pre>

##### Enable VMQ for VMs matching a certain prefix

Description: Enable VMQ for specific VMs

<pre>
$vmPrefix = "myVMs"
Get-VM | Where {$_.Name -match $vmPrefix} | Get-VMNetworkAdapter | Set-VMNetworkAdapter -VmqWeight 1
</pre>

##### Power-On VMs matching a certain prefix

Description: Power-On VMs matching a certain prefix

<pre>
$vmPrefix = "myVMs"
Get-VM | Where {$_.Name -match $vmPrefix -and $_.StatusString -eq "Stopped"} | Start-VM
</pre>

##### Shutdown VMs matching a certain prefix

Description: Shutdown VMs matching a certain prefix

<pre>
$vmPrefix = "myVMs"
Get-VM | Where {$_.Name -match $vmPrefix -and $_.StatusString -eq "Running"}} | Shutdown-VM -RunAsynchronously
</pre>

##### Stop VMs matching a certain prefix

Description: Stop VMs matching a certain prefix

<pre>
$vmPrefix = "myVMs"  
Get-VM | Where {$_.Name -match $vmPrefix} | Stop-VM
</pre>

##### Get Hyper-V host RSS settings

Description: Get Hyper-V host RSS (recieve side scaling) settings

<pre>
Get-NetAdapterRss
</pre>

##### Check Winsh and WinRM connectivity

Description: Check Winsh and WinRM connectivity / status by performing a sample query which should return the computer system object not an error

<pre>
allssh "winsh "get-wmiobject win32_computersystem"
</pre>

### Metrics and Thresholds

More coming soon!

### Troubleshooting & Advanced Administration


More coming soon!