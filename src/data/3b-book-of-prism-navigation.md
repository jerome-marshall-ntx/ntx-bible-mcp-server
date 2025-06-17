---
layout: page
# set to "yes" (without quotes) if this page is part of a "book"
is_book: no
title: Prism
subtitle: Navigation
---

{% include pdf_download.html %}

Prism is fairly straight forward and simple to use, however we'll cover some of the main pages and basic usage.

Prism Central (if deployed) can be accessed using the IP address specified during configuration or corresponding DNS entry.  Prism Element can be accessed via Prism Central (by clicking on a specific cluster) or by navigating to any Nutanix CVM or cluster IP (preferred).

Once the page has been loaded you will be greeted with the Login page where you will use your Prism or Active Directory credentials to login.

![](imagesv2/Prism/prism_login.png)
Prism Login Page

Upon successful login you will be sent to the dashboard page which will provide overview information for managed cluster(s) in Prism Central or the local cluster in Prism Element.

Prism Central and Prism Element will be covered in more detail in the following sections.

### Prism Central

The figure shows a sample Prism Central dashboard where multiple clusters can be monitored / managed:

![Prism Central - Dashboard](imagesv2/Prism/pc_dashboard.png)
Prism Central - Dashboard

From here you can monitor the overall status of your environment, and dive deeper if there are any alerts or items of interest.

Prism Central contains the following main pages (NOTE: Search is the preferred / recommended method to navigation):

* Home Page
	+ Environment wide monitoring dashboard including detailed information on service status, capacity planning, performance, tasks, etc. To get further information on any of them you can click on the item of interest.
* Virtual Infrastructure
	+ Virtual entities (e.g. VMs, containers, Images, categories, etc.)
* Policies
	+ Policy management and creation (e.g. security (FLOW), Protection (Backup/Replication), Recovery (DR), NGT)
* Hardware
	+ Physical devices management (e.g. clusters, hosts, disks, GPU)
* Activity
	+ Environment wide alerts, events and tasks
* Operations
	+ Operations dashboards, reporting and actions (X-Play)
* Administration
	+ Environment construct management (e.g. users, groups, roles, availability zones)
* Services
	+ Add-on service management (e.g. Calm, Karbon)
* Settings
	+ Prism Central configuration

To access the menu click on the hamburger icon::

![Prism Central - Hamburger Menu](imagesv2/Prism/pc_hamburger.png)
Prism Central - Hamburger

The menu expands to display the available options:

![Prism Central - Menu Bar](imagesv2/Prism/pc_menubar.png)
Prism Central - Menu Bar

#### Search

Search is now the primary mechanism for Navigating the Prism Central UI (menus are still available).

To use the search bar to navigate you can use the search bar in the top left corner next to the menu icon.

![Prism Central - Search](imagesv2/Prism/pc_search.png)
Prism Central - Search

<div data-type="note" class="note"><h6>Note</h6>
<h5>Search Semantics</h5>

<p>PC Search allows for a great deal of semantics to be leveraged, some examples include:</p>

<!--TODO: Fix table formatting -->

