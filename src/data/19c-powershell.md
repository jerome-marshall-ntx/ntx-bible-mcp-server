---
layout: page
# set to "yes" (without quotes) if this page is part of a "book"
is_book: no
title: APIs
subtitle: PowerShell Cmdlets
versions:
    pc_version: 2023.1.0.1
    aos_version: 6.6
---

{% include pdf_download.html %}

### PowerShell Cmdlets

To get started with Nutanix PowerShell Cmdlets, see [PowerShell Cmdlets Reference](https://portal.nutanix.com/page/documents/details?targetId=PS-Cmdlets-AOS-v6_6:PS-Cmdlets-AOS-v6_6 "PowerShell Cmdlets Reference") on the [Nutanix Support Portal](https://my.nutanix.com "Nutanix Support Portal").

The below will cover the Nutanix PowerShell Cmdlets, how to use them and some general background on Windows PowerShell.

### PowerShell Versions

<!--
<style type="text/css">
  .alert-warning {
    border: 1px solid #4100a0;
    background-color: #F0F0F0;
    color: #131313;
    padding: 1em;
  }

  .alert-title {
    font-size: 155%;
    margin: 0 0 1em 0;
  }
</style>

<div class="alert alert-warning note">
<div class="alert-title">Legacy Nutanix Cmdlets Information</div>
The information in the following section applies to legacy Nutanix Cmdlets and PowerShell versions only. It has been left here for legacy support. Where possible, new users are recommended to install the latest version of both PowerShell and the Nutanix Cmdlets.
</div>
-->

At the time of writing, the latest available version is PowerShell 7.3.4

Commands outlined in this Nutanix Bible chapter may not apply to earlier PowerShell versions.

### Nutanix Cmdlets Versions

At the time of writing, the latest available version is Nutanix Cmdlets v2.0

Commands outlined in this Nutanix Bible chapter may not apply to other versions of the Nutanix Cmdlets.

### PowerShell Basics

Windows PowerShell is a powerful shell and scripting language built on the .NET framework. It is a very simple to use language and is built to be intuitive and interactive. Within PowerShell there are a few key constructs/Items:

#### Cmdlets

Cmdlets are commands or .NET classes which perform a particular operation.  They are usually conformed to the Getter/Setter methodology and typically use a Verb-Noun based structure. For example: Get-Process, Set-Partition, etc.

#### Piping Or Pipelining

Piping is an important construct in PowerShell (similar to its use in Linux) and can greatly simplify things when used correctly. With piping you’re essentially taking the output of one section of the pipeline and using that as input to the next section of the pipeline. The pipeline can be as long as required (assuming there remains output which is being fed to the next section of the pipe). A very simple example could be getting the current processes, finding those that match a particular trait or filter and then sorting them:

<pre><code class="language-powershell line-numbers">Get-Service | where {$_.Status -eq "Running"} | Sort-Object Name</code></pre>

Piping can also be used in place of for-each, for example:

<pre><code class="language-powershell line-numbers">
# For each item in my array
$myArray | %{
  # Do something
}
</code></pre>

#### Key Object Types

Below are a few of the key object types in PowerShell. You can easily get the object type by using the .getType() method, for example: $someVariable.getType() will return the objects type.

#### Variables

<pre><code class="language-powershell line-numbers">$myVariable = "foo"</code></pre>

Note: You can also set a variable to the output of a series or pipeline of commands:

<pre><code class="language-powershell line-numbers">$myVar2 = (Get-Service | where {$_.Status -eq "Running"})</code></pre>
<pre><code class="language-powershell line-numbers">$myVar3 = (Get-Process | where {$_.ProcessName -eq "Chrome"})</code></pre>

In this example the commands inside the parentheses will be evaluated first then variable will be the outcome of that.

#### Array

<pre><code class="language-powershell line-numbers">$myArray = @("Value","Value")</code></pre>

Note: You can also have an array of arrays, hash tables or custom objects

#### Hash Table

<pre><code class="language-powershell line-numbers">$myHash = @{"Key" = "Value";"Key" = "Value"}</code></pre>

#### Useful Commands

Get the help content for a particular Cmdlet (similar to a man page in Linux)

<pre><code class="language-powershell line-numbers">Get-Help Cmdlet Name</code></pre>

Example:
<pre><code class="language-powershell line-numbers">Get-Help Get-Process</code></pre>

List properties and methods of a command or object

<pre><code class="language-powershell line-numbers">&lt;expression or object&gt; | Get-Member</code></pre>

Example:
<pre><code class="language-powershell line-numbers">$someObject | Get-Member</code></pre>

#### Core Nutanix Cmdlets And Usage

The Nutanix Cmdlets can be downloaded directly from the Prism Central UI and can be found on the drop down in the upper right hand corner:

![Prism Cmdlets Installer Link](imagesv2/cmdlets_dl.png "Prism Cmdlets Installer Link")

### Nutanix Cmdlets v2.0 - Usage Examples

The current Nutanix Cmdlet v2.0 reference can be found on the [Nutanix Portal](https://portal.nutanix.com/page/documents/details?targetId=PS-Cmdlets-AOS-v6_6:ps-ps-V2.html "Nutanix Portal - Cmdlet v2.0 Reference").

#### List Nutanix Cmdlets

<pre><code class="language-powershell line-numbers">Get-Command -Module Nutanix.Prism.Common</code></pre>
<pre><code class="language-powershell line-numbers">Get-Command -Module Nutanix.Prism.Ps.Cmds</code></pre>

#### Connect To Prism Central

Prompt for all connection details and accept valid SSL certificates only:

<pre><code class="language-powershell line-numbers">Connect-PrismCentral</code></pre>

Supply connection details (excluding password), accept valid and invalid SSL certificates:

<pre><code class="language-powershell line-numbers">Connect-PrismCentral -AcceptInvalidSSLCerts -Server &lt;prism_central_ip_addres&gt; -UserName &lt;username&gt;</code></pre>

#### List All Virtual Machines

<pre><code class="language-powershell line-numbers">Get-VM</code></pre>

#### Get Nutanix VMs Matching A Certain String

Assign to variable:

<pre><code class="language-powershell line-numbers">$searchString = "my-vm-name"
$vms = Get-VM | where {$_.vmName -match $searchString}
</code></pre>

Interactive:

<pre><code class="language-powershell line-numbers">$myVm = Get-VM | where {$_.vmName -match "myVmName"}</code></pre>

Interactive and formatted:

<pre><code class="language-powershell line-numbers">$myVm = Get-VM | where {$_.vmName -match "myVmName"} | ft</code></pre>

#### List All Storage Containers

<pre><code class="language-powershell line-numbers">Get-StorageContainer</code></pre>

#### Get Storage Container With Similar Names

<pre><code class="language-powershell line-numbers">Get-StorageContainer | where {$_.name -like "Nutanix*"}</code></pre>

#### List All Networks

<pre><code class="language-powershell line-numbers">Get-Network</code></pre>

#### Get Specific Network By Name

<pre><code class="language-powershell line-numbers">Get-Network | where ${_.name -eq "Default"}</code></pre>

#### Disconnect From Prism Central

<pre><code class="language-powershell line-numbers">Disconnect-PrismCentral</code></pre>

<div data-type="note" class="note"><h6>Note</h6>
<h5>Legacy Nutanix Cmdlets Information</h5>

<p>The information in the following section applies to legacy Nutanix Cmdlets and PowerShell versions only. It has been left here for legacy support.  Where possible, new users are recommended to install the latest version of both PowerShell and the Nutanix Cmdlets.</p>
</div>

### Nutanix Cmdlets v1.0 - Usage Examples

The Nutanix Cmdlet v1.0 reference can be found on the [Nutanix Portal](https://portal.nutanix.com/page/documents/details?targetId=PS-Cmdlets-AOS-v6_6:ps-ps-V1.html "Nutanix Portal - Cmdlet v1.0 Reference").

#### Load Nutanix Snapin

Check if snapin is loaded and if not, load

<pre><code class="language-powershell line-numbers">if ( (Get-PSSnapin -Name NutanixCmdletsPSSnapin -ErrorAction SilentlyContinue) -eq $null )
{
    Add-PsSnapin NutanixCmdletsPSSnapin
}
</code></pre>

#### List Nutanix Cmdlets

<pre><code class="language-powershell line-numbers">Get-Command | Where-Object{$_.PSSnapin.Name -eq "NutanixCmdletsPSSnapin"}</code></pre>

#### Connect To A Nutanix cluster

<pre><code class="language-powershell line-numbers">Connect-NutanixCluster -Server $server -UserName "myuser" -Password (Read-Host "Password: " -AsSecureString) -AcceptInvalidSSLCerts
</code></pre>

#### Get Nutanix VMs Matching A Certain Search String

Set to variable

<pre><code class="language-powershell line-numbers">$searchString = "myVM"
$vms = Get-NTNXVM | where {$_.vmName -match $searchString}
</code></pre>

Interactive

<pre><code class="language-powershell line-numbers">Get-NTNXVM | where {$_.vmName -match "myString"}</code></pre>

Interactive and formatted

<pre><code class="language-powershell line-numbers">Get-NTNXVM | where {$_.vmName -match "myString"} | ft</code></pre>

#### Get Nutanix vDisks

Set to variable

<pre><code class="language-powershell line-numbers">$vdisks = Get-NTNXVDisk</code></pre>

Interactive

<pre><code class="language-powershell line-numbers">Get-NTNXVDisk</code></pre>

Interactive and formatted

<pre><code class="language-powershell line-numbers">Get-NTNXVDisk | ft</code></pre>

#### Get Nutanix Storage Containers

Set to variable

<pre><code class="language-powershell line-numbers">$containers = Get-NTNXContainer</code></pre>

Interactive

<pre><code class="language-powershell line-numbers">Get-NTNXContainer</code></pre>

Interactive and formatted

<pre><code class="language-powershell line-numbers">Get-NTNXContainer | ft</code></pre>

#### Get Nutanix Protection Domains

Assign to variable

<pre><code class="language-powershell line-numbers">$pds = Get-NTNXProtectionDomain</code></pre>

Interactive

<pre><code class="language-powershell line-numbers">Get-NTNXProtectionDomain</code></pre>

Interactive and formatted

<pre><code class="language-powershell line-numbers">Get-NTNXProtectionDomain | ft</code></pre>

#### Get Nutanix Consistency Groups

Set to variable

<pre><code class="language-powershell line-numbers">$cgs = Get-NTNXProtectionDomainConsistencyGroup</code></pre>

Interactive

<pre><code class="language-powershell line-numbers">Get-NTNXProtectionDomainConsistencyGroup</code></pre>

Interactive and formatted

<pre><code class="language-powershell line-numbers">Get-NTNXProtectionDomainConsistencyGroup | ft</code></pre>