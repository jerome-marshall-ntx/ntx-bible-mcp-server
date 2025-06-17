---
layout: page
# set to "yes" (without quotes) if this page is part of a "book"
is_book: no
title: Hyper-V
subtitle: How Hyper-V on Nutanix Works
---

{% include pdf_download.html %}

### Array Offloads – ODX

The Nutanix platform supports the Microsoft Offloaded Data Transfers (ODX), which allow the hypervisor to offload certain tasks to the array.  This is much more efficient as the hypervisor doesn’t need to be the 'man in the middle'. Nutanix currently supports the ODX primitives for SMB, which include full copy and zeroing operations.  However, contrary to VAAI which has a 'fast file' clone operation (using writable snapshots), the ODX primitives do not have an equivalent and perform a full copy.  Given this, it is more efficient to rely on the native DSF clones which can currently be invoked via nCLI, REST, or PowerShell CMDlets. Currently ODX IS invoked for the following operations:

* In VM or VM to VM file copy on DSF SMB share
* SMB share file copy

Deploy the template from the SCVMM Library (DSF SMB share) – NOTE: Shares must be added to the SCVMM cluster using short names (e.g., not FQDN).  An easy way to force this is to add an entry into the hosts file for the cluster (e.g. 10.10.10.10     nutanix-130).

ODX is NOT invoked for the following operations:

* Clone VM through SCVMM
* Deploy template from SCVMM Library (non-DSF SMB Share)
* XenDesktop Clone Deployment

You can validate ODX operations are taking place by using the "NFS Adapter" Activity Traces page (even though this is being performed via SMB).  The operations activity show will be "NfsWorkerVaaiCopyDataOp" when copying a vDisk and "NfsWorkerVaaiWriteZerosOp" when zeroing out a disk.