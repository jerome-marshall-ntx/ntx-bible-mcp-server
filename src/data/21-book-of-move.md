---
layout: page
# set to "yes" (without quotes) if this page is part of a "book"
is_book: yes
is_section_toc: yes
# don't include "Book of" in this variable
title: Migrating to Nutanix
subtitle:
---

{% include pdf_download.html %}

### Nutanix Move
Nutanix Move (or simply Move) is a cross-hypervisor mobility solution that migrates virtual machines (VMs) and files with minimal downtime. Move is free to Nutanix customers and can be downloaded from the <a href="https://portal.nutanix.com" target="blank">Nutanix Support Portal</a>.

#### VM Migration Methodology
With Move, you can choose to migrate using infrastructure-centric or application-centric migration.
* Infrastructure-centric migration works well when the legacy infrastructure and the Nutanix Cloud platform have access to the same VLANs.
* Application-centric migration works well when you want to move an application and all the servers that support the application, such as files and databases.

![Migration Methodology](imagesv3/migrationmeth.png)

For more information on Nutanix Move, check out the following resources:
* <a href="https://www.nutanix.com/solutions/application-mobility" target="_blank">Nutanix.com Application Mobility Solutions Page</a>
* <a href="https://bcove.video/3T7rGoj" target="_blank">DEMO: Nutanix Move Overview</a>

This book will cover Nutanix Move architecture and migration in the following chapters:
