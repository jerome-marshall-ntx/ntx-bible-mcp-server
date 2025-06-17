---
layout: page
# set to "yes" (without quotes) if this page is part of a "book"
is_book: no
title: vSphere
subtitle: vSphere Administration
---

{% include pdf_download.html %}

<!-- ### Important Pages

More coming soon! -->

### VM Management

Core VM management operations can be done directly from Prism without using any hypervisor management interface. Once your Nutanix nodes are added to your vCenter instance and your vCenter Server is registered with your Nutanix cluster (Settings > vCenter Registration), you can perform the following operations directly through Prism:

* Creating, cloning, updating, and deleting VMs
* Creating and deleting NICs
* Attaching and deleting disks
* VM Power operations (on/off, reset, suspend, resume, guest shutdown, guest restart)
* Launch VM console
* Manage VM guest tools (VMware or Nutanix Guest Tools)

### Command Reference

##### ESXi cluster upgrade

Description: Perform an automated upgrade of ESXi hosts using the CLI and custom offline bundle
  
- Upload upgrade offline bundle to a Nutanix CVM
- Log in to Nutanix CVM
- Perform upgrade

<pre>
cluster --md5sum=bundle_checksum --bundle=/path/to/offline_bundle host_upgrade
</pre>

###### Example

<pre>
cluster --md5sum=bff0b5558ad226ad395f6a4dc2b28597 --bundle=/tmp/VMware-ESXi-5.5.0-1331820-depot.zip host_upgrade
</pre>

##### Restart ESXi host services

Description: Restart each ESXi hosts services in a incremental manner

<pre>
for i in `hostips`;do ssh root@$i "services.sh restart";done
</pre>

##### Display ESXi host nics in ‘Up’ state

Description: Display the ESXi host's nics which are in a 'Up' state

<pre>
for i in `hostips`;do echo $i && ssh root@$i esxcfg-nics -l | grep Up;done
</pre>

##### Display ESXi host 10GbE nics and status

Description: Display the ESXi host's 10GbE nics and status

<pre>
for i in `hostips`;do echo $i && ssh root@$i esxcfg-nics -l | grep ixgbe;done
</pre>

##### Display ESXi host active adapters

Description: Display the ESXi host's active, standby and unused adapters

<pre>
for i in `hostips`;do echo $i &&  ssh root@$i "esxcli network vswitch standard policy failover get --vswitch-name vSwitch0";done
</pre>

##### Display ESXi host routing tables

Description: Display the ESXi host's routing tables

<pre>
for i in `hostips`;do ssh root@$i 'esxcfg-route -l';done
</pre>

##### Check if VAAI is enabled on datastore

Description: Check whether or not VAAI is enabled/supported for a datastore

<pre>
vmkfstools -Ph /vmfs/volumes/Datastore Name
</pre>

##### Set VIB acceptance level to community supported

Description: Set the vib acceptance level to CommunitySupported allowing for 3rd party vibs to be installed

<pre>
esxcli software acceptance set --level CommunitySupported
</pre>

##### Install VIB

Description: Install a vib without checking the signature

<pre>
esxcli software vib install --viburl=/VIB directory/VIB name --no-sig-check
</pre>

OR

<pre>
esxcli software vib install --depoturl=/VIB directory/VIB name --no-sig-check
</pre>

##### Check ESXi ramdisk space

Description: Check free space of ESXi ramdisk

<pre>
for i in `hostips`;do echo $i; ssh root@$i 'vdf -h';done
</pre>

##### Clear pynfs logs

Description: Clears the pynfs logs on each ESXi host

<pre>
for i in `hostips`;do echo $i; ssh root@$i '> /pynfs/pynfs.log';done
</pre>

<!-- ### Metrics and Thresholds

More coming soon!

### Troubleshooting & Advanced Administration

More coming soon! -->