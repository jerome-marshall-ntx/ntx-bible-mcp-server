---
layout: page
# set to "yes" (without quotes) if this page is part of a "book"
is_book: yes
# don't include "Book of" in this variable
title: Migrating to Nutanix
subtitle: VM Migration Architecture
---

{% include pdf_download.html %}
### Move Architecture

Nutanix Move is a VM appliance typically hosted on the target AHV cluster. Several software services come together to build Nutanix Move, but we can group them into the following major software components:


* The management server
  * The management server maintains source and target cluster information, migration plan details, and current status. It also allows APIs and the UI to create and manage migration plans.

* Agents for source and target
  * The source agent is a platform-specific (ESXi, Hyper-V, AHV, or cloud) software component that schedules migration copy requests through disk readers. It collects source cluster and VM details and helps you select the VMs to migrate using the management server UI.

* Disk readers and writers
  * Disk reader processes use source-specific APIs to read data and coordinate with disk writer processes to complete outstanding copy operations. The disk reader checkpoints copy operations to handle failures and resume operations as needed.

![Move Architecture](imagesv3/move_arch.jpeg)

The architecture for each source environment that Move uses is slightly different, but Nutanix makes the difference in implementation invisible to users.

#### Nutanix Move for ESXi
The architecture of Nutanix Move for ESXi uses vCenter for inventory collection and vSphere Storage APIs for Data Protection (VADP), the Virtual Disk Development Kit (VDDK), and Changed Block Tracking (CBT) for data migration.

![Nutanix Move for ESXi Architecture](imagesv3/esxi_migration.jpeg)

#### Nutanix Move for Hyper-V
The architecture of Nutanix Move for Hyper-V has an agent on each Hyper-V server that makes up part of the Hyper-V cluster. It then uses the agents to move data and the Hyper-V Manager to collect inventory.

![Nutanix Move for Hyper-V Architecture](imagesv3/hyperv_arch.jpeg)

#### Nutanix Move for AWS 
The architecture of Nutanix Move for AWS is somewhat different from Move in other environments. When you add AWS as an environment, the Move appliance connects to AWS for inventory and uses the Elastic Block Store (EBS) direct APIs for data migration. Move no longer creates an agent VM as it did in earlier versions.

![Nutanix Move for Hyper-V Architecture](imagesv3/aws_arch.jpeg)

#### Nutanix Move for Azure
The architecture of Nutanix Move for Azure is similar to the architecture of Move for AWS in that it uses the Azure Public Cloud REST APIs to collect inventory and access storage.

![Nutanix Move for Hyper-V Architecture](imagesv3/azure_arch.jpeg)