---
layout: page
# set to "yes" (without quotes) if this page is part of a "book"
is_book: no
title: Prism
subtitle: PC Backup & Restore
versions:
    pc_version: 2023.3
    aos_version: 6.7
---

{% include pdf_download.html %}

Prism Central Backup and Restore enables the continuous backup of your Prism Central deployment and various service configurations and policies to Prism Element clusters managed by that same Prism Central. If the cluster hosting your Prism Central instance experiences a disaster, you can recover your PC deployment on another cluster.

### Architecture
On Prism Element and Prism Central, there is a database called the Insights Data Fabric (IDF) that stores configuration, periodic performance, and metric data from various components and services of the infrastructure.

When Prism Central Backup & Restore is enabled, data from the Prism Central IDF instance is periodically replicated to the Prism Element IDF instance that has been designated for backup. You can select up to three Nutanix clusters, running AHV or ESXi, as PC backup targets. The replication happens every 30 minutes. Port 9440 is used for the replication.

When a restore operation occurs, Prism Central is rebuilt on one of the backup Prism Element clusters and re-seeded with the data from the IDF data backup.

In this architecture diagram, we have Prism Central managing three clusters with Prism Central hosted on Cluster 1. Note that these clusters could be in different physical locations. The clusters chosen for backup can be running either ESXi or AHV as long as they are running AOS 6.0 or later, are managed by Prism Central, and at least one cluster needs to be at least AOS 6.5.3.1. Additionally, NTP must be configured on the PC to synchronize time between the PC and the registered clusters.

![Prism Central Architecture](imagesv2/Prism/pcbackup/pcbackup1.png)

When enabling Prism Central Backup & Restore, the IDF data from Prism Central gets periodically synced to the IDF database on the chosen cluster(s) over TCP port 9440. In this example, Prism Central is hosted on Cluster 1 and is replicating to both Cluster 2 and Cluster 3.

![PC IDF Sync to PE](imagesv2/Prism/pcbackup/pcbackup2.png)

See the [Prism Central Backup and Restore documentation](https://portal.nutanix.com/page/documents/details?targetId=Prism-Central-Guide-vpc_2023_3:mul-cluster-pcdr-introduction-pc-c.html) for the full list of prerequisites along with which services and data are synced and restored.

If Cluster 1 is unavailable, Prism Central also becomes unavailable, and you can recover Prism Central from the Prism Element interface of either Cluster 2 or Cluster 3.

![PC Recovery](imagesv2/Prism/pcbackup/pcbackup3.png)

During the recovery process, ensure you use the new Prism Central deployment. If Cluster 1 comes back online, be sure to **shut down or delete** the original Prism Central. After recovery, replication continues to the same backup targets.

![PC Recovery](imagesv2/Prism/pcbackup/pcbackup4.png)