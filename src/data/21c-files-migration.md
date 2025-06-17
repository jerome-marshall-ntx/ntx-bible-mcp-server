---
layout: page
# set to "yes" (without quotes) if this page is part of a "book"
is_book: yes
# don't include "Book of" in this variable
title: Migrating to Nutanix
subtitle: Files Migration
---

{% include pdf_download.html %}

## Files Migration Architecture
* Move is the Control Pane
* Nutanix Files is the Data Plane
* Move orchestrates files migration using the Nutanix Files v4 APIs and Nutanix Files performs the data copy from the source using SMB or NFS
* The same Move appliance can perform both files and VM migrations

![Nutanix Move Files Architecture](imagesv3/files_arch.png)

## Prerequisites

### Prerequisites for Move File Migration
* Move version 5.0 and later support file migration
* Move should be able to reach the destination Nutanix Files server over TCP port 9440

### Prerequisites on Target Nutanix Files Server
* Files 4.4 and later (migration API support added in Files 4.4)
* Configure API user with username and password
* NFS/SMB access to source server network from target Nutanix Files server
* Target share should not have MaxSize (storage limit) configured

### Prerequisites for SMB Source (From Files)
* Username and password for the backup operator
* SMB version 2 and above
  
### Prerequisites for NFS Source 
* Disable **root squash** for share to be migrated.
* Make sure **sys_auth** is supported for share to be migrated
* NFS V3 is supported

## Best Practices
* Currently, only five concurrent migrations are allowed. So, only five share/share paths can be migrated in parallel
* Perform a small number of migrations and complete them before starting others. This will ensure the shortest cutover time.
* Move will run an incremental sync iteration every 24 hours.
* Source share should be in read-only mode before triggering cutover. During cutover, Move will perform the final sync iteration and complete the migration.
* Pausing a Migration Plan, which has ongoing sync iteration, doesn't free up the parallel pipe for other migrations. It is advisable to pause the migration after the ongoing iteration has finished.

## Troubleshooting

### Support Bundle Collection
* Download the Move Support Bundle from the UI 
![Support Bundle ](imagesv3/movesupportbundle.png)

* Download Realtime Logs from the UI 
![Realtime Logs ](imagesv3/moverealtime.png)
 * Choose the filesagent and mgmtserver filters
![Realtime Log Filters ](imagesv2/movefilters.png)

* Log files location
  * /opt/xtract-vm/logs
![Log files location ](imagesv3/movelogloc.png)

* The Move service for files migration is filesagent
  
* When SMB migration fails due to user permissions you'll see the following
![Access Denied ](imagesv3/movefileerror1.png)
  * Solution: Add user to the backup operator group 

* NFS migration fails with auth type sys is not configured
![Access Denied ](imagesv3/movefileerror2.png)
  * Solution: Change authentication to system