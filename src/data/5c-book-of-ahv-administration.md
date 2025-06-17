---
layout: page
# set to "yes" (without quotes) if this page is part of a "book"
is_book: no
title: AHV
subtitle: AHV Administration
---

{% include pdf_download.html %}

<!-- ### Important Pages

More coming soon! -->

### Command Reference

##### Show OVS uplinks

Description: Show ovs uplinks for local host

<pre>
manage_ovs show_uplinks
</pre>

Description: Show ovs uplinks for full cluster

<pre>
allssh "manage_ovs show_uplinks"
</pre>

##### Show OVS interfaces

Description: Show ovs interfaces for local host

<pre>
manage_ovs show_interfaces
</pre>

Show interfaces for full cluster

<pre>
allssh "manage_ovs show_interfaces"
</pre>

##### Show OVS switch information

Description: Show switch information

<pre>
ovs-vsctl show
</pre>

##### List OVS bridges

Description: List bridges

<pre>
ovs-vsctl list br
</pre>

##### Show OVS bridge information

Description: Show OVS port information

<pre>
ovs-vsctl list port br0
ovs-vsctl list port bond
</pre>

##### Show OVS interface information

Description: Show interface information

<pre>
ovs-vsctl list interface br0
</pre>

##### Show ports / interfaces on bridge

Description: Show ports on a bridge

<pre>
ovs-vsctl list-ports br0
</pre>

Description: Show ifaces on a bridge

<pre>
ovs-vsctl list-ifaces br0
</pre>

##### Add ports to bridge

Description: Add port to bridge

<pre>
ovs-vsctl add-port bridge port
</pre>

Description: Add bond port to bridge

<pre>
ovs-vsctl add-bond bridge port iface
</pre>

##### Show OVS bond details

Description: Show bond details

<pre>
ovs-appctl bond/show bond
</pre>

Example:

<pre>
ovs-appctl bond/show bond0
</pre>

##### Set bond mode and configure LACP on bond

Description: Enable LACP on ports

<pre>
ovs-vsctl set port bond lacp=active/passive
</pre>

Description: Enable on all hosts for bond0

<pre>
for i in `hostips`;do echo $i; ssh $i source /etc/profile > /dev/null 2>&1; ovs-vsctl set port bond0 lacp=active;done
</pre>

##### Show LACP details on bond

Description: Show LACP details

<pre>
ovs-appctl lacp/show bond
</pre>

##### Set bond mode

Description: Set bond mode on ports

<pre>
ovs-vsctl set port bond bond_mode=active-backup, balance-slb, balance-tcp
</pre>

##### Show OpenFlow information

Description: Show OVS openflow details

<pre>
ovs-ofctl show br0
</pre>

Description: Show OpenFlow rules

<pre>
ovs-ofctl dump-flows br0
</pre>

##### Get QEMU PIDs and top information

Description: Get QEMU PIDs

<pre>
ps aux | grep qemu | awk '{print $2}'
</pre>

Description: Get top metrics for specific PID

<pre>
top -p PID
</pre>

##### Get active Stargate for QEMU processes

Description: Get active Stargates for storage I/O for each QEMU processes

<pre>
netstat –np | egrep tcp.*qemu
</pre>

### Metrics and Thresholds

More coming soon!

### Troubleshooting & Advanced Administration

##### Check iSCSI Redirector Logs

Description: Check iSCSI Redirector Logs for all hosts

<pre>
for i in `hostips`; do echo $i; ssh root@$i cat /var/log/iscsi_redirector;done
</pre>

Example for single host

<pre>
Ssh root@HOSTIP
Cat /var/log/iscsi_redirector
</pre>

##### Monitor CPU steal (stolen CPU)

Description: Monitor CPU steal time (stolen CPU)

Launch top and look for %st (bold below)

<pre>
Cpu(s):  0.0%us, 0.0%sy,  0.0%ni, 96.4%id,  0.0%wa,  0.0%hi,  0.1%si,  **0.0%st**
</pre>

##### Monitor VM network resource stats

Description: Monitor VM resource stats

Launch virt-top

<pre>
Virt-top
</pre>
