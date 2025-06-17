---
layout: page
# set to "yes" (without quotes) if this page is part of a "book"
is_book: no
title: Backup/DR Services
subtitle: Leap (Policy Driven DR / Run Books)
---

{% include pdf_download.html %}

<div data-type="noteEmbedded" class="noteEmbedded"><h6>Note</h6>
	<img width="238px" alt="Test Drive" src="/assets/icons/testdrive/icn-test-drive-color.png">
	<p>For those who are interested in getting hands on, take it for a spin with Nutanix Test Drive!</p>
	<a href="https://www.nutanix.com/test-drive-disaster-recovery?utm_source=nutanixbible&utm_medium=referral" target="_blank">https://www.nutanix.com/test-drive-disaster-recovery</a>
</div>

The Nutanix Leap feature provides policy driven backup, DR and run book automation services configured via Prism Central (PC). This capability builds upon and extends the native DR and replications features that have been availble in AOS and configured in PE for years. For more information on the actual back-end mechanism being leveraged for replication, etc. refer to the 'Backup and Disaster Recovery (DR)' section in the 'AOS' section. Leap was introduced in AOS 5.10.

##### Supported Configurations

The solution is applicable to the configurations below (list may be incomplete, refer to documentation for a fully supported list):

Core Use Case(s):

* Policy based backups and replication
* DR run book automation
* DRaaS (via Xi)

Management interfaces(s):

*  Prism Central (PC)

Supported Environment(s):

*  On-Prem:
	+ AHV (As of AOS 5.10)
	+ ESXi (As of AOS 5.11)
* Cloud:
	+ Xi (As of AOS 5.10)

Upgrades:

*  Part of AOS

Compatible Features:

*  AOS BC/DR features

##### Key terms

The following key terms are used throughout this section and defined in the following:

* Recovery Point Objective (RPO)
	+  Refers to the acceptable data loss in the event of a failure. For example, if you want an RPO of 1 hour, you'd take a snapshot every 1 hour. In the event of a restore, you'd be restoring data as of up to 1 hour ago. For synchronous replication typically an RPO of 0 is achieved.
* Recovery Time Objective (RTO)
	+  Recovery time objective. Refers to the period of time from failure event to restored service. For example, if a failure occurs and you need things to be back up and running in 30 minutes, you'd have an RTO of 30 minutes.
* Recovery Point
	+  A restoration point aka snapshot.

##### Implementation Constructs

Within Nutanix Leap, there are a few key constructs:

##### Protection Policy

* Key Role: Backup/Replication policy for assigned categories
* Description: A protection policy defines the RPO (snap frequency), recovery location (remote cluster / Xi), snapshot retention (local vs. remote cluster), and associated categories. With Protection Policies everything is applied at the category level (with a default that can apply to any/all). This is different from Protection Domains where you have to select VM(s).

The following image shows the structure of the Nutanix Leap Protection Policy:

![Leap - Protection Policy](imagesv2/leap_1.png)
Leap - Protection Policy

##### Recovery Plan

* Key Role: DR run book
* Description: A Recovery Plan is a run book that defines the power on sequencing (can specify categories or VMs) and network mapping (primary vs. recovery and test failover / failback). This is most synonymous with what people would leverage SRM for. NOTE: a Protection Policy must be configured before a Recovery Plan can be configured. This is necessary as the data must exist at the recovery site in order for it to be recovered.

The following image shows the structure of the Nutanix Leap Recovery Plan:

![Leap - Recovery Plan](imagesv2/leap_2.png)
Leap - Recovery Plan

##### Linear Retention Policy

* Key Role: Recovery Point retention policy
* Description: A linear retention policy specifies the number of recovery points to retain. For example, if the RPO is 1 hour and your retention is set to 10, you'd keep 10 hours (10 x 1 hour) of recovery points (snaps).

##### Roll-up Retention Policy

* Key Role: Recovery Point retention policy
* Description: A roll-up retention policy will "roll-up" snaps dependent on the RPO and retention duration. For example, if the RPO is 1 hour and your retention is set to 5 days it'll keep 1 day of hourly and 4 days of daily recovery points. The logic can be characterized as follows: If retention is n days, keep 1 day of RPO and n-1 days of daily recovery points. If retention is n weeks, keep 1 day of RPO and 1 week of daily and n-1 weeks of weekly recovery points. If retention is n months, keep 1 day of RPO and 1 week of daily and 1 month of weekly and n-1 months of monthly recovery points. If retention is n years, keep 1 day of RPO and 1 week of daily and 1 month of weekly and n-1 months of monthly recovery points.

<div data-type="note" class="note" id="linearvsrollupretention"><h6>Note</h6>
<h5>Linear vs. roll-up retention</h5>

<p>Use linear policies for small RPO windows with shorter retention periods or in cases where you always need to be able to recover to a specific RPO window.</p>

<p>Use roll-up policies for anything with a longer retention period.  They're more flexible and automatically handle snapshot aging / pruning while still providing granular RPOs for the first day.</p>
</div>

The following shows a high-level overview of the Leap constructs:

