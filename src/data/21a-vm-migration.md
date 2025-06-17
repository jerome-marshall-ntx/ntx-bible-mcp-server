---
layout: page
# set to "yes" (without quotes) if this page is part of a "book"
is_book: yes
# don't include "Book of" in this variable
title: Migrating to Nutanix
subtitle: VM Migrations
---

{% include pdf_download.html %}

<div data-type="noteEmbedded" class="noteEmbedded"><h6>Note</h6>
	<img width="238px" alt="Test Drive" src="/assets/icons/testdrive/icn-test-drive-black.png">
	<p>Interested in getting hands-on with a VM Migration with Nutanix Move? Take it for a spin with Nutanix Test Drive!</p>
	<a href="https://cloud.nutanixtestdrive.com/login?source=one-platform&type=move&lpurl=one-platform-move?utm_source=nutanixbible&utm_medium=referral" target="_blank">https://www.nutanix.com/test-drive-migrate-applications</a>
</div>

Nutanix Move can migrate VMs onto the Nutanix Cloud Platform from many different hypervisors such as ESXi and Hyper-V as well as from AWS EC2, VMware Cloud (VMC) on AWS and Microsoft Azure. For the most up-to-date listing of supported migrations check the <a href="https://portal.nutanix.com/page/documents/details?targetId=Nutanix-Move-v5_3:Nutanix-Move-v5_3" target='_blank'>Move user guide</a>.

Move allows you to create different migration plans to migrate your VMs. Below are some best practices for VM migration plans.

#### VM Migration Best Practices
* Group VMs for Migration
  * Migrate in parallel from multiple hosts
  * Max of 50 VMs per Migration Plan
    * Migrations for ESXi Support up to 100 max VMs
* Optimize your Schedule
  * Pre-seed VM data in advance of cutover
  * Cutover should be within one week of the initial pre-seed
  * Elongated seeding windows can incur additional disk usage in the source VM.
* Guest OS Preparation
  * Two key reasons why VM prep fails:
    * UAC and WinRM
  * Switch to Manual mode to troubleshoot VM preparation issues
* DB Server Migrations
  * Move supports “like for like” migrations
  * DB Server migrations should follow best practices and may require re-platforming
  * Move can migrate Databases, but you need to apply best practices after migrations
