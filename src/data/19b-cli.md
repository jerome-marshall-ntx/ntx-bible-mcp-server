---
layout: page
# set to "yes" (without quotes) if this page is part of a "book"
is_book: no
title: APIs
subtitle: CLIs - nCLI and aCLI
versions:
    pc_version: 2023.1.0.1
    aos_version: 6.6
---

{% include pdf_download.html %}

### aCLI

The Acropolis CLI (aCLI) is the CLI for managing the Acropolis and AHV portion of the Nutanix product for tasks like AHV host, network, and VM management. These capabilities were enabled in releases after AOS 4.1.2 and are available on Nutanix AHV cluster CVMs only. **aCLI** is not supported on Prism Central.

The current aCLI command reference can be found on the [Nutanix Portal](https://portal.nutanix.com/page/documents/details?targetId=Command-Ref-AOS-v6_6:man-acli-c.html "Nutanix Portal - acli Command Reference").

#### Enter aCLI Shell

Description: Enter aCLI shell.

<pre><code class="language-shell">acli</code></pre>

OR

Description: Execute aCLI command via Linux shell

<pre><code class="language-shell">acli &lt;command&gt;</code></pre>

#### Output aCLI Response in JSON Format

Description: Enter aCLI shell. Any responses to commands will be in JSON format.

<pre><code class="language-shell">acli –o json</code></pre>

#### List AHV Hosts

Description: Lists AHV nodes in the cluster.

<pre><code class="language-shell">host.list</code></pre>

This screenshot shows the output from 'host.list' in both tabulated and JSON format. The obfuscated information are cluster specific serial numbers and IP address details.

![Tabulated vs JSON output from aCLI](/imagesv2/acli_json.png "Tabulated vs JSON output from acli")

#### Create Network

Description: Create network based on VLAN

<pre><code class="language-shell">net.create NAME TYPE.ID[.VSWITCH] ip_config=A.B.C.D/NN vlan="VLAN"</code></pre>

Example:

<pre><code class="language-shell">net.create vlan.133 ip_config=10.1.1.1/24 vlan="133"</code></pre>

#### List Networks

Description: List networks

<pre><code class="language-shell">net.list</code></pre>

#### Create DHCP Scope

Description: Create dhcp scope

<pre><code class="language-shell">net.add_dhcp_pool NET NAME start=START IP A.B.C.D end=END IP W.X.Y.Z</code></pre>

Note: The last usable IP address in the network range is selected for the Acropolis DHCP server if an address for the DHCP server wasn’t set during network creation.

Example:

<pre><code class="language-shell">net.add_dhcp_pool vlan.100 start=10.1.1.100 end=10.1.1.200 vlan="100"</code></pre>

#### Get Existing Network Details

Description: Get a network's VMs and details including VM name / UUID, MAC address and IP

<pre><code class="language-shell">net.list_vms NETNAME</code></pre>

Example:

<pre><code class="language-shell">net.list_vms vlan.133</code></pre>

#### Configure DHCP DNS Servers for Network

Description: Set DHCP DNS

<pre><code class="language-shell">net.update_dhcp_dns NETNAME servers=COMMA SEPARATED DNS IPs domains=COMMA SEPARATED DOMAINS</code></pre>

Example:

<pre><code class="language-shell">net.update_dhcp_dns vlan.100 servers=10.1.1.1,10.1.1.2 domains=ntnxlab.local</code></pre>

#### Create Virtual Machine

Description: Create VM

<pre><code class="language-shell">vm.create COMMA SEPARATED VM NAMES memory=NUM MEM MB num_vcpus=NUM VCPU num_cores_per_vcpu=NUM CORES ha_priority=PRIORITY INT</code></pre>

Example:

<pre><code class="language-shell">vm.create testVM memory=2G num_vcpus=2</code></pre>

#### Bulk Create Virtual Machines

Description: Create bulk VMs

<pre><code class="language-shell">vm.create CLONEPREFIX[STARTING INT..END INT] memory=NUM MEM MB num_vcpus=NUM VCPU num_cores_per_vcpu=NUM CORES ha_priority=PRIORITY INT</code></pre>

Example:

<pre><code class="language-shell">vm.create testVM[000..999] memory=2G num_vcpus=2</code></pre>

#### Clone VM from Existing

Description: Create clone of existing VM

<pre><code class="language-shell">vm.clone CLONE NAME(S) clone_from_vm=SOURCE VM NAME</code></pre>

Example:

<pre><code class="language-shell">vm.clone testClone clone_from_vm=MYBASEVM</code></pre>

#### Bulk Clone VMs from Existing VM

Description: Create bulk clones of existing VM

<pre><code class="language-shell">vm.clone CLONEPREFIX[STARTING INT..END INT] clone_from_vm=SOURCE VM NAME</code></pre>

Example:

<pre><code class="language-shell">vm.clone testClone[001..999] clone_from_vm=MYBASEVM</code></pre>

#### Create Disk and Add to VM

Description: Create disk for OS

<pre><code class="language-shell">vm.disk_create VM NAME create_size=Size and qualifier, e.g. 500G container=CONTAINER NAME</code></pre>

Example:

<pre><code class="language-shell">vm.disk_create testVM create_size=500G container=default</code></pre>

#### Add NIC to VM

Description: Create and add NIC

<pre><code class="language-shell">vm.nic_create VM NAME network=NETWORK NAME model=MODEL</code></pre>

Example:

<pre><code class="language-shell">vm.nic_create testVM network=vlan.100</code></pre>

#### Set VM Boot Device to Disk

Description: Set a VM boot device

Set to boot from specific disk id

<pre><code class="language-shell">vm.update_boot_device VM NAME disk_addr=DISK BUS</code></pre>

Example:

<pre><code class="language-shell">vm.update_boot_device testVM disk_addr=scsi.0</code></pre>

#### Add CD-ROM to VM

<pre><code class="language-shell">vm.disk_create VM NAME cdrom="true" empty="true"</code></pre>

Example:

<pre><code class="language-shell">vm.disk_create testVM cdrom="true" empty="true"</code></pre>

#### Set VM Boot Device to CD-ROM

Set to boot from CD-ROM

<pre><code class="language-shell">vm.update_boot_device VM NAME disk_addr=CD-ROM BUS</code></pre>

Example:

<pre><code class="language-shell">vm.update_boot_device testVM disk_addr=ide.0</code></pre>

#### Mount ISO to CD-ROM

Description: Mount ISO to VM CD-ROM

Steps:

1. Upload ISOs to container
2. Enable whitelist for client IPs
3. Upload ISOs to share

Create CD-ROM with ISO

<pre><code class="language-shell">vm.disk_create VM NAME clone_from_afsf_file=/CONTAINER/ISO CD-ROM=true</code></pre>

Example:

<pre><code class="language-shell">vm.disk_create testVM clone_from_adfs_file=/default/myfile.iso CD-ROM=true</code></pre>

#### Detach ISO from CD-ROM

Description: Remove ISO from CD-ROM

<pre><code class="language-shell">vm.disk_update VM NAME CD-ROM BUS empty=true</code></pre>

#### Power On VM(s)

Description: Power on VM(s)

<pre><code class="language-shell">vm.on VM NAME(S)</code></pre>

Example:

<pre><code class="language-shell">vm.on testVM</code></pre>

Power on all VMs.

Example:

<pre><code class="language-shell">vm.on *</code></pre>

Power on all VMs matching a prefix.

Example:

<pre><code class="language-shell">vm.on testVM*</code></pre>

Power on range of VMs.

Example:

<pre><code class="language-shell">vm.on testVM[0-9][0-9]</code></pre>

### nCLI

The current nCLI command reference can be found on the [Nutanix Portal](https://portal.nutanix.com/page/documents/details?targetId=Command-Ref-AOS-v6_6:man-ncli-c.html "Nutanix Portal - ncli").

The Nutanix Command Line Interface (nCLI) allows you to run system administration commands against the Nutanix cluster. In contrast to aCLI, nCLI can be installed on your local machine. See the Nutanix Portal link above for installation details.

#### Display Nutanix Version

Description: Displays the current version of the Nutanix software

<pre><code class="language-shell">ncli cluster version</code></pre>

This screenshot shows the output from 'ncli version' as both a single-line command and from within an ncli "session".

![ncli command usage options](/imagesv2/ncli.png "ncli command usage options")

#### Add Subnet to NFS whitelist

Description: Adds a particular subnet to the NFS whitelist

<pre><code class="language-shell">ncli cluster add-to-nfs-whitelist ip-subnet-masks=10.2.0.0/255.255.0.0</code></pre>

#### List Storage Pools

Description: Displays the existing storage pools

<pre><code class="language-shell">ncli sp ls</code></pre>

Note: This example shows the use of shortened commands.  "storagepool" becomes "sp", "list" becomes "ls".

#### List Storage Containers

Description: Displays the existing containers

<pre><code class="language-shell">ncli ctr ls</code></pre>

#### Create Storage Container

Description: Creates a new container

<pre><code class="language-shell">ncli ctr create name=NAME sp-name=SP NAME</code></pre>

#### List VMs

Description: Displays the existing VMs

<pre><code class="language-shell">ncli vm ls</code></pre>

#### List Public Keys

Description: Displays the existing public keys

<pre><code class="language-shell">ncli cluster list-public-keys</code></pre>

#### Add Public Key

Description: Adds a public key for cluster access

SCP public key to CVM

Add public key to cluster

<pre><code class="language-shell">ncli cluster add-public-key name=myPK file-path=~/mykey.pub</code></pre>

#### Remove Public Key

Description: Removes a public key for cluster access

<pre><code class="language-shell">ncli cluster remove-public-keys name=myPK</code></pre>

#### Create Protection Domain

Description: Creates a protection domain

<pre><code class="language-shell">ncli pd create name=NAME</code></pre>

#### Create Remote Site

Description: Create a remote site for replication

<pre><code class="language-shell">ncli remote-site create name=NAME address-list=Remote Cluster IP</code></pre>

#### Create Protection Domain For All VMs In Storage Container

Description: Protect all VMs in the specified container

<pre><code class="language-shell">ncli pd protect name=PD NAME ctr-id=Container ID cg-name=NAME</code></pre>

#### Create Protection Domain With Specified VMs

Description: Protect the VMs specified

<pre><code class="language-shell">ncli pd protect name=PD NAME vm-names=VM Name(s) cg-name=NAME</code></pre>

#### Create Protection Domain for AOS files (aka vDisk)

Description: Protect the DSF Files specified

<pre><code class="language-shell">ncli pd protect name=PD NAME files=File Name(s) cg-name=NAME</code></pre>

#### Create Protection Domain Snapshot

Description: Create a one-time snapshot of the protection domain

<pre><code class="language-shell">ncli pd add-one-time-snapshot name=PD NAME retention-time=seconds</code></pre>

#### Create Snapshot and Replication Schedule to Remote Site

Description: Create a recurring snapshot schedule and replication to n remote sites

<pre><code class="language-shell">ncli pd set-schedule name=PD NAME interval=seconds retention-policy=POLICY remote-sites=REMOTE SITE NAME</code></pre>

#### List Replication Status

Description: Monitor replication status

<pre><code class="language-shell">ncli pd list-replication-status</code></pre>

#### Migrate Protection Domain to Remote Site

Description: Fail-over a protection domain to a remote site

<pre><code class="language-shell">ncli pd migrate name=PD NAME remote-site=REMOTE SITE NAME</code></pre>

#### Activate Protection Domain

Description: Activate a protection domain at a remote site

<pre><code class="language-shell">ncli pd activate name=PD NAME</code></pre>

#### Check Cluster Resiliency Status

<pre><code class="language-shell"># Node status 
ncli cluster get-domain-fault-tolerance-status type=node</code></pre>

<pre><code class="language-shell"># Block status
ncli cluster get-domain-fault-tolerance-status type=rackable_unit</code></pre>