![Leap - Overview](imagesv2/leap_0.png)
Leap - Overview

The following shows how Leap can replicate between on-premises and Xi:

![Leap - topology](imagesv2/leap_3.png)
Leap - Topology

##### Usage and Configuration

The following sections cover how to configure and leverage Leap.

The high-level process can be characterized into the following high-level steps:

1. Connect to Availability Zones (AZs)
2. Configure Protection Policies
3. Configure Recovery Plan(s)
4. Perform/Test Failover & Failback

##### Connect Availability Zone(s)

The first step is connecting to an AZ which can be a Xi AZ or another PC. NOTE: As of 5.11 you will need at least 2 PCs deployed (1 for each site).

In PC, search for 'Availability Zones' or navigate to 'Administration' -> 'Availability Zones':

![Leap - Connect to Availability Zone](imagesv2/leap/az_1.png)
Leap - Connect to Availability Zone

Click on 'Connect to Availability Zone' and select the AZ Type ('Xi' or 'Physical Location' aka PC instance):

![Leap - Connect to Availability Zone](imagesv2/leap/az_2.png)
Leap - Connect to Availability Zone

Input credentials for PC or Xi and click 'Connect':


![Leap - Connect to Availability Zone](imagesv2/leap/az_3.png)
Leap - Connect to Availability Zone

The connected AZ will now be displayed and be available.

##### Configure Protection Policies

In PC, search for 'Protection Policies' or navigate to 'Policies' -> 'Protection Policies':

![Leap - Protection Policies](imagesv2/leap/pp_1.png)
Leap - Protection Policies

Click on 'Create Protection Policy':

![Leap - Protection Policy](imagesv2/leap/pp_2.png)
Leap - Create Protection Policy

Input details for the name, recovery location, RPO and retention policy (describe previously):

![Leap - Protection Policy Inputs](imagesv2/leap/pp_3.png)
Leap - Protection Policy Inputs

NOTE: for Xi you don't need select a 'Target Cluster':

![Leap - Protection Policy Inputs - Xi](imagesv2/leap/pp_3b.png)
Leap - Protection Policy Inputs - Xi

Next we'll select the categories for the policy to apply to:

![Leap - Protection Categories](imagesv2/leap/pp_4.png)
Leap - Protection Policy Categories

Click 'Save' and you will now see the newly created Protection Policy:

![Leap - Protection Policies](imagesv2/leap/pp_5.png)
Leap - Protection Policies

##### Configure Recovery Plans

In PC, search for 'Recovery Plans' or navigate to 'Policies' -> 'Recovery Plans':

![Leap - Recovery Plans](imagesv2/leap/pp_1.png)
Leap - Recovery Plans

On the first launch you will be greeted with a screen to create the first Recovery Plan:

![Leap - Create Recovery Plan](imagesv2/leap/rp_1.png)
Leap - Create Recovery Plan

Select the 'Recovery Location' using the drop down:

![Leap - Select Recovery Location](imagesv2/leap/rp_2.png)
Leap - Select Recovery Location

NOTE: This can be either a Xi AZ or Physical AZ (PC with corresponding managed clusters).

Input the Recovery Plan name and description and click 'Next':

![Leap - Recovery Plan - Naming](imagesv2/leap/rp_3.png)
Leap - Recovery Plan - Naming

Next click on 'Add Entities' and specify the power on sequence:

![Leap - Recovery Plan - Power On Sequence](imagesv2/leap/rp_4a.png)
Leap - Recovery Plan - Power On Sequence

Search for VMs or Categories to add to each stage:

![Leap - Recovery Plan - Power On Sequence](imagesv2/leap/rp_4b.png)
Leap - Recovery Plan - Power On Sequence

Once the power on sequence looks good with the stages, click 'Next':

![Leap - Recovery Plan - Power On Sequence](imagesv2/leap/rp_4c.png)
Leap - Recovery Plan - Power On Sequence

<div data-type="note" class="note"><h6>Note</h6>
<h5>Power On Sequencing</h5>

<p>When determining the power on sequence you will want to stage things as follows:</p>

<ul>
  <li>Stage 0: Core services (AD, DNS, etc.)</li>
  <li>Stage 1: Services dependent on Stage 0 services, and required for Stage 2 services (e.g. DB Tier)</li>
  <li>Stage 2: Services dependent on Stage 1 services, and required for Stage 3 services (e.g. App Tier)</li>
  <li>Stage 3: Services dependent on Stage 2 services, and required for Stage 4 services (e.g. Web Tier)</li>
  <li>Stage 4-N: Repeat based upon dependencies</li>
</ul>

</div>

We will now map the network between our source and target environments:

![Leap - Recovery Plan - Network Mapping](imagesv2/leap/rp_5.png)
Leap - Recovery Plan - Network Mapping

<div data-type="note" class="note"><h6>Note</h6>
<h5>Failover / Failback  Networks</h5>

<p>In most cases you will want to use a non-routable or isolated network for your test networks.  This will ensure you don't have any issues with duplicate SIDs, arp entries, etc.</p>

</div>
