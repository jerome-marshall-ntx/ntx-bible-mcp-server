---
layout: page
# set to "yes" (without quotes) if this page is part of a "book"
is_book: no
title: Basics
subtitle: Software Defined
---

{% include pdf_download.html %}

There are four core principles for software definition systems:

*  Must provide platform mobility (hardware, hypervisor)
*  Must not be reliant on any custom hardware
*  Must enable rapid speed of development (features, bug fixes, security patches)
*  Must take advantage of Moore's Law

As mentioned above (likely numerous times), the Nutanix platform is a software-based solution which ships as a bundled software + hardware appliance.  The controller VM is where the vast majority of the Nutanix software and logic sits and was designed from the beginning to be an extensible and pluggable architecture. A key benefit to being software-defined and not relying upon any hardware offloads or constructs is around extensibility.  As with any product life cycle, advancements and new features will always be introduced. 

By not relying on any custom ASIC/FPGA or hardware capabilities, Nutanix can develop and deploy these new features through a simple software update.  This means that the deployment of a new feature (e.g., deduplication) can be deployed by upgrading the current version of the Nutanix software.  This also allows newer generation features to be deployed on legacy hardware models. For example, say you’re running a workload running an older version of Nutanix software on a prior generation hardware platform (e.g., 2400).  The running software version doesn’t provide deduplication capabilities which your workload could benefit greatly from.  To get these features, you perform a rolling upgrade of the Nutanix software version while the workload is running, and you now have deduplication.  It’s really that easy.

Similar to features, the ability to create new “adapters” or interfaces into DSF is another key capability.  When the product first shipped, it solely supported iSCSI for I/O from the hypervisor, this has now grown to include NFS and SMB.  In the future, there is the ability to create new adapters for various workloads and hypervisors (HDFS, etc.).  And again, all of this can be deployed via a software update. This is contrary to most legacy infrastructures, where a hardware upgrade or software purchase is normally required to get the “latest and greatest” features.  With Nutanix, it’s different. Since all features are deployed in software, they can run on any hardware platform, any hypervisor, and be deployed through simple software upgrades.

The following figure shows a logical representation of what this software-defined controller framework looks like:

![Software-Defined Controller Framework](imagesv2/software_defined_controller.png)
Software-Defined Controller Framework