<table>
  <tr>
    <th>Rule</th>
    <th>Example</th>
  </tr>
  <tr>
    <td>Entity type</td>
    <td>vms</td>
  </tr>
  <tr>
    <td>Entity type + metric perspective (io, cpu, memory)</td>
    <td>vms io</td>
  </tr>
  <tr>
    <td>Entity type + alerts</td>
    <td>vm alerts</td>
  </tr>
  <tr>
    <td>Entity type + alerts + alert filters</td>
    <td>vm alerts severity=critical</td>
  </tr>
  <tr>
    <td>Entity type + events</td>
    <td>vm events</td>
  </tr>
  <tr>
    <td>Entity type + events + event filters</td>
    <td>vm events classification=anomaly</td>
  </tr>
  <tr>
    <td>Entity type + filters (both metric and attribute)</td>
    <td>vm “power state”=on</td>
  </tr>
  <tr>
    <td>Entity type + filters + metric perspective (io, cpu, memory)</td>
    <td>vm “power state”=on io</td>
  </tr>
  <tr>
    <td>Entity type + filters + alerts</td>
    <td>vm “power state”=on alerts</td>
  </tr>
  <tr>
    <td>Entity type + filters + alerts  + (alert filters)</td>
    <td>vm “power state”=on alerts severity=critical</td>
  </tr>
  <tr>
    <td>Entity type + filters + events</td>
    <td>vm “power state”=on events</td>
  </tr>
  <tr>
    <td>Entity type + filters + events + event filters</td>
    <td>vm “power state”=on events classification=anomaly</td>
  </tr>
  <tr>
    <td>Entity instance (name, ip address, disk serial etc)</td>
    <td>vm1, 10.1.3.4, BHTXSPWRM</td>
  </tr>
  <tr>
    <td>Entity instance + Metric perspective (io, cpu, memory)</td>
    <td>vm1 io</td>
  </tr>
  <tr>
    <td>Entity instance + alerts</td>
    <td>vm1 alerts</td>
  </tr>
  <tr>
    <td>Entity instance + alerts + alert filters</td>
    <td>vm1 alerts severity=critical</td>
  </tr>
  <tr>
    <td>Entity instance + events</td>
    <td>vm1 events</td>
  </tr>
  <tr>
    <td>Entity instance + events + event filters</td>
    <td>vm1 events classification=anomaly</td>
  </tr>
  <tr>
    <td>Entity instance + pages</td>
    <td>vm1 nics, c1 capacity</td>
  </tr>
  <tr>
    <td>Parent instance + entity type</td>
    <td>c1 vms</td>
  </tr>
  <tr>
    <td>Alert title search</td>
    <td>Disk bad alerts</td>
  </tr>
  <tr>
    <td>Page name search</td>
    <td>Analysis, tasks</td>
  </tr>
</table>

<p>The prior is just a small subset of the semantics, the best way to get familiar with them is to give it a shot!</p>

</div>

### Prism Element

Prism Element contains the following main pages:

* Home Page
	+ Local cluster monitoring dashboard including detailed information on alerts, capacity, performance, health, tasks, etc. To get further information on any of them you can click on the item of interest.
* Health Page
	+ Environment, hardware and managed object health and state information. Includes NCC health check status as well.
* VM Page
	+ Full VM management, monitoring and CRUD (AOS)
* Storage Page
	+ Container management, monitoring and CRUD
* Hardware
	+ Server, disk and network management, monitoring and health. Includes cluster expansion as well as node and disk removal.
* Data Protection
	+ DR, Cloud Connect and Metro Availability configuration. Management of PD objects, snapshots, replication and restore.
* Analysis
	+ Detailed performance analysis for cluster and managed objects with event correlation
* Alerts
	+ Local cluster and environment alerts

The home page will provide detailed information on alerts, service status, capacity, performance, tasks, and much more.  To get further information on any of them you can click on the item of interest.

The figure shows a sample Prism Element dashboard where local cluster details are displayed:

![Prism Element - Dashboard](imagesv2/Prism/PE_dashboard.png)
Prism Element - Dashboard

<div data-type="note" class="note" id="keyboard-shortcuts-53i0FXfDS9"><h6>Note</h6>
<h5>Keyboard Shortcuts</h5>

<p>Accessibility and ease of use is a critical construct in Prism. &nbsp;To simplify things for the end-user a set of shortcuts have been added to allow users to do everything from their keyboard.</p>

<p>The following characterizes some of the key shortcuts:</p>

<p>Change view (page context aware):</p>

<ul>
	<li>O - Overview View</li>
	<li>D - Diagram View</li>
	<li>T - Table View</li>
</ul>

<p>Activities and Events:</p>

<ul>
	<li>A - Alerts</li>
	<li>P - Tasks</li>
</ul>

<p>Drop down and Menus (Navigate selection using arrow keys):</p>

<ul>
	<li>M - Menu drop-down</li>
	<li>S - Settings (gear icon)</li>
	<li>F - Search bar</li>
	<li>U - User drop down</li>
	<li>H - Help</li>
</ul>
</div>
