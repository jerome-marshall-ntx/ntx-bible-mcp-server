---
layout: page
# set to "yes" (without quotes) if this page is part of a "book"
is_book: no
title: Cloud Management
subtitle: Intelligent Operations
versions:
    pc_version: 2023.1.0.1
    aos_version: 6.6
---

{% include pdf_download.html %}

In the following sections we'll cover some key features that are part of Nutanix Intelligent Operations.

**NOTE:** Not all features are currently covered. In this section, we currently cover:

* [Anomaly Detection](14a-book-of-cloud-management-aiops.html#anomaly-detection)
* [Capacity Planning](14a-book-of-cloud-management-aiops.html#capacity-planning)
* [Low-code/no-code Automation with X-Play](14a-book-of-cloud-management-aiops.html#x-play)

Stay tuned for updates for the rest of the features in Intelligent Operations:

* Reporting
* Non-Nutanix ESXi Monitoring (i.e. monitoring 3-tier ESXi)
* SQL Monitoring
* Application Discovery
* Self-Tuning with Machine Learning (X-Pilot)
### Anomaly Detection

In the world of IT operations there is a lot of noise. Traditionally systems would generate a great deal of alerts, events and notifications, often leading to the operator either a) not seeing critical alerts since they are lost in the noise or b) disregarding the alerts/events.

With the Anomaly Detection feature of Intelligent Operations, the system will monitor seasonal trends for time-series data (e.g. CPU usage, memory usage, latency, etc.) and establish a "band" of expected values. Only values that hit outside the "band" will trigger an event / alert. You can see the anomaly events / alerts from any entity or events page.

The following chart shows a lot of I/O and disk usage anomalies as we were performing some large batch loads on these systems:

![Anomaly Chart](imagesv2/Prism/anomaly_chart.png)
Anomaly Chart

The following image shows the time-series values for a sample metric and the established "band":

![Anomaly Band](imagesv2/Prism/anomaly_1.png)
Anomaly Band

This reduces unnecessary alerts as we don't want alerts for a "normal" state. For example, a database system will normally run at >95% memory utilization due to caching, etc. In the event this drops to say 10% that would be an anomaly as something may be wrong (e.g. database service down).

Another example would be how some batched workloads run on the weekend. For example, I/O bandwidth may be low during the work week, however on the weekends when some batch processes run (e.g. backups, reports, etc.) there may be a large spike in I/O. The system would detect the seasonality of this and bump up the band during the weekend.

Here you can see an anomaly event has occured as the values are outside the expected band:

![Anomaly Event](imagesv2/Prism/anomaly_2.png)
Anomaly Event

Another topic of interest for anomalies is seasonality. For example, during the holiday period retailers will see higher demand than other times of the year, or during the end of month close.

Anomaly detection accounts for this seasonality and leverages the following periods to compare between micro (daily) and macro (quarterly) trends:

* Daily
* Weekly
* Monthly

You can also set your own custom alerts (also called user-defined alerts), that enables you to alert on behavioral anomalies or static thresholds:

![Anomaly Custom Event](imagesv2/Prism/anomaly_3.png)
Anomaly Custom Event

<div data-type="note" class="note"><h6>Note</h6>
<h5>Anomaly Detection Algorithm</h5>

<p>Nutanix leverages a method for determining the bands called 'Generalized Extreme Studentized Deviate Test'.  A simple way to think about this is similar to a confidence interval where the values are between the lower and upper limits established by the algorithm.</p>

<p>The algorithm requires 3 x the granularity (e.g. daily, weekly, monthly, etc.) to calculate the seasonality and expected bands.  For example, the following amounts of data would be required to adapt to each seasonality:</p>

<ul>
  <li>Daily: 3 days</li>
  <li>Weekly: 3 weeks (21 days)</li>
  <li>Monthly: 3 months (90 days)</li>
  <!--<li>Quarterly: 3 quarters (270 days)</li>-->
</ul>

<p>Twitter has a good resource on how they leverage this which goes into more detail on the logic: <a href="https://blog.twitter.com/engineering/en_us/a/2015/introducing-practical-and-robust-anomaly-detection-in-a-time-series.html" target="_blank">LINK</a></p>
</div>

<!-- ### User Defined Alerts

User defined alerts enable you to create your own custom alert policies, for example for defining individual VM resource usage thresholds you wish to be alerted at. For example, maybe you want to create an alert to trigger when a VM's memory usage is above a specified threshold. To get started, navigate to **Activity > Alerts** in the Prism Central Infrastructure menu.

![User-Defined Alerts](imagesv2/Prism/alerts/alerts_1.png)
User-Defined Alerts - Navigation -->
### Capacity Planning

To get detailed capacity planning details you can click on a specific cluster under the 'cluster runway' section in Prism Central to get more details:

![Capacity Planning](imagesv2/Prism/pc_capplanner.png)
Capacity Planning

This view provides detailed information on cluster runway and identifies the most constrained resource (limiting resource).  You can also get detailed information on what the top consumers are as well as some potential options to clean up additional capacity or ideal node types for cluster expansion.

![Capacity Planning - Recommendations](imagesv2/Prism/pc_recommendation.png)
Capacity Planning - Recommendations

### X-Play

When we think about our daily activities the more we can automate the better. We are constantly doing this in our daily lives with our routines and technology enables us to do the same in other areas. Nutanix X-Play (pronounced CrossPlay) allows us to automate a common set of activities. However, before diving into the product, let's first cover what we're trying to do.

Event driven automation works in the following manner:

event(s) → logic → action(s) 

In this scenario there's some sort of event (or cascading events) that occur which triggers a series or set of actions. A great example of this is [IFTTT](https://ifttt.com/) which takes an event, applies some logic (hence the 'if this then that' acronym), then performs some action.

For example, take turning off the lights at home when we leave. If we can program the event (e.g. leaving home / device not present) to trigger the system to turn off all the lights automatically, that makes our lives much simpler.

If we compare this to our IT operations activities we see a similar pattern. An event occurs (e.g. a VM needs more disk space) and then we perform a series of actions (e.g. create a ticket, add storage, close ticket etc.). These repetitive activies are a perfect example of where automation can add value and enable us to focus on more beneficial activities.

With X-Play we can take a series of events / alerts and allow the system to intercept those and perform a series of actions.

To get started navigate to the 'Plays' section under 'Operations' in the Infrastructure menu:

![X-Play - Navigation](imagesv2/Prism/xplay/xplay_0.png)
X-Play - Navigation

This will launch the main X-Play page:

![X-Play - Playbooks Overview](imagesv2/Prism/xplay/xplay_1.png)
X-Play - Playbooks Overview

Click on 'Get Started' to view the current plays and/or create a new one:

![X-Play - Playbooks](imagesv2/Prism/xplay/xplay_2a.png)
X-Play - Playbooks

From here you can create a new playbook by first defining the trigger:

![X-Play - Trigger](imagesv2/Prism/xplay/xplay_2b.png)
X-Play - Trigger

The following shows an example trigger which is based upon a user-defined alert policy:

![X-Play - Trigger - User Defined Alert](imagesv2/Prism/xplay/xplay_3a.png)
X-Play - Trigger - User Defined Alert

Once the trigger has been defined, you now specify a series of actions. The following shows some sample actions:

![X-Play - Actions](imagesv2/Prism/xplay/xplay_4.png)
X-Play - Actions

You then input the details for the action, this shows a sample REST API call:

![X-Play - Sample REST Action](imagesv2/Prism/xplay/xplay_4a.png)
X-Play - Sample REST Action

<div data-type="note" class="note"><h6>Note</h6>
<h5>REST API Actions and External Systems</h5>

<p>X-Play provides a multitude of default actions like sending email, sending a slack message, as well as others like performing a REST API call.</p>

<p>This is critical when we think about interfacing with external systems like a CMDB or other ticketing / automation tools.  By using a REST API action we can interface with those to create / resolve tickets, kick off other workflows, etc.  This is an extremely powerful option as it enables all systems to be in sync.</p>
</div>

For entity / event specific details you can use the 'parameters' variables which will give you details about the event, entity and others:

![X-Play - Action Parameters](imagesv2/Prism/xplay/xplay_4b.png)
X-Play - Action Parameters

Once complete you can save you play and it will start to execute as defined.

The following shows a sample play whith multiple actions performed:

![X-Play - Sample Playbook](imagesv2/Prism/xplay/xplay_5.png)
X-Play - Sample Playbook

The plays tab will show execution time of the play and status:

![X-Play - Plays Executed](imagesv2/Prism/xplay/xplay_6.png)
X-Play - Plays Executed

For some example playbooks that you can import into your own instance, check out the [Playbooks Library](https://www.nutanix.dev/playbooks/) on nutanix.dev!

Also, check out [Getting Started with Nutanix X-Play](https://www.nutanix.dev/2022/01/19/getting-started-with-nutanix-x-play/) for more examples and references.