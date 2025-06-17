---
layout: page
# set to "yes" (without quotes) if this page is part of a "book"
is_book: yes
# don't include "Book of" in this variable
title: Nutanix Database Service
subtitle: NDB Configuration and Best Practices 
---

{% include pdf_download.html %}

## Nutanix Database Service Control Plane
### Control Plane Configuration
The following are the NDB service topology options:

* Single cluster, multi-cluster not enabled, NDB HA not enabled: single Nutanix cluster managed without HA.
* Multi cluster enabled, NDB HA not enabled: multiple Nutanix clusters managed without HA.
* Multi cluster enabled, NDB HA enabled across clusters: at least 3 Nutanix clusters managed, NDB control plane HA enabled across three Nutanix clusters. 

When NDB is configured without HA enabled, as listed in the first two options above, the NDB services will be running on a single VM and will be unavailable when you upgrade NDB. The VM can be migrated to other nodes on the Nutanix Cluster it is running on. When HA is enabled, as in the last option above, NDB services spread out over multiple VMs, which makes the NDB services more resilient and will allow the NDB to stay online during upgrades.

You can read more about NDB HA on the <a href="22a-ndb-arch.html">architecture page</a> in this guide.

<div data-type="note" class="note"><h6>Note</h6>
<h5>Note:</h5>
<p>*&nbsp; You need a subscription to Nutanix Objects to store log backups in the Nutanix Objects store. For more information, see <a href="https://portal.nutanix.com/page/documents/kbs/details?targetId=kA07V000000LeiFSAS" target="_blank">KB 13612</a>.<br>
*&nbsp; A database can be managed by only one NDB instance.</p>
</div>

### Time Machine Configuration

The maximum number of time machines for protecting databases that you can manage in your NDB environment will change depending on whether you are using NDB with high availability and if you are using NDB with Nutanix Ojects. You can find these details in the <a href= "https://portal.nutanix.com/page/documents/details?targetId=Nutanix-NDB-User-Guide-v2_7:top-vm-configuration-and-scale-r.html" target="_blank">NDB Administration Guide</a> as well as the correct resource configuration for vCPU, cores and memory for the NDB control plane VMs. 


### Network Configuration
NDB can use any network VLAN configured on the Nutanix Cluster once the VLAN is added in the Administration section and a network profile is set up. Details for network ports and segmented networks are below. 
 
#### Network Port Requirements
The port reference guides provide detailed port information for Nutanix products and services, including port sources and destinations, service descriptions, directionality, and protocol requirements.

This table provides links to the port reference guides.[^1]

[^1]: <a href="https://portal.nutanix.com/page/documents/details?targetId=Nutanix-NDB-User-Guide-v2_7:top-installation-c.html" target="_blank"> From the NDB Administration Guide</a>

|NDB Port Requirments|Link to Document| 
|---|---|
|Database server VM|<a href="https://portal.nutanix.com/page/documents/list?type=software&filterKey=software&filterVal=Ports%20and%20Protocols&productType=NDB%20%28Database%20Server%20VM%29" target="_blank">NDB (Database Server VM)</a>| 
|Multi-cluster network|<a href="https://portal.nutanix.com/page/documents/list?type=software&filterKey=software&filterVal=Ports%20and%20Protocols&productType=NDB%20%28Multi-cluster%20Network%29" target="_blank">NDB (Multi-cluster Network)</a>|
|Oracle|<a href="https://portal.nutanix.com/page/documents/list?type=software&filterKey=software&filterVal=Ports%20and%20Protocols&productType=NDB%20%28Oracle%29" target="_blank">NDB (Oracle)</a>|
|SQL Server|<a href="https://portal.nutanix.com/page/documents/list?type=software&filterKey=software&filterVal=Ports%20and%20Protocols&productType=NDB%20%28SQL%20Server%29" target="_blank">NDB (SQL Server)</a>|
|PostgreSQL|<a href="https://portal.nutanix.com/page/documents/list?type=software&filterKey=software&filterVal=Ports%20and%20Protocols&productType=NDB%20%28Postgres%29" target="_blank">NDB (PostgreSQL)</a>|
|MySQL and MariadB |<a href="https://portal.nutanix.com/page/documents/list?type=software&filterKey=software&filterVal=Ports%20and%20Protocols&productType=NDB%20%28My%20SQL%20and%20Maria%20DB%29" target="_blank">NDB (MySQL)</a>|
|NDB control plane (HA)|<a href="https://portal.nutanix.com/page/documents/list?type=software&filterKey=software&filterVal=Ports%20and%20Protocols&productType=NDB%20Control%20Plane%20%28HA%29" target="_blank">NDB control plane (HA)</a>|

#### Network Segmentation

NDB supports Nutanix Cloud Clusters with network segmentation configured for the management, virtual machines, and data services. See the architecture diagram below.
![NDB Segmented network architecture](imagesv3/ndbsegnet.png)

Learn if your databases can utilize segmented networks and how to set up each database's network profile in the <a href="https://portal.nutanix.com/page/documents/list?type=software&filterKey=software&filterVal=Nutanix%20Database%20Service" target="_blank">NDB Management guide on the portal.</a> 



## Database Best Practices
When NDB provisions a database, it will apply the current recommended best practices from Nutanix. Click on the links below to view best practices for deploying databases with NDB in the Nutanix support portal.


* <a href="https://portal.nutanix.com/page/documents/solutions/details?targetId=BP-2056-MySQL-on-Nutanix:BP-2056-MySQL-on-Nutanix" target="_blank">MySQL/MariaDB Best Practices</a>
* <a href="https://portal.nutanix.com/page/documents/solutions/details?targetId=BP-2061-PostgreSQL-on-Nutanix:BP-2061-PostgreSQL-on-Nutanix" target="_blank">PostgreSQL Best Practices</a>
* <a href="https://portal.nutanix.com/page/documents/solutions/details?targetId=BP-2015-Microsoft-SQL-Server:BP-2015-Microsoft-SQL-Server" target="_blank">Microsoft SQL Best Practices</a>
* <a href="https://portal.nutanix.com/page/documents/solutions/details?targetId=BP-2000-Oracle-on-Nutanix:BP-2000-Oracle-on-Nutanix" target="_blank">Oracle Best Practices</a>
* <a href="https://portal.nutanix.com/page/documents/solutions/details?targetId=BP-2023-MongoDB-on-Nutanix:BP-2023-MongoDB-on-Nutanix" target="_blank">Mongo DB Best Practices</a>

* If you are not using the Nutanix Database Service and are running databases on Nutanix, you must apply these best practices manually to get the best performance from your databases.

## Footnotes